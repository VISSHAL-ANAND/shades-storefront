# Tasks

## P1.1 Repository and environment foundation — Completed (Awaiting Review Before Commit)

### Tasks
1. [x] Inspect Git status, branch, repository root, and installed Node.js/package-manager versions. (main, clean, Node v22.20.0, pnpm 10.33.0).
2. [x] Confirm repository contents; do not overwrite existing work. (Verified existing docs, README, AGENTS.md, .gitignore, .env.example).
3. [x] Scaffold a stable Next.js application using TypeScript and the App Router. (Next.js 16.4.6, React 19.3.0, TypeScript 5.9.3, App Router in `src/app`).
4. [x] Configure Tailwind using official Next.js integration. (Tailwind CSS 4.3.5, `@tailwindcss/postcss` 4.3.5, PostCSS 8.5.33, `postcss.config.mjs`, and `@import "tailwindcss"` in `globals.css`).
5. [x] Add only foundation dependencies. Evaluate GSAP during the animation milestone; do not install it prematurely. (Zero extraneous dependencies; removed unnecessary `@tailwindcss/turbopack`).
6. [x] Add supported scripts for development, build, lint, and type checking. (`dev`, `build`, `start`, `lint`, `typecheck`).
7. [x] Validate `.gitignore` and `.env.example`. (Maintained `.env.example`, added `*.tsbuildinfo` and `next-env.d.ts` to `.gitignore`).
8. [x] Establish source layout based on actual needs; avoid empty placeholder directories. (`src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/app/favicon.ico`).
9. [x] Update README and docs with exact versions, commands, and decisions.
10. [x] Run install, lint, typecheck, and production build; record exact outcomes. (`pnpm lint`: exit 0; `pnpm typecheck`: exit 0; `pnpm build`: exit 0; actual CSS selectors verified).
11. [x] Show Git status and change summary. Stop for user review before committing.

### Acceptance criteria status
- [x] Next.js app starts locally (`pnpm dev` verified on localhost with HTTP 200).
- [x] Production build succeeds (`pnpm build` exited 0; routes `/` and `/_not-found` prerendered).
- [x] Actual Tailwind output verified in built production stylesheet.
- [x] Lint and type checks pass with 0 errors and 0 warnings.
- [x] No secrets are committed.
- [x] Documentation matches the actual scaffold and versions.
- [x] Homepage design withheld (placeholder only).

## Later milestones
- P1.2 Design system and responsive shell.
- P2 Cinematic homepage and rolling clothing showcase.
- P3 Product discovery and product detail experience.
- P4 Cart and checkout.
- P5 QA, accessibility, performance, and launch readiness.

Do not begin later milestones without reviewing and updating this task list.
