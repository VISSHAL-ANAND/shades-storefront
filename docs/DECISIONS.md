# Decisions

## D-001 — Private repository
- Status: Approved.
- Repository: `VISSHAL-ANAND/shades-storefront`.
- Default branch: `main`.

## D-002 — Guided implementation
- Status: Approved.
- Work in reviewable milestones; inspect and test before moving forward.

## D-003 — Visual direction
- Status: Approved direction.
- Cinematic editorial fashion, using the supplied CANALI reference as inspiration while preserving Shades' identity.

## D-004 — Storefront scope
- Status: Approved initial scope.
- Customer-facing storefront. Admin dashboard and advanced operational integrations are separate unless later agreed.

## D-005 — Rolling clothing display
- Status: Required.
- Continuous horizontal showcase with seamless looping, product interaction, mobile touch support, and reduced-motion behavior. Exact interaction details will be prototyped and reviewed.

## D-006 — Foundation scaffold stack
- Status: Approved (P1.1).
- Frontend framework: Next.js 16.4.6 (App Router) with React 19.3.0.
- Language: TypeScript 5.9.3 (strict mode enabled).
- Styling: Tailwind CSS 4.3.5 integrated via `@tailwindcss/postcss` 4.3.5 and PostCSS 8.5.33 with `postcss.config.mjs`. Unnecessary `@tailwindcss/turbopack` removed.
- Linter: ESLint 9.39.5 with `eslint-config-next`.
- Package Manager: pnpm 10.33.0.
- Layout: `src/app/` directory layout with minimal clean root layout and placeholder home page.

## D-007 — Build engine and typography baseline
- Status: Approved (P1.1).
- `next.config.ts` streamlined to standard configuration without custom Turbopack CSS loader overrides.
- Production build uses `next build --webpack` to ensure cross-platform Windows stability.
- Typography baseline relies on system font fallbacks ensuring reliable offline/sandboxed builds.
- GSAP and other animation libraries are deferred to P2 per task discipline.

## D-008 — Design system architecture, tokens, and accessible responsive shell
- Status: Implemented, corrected, and verified (P1.2, awaiting review before commit).
- Color Tokens: Defined in `src/app/globals.css` with `@theme` block:
  - `--color-shades-cream`: `#FBF9F5` (base background canvas)
  - `--color-shades-charcoal`: `#141413` (primary text, deep contrast)
  - `--color-shades-forest`: `#1B3322` (primary brand accent)
  - `--color-shades-beige`: `#E8E2D8` (decorative borders/dividers only — 1.23:1 contrast, NOT for text)
  - `--color-shades-stone`: `#5A5854` (secondary muted text)
  - `--color-shades-white`: `#FFFFFF`, `--color-shades-stone-light`: `#8E8A83`, `--color-shades-gold`: `#826938` also defined.
- Color status: All provisional pending explicit client sign-off.
- WCAG Contrast (actual computed values):
  - Charcoal `#141413` on Cream `#FBF9F5`: **17.53:1** — passes AAA (normal text ≥7:1).
  - Forest `#1B3322` on Cream `#FBF9F5`: **12.94:1** — passes AAA (normal text ≥7:1).
  - Cream `#FBF9F5` on Forest `#1B3322`: **12.94:1** — passes AAA (primary buttons).
  - Stone `#5A5854` on Cream `#FBF9F5`: **6.75:1** — passes AA (normal text ≥4.5:1).
  - Beige `#E8E2D8` on Cream `#FBF9F5`: **1.23:1** — not compliant for text. Restricted to decorative use only.
- Typography Stack:
  - Serif (`font-serif`): `Didot, "Bodoni MT", Cinzel, "Playfair Display", Georgia, serif`.
  - Sans (`font-sans`): `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  - Offline-safe; zero external fetches at build time.
- Responsive Shell Architecture:
  - `Header`: Sticky. Desktop navigation revealed at `lg:` (≥1024px). Below 1024px (mobile and tablet), hamburger drawer is used. Brand link enforces `min-h-[44px]`.
  - `MobileNav`: Native HTML `<dialog>` with `showModal()`/`close()`. Provides native focus trapping, accessibility semantics, Escape key dismissal, backdrop dismissal, and body scroll lock. Scroll-lock cleanup preserves the pre-existing overflow value.
  - `AnnouncementBar`: Neutral brand identity announcement only. No unverified service claims.
  - `Footer`: Multi-column footer with explicit placeholders; all link anchors are `#hash` placeholders until pages are built. Footer links padded to `min-h-[44px]`.
  - Touch targets: All interactive elements enforce ≥44px height minimum. Verified via CDP measurement.
  - Reduced-motion: `@media (prefers-reduced-motion: reduce)` in `globals.css`.
  - Non-functional controls: Search icon and bag button converted to non-interactive indicators pending cart/search implementation.
  - Page demonstration: No fake buttons or non-existent anchor links; editorial text with real `#store-info` anchor.

## Pending
Backend/database, payment provider/account, inventory source/sync, delivery/pickup, authentication, hosting, and domain.
