# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # tsc type-check then Vite production build → dist/
npm run preview   # preview the production build locally
```

No test runner is configured. Type-check manually with `npx tsc --noEmit`.

## Architecture

This is a **vanilla TypeScript + Vite** single-page portfolio site — no framework. The entire page is built from one entry point:

- `src/main.ts` — bootstraps everything: injects the full HTML via `#app.innerHTML`, then wires up all interactivity with plain DOM APIs.
- `src/style.css` — single global stylesheet; all component styles live here. Responsive breakpoints at 1024px, 900px, 768px, and 480px.
- `src/projects.ts` — typed `Project[]` data array; rendered into `.projects` grid in `main.ts`.
- `src/fireTrail.ts` — canvas-based mouse-trail particle effect; currently always initialized but rendered with `opacity: 0` (the toggle UI is commented out in `main.ts`).
- `src/components/languageExperienceModal.ts` — class-based modal for skill icon popups. Takes DOM element refs in its constructor; `open(props)` populates and shows it, `bindDismissTriggers()` wires close/Esc/backdrop.
- `src/components/donutChart.ts` — factory function returning a `div` element that renders a CSS conic-gradient donut chart.

### Static assets

All images and icons served from `public/`:
- `public/icons/` — skill icon SVGs referenced by `data-lang` attribute on `.skill-icons img`
- `public/Images/` — project screenshots, profile photo, education logos
- `public/PictureOfMeCropped.JPG` — profile pic (also duplicated in `public/Images/`)

### Page structure (rendered by main.ts)

1. `.fixed-header` — sticky nav bar that fades in after scrolling past `.top-banner`
2. `#profile-modal` — "About Me" modal opened by the profile button or avatar
3. `#lang-modal` — language experience modal opened by clicking skill icons
4. `.top-banner` — full-width header at the top
5. `.info-cards` → `.profile-card` — left-aligned card with avatar, name, and skill icons
6. `.roles-container` — three animated shimmer role titles; clicking each opens its section dropdown
7. Four collapsible dropdown sections (`.projects-dropdown-container`):
   - **Software/Websites/Apps** — project cards grid from `projects.ts`
   - **IT/Cyber Security** — three-column layout with cert progress donuts and coursework
   - **Game Development** — placeholder
   - **Education** — Weber State card
8. `#lightbox` — full-screen image viewer for project card images

### Adding a project

Add an entry to the `projects` array in `src/projects.ts`. Images should go in `public/Images/` (or `public/Images/Mobile/` for mobile apps). Use `type: 'mobile'` for portrait aspect-ratio display.

### TypeScript config

Strict mode with `noUnusedLocals`, `noUnusedParameters`, and `verbatimModuleSyntax`. Bundler module resolution (`allowImportingTsExtensions: true`, `noEmit: true`). Targeting ES2022.
