# Pratele Product Design

## Purpose

Pratele remains in the portfolio as a focused demonstration of conversational commerce: a lightweight, mobile-first product catalog that turns browsing into an organized WhatsApp inquiry. It demonstrates catalog information architecture, product filtering, accessible responsive UI, and a clear handoff to a real communication channel without pretending to provide checkout, stock management, or verified sales.

## Positioning

- Name: Pratele
- Slogan: "Seu trabalho à vista."
- Audience: independent makers, small ateliers, and custom-product studios.
- Demonstration business: Ateliê Aurora de Barro, a fictional studio producing small-batch ceramic tableware and decor.
- Value proposition: present handcrafted products with enough context for a customer to choose an item and begin a useful WhatsApp conversation.
- Tone: concise, warm, practical, and transparent.

## Differentiation

Pratele is not a fashion storefront, marketplace, restaurant ordering flow, or complete ecommerce platform. Its core is a curated catalog for made-to-order work, where availability and customization are confirmed in conversation. The interface must avoid the generic Shopify palette, fabricated ratings, customer counts, discounts, and platform promises.

## Experience

The first viewport identifies Pratele, the fictional demo catalog, and the primary action. Visitors can search products, filter by category, scan material/lead-time information, and open a prefilled WhatsApp inquiry for a specific product. Desktop uses a calm editorial grid; mobile prioritizes fast reading, thumb-friendly filters, and direct inquiry actions.

## Visual Direction

- Palette: mineral white, charcoal, terracotta, muted clay, and sage used only for supporting states.
- Typography: system-first sans serif with strong hierarchy and compact product metadata.
- Mark: a simple shelf symbol composed from three horizontal planes; no complex generated logo.
- Imagery: consistent natural-light ceramic product photography with neutral backgrounds.
- Shape language: restrained radii, thin borders, minimal shadows, no decorative gradients.

## Technical Scope

- Preserve React, Vite, Tailwind, static data, and WhatsApp handoff.
- Keep search and category filtering functional.
- Remove the inactive router/cart/admin architecture, dead UI kit, and unused dependencies.
- Add typecheck, lint, unit tests, Playwright coverage, CI, metadata, favicon, robots, sitemap, README, and screenshots.
- Make all fictional status explicit and avoid invented testimonials, ratings, metrics, or results.
- Do not rename the repository, merge the pull request, or change external visibility.

## Verification

Run npm ci, typecheck, lint, unit tests, build, audit, and Playwright at 1440x900 and 390x844. Check keyboard focus, contrast, overflow, console errors, metadata, links, the WhatsApp message, secrets, real .env files, hidden Unicode, and stale generic names.
