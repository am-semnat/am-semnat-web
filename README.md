# am-semnat-web

Marketing website for [AmSemnat](https://amsemnat.ro) — Romanian eID NFC
toolkit.

Covers the mobile app and the three open-source SDKs (Android, iOS, Expo).

## Stack

- Next.js 16 (App Router, RSC)
- TypeScript
- Tailwind CSS v4
- Plausible analytics
- Vercel hosting

## Develop

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:3000
```

## Verify

```bash
npm run check      # typecheck + lint + build
```

## Deploy

`main` branch deploys to production via Vercel. PR previews automatic.
Set these env vars in Vercel:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — `amsemnat.ro` in production, unset on previews
- `NEXT_PUBLIC_APPS_LIVE` — `true` once iOS / Android apps are live in stores

## Layout

See [`CLAUDE.md`](./CLAUDE.md) for directory structure and conventions.

## Strategy doc

The non-implementation decisions (audiences, IA, competitive positioning,
SEO strategy) live in `../research/website-plan.md` in the SDK workspace.

## License

Source code Apache 2.0. Content (Romanian copy, design) © AmSemnat.
