# Tasks

## P1.1 Repository and environment foundation — Completed & Committed (1b9893a)

### Completed
- [x] Inspect Git status, branch, repository root, and installed Node.js/package-manager versions.
- [x] Confirm repository contents without overwriting existing work.
- [x] Scaffold Next.js App Router with TypeScript.
- [x] Configure Tailwind CSS 4 using the official PostCSS integration.
- [x] Add foundation dependencies and scripts.
- [x] Validate .gitignore and .env.example.
- [x] Run install, lint, typecheck, production build, and development-server checks.
- [x] Update README and project documentation.

## P1.2 Design system and responsive shell — Committed (a1e4899); review corrections applied

### Implemented
- [x] Define provisional editorial design tokens in Tailwind v4 @theme.
- [x] Configure offline-safe serif and sans typography stacks.
- [x] Calculate contrast for the solid brand palette.
- [x] Implement Container, Section, Button, Badge, IconButton, and icon primitives.
- [x] Implement AnnouncementBar, Header, MobileNav, and Footer.
- [x] Implement native dialog navigation with Escape and backdrop dismissal and body scroll locking.
- [x] Implement skip-to-content link and semantic root layout.
- [x] Maintain placeholders for unconfirmed store information.
- [x] Add reduced-motion and focus-visible styling.
- [x] Remove dead navigation destinations until their target sections/pages exist.
- [x] Enforce 44px minimum height for visible navigation links and 44px minimum dimensions for icon buttons.

### Revalidation required after review corrections
- [ ] Run pnpm lint.
- [ ] Run pnpm typecheck.
- [ ] Run pnpm build.
- [ ] Verify responsive overflow at 390px, 768px, 1024px, and 1440px.
- [ ] Verify visible interactive targets are at least 44px high and icon controls are at least 44px square.
- [ ] Verify keyboard focus contrast, reduced-motion behavior, dialog Escape/backdrop behavior, and scroll-lock restoration.
- [ ] Confirm the working tree is clean after pulling the latest main.

## Later milestones
- P2 Cinematic homepage and rolling clothing showcase.
- P3 Product discovery and product detail experience.
- P4 Cart and checkout.
- P5 QA, accessibility, performance, and launch readiness.

Do not begin later milestones until P1.2 revalidation passes.
