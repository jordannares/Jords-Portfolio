# Project notes for coding agents

- This is a Next.js App Router project. Prefer Server Components by default; add `"use client"` only when browser state or event handlers are needed.
- Use TypeScript and the `@/*` alias for imports from `src/`.
- Tailwind CSS v4 is configured with `@tailwindcss/postcss`; global styles and design tokens live in `src/app/globals.css`.
- Keep portfolio sample work labelled as concept studies until it is replaced with real case studies.
- Respect the existing reduced-motion styles when adding animations.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before considering a change complete.
