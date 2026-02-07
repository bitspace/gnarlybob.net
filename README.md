# gnarlybob.net

Personal landing page at [gnarlybob.net](https://gnarlybob.net) — a static site with a cyberpunk/HUD aesthetic.

## Technical Stack

- **Framework**: [Astro 5](https://astro.build/) (static output, no client-side JS)
- **Language**: TypeScript (strict)
- **Styling**: Vanilla CSS with CSS custom properties (no utility frameworks)
- **Fonts**: Google Fonts (Inter + JetBrains Mono)
- **Deployment**: Debian 12 VPS with Nginx & Certbot (SSL)
- **CI/CD**: GitHub Actions

## Development

### Prerequisites
- Node.js (v20 or higher)
- npm

### Local Setup
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:4321)
npm run build      # Production build → dist/
npm run preview    # Preview production build
npx astro check    # TypeScript type checking
```

## Project Structure

```
src/
├── pages/
│   ├── index.astro        # Landing page
│   └── health.json.ts     # Health check endpoint
├── layouts/
│   └── BaseLayout.astro   # Root HTML layout
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   └── Footer.astro
├── styles/
│   └── global.css         # CSS variables, utilities, breakpoints
public/
└── favicon.svg
```

## Deployment

GitHub Actions workflow deploys on push to `main`:
1. `npm ci` → `npm run build`
2. Deploys `dist/` to `/var/www/gnarlybob.net/` via SSH

### Required Secrets
- `SSH_PRIVATE_KEY`: Private key for VPS access
- `VPS_HOST`: IP address or domain of the VPS
- `VPS_USER`: SSH username

### Server Environment
- **OS**: Debian 12
- **Web Server**: Nginx
- **SSL**: Certbot / Let's Encrypt
