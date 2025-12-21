# Copilot Instructions for gnarlybob.net Travel

## Project Overview
A static site generator for Summer 2026 travel pitch decks using **Astro**. Three destination reviews (Algonquin, Saguenay, Rivière-du-Loup) with premium, visual-first design. Site deployed at `/travel` subpath on a Debian VPS via GitHub Actions.

## Core Architecture

### Astro Setup
- **Base URL**: `/travel` (configured in `astro.config.mjs`)
- **Output**: Static HTML/CSS (no hydration)
- **Key Config**: `site: 'https://gnarlybob.net'`, `base: '/travel'`, `output: 'static'`
- **Fonts**: Google Fonts (Outfit family, weights 300/400/600/800)

### Layout Hierarchy
- **Layout.astro** (root): Common `<head>`, viewport/fonts, `<slot />` for page content
- **PitchDeck.astro** (template): Renders slide decks with navigation (prev/next buttons, dot indicators, keyboard controls)
  - Accepts: `title`, `subtitle`, `heroImage`, `slides[]`, `backHref`, `accent` (CSS HSL color)
  - Uses inline vanilla JS (no framework dependency) for deck state management
  - Slides limited to max 12 items (enforced via `slice(0, 12)`)
  - Supports hash-based navigation (`#1`, `#2`) to preserve scroll position on refresh

### File Structure
```
src/layouts/          # Layout templates (Layout.astro, PitchDeck.astro)
src/pages/            # Route pages (index.astro = /travel/)
  pitch-decks/        # Destination decks (algonquin, saguenay, riviere-du-loup)
    {destination}/index.astro  # Each deck imports PitchDeck template
src/styles/           # CSS (global.css with CSS vars)
public/slide-images/  # Images organized by destination
```

## Critical Patterns

### Styling (Vanilla CSS Only)
- **No Tailwind**: Strictly CSS custom properties (variables)
- **CSS Variables in global.css**: Colors, typography, spacing, transitions
  - `--color-primary` (accent), `--color-text`, `--color-bg` (dark slate), `--color-card-bg`
  - `--glass-border`, `--font-main` (Outfit), `--transition-smooth`
- **Component-Scoped CSS**: Each `.astro` file uses `<style>` block (scoped to component)
- **Glass-morphism**: `.glass-panel` class (backdrop blur + border) used on deck cards

### Pitch Deck Structure
Each deck (`/src/pages/pitch-decks/{destination}/index.astro`):
1. Imports `PitchDeck` layout
2. Defines `slides` array with objects: `{ kicker, title, body, bullets, image, imageAlt, caption, note }`
3. Passes `heroImage`, `subtitle`, `accent` color (HSL) to template
4. Uses `import.meta.env.BASE_URL` for all asset paths (ensures `/travel` prefix)

**Deck Navigation**: Arrows (buttons) + keyboard (Arrow Left/Right, Home, End) + dot buttons. Current slide persists via URL hash.

### Image Management
- Store in `public/slide-images/{destination}/` (e.g., `slide1.jpg`, `slide2.jpg`)
- Use `${baseUrl}/slide-images/{destination}/filename` in deck data
- Lazy-load non-hero images; eager-load hero images

## Development Workflow

### Local Development
```bash
npm install          # One-time setup
npm run dev          # Runs `astro dev` (localhost:3000, hot reload)
```

### Build & Preview
```bash
npm run build        # Produces static HTML in `dist/`
npm run preview      # Serves local preview of built site
```

### Deployment
- Automatic via GitHub Actions on push to `main` or `development`
- Secrets required: `SSH_PRIVATE_KEY`, `VPS_HOST`, `VPS_USER`
- Server: Debian 12, Nginx, Certbot/Let's Encrypt SSL
- Root: `/var/www/gnarlybob.net/travel/`

## Project Conventions

### Tone & Design Philosophy
- **Premium, adventurous, visual**: High-impact imagery, premium spacing, smooth transitions
- **Crowd-averse friendly**: Emphasize solitude, selective viewpoints, early-morning timing
- **Photo-first**: Maximize "aesthetic ROI" per activity—short trails with calendar-cover views
- **Semantic HTML5**: Use proper elements (`<figure>`, `<figcaption>`, `<section>`, `<article>`)

### Naming & Organization
- **Destinations**: Use lowercase with hyphens (`algonquin`, `riviere-du-loup`, `saguenay`)
- **Routes**: `/pitch-decks/{destination}/` → `src/pages/pitch-decks/{destination}/index.astro`
- **Accent Colors**: Define per destination (Algonquin: green `hsl(150 80% 45%)`, Saguenay: blue `hsl(205 85% 52%)`, RDL: orange `hsl(28 90% 55%)`)

### SEO
- Every page has unique `title` (in Layout) and `description` (meta tag)
- Format: `{title} | Travel` (e.g., "Algonquin Provincial Park | Travel")
- Default description: "Summer 2026 Travel Pitch Decks"

## Critical Implementation Details

### Image Captions
- Use `set:html` for HTML captions (with attribution links)
- Avoid hardcoding image paths—always interpolate with `baseUrl`

### Slide Content
- `body` field: HTML string (wrapped in `<p>` tags), rendered with `set:html`
- `bullets`: Array of strings (auto-wrapped in `<li>` elements)
- **Max slides**: 12 per deck (enforced in PitchDeck.astro)

### Accessibility
- All images require `alt` attributes
- Buttons have `aria-label`
- Deck navigation has `aria-current`, `aria-live`, `role` attributes
- Use semantic headings (`h1` → `h2`/`h3` hierarchy)

## Common Maintenance Tasks

**Add a new destination deck**:
1. Create `src/pages/pitch-decks/{destination}/index.astro`
2. Import PitchDeck, define slides array with content
3. Add destination entry to `src/pages/index.astro` (links grid)
4. Create image folder: `public/slide-images/{destination}/`
5. Upload images, reference in slide objects

**Update styling**: Edit `src/styles/global.css` (CSS vars) or component `<style>` blocks

**Fix broken links**: Search for hardcoded paths → use `import.meta.env.BASE_URL` interpolation

## Related Files
- [../.cursorrules](../.cursorrules) — Project tone, tech stack, deployment constraints
- [../README.md](../README.md) — User-facing overview, setup, deployment
- [../astro.config.mjs](../astro.config.mjs) — Base URL, site URL configuration
