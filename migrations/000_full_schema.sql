-- ============================================================
-- FULL DATABASE SCHEMA FOR ARISTILIA (TTRPG WEBSITE V2)
-- Paste this entire script into Supabase SQL Editor and run it
-- ============================================================

-- ============================================================
-- 1. TABLES (ordered by FK dependencies)
-- ============================================================

-- user_profiles
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT,
  color TEXT
);

-- characters
CREATE TABLE characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('PC', 'NPC')),
  data JSONB
);

-- rooms (current_map_id FK added after maps table is created)
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  members UUID[] DEFAULT '{}',
  current_map_id UUID
);

-- journals
CREATE TABLE journals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT,
  content TEXT,
  character_id UUID REFERENCES characters(id) ON DELETE SET NULL,
  room_id UUID REFERENCES rooms(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- inventory_items
CREATE TABLE inventory_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  name TEXT,
  slot_position JSONB
);

-- maps
CREATE TABLE maps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  name TEXT,
  image_url TEXT,
  start_lat DOUBLE PRECISION,
  start_lng DOUBLE PRECISION,
  start_zoom INTEGER
);

-- Deferred FK: rooms.current_map_id -> maps.id
ALTER TABLE rooms
  ADD CONSTRAINT rooms_current_map_id_fkey
  FOREIGN KEY (current_map_id) REFERENCES maps(id) ON DELETE SET NULL;

-- pins
CREATE TABLE pins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  map_id UUID NOT NULL REFERENCES maps(id) ON DELETE CASCADE,
  position_x DOUBLE PRECISION,
  position_y DOUBLE PRECISION,
  title TEXT,
  description TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  color TEXT
);

-- wiki_pages (self-referencing parent_id for hierarchy)
CREATE TABLE wiki_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  title TEXT,
  content TEXT,
  parent_id UUID REFERENCES wiki_pages(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- room_character_instances
CREATE TABLE room_character_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  instance_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(room_id, character_id)
);

-- room_journal_instances
CREATE TABLE room_journal_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  journal_id UUID NOT NULL REFERENCES journals(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  character_id UUID REFERENCES characters(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(room_id, journal_id)
);

-- journal_links
CREATE TABLE journal_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  journal_id UUID NOT NULL REFERENCES room_journal_instances(id) ON DELETE CASCADE,
  link_type TEXT NOT NULL CHECK (link_type IN ('map_pin', 'wiki_page')),
  linked_id UUID NOT NULL,
  link_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(journal_id, link_type, linked_id, link_text)
);

-- ============================================================
-- 2. INDEXES
-- ============================================================

CREATE INDEX idx_characters_user_id ON characters(user_id);
CREATE INDEX idx_journals_user_id ON journals(user_id);
CREATE INDEX idx_journals_character_id ON journals(character_id);
CREATE INDEX idx_journals_room_id ON journals(room_id);
CREATE INDEX idx_inventory_items_character_id ON inventory_items(character_id);
CREATE INDEX idx_maps_room_id ON maps(room_id);
CREATE INDEX idx_pins_map_id ON pins(map_id);
CREATE INDEX idx_pins_created_by ON pins(created_by);
CREATE INDEX idx_wiki_pages_room_id ON wiki_pages(room_id);
CREATE INDEX idx_wiki_pages_parent_id ON wiki_pages(parent_id);
CREATE INDEX idx_room_character_instances_room_id ON room_character_instances(room_id);
CREATE INDEX idx_room_character_instances_character_id ON room_character_instances(character_id);
CREATE INDEX idx_room_character_instances_user_id ON room_character_instances(user_id);
CREATE INDEX idx_room_character_instances_is_active ON room_character_instances(is_active);
CREATE INDEX idx_room_journal_instances_room_id ON room_journal_instances(room_id);
CREATE INDEX idx_room_journal_instances_journal_id ON room_journal_instances(journal_id);
CREATE INDEX idx_room_journal_instances_user_id ON room_journal_instances(user_id);
CREATE INDEX idx_room_journal_instances_character_id ON room_journal_instances(character_id);
CREATE INDEX idx_journal_links_journal_id ON journal_links(journal_id);
CREATE INDEX idx_journal_links_linked_id ON journal_links(linked_id);

-- ============================================================
-- 3. ENABLE RLS ON ALL TABLES
-- ============================================================

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE maps ENABLE ROW LEVEL SECURITY;
ALTER TABLE pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE wiki_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_character_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_journal_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_links ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 4. RLS POLICIES
-- ============================================================

-- ---- user_profiles ----
CREATE POLICY "Users can view all profiles" ON user_profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON user_profiles
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (user_id = auth.uid());

-- ---- characters ----
CREATE POLICY "Users can view their own characters" ON characters
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create their own characters" ON characters
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own characters" ON characters
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own characters" ON characters
  FOR DELETE USING (user_id = auth.uid());

-- Room members can also view characters of other room members
CREATE POLICY "Room members can view characters in shared rooms" ON characters
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM rooms
      WHERE (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
      AND (characters.user_id = rooms.owner_id OR characters.user_id = ANY(rooms.members))
    )
  );

-- ---- rooms ----
CREATE POLICY "Users can view rooms they own or are members of" ON rooms
  FOR SELECT USING (owner_id = auth.uid() OR auth.uid() = ANY(members));

CREATE POLICY "Users can create rooms" ON rooms
  FOR INSERT WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Room owners and members can update rooms" ON rooms
  FOR UPDATE USING (owner_id = auth.uid() OR auth.uid() = ANY(members));

