# AI Agent Instructions - Gnarly Bob Travel

You are an AI assistant helping to build the travel section of `gnarlybob.net`. Follow these rules and guidelines strictly.

## Core Directives
- **Aesthetics First**: This is a premium travel site. UI must be "wowed" at first glance. Use vibrant colors, glassmorphism, smooth animations, and modern typography (e.g., Google Fonts).
- **No Utility Context**: Do NOT use TailwindCSS or other utility-first frameworks. Use **Vanilla CSS**.
- **Theming**: Use CSS Variables defined in a global location (e.g., `src/styles/variables.css`) for consistent theming.
- **Pathing**: The site is hosted at `/travel`. Always account for the `base` path in links and assets. Use Astro's `import.meta.env.BASE_URL` where necessary.
- **Structure**: Maintain a clean Astro project structure. Use `.astro` components for logic and templating.

## Style Guidelines
- **Typography**: Prefer modern, clean sans-serif fonts.
- **Spacing**: Use a consistent spacing scale via CSS variables.
- **Interactions**: Add subtle hover effects and micro-animations to make the site feel alive.
- **Responsive**: All designs must be fully responsive, focusing on a premium mobile experience.

## Technical Requirements
- **Framework**: Astro (Static).
- **Deployment**: The `dist/` folder is synced to `/var/www/gnarlybob.net/travel/`.
- **Naming**: Use descriptive, semantic class names (e.g., `.pitch-deck-card` instead of `.p-4-bg-blue`).

## MVP Content: Summer 2026 Pitch Decks
The primary focus is on 3 distinct pitch decks for Summer 2026 travel. Each should have a high-impact, visual-first presentation style.
