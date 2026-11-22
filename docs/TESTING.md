# Testing Strategy

## Foundation
The foundation commit 67222d2 was locally reported by the user as passing pnpm lint, pnpm typecheck and pnpm build.

## Full storefront preview
Required local checks:
- pnpm lint
- pnpm typecheck
- pnpm build
- Direct route checks for /, /shop, all /collections/* routes, /product/*, /cart, /checkout, /search and /about.
- Responsive checks at 390px, 768px, 1024px and 1440px.
- No horizontal overflow; minimum 44px interactive targets where applicable.
- Keyboard navigation, dialog focus behavior, visible focus and reduced-motion.
- Rolling showcase loop, pause on hover/focus/active, touch swipe and reduced-motion fallback.
- Product variant selection, quantity, add-to-bag, cart persistence, quantity update, remove and subtotal.
- Search matching and empty state.
- Checkout preview validation and explicit no-order/no-payment notice.
- Remote image loading, layout stability and mobile performance.

Never claim a test passed unless the command or interaction was executed and the output inspected.
