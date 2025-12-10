# Setup Instructions for Donation System

This guide will help you set up the complete donation system with Supabase, Clerk, and Stripe.

## Prerequisites

1. A Supabase account (https://supabase.com)
2. A Clerk account (https://clerk.com)
3. A Stripe account (https://stripe.com)

## Step 1: Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Go to **SQL Editor** in your Supabase dashboard
3. Run the SQL from `supabase-migration.sql` to create the donations table
4. Go to **Settings** > **API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` `secret` key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Step 2: Clerk Setup

1. Create a Clerk account at https://clerk.com
2. Create a new application
3. Go to **API Keys** and copy:
   - Publishable Key → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Secret Key → `CLERK_SECRET_KEY`

## Step 3: Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Go to **Developers** > **API keys**
3. Copy:
   - Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret key → `STRIPE_SECRET_KEY`
4. Go to **Developers** > **Webhooks**
5. Click **Add endpoint**
6. Set endpoint URL to: `https://yourdomain.com/api/payments/webhook`
7. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
8. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

## Step 4: Environment Variables

Create a `.env.local` file in your project root:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Step 5: Install Dependencies

```bash
npm install
```

## Step 6: Run the Application

```bash
npm run dev
```

## Features

### For Guests (Not Signed In)
- Users can make donations without signing in
- Donations are saved with email address
- After payment, users receive a receipt via email

### For Signed-In Users
- Access to protected dashboard at `/dashboard`
- View all donation history
- Make donations directly from dashboard
- Automatic linking of guest donations when signing in with the same email

### Dashboard Features
- **Stats Cards**: Total donated, total donations, pending payments
- **Make Donation Tab**: Complete donation form with payment integration
- **Donation History Tab**: View all past donations with receipts
- **Receipt Generation**: Download receipts for completed donations

## How It Works

1. **Guest Donation Flow**:
   - User fills donation form on `/donate` page
   - Donation record created in Supabase (without user_id)
   - Payment processed via Stripe
   - Receipt sent via email

2. **User Sign-In Flow**:
   - User signs in/signs up with Clerk
   - System automatically links any guest donations with matching email
   - User can access dashboard to see all donations

3. **Dashboard Donation Flow**:
   - User fills form in dashboard
   - Donation created with user_id
   - Payment processed
   - Receipt available immediately in dashboard

## Database Schema

The `donations` table stores:
- `id`: Unique donation ID
- `user_id`: Clerk user ID (nullable for guests)
- `email`: Donor email (used for linking)
- `name`: Donor name
- `phone`: Donor phone (optional)
- `donation_type`: Type of donation
- `amount`: Donation amount
- `payment_status`: Payment status
- `payment_intent_id`: Stripe payment intent ID
- `receipt_url`: Stripe receipt URL
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Security Notes

- Never commit `.env.local` to version control
- Use Supabase RLS policies or handle authorization in API routes
- Validate all inputs on the server side
- Use Stripe webhooks to verify payment status
- Keep service role keys secure and server-side only

## Troubleshooting

1. **Payments not processing**: Check Stripe webhook configuration
2. **Donations not linking**: Verify email matching logic
3. **Dashboard access denied**: Check Clerk authentication setup
4. **Database errors**: Verify Supabase connection and RLS policies

