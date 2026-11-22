# Shades Storefront

Private project repository for the Shades Coimbatore cinematic fashion storefront.

## Current status
- Stage: Phase 1 — Foundation; task P1.1 corrected and verified (pending review before commit).
- Development environment: Google Antigravity.
- Workflow: guided, milestone-based.
- Implementation stack: Next.js 16.4.6 (App Router), React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5 via `@tailwindcss/postcss` 4.3.5, PostCSS 8.5.33, ESLint 9.39.5.
- Package manager: pnpm 10.33.0 (Node.js v22.20.0).

## Available scripts
- `pnpm dev`: Starts Next.js development server
- `pnpm build`: Runs production build (`next build --webpack`)
- `pnpm start`: Starts production server
- `pnpm lint`: Runs ESLint
- `pnpm typecheck`: Runs TypeScript compiler typecheck (`tsc --noEmit`)

## Product direction
Build a premium cinematic storefront for Shades Coimbatore. Use the supplied CANALI reference as visual inspiration while preserving Shades' own brand identity.

The current scope is the customer-facing storefront. A custom admin dashboard, POS integration, advanced inventory synchronization, loyalty systems, and complex logistics integrations are separate scope unless approved.

## Key experience requirements
- Cinematic campaign hero using approved brand media.
- Continuous horizontal rolling clothing showcase with seamless looping.
- Product discovery, categories, and product detail pages.
- Variants, cart, and online checkout.
- Store information, directions, and WhatsApp contact.
- Responsive, performant, accessible experience.

Read `AGENTS.md`, `docs/STATE.md`, and `docs/TASKS.md` before making changes.
