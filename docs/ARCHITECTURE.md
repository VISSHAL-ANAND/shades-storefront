# Architecture

## Frontend demonstration
- Next.js App Router routes live in src/app.
- Product catalogue is static in src/lib/products.ts.
- Storefront experiences are in src/components/storefront/Storefront.tsx.
- Cart state is isolated in src/context/CartContext.tsx and persisted in browser localStorage.
- Root layout composes announcement, header, main content and footer.
- Product and collection slugs are statically generated from sample data.

## Visual motion
- CSS tokens, campaign scene, hero perspective, card transitions, runway animation and reduced-motion rules live in src/app/globals.css.
- CinematicHero uses CSS 3D transforms and pointer-driven CSS custom properties.
- No WebGL scene or 3D runtime dependency is currently used.

## Demo checkout
- CheckoutForm holds confirmation state in the client.
- A local demo reference and summary are generated from cart lines.
- Cart is cleared after the simulated success state.
- No request is sent to a server and no personal data is persisted or transmitted.

## Scope boundary
This is a presentation/demo frontend only. There is no backend, database, payment, inventory, real order, shipping or customer notification integration.
