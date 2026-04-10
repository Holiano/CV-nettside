# CLAUDE.md — julianbosdal.me

Personal CV/portfolio for Julian Hjartholm Bosdal — static site, no build step, hosted on GitHub Pages.

## Commands

```bash
# Start dev server with live reload
npx live-server --port=5500

# No build, test, or lint step — plain HTML/CSS/JS
```

## Architecture

Single-page app with anchor navigation. All content is in `index.html`; no frameworks, no bundler.

```
index.html      # All page sections
styles.css      # All styles (single file)
script.js       # All JS (single file)
img/            # Profile photo + social icons
CNAME           # GitHub Pages custom domain
```

## CSS Conventions

- Dark theme defined entirely via CSS custom properties in `:root` (see `styles.css:12`)
- Color palette: `--bg-deep` / `--bg-mid` / `--bg-surface` / `--bg-card`
- Accent gradient: violet (`--accent-a: #7c3aed`) → cyan (`--accent-b: #06b6d4`)
- Typography: `--text-primary`, `--text-secondary`, `--text-muted`
- Spacing radii: `--radius-sm` / `--radius-md` / `--radius-lg`
- Shared transition easing: `--ease: cubic-bezier(0.4, 0, 0.2, 1)`
- Layout: `.container` centers content with max-width
- Cards: `.card` class for experience/education entries
- **Always use existing CSS variables — do not hardcode colors**

## JS Conventions

- Vanilla JS, no dependencies
- Scroll animations via `IntersectionObserver` on `.card` and `.interest-item`
- Active nav highlight driven by `scroll` event
- Button effects (ripple, particles) scoped to `.btn-cool` class

## Owner Info

- Name: Julian Hjartholm Bosdal
- Email: Bosdalj@gmail.com
- Phone: +47 954 54 892
- Location: Bergen, Norway

---

## CV/Portfolio Best Practices

### Content & Structure
- Above-the-fold must immediately answer: **who you are + what you do** — use a short punchy one-liner
- Standard flow: `Hero → About → Skills → Projects → Contact` — keep it scannable
- No skill bars/progress ratings — meaningless without a reference point
- Curate: **3–5 strong projects** beats a dump of everything you've built
- For each project: what it does, what tech was used, and a live link
- Side projects are essential for early-career devs — they show initiative

### Projects Are the Priority
- Show **live demos**, not just screenshots — deploy everything (GitHub Pages, Vercel, Netlify are free)
- Be specific: *"Built a pub/sub broker in Java for DAT110"* > *"Java backend project"*
- Tailor featured projects to the type of role you're targeting

### Design & UX
- Accessibility first: keyboard-navigable, good color contrast — most portfolios fail here
- Fully mobile-responsive — test on phone before every deploy
- Subtle animations/micro-interactions: yes. Overwhelming effects: no
- Personality is allowed; small creative touches are memorable

### Links & Contact
- Contact info must be **obvious** — don't bury it
- Include a downloadable PDF CV button
- All links must work — broken links are an immediate red flag
- Link to GitHub and LinkedIn at minimum

### Quality Bar
- No typos, no broken links, no console errors — hiring managers notice
- Have someone else proofread before considering it "done"
- Keep content up to date — stale projects quietly hurt you