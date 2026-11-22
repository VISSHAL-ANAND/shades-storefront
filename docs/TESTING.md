# Testing Strategy

## Foundation milestone
Run and record dependency installation, development server startup, lint, typecheck, production build, Git status, and secret-file checks.

## Storefront milestones
- Unit tests for pure utilities and data transformations.
- Component tests for selectors, cart controls, and navigation where practical.
- End-to-end tests for product discovery and checkout.
- Responsive checks across mobile, tablet, and desktop.
- Keyboard navigation and reduced-motion checks.
- Accessibility checks for contrast, labels, focus, and semantics.
- Performance checks for media loading, layout shift, and animation smoothness.

Never report a test as passing unless it was executed and the output inspected.
