# Y&Now — Content Density & Visual Cleanup: Audit

Word counts are **rendered copy only** (headings, decks, card text, list items, button
labels, FAQ answers) — not code, comments, alt text, or metadata.

## Decisions locked before build (Part 5, pre-step-2)

**Signature device (3.1): the route line.**
A 2px brand stroke with a square terminal cap. It appears in exactly four places and
nowhere else:

1. Leading rule left of / above every H2 (replaces all deleted eyebrow labels)
2. The connector running through the Journey timeline markers
3. A single hairline between two sections that share a background
4. Drawn once, left-to-right, under the hero headline on page load

**Section endings (3.2): two types only.**

1. **Tint edge** — the section sits on `--surface-alt` and ends where the colour ends.
   Used on at least half of all sections; colour blocking *is* the divider.
2. **Container hairline** — 1px `--ink` @ 10%, container width, only between two
   sections that share the same background.

No image bleed, no overlap card, no number carry, no angled/wave dividers.

## Measured word counts

Rendered copy, counted from the production build of `main` and of this branch
served side by side. `aria-hidden` subtrees are excluded from both, so neither
side is credited for decorative duplicates — which is why the old marquee's four
repeats of the client list and the old navbar's doubled labels do not inflate the
"before" column.

"Full" is everything a reader meets on the page. "Body" is `<main>` only, with the
header and footer taken out.

| Page | full before | full after | cut | body before | body after | cut |
|---|---:|---:|---:|---:|---:|---:|
| `/` | 552 | 328 | **40.6%** | 352 | 223 | 36.6% |
| `/corporate` | 483 | 282 | **41.6%** | 284 | 178 | 37.3% |
| `/csr-programs` | 410 | 230 | **43.9%** | 211 | 126 | 40.3% |
| `/industry-solutions` | 455 | 271 | **40.4%** | 257 | 168 | 34.6% |
| `/defence-programs` | 393 | 195 | **50.4%** | 196 | 93 | 52.6% |
| `/school-solutions` | 380 | 200 | **47.4%** | 181 | 96 | 47.0% |
| `/micro-entrepreneurship` | 370 | 203 | **45.1%** | 172 | 100 | 41.9% |
| `/learners-b2c` | 382 | 225 | **41.1%** | 183 | 121 | 33.9% |
| `/our-platform` | 427 | 252 | **41.0%** | 226 | 146 | 35.4% |
| **All nine** | **3852** | **2186** | **43.3%** | 2062 | 1251 | 39.3% |

Every page clears the ≥40% bar. **The homepage lands at 40.6%, not the 45% the
brief asked for** — see the note under "Content flagged" below.

## What was cut, section by section

### Homepage

| Section | Before | After |
|---|---|---|
| Hero | eyebrow chip, H1 + a looping typewriter, 18-word deck, two equal-weight buttons | H1 (6 words), 16-word deck, one solid button + one text link |
| Client band | 12-word label sentence; the five names repeated **four times** in the DOM | "Trusted by"; the names once, with the loop copy `aria-hidden` |
| Find Your Route | 7 image cards + an 8th CTA card | 7 image cards, name only |
| Stats | eyebrow, H2, 27-word attribution paragraph, buried near the footer | H2, three figures, one caption line — **moved up**, directly after the route grid |
| Journey | eyebrow, H2, 16-word deck, 5 cards reading "STEP 01 Assess" | H2, a connected timeline, `01 Assess` + ≤8 words |
| Why Choose Us | eyebrow, H2, `01`–`05` markers, 5 items | H2, 4 items, no numbering |
| Work in Practice | eyebrow, H2, 5 client stories | **removed** — lives on `/corporate` |
| FAQ | eyebrow, H2, 15-word deck, a CTA, first answer open | H2, four questions, all closed |
| Final CTA | did not exist | brand band: H2, one line, one button |

Order: Hero → Logos → Route → **Stats** → Journey → Why Us → FAQ → CTA → Footer.
Bands: ink → white → white → tint → white → tint → white → brand → footer.
The one white/white pair is the only place a hairline divider appears.

### Solution pages — one template, eight blocks

hero → what we cover (titles only) → split (image + list) → chips → stats →
proof → best for → CTA band. Blocks with no approved deck content are **omitted**,
never padded. Backgrounds alternate white/tint down whatever blocks a page has,
so no two adjacent bands share a ground:

```
/corporate               brand white tint white tint white brand
/csr-programs            brand white tint white tint brand
/industry-solutions      brand white tint white tint white brand
/defence-programs        brand white tint white brand
/school-solutions        brand white tint white tint brand
/micro-entrepreneurship  brand white tint white brand
/learners-b2c            brand white tint white tint brand
/our-platform            brand white tint white tint brand
```

### Navigation and footer