CREATE POLICY "Room owners can delete rooms" ON rooms
  FOR DELETE USING (owner_id = auth.uid());

-- ---- journals ----
CREATE POLICY "Users can view their own journals" ON journals
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create journals" ON journals
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own journals" ON journals
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own journals" ON journals
  FOR DELETE USING (user_id = auth.uid());

-- Room members can view journals of other room members
CREATE POLICY "Room members can view journals in shared rooms" ON journals
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM rooms
      WHERE (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
      AND (journals.user_id = rooms.owner_id OR journals.user_id = ANY(rooms.members))
    )
  );

-- ---- inventory_items ----
CREATE POLICY "Users can view inventory for their characters" ON inventory_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM characters WHERE characters.id = inventory_items.character_id AND characters.user_id = auth.uid())
  );

CREATE POLICY "Users can create inventory for their characters" ON inventory_items
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM characters WHERE characters.id = inventory_items.character_id AND characters.user_id = auth.uid())
  );

CREATE POLICY "Users can update inventory for their characters" ON inventory_items
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM characters WHERE characters.id = inventory_items.character_id AND characters.user_id = auth.uid())
  );

CREATE POLICY "Users can delete inventory for their characters" ON inventory_items
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM characters WHERE characters.id = inventory_items.character_id AND characters.user_id = auth.uid())
  );

-- ---- maps ----
CREATE POLICY "Room members can view maps" ON maps
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = maps.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room members can create maps" ON maps
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = maps.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room members can update maps" ON maps
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = maps.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room owners can delete maps" ON maps
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = maps.room_id AND rooms.owner_id = auth.uid())
  );

-- ---- pins ----
CREATE POLICY "Room members can view pins" ON pins
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM maps JOIN rooms ON rooms.id = maps.room_id
      WHERE maps.id = pins.map_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

CREATE POLICY "Room members can create pins" ON pins
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM maps JOIN rooms ON rooms.id = maps.room_id
      WHERE maps.id = pins.map_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

CREATE POLICY "Pin creators and room owners can update pins" ON pins
  FOR UPDATE USING (
    created_by = auth.uid() OR EXISTS (
      SELECT 1 FROM maps JOIN rooms ON rooms.id = maps.room_id
      WHERE maps.id = pins.map_id AND rooms.owner_id = auth.uid()
    )
  );

CREATE POLICY "Pin creators and room owners can delete pins" ON pins
  FOR DELETE USING (
    created_by = auth.uid() OR EXISTS (
      SELECT 1 FROM maps JOIN rooms ON rooms.id = maps.room_id
      WHERE maps.id = pins.map_id AND rooms.owner_id = auth.uid()
    )
  );

-- ---- wiki_pages ----
CREATE POLICY "Room members can view wiki pages" ON wiki_pages
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = wiki_pages.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room members can create wiki pages" ON wiki_pages
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = wiki_pages.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room members can update wiki pages" ON wiki_pages
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = wiki_pages.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

CREATE POLICY "Room members can delete wiki pages" ON wiki_pages
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM rooms WHERE rooms.id = wiki_pages.room_id AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members)))
  );

-- ---- room_character_instances ----
-- (from migrations/001_lore_room_characters.sql)
CREATE POLICY "Users can view room character instances in their rooms"
  ON room_character_instances FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM rooms
      WHERE rooms.id = room_character_instances.room_id
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

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

-- ---- room_journal_instances ----
-- (from migrations/001_lore_room_characters.sql)
CREATE POLICY "Users can view room journal instances in their rooms"
  ON room_journal_instances FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM rooms
      WHERE rooms.id = room_journal_instances.room_id
      AND (rooms.owner_id = auth.uid() OR auth.uid() = ANY(rooms.members))
    )
  );

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

CREATE POLICY "Users can delete their room journal instances"
  ON room_journal_instances FOR DELETE
  USING (
    user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM journals
      WHERE journals.id = room_journal_instances.journal_id
      AND journals.user_id = auth.uid()
    )
  );

-- ---- journal_links ----
-- (from migrations/001_lore_room_characters.sql)
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

CREATE POLICY "Users can create journal links"
  ON journal_links FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM room_journal_instances
      WHERE room_journal_instances.id = journal_links.journal_id
      AND room_journal_instances.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete journal links"
  ON journal_links FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM room_journal_instances
      WHERE room_journal_instances.id = journal_links.journal_id
      AND room_journal_instances.user_id = auth.uid()
    )
  );

-- ============================================================
-- 5. STORAGE BUCKETS
-- ============================================================

INSERT INTO storage.buckets (id, name, public) VALUES ('character-images', 'character-images', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('room-maps', 'room-maps', true);

-- Storage policies: character-images
CREATE POLICY "Anyone can view character images" ON storage.objects
  FOR SELECT USING (bucket_id = 'character-images');

CREATE POLICY "Authenticated users can upload character images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'character-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own character images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'character-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own character images" ON storage.objects
  FOR DELETE USING (bucket_id = 'character-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Storage policies: room-maps
CREATE POLICY "Anyone can view room maps" ON storage.objects
  FOR SELECT USING (bucket_id = 'room-maps');

CREATE POLICY "Authenticated users can upload room maps" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'room-maps' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update room maps" ON storage.objects
  FOR UPDATE USING (bucket_id = 'room-maps' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete room maps" ON storage.objects
  FOR DELETE USING (bucket_id = 'room-maps' AND auth.role() = 'authenticated');
