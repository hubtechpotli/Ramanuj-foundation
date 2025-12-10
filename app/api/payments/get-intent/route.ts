import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const donationId = searchParams.get('donationId')

    if (!donationId) {
      return NextResponse.json({ error: 'Missing donation ID' }, { status: 400 })
    }

    const supabase = createServerClient()

    // Get donation with payment intent
    const { data: donation, error } = await supabase
      .from('donations')
      .select('payment_intent_id')
      .eq('id', donationId)
      .single()

    if (error || !donation?.payment_intent_id) {
      return NextResponse.json({ error: 'Donation or payment intent not found' }, { status: 404 })
    }

    // Retrieve payment intent from Stripe to get client secret
    // Note: In production, you might want to store the client secret temporarily
    // For now, we'll return the payment intent ID and let the client handle it
    return NextResponse.json({
      paymentIntentId: donation.payment_intent_id,
      message: 'Please use the stored client secret from session',
    })
  } catch (error) {
    console.error('Error fetching payment intent:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

