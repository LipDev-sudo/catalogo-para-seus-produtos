# Pratele Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the generic catalog into Pratele, a professional demonstrative catalog for independent makers that converts product discovery into a contextual WhatsApp inquiry.

**Architecture:** Keep a single React/Vite route and static typed catalog data. Lift the search query into `App`, derive filtered products in the catalog component, and use a small URL helper for the WhatsApp handoff. Replace the duplicated inactive app and UI kit with focused components and native CSS/Tailwind utilities.

**Tech Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Lucide React, Vitest, Testing Library, Playwright, ESLint.

## Global Constraints

- Preserve the active catalog and WhatsApp flow; do not add checkout, authentication, backend, or admin features.
- Use Pratele and the slogan "Seu trabalho à vista." consistently.
- All business and product content must be explicitly demonstrative and fictional.
- Do not fabricate customers, metrics, ratings, testimonials, discounts, or business results.
- Do not rename the repository or merge the pull request.

---

### Task 1: Identity, catalog data, and tested behavior

**Files:**
- Modify: `package.json`, `package-lock.json`, `src/app/App.tsx`, `src/app/data/catalog.ts`, `src/app/components/CatalogHeader.tsx`, `src/app/components/HeroSection.tsx`, `src/app/components/ProductCatalog.tsx`, `src/app/components/FeaturesSection.tsx`, `src/app/components/CatalogFooter.tsx`, `src/app/components/WhatsAppFloating.tsx`
- Create: `src/app/data/catalog.test.ts`, `vitest.config.ts`, `eslint.config.js`, `tsconfig.json`
- Delete: inactive files under `src/app/pages`, `src/app/context`, duplicate components, and unused `src/app/components/ui`

**Interfaces:**
- `filterProducts(products, query, category): Product[]` performs normalized search and category filtering.
- `generateWhatsAppLink(product): string` returns the demonstrative, product-specific inquiry URL.
- `CatalogHeader` consumes `query` and `onQueryChange`.
- `ProductCatalog` consumes `query`.

- [ ] Write tests for accent-insensitive search, category filtering, combined filtering, and the WhatsApp message.
- [ ] Run `npm test -- --run` and confirm the new tests fail before the helper implementation exists.
- [ ] Implement the typed catalog, product helper functions, Pratele copy, and functional search.
- [ ] Remove inactive source files and packages proven unused by the active route.
- [ ] Run unit tests, typecheck, lint, and build.
- [ ] Commit as `feat: transforma catálogo no produto Pratele`.

### Task 2: Responsive visual system and accessibility

**Files:**
- Modify: `src/styles/theme.css`, `src/styles/index.css`, all active components from Task 1
- Create: `tests/pratele.spec.ts`, `playwright.config.ts`

**Interfaces:**
- The primary path remains search or category selection → product inquiry link.
- Mobile navigation and search expose explicit accessible names and state.

- [ ] Add Playwright assertions for the first viewport, functional filtering, keyboard-visible controls, and a product WhatsApp link.
- [ ] Run Playwright against the pre-refinement interface and record the visual and interaction gaps.
- [ ] Implement the mineral/terracotta identity, shelf mark, responsive grid, visible focus, reduced motion handling, and accessible status labels.
- [ ] Verify at 1440×900 and 390×844 with no horizontal overflow or console errors.
- [ ] Commit as `style: refina experiência responsiva da Pratele`.

### Task 3: Public presentation, screenshots, and CI

**Files:**
- Modify: `index.html`, `README.md`, `package.json`, `package-lock.json`
- Create: `public/favicon.svg`, `public/robots.txt`, `public/sitemap.xml`, `public/images/pratele-desktop.png`, `public/images/pratele-mobile.png`, `.github/workflows/ci.yml`

**Interfaces:**
- Canonical URL remains the current deployment until repository/deploy renaming is separately authorized.
- CI runs install, typecheck, lint, tests, and build on push and pull requests.

- [ ] Add complete title, description, canonical, Open Graph, theme color, favicon, robots, and sitemap metadata.
- [ ] Rewrite README with positioning, audience, demo limitations, stack, commands, screenshots, and current URLs.
- [ ] Capture desktop and mobile screenshots from the verified implementation.
- [ ] Run the complete validation, audit, diff, secret, .env, Unicode, metadata, and stale-copy checks.
- [ ] Commit as `docs: documenta e apresenta a Pratele`.
- [ ] Push the branch and open or update the existing pull request without merging.
