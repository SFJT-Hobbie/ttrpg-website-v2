-- Migration: Lore Room Characters Feature
-- This migration adds support for character instances in lore rooms and journal linking

-- 1. Create room_character_instances table
CREATE TABLE IF NOT EXISTS room_character_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  instance_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(room_id, character_id)
);

-- 2. Add room_id to journals table
ALTER TABLE journals 
ADD COLUMN IF NOT EXISTS room_id UUID REFERENCES rooms(id) ON DELETE SET NULL;

-- 3. Create room_journal_instances table
CREATE TABLE IF NOT EXISTS room_journal_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  journal_id UUID NOT NULL REFERENCES journals(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  character_id UUID REFERENCES characters(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(room_id, journal_id)
);

-- 4. Create journal_links table (references room_journal_instances)
CREATE TABLE IF NOT EXISTS journal_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  journal_id UUID NOT NULL REFERENCES room_journal_instances(id) ON DELETE CASCADE,
  link_type TEXT NOT NULL CHECK (link_type IN ('map_pin', 'wiki_page')),
  linked_id UUID NOT NULL,
  link_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(journal_id, link_type, linked_id, link_text)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_room_character_instances_room_id ON room_character_instances(room_id);
CREATE INDEX IF NOT EXISTS idx_room_character_instances_character_id ON room_character_instances(character_id);
CREATE INDEX IF NOT EXISTS idx_room_character_instances_user_id ON room_character_instances(user_id);
CREATE INDEX IF NOT EXISTS idx_room_character_instances_is_active ON room_character_instances(is_active);
CREATE INDEX IF NOT EXISTS idx_journals_room_id ON journals(room_id);
CREATE INDEX IF NOT EXISTS idx_room_journal_instances_room_id ON room_journal_instances(room_id);
CREATE INDEX IF NOT EXISTS idx_room_journal_instances_journal_id ON room_journal_instances(journal_id);
CREATE INDEX IF NOT EXISTS idx_room_journal_instances_user_id ON room_journal_instances(user_id);
CREATE INDEX IF NOT EXISTS idx_room_journal_instances_character_id ON room_journal_instances(character_id);
CREATE INDEX IF NOT EXISTS idx_journal_links_journal_id ON journal_links(journal_id);
CREATE INDEX IF NOT EXISTS idx_journal_links_linked_id ON journal_links(linked_id);

-- Enable Row Level Security
ALTER TABLE room_character_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_journal_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_links ENABLE ROW LEVEL SECURITY;

-- RLS Policies for room_character_instances
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view room character instances in their rooms" ON room_character_instances;
DROP POLICY IF EXISTS "Users can create room character instances" ON room_character_instances;
DROP POLICY IF EXISTS "Users can update their room character instances" ON room_character_instances;

-- Users can view instances in rooms they are members of
CREATE POLICY "Users can view room character instances in their rooms"
  ON room_character_instances FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM rooms 
      WHERE rooms.id = room_character_instances.room_id 
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

-- Users can insert instances for characters they own in rooms they are members of
CREATE POLICY "Users can create room character instances"
  ON room_character_instances FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM rooms 
      WHERE rooms.id = room_character_instances.room_id 
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
    AND EXISTS (
      SELECT 1 FROM characters 
      WHERE characters.id = room_character_instances.character_id 
      AND characters.user_id = auth.uid()
    )
    AND user_id = auth.uid()
  );

-- Users can update instances they created or if they own the character
CREATE POLICY "Users can update their room character instances"
  ON room_character_instances FOR UPDATE
  USING (
    user_id = auth.uid() 
    OR EXISTS (
      SELECT 1 FROM characters 
      WHERE characters.id = room_character_instances.character_id 
      AND characters.user_id = auth.uid()
    )
  );

-- RLS Policies for room_journal_instances
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view room journal instances in their rooms" ON room_journal_instances;
DROP POLICY IF EXISTS "Users can create room journal instances" ON room_journal_instances;
DROP POLICY IF EXISTS "Users can update their room journal instances" ON room_journal_instances;

-- Users can view journal instances in rooms they are members of
CREATE POLICY "Users can view room journal instances in their rooms"
  ON room_journal_instances FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM rooms 
      WHERE rooms.id = room_journal_instances.room_id 
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

-- Users can insert journal instances for journals they own in rooms they are members of
CREATE POLICY "Users can create room journal instances"
  ON room_journal_instances FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM rooms 
      WHERE rooms.id = room_journal_instances.room_id 
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
    AND EXISTS (
      SELECT 1 FROM journals 
      WHERE journals.id = room_journal_instances.journal_id 
      AND journals.user_id = auth.uid()
    )
    AND user_id = auth.uid()
  );

-- Users can update journal instances they created or if they own the journal
CREATE POLICY "Users can update their room journal instances"
  ON room_journal_instances FOR UPDATE
  USING (
    user_id = auth.uid() 
    OR EXISTS (
      SELECT 1 FROM journals 
      WHERE journals.id = room_journal_instances.journal_id 
      AND journals.user_id = auth.uid()
    )
  );

-- RLS Policies for journal_links
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view journal links" ON journal_links;
DROP POLICY IF EXISTS "Users can create journal links" ON journal_links;
DROP POLICY IF EXISTS "Users can delete journal links" ON journal_links;

-- Users can view links for room journal instances in rooms they are members of
CREATE POLICY "Users can view journal links"
  ON journal_links FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM room_journal_instances 
      WHERE room_journal_instances.id = journal_links.journal_id 
      AND EXISTS (
        SELECT 1 FROM rooms 
        WHERE rooms.id = room_journal_instances.room_id 
        AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
      )
    )
  );

-- Users can create links for room journal instances they own
CREATE POLICY "Users can create journal links"
  ON journal_links FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM room_journal_instances 
      WHERE room_journal_instances.id = journal_links.journal_id 
      AND room_journal_instances.user_id = auth.uid()
    )
  );

-- Users can delete links for room journal instances they own
CREATE POLICY "Users can delete journal links"
  ON journal_links FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM room_journal_instances 
      WHERE room_journal_instances.id = journal_links.journal_id 
      AND room_journal_instances.user_id = auth.uid()
    )
  );

