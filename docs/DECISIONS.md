# Decisions

## D-001 — Private repository
- Status: Approved. Repository VISSHAL-ANAND/shades-storefront; branch main.

## D-002 — Guided implementation
- Status: Updated by user request. Build the complete customer-facing frontend in one consolidated implementation effort, then verify as a whole. Keep production integrations separate where client requirements are unknown.

## D-003 — Visual direction
- Status: Approved direction. Cinematic editorial fashion inspired by supplied CANALI reference while preserving Shades' own identity.

## D-004 — Storefront scope
- Status: Approved. Responsive storefront, campaign hero, rolling showcase, categories, product listing/detail, bag, checkout frontend, search, editorial page and store information. Admin dashboard, POS and advanced operations are separate unless approved.

## D-005 — Rolling clothing display
- Status: Required and implemented in preview. Continuous horizontal CSS loop, product links, hover/focus/active pause, horizontal touch scrolling and reduced-motion static fallback. Browser verification remains pending.

## D-006 — Frontend stack
- Status: Approved. Next.js 16.4.6, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5, pnpm 10.33.0. Production build uses webpack.

## D-007 — Preview catalogue and media
- Status: Temporary implementation. Sample product data and Unsplash stock imagery are used to complete the visual frontend before client assets arrive. These are not real Shades products or product photography and must be replaced before launch.

## D-008 — Cart and checkout preview
- Status: Implemented as frontend-only. Cart persists in localStorage. Checkout form is a local demonstration and explicitly does not create orders, process payment or transmit personal data.

## D-009 — Business facts and production integration
- Status: Deferred. Do not invent store address, hours, contact, prices, stock, delivery, return or tax policies. Payment provider, backend, inventory source, shipping and hosting require client confirmation.
