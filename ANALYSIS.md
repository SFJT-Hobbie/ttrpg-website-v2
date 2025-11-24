# TTRPG Website - In-Depth Analysis

## Executive Summary

This is a comprehensive TTRPG (Tabletop Role-Playing Game) platform built with React and Supabase, designed to support character management, rules reference, collaborative game rooms with wiki and map features, and journaling. The platform is deployed on Vercel and uses Supabase for backend services.

---

## Current Tech Stack

### Frontend
- **Framework**: React 19.1.1 with Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router DOM 7.8.1
- **State Management**: React Context API (AuthContext, DiceBoxContext)
- **UI Libraries**:
  - Framer Motion 12.23.12 (animations)
  - Lucide React 0.441.0 (icons)
  - MDI React 1.6.1 (Material Design Icons)
- **Rich Text**: Quill 1.3.7
- **Maps**: Leaflet 1.9.4 + React Leaflet 5.0.0
- **Drag & Drop**: React DnD 16.0.1
- **3D Graphics**: 
  - Three.js 0.179.1
  - React Three Fiber 9.3.0
  - React Three Drei 10.7.2
  - Babylon.js 5.57.1
- **Dice**: @3d-dice/dice-box 1.1.4 (currently not fully implemented)
- **Audio**: React H5 Audio Player 3.10.0
- **Utilities**: 
  - date-fns 2.30.0
  - lodash 4.17.21
  - uuid 11.1.0

### Backend & Infrastructure
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (for character images, maps)
- **Realtime**: Supabase Realtime (configured but underutilized)
- **Deployment**: Vercel
- **Build Tool**: Vite

---

## Database Schema (Inferred from Code)

### Tables Identified:

1. **`characters`**
   - `id` (UUID)
   - `user_id` (UUID, FK to auth.users)
   - `type` (PC/NPC)
   - `name` (text)
   - `data` (JSONB) - Contains:
     - picture, race, class, level, xp, alignment, ageStage
     - abilityScores (strength, dexterity, constitution, intelligence, wisdom, charisma)
     - npcType, hd, hp, save, bonusToHit, ac, acs
     - closeQuarterMovement, openFieldMovement
     - weaponProficiencies, nonWeaponProficiencies
     - status (alive/deceased), deathDate, deathDescription, restingSite
     - description

2. **`inventory_items`**
   - `id` (UUID)
   - `character_id` (UUID, FK to characters)
   - `name` (text)
   - `slot_position` (JSONB) - Contains gridX, gridY, w, h

3. **`journals`**
   - `id` (UUID)
   - `user_id` (UUID, FK to auth.users)
   - `character_id` (UUID, FK to characters, nullable)
   - `title` (text)
   - `content` (text/HTML)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

4. **`rooms`** (Lore Rooms/Game Rooms)
   - `id` (UUID)
   - `name` (text)
   - `owner_id` (UUID, FK to auth.users)
   - `members` (array of UUIDs)
   - `current_map_id` (UUID, FK to maps, nullable)

5. **`user_profiles`**
   - `user_id` (UUID, FK to auth.users, PK)
   - `username` (text)
   - `color` (text/hex)

6. **`wiki_pages`**
   - `id` (UUID)
   - `room_id` (UUID, FK to rooms)
   - `title` (text)
   - `content` (text/HTML)
   - `parent_id` (UUID, FK to wiki_pages, nullable)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

7. **`maps`**
   - `id` (UUID)
   - `room_id` (UUID, FK to rooms)
   - `name` (text)
   - `image_url` (text)
   - `uploaded_by` (UUID, FK to auth.users)
   - `start_lat` (numeric) - Percentage Y
   - `start_lng` (numeric) - Percentage X
   - `start_zoom` (numeric)

8. **`pins`** (Map markers)
   - `id` (UUID)
   - `map_id` (UUID, FK to maps)
   - `position_x` (numeric) - Percentage
   - `position_y` (numeric) - Percentage
   - `title` (text)
   - `description` (text)
   - `created_by` (UUID, FK to auth.users)
   - `color` (text/hex)

### Storage Buckets (Supabase):
- `character-images` - Character profile pictures
- `room-maps` - Map images for game rooms

---

