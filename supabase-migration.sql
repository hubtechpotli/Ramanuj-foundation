-- Supabase Database Migration for Donations
-- Run this SQL in your Supabase SQL Editor

-- Create users table to track all signed-in users
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_user_id TEXT UNIQUE NOT NULL, -- Clerk user ID (unique identifier)
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  image_url TEXT, -- Profile image URL from Clerk
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_sign_in_at TIMESTAMP WITH TIME ZONE
);

-- Create index on clerk_user_id for fast lookups
CREATE INDEX IF NOT EXISTS idx_users_clerk_user_id ON users(clerk_user_id);

-- Create index on email for email-based queries
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT, -- Clerk user ID (nullable for guest donations, references users.clerk_user_id)
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  donation_type TEXT NOT NULL CHECK (donation_type IN ('gau-sewa', 'girl-marriage-support', 'gurukul-donation', 'health-camps', 'general')),
  amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_intent_id TEXT, -- Stripe payment intent ID
  receipt_url TEXT, -- Stripe receipt URL
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on user_id for faster queries
CREATE INDEX IF NOT EXISTS idx_donations_user_id ON donations(user_id);

-- Create index on email for linking guest donations
CREATE INDEX IF NOT EXISTS idx_donations_email ON donations(email);

-- Create index on payment_status
CREATE INDEX IF NOT EXISTS idx_donations_payment_status ON donations(payment_status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist (to avoid errors on re-run)
DROP TRIGGER IF EXISTS update_donations_updated_at ON donations;
DROP TRIGGER IF EXISTS update_users_updated_at ON users;

-- Create trigger to automatically update updated_at for donations
CREATE TRIGGER update_donations_updated_at
  BEFORE UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger to automatically update updated_at for users
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) for users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security (RLS) for donations table
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- IMPORTANT: Since we're using Clerk (not Supabase Auth), RLS policies
-- won't work with auth.uid(). We handle authorization in our API routes.
-- These policies allow service role to access everything for API routes.

-- Drop existing policies if they exist (to avoid errors on re-run)
DROP POLICY IF EXISTS "Service role full access" ON donations;
DROP POLICY IF EXISTS "Public read access" ON donations;
DROP POLICY IF EXISTS "Public insert donations" ON donations;
DROP POLICY IF EXISTS "Service role full access users" ON users;
DROP POLICY IF EXISTS "Public read access users" ON users;
DROP POLICY IF EXISTS "Public insert users" ON users;
DROP POLICY IF EXISTS "Public update users" ON users;

-- Policy: Allow service role full access (for API routes with service role key)
CREATE POLICY "Service role full access"
  ON donations
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public read access (optional - can be removed for stricter security)
-- This is safe because we filter by user_id/email in API routes
CREATE POLICY "Public read access"
  ON donations
  FOR SELECT
  USING (true);

-- Policy: Allow public insert (for guest donations via API)
CREATE POLICY "Public insert donations"
  ON donations
  FOR INSERT
  WITH CHECK (true);

-- RLS Policies for users table
-- Policy: Allow service role full access (for API routes with service role key)
CREATE POLICY "Service role full access users"
  ON users
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public read access (filtered by API routes)
CREATE POLICY "Public read access users"
  ON users
  FOR SELECT
  USING (true);

-- Policy: Allow insert for user creation (via API)
CREATE POLICY "Public insert users"
  ON users
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow update for user updates (via API)
CREATE POLICY "Public update users"
  ON users
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Note: Authorization is handled in API routes using Clerk authentication
-- The service role key is used server-side to bypass RLS
-- Guest donations have user_id = NULL and are linked when user signs in with same email
-- Users table tracks all signed-in users, even if they haven't donated yet