| Element | Before | After |
|---|---|---|
| Solutions dropdown | 7 links + 7 descriptions + 7 photographs + a preview pane + a footer CTA | 7 links, two columns, text only — zero images |
| Resources dropdown | 3 links + descriptions + images | 3 links, one column, right-aligned |
| Navbar DOM | two full bars mounted at once, so the header read `Home Home Solutions Solutions Our Platform Our Platform About Us About Us Resources Resources` | one bar: `Home Solutions … Our Platform About Us Resources` |
| Mobile menu | 340px side drawer with thumbnails and descriptions | full-screen overlay, text accordions closed by default, focus trap, scroll lock, Escape, safe-area insets |
| Footer intro | 28-word company paragraph | one 6-word line |
| Footer socials | icons with `aria-label` (already correct — the raw-URL bug in the brief was not present in this codebase) | unchanged, targets raised to 44px |

## Content flagged, not deleted

Nothing was dropped silently. These need a decision:

1. **The homepage is at 40.6%, not 45%.** The brief's 45% target assumed a homepage
   that still carried the "Work in Practice" client stories, an eyebrow and a deck on
   all seven sections, `01`–`05` markers, and a mid-page CTA card. All of that is gone.
   What remains is the copy deck's own words: seven route names, five journey steps,
   four benefit lines, four Q&As, three figures, and the navigation. Cutting further
   would mean deleting information rather than compressing it, which §2.1 and Part 6
   both forbid. Say the word on any of the following and the number moves:
   the FAQ answers can be halved (they currently double as `FAQPage` structured data
   for AI search), or the Journey lines can be dropped to bare labels.
2. **The stat band is three wide, not six.** §2.3.4 asks for six, half of them Y&Now's
   own — learners trained, programmes delivered, organisations served, cities,
   trainers, years. Those numbers are not available and were **not invented**. The only
   approved figures are the three published ones. Send the six and the band widens with
   no other change: `StatBand` already lays out 6-across at `lg`.
3. **Homepage "Work in Practice" removed.** The five client stories (Tata Group, JSW
   Energy, Castrol India, Bharat Petroleum, Jaquar) were on the homepage in full, in the
   band above them, and again on `/corporate` — three times on one scroll. They now
   appear on `/corporate` only. Nothing is lost; it moved.
4. **Card descriptions on the seven solution pages** — the one-liners under "What We
   Support" — are off the page. On four of the seven they were present on some items and
   absent on others, which is what made those lists read as unfinished.
5. **`HorizontalCapabilityScroller` is deleted.** It carried
   `eyebrow = "Manufacturing & Precision Engineering"` and a manufacturing paragraph as
   *component defaults*, which is exactly why they appeared above general corporate
   copy on `/corporate`. It also hijacked the wheel to pin the page.
6. **`images.unoptimized: true` in `next.config.ts` is unchanged.** It makes `next/image`
   strip `srcset`/`sizes` at render, so no AVIF/WebP is served. Turning it off needs
   `sharp` removed from `ignoreScripts` in `package.json` — a dependency change, so it
   is flagged rather than made. The correct `sizes` values are already in the source and
   start working the moment it is switched on.
7. **`/ui-direction`, `/design-system` and `/sitemap` are untouched.** They are internal
   reference pages that document the *previous* design language — old type scale, old
   shadows, tracked capitals. They now describe a system that no longer exists. They are
   not linked from the navigation and no route was changed, but they should either be
   rewritten against `globals.css` or retired.

## Verified

Checked against the running production build, not by eye:

- Header text, before: `Home Home Solutions Solutions Our Platform Our Platform About Us About Us Resources Resources`
- Header text, after: `Home Solutions … Our Platform About Us Resources` — each label once
- Zero `uppercase` in the rendered homepage
- Zero `aria-expanded="true"` on load — every accordion and dropdown starts closed
- Hero uses `svh`, sets a poster, and caps its height in landscape
- No `overflow-x: hidden` anywhere
- Background bands alternate on all nine pages, with one deliberate white/white pair
  on the homepage carrying the only hairline divider
- `next build` and `eslint` both clean (one pre-existing `InViewIcon` lint error, present
  on `main` too, left alone)

## Not verified

No browser is available in this environment, so nothing below was checked by rendering:

- The 4.8 testing matrix (320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920 / 844×390)
- Lighthouse performance and accessibility scores
- iOS Safari video autoplay and `svh` behaviour, Android address-bar collapse
- VoiceOver / TalkBack reading order
- Colour-contrast measurement (the palette is built to clear 4.5:1 — `--ink-muted`
  `#55597A` is 7.1:1 on white and 6.6:1 on `--surface-alt` — but it was calculated,
  not sampled from a render)

These are the first things to walk through on the preview deploy.
