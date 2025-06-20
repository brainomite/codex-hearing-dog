# AGENTS.md — Guidance for ChatGPT Codex

## Project Overview
- Next.js **App Router** using plain **JavaScript**, not TypeScript.
- Styling with **Tailwind CSS** and UI components via **shadcn/ui**.
- **Supabase** for authentication and database.
- **Docker/devcontainer** environment with Node.js v18+, ports forwarded (e.g., 3000).

## Code Style
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
- Develop using TDD
- Commands: `npm run lint`, `npm test`, `npm run build`.
- All generated code must pass lint and build and tests.
- Provide CI/test logs for verification with PRs.

## PR / Task Guidelines
- One feature per PR.
- Title format: `[feat] Short description`.
- Include “Testing done:” section with commands and outputs.
- Provide commit logs or screenshots for verification.

## Dev Environment
- `.devcontainer` with Node.js 22+ LTS, port 3000 forwarded.
  - Make sure zsh is installed, and oh-my-zsh, git should allow for agent-forwarding
