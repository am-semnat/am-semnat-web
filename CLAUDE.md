@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in `am-semnat-sdk/website/`.

## What this is

Marketing website for AmSemnat at `amsemnat.ro` — covers both the
mobile app (`am-semnat`) and the open-source SDKs (`../android/`,
`../ios/`, `../expo/`). Next.js 16 App Router, React Server Components
by default, TypeScript, Tailwind v4, Vercel (hosting + Web Analytics).

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

Node 20+ (see `.nvmrc`). The `check` script is what CI runs. Imports
use the `@/*` path alias (see `tsconfig.json`); never write relative
paths like `../../components/...`.

## Layout

```
app/                                Next.js App Router routes (RSC by default)
  layout.tsx                        root shell — <html lang="ro">, three font vars,
                                    Header, Footer, Vercel <Analytics />;
                                    metadataBase + OG defaults
  globals.css                       Tailwind v4 import + @theme tokens + .code-scroll
  sitemap.ts robots.ts              built-in metadata routes (no third-party deps)
  icon.png                          file-convention favicon (no manual <link>)
  not-found.tsx                     404 — uses Eyebrow + Button, same editorial shell
  page.tsx                          homepage (hero, three diff cards, OSS pitch,
                                    InstallSnippet, comparison teaser, "Cum construim")
  aplicatie/                        app product page (hero, group-signing flow, FAQ)
  dezvoltatori/                     SDK overview (capabilities, CodeTabs, RepoCards)
  comparatie/eidromania/            full feature-by-feature comparison table
  preturi/                          three-tier pricing (SDK / Personal / Echipe)
  cum-construim/                    AI-as-partner editorial / governance page
  contact/
  legal/{confidentialitate,termeni}/

components/
  layout/
    Container.tsx                   max-w-6xl + responsive horizontal padding
    Header.tsx                      sticky bar; bracketed "a" mark; numbered nav 01–04
    MobileMenu.tsx                  client component; only Header chunk that's stateful
    NavLink.tsx                     (currently unused — primary nav is inlined in Header)
    Footer.tsx                      huge italic "amsemnat" wordmark + 4-column index
  ui/
    Button.tsx                      primary | secondary | ghost; md | lg; arrow slide
    Badge.tsx                       neutral | cobalt | outline; mono uppercase pill
    Card.tsx                        exports FeatureCard (NOT in marketing/) — index +
                                    display headline + body, optional CornerBrackets
    Section.tsx                     wraps Container; renders Eyebrow + display h2 + intro
    Eyebrow.tsx                     "§NN — short rule — UPPERCASE LABEL" header motif
  marketing/
    Hero / AppHero Visual.tsx       SVG-dot-grid panels with passport/MRZ chrome
    CornerBrackets.tsx              four L-shaped SVG corners — recurring frame motif
    CodeBlock.tsx                   single dark code surface (carbon)
    CodeTabs.tsx                    client; tabbed dark code surface (Kotlin/Swift/TS)
    InstallSnippet.tsx              client; tabs Android | iOS | Expo from lib/packages.ts
    AppDownloadCTA.tsx              real store badges OR dashed-outline "În curând"
                                    placeholders, gated by APPS_LIVE
    RepoCard.tsx                    one tile per SDK package
    FAQ.tsx                         <details> accordion with numbered rows
  icons/
    AppleIcon, GitHubIcon, PlayIcon — small inline SVGs; no icon library

lib/
  site.ts                           SITE_URL, name, OG defaults, env-flag helpers
                                    (APPS_LIVE), CONTACT_EMAIL,
                                    GITHUB_ORG_URL, store URLs
  nav.ts                            PRIMARY_NAV (header) + FOOTER_NAV (4-col)
  packages.ts                       SDK registry data (Maven, CocoaPods, npm) — single
                                    source of truth for install snippets and RepoCards
```

No `content/` dir, no MDX. Adding MDX later for `/comparatie/...`
follow-ups is one PR.

## Cross-platform invariants (keep these in mind)