## Current Features

### 1. **Character Management**
- ✅ Create/edit PC and NPC characters
- ✅ Comprehensive character sheets with:
  - Ability scores (STR, DEX, CON, INT, WIS, CHA)
  - Combat stats (HP, AC, saves, bonuses)
  - Weapon and non-weapon proficiencies
  - Drag-and-drop inventory grid (5x5)
  - Character images (uploaded to Supabase Storage)
  - Death/revival system
- ✅ Character listing with alive/deceased separation
- ✅ Character deletion

**Limitations:**
- No shared character sheets in game rooms
- No character permissions (all characters are private)
- No character templates
- Inventory is basic (name only, no item properties)

### 2. **Journals**
- ✅ Rich text editing (Quill)
- ✅ Link journals to characters
- ✅ Search and filter functionality
- ✅ Group by character
- ✅ CRUD operations

**Limitations:**
- No collaborative editing
- No tags/categories
- No export functionality
- No attachments

### 3. **Rules System**
- ✅ Extensive rules pages covering:
  - Attributes, Races, Classes
  - Gear (Armor, Weapons, Companions, Magic, Machinery, Apparel, Supplies)
  - Game mechanics (Combat, Maneuvers, Proficiencies, XP/Level, Life/Death, Exploration, Downtime)
  - Magic systems (Astral, Natural, Voice Form)
- ✅ PDF viewers for spell lists
- ✅ Hierarchical navigation

**Limitations:**
- Static content (no dynamic rules engine)
- No custom rules creation
- No rules versioning

### 4. **Library/Lore Rooms (Game Rooms)**
- ✅ Create/join rooms with unique IDs
- ✅ Room ownership and member management
- ✅ User profiles with colors/usernames per room

#### 4a. **Wiki System**
- ✅ Hierarchical page structure (parent-child relationships)
- ✅ Rich text editing (Quill)
- ✅ Owner-only editing
- ✅ Page tree navigation
- ✅ CRUD operations

**Limitations:**
- No real-time collaboration
- No version history
- No page templates
- No search within wiki
- No attachments/images in wiki
- No permissions beyond owner/member

#### 4b. **Map System**
- ✅ Upload map images
- ✅ Multiple maps per room
- ✅ Leaflet-based map viewer
- ✅ Pin placement with titles/descriptions
- ✅ Color-coded pins
- ✅ Starter zone configuration
- ✅ Map switching

**Limitations:**
- No real-time pin updates (requires manual refresh)
- No token system
- No fog of war
- No dynamic lighting
- No grid overlay
- No measurement tools
- No layer system
- Pins are simple markers (no shapes, lines, areas)
- No map permissions (all members can add pins)

### 5. **Dice System**
- ✅ Dice controls sidebar (d4, d6, d8, d10, d12, d20)
- ✅ Dice modal with roll results
- ✅ 3D dice library installed (@3d-dice/dice-box)

**Limitations:**
- **Currently using simulated rolls, not the 3D dice library**
- No shared dice rolls in rooms
- No dice history
- No custom dice expressions (e.g., "2d6+3")
- No dice macros
- No roll modifiers

### 6. **Authentication & User Management**
- ✅ Supabase Auth integration
- ✅ Login/Register
- ✅ Protected routes
- ✅ User profiles (username, color)
- ✅ Admin role support (metadata-based)

**Limitations:**
- No email verification flow visible
- No password reset
- No OAuth providers
- No user settings page

### 7. **UI/UX**
- ✅ Responsive design
- ✅ Dark theme
- ✅ Smooth animations (Framer Motion)
- ✅ Custom fonts (Cinzel, Montserrat, Garamond)
- ✅ Error boundaries
- ✅ Loading states

**Limitations:**
- No offline support
- No PWA capabilities
- No keyboard shortcuts
- No accessibility features documented
- No theme customization

---

## Architecture Analysis

### Strengths
1. **Modern Stack**: Using latest React, Vite, and modern libraries
2. **Scalable Backend**: Supabase provides scalable PostgreSQL, auth, and storage
3. **Component Structure**: Well-organized component hierarchy
4. **Type Safety**: Could benefit from TypeScript (not currently used)
5. **Separation of Concerns**: Clear separation between pages, components, and API

