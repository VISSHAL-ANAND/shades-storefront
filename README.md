# Shades Storefront

Private repository for the Shades Coimbatore fashion storefront demonstration.

## Product direction
A premium, cinematic, editorial fashion experience inspired by the visual references supplied by the client: CANALI-style campaign storytelling, a Nike-style continuous horizontal clothing runway, and interactive product browsing.

## Frontend demonstration scope
- Virtual-store homepage with a light editorial showroom rail and new arrivals directly below.
- Responsive sample fit-advisor sheet with measurement sliders and a demo-only size recommendation.
- Responsive category discovery and editorial sections.
- Seamless horizontal rolling product runway with pause-on-hover/focus, touch scrolling and reduced-motion support.
- Product cards with alternate-image transitions and dimensional hover.
- Shop catalogue, category collections, product detail, colour/size/quantity selection.
- Browser-local shopping bag and simulated checkout/order confirmation.
- Search, editorial/about page, mobile navigation and store-information placeholder.

## Demo-only boundaries
This is a frontend demonstration. Catalogue names, local vector garment illustrations, prices, variants and stock are sample content. Cart state is stored in the browser. Checkout and order confirmation are simulated locally: no order is sent, no payment is collected, and no personal data is transmitted. Shipping, tax, inventory and customer communications are not connected.

The fit advisor uses sample size guidance and is not a guarantee of fit. Local vector artwork keeps the demo self-contained until approved product photography and catalogue data are supplied.

No real store address, operating hours, contact details, product catalogue or business policy has been invented.

## Stack
Next.js 16.4.6 App Router, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5 and pnpm 10.33.0. No 3D runtime dependency is currently required.

## Local development
Run pnpm install --frozen-lockfile, then pnpm dev. Open http://localhost:3000.

## Validation
Run pnpm lint, pnpm typecheck and pnpm build.

## Engineering notes
Work directly on main without force-pushing. Read AGENTS.md and project docs before substantial changes. Never commit secrets or real customer data. Keep demo behavior clearly labelled.
