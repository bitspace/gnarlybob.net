---
description: How to add a new Summer 2026 pitch deck
---

1. Create a new Astro file in `src/pages/pitch-decks/[name].astro`.
2. Use the existing CSS variables for styling to ensure consistency.
3. Add the deck to the list of candidates on the main `/travel` landing page (`src/pages/index.astro`).
4. Ensure any new images are added to `public/images/` and referenced correctly with the `/travel` base path.
5. Commit and push to `main` to trigger the automated deployment.
