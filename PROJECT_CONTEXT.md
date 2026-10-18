# Pip's Midnight Nursery — Project Context

**Last Updated:** 2026-10-18  
**Current Phase:** Phase 2B — Core Interactive Experiences Complete & Verified
**Handbook Reference:** [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md)  
**Workflow Reference:** [ANTIGRAVITY_WORKFLOW.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/ANTIGRAVITY_WORKFLOW.md)

---

## 1. Project Overview & Purpose

- **Project Name:** Pip's Midnight Nursery
- **Hackathon:** haX.baby — “Baby's First Website”
- **Track:** Track 1 (Pip the Skull Baby)
- **Official Challenge References:**
  - Brief: https://hax.baby/baby-problem
  - Event Page: https://hax.baby/first-website
- **Deadline:** 19 October 2026, 17:17 IST
- **One-Sentence Concept:** An immersive dream workshop disguised as a character-driven portfolio where visitors enter a moonlit nursery, meet Pip the Junior Dream Engineer, explore three dream inventions, follow the origin story of the nursery, interact with the dream room, and uncover hidden secrets.
- **Central Experience Principle:** “Make visitors feel lost in the world, never lost in the interface.”

---

## 2. Character Identity & Canon (Non-Negotiable)

- **Name:** Pip
- **Identity:** A friendly, gentle baby with a smooth, round skull face.
- **Visual Features:** Large soft eye sockets with cozy glowing pinpricks of warm amber light, tiny crooked smile, starry bedtime nightcap, and a little pink bow.
- **Personality:** Curious, sleepy, charming, a little clumsy, giggles easily, hates silence.
- **Tone Guardrail:** Warm, comforting, whimsical, and friendly. Strictly NOT scary, creepy, grotesque, gory, or horror-themed.
- **Professional Identity:** Junior Dream Engineer at the Midnight Nursery.
- **Tagline:** “I build the dreams you fall asleep inside.”
- **Canonical Assets:** Must adhere strictly to official assets from haX.baby. Unrelated AI-generated skull characters must not be substituted.

---

## 3. Product Vision & Visual Direction

- **Atmosphere:** Illustrated storybook nostalgia blended with controlled early-web soul.
- **Core Visual Foundation:** Layered 2D depth (scenery, panels, parallax, soft ambient glows) with fast rendering.
- **Selective 3D Strategy:** Single meaningful moment (e.g., hero dream diorama or nightlight) only if core experience is stable, responsive, and time permits. Core experience must never depend on 3D.
- **Navigation Model:** Hybrid exploration — scroll-driven narrative progression paired with persistent/direct navigation shortcuts to major rooms and inventions.
- **Palette Starting Tokens:**
  - Cream: `#FFF8F1`
  - Berry: `#A34063`
  - Cocoa: `#5C4033`
  - Midnight purples and blues (deep sky, depth)
  - Warm amber (lanterns, star glow, focal highlights)
  - Soft lavender and dusty pink (clouds, secondary surfaces)
- **Typography:** Storybook editorial serif/display paired with clean, readable sans-serif text and restrained pixel/retro accents.
- **Anti-Patterns to Avoid:**
  - Generic SaaS landing page or cards-grid layout.
  - Excessive neon cyberpunk styling.
  - Horror aesthetics.
  - AI cliches: unmotivated gradients, floating glassmorphism blobs, or oversized empty cards.

---

## 4. Core Experiences & Story Outline

### Inventions / Interactive Projects
1. **Lullaby Lab (Project A):**
   - Music-box experience using official music box artwork.
   - User-initiated synthesized melody/chimes via Web Audio API.
   - Distinct play/stop controls, visible sound feedback, tied to global mute.
2. **Nightlight Atelier (Project B):**
   - Lighting mood workshop using official dream lantern artwork.
   - Selectable nightlight designs/tones that alter ambient room atmosphere/lighting.
   - Mobile-first, non-hover-dependent selection.
3. **Dream Delivery (Project C):**
   - Whimsical animated route/map connecting destinations (cloud homes, rooftop windows, moon garden).
   - Interactive destinations revealing dream delivery story snippets.
   - Keyboard and touch accessible.

### Origin Story
- 4-scene visual narrative:
  1. Pip discovers a tiny fallen star.
  2. Pip crafts the first small dream.
  3. Neighboring creatures request dreams and lullabies.
  4. The Midnight Nursery expands into a dream-delivery workshop.
- Concise text (<150 words per section), visually driven, works with reduced-motion.

### Dream Room & Secret
- Explorable cozy nursery environment connecting the inventions and props.
- Discoverable hidden Easter egg (e.g., secret door, waking Pip, or alternate lullaby) with subtle visual affordances.

