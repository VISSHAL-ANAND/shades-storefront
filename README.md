# Shades Storefront

Private repository for the Shades Coimbatore customer-facing fashion storefront.

## Current implementation
- Cinematic editorial homepage and responsive navigation.
- Product category browsing, new-arrival and category collections.
- Continuous rolling clothing showcase with hover/focus pause, touch scrolling and reduced-motion fallback.
- Product detail pages with size, colour and quantity selection.
- Local browser-persisted shopping bag.
- Checkout form preview, search and editorial brand page.
- Responsive footer and store-information placeholder.

## Preview limitations
The catalogue uses temporary Unsplash editorial images and sample product names, descriptions, prices and variants. Replace these with client-approved product photography and catalogue data before launch. The cart is browser-local only. Checkout is a frontend demonstration: it does not create an order, collect payment, calculate shipping/tax or send customer data to a server.

No real store address, operating hours, contact details, delivery/return policies, stock or payment provider has been invented. Those must be supplied and integrated.

## Stack
Next.js 16.4.6 App Router, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5 and pnpm 10.33.0.

## Local development
Run pnpm install --frozen-lockfile, then pnpm dev. Open http://localhost:3000.

## Validation
Run pnpm lint, pnpm typecheck and pnpm build.

## Engineering notes
Work directly on main without force-pushing. Read AGENTS.md and project docs before substantial changes. Never commit secrets or real customer data. Use client-approved assets and business rules for production.
