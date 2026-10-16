-- =============================================
-- Supabase Database Setup for Samyog Portfolio
-- Run this in Supabase SQL Editor (supabase.com → your project → SQL Editor)
-- =============================================

-- 1. Messages table (from Contact form)
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Feedback table (from Feedback section)
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- 4. Allow anonymous inserts (portfolio visitors can submit)
CREATE POLICY "Allow anonymous insert on messages"
  ON messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert on feedback"
  ON feedback FOR INSERT
  TO anon
  WITH CHECK (true);

-- 5. Allow authenticated users (admin) to read/update/delete
CREATE POLICY "Allow authenticated full access on messages"
  ON messages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access on feedback"
  ON feedback FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