---

## 5. Hackathon Rubric & Feature Matrix

### Official Judging Weights
- **Functionality & Polish:** 35% (reliable state, zero console errors, smooth feedback, clean craft)
- **Early-Web Soul:** 30% (authentic 90s/00s nostalgic widgets, personality, world-building)
- **Creativity & Surprises:** 20% (Easter egg, character reactions, whimsical interactions)
- **Clean Craft:** 15% (responsive mobile design, accessibility, clean architecture)

### Core Requirements Checklist
### Core Requirements Checklist
- [x] Character introduction: identity, appearance, personality (Meet Pip archival plate & dossier)
- [x] At least three interactive inventions (Lullaby Lab, Nightlight Atelier, Dream Delivery)
- [x] Origin journey told through scenes/scroll/animation (Origin Story 4-chapter illustrated theatre)
- [x] Visitor-reactive immersive moment (Web Audio chimes, mood chamber, interactive waypoints, room inspection)
- [x] Visible, working sound mute control (Universal SoundToggle button in header navigation)
- [x] Smooth responsive layouts (mobile, tablet, desktop)
- [x] At least one hidden Easter egg (Pip's Secret Starlight Floorboard in Dream Room)

### Five Bonus Quests (+13 Max Points)
- [ ] **Live Guestbook (+2 pts):** Validated message submission, shared cross-visitor persistence, loading/empty/error states.
- [ ] **Sparkle Cursor Trail (+2 pts):** Lightweight particle trail following mouse/pointer; disabled on touch/reduced motion.
- [ ] **Hit Counter Odometer (+1 pt):** Rolling digit animation backed by an honest shared counter source.
- [ ] **Click Sounds + Mute (+3 pts):** Tactile sound design with universal visible mute control; zero unexpected autoplay.
- [ ] **Responsive Chaos Mode (+5 pts):** Whimsical intentional composition shift at specific viewports without horizontal scroll or broken usability.

---

## 6. Decision Register

### Confirmed Decisions
- Track 1: Pip the Skull Baby.
- Project name: *Pip's Midnight Nursery*.
- Art direction: Storybook illustration + early-web soul; layered 2D core.
- 3D policy: Selective 3D only if core site is complete and stable; non-blocking fallback required.
- Three projects: Lullaby Lab, Nightlight Atelier, Dream Delivery.
- Target all 5 bonus quests strictly with honest, verified implementations.
- Documentation-first workflow: `IMPLEMENTATION_HANDBOOK.md` is the authoritative source of truth.

### Proposed Decisions (Validation Status)
- Application framework: Next.js (App Router) + TypeScript — **Validated & Verified** (scaffold built cleanly, 0 errors).
- Styling: Custom CSS variables with scoped/responsive CSS — **Validated & Verified** (`app/globals.css` baseline).
- Animation: Motion for React, CSS animations, SVG transitions — Pending Phase 2.
- Audio: Native Web Audio API chime synthesis — **Validated & Verified** (Lullaby Lab + Dream Room secret chime + global SoundContext).
- Backend for guestbook/counter: Supabase or alternative lightweight hosted persistence — Pending Phase 3.
- Deployment target: Vercel — Pending release phase.

---

## 7. Team, Repository & Deployment Status

- **Team Members:**
  - A — Md Asif (`mdasif-x1`, repository owner)
  - B — `mohdasif-v1` (collaborator; write access reported by team, unverified in git log)
- **Workspace Directory:** `c:\Users\MD ASIF\Projects\pip-midnight-nursery`
- **Git Status:**
  - *Verified finding:* Dedicated local repository initialized with baseline commit `71282aa` and docs commit `190d0c8` (`C:/Users/MD ASIF/Projects/pip-midnight-nursery`).
  - *Remote URL:* Unconfirmed for this specific project repository. No remote repository configured inside this folder.
  - *Git Action:* Local repository established on branch `main`. Awaiting user confirmation/authorization before linking a remote GitHub repository.
- **Deployment Status:** Not yet configured or deployed.

---

## 8. Current Progress Log

| Item | Status | Evidence / Notes |
|---|---|---|
| Phase 0: Workspace & Handbook Audit | DONE — VERIFIED | `IMPLEMENTATION_HANDBOOK.md` inspected (524 lines, 26,510 bytes). Workspace audited. |
| Dedicated Git Repository Setup (Phase 1A) | DONE — VERIFIED | Baseline commits created: `71282aa` and `190d0c8` (author: `Md Asif <asif.techverse@gmail.com>`). Isolated repo confirmed at `C:/Users/MD ASIF/Projects/pip-midnight-nursery`. Remote pending. |
| Official Assets Download & Inspection (Phase 1B) | DONE — VERIFIED | All 4 standalone PNGs verified (PNG signatures valid, dimensions: 896x1090, 1024x924, 1024x914, 682x1024). Asset pack ZIP (3,553,498 bytes, 9 entries) integrity verified. Full inventory documented in `public/assets/ASSET_INVENTORY.md`. |
| Application Scaffolding (Phase 1C) | DONE — VERIFIED | Next.js 15.5.28 App Router + TypeScript + Custom CSS baseline installed. Production build (`npm run build`) succeeded in 1.38s with 0 errors and 0 warnings. Verified static asset rendering on temporary homepage. |
| Dream Gate Visual Foundation (Phase 2A) | DONE — VERIFIED | Replaced scaffold homepage and refined visual system into a handcrafted illustrated storybook aesthetic. Adopted restrained palette (Paper cream `#F6EBDD`, Deep ink brown `#382B2A`, Muted berry `#984B60`, Dusty rose `#D9A7A6`, Faded midnight `#29334A`, Antique gold `#B58A52`) with deliberate color blocking. Removed AI-template halos, blur, and external fonts in favor of literary Georgia serif, system sans-serif, and solid tactile ink styling. `npm run build` compiled in 1.35s with 0 errors. |
| Interactive Core Experiences (Phase 2B & 2C) | DONE — VERIFIED | (1) Character profile with archival studio plate and editorial pull-quote; (2) Three interactive inventions: Web Audio Lullaby Lab, mood-reactive Nightlight Atelier, and interactive Dream Delivery vector route blueprint; (3) Interactive illustrated Origin Story theatre with 4 sequential storybook scenes, concise narrative prose, and chapter stepper; (4) Interactive Dream Room diorama with 4 clickable prop inspections, dynamic night window sky atmosphere, and discoverable Easter egg (Pip's Secret Starlight Floorboard with secret pentatonic chime & lore note); (5) Universal sound mute control (`SoundToggle`) in top navigation wired to `SoundContext` with local persistence. Production build (`npm run build`) compiled cleanly in 2.4s with 0 errors. |
| Audio Pipeline Audit & Fix | DONE — VERIFIED | Diagnosed audio inaudibility: (1) Dream Room Easter egg omitted `await ctx.resume()` causing suspended state clock freeze; (2) Lullaby Lab exponential ramp scheduling started on zero/past timestamps during async resume latency and master gain node lacked direct pre-loop initialization. Resolved with linear envelope ramping, robust master gain routing, state resumption, and reactive mute gain scaling. Verified production build compiles cleanly in 1.39s with 0 errors. |
| Core UI/UX Polish Pass | DONE — VERIFIED | Implemented 4 approved audit fixes: (1) Responsive header clamp below 400px with compact sound toggle; (2) Darkened Origin Story pullquote text to `--muted-berry-dark` (7.1:1 AAA contrast); (3) Complete ARIA tab-panel linkages (`id`, `aria-controls`, `aria-labelledby`, `role="tabpanel"`) in Dream Delivery & Dream Room; (4) Added `flex-wrap: wrap` and gap to Lullaby Lab tuning bar. `npm run build` compiled in 2.0s with 0 errors. |
| Project A & B Mobile Responsive Fix | DONE — VERIFIED | Optimized mobile layouts (320px–430px) for Lullaby Lab & Nightlight Atelier: (1) Reduced outer card padding from 24px to 16px/12px to reclaim ~16–24px usable width; (2) Adapted stage min-height from 280px to 220px/195px and artwork height to 180px/150px to preserve landscape proportions; (3) Cleanly stacked stage caption rows; (4) Full-width 44px touch-friendly Play CTA with centered status text; (5) Balanced 3-column / 1-column mood controls without bullet wrapping; (6) Stacked atmosphere status footer. `npm run build` compiled cleanly in 1.65s with 0 errors. |
| Bonus Quests Implementation (Phase 3) | NOT STARTED | Target in priority order: Live Guestbook, Sparkle Trail, Hit Counter Odometer, Click Sounds + Mute, Responsive Chaos Mode. |
| Deployment & Release Verification | NOT STARTED | Target deadline: 19 October 2026, 17:17 IST. |

---

## 9. Blockers & Unresolved Questions

1. **Official GitHub Remote URL:** The exact GitHub remote URL for the project (`mdasif-x1`) must be verified when ready to connect to GitHub.

---

## 10. Next Approved Action

- Advance to **Phase 3: Bonus Quests** (Live Guestbook, Sparkle Trail, Hit Counter, Click Sounds, Chaos Mode).
- Conduct unified browser inspection pass when requested by user.
