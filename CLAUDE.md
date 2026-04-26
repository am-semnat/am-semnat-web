@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in `am-semnat-sdk/website/`.

## What this is

Marketing website for AmSemnat at `amsemnat.ro` — covers both the mobile
app (`am-semnat`) and the open-source SDKs (`../android/`, `../ios/`,
`../expo/`). Next.js 16 App Router, React Server Components by default,
TypeScript, Tailwind v4, Plausible, Vercel.

Source-of-truth strategy doc: `../research/website-plan.md` (goals,
audiences, IA, competitive positioning, content scope). Real
implementation plan: `~/.claude/plans/read-the-website-plan-md-research-mighty-wozniak.md`.

This is a **separate repo** in the workspace pattern: own `git`, own
`.gitignore`, own `package.json`. Will eventually push to
`am-semnat/am-semnat-web`. Releases are decoupled from SDK release
cadence.

## Build & test

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (Turbopack)
npm run start        # serve production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run check        # typecheck + lint + build
npm run format       # prettier --write .
```

Node 20+ (see `.nvmrc`). The `check` script is what CI runs.

## Layout

```
app/                    Next.js App Router routes (RSC by default)
  layout.tsx            root shell — <html lang="ro">, font, Plausible, Header, Footer
  globals.css           Tailwind v4 import + @theme tokens
  sitemap.ts robots.ts  built-in metadata routes (no third-party deps)
  icon.png              file-convention favicon (no manual <link>)
  page.tsx              homepage
  aplicatie/            app product page
  dezvoltatori/         SDK overview
  preturi/              pricing
  contact/              contact
  legal/                privacy, terms

components/
  layout/               Header, Footer, Container, NavLink — chrome
  ui/                   Button, Badge, Card, Section — primitives
  marketing/            Hero, FeatureCard, AppDownloadCTA, InstallSnippet,
                        CodeBlock, RepoCard, FAQ, PlausibleScript
  icons/                small inline SVG components

lib/
  site.ts               SITE_URL, name, OG defaults, env-flag helpers
  nav.ts                primary nav + footer link arrays
  packages.ts           SDK registry data (Maven, CocoaPods, npm) — single source of truth
                        for install snippets on / and /dezvoltatori
```

No `content/` dir, no MDX. Adding MDX later for `/comparatie/eidromania`
is one PR.

## Cross-platform invariants (keep these in mind)

1. **RO-only for v1.** No `/en/` tree, no `next-intl`, no parallel
   content. EN is a deferred decision (see strategy doc §11 #1) —
   trigger is meaningful EN search traffic or partner inbound.
2. **Pre-launch app posture.** App-download CTAs render either "În
   curând pe App Store / Google Play" (no link) or real store badges
   based on `NEXT_PUBLIC_APPS_LIVE === "true"`. Apps-launch day is an
   env flip, not a code PR. SDKs are already live, so install snippets
   on `/dezvoltatori` resolve to real packages from day 1.
3. **No trust material.** No CSCA bundle, no chain-of-trust pages
   served from the website. Mirrors SDK invariant #3.
4. **Versions are single-sourced.** Install lines and version strings
   live in `lib/packages.ts`; never inline them in JSX.
5. **Plausible is env-gated.** `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` controls
   whether the script renders. Previews don't pollute production
   analytics.

## Design system status

There isn't one. Tailwind v4 utility classes + the `@theme` color
tokens (`cobalt-*`, `ink`, `ink-muted`, `paper`, `paper-muted`, `rule`)
+ a hand-rolled component inventory. Don't pull in shadcn/ui in v1 —
it's reserved for v2 when the dashboard arrives and complexity
justifies it.

## Releases

The website ships continuously to Vercel — every `main` push deploys.
PR previews are automatic. No tags, no SemVer for the site itself.
