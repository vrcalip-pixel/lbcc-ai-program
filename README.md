# AI for Digital Transformation — LBCC Program Site

A full program website + Netflix-idle-style kiosk carousel for the A.S. in AI for Digital Transformation at Long Beach City College.

**Built to do three jobs from one codebase:**
- **Website mode** (default): full program site — landing page with cinematic carousel, course subpages, enrollment flow.
- **Kiosk mode** (append `?kiosk=1`): fullscreen auto-advancing carousel with no UI chrome, for hallway monitors.
- **Standalone pages**: each course and the enrollment flow work as independent pages with their own URL.

---

## Site map

```
/                    ← index.html    — Carousel + landing + pathway + courses + outcomes + enroll CTA
/ai-40.html          ← COSA 55 / AI 40 — Foundational AI & Machine Learning
/ai-45.html          ← COSA 60 / AI 45 — The Fundamentals of Generative AI
/ai-60.html          ← COSA 65 / AI 60 — Applied Conversational & Agentic AI
/ai-65.html          ← COSA 67 / AI 65 — Multi-Modal AI Applications
/ai-70.html          ← COSA 69 / AI 70 — Human–AI Collaboration & Workflow Automation
/ai-80.html          ← COSA 75 / AI 80 — Applied AI Integration Studio (Capstone)
/enroll.html         ← How to enroll, financial aid, FAQ, contact
```

Each course subpage shares the same structure: cinematic static hero (reusing the carousel's per-course image, font, tags, and hook) → facts strip → catalog description → what you'll learn (SLOs) → course content topics (from COR) → pathway context → CTA → footer.

---

## Quick start

Just open `index.html` in any browser. No build step, no dependencies, no server.

```
git clone <this-repo>
cd lbcc-ai-program
open index.html
```

### Deploy to GitHub Pages
1. Push this folder to GitHub (files at repo root, NOT inside a zip).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Site goes live at `https://<username>.github.io/<repo-name>/`.

### Kiosk mode (hallway monitor)
```
chrome.exe --kiosk "https://<your-url>/?kiosk=1"
```

---

## File structure

```
lbcc-ai-program/
├── index.html              ← home page with carousel
├── ai-40.html … ai-80.html ← 6 course pages
├── enroll.html             ← enrollment flow
├── assets/
│   ├── styles.css          ← all styling (design tokens + component styles)
│   ├── slides.js           ← carousel content (edit me to change slides)
│   ├── script.js           ← carousel engine + kiosk detection
│   └── nav.js              ← shared nav behavior + subhero reveal
├── images/                 ← Midjourney images (8 total)
├── MIDJOURNEY_PROMPTS.md   ← prompt directions per image
└── README.md
```

---

## How to edit content

### Carousel slides (homepage)
Edit `assets/slides.js`. Each slide config controls eyebrow, title, font class, tags, hook, image, pan direction.

### Course pages
Course pages are hand-built with content pulled from the approved Course Outlines of Record. To modify:
1. Catalog descriptions, SLOs, topics, and hours live inline in each `ai-*.html` file's bands.
2. Keep the `.subhero` block structure intact — it reuses the carousel's `.slide` CSS for visual consistency.
3. The mini-pathway at the bottom of each course page highlights the current course with `.is-current` — update if you reorder or rename courses.

### Nav + footer
Currently duplicated across pages. If you're making a site-wide change (e.g., new nav link, email update), update all 8 HTML files. Tradeoff for zero build step.

### Labor market stats (outcomes section)
Source URLs in the homepage outcomes band link to BLS. Numbers cited are from the 2024–2034 projection period. Refresh roughly annually when BLS updates projections.

---

## Design system (quick reference)

**Palette:** warm midnight `#0b0f1c` · dawn amber `#f4a259` · warm cream `#f5ede1`
**Typography:** Instrument Serif (display) · Manrope (body) · JetBrains Mono (mono)
**Per-course display fonts:** Fraunces (AI 40) · Caprasimo (AI 45) · Syne (AI 60) · Unica One (AI 65) · Cormorant Garamond italic (AI 70) · Playfair Display (AI 80)
**Motion:** 8s Ken Burns pan · 0.7s fade-in · 0.8s fade-out · staggered text reveal (eyebrow → title → tags → hook)

Full width throughout — no centered container. Side padding via `--pad-x` (`clamp(1.5rem, 4vw, 4rem)`).

---

## Accessibility

- Skip link on every page (`Skip to content`)
- All decorative elements marked `aria-hidden`
- Semantic sectioning (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- Focus-visible states on all interactive elements
- `prefers-reduced-motion` respected — carousel pan and fades simplify for users who request it
- Color contrast meets WCAG AA for body copy on all backgrounds

---

Program lead: **Vincent Calip** · `vcalip@lbcc.edu`
Computer & Office Studies · School of Career Education & Culinary Arts · Long Beach City College
