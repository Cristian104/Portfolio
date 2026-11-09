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
| `app/lib/content.ts` | All copy (EN + ES), projects, stack, contact, ASCII name: edit here |
| `app/lib/meta.ts` | Page metadata, hreflang, Open Graph |
| `app/components/Site.tsx` | The one-page layout (hero, projects, stack, contact) |
| `app/components/AsciiField.tsx` | Canvas ASCII background in the hero (reacts to cursor and clicks) |
| `app/components/Terminal.tsx` | The interactive mini shell in the hero (help, ls, open, sudo hire-me...) |
| `app/app/(en)/` and `app/app/(es)/es/` | Two root layouts so `<html lang>` is right; `/` English, `/es` Spanish |
| `app/public/work/` | Project screenshots (public sites only) |

## Conventions
- Design: terminal/ASCII, dark only. Palette tokens in `app/app/globals.css` (black, phosphor green, purple); JetBrains Mono via Fontsource
- Compact by design: one page a recruiter can scan in under a minute. Projects expand inline, no case-study pages
- Professional mix: Inter for reading text and headings, JetBrains Mono only for accents (eyebrow commands, tags, buttons, terminal). Terminal is hidden on phones
- App Router only; server components by default, client only for AsciiField and Terminal
- Every animation respects prefers-reduced-motion
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
