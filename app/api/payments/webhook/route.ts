import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'
import { createServerClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 501 })
    }

    const body = await request.text()
    const signature = (await headers()).get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
    if (!webhookSecret) {
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    let event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const supabase = createServerClient()

    // Handle payment success
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as any
      const donationId = paymentIntent.metadata.donation_id

      if (donationId) {
        // Update donation status
        await supabase
          .from('donations')
          .update({
            payment_status: 'completed',
            receipt_url: paymentIntent.receipt_url || null,
          })
          .eq('id', donationId)

        // If user exists, link donation to user by email
        const { data: donation } = await supabase
          .from('donations')
          .select('email')
          .eq('id', donationId)
          .single()

        if (donation?.email) {
          // Update all donations with this email to link to user if they sign up later
          // This will be handled when user signs in with same email
        }
      }
    }

    // Handle payment failure
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as any
      const donationId = paymentIntent.metadata.donation_id

      if (donationId) {
        await supabase
          .from('donations')
          .update({ payment_status: 'failed' })
          .eq('id', donationId)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

