-- Add message field to donations table
-- Run this SQL in your Supabase SQL Editor

-- Add message column to donations table
ALTER TABLE donations 
ADD COLUMN IF NOT EXISTS message TEXT;

-- Add comment to document the field
COMMENT ON COLUMN donations.message IS 'Optional message or prayer from the donor';

