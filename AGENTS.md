# Agent Instructions

## Project Overview

**gnarlybob.net** is a high-performance, static personal landing page built with **Astro 5** and a cyberpunk/HUD aesthetic. The site is fully static (no client-side JavaScript), uses strict TypeScript, and relies on Vanilla CSS with CSS variables for theming.

## Architecture & Stack

- **Framework**: Astro 5.16.1 (static output, no hydration)
- **Language**: TypeScript (strict)
- **Styling**: Vanilla CSS only with CSS custom properties (no Tailwind or utility frameworks)
- **Fonts**: Google Fonts (Inter + JetBrains Mono)
- **No tests/linters**: none configured

### Directory Structure

- `src/pages/`: `index.astro` (landing page), `health.json.ts` (health endpoint)
- `src/layouts/`: `BaseLayout.astro` (root HTML layout)
- `src/components/`: `Header.astro`, `Hero.astro`, `Footer.astro` (scoped styles only)
- `src/styles/`: `global.css` (CSS variables, utilities, breakpoints)
- `public/`: static assets

## Design System & Conventions

- **Vanilla CSS only** — never introduce Tailwind/UnoCSS or utility frameworks
- **CSS variables for theming** — do not hardcode colors or spacing; use variables in `src/styles/global.css`
- **Component-scoped styles** — use `<style>` blocks within `.astro` files
- **Static output only** — no client-side hydration, no framework components
- **Astro config is intentionally minimal** — keep `astro.config.mjs` empty

### Key CSS Variables

- Colors: `--color-bg`, `--color-panel`, `--color-primary`, `--color-accent`, `--color-success`, `--color-text-main`, `--color-text-muted`
- Fonts: `--font-sans`, `--font-mono`
- Spacing: `--space-xs` through `--space-xl`

### Utilities

- `.hud-panel`: glass effect + bracket corners via `::before`/`::after`
- `.hud-text`: monospace, uppercase, cyan
- `.text-gradient`: blue → cyan gradient text
- `.container`: max-width 1400px with responsive padding

## Development Commands

```bash
npm run dev        # Start dev server (localhost:4321) with HMR
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npx astro check    # TypeScript type checking
```

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys on push to `main`:
1. `npm ci` → `npm run build`
2. `rsync` `dist/` to `/var/www/gnarlybob.net/` via SSH

Required secrets: `SSH_PRIVATE_KEY`, `VPS_HOST`, `VPS_USER`.
Server: Debian 12 + Nginx + Certbot.

## Issue Tracking (bd / beads)

Run `bd onboard` to get started.

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Session Completion (Landing the Plane)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

1. File issues for remaining work
2. Run quality gates (if code changed) — tests/linters/builds as applicable
3. Update issue status (close finished, update in-progress)
4. **Push to remote**:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # Must show "up to date with origin"
   ```
5. Clean up — clear stashes, prune remote branches
6. Verify — all changes committed and pushed
7. Hand off — provide context for next session

**Critical rules**:
- Work is NOT complete until `git push` succeeds
- Never stop before pushing
- Never say "ready to push when you are" — you must push
- If push fails, resolve and retry until it succeeds

## Legacy / Outdated Artifacts

The travel pitch deck section was removed (PR #5). References to `/travel` or pitch decks are outdated. Legacy artifacts:
- `.cursorrules` (old `/travel` config)
- `.agent/` directory (pitch deck workflows)
- `public/slide-images/` (unused images)

## Explicit "Do Not" List

- Do not add Tailwind/UnoCSS or any CSS framework
- Do not add client-side JavaScript or framework components
- Do not hardcode colors or spacing (use CSS variables)
- Do not commit to `main` directly (use a feature branch)
