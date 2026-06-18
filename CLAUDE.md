# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for Carmen Bereiter (Coach & Mentorin, Gran Canaria & Online). Built with **Astro 6** + **Tailwind CSS v4**, fully static (no SSR, no backend). The site has no contact form — every call-to-action links out directly to WhatsApp, Telegram, or Calendly.

## Commands

Package manager is **pnpm** (Node >= 22.12). Run from repo root:

| Command            | Action                                     |
| ------------------ | ------------------------------------------ |
| `pnpm dev`         | Dev server at `localhost:4321`             |
| `pnpm build`       | Production build to `./dist/`              |
| `pnpm preview`     | Preview the build locally before deploying |
| `pnpm astro check` | Type-check `.astro` files                  |

There is no test suite and no separate lint step. `astro check` is the closest thing to type validation.

## Deployment

The site is hosted on **Netlify** and deployed via GitHub Actions (the build runs in CI, the `netlify-cli` dev dependency uploads `./dist`). There are four workflows in `.github/workflows/`:

- **`deploy-netlify.yml`** — production deploy. Pushing to `main` builds and deploys to the live Netlify site (`--prod`). Automatic, no manual step.
- **`deploy-netlify-preview.yml`** — branch preview. Each PR against `main` builds and deploys a non-prod preview (`netlify deploy --alias=<branch>`, stable per-branch URL). The preview URL is posted as a comment **both on the PR and on the linked issue** (parsed from `Closes #N` in the PR body). The comment also carries a hidden `<!-- deploy-ids: [...] -->` list used for cleanup.
- **`cleanup-netlify-preview.yml`** — on PR close/merge, deletes that PR's preview deploys via the Netlify API (reads the deploy IDs from the preview comment). Netlify protects the published prod deploy from deletion.
- **`claude.yml`** — the **AI change assistant**. A new issue or an `@claude` comment triggers Claude Code (`anthropics/claude-code-action@v1`), which implements the requested change on a branch and opens a PR (`gh pr create`). Because the official Claude GitHub App authors the PR, it triggers the preview workflow above. The customer flow: issue → Claude opens PR → preview URL appears in the issue → customer approves → maintainer merges → prod deploy.

**Required repo secrets:** `ANTHROPIC_API_KEY`, `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`. The custom domain `carmenbereiter.com` is configured in Netlify (not via a CNAME file — `public/CNAME` is a leftover from the previous GitHub Pages setup and is ignored by Netlify).

## Architecture

The site is **trilingual** (German default, English, Spanish). Content is split into two layers:

- **`src/config.ts`** — language-INDEPENDENT data only: brand (`site`), contact channels (`contact`, `whatsappUrl()`/`telegramUrl()` helpers), program images/slugs (`programMeta`), testimonial names/cities (`testimonialMeta`), endorsement names/images (`endorsementMeta`), nav paths (`navItems`), and Spanish `legal` data. **No copy lives here.** Note the `TODO vor Go-Live` markers (WhatsApp number, NIF, address) that still need real data.
- **`src/i18n/de.ts` · `en.ts` · `es.ts`** — all translatable copy. `de.ts` is the canonical source and its shape defines the `Dictionary` type; `en.ts`/`es.ts` are typed `: Dictionary`, so `pnpm astro check` fails if a key drifts out of sync. **When adding or changing any user-facing string, update all three files.** The `programs`/`testimonials`/`endorsements` arrays here are index-aligned with the `*Meta` arrays in `config.ts`.

`src/i18n/index.ts` ties it together: `useTranslations(lang)`, `getNav(lang)`, `getPrograms/getTestimonials/getEndorsements(lang)` (merge `config` meta + translated text), and routing helpers `localizePath`, `delocalizePath`, `getAlternates`, `getLangSwitch`. `getLang(Astro.currentLocale)` is how components discover their locale.

### i18n routing

Configured in `astro.config.mjs` (`prefixDefaultLocale: false`): German served at `/`, English at `/en/…`, Spanish at `/es/…`. Each page has one shared **view** in `src/views/` (`Home`, `About`, `Contact`, `References`) that takes a `lang` prop. The files in `src/pages/`, `src/pages/en/`, `src/pages/es/` are thin wrappers that render the view with the right `lang`.

**Slugs are localized per language** and defined centrally in the `routes` map in `src/i18n/index.ts` (e.g. `about` → `/ueber-mich`, `/en/about`, `/es/sobre-mi`). The physical filename under `src/pages/<lang>/` must match that language's slug. Never hardcode a path — use `localizedPath(routeKey, lang)` for links, `getNav(lang)` for nav, `matchRoute(pathname, lang)` to find the current route key (language switcher), and pass a `routeKey` to `Layout` so it emits correct `hreflang` alternates. Adding a page = add an entry to `routes` + the per-language files.

Components (`Header`, `Footer`, `ContactFAB`, `ContactOptions`, `ProgramCard`, `MassgeschneidertCTA`, `Testimonial`) read their locale via `getLang(Astro.currentLocale)` — no prop threading. The `Header` includes the language switcher.

Headlines with inline emphasis are stored as `*Html` keys in the dictionaries and rendered with `set:html` (keeping the `<span class="italic text-forest">…</span>` markup per language).

### SEO

`Layout.astro` emits canonical, `hreflang` alternates (+ `x-default`), localized `<html lang>` and `og:locale`, and per-page title/description from the dictionary. Structured data (JSON-LD) is built in **`src/lib/seo.ts`** (`ProfessionalService` + `Person` + `WebSite`, `Service`/`Offer` per program, `Review` per testimonial) and passed to `Layout` via the `jsonLd` prop. Reviews intentionally carry **no `aggregateRating`/star ratings** — there's no genuine rating source yet (see the note in `seo.ts`).

`sitemap.xml` and `robots.txt` are **own endpoints** (`src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`) — _not_ `@astrojs/sitemap`, whose i18n linking assumes identical slugs across languages (it can't handle our localized slugs). The sitemap builds correct per-page `hreflang` alternates from the `routes` map. All absolute URLs (canonical, hreflang, JSON-LD, sitemap, robots) derive from a single source: `site` in `astro.config.mjs` (`Astro.site`).

The legal pages (`aviso-legal`, `politica-de-privacidad`) are **Spanish-only by design** — legally required for a business based in Spain. They live only at the root, are linked non-localized from the footer, and emit no hreflang alternates.

### Styling

Tailwind v4 is configured **in CSS, not JS** — see `src/styles/global.css`. The `@theme` block defines the design tokens (the warm editorial palette: `cream`, `ink`, `forest`, `clay`, `taupe`, `line`; the display font `Fraunces` and sans `Geist`). Use these named tokens (`bg-cream`, `text-forest`, etc.) rather than arbitrary hex values. Custom animations (`rise`, `draw-ring`, `drift-slow`) and utilities (`bg-grain`, `text-balance`, `hairline`) are also defined here. Fonts are self-hosted via `@fontsource` (no runtime CDN).

### Assets & icons

- Optimized site images live in `public/images/` as `.webp`. The originals are kept in `context/images/` (not served).
- `context/pages/` holds the source German copy drafts for reference — not part of the build.
- Icons come from `astro-icon` using the `lucide` and `simple-icons` sets: `<Icon name="lucide:..." />`.
