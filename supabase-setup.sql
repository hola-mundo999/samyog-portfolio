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

-- 4. Apply admin-only policies, grants, and is_admin() from:
--    samyog-admin/supabase-security.sql
-- Do not add "authenticated USING (true)" policies. They allow any
-- signed-in user to read private submissions.
