# Fuyera website

Company, product and engineering website for [Fuyera Intelligence](https://fuyera.com), maintained in the original `Fuyera/website` repository.

## Local development

Use Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev
```

Vite development mode renders pages in the browser. Use the static build to review the actual deliverable:

```sh
npm run build
npm run lint
npm test
npm run preview
```

Open http://127.0.0.1:4173. The preview server binds only to the local machine. Both the default build and local server prevent search indexing.

## Static output and production

React renders every route to HTML at build time, then hydrates navigation, illustrative product interactions and email-copy controls. Pages have their own metadata, canonical URLs and social preview image. `dist/` is the deployable directory; source documents are not copied into it.

```sh
npm run build:production
npm test
```

This prepares an indexable build; it does not publish it. The existing Cloudflare Workers Builds pipeline also selects production when its injected `WORKERS_CI=1` and `WORKERS_CI_BRANCH=main` values are both present. Local builds and other branches default to `noindex`. An explicit `SITE_ENV` takes precedence; use `SITE_ENV=preview` to force a preview or `npm run build:production` for a manual production build.

The existing Cloudflare Worker name is preserved in `wrangler.toml`. Static assets use extensionless URLs, drop trailing slashes and serve a custom 404. Confirm the current domain, deployment project, build command, active version and rollback target before publishing. Local preview tests do not validate Cloudflare’s live configuration.

For review after a production-build check, run `npm run build` again to restore the preview indexing policy. The local preview server always adds `X-Robots-Tag: noindex, nofollow`, even when serving a production build.

## Structure

- `src/content.ts`: public facts, links, route metadata and service descriptions.
- `src/pages/`: thirteen public pages plus 404, in three languages (42 HTML files).
- `src/i18n.ts` and `src/locales/zh.json`: locale routing and reviewed Simplified/Traditional Chinese copy.
- `src/components/site/`: navigation, footer and shared sections.
- `src/index.css`: responsive design and reduced-motion rules.
- `scripts/build.mjs`: static HTML, metadata, sitemap, robots and social image.
- `scripts/preview.mjs`: local static preview with proper 404 status.
- `tests/site.test.mjs`: static content, internal links, routing and indexing checks.
- `ASSET_SOURCES.md`: product image provenance and font licences.

The website uses email links and a copy-address button. It has no contact submission backend, account system, payment integration or marketing analytics. Product services and subdomains are separate systems.

## Product portfolio

The catalogue includes Ambulance AI System, Intelligent Operator Assistant, laofu canvas and Anchor. Professional systems have their own project-stage descriptions; English-language editions and integrations are scoped through Fuyera. Canvas remains marked release pending until a public release is verified. Interactive engineering examples show event corrections, operator review and a separate drawing layer using synthetic content. They are labelled illustrations, not product screenshots, live telemetry or running AI services. Compact capability maps complement these examples in the catalogue.

## Content maintenance

English is the default at the existing URLs. Traditional Chinese uses `/zh-hant` and Simplified Chinese uses `/zh-hans`; the same product and service paths follow each prefix. The header language picker uses native links that retain the current page, query and anchor, including when copied or opened in a new tab. Internal navigation keeps the selected language. No automatic browser-language redirect, language cookie or storage is used.

Service enquiry links carry an allowlisted service topic to the contact page and email subject. Unknown topics fall back to the generic enquiry. `src/browser-location.ts` supplies the current address after hydration while preserving the static server render.

Both Chinese editions render directly to static HTML, with translated titles/descriptions, their own canonical URLs, reciprocal `hreflang` links and sitemap entries. Product names, technical identifiers and original screenshot text may remain in English. Language selection applies to this website; external product sites and stores retain their own language settings.

Translate new public copy in `src/locales/zh.json`, whose values are `[Simplified Chinese, Traditional Chinese]`. Use `t(...)` for visible text and accessible labels, and `localHref(...)` for internal navigation. Keep product status and capability boundaries consistent across languages. The test suite checks rendered translation coverage as well as links, metadata and indexing policies.

Add products only after checking ownership, public features, availability, destination and support information. Product screenshots come from the official listing and must not be presented as a test of the app itself. Review website and product privacy information separately when features change.

Internal positioning documents, design discussions and local verification reports are excluded from version control. Review the staged file list before syncing this public repository.
