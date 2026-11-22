# Architecture

## Frontend preview
- Next.js App Router routes live in src/app.
- Product catalogue and collection metadata are currently static in src/lib/products.ts.
- Storefront UI and interactive experiences are in src/components/storefront/Storefront.tsx.
- Cart state is isolated in src/context/CartContext.tsx and persisted locally in the browser.
- Root layout wraps the site in CartProvider and composes announcement, header, main content and footer.
- Product and collection slugs are statically generated from preview data.

## Trust boundaries
- Static sample catalogue is presentation-only, not authoritative inventory.
- Browser localStorage is not a trusted order or payment record.
- Checkout form is a non-submitting demonstration and does not send PII.
- Payment, inventory, customer identity and order state must be verified server-side when backend work begins.

## Future integration boundary
Introduce a typed server-side data access layer for catalogue, stock, cart/order and payment once the client confirms the authoritative systems and operational requirements.
