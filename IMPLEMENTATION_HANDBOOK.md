# Pip's Midnight Nursery — Implementation Handbook

**Project:** Pip's Midnight Nursery  
**Hackathon:** haX.baby — Baby's First Website, Track 1 (Pip the Skull Baby)  
**Status:** Planning baseline — implementation has not yet been verified  
**Primary source of truth:** This document  
**Deadline:** 19 October 2026, 17:17 IST  
**Team:** A — Md Asif (`mdasif-x1`, repository owner); B — `mohdasif-v1` (write access confirmed by team)  
**Strategy:** Balanced — core experience first, then target all five bonus quests where feasible  
**3D strategy:** Selective 3D — one meaningful scene only if time permits

> This handbook captures decisions and requirements discussed so far. It is a plan, not evidence that any code, dependency, asset download, deployment, or feature already exists. Mark a task complete only after checking the actual result.

---

## 1. Product vision

### 1.1 One-sentence concept

**Pip's Midnight Nursery** is an immersive dream workshop disguised as a portfolio: visitors enter a moonlit nursery, meet Pip the Junior Dream Engineer, explore three inventions, discover how the nursery began, experiment with the dream room, and uncover a secret.

### 1.2 Experience principle

**Make visitors feel lost in the world, never lost in the interface.**

The site should reward curiosity and create emotional attachment without obscuring navigation or essential controls. It should feel authored, coherent, playful, and memorable—not like a generic AI-generated landing page or a collection of unrelated effects.

### 1.3 Agreed creative direction

- Track 1: Pip the Skull Baby.
- Storybook illustration blended with restrained retro-web nostalgia.
- Immersive, layered 2D as the foundation.
- Selective 3D for one meaningful moment only if the core site is stable and time remains.
- Hybrid exploration: scroll-driven story plus freely clickable rooms/shortcuts.
- Clear navigation, touch-friendly controls, keyboard support, reduced-motion support.
- Warm cream `#FFF8F1`, berry `#A34063`, cocoa `#5C4033`, midnight purples/blues, moonlight, warm amber glows.
- Elegant storybook typography paired with playful rounded/pixel-like accents used sparingly.
- A coherent visual system across scenery, panels, buttons, animations, project experiences, and credits.

### 1.4 Character canon — non-negotiable

Pip is the official character specified by the challenge:

- Name: Pip.
- Identity: a cute baby with a smooth, round skull face.
- Appearance: large soft eye sockets with cozy glowing pinpricks of light, tiny crooked smile, starry bedtime nightcap, little pink bow.
- Personality: curious, sleepy, a little clumsy, easily delighted; giggles at things and hates silence.
- Profession: **Junior Dream Engineer at the Midnight Nursery**.
- Tone: friendly, gentle, cute; never scary, creepy, gory, or violent.
- Tagline: **“I build the dreams you fall asleep inside.”**

The official Pip assets are the source of truth for the character's visual identity. Do not substitute an unrelated character or create artwork that contradicts the canon.

---

## 2. Official challenge requirements and judging

Official references:
- Challenge brief: https://hax.baby/baby-problem
- Event page: https://hax.baby/first-website

### 2.1 Six core requirements

- [ ] Character introduction: identity, appearance, personality.
- [ ] At least three projects/inventions Pip made.
- [ ] Origin/journey told through scenes, scroll, or animation—not a wall of text.
- [ ] At least one visitor-reactive immersive moment (pointer tracking, clicks, or sound); sound must have an easy-to-find working mute control.
- [ ] Smooth, usable phone and tablet layouts.
- [ ] One hidden Easter egg.

Keep individual story sections concise (target under roughly 150 words each). Let art, layout, and interaction carry the story.

### 2.2 Official rubric

| Criterion | Weight | Our proof of quality |
|---|---:|---|
| Functionality & Polish | 35% | Working controls, clear feedback, smooth transitions, no dead actions, clean console, robust state |
| Early-Web Soul | 30% | Distinctive 90s/00s-inspired personality, nostalgic details, playful widgets, authored writing, coherent world |
| Creativity & Surprises | 20% | Meaningful project interactions, delightful discovery, Easter egg, character reactions |
| Clean Craft | 15% | Responsive/mobile-first design, performance, accessibility, readable code, tidy structure |

