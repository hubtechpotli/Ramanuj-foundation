import { NextRequest, NextResponse } from 'next/server'
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createServerClient } from '@/lib/supabase/server'

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  // Get the Svix headers for verification
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({ error: 'Missing svix headers' }, { status: 400 })
  }

  // Get the body
  const payload = await request.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret
  const wh = new Webhook(webhookSecret)

  let evt: any

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 400 })
  }

  // Handle the webhook
  const eventType = evt.type

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const user = evt.data

    try {
      const supabase = createServerClient()

      // Get user's primary email
      const email = user.email_addresses?.[0]?.email_address || user.primary_email_address?.email_address || ''
      const firstName = user.first_name || ''
      const lastName = user.last_name || ''
      const imageUrl = user.image_url || ''

      // Upsert user to Supabase
      const { data: dbUser, error } = await supabase
        .from('users')
        .upsert(
          {
            clerk_user_id: user.id,
            email: email,
            first_name: firstName,
            last_name: lastName,
            image_url: imageUrl,
            last_sign_in_at: eventType === 'user.updated' ? new Date().toISOString() : null,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'clerk_user_id',
            ignoreDuplicates: false,
          }
        )
        .select()
        .single()

      if (error) {
        console.error('Error syncing user from webhook:', error)
        return NextResponse.json({ error: 'Failed to sync user' }, { status: 500 })
      }

      console.log('User synced successfully:', dbUser?.clerk_user_id)
    } catch (error) {
      console.error('Error processing webhook:', error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}

