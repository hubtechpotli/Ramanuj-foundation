import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 501 })
    }

    const { donationId, amount, email, name } = await request.json()

    if (!donationId || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to paise (smallest currency unit)
      currency: 'inr',
      metadata: {
        donation_id: donationId,
        email: email,
        name: name,
      },
      receipt_email: email,
    })

    // Update donation with payment intent ID
    const supabase = createServerClient()
    await supabase
      .from('donations')
      .update({ payment_intent_id: paymentIntent.id })
      .eq('id', donationId)

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json({ error: 'Failed to create payment intent' }, { status: 500 })
  }
}