Do not confuse bonus points with the base rubric. Bonus quests are additional and must not damage core quality.

### 2.3 Five bonus quests — target all, verify individually

| Quest | Points | Acceptance criteria |
|---|---:|---|
| Live Guestbook | +2 | Visitor can submit a validated message; message persists across reloads and is shared across visitors; loading/empty/error/success states; basic spam protection |
| Sparkle Cursor Trail | +2 | Lightweight particles follow a mouse/pen pointer; does not replace native cursor; disabled or adapted for touch and reduced motion; no runaway animation |
| Hit Counter Odometer | +1 | Rolling digit animation; count comes from a real shared counter if implemented as a visitor count; do not hardcode a fake live statistic |
| Click Sounds + Mute | +3 | Intentional soft sounds on appropriate interactions; visible, reliable mute/unmute; no surprise autoplay; audio respects browser interaction rules |
| Responsive Chaos Mode | +5 | Deliberate, charming changes in composition at viewport sizes; content remains readable, controls usable, and no horizontal overflow |

Maximum listed bonus total: **+13**. Never claim points for a feature that has not been tested.

---

## 3. Website narrative and page blueprint

This is the planned experience. The exact arrangement can be refined after the official assets are inspected, but core requirements and agreed project identities should not be removed without an explicit decision.

### 3.1 The Dream Gate — hero

**Purpose:** Immediate emotional hook and orientation.

- A moonlit nursery/portal, layered clouds, stars, window light, and Pip as the visual focal point.
- Clear headline using the project name or a story-led greeting.
- Short tagline: “I build the dreams you fall asleep inside.”
- One obvious primary action to enter/explore; optional visible shortcuts to projects/story.
- Pip reacts gently to pointer movement or clicks, with a touch-safe fallback.
- Optional motion in background layers; no essential content depends on animation.
- First render must be fast; do not block the hero on 3D, large animation libraries, or remote effects.

**Acceptance:** visitor understands the world, sees a clear next action, and can navigate without guessing.

### 3.2 Meet Pip

**Purpose:** Fulfil the character identity requirement with personality.

- Official character artwork, concise description, profession, quirks, and tagline.
- Small character reaction (eye movement, head tilt, blink, or expression) only if stable and respectful of reduced motion.
- Avoid an overly long biography or scary visual treatment.

**Acceptance:** Pip's name, skull-baby identity, appearance, friendly personality, and profession are obvious.

### 3.3 Pip's inventions — three real experiences

Each project must be an interaction, not merely a card linking nowhere.

#### Project A: Lullaby Lab

- Official music-box asset where suitable.
- Play a short synthesized melody/chime sequence using Web Audio API or another verified, lightweight solution.
- Play/stop or equivalent clear control.
- Sound must be user-initiated, muted by default if appropriate, and controlled by the global mute setting.
- Provide visible active/playing feedback and handle unsupported audio gracefully.

**Acceptance:** pressing play causes intentional audio after user interaction; stop/mute works; no autoplay; keyboard and touch work.

#### Project B: Nightlight Atelier / Nightlight Collection

- Use official dream lantern asset where suitable.
- Offer a small set of selectable nightlight designs or moods.
- Selection changes actual visual state: glow, color, surroundings, or lamp state.
- Make selected state obvious and reset/change controls discoverable.

**Acceptance:** selecting each option visibly changes the scene and works on mobile without hover-only interaction.

#### Project C: Dream Delivery

- Animated illustrated map/route using SVG/CSS/Motion.
- Route travels between a few whimsical destinations (e.g. cloud homes, rooftop windows, moon garden).
- Clicking/tapping destinations reveals a short dream delivery or story snippet.
- Scroll-linked route animation is optional; must not block access to the destinations.

**Acceptance:** route is visible, destination interactions work, and story snippets remain readable and keyboard/touch accessible.

### 3.4 Origin story — three or four visual scenes

