# Decisions

## D-001 — Private repository
- Status: Approved. Repository VISSHAL-ANAND/shades-storefront; branch main.

## D-002 — Guided implementation
- Status: Updated by user request. Build the complete frontend demonstration in one consolidated effort, then verify as a whole.

## D-003 — Visual direction
- Status: Approved. CANALI-inspired cinematic/editorial fashion direction while preserving Shades' identity.

## D-004 — Storefront scope
- Status: Approved. Responsive homepage, virtual-store clothing rail, rolling showcase, categories, product listing/detail, fit-advisor demo, bag, demo checkout, search, editorial page and store information.

## D-005 — Rolling clothing display
- Status: Required. Continuous horizontal loop, pause on hover/focus/active touch, touch scrolling and reduced-motion alternative.

## D-006 — Frontend stack
- Status: Approved. Next.js 16.4.6, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.5, pnpm 10.33.0.

## D-007 — Preview catalogue and media
- Status: Sample content only. Local vector garment illustrations and sample product names/prices/variants are used until approved Shades photography and catalogue are supplied.

## D-008 — Cart and checkout
- Status: Browser-local cart and simulated checkout/order confirmation. No server order or payment is created.

## D-009 — Business facts
- Status: Do not invent actual store address, hours, contact, prices, stock, delivery or policy details.

## D-010 — Demo-only scope clarification
- Status: User explicitly confirmed frontend demonstration is sufficient now. Real payments, live inventory, real order creation, shipping/tax/policy integration and backend confirmation are not needed.

## D-011 — Dimensional visual implementation
- Status: CSS depth and hover transitions are used for product presentation. The virtual-store hero uses a CSS-scrolling rail; this is not a true 3D garment viewer.

## D-012 — Simulated order confirmation
- Status: The checkout should complete a convincing local demo flow with a sample reference and order summary, without sending or persisting customer data.