1. **RO-only for v1.** No `/en/` tree, no `next-intl`, no parallel
   content. EN is a deferred decision (see strategy doc §11 #1) —
   trigger is meaningful EN search traffic or partner inbound.
2. **Pre-launch app posture.** App-download CTAs render either dashed
   "În curând pe App Store / Google Play" placeholders (no link) or
   real store badges based on `NEXT_PUBLIC_APPS_LIVE === "true"`.
   Apps-launch day is an env flip + filling in `APP_STORE_URL` /
   `PLAY_STORE_URL` in `lib/site.ts`, not a code rewrite. SDKs are
   already live, so install snippets on `/dezvoltatori` resolve to
   real packages from day 1.
3. **No trust material.** No CSCA bundle, no chain-of-trust pages
   served from the website. Mirrors SDK invariant #3.
4. **Versions are single-sourced.** Install lines and version strings
   live in `lib/packages.ts`; never inline them in JSX.
5. **Vercel Web Analytics** is wired via `<Analytics />` in
   `app/layout.tsx`. Cookieless; no env var needed. Toggle on/off
   from the Vercel dashboard. Previews don't pollute production
   stats — Vercel routes them to a separate Preview environment.

## Design language

Editorial / passport aesthetic — the site reads like a typeset spec
sheet for an identity document, not a SaaS landing page. There is no
component library and no shadcn/ui. Don't pull one in for v1; it's
reserved for v2 when the dashboard arrives.

### Palette (`@theme` tokens in `globals.css`)

| Token | Hex | Role |
|---|---|---|
| `paper` | `#faf9f4` | page background — warm off-white, never pure white |
| `paper-elevated` | `#ffffff` | hover states on cards/feature tiles |
| `paper-muted` | `#f3f1e8` | hero visual backdrops, hover bg on FAQ rows |
| `paper-deep` | `#e7e3d2` | deeper recess (rare) |
| `ink` | `#0e0e10` | primary text and primary button fill |
| `ink-muted` | `#4a4a4f` | body copy, secondary text |
| `ink-faint` | `#8a8a91` | meta text, footer minutiae |
| `rule` | `#e3dfd2` | hairline borders (default) |
| `rule-strong` | `#cdc8b3` | emphasised hairlines, divider grids |
| `cobalt-{50,100,200,500,600,700,deep}` | — | the **only** chroma — used sparingly: eyebrow numerals, primary-button hover, link hover, active-tab indicator, focus accents |
| `carbon` `#0e0f12`, `carbon-elevated` `#1a1b1f` | — | dark surface reserved for code blocks (`CodeBlock`, `CodeTabs`, `InstallSnippet`) |

The vibe is paper + ink + a single cobalt accent. If you need to
introduce a new colour, the answer is almost always "use one of the
existing ink/rule shades."

### Typography (three fonts, loaded as CSS vars in `app/layout.tsx`)

- `--font-display` → **Fraunces** (variable, italic capable). Used
  for every display heading and large wordmark. Italic-heavy.
- `--font-sans` → **Geist Sans**. Body, UI, links.
- `--font-mono` → **Geist Mono**. Eyebrows, badges, numerals, code,
  meta-text. Monospace appears *all over* the chrome — this is part
  of the look, not just for code.

Body has `font-feature-settings: "ss01" on, "cv11" on;` (Geist
stylistic alternates + centered colon). Selection background is
`cobalt-500`.

Display headlines use **fluid clamp sizing** with tight tracking and
near-1.0 line-height. Examples in use:

```tsx
// Hero h1
className="font-display text-ink text-[clamp(2.5rem,4.75vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]"

// Section h2
className="font-display text-ink text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.05] tracking-tight"

// FeatureCard h3
className="font-display text-ink text-[1.6rem] leading-[1.1] tracking-tight md:text-[1.75rem]"
```

A recurring rhetorical device: a single italic phrase inside an
otherwise upright headline, using the lighter Fraunces italic to
break rhythm:

```tsx
<h1 className="font-display ...">
  Semnează <em className="font-light italic">PDF-uri</em> cu cartea ta…
</h1>
```

Use `<em>` (not `<i>`) for these — they're emphasis, not titles.
Don't sprinkle them; one per heading at most.

### Editorial chrome (the things that make it look like AmSemnat)

These motifs repeat across the site. Reuse them — don't invent new
chrome unless there's a reason.

- **Eyebrows**: `Eyebrow` component renders `§NN  —  hairline rule
  —  UPPERCASE LABEL` in mono with `tracking-[0.18em]` to
  `tracking-[0.22em]`. Numerals are `cobalt-600`. Every section opens
  with one.
- **Numerated cards**: feature cards lead with a small mono index
  (`01 / 03`, `02 / 03`, …) above the headline.
- **Hairline grids over a tinted parent**: multi-card rows use
  `bg-rule-strong border-rule-strong grid grid-cols-1 gap-px
  border-y md:grid-cols-N` with each child painting `bg-paper`. The
  `gap-px` produces single-pixel divider lines without ever drawing
  rounded card walls. Prefer this over individually outlined cards.
- **Corner brackets**: `<CornerBrackets />` draws four L-shaped SVG
  corners around any element. Used to frame the hero monogram, the
  app-mockup, and (optionally) feature cards. Reach for it instead of
  drop shadows.
- **Right-angled corners**: the entire visual language is square.
  Allowed radii: `rounded-[2px]` (tiny pills like Badge), `rounded-[3px]`
  (Buttons, code surfaces). **Never** `rounded-md`/`rounded-lg`/
  `rounded-xl`/`rounded-full` (except for the 1px dots inside hero
  visuals). Tailwind defaults will look wrong here.
- **Mono meta-text**: small uppercase mono with wide tracking (`text-[10px]
  tracking-[0.18em]` to `tracking-[0.22em]`) is used for: registry
  labels (`MAVEN CENTRAL`), version pins, footer meta, pricing meta,
  passport/MRZ-style flavour text in hero visuals. This is a load-bearing
  texture — keep it generous.
- **Hairlines everywhere**: prefer top-borders (`border-rule`,
  `border-rule-strong`) under lists, around sections, separating
  meta from content. Avoid heavy box-shadows except for one subtle
  case (the phone mock in `AppHeroVisual`).
- **Tabular numerals**: any inline numeral in chrome (eyebrow
  indices, version pins, footer year) uses `tabular-nums` so widths
  stay aligned.
- **MRZ flavour**: `HeroVisual` and `AppHeroVisual` reproduce ICAO
  MRZ glyphs (`P<ROUAMSEMNAT<<…`) at very low contrast. If you add
  another illustrative panel, follow the same idiom — dotted bg
  pattern, corner brackets, mono uppercase metadata at top + bottom,
  cobalt-only accent.

### Components — quick API map

- **Section** — `index? label? title? intro?` then children. Default
  vertical rhythm is `py-20 md:py-28`. Pass `bordered` for a top
  hairline. Use this rather than hand-rolling a `<section>` so eyebrow
  styling stays consistent.
- **Container** — `max-w-6xl` with `px-4 sm:px-6 lg:px-8`. Wrap any
  content that isn't already inside a `Section`.
- **Button** — `variant: primary | secondary | ghost`, `size: md | lg`,
  `arrow` for the sliding `→`, `href + external?` to render `<a>` or
  `<Link>`. Primary is `bg-ink` that hovers to `bg-cobalt-600` —
  this is the canonical CTA.
- **Eyebrow** — accepts an optional `index` (renders as `§NN`) plus
  the label children. Always include an index on top-level page sections.
- **FeatureCard** (in `ui/Card.tsx`) — `index?` + `title` + `body`.
  Drop into the hairline-grid pattern above.
- **Badge** — `tone: neutral | cobalt | outline`. Mono uppercase pill.
- **CodeBlock / CodeTabs / InstallSnippet** — all share the carbon
  surface, white-on-dark mono text, cobalt active-tab underline, and
  `code-scroll` slim scrollbar styling defined in `globals.css`.
- **CornerBrackets** — `size`, `color`, `inset`, `strokeWidth`. Pure
  decorative; absolutely positioned over a relative parent.
- **FAQ** — `items: { question, answer }[]`. Native `<details>`,
  numbered rows, `+` rotates to `×` on open. No JS needed.

### Motion

Restrained. Pretty much everything uses `transition-colors` or
`transition-all duration-200 ease-out`. The only "movement" is the
arrow slide on Buttons (`group-hover:translate-x-0.5`) and the FAQ's
`+ → ×` rotation. Don't add page transitions, parallax, scroll-linked
animation, or framer-motion. The site is meant to feel printed.

### Don'ts

- Don't introduce a UI library (shadcn, Radix, Headless UI, MUI, …).
- Don't add icon libraries (lucide, heroicons, …) — small custom
  SVGs in `components/icons/` only.
- Don't use rounded-md+ or drop-shadows beyond what's already in
  `AppHeroVisual`.
- Don't introduce a new accent colour. Cobalt is the only chroma.
- Don't inline raw colour hex codes in JSX — use the theme tokens.
- Don't write client components unless the file already starts with
  `"use client"` or you genuinely need state/effects (the only
  current ones are `MobileMenu`, `CodeTabs`, `InstallSnippet`).

## Releases

The website ships continuously to Vercel — every `main` push deploys.
PR previews are automatic. No tags, no SemVer for the site itself.
