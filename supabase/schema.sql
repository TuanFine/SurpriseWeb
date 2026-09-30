CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS gifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  edit_token text UNIQUE NOT NULL,
  recipient_name text NOT NULL,
  sender_name text,
  theme text CHECK (theme IN ('pink', 'merah', 'kuning', 'biru', 'putih', 'campur')),
  lock_question text,
  lock_answer text,
  greeting text,
  letter text,
  photos jsonb DEFAULT '[]',
  music_url text,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gift_id uuid REFERENCES gifts(id) ON DELETE CASCADE,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gifts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read gifts by slug" ON gifts
  FOR SELECT
  USING (true);

CREATE POLICY "Public can insert gifts" ON gifts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update gifts by edit token" ON gifts
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "No delete for gifts" ON gifts
  FOR DELETE
  USING (false);

CREATE POLICY "Public can insert reactions" ON reactions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only service role can read reactions" ON reactions
  FOR SELECT
  USING (false);

CREATE POLICY "Only service role can update reactions" ON reactions
  FOR UPDATE
  USING (false);

CREATE POLICY "Only service role can delete reactions" ON reactions
  FOR DELETE
  USING (false);

CREATE OR REPLACE FUNCTION public.update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
