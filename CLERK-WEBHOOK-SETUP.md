# Clerk Webhook Setup Guide

## Why Webhooks?

Webhooks automatically sync users from Clerk to Supabase **immediately** when they:
- Sign up
- Sign in
- Update their profile

This ensures users are always in your Supabase database, even if they don't visit the dashboard.

## Setup Steps

### 1. Get Your Webhook Secret

1. Go to your Clerk Dashboard
2. Navigate to **Webhooks** in the sidebar
3. Click **Add Endpoint**
4. Enter your webhook URL: `https://yourdomain.com/api/webhooks/clerk`
5. Select events to listen to:
   - ✅ `user.created`
   - ✅ `user.updated`
6. Click **Create**
7. Copy the **Signing Secret** (starts with `whsec_`)

### 2. Add to Environment Variables

Add this to your `.env.local`:

```bash
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. Test the Webhook

1. Sign up a new user in your app
2. Check Supabase `users` table - user should appear automatically
3. Update user profile in Clerk
4. Check Supabase - user should be updated

## How It Works

1. **User signs up** → Clerk sends `user.created` webhook
2. **Webhook handler** receives the event
3. **User data synced** to Supabase `users` table
4. **User appears** in database immediately

## Local Development

For local development, use a tool like:
- **ngrok**: `ngrok http 3000`
- **Clerk Dev Webhooks**: Use Clerk's development webhook testing

Then set webhook URL to: `https://your-ngrok-url.ngrok.io/api/webhooks/clerk`

## Verification

The webhook handler:
- ✅ Verifies webhook signature (security)
- ✅ Handles `user.created` events
- ✅ Handles `user.updated` events
- ✅ Syncs user data to Supabase
- ✅ Updates `last_sign_in_at` timestamp

## Troubleshooting

1. **Users not syncing**: Check webhook secret in `.env.local`
2. **Webhook not receiving events**: Verify webhook URL in Clerk dashboard
3. **Database errors**: Check Supabase connection and RLS policies

