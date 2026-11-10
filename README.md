# Jords Portfolio

A responsive personal portfolio starter for a **UI/UX Developer & Web Designer**. It uses the Next.js App Router, TypeScript, Tailwind CSS v4, and a small set of practical UI utilities.

## Requirements

- Node.js **20.9.0 or newer**
- npm (included with Node.js)

## Getting started

1. Extract the `Jords-Portfolio` folder.
2. Open the folder in VS Code (or your preferred editor).
3. Open a terminal in the project folder and install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Start the local development server with Turbopack.     |
| `npm run build`     | Create an optimized production build.                  |
| `npm run start`     | Serve the production build. Run after `npm run build`. |
| `npm run lint`      | Check the project with ESLint.                         |
| `npm run lint:fix`  | Automatically fix supported ESLint issues.             |
| `npm run typecheck` | Run the TypeScript compiler without emitting files.    |

## What's included

- Next.js App Router with TypeScript
- Tailwind CSS v4 configured through `@tailwindcss/postcss`
- ESLint flat configuration with Next.js Core Web Vitals rules
- `clsx` and `tailwind-merge` with a reusable `cn()` helper
- Lucide React icons
- Responsive sticky glass-style navigation
- Letter-by-letter falling hero heading, with reduced-motion support
- Work, About, Toolkit, Process, and Contact sections
- Search/social metadata starter and SVG app icon

## Project structure

```text
Jords-Portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── falling-line.tsx
│   │   └── site-header.tsx
│   └── lib/
│       └── utils.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Personalize before publishing

1. In `src/app/page.tsx`, replace the three clearly labelled **concept studies** with real portfolio case studies. Add real screenshots, your role, process, outcomes, and working project URLs when available.
2. Replace `jordannares21@gmail.com` in the contact button with your real public contact email.
3. Update your introduction, skills, and location copy to match what you want prospective clients and employers to see.
4. In `src/app/layout.tsx`, replace `https://jords-portfolio.com` in `metadataBase` with your deployed website URL. Update the title and description as needed.
5. Add project images to `public/` and use `next/image` when you are ready to replace the CSS-based preview illustrations.

## Styling notes

The main design tokens and component styles live in `src/app/globals.css`. The `cn()` utility in `src/lib/utils.ts` is ready for reusable components as the project grows.

## Deploy

The project is ready to deploy to Vercel or another Node.js hosting provider. Before deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Then configure your project on your hosting provider and set the production domain in `metadataBase`.
