# Technical Requirements (Provisional)

## Proposed frontend
- Next.js with TypeScript and App Router.
- Tailwind CSS, subject to scaffold compatibility.
- Server Components by default; Client Components for interactive behavior.
- GSAP may be evaluated for campaign and rolling-display motion after a prototype and performance review.

## Principles
- Keep the first milestone focused on a working frontend foundation.
- Do not choose backend/database architecture before inventory, order, and integration requirements are known.
- Separate presentation from product and commerce data access.
- Use typed data models and explicit loading/error states.
- Keep secrets server-side and out of source control.

## Media
Use optimized responsive images. Use video only where it adds campaign value, with posters, fallbacks, and reduced-motion alternatives. Do not hotlink client assets without permission.

## Payments
Razorpay is a proposed option, not a confirmed integration. Payment implementation requires client-owned account details, server-side order creation, signature verification, and webhook handling. Never trust client-side payment success alone.

## Deployment
Hosting provider, domain, CI, and production environment are not selected.
