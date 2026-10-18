# Pip's Midnight Nursery — Project Context

**Last Updated:** 2026-10-18  
**Current Phase:** Phase 0 — Understanding, Audit, and Documentation Setup  
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
- [ ] Character introduction: identity, appearance, personality
- [ ] At least three interactive inventions (Lullaby Lab, Nightlight Atelier, Dream Delivery)
- [ ] Origin journey told through scenes/scroll/animation
- [ ] Visitor-reactive immersive moment (pointer/clicks/sound)
- [ ] Visible, working sound mute control (if audio is present)
- [ ] Smooth responsive layouts (mobile, tablet, desktop)
- [ ] At least one hidden Easter egg

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

### Proposed Decisions (Awaiting Validation)
- Application framework: Next.js (App Router) + TypeScript.
- Styling: Custom CSS variables with scoped/responsive CSS.
- Animation: Motion for React, CSS animations, SVG transitions.
- Audio: Native Web Audio API chime synthesis.
- Backend for guestbook/counter: Supabase or alternative lightweight hosted persistence.
- Deployment target: Vercel.

---

## 7. Team, Repository & Deployment Status

- **Team Members:**
  - A — Md Asif (`mdasif-x1`, repository owner)
  - B — `mohdasif-v1` (collaborator; write access reported by team, unverified in git log)
- **Workspace Directory:** `c:\Users\MD ASIF\Projects\pip-midnight-nursery`
- **Git Status:**
  - *Verified finding:* The project directory does NOT currently contain an isolated `.git` repository (`.git` exists at parent `C:\Users\MD ASIF`).
  - *Remote URL:* Unconfirmed for this specific project repository. No remote repository configured inside this folder.
  - *Git Action:* Awaiting user confirmation/authorization before initializing or linking a dedicated repository.
- **Deployment Status:** Not yet configured or deployed.

---

## 8. Current Progress Log

| Item | Status | Evidence / Notes |
|---|---|---|
| Phase 0: Workspace & Handbook Audit | DONE — VERIFIED | `IMPLEMENTATION_HANDBOOK.md` inspected (524 lines, 26,510 bytes). Workspace audited. |
| Dedicated Git Repository Setup | BLOCKED / PENDING | Folder lacks isolated `.git`. Awaiting user authorization to initialize/configure. |
| Official Assets Download & Inspection | NOT STARTED | URLs identified; download/verification pending authorization. |
| Application Scaffolding | NOT STARTED | Stack proposed; implementation blocked until Phase 0 completion & approval. |
| Core Features Implementation | NOT STARTED | Dependent on scaffold and asset verification. |
| Bonus Quests Implementation | NOT STARTED | Dependent on core features completion. |
| Deployment & Release Verification | NOT STARTED | Target deadline: 19 October 2026, 17:17 IST. |

---

## 9. Blockers & Unresolved Questions

1. **Dedicated Git Repository:** Workspace is currently located inside a parent git root (`C:\Users\MD ASIF`). Authorization is required to initialize a local git repository in `c:\Users\MD ASIF\Projects\pip-midnight-nursery` and attach the official GitHub remote URL (`mdasif-x1`).
2. **Official GitHub Remote URL:** The exact GitHub remote URL for the project must be verified.
3. **Official Asset Pack Ingestion:** Official assets from `https://hax.baby/baby/assets/` need to be downloaded and inspected locally in the next phase.

---

## 10. Next Approved Action

- Complete Phase 0 audit and obtain user review.
- Advance to **Phase 1: Project Setup, Asset Inspection & Foundation Scaffolding** once approved.