Suggested narrative:
1. Pip discovers a tiny fallen star.
2. Pip turns it into the first small dream.
3. Neighbouring creatures begin asking for dreams and lullabies.
4. The Midnight Nursery becomes a dream-delivery workshop.

Use visual transitions and short text segments. A visitor should understand the story even if animations are disabled. Avoid pinning the page in a scroll trap.

**Acceptance:** the origin/journey is clearly conveyed through sequential scenes and concise writing; ordinary scrolling remains usable.

### 3.5 Dream Room — exploratory space

- Cozy, clickable nursery with a lamp, music box, window, clouds, and at least one hidden detail.
- Can be entered via scroll or shortcut; visitors must also be able to leave and navigate to other sections.
- Objects need visible affordance or contextual hints; do not make essential controls hover-only.
- One hidden Easter egg: e.g. a secret door, waking Pip, or an alternate lullaby. Do not expose the exact trigger in the primary UI, but provide enough visual curiosity to make discovery fair.

**Acceptance:** room feels explorable but is not confusing; the Easter egg is discoverable; navigation and essential controls remain clear.

### 3.6 Dream Guestbook and footer

- Guestbook prompt invites visitors to leave a dream/wish.
- Show saved messages, validation, loading, empty, success, and error states.
- Include odometer if the shared counter can be implemented honestly.
- Keep mute/sound setting discoverable.
- Include credits for official artwork, generated artwork if used, audio, fonts, and libraries.
- Include a clear way to return to the beginning or navigate to major sections.

**Acceptance:** visitor can use the guestbook, understand submission status, and find credits/control settings.

---

## 4. Visual design system

### 4.1 Palette starting points

These are initial tokens, not a reason to force every element to use the same colors. Check contrast and refine during visual review.

- `--cream: #FFF8F1`
- `--berry: #A34063`
- `--cocoa: #5C4033`
- Midnight navy/purple range for sky and depth.
- Warm amber for lamps, stars, and focus accents.
- Muted lavender/pink for clouds and secondary surfaces.

### 4.2 Visual hierarchy

- One dominant focal point per scene.
- Clear primary/secondary action hierarchy.
- Typography scale and line length consistent across sections.
- Layered depth through foreground/midground/background, soft glows, shadow, parallax, and carefully paced movement.
- Nostalgic widgets should feel deliberately designed, not random decoration.
- Do not sacrifice text contrast for atmosphere.
- Use whitespace and deliberate composition to avoid visual clutter.

### 4.3 Animation principles

- Motion should communicate state, personality, depth, or narrative—not just decorate.
- Use coherent easing/duration families.
- Avoid simultaneous excessive motion, continuous heavy particles, and scroll hijacking.
- Respect `prefers-reduced-motion`.
- Avoid hover-only interactions; support touch, focus, and keyboard.
- No audio autoplay.
- Provide static/fallback states for unsupported or slow effects.

---

## 5. Official assets and credits

Use official assets first for Pip and project props, then create complementary scenery as needed.

Official asset URLs listed in the brief:
- Pip waving on cloud: https://hax.baby/baby/assets/pip_avatar_cloud.png
- Lullaby Lab music box: https://hax.baby/baby/assets/pip_lullaby_box.png
- Dream nightlight lantern: https://hax.baby/baby/assets/pip_dream_lantern.png
- Pip portrait: https://hax.baby/baby/assets/pip_portrait.png
- Full asset pack: https://hax.baby/baby/assets/track1-pip-asset-pack.zip

### Asset inspection task — not yet complete

Before using them:
- [ ] Download/inspect each file and the asset pack.
- [ ] Record exact filenames, dimensions, transparency, file type, and intended placement.
- [ ] Check that files load correctly in the app.
- [ ] Prefer appropriately sized images; avoid unnecessarily huge payloads.
- [ ] Confirm the pack's actual contents; do not assume it contains additional SVGs or other files.
- [ ] Create complementary CSS/SVG scenery or generated art only where it fills a real gap.
- [ ] Keep Pip canon-consistent.
- [ ] Add visible footer credits for official art, any generated art source if applicable, audio, fonts, and libraries.

