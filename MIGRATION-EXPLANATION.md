# Supabase Migration File Explanation

## ✅ Yes, the migration file includes everything you need!

The `supabase-migration.sql` file creates a complete database structure that supports:

### 1. **User Data Saving (Clerk Authenticated Users)**
- ✅ `user_id TEXT` field stores Clerk user ID when user is logged in
- ✅ When user makes donation while signed in, their Clerk `user_id` is saved
- ✅ All authenticated donations are linked to the user's account

### 2. **After Login - Their Donations**
- ✅ Index on `user_id` for fast queries: `idx_donations_user_id`
- ✅ API route filters donations by `user_id` when user is authenticated
- ✅ Dashboard shows all donations where `user_id` matches the logged-in user

### 3. **Public/Guest Donations (Not Logged In)**
- ✅ `user_id` is `NULL` for guest donations
- ✅ `email` field stores donor email (required)
- ✅ Index on `email` for linking: `idx_donations_email`
- ✅ Guest donations can be made without authentication

### 4. **Automatic Linking Feature**
- ✅ When guest donates: `user_id = NULL`, `email = "user@example.com"`
- ✅ When user signs up/signs in with same email: API automatically links donations
- ✅ The `/api/donations/link-user` route updates `user_id` for matching emails

## Database Schema Breakdown

```sql
CREATE TABLE donations (
  id UUID PRIMARY KEY,                    -- Unique donation ID
  user_id TEXT,                          -- Clerk user ID (NULL for guests)
  email TEXT NOT NULL,                   -- Donor email (used for linking)
  name TEXT NOT NULL,                    -- Donor name
  phone TEXT,                            -- Donor phone (optional)
  donation_type TEXT NOT NULL,           -- Type of donation
  amount DECIMAL(10, 2) NOT NULL,        -- Donation amount
  payment_status TEXT NOT NULL,          -- Payment status
  payment_intent_id TEXT,                -- Stripe payment ID
  receipt_url TEXT,                      -- Receipt URL
  created_at TIMESTAMP,                   -- Creation time
  updated_at TIMESTAMP                    -- Last update time
);
```

## How It Works

### Scenario 1: Guest Donation
1. User visits `/donate` (not signed in)
2. Fills form with email: `john@example.com`
3. Donation saved: `user_id = NULL`, `email = "john@example.com"`
4. Payment processed via Stripe
5. Receipt sent to email

### Scenario 2: User Signs Up Later
1. User signs up with Clerk using `john@example.com`
2. Gets Clerk `user_id = "user_abc123"`
3. Dashboard automatically calls `/api/donations/link-user`
4. All donations with `email = "john@example.com"` get updated: `user_id = "user_abc123"`
5. User now sees all their donations in dashboard

### Scenario 3: Authenticated Donation
1. User is signed in (Clerk `user_id = "user_abc123"`)
2. Makes donation from dashboard
3. Donation saved: `user_id = "user_abc123"`, `email = "john@example.com"`
4. Immediately visible in dashboard

## Security & Authorization

- **RLS Policies**: Updated to work with Clerk (not Supabase Auth)
- **Service Role Key**: Used in API routes to bypass RLS securely
- **Authorization**: Handled in API routes using Clerk's `auth()` function
- **Data Filtering**: API routes filter by `user_id` or `email` based on authentication status

## Indexes for Performance

1. `idx_donations_user_id` - Fast lookup of user's donations
2. `idx_donations_email` - Fast lookup for linking guest donations
3. `idx_donations_payment_status` - Filter by payment status
4. `idx_donations_created_at` - Sort by date (descending)

## Automatic Features

- ✅ Auto-generated UUIDs for donation IDs
- ✅ Auto-timestamp on creation (`created_at`)
- ✅ Auto-update timestamp on changes (`updated_at` trigger)
- ✅ Data validation (CHECK constraints on donation_type, payment_status, amount)

## Summary

**The migration file is complete and includes:**
- ✅ Table structure for both authenticated and guest donations
- ✅ Proper indexes for fast queries
- ✅ Email-based linking mechanism
- ✅ Clerk user ID storage
- ✅ Payment tracking fields
- ✅ Receipt storage
- ✅ Automatic timestamp management
- ✅ Security policies (RLS) compatible with Clerk

**Everything you need is in this single migration file!** 🎉

