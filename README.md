## Project title and tagline

3D Portfolio – A performant React + Vite SPA showcasing work, links, and certifications with subtle 3D and motion flourishes.

## Overview

- Repo type: single-app SPA (frontend-only) built with React, Vite, Tailwind CSS, and React Router.
- Target audience: recruiters, hiring managers, and peers evaluating engineering craft and UX quality.
- Focus areas visible in code:
	- Route-aware navigation and a Links Hub with nested data and on-brand UI.
	- Asset optimization pipeline (WebP/AVIF) wired into the Vite resolver to prefer optimized images automatically.
	- Lazy loading of non-critical sections and route-level components for faster initial paint.
	- Theming via Tailwind tokens (custom green/teal brand) and reusable UI primitives.
	- Deployed as an SPA behind Vercel rewrites, with lightweight analytics.

## Problem and goals

Build a fast, polished personal portfolio that:

- Communicates capability via thoughtful UI/UX and engineering decisions rather than boilerplate.
- Loads quickly on mobile networks (asset optimization, lazy-loading, minimal blocking work).
- Presents links, socials, and certifications in a structured, extensible way.
- Stays maintainable without server dependencies (static hosting, client-side routing).

Constraints inferred from code:

- Pure frontend (no backend at runtime); deploy-friendly SPA with Vercel rewrites to index.html.
- No CMS; content is curated in-versioned constants for reliability and simplicity.

## Key features

- Links Hub
	- Category landing at `/links/all` and category pages at `/links/:category`.
	- Nested certifications (Coursera groups) with per-group expand/collapse and “show first 6” default.
	- Folder-tree visual connectors and glassmorphism link cards.
	- Route-aware Navbar mode on `/links` and a footer CTA to discoverability.
- Routing and UX
	- Global scroll restoration on route change for consistent entry at top.
	- 404 page themed to the site with recovery CTAs (Home, Links Hub, Back).
	- SPA rewrites via `vercel.json` so all routes resolve client-side.
- Performance-minded assets
	- Scripted conversion of PNG/JPEG to WebP/AVIF via Sharp (`assets:optimize`).
	- Vite plugin resolves imports to optimized variants when available.
- Visuals and motion
	- Tailwind-driven brand system; selective use of framer-motion.
	- 3D stack available (three.js, @react-three/fiber/drei, Spline) for hero/visual sections.

## Architecture

High level:

```
Browser
	└── React Router (SPA)
				├── "/" (Home) → Navbar → Hero → [lazy] Sections → Footer
				├── "/links/all" → LinksPage (grouped categories)
				├── "/links/:category" → LinksCategoryPage (nested lists)
				├── "/certifications" → CertificationsPreview [lazy]
				├── "/certifications/:categoryId" → Certifications [lazy]
				├── "/resume" → Resume [lazy]
				└── "*" → NotFound (404)

Data flow
	└── src/constants/links.js (curated static data)
				└── consumed by LinksPage/LinksCategoryPage → LinkItem, CategorySection

Assets pipeline
	├── optimize-images.mjs (Sharp + fast-glob)
	└── vite.config.js preferOptimizedImages() (resolve .png/.jpg → .webp under src/assets/optimized)
```

Notable modules:

- `src/App.jsx` – route definitions, global ScrollToTop, lazy-loaded sections, Vercel analytics integration.
- `src/constants/links.js` – central content model for Links Hub; categories and nested subItems.
- `src/pages/LinksPage.jsx` and `src/pages/LinksCategoryPage.jsx` – hub landing and per-category views with expand/collapse logic.
- `src/components/Navbar.jsx` – route-aware modes; simplified link set on `/links`.
- `src/components/Footer.jsx` – social icons, email copy with confetti, CTA to Links Hub and Resume.
- `src/pages/NotFound.jsx` – on-brand 404 with recovery actions.
- `vite.config.js` – custom resolver to prefer optimized image variants.
- `optimize-images.mjs` – idempotent asset optimizer (WebP/AVIF) with up-to-date checks.

## Tech stack and tooling

- React 18 + Vite 5 (ESM) with `@vitejs/plugin-react`.
- React Router v6 for client-side routing.
- Tailwind CSS (JIT) + PostCSS + custom theme tokens.
- Motion/3D capabilities via framer-motion, three.js, @react-three/fiber, @react-three/drei, and Spline.
- Build-time image optimization: Sharp + fast-glob, integrated with a Vite resolver.
- Analytics: `@vercel/analytics` (client-side).
- Linting: ESLint with react, react-hooks, react-refresh plugins.

