# Agent Instructions — Shades Storefront

## Mandatory startup checks
1. Read this file, `docs/STATE.md`, `docs/TASKS.md`, and `docs/DECISIONS.md`.
2. Inspect repository files and Git status before changing anything.
3. Read relevant documentation before implementation.
4. Report branch, working-tree state, and planned files before substantial changes.

## Execution discipline
- Work only on the active task in `docs/TASKS.md`; use small, reviewable steps.
- Do not silently expand scope or overwrite/delete existing work without approval.
- Explain dependency additions and avoid unnecessary libraries.
- Never invent client product data, prices, inventory, policies, addresses, or assets.
- Use clearly labelled placeholders until approved client content is supplied.
- Never commit secrets, credentials, customer data, or real `.env` files.
- Do not claim a command or test passed unless it was run and its output inspected.
- Use semantic, accessible HTML and keyboard-operable controls.
- Respect `prefers-reduced-motion`; animation must not block shopping or navigation.
- Optimize media loading and mobile performance.

## Design requirements
- Cinematic editorial fashion direction, not a generic ecommerce template.
- Preserve Shades' identity. Cream, forest green, warm beige, and charcoal are provisional visual cues, pending brand approval.
- The signature rolling clothing display must loop seamlessly, support touch interaction, provide a reduced-motion alternative, and expose products as real links.
- Keep motion restrained outside campaign moments.
- Prioritize mobile shopping usability and readable contrast.

## Documentation and Git
- Update relevant docs when decisions, scope, implementation status, or test results change.
- Keep `STATE.md` factual; record unknowns rather than guessing.
- Use `main` as the agreed default branch.
- Inspect `git status` before staging or committing.
- Never force-push or rewrite history.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
