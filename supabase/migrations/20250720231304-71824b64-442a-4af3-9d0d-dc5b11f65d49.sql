-- Update business_queries table to store contact form data properly
ALTER TABLE public.business_queries 
RENAME COLUMN contact TO name;

-- Add missing columns for better data structure
ALTER TABLE public.business_queries 
ADD COLUMN IF NOT EXISTS company TEXT;