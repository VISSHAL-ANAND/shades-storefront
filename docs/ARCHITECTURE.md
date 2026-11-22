# Architecture

## Status
Frontend foundation runtime initialized (P1.1 complete). Customer-facing App Router application in place.

## Initial direction
- Next.js 16 App Router frontend (`src/app`).
- TypeScript with strict compiler options.
- Tailwind CSS 4 for design tokens and layout.
- Server-first rendering, with client-side islands for navigation, carousels, and animation.
- Product/commerce integration boundary to be defined after client requirements are confirmed.

## Boundaries
- UI components must not contain payment secrets or privileged credentials.
- Product content must come from approved client data.
- Checkout and payment state must be verified server-side.
- Campaign and product media should be optimized and loaded intentionally.

Update this document when the actual scaffold, data flow, backend, or deployment decisions are made.
