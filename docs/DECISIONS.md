# Decisions

## D-001 — Private repository
- Status: Approved.
- Repository: VISSHAL-ANAND/shades-storefront.
- Default branch: main.

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
- Styling: Tailwind CSS 4.3.5 integrated via @tailwindcss/postcss 4.3.5 and PostCSS 8.5.33.
- Linter: ESLint 9.39.5 with eslint-config-next.
- Package Manager: pnpm 10.33.0.
- Layout: src/app/ directory layout.

## D-007 — Build engine and typography baseline
- Status: Approved (P1.1).
- Production build uses next build --webpack for the established Windows workflow.
- Typography baseline uses system font fallbacks for reliable offline builds.
- GSAP and other animation libraries are deferred to P2 until the motion prototype is reviewed.

## D-008 — Design system and accessible responsive shell
- Status: Implemented and committed in a1e4899; post-commit review corrections applied, local revalidation pending.
- Provisional tokens are defined in src/app/globals.css; client brand approval is still pending.
- Solid-color contrast: Charcoal on Cream 17.53:1, Forest on Cream 12.94:1, Stone on Cream 6.75:1. Beige on Cream is 1.23:1 and is decorative only.
- Typography uses offline-safe serif and system sans stacks; no external font requests are required.
- Header and mobile drawer share one navigation data source. Until category/editorial sections exist, the only active navigation destination is #store-info.
- Footer contains only a real Store Information link; future policy, care, collection, and appointment links must be added only when their destinations are implemented and approved.
- Native dialog provides modal behavior; local revalidation must confirm Escape, backdrop dismissal, focus behavior, and scroll-lock restoration.
- Visible navigation links enforce a 44px minimum height; IconButton variants enforce a 44px minimum target.
- Footer muted text and focus indicators were corrected for the dark background. Reduced-opacity Stone text on Cream was removed from the homepage.
- No invented address, hours, contact details, product data, prices, or policies.

## Pending
Backend/database, payment provider/account, inventory source/sync, delivery/pickup, authentication, hosting, and domain.
