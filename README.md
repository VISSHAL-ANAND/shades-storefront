# Shades Storefront

Private project repository for the Shades Coimbatore cinematic fashion storefront.

## Current status
- Stage: Phase 1 — Foundation; P1.2 (Design System and Responsive Shell) is committed. Post-commit review corrections are applied; local revalidation is pending.
- Development environment: Local Windows PowerShell workflow with GitHub-backed source review. Google Antigravity is optional.
- Workflow: Guided, milestone-based; changes are made on the agreed main branch.
- Implementation stack: Next.js 16.4.6 (App Router), React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5 via @tailwindcss/postcss 4.3.5, PostCSS 8.5.33, ESLint 9.39.5.
- Package manager: pnpm 10.33.0 (Node.js v22.20.0).

## Available scripts
- pnpm dev: Starts Next.js development server
- pnpm build: Runs production build (next build --webpack)
- pnpm start: Starts production server
- pnpm lint: Runs ESLint
- pnpm typecheck: Runs TypeScript compiler typecheck (tsc --noEmit)

## Product direction
Build a premium cinematic storefront for Shades Coimbatore. Use the supplied CANALI reference as visual inspiration while preserving Shades' own brand identity.

The current scope is the customer-facing storefront. A custom admin dashboard, POS integration, advanced inventory synchronization, loyalty systems, and complex logistics integrations are separate scope unless approved.

## Key experience requirements
- Cinematic campaign hero using approved brand media.
- Continuous horizontal rolling clothing showcase with seamless looping.
- Product discovery, categories, and product detail pages.
- Variants, cart, checkout, online payments (provider and flow to be finalized).
- Store information, directions, and WhatsApp contact.
- Responsive, performant, accessible experience.

Read AGENTS.md, docs/STATE.md, and docs/TASKS.md before making changes.