---

## 6. Technical architecture — proposed, confirm before installing

The repository is currently reported by the user as empty. This must be rechecked before initializing files. No stack or dependency is considered installed until verified.

### 6.1 Proposed stack

| Concern | Proposal | Guardrail |
|---|---|---|
| App | Next.js App Router + TypeScript | Confirm current project state before scaffold |
| Styling | Custom CSS variables and responsive CSS | Avoid generic template styling |
| Animation | Motion for React, CSS and SVG | Use animation where it improves narrative |
| Character/scenery | Official image assets, SVG and CSS | Fast, consistent, responsive |
| Audio | Web Audio API | User initiated, muted control, graceful fallback |
| Guestbook/counter | Supabase or another simple hosted service | Decide based on setup time, free-tier fit, and verified persistence |
| 3D | Three.js / React Three Fiber only if justified | One scene at most; defer if it threatens deadline |
| Deployment | Vercel or equivalent | Deploy early and verify public URL |

### 6.2 Architectural rules

- Core experience must work without 3D.
- Do not make initial rendering wait for a 3D scene.
- Keep sections and project interactions modular and understandable.
- Shared sound/mute behavior should have one source of truth.
- Keep guestbook and counter service access in a small isolated module.
- Never expose service-role credentials or backend secrets in client code.
- Validate user-submitted guestbook content; add length limits and basic abuse protection.
- Lazy-load expensive visual effects where appropriate.
- Avoid new dependencies unless the feature's value clearly outweighs setup/debugging cost.
- No fake success states, fake shared counts, placeholder buttons, or invented persistence.

### 6.3 Initial proposed component boundaries

Exact filenames are finalized after scaffold output is inspected. Suggested logical boundaries:

- `app` — page shell, metadata, global styles.
- `components/layout` — navigation, footer, global sound control.
- `components/scenes` — Dream Gate, Meet Pip, origin scenes, Dream Room.
- `components/projects` — Lullaby Lab, Nightlight Atelier, Dream Delivery.
- `components/effects` — sparkle trail and optional 3D scene.
- `components/guestbook` — guestbook form and message list.
- `lib/audio` — audio helpers and mute-aware behavior.
- `lib/guestbook` — service/client integration and validation helpers.
- `lib/counter` — honest shared counter integration if implemented.
- `public/assets` — verified official artwork and local project assets.

Do not create every folder blindly; create files as tasks need them.

---

## 7. Work split and collaboration

### 7.1 Team roles

**A — Md Asif (`mdasif-x1`, repository owner)**
- Establish repo baseline and handbook.
- Own initial application setup, design tokens, shared layout, hero, story structure, and integration coordination.
- Verify shared interfaces before handing work to B.
- Review and integrate teammate changes.

**B — `mohdasif-v1`**
- Write access is reported as confirmed; no code contribution is yet verified in this handbook.
- On joining implementation, own a clearly bounded set of independent components/features with minimal overlap.
- Use the shared design/interaction contracts and commit their own actual work under their own GitHub identity.

Exact feature ownership should be assigned after the initial folder structure exists. Do not assign both people the same files without coordination.

### 7.2 Git rules

- Public repository; maintain meaningful sprint commits dated within the hackathon window.
- Commit real work under the identity of the person who did it; never fabricate authorship or split commits artificially.
- Keep `main` deployable where feasible.
- Use a short-lived feature branch for work that can proceed independently; avoid unnecessary PR bureaucracy under the deadline.
- Before a merge: inspect `git status`, review diff, run lint/build, and check that no teammate's work is lost.
- Do not use destructive reset/clean commands without understanding exactly what they remove.
- Commit after coherent milestones, not every tiny keystroke.
- Record significant implementation decisions in this handbook or concise project notes.

### 7.3 Handoff contract

Every delegated feature should state:
- component/file ownership;
- props/events and shared state assumptions;
- assets used;
- expected responsive behavior;
- acceptance tests;
- any dependency needed;
- integration branch/commit.

Avoid shared global CSS edits by both people at the same time. If global design tokens must change, coordinate first.

---

