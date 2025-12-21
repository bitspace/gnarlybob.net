# Gnarly Bob Travel

Deployment and development of the travel section for [gnarlybob.net](https://gnarlybob.net).

The travel content is hosted at `/travel` (e.g., `gnarlybob.net/travel`).

## Project Overview

This project uses the **Astro** static site generator to build a fast, modern travel section. The core goal of the MVP is to provide three separate "pitch decks" reviewing potential candidates for planned travel in Summer 2026.

### Key Features (MVP)
- **3 Travel Pitch Decks**: Interactive reviews of candidates for Summer 2026 travel.
- **Modern Design**: High-end aesthetics using Vanilla CSS and CSS Variables.
- **Static Performance**: Blazing fast load times leveraging Astro's static generation.

## Technical Stack

- **Framework**: [Astro](https://astro.build/)
- **Templating**: HTML / Astro Components
- **Styling**: Vanilla CSS with CSS Variables for theming (No utility frameworks like Tailwind).
- **Deployment**: Debian 12 VPS with Nginx & Certbot (SSL).
- **CI/CD**: GitHub Actions.

## Development

### Prerequisites
- Node.js (v20 or higher)
- npm

### Local Setup
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Path Configuration
Since the site is hosted under the `/travel` subpath, ensure the following is set in `astro.config.mjs`:
```javascript
export default defineConfig({
  base: '/travel',
  // ... other config
});
```

## Deployment

The site is automatically deployed via GitHub Actions when pushing to the `main` or `development` branches.

### Server Environment
- **OS**: Debian 12
- **Web Server**: Nginx
- **SSL**: Certbot / Let's Encrypt
- **Root Directory**: `/var/www/gnarlybob.net/travel/`

### Deployment Secrets
The following secrets must be configured in the GitHub repository:
- `SSH_PRIVATE_KEY`: Private key for VPS access.
- `VPS_HOST`: IP address or domain of the VPS.
- `VPS_USER`: SSH username.

## Project Structure (Planned)
- `src/pages/index.astro`: The main landing page for `/travel`.
- `src/pages/pitch-decks/`: Contains the three Summer 2026 pitch decks.
- `src/styles/`: Global CSS and theme variables.
- `src/components/`: Reusable UI elements for the pitch decks.
