# Testing Strategy

## Previously verified foundation
The foundation commit 67222d2 was locally reported by the user as passing pnpm lint, pnpm typecheck and pnpm build.

## Current cinematic frontend changes
Required local checks:
- pnpm lint
- pnpm typecheck
- pnpm build
- Direct route checks for /, /shop, all /collections/* routes, /product/*, /cart, /checkout, /search and /about.
- Responsive checks at 390px, 768px, 1024px and 1440px.
- No horizontal overflow; minimum 44px interactive targets where applicable.
- Keyboard navigation, visible focus and reduced-motion behavior.
- Hero pointer tilt resets on pointer leave; touch devices remain usable.
- Continuous runway has no visible loop jump; pauses on hover/focus/touch and remains manually scrollable.
- Product image crossfade, product variant selection, add-to-bag, cart persistence, quantity update and removal.
- Simulated checkout produces a demo reference and order summary, clears the local cart and sends no network request.
- External image loading, layout stability and mobile performance.

Never claim a test passed unless the command or interaction was executed and output inspected.
