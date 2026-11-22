# Technical Requirements

## Current frontend
- Next.js 16 App Router, React 19, TypeScript and Tailwind CSS 4.
- Server Components for route shells and static catalogue; Client Components for product controls, cart, filters and simulated checkout.
- Static sample catalogue and generated product/collection routes.
- Browser localStorage for demo cart only.
- Remote Unsplash placeholder images configured in next.config.ts.

## 3D and motion approach
- CSS perspective, preserve-3d transforms, layered cards, pointer-reactive custom properties and keyframe float animations.
- CSS-only product image crossfades and dimensional hover transitions.
- CSS continuous runway animation over a duplicated product sequence; pause on hover/focus/active.
- CSS scroll-timeline reveal as progressive enhancement behind @supports.
- prefers-reduced-motion disables nonessential motion and leaves content accessible.
- No Three.js, WebGL or react-three-fiber dependency is required for this presentation-only 3D treatment.

## Demo checkout
- Client-side form validation and local success state only.
- Generates a demo reference and renders a confirmation summary from the local cart.
- Clears the local cart after simulated confirmation.
- Does not transmit PII, create a backend order, process payment or reserve inventory.

## Trust boundaries
- Sample catalogue and browser storage are presentation-only.
- No authoritative stock, prices, customer identity or order state exists.
- Do not connect payment, inventory or backend services within the current approved scope.
