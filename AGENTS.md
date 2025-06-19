# AGENTS.md — Guidance for ChatGPT Codex

## Project Overview
- Next.js **App Router** using plain **JavaScript**, not TypeScript.
- Styling with **Tailwind CSS** and UI components via **shadcn/ui**.
- **Supabase** for authentication and database.
- **Docker/devcontainer** environment with Node.js v18+, ports forwarded (e.g., 3000).

## Code Style
- JavaScript only — no `.ts` or type annotations.
- Functional React components with hooks.
- Tailwind utility-first styling.
- PascalCase for component filenames (e.g., `SiteHeader.js`).
- Keep code concise, accessible, and responsive.

## Structure
/app
layout.js, page.js
/components
SiteHeader.js, SiteFooter.js, etc.
/lib
supabase.js
/tests
*.test.js
/devcontainer
.gitignore
README.md

## Testing & CI
- Commands: `npm run lint`, `npm test`, `npm run build`.
- All generated code must pass lint and build.
- Provide CI/test logs for verification with PRs.

## PR / Task Guidelines
- One feature per PR.
- Title format: `[feat] Short description`.
- Include “Testing done:” section with commands and outputs.
- Provide commit logs or screenshots for verification.

## Dev Environment
- `.devcontainer` with Node.js 18+, port 3000 forwarded.
- Automatically run `npm install` on container launch.
