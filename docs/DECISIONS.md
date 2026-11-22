# Decisions

## D-001 — Private repository
- Status: Approved.
- Repository: `VISSHAL-ANAND/shades-storefront`.
- Default branch: `main`.

## D-002 — Guided implementation
- Status: Approved.
- Work in reviewable milestones; inspect and test before moving forward.

## D-003 — Visual direction
- Status: Approved direction.
- Cinematic editorial fashion, using the supplied CANALI reference as inspiration while preserving Shades' identity.

## D-004 — Storefront scope
- Status: Approved initial scope.
- Customer-facing storefront. Admin dashboard and advanced operational integrations are separate unless later agreed.

## D-005 — Rolling clothing display
- Status: Required.
- Continuous horizontal showcase with seamless looping, product interaction, mobile touch support, and reduced-motion behavior. Exact interaction details will be prototyped and reviewed.

## D-006 — Foundation scaffold stack
- Status: Approved (P1.1).
- Frontend framework: Next.js 16.4.6 (App Router) with React 19.3.0.
- Language: TypeScript 5.9.3 (strict mode enabled).
- Styling: Tailwind CSS 4.3.5 integrated via `@tailwindcss/postcss` 4.3.5 and PostCSS 8.5.33 with `postcss.config.mjs`. Unnecessary `@tailwindcss/turbopack` removed.
- Linter: ESLint 9.39.5 with `eslint-config-next`.
- Package Manager: pnpm 10.33.0.
- Layout: `src/app/` directory layout with minimal clean root layout and placeholder home page.

## D-007 — Build engine and typography baseline
- Status: Approved (P1.1).
- `next.config.ts` streamlined to standard configuration without custom Turbopack CSS loader overrides.
- Production build uses `next build --webpack` to ensure cross-platform Windows stability without child-process IPC failure.
- Typography baseline relies on system font fallbacks in `src/app/layout.tsx` and `src/app/globals.css` rather than build-time remote Google Fonts fetches, ensuring reliable offline/sandboxed builds. Approved brand typography will be imported locally in P1.2.
- GSAP and other animation libraries are deferred to P2 per task discipline.

## Pending
Backend/database, payment provider/account, inventory source/sync, delivery/pickup, authentication, hosting, and domain.