## Design decisions and trade-offs

- SPA over SSR/SSG
	- Simpler deployment (static hosting, Vercel rewrites) and fewer moving parts.
	- Trade-off: less out-of-the-box SEO than SSR; mitigated by fast paint and clean routing. TODO: add richer meta tags/OG for key pages.
- Curated constants for content
	- Predictable, versioned data in `src/constants/links.js` keeps the stack light.
	- Trade-off: manual updates vs. a CMS. Chosen intentionally for reliability and control.
- Image pipeline
	- Scripted WebP/AVIF generation plus a Vite resolver to automatically prefer optimized assets, reducing bundle and bandwidth.
	- Trade-off: additional build step; kept optional and idempotent.
- Progressive code loading
	- `lazy()` and route-level suspense to limit initial JS and improve LCP.
	- Sections gated by an `InViewMount` component to avoid work until visible.
- On-brand 404 and nav modes
	- Keeps UX coherent even off happy paths. Redirects `/link` and `/links` to `/links/all` for consistency.

Alternatives considered (implied):

- Next.js for SSR/ISR; not selected to keep stack lean and focus on SPA craft.
- Central state stores (Redux/Zustand); avoided—data is local and simple.
- CMS-backed content; deferred in favor of explicit code ownership of content.

## Quality and testing

- Linting:
	- `npm run lint` uses ESLint with React/Hook rules and zero warnings policy.
- Type safety:
	- No TS at present. TODO: introduce type coverage (TS or JSDoc) for public components and data shapes.
- Tests:
	- No automated tests detected. TODO: add smoke tests for routing and critical interactions (expand/collapse, ScrollToTop, 404 recovery) and snapshot checks for UI shells.

## Security and performance considerations

- Security
	- No server-side code at runtime; no secrets committed. Clipboard actions are client-side.
	- `api/contact.js` exists but is empty; treated as a placeholder. TODO: implement or remove.
- Performance
	- Route and section lazy-loading to reduce initial JS.
	- Image optimization pipeline with freshness checks; WebP/AVIF favored by a custom resolver.
	- Dependency dedupe in Vite config and elevated chunk size threshold for better control of build outputs.
	- Tailwind JIT and minimal CSS bloat via content scanning.

## Case studies or demos (if available)

- None checked into the repo. TODO: add a short video or screenshots highlighting the Links Hub and 3D sections.

## Getting started (optional, high-level only)

- Requires a recent Node.js and npm.
- See `package.json` scripts:
	- `dev` (local development), `build` (production build), `preview` (serve build), `assets:optimize` (pre-generate WebP/AVIF under `src/assets/optimized`).
- Deployed as an SPA; Vercel rewrites all routes to `/` per `vercel.json`.

## Reusability and licensing

- All rights reserved. No license granted.
- This repository is not intended for turnkey reuse or redistribution.
- Some images/logos and Spline/3D assets are likely proprietary or subject to third-party licenses. Do not redistribute without permission.

## Roadmap / future work

- Implement or remove `api/contact.js`; add serverless email or form handling if needed.
- Introduce basic tests (routing, expand/collapse, critical renders) and optionally visual regression.
- Add richer SEO/meta (per route) and sitemap/robots for better discoverability.
- Improve accessibility: focus states, landmarks, and keyboard navigation audits.
- Type coverage with TypeScript or JSDoc; prop-level validation for content data.
- Performance polish: audit bundle chunks, defer heavy 3D modules where not used, image preloading for hero.
- Document design tokens and component primitives for reuse.

## References (in-repo)

- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `vercel.json`
- `optimize-images.mjs`
- `src/App.jsx`
- `src/pages/LinksPage.jsx`
- `src/pages/LinksCategoryPage.jsx`
- `src/pages/NotFound.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/constants/links.js`

## Acknowledgements

- React, Vite, Tailwind CSS, React Router.
- framer-motion, three.js, @react-three/fiber, @react-three/drei, Spline.
- Sharp and fast-glob for asset optimization.
- Vercel Analytics.

---

Unanswered questions (would improve this README if clarified):

1. What is the intended release status (alpha/beta/stable) and current deployment URL?
2. Are Spline and 3D scenes active in production, or are they optional demos?
3. Should `api/contact.js` be implemented (and with which provider) or removed to avoid confusion?
4. Are there preferred metrics or targets (Lighthouse scores, LCP/CLS budgets) to document?
5. Any licensing details for third-party images/logos included under `src/assets/`?
