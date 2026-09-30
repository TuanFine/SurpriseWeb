-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Gifts table
CREATE TABLE IF NOT EXISTS gifts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  edit_token TEXT NOT NULL UNIQUE,
  recipient_name TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  theme TEXT NOT NULL DEFAULT 'pink' CHECK (theme IN ('pink', 'merah', 'kuning', 'biru', 'putih', 'campur')),
  lock_question TEXT,
  lock_answer TEXT,
  greeting TEXT NOT NULL DEFAULT '',
  letter TEXT NOT NULL DEFAULT '',
  photos JSONB NOT NULL DEFAULT '[]'::jsonb,
  music_url TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Reactions table
CREATE TABLE IF NOT EXISTS reactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  gift_id UUID NOT NULL REFERENCES gifts(id) ON DELETE CASCADE,
  visitor_name TEXT NOT NULL DEFAULT 'Anonymous',
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_gifts_slug ON gifts(slug);
CREATE INDEX IF NOT EXISTS idx_gifts_created_at ON gifts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reactions_gift_id ON reactions(gift_id);
CREATE INDEX IF NOT EXISTS idx_reactions_created_at ON reactions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE gifts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for gifts table
CREATE POLICY "gifts_select_public" ON gifts
  FOR SELECT USING (true);

CREATE POLICY "gifts_insert_public" ON gifts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "gifts_update_by_edit_token" ON gifts
  FOR UPDATE USING (true) WITH CHECK (true);

-- RLS Policies for reactions table
CREATE POLICY "reactions_insert_public" ON reactions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "reactions_select_public" ON reactions
  FOR SELECT USING (true);
