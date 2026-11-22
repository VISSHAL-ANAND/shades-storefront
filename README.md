# Shades Storefront

Private repository for the Shades Coimbatore fashion storefront demonstration.

## Product direction
A premium, cinematic, editorial fashion experience inspired by the visual references supplied by the client: CANALI-style campaign storytelling, a Nike-style continuous horizontal clothing runway, and interactive product browsing.

## Frontend demonstration scope
- Full-screen cinematic campaign hero with interactive CSS 3D product-card composition and pointer-reactive tilt.
- Responsive category discovery and editorial sections.
- Seamless horizontal rolling product runway with pause-on-hover/focus, touch scrolling and reduced-motion support.
- Product cards with alternate-image transitions and dimensional hover.
- Shop catalogue, category collections, product detail, colour/size/quantity selection.
- Browser-local shopping bag and simulated checkout/order confirmation.
- Search, editorial/about page, mobile navigation and store-information placeholder.

## Demo-only boundaries
This is a frontend demonstration. Catalogue names, imagery, prices, variants and stock are sample content. Cart state is stored in the browser. Checkout and order confirmation are simulated locally: no order is sent, no payment is collected, and no personal data is transmitted. Shipping, tax, inventory and customer communications are not connected.

The CSS 3D treatment creates depth, perspective, floating cards and pointer-reactive movement; it does not claim to be a photorealistic WebGL garment model. Actual 3D garment assets can be introduced if supplied later.

No real store address, operating hours, contact details, product catalogue or business policy has been invented.

## Stack
Next.js 16.4.6 App Router, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5 and pnpm 10.33.0. No 3D runtime dependency is currently required.

## Local development
Run pnpm install --frozen-lockfile, then pnpm dev. Open http://localhost:3000.

## Validation
Run pnpm lint, pnpm typecheck and pnpm build.

## Engineering notes
Work directly on main without force-pushing. Read AGENTS.md and project docs before substantial changes. Never commit secrets or real customer data. Keep demo behavior clearly labelled.