### Weaknesses
1. **No Real-time Features**: Realtime is configured but not used for collaboration
2. **No State Management**: Only Context API, no Redux/Zustand for complex state
3. **No API Layer**: Direct Supabase calls throughout components
4. **No Error Handling Strategy**: Basic error handling, no centralized error management
5. **No Caching**: No React Query or SWR for data fetching/caching
6. **No Testing**: No test files found
7. **Hardcoded Values**: Supabase URL and keys in client code (should use env vars)
8. **No Code Splitting**: All routes loaded upfront
9. **No Performance Monitoring**: No analytics or performance tracking

---

## Performance Considerations

### Current Issues
1. **Large Bundle Size**: Multiple 3D libraries (Three.js, Babylon.js) but not all utilized
2. **No Lazy Loading**: All routes loaded on initial page load
3. **No Image Optimization**: Images loaded directly from Supabase Storage
4. **No Data Pagination**: All characters/journals loaded at once
5. **No Memoization**: Components re-render unnecessarily
6. **Large Rules Pages**: All rules content loaded statically

### Optimization Opportunities
1. Implement code splitting with React.lazy()
2. Add image optimization (next/image equivalent or CDN)
3. Implement pagination for lists
4. Use React.memo() for expensive components
5. Implement virtual scrolling for long lists
6. Add service worker for caching
7. Optimize bundle by removing unused dependencies

---

## Security Analysis

### Current Security Measures
- ✅ Supabase RLS (Row Level Security) - assumed (not visible in code)
- ✅ Protected routes with authentication
- ✅ User-scoped data queries (user_id filtering)

### Security Concerns
1. **Exposed API Keys**: Supabase anon key in client code (acceptable but should use env vars)
2. **No Input Validation**: Limited validation on forms
3. **No Rate Limiting**: No visible rate limiting on API calls
4. **No CSRF Protection**: Not applicable for REST APIs, but should verify Supabase handles this
5. **File Upload Security**: Basic file type/size validation, but no virus scanning
6. **XSS Risks**: Using dangerouslySetInnerHTML in wiki/journal views

---

## Missing Features (Compared to Foundry/Owlbear Rodeo + LegendKeeper)

### Foundry VTT Features Missing:
1. ❌ **Token System**: No tokens on maps
2. ❌ **Combat Tracker**: No initiative/combat management
3. ❌ **Fog of War**: No dynamic fog of war
4. ❌ **Lighting System**: No dynamic lighting
5. ❌ **Grid System**: No grid overlay/alignment
6. ❌ **Measurement Tools**: No ruler/measurement
7. ❌ **Audio/Video Chat**: No built-in communication
8. ❌ **Macros**: No automation/macros
9. ❌ **Modules/Plugins**: No extensibility system
10. ❌ **Actor System**: No shared actor sheets
11. ❌ **Scene Management**: No scene transitions
12. ❌ **Roll Tables**: No random tables
13. ❌ **Compendiums**: No content library system

### Owlbear Rodeo Features Missing:
1. ❌ **Real-time Collaboration**: No live updates
2. ❌ **Token Movement**: No drag-and-drop tokens
3. ❌ **Drawing Tools**: No drawing/annotation tools
4. ❌ **Shape Tools**: No shapes (circles, rectangles, etc.)
5. ❌ **Text Tools**: No text annotations on maps
6. ❌ **Layer Management**: No layer system
7. ❌ **Measurement Tools**: No measurement
8. ❌ **Fog of War**: No fog of war
9. ❌ **Grid Snapping**: No grid alignment
10. ❌ **Token Properties**: No token stats/HP tracking

### LegendKeeper Features Missing:
1. ❌ **Advanced Wiki Features**:
   - No bi-directional linking
   - No tags system
   - No templates
   - No version history
   - No page relationships graph
2. ❌ **Map Features**:
   - No interactive map layers
   - No map linking to wiki pages
   - No region system
   - No map annotations beyond pins
3. ❌ **Campaign Management**:
   - No session notes
   - No timeline
   - No calendar system
   - No NPC relationship tracking
4. ❌ **Content Organization**:
   - No folders/categories
   - No search across all content
   - No content templates
   - No import/export

