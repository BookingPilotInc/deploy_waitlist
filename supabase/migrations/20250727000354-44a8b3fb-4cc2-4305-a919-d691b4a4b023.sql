-- Create visitors table to track site visitors
CREATE TABLE public.visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET,
  user_agent TEXT,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_id TEXT,
  page_url TEXT DEFAULT '/'
);

-- Enable RLS on visitors table
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert visitor records
CREATE POLICY "Anyone can insert visitor records" 
ON public.visitors 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to view visitor count (for statistics)
CREATE POLICY "Anyone can view visitor records" 
ON public.visitors 
FOR SELECT 
USING (true);

-- Create index for better performance on counting queries
CREATE INDEX idx_visitors_visited_at ON public.visitors(visited_at);
CREATE INDEX idx_visitors_session_id ON public.visitors(session_id);