## 8. Time-boxed execution plan

The deadline is strict: **19 October 2026, 17:17 IST**. The schedule is a risk-control plan, not a guarantee. At the time this handbook is prepared, the exact repository state and remaining available hours must be confirmed.

### Phase 0 — verify and agree

- [ ] Confirm exact repository URL and public visibility.
- [ ] Reconfirm repository is empty/current file list before scaffold.
- [ ] Confirm teammate B has accepted invitation and write access (user reports this is confirmed).
- [ ] Inspect official assets and asset pack.
- [ ] Review this handbook; keep only decisions the team agrees to.

### Phase 1 — working foundation (A)

- [ ] Scaffold the app with selected stack.
- [ ] Verify dev server, lint, and production build.
- [ ] Establish palette, typography, spacing, breakpoints, focus styles, and reduced-motion baseline.
- [ ] Build a coherent first screen and shared navigation.
- [ ] Build section skeleton and a real path through the story.
- [ ] Deploy the earliest coherent version; verify it on a phone.

### Phase 2 — complete core experience (A, then B)

- [ ] Character intro and reactions.
- [ ] Three interactive project experiences.
- [ ] Origin-story scenes.
- [ ] Dream Room and Easter egg.
- [ ] Global mute/audio behavior if sound exists.
- [ ] Responsive behavior and accessibility.

### Phase 3 — bonuses in risk-aware order

- [ ] Sparkle trail (small scope, motion-safe).
- [ ] Click sounds + mute (ensure one reliable shared control).
- [ ] Guestbook (only with real persistence and verified error states).
- [ ] Counter odometer (only if count source is honest).
- [ ] Responsive Chaos Mode (intentional layout changes without breaking usability).

Order can change based on implementation difficulty and actual progress. If backend setup becomes a blocker, do not fake the live guestbook or counter. Reassess scope and prioritize a reliable core.

### Phase 4 — selective 3D (stretch)

- [ ] Only begin if core requirements are implemented and deployed.
- [ ] Select one meaningful scene (hero dream diorama or nightlight).
- [ ] Ensure fallback, lazy-loading, mobile performance, and reduced-motion behavior.
- [ ] Stop and remove/defer it if it destabilizes core interactions or delivery.

### Phase 5 — integration and release

- [ ] Integrate both teammates' work.
- [ ] Resolve all merge conflicts deliberately.
- [ ] Run production build and lint.
- [ ] Check browser console for errors.
- [ ] Test every button, form, sound control, project interaction, and Easter egg.
- [ ] Test narrow phone, larger phone/tablet, and desktop widths.
- [ ] Check no horizontal overflow, clipped text, or hover-only essential control.
- [ ] Check keyboard focus, contrast, reduced motion, and audio behavior.
- [ ] Verify guestbook persistence and service errors if implemented.
- [ ] Verify deployment URL from a fresh/private browser session.
- [ ] Verify repository is public and commit history is visible.
- [ ] Prepare short build story and visible credits.
- [ ] Submit before 19 Oct 2026, 17:17 IST; leave time for portal and deployment problems.

### Deadline rule

**Working and polished Tier 1/2 beats broken Tier 3.** When time becomes tight, defer 3D first, then any bonus that is not yet stable. Never sacrifice the public deploy, required content, core interactions, mobile layout, or submission.

---

## 9. Acceptance checklist

### Core experience
- [ ] Pip canon and personality are clearly communicated.
- [ ] At least three inventions are present and genuinely interactive.
- [ ] Origin story uses scenes/scroll/animation and concise text.
- [ ] At least one meaningful visitor-reactive interaction works.
- [ ] Sound has a visible working mute control if present.
- [ ] One hidden Easter egg works.
- [ ] Phone and tablet layouts are smooth.
- [ ] Navigation is discoverable even in exploratory scenes.

### Bonus features
- [ ] Guestbook persists across refreshes and visitors, with validation and errors.
- [ ] Sparkle trail works without harming touch/reduced-motion users.
- [ ] Odometer uses a defensible count source.
- [ ] Click sounds are deliberate and mute works everywhere.
- [ ] Chaos Mode changes composition intentionally while preserving usability.

