# Portfolio Site — Claude Context

Personal portfolio site → portfolio.mybrain.world

## Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Port**: 3000 (local), 3010 (VPS)

## Run locally
```bash
cd app
npm install
npm run dev   # → localhost:3000
```

## Key files
| Path | Purpose |
|------|---------|
| `app/lib/content.ts` | All copy (EN + ES), projects, contact details: edit here |
| `app/lib/meta.ts` | Page metadata, hreflang, Open Graph |
| `app/components/Site.tsx` | Home, case study, header, contact, footer |
| `app/app/(en)/` and `app/app/(es)/es/` | Two root layouts so `<html lang>` is right; `/` English, `/es` Spanish |
| `app/public/work/` | Project screenshots (public sites only) |
| `app/public/og.png` | Social share image |

## Conventions
- App Router only. Server components by default; the only client component is `Reveal.tsx`
- Tailwind for all styling; palette tokens in `app/app/globals.css` match Wingwright Studio (navy, honey, paper)
- Fonts self-hosted via Fontsource (no Google Fonts request at build or runtime)
- The site is public: never add private URLs, anything behind Cloudflare Access, secrets, myshopify domains/passwords, or personal content (e.g. Kamila's poems or CV) without asking Cristian
- Public name is Cristian Estrada, never the VPS username

## Skills to use
| Task | Skill |
|------|-------|
| Full redesign or building a new site from scratch | `/new-site` — uses Google Stitch + UI UX Pro Max, deploys to VPS |
| Adding/improving UI components, layouts, styling | `/ui-ux-pro-max` |
| Building a dashboard or app-like section | `/interface-design:init` |
| Auditing existing UI against design system | `/interface-design:audit` |
| Extracting design patterns from existing code | `/interface-design:extract` |
| Reading design context before starting work | `/project-context` |
