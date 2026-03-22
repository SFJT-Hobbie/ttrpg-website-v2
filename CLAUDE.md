# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aristilia** — a TTRPG (tabletop role-playing game) companion web app. Players use it to browse game rules, manage characters and journals, roll 3D dice, and collaborate in shared "lore rooms" (library spaces with wikis, maps, characters, and journals).

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (flat config, JS/JSX only)
- `npm run preview` — preview production build locally

## Tech Stack

- **React 19** (JSX, no TypeScript) with React Router v7 for routing
- **Vite 7** with `@vitejs/plugin-react`
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (imported in `index.css` with `@import "tailwindcss"`)
- **Supabase** for auth, database, and realtime — client initialized in `src/supabaseClient.js`
- **Framer Motion** for page transitions and animations
- **@3d-dice/dice-box** for WebGL 3D dice rolling
- **Tiptap** for rich text editing (journals/wikis)
- **React Leaflet** for interactive maps
- **vite-plugin-pwa** for PWA/service worker support

## Architecture

### Provider hierarchy (src/App.jsx)

`AuthProvider` → `DiceBoxProvider` → `BrowserRouter` → `AppContent`

All routes except `/`, `/login`, `/register` are wrapped in `ProtectedRoute` (redirects to `/login` if unauthenticated).

### Key modules

- **Auth**: `src/AuthContext.jsx` exposes `useAuth()` hook with `user`, `isAdmin`, `loading`, `signIn`, `signUp`, `signOut`. Admin status comes from `app_metadata.is_admin`.
- **Dice system**: `src/DiceBoxContext.jsx` + `src/DiceBoxProvider.jsx` — context-based 3D dice with WebGL. The dice overlay renders as a fixed full-viewport canvas at z-index 9999. Dice are hidden on public pages (`/`, `/login`, `/register`).
- **API layer**: `src/api.js` — thin wrapper around Supabase client for inventory CRUD. Most pages query Supabase directly rather than going through this module.
- **Design system**: `src/styles/design-system.css` defines CSS custom properties for spacing, radius, transitions, and `.page-container` utility. Font classes: `.cinzel` (headings), `.garamond` (body/serif), `.montserrat` (default sans).

### Route structure

All pages are lazy-loaded via `React.lazy()`. Major route groups:
- `/rules/**` — game rules (races, classes, gear, game mechanics, magic)
- `/characters/**` — character CRUD and character sheets
- `/journals/**` — journal entries with rich text
- `/library/**` — shared lore rooms with sub-routes for wiki, map, characters, journals
- `/tools` — utility tools page

### Environment variables

Requires `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `.env` (note: the vite config maps these directly via `define`, not using the `VITE_` prefix at runtime — see `vite.config.js` lines 113-116).

### ESLint

Flat config in `eslint.config.js`. `no-unused-vars` ignores variables matching `^[A-Z_]` (component imports, constants).
