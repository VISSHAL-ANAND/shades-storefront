# Technical Requirements

## Current frontend
- Next.js 16 App Router, React 19, TypeScript and Tailwind CSS 4.
- Server Components for route shells and static data; Client Components for cart, filtering, selectors and checkout preview.
- Static product and collection routes generated from the temporary catalogue.
- Temporary external images served from images.unsplash.com through an explicit Next Image remote pattern.
- Cart stored in browser localStorage under a versioned key.

## Preview limitations
No backend, product API, stock synchronization, user accounts, server cart, order creation, payment processing, shipping calculation, tax calculation or customer messaging is connected.

## Production architecture decisions deferred
Do not choose a database, commerce platform, payment integration or logistics provider until client data ownership, inventory source, operational flows and account ownership are confirmed.

## Payment security
Razorpay is a proposal, not a confirmed integration. Real checkout requires server-side order creation, signature verification, webhook verification, idempotency and secure handling of payment secrets. Client-side payment success must never be trusted.

## Media
Replace temporary stock images with client-approved optimized assets. Use responsive dimensions, meaningful alt text, lazy loading below the fold and a poster/fallback for any future campaign video.