---

## Recommendations for Optimization

### Immediate Optimizations (Quick Wins)
1. **Environment Variables**: Move Supabase keys to `.env` files
2. **Code Splitting**: Implement React.lazy() for routes
3. **Image Optimization**: Use Supabase image transformations or CDN
4. **Pagination**: Add pagination to Characters, Journals, and Wiki pages
5. **Memoization**: Add React.memo() to expensive components
6. **Error Boundaries**: Improve error handling with better boundaries
7. **Loading States**: Add skeleton loaders instead of "Cargando..."
8. **Debouncing**: Add debouncing to search inputs

### Medium-term Improvements
1. **State Management**: Consider Zustand or Redux Toolkit for complex state
2. **Data Fetching**: Implement React Query or SWR for caching/refetching
3. **Real-time Features**: Implement Supabase Realtime for:
   - Live map pin updates
   - Collaborative wiki editing
   - Shared dice rolls
   - Live member presence
4. **TypeScript Migration**: Gradually migrate to TypeScript
5. **Testing**: Add unit tests (Vitest) and E2E tests (Playwright)
6. **Performance Monitoring**: Add analytics (Vercel Analytics, Sentry)
7. **PWA**: Convert to Progressive Web App

### Long-term Enhancements
1. **Token System**: Implement VTT token system
2. **Combat Tracker**: Build initiative/combat management
3. **Fog of War**: Add dynamic fog of war
4. **Audio/Video**: Integrate WebRTC or third-party service
5. **Advanced Wiki**: Bi-directional linking, templates, version history
6. **Campaign Management**: Session notes, timeline, calendar
7. **Module System**: Plugin/extension architecture

---

## Recommended Stack Additions

### For Real-time Collaboration
- **Supabase Realtime**: Already available, just needs implementation
- **Yjs + CRDT**: For collaborative text editing (better than Quill alone)
- **Socket.io Alternative**: If Supabase Realtime is insufficient

### For VTT Features
- **Fabric.js or Konva.js**: For canvas-based token/drawing system
- **Phaser.js**: Game engine for advanced VTT features
- **PixiJS**: High-performance 2D rendering for tokens

### For Performance
- **React Query (TanStack Query)**: Data fetching and caching
- **Zustand**: Lightweight state management
- **Vite PWA Plugin**: PWA capabilities
- **Workbox**: Service worker management

### For Development
- **TypeScript**: Type safety
- **Vitest**: Unit testing
- **Playwright**: E2E testing
- **ESLint + Prettier**: Code quality
- **Husky**: Git hooks

### For Monitoring
- **Sentry**: Error tracking
- **Vercel Analytics**: Performance monitoring
- **PostHog**: Product analytics

---

## Service Recommendations

### For Voice/Video Chat
1. **Daily.co**: Easy WebRTC integration
2. **Agora.io**: Scalable video/audio
3. **Twilio Video**: Enterprise-grade
4. **Jitsi Meet**: Open-source, self-hosted option

### For Advanced Map Features
1. **Mapbox**: Advanced mapping with custom styles
2. **Google Maps API**: Rich mapping features
3. **OpenLayers**: Open-source alternative to Leaflet

### For File Storage/CDN
1. **Cloudflare R2**: S3-compatible, cheaper than S3
2. **ImageKit**: Image optimization CDN
3. **Cloudinary**: Advanced image/video processing

### For Analytics
1. **PostHog**: Open-source product analytics
2. **Mixpanel**: User behavior tracking
3. **Amplitude**: Product analytics

---

## Next Steps

1. **Immediate**: Implement environment variables and code splitting
2. **Short-term**: Add real-time features using Supabase Realtime
3. **Medium-term**: Implement token system and basic VTT features
4. **Long-term**: Build comprehensive VTT + Wiki platform

---

## Conclusion

The platform has a solid foundation with modern technologies and a well-structured codebase. The main gaps are in real-time collaboration, VTT features, and advanced wiki capabilities. With the recommended optimizations and feature additions, this could become a competitive alternative to Foundry VTT + LegendKeeper.

**Current State**: MVP with core features
**Potential**: Full-featured TTRPG platform with VTT capabilities




