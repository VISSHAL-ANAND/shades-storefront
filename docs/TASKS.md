# Tasks

## P1.1 Repository and environment foundation — Completed & Committed (`1b9893a`)

### Tasks
1. [x] Inspect Git status, branch, repository root, and installed Node.js/package-manager versions. (main, clean, Node v22.20.0, pnpm 10.33.0).
2. [x] Confirm repository contents; do not overwrite existing work.
3. [x] Scaffold a stable Next.js application using TypeScript and the App Router. (Next.js 16.4.6, React 19.3.0, TypeScript 5.9.3).
4. [x] Configure Tailwind using official Next.js integration. (Tailwind CSS 4.3.5, `@tailwindcss/postcss` 4.3.5, PostCSS 8.5.33).
5. [x] Add only foundation dependencies. (Zero extraneous; `@tailwindcss/turbopack` removed).
6. [x] Add supported scripts for development, build, lint, and type checking.
7. [x] Validate `.gitignore` and `.env.example`.
8. [x] Establish source layout based on actual needs.
9. [x] Update README and docs with exact versions, commands, and decisions.
10. [x] Run install, lint, typecheck, and production build; record exact outcomes.
11. [x] Show Git status and change summary. Stop for user review before committing.

### Acceptance criteria status
- [x] Next.js app starts locally (`pnpm dev` verified on localhost with HTTP 200).
- [x] Production build succeeds.
- [x] Actual Tailwind output verified in built production stylesheet.
- [x] Lint and type checks pass with 0 errors and 0 warnings.
- [x] No secrets are committed.
- [x] Documentation matches the actual scaffold and versions.
- [x] Homepage design withheld (placeholder only).

## P1.2 Design system and responsive shell — Corrected & Verified (Awaiting Review Before Commit)

### Tasks
1. [x] Define provisional editorial design tokens in Tailwind v4 `@theme` (`src/app/globals.css`).
2. [x] Configure typography hierarchy using offline-safe system serif and sans font stacks.
3. [x] Verify WCAG contrast compliance using actual computed values.
4. [x] Implement reusable UI primitives (`Container`, `Section`, `Button`, `Badge`, `IconButton`, `Icons`).
5. [x] Implement responsive shell components (`AnnouncementBar`, `Header`, `MobileNav`, `Footer`).
6. [x] Implement accessible native `<dialog>` mobile drawer with focus trap, backdrop click, Escape key handling, and body scroll lock.
7. [x] Implement Skip-to-Content link and root layout structure (`src/app/layout.tsx`).
8. [x] Build design system demonstration page (`src/app/page.tsx`). No fake buttons or non-existent anchor links.
9. [x] Enforce placeholder discipline (`[pending client details]`) for all store contact/policy data.
10. [x] Raise desktop nav breakpoint to `lg:` (1024px) to eliminate tablet horizontal overflow.
11. [x] Verify responsive layout across 390px, 768px, 1024px, and 1440px viewports — all clean.
12. [x] Verify all visible interactive touch targets meet ≥44px height minimum.
13. [x] Remove non-functional button interactions and unverified business claims.
14. [x] Verify reduced-motion CSS rules and `:focus-visible` indicators.
15. [x] Correct body scroll-lock cleanup to preserve and restore pre-existing overflow value.
16. [x] Run lint, typecheck, production build, and `git diff --check`.
17. [x] Update documentation to reflect actual implemented state.

### Acceptance criteria status
- [x] Design tokens configured in CSS-first Tailwind v4 setup.
- [x] WCAG contrast verified using actual computed values: Charcoal 17.53:1 (AAA), Forest 12.94:1 (AAA), Stone 6.75:1 (AA+). Beige 1.23:1 — decorative only.
- [x] Responsive navigation: desktop at `lg:` (1024px+), drawer for mobile and tablet (below 1024px).
- [x] No horizontal overflow at 390px, 768px, 1024px, or 1440px.
- [x] All visible interactive touch targets ≥44×44px.
- [x] Skip-to-Content link and `:focus-visible` indicators functioning.
- [x] No business data, addresses, hours, or policies invented.
- [x] No non-functional buttons or fake anchor destinations.
- [x] Zero extraneous dependencies added (GSAP deferred to P2).
- [x] Quality checks: lint exit 0, typecheck exit 0, build exit 0, `git diff --check` exit 0.

## Later milestones
- P2 Cinematic homepage and rolling clothing showcase.
- P3 Product discovery and product detail experience.
- P4 Cart and checkout.
- P5 QA, accessibility, performance, and launch readiness.

Do not begin later milestones without reviewing and updating this task list.