### Quality
- [ ] No dead buttons or links.
- [ ] No avoidable console errors.
- [ ] Production build succeeds.
- [ ] Reasonable initial load and image sizes.
- [ ] Reduced motion and keyboard navigation considered.
- [ ] No exposed secrets.
- [ ] No horizontal overflow on target viewports.
- [ ] Credits visible.

### Submission
- [ ] Public deployed website URL.
- [ ] Public GitHub repository with genuine Oct 17–19 sprint commits.
- [ ] Short story behind the build.
- [ ] Credits for art, audio, and libraries.
- [ ] Submission sent before the official deadline.

---

## 10. Submission story — outline only

Do not submit this unchanged; update it to match what was genuinely built.

- **Idea:** Pip's Midnight Nursery is an interactive dream workshop/portfolio for Pip, the Junior Dream Engineer.
- **World:** a moonlit nursery where dreams, lullabies, nightlights, and deliveries become playful experiences.
- **Proudest features:** name the features that actually work at submission time.
- **Craft decisions:** explain the illustrated early-web style, animation, responsive design, sound/mute, and how performance/accessibility were handled.
- **Credits:** official haX.baby assets plus every additional artwork/audio/font/library source used.

Do not claim an unbuilt feature, bonus quest, performance score, or technology that is not present in the submitted code.

---

## 11. Progress log

Use these states consistently:

- `NOT STARTED` — no work begun.
- `IN PROGRESS` — work has begun but acceptance criteria are not met.
- `BLOCKED` — a specific dependency/problem prevents progress.
- `DONE — VERIFIED` — acceptance criteria passed with evidence (command output, browser check, or service test).
- `DEFERRED` — deliberately removed from current scope to protect delivery.

| Work item | Status | Evidence / notes |
|---|---|---|
| Repository reported empty | User-reported; needs URL/file-list confirmation in implementation session | Do not assume exact repo slug without URL |
| Teammate B write access | User-reported confirmed | Verify only if access issue arises |
| Handbook finalized | In progress until reviewed/committed by team | This file is the planning baseline |
| Official assets inspected | Not started / not verified | Inspect before relying on pack contents |
| Application scaffold | Not started / not verified | No stack assumed installed |
| First deployment | Not started / not verified | Deploy early |
| Core features | Not started / not verified | Track individual acceptance criteria |
| Bonus quests | Not started / not verified | Award no points without tests |
| Final QA/submission | Not started / not verified | Deadline 19 Oct 2026, 17:17 IST |

---

## 12. Decision log

### Confirmed
- Track 1: Pip the Skull Baby.
- Name: Pip's Midnight Nursery.
- Illustrated storybook + restrained retro-web art direction.
- Layered 2D with selective 3D only if time allows.
- Scroll-driven narrative plus clickable exploration.
- Projects: Lullaby Lab, Nightlight Atelier/Collection, Dream Delivery.
- Target all five bonus quests after core quality is secured.
- Handbook is the shared source of truth.
- Team of two; B's write access is reported confirmed.
- Genuine per-person commits and public sprint history are required.

### Proposed, pending implementation confirmation
- Next.js App Router + TypeScript.
- Motion for React, SVG/CSS scenery, Web Audio API.
- Supabase or comparable hosted backend for guestbook/counter.
- Vercel deployment.
- Exact component/file structure and ownership.
- Exact visual layout after asset inspection.

### Change-control rule
When new ideas emerge, evaluate: (1) judging value, (2) visitor experience, (3) implementation cost, (4) mobile/accessibility/performance impact, and (5) deadline risk. Update this handbook before changing agreed architecture or removing a core requirement.

---

## 13. Immediate next action

1. Confirm the exact repository URL one more time.
2. Inspect the official assets and asset pack.
3. Add this handbook as `IMPLEMENTATION_HANDBOOK.md` to the repository and commit it as a genuine planning milestone.
4. Only then scaffold the app, after checking the repository state and confirming the stack.

**No code, assets, deployment, or feature should be marked complete until it has actually been created and verified.**
