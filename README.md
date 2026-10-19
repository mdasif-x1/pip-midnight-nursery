# Pip's Midnight Nursery ✦ ☾

> *“I build the dreams you fall asleep inside.”*  
> — **Pip, Junior Dream Engineer**

An interactive, character-driven storybook website created for the **haX.baby “Baby's First Website” Hackathon (Track 1: Pip the Skull Baby)**.

Step into a dreamy, pastel fairytale nursery high above the chimney tops where Pip—a gentle baby with a starry nightcap, pink bow, and warm amber-lit eye sockets—tunes bedtime lullabies, adjusts moonlight lanterns, dispatches dream parcels, and records field notes for restless dreamers across Cloud Sector 7.

---

## ✦ Table of Contents

- [Hackathon Purpose & Track 1 Attribution](#-hackathon-purpose--track-1-attribution)
- [Character Canon & Lore](#-character-canon--lore)
- [Main Experiences & Interactive Features](#-main-experiences--interactive-features)
- [Design System & Art Direction](#-design-system--art-direction)
- [Tech Stack & Prerequisites](#-tech-stack--prerequisites)
- [Local Setup & Development](#-local-setup--development)
- [Verification & Quality Commands](#-verification--quality-commands)
- [Project Structure](#-project-structure)
- [Official Asset Attribution](#-official-asset-attribution)
- [Documentation Reference Links](#-documentation-reference-links)
- [Collaborator Handoff & Safe Git Protocol](#-collaborator-handoff--safe-git-protocol)
- [Known Limitations & Manual Testing Guide](#-known-limitations--manual-testing-guide)

---

## ✦ Hackathon Purpose & Track 1 Attribution

- **Hackathon:** [haX.baby](https://hax.baby/) — “Baby's First Website”
- **Track:** Track 1 — Pip the Skull Baby
- **Challenge Brief:** [https://hax.baby/baby-problem](https://hax.baby/baby-problem)
- **Event Hub:** [https://hax.baby/first-website](https://hax.baby/first-website)
- **Engineering & Development:** Pyrrhic Commit
- **Team Collaboration:** `mdasif-x1` & `mohdasif-v1` (Team Pyrrhic Commit)
- **Core Principle:** An authentic, whimsical storybook world celebrating early-web personality, handcrafted detail, tactile sound, and zero dark patterns.

---

## ✦ Character Canon & Lore

Pip's character design adheres strictly to the canonical haX.baby Track 1 specifications:

- **Identity:** Pip, Junior Dream Engineer at Midnight Nursery.
- **Visuals:** Smooth, rounded ivory skull face, soft eye sockets with cozy glowing hearthlight pinpoints (2200K), a tiny crooked smile, and a starry blue bedtime nightcap tied with a pastel pink bow.
- **Personality:** Sleepy, gentle, deeply curious, clumsy, giggles easily, loves tuning chimes.
- **Canon Guardrail:** **100% gentle, 0% horror.** Pip must never appear scary, gory, or sinister. Pip is a comforting nighttime guardian for children.

---

## ✦ Main Experiences & Interactive Features

1. **Floating Frosted Celestial Navigation (`site-header`)**
   - Translucent frosted-paper navigation bar with direct anchor links.
   - Universal **Sound Toggle** (`components/SoundToggle.tsx`) communicating audio state (`Chimes: On` / `Chimes: Quiet`) with full ARIA accessibility and minimum 44px touch targets. Completely silent when muting; sweet ascending chime when unmuting.
   - **Tactile Sound Feedback (`playTick()`):** Deliberate UI interactions (swapping lullaby cylinders, toggling playback, switching lantern moods, adjusting dimmers, choosing flight waypoints, flipping storybook chapters, exploring room hotspots) trigger a soft, non-fatiguing ~22ms wooden music-box tine tap (D6 → D5). Throttled to 50ms, immediate mute sync, zero autoplay.
   - Starlight Sparkle Pointer Trail (`components/SparkleTrail.tsx`) following mouse movement (gracefully disabled on touch devices and `prefers-reduced-motion`).

2. **The Dream Gate (Hero Entrance & Interactive Bedtime Pip)**
   - Cinematic dreamscape background (`public/assets/hero_cinematic_sky.jpg`) featuring billowing peach, blush-pink, and lavender clouds, radiant golden sunbeams, and distant fairytale castle spires.
   - Frosted storybook plate (`rgba(255, 248, 241, 0.88)` with `backdrop-filter: blur(14px)`) framing the title and tagline for maximum readability.
   - **Interactive Bedtime Pip:** Clicking or tapping the hero Pip triggers a gentle nightcap wiggle, stardust burst (`✦ ✧ ⋆`), sweet starlight chime (A5 880Hz), and a temporary in-character speech bubble cycling gentle bedtime whispers (*"Almost asleep... thank you for visiting! ✦"*, *"Tuning starlight lullabies for you... ☾"*). Fully keyboard accessible (`Enter`/`Space`) with visible focus ring and reduced-motion fallback.
   - Primary calls to action: *Explore Pip's Inventions →* (Dusky Berry) and *✦ Enter Dream Room* (Warm Parchment).
   - **Cross-Section Atmospheric Continuity System:** 6 non-identical environmental transitions connecting every section:
     - *Hero → Meet Pip:* Layered organic cumulus cloud wave.
     - *Meet Pip → Inventions:* Storybook deckle edge / torn parchment shelf.
     - *Inventions → Dream Delivery:* Subtle twilight village skyline with sleeping rooftops and chimney silhouettes.
     - *Inventions → Origin Story:* Arched fairytale book spine with rose silk bookmark ribbon and gold leaf star.
     - *Origin Story → Dream Room:* Honey timber nursery floorboard planks with brass nail heads.
     - *Dream Room → Footer:* Calm storybook endpaper dusk border with gold star dashed filigree.

3. **Meet Pip (The Inventor's Field Journal)**
   - Open two-page vintage storybook spread on warm parchment.
   - **Left Page:** Official studio portrait plate (`pip_portrait.png`) with Pip's handwritten field notes.
   - **Right Page:** Character lore, gentle canon statement, 3 in-world anchors, and an archival nursery wax-seal stamp.

4. **Lullaby Lab (Invention 1 — Music-Box Workbench)**
   - Interactive music-box workbench with golden winding key motif and tactile cylinders.
   - Synthesizes 3 distinct pentatonic melodies (*Moonbeam Berceuse*, *Starlight Lullaby*, *Cloud Drift*) using native Web Audio API oscillators.
   - Responsive audio waveform visualizer bars, user-triggered play/stop, and synchronization with global mute state. Zero unexpected autoplay.

5. **Nightlight Atelier (Invention 2 — Cozy Window Alcove)**
   - Charming nursery windowsill alcove showcasing the dream lantern (`pip_dream_lantern.png`).
   - Interactive mood controls (*Warm Amber #D7A95B*, *Sleepy Rose #DDA6B0*, *Moonlit Blue #9BBBD4*).
   - Three dimming levels (*Soft 40%*, *Bedtime 75%*, *Luminous 100%*), dynamically illuminating the room atmosphere.

6. **Dream Delivery (Invention 3 — Fairytale Route Dispatch)**
   - Miniature fairytale village landscape featuring pastel rooftops, smoking chimneys, glowing attic windows, and a wicker delivery glider (`🧺 ✦`).
   - 3 interactive destinations (*Whispering Willow Grove*, *Cloud 9 Observatory*, *Astraea Nebula*), updating animated stardust flight paths.
   - Fictional in-world registry lore: *"Official Nursery Ledger: 1,204 Parcels Cleared (Sector 7 Registry)"*.

7. **Origin Story (4-Chapter Bedtime Storybook)**
   - Bedtime storybook narrative told in 4 chapters (<150 words per scene):
     - *Chapter 1: The Falling Star*
     - *Chapter 2: The Clockwork Moon*
     - *Chapter 3: The Star-Weaver's Loom*
     - *Chapter 4: The Midnight Nursery*
   - Illustrated with 4 custom inline SVG vignettes.
   - Interactive Previous/Next buttons and keyboard arrow key navigation.

8. **Inside Pip's Dream Room (Interactive Diorama & Secret Easter Egg)**
   - Softly illustrated nursery interior with striped wallpaper, honey timber floorboards, cloud hammock, and drafting desk.
   - 5 organic glowing star hotspots (`✦`) with pulsing halos:
     - *Window Sky:* Cycles between constellations, shooting meteors, and clouds.
     - *Star-Oil Lamp:* Inspects Pip's 2200K amber reading lamp.
     - *Cloud Hammock:* Explores the spun-silk bedtime cradle.
     - *Dream Drafting Desk:* Inspects active blueprints and field notes.
     - *Secret Floorboard:* Discoverable Easter egg playing a pentatonic chime and revealing the archival *"Diploma of the Belfry"* certificate.

9. **The Final Storybook Page (Footer Endpaper)**
   - Warm parchment endpaper with bedtime closing sign-off:
     > *"The stars are on duty, the dream delivery route is cleared, and the nursery nightlights are lit. Close your eyes; Pip will take care of the rest."*  
     > **Pip ✧ Junior Dream Engineer**
   - Full room navigation directory, haX.baby Track 1 attribution, and a "Return to Dream Gate" smooth-scroll button.

---

## ✦ Design System & Art Direction

- **Creative Direction Balance:** 70% cinematic animated-dream atmosphere + 30% illustrated bedtime-story charm.
- **Nursery Paper (`#FFF8F1`):** Primary page canvas & light card interiors.
- **Warm Parchment (`#F2E6D7`):** Field journal pages, workbenches, footer endpaper.
- **Soft Parchment (`#FAF4EB`):** Secondary containers, inputs, tab pills.
- **Sleepy Rose (`#DDA6B0`):** Twilight blush accents, decorative flourishes.
- **Mist Blue (`#C6D9E8`):** Fairytale sky, rooftops, atmospheric mist.
- **Soft Lavender (`#E9D9E8`):** Dream clouds, section transition waves.
- **Dusky Berry (`#77384D`):** Primary action buttons, active states (accessible contrast).
- **Starlight Gold (`#D7A95B`):** Tiny stars, celestial highlights, winding key.
- **Ink Brown (`#382B2A`):** Primary typography, borders, storybook line work.
- **Midnight Plum (`#251827`):** Strictly contained within bounded nighttime apertures (window glass, delivery sky frame). Never used as an entire section background.

### Typography System
- **Headings (Display/Serif):** Playfair Display, Georgia, serif
- **Body Content (Sans-Serif):** Inter, -apple-system, sans-serif
- **UI & Interactive Controls:** Nunito, 'Inter', -apple-system, sans-serif
- **Metadata & Technical Registries:** ui-monospace, SFMono-Regular, monospace

---

## ✦ Tech Stack & Prerequisites

- **Framework:** [Next.js 15.1](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS Custom Properties (`app/globals.css`)
- **Audio:** Native Web Audio API (zero external audio libraries)
- **Linting:** ESLint 9 (`eslint-config-next`)
- **Prerequisites:** Node.js `>= 18.18.0` or `>= 20.0.0`, npm `>= 9.0.0`

---

## ✦ Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdasif-x1/pip-midnight-nursery.git
   cd pip-midnight-nursery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Verification & Quality Commands

Run checks sequentially using the actual scripts configured in `package.json`:

```bash
# 1. Check for git whitespace/merge conflicts
git diff --check

# 2. Run ESLint code quality audit
npm run lint

# 3. Verify TypeScript type safety
npx tsc --noEmit

# 4. Generate optimized production build
npm run build

# 5. Start production server locally
npm run start
```

---

## ✦ Project Structure

```
pip-midnight-nursery/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens, responsive typography, and component styles
│   ├── layout.tsx           # Root HTML layout, font setup, SoundProvider wrapper
│   └── page.tsx             # Main page: Dream Gate, Meet Pip, Inventions, Story, Quarters, Footer
├── components/
│   ├── DreamDelivery.tsx    # Invention 3: Fairytale route village & delivery glider
│   ├── DreamRoom.tsx        # Interactive diorama with 5 hotspots & Easter egg certificate
│   ├── LullabyLab.tsx       # Invention 1: Music-box workbench with Web Audio synth
│   ├── NightlightAtelier.tsx# Invention 2: Window alcove with reactive mood lighting
│   ├── OriginStory.tsx      # 4-chapter bedtime storybook with custom SVG vignettes
│   ├── SoundToggle.tsx      # Accessible universal mute/unmute navigation toggle
│   └── SparkleTrail.tsx     # Lightweight starlight pointer sparkle trail
├── lib/
│   └── SoundContext.tsx     # React context managing global sound mute state
├── public/
│   └── assets/
│       ├── ASSET_INVENTORY.md         # Comprehensive verified asset register
│       ├── OFFICIAL_ASSET_README.txt  # Extracted terms and license from official pack
│       ├── pip_avatar_cloud.png       # Official hero artwork (896x1090)
│       ├── pip_portrait.png           # Official character portrait (682x1024)
│       ├── pip_lullaby_box.png        # Official music box render (1024x924)
│       ├── pip_dream_lantern.png      # Official dream lantern render (1024x914)
│       └── track1-pip-asset-pack.zip  # Intact official asset archive
├── ANTIGRAVITY_WORKFLOW.md                    # Engineering governance rules
├── IMPLEMENTATION_HANDBOOK.md                 # Immutable authoritative project handbook
├── Pips_Midnight_Nursery_Working_Context.md   # Living context & art-direction guide
├── PROJECT_CONTEXT.md                         # Project roadmap and feature matrix
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✦ Official Asset Attribution

All character artwork and official assets are property of the **haX.baby** hackathon organizers and are licensed for use in Track 1 entries.

- `pip_avatar_cloud.png` (haX.baby Track 1)
- `pip_portrait.png` (haX.baby Track 1)
- `pip_lullaby_box.png` (haX.baby Track 1)
- `pip_dream_lantern.png` (haX.baby Track 1)

All environmental scenery, SVG vignettes, interactive diorama props, and sound synthesis are original implementations designed specifically for Pip's storybook world.

---

## ✦ Documentation Reference Links

- [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) — Immutable authoritative single source of truth.
- [Pips_Midnight_Nursery_Working_Context.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/Pips_Midnight_Nursery_Working_Context.md) — Living context and complete visual design system.
- [PROJECT_CONTEXT.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/PROJECT_CONTEXT.md) — Hackathon roadmap and feature status matrix.
- [ANTIGRAVITY_WORKFLOW.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/ANTIGRAVITY_WORKFLOW.md) — Engineering governance and safety rules.
- [public/assets/ASSET_INVENTORY.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/ASSET_INVENTORY.md) — Official asset integrity verification registry.

---

## ✦ Collaborator Handoff & Safe Git Protocol

For team members (`mdasif-x1` and `mohdasif-v1`) continuing development:

1. **Verify Working Directory:**
   - Always run git from the repository root: `C:\Users\MD ASIF\Projects\pip-midnight-nursery`.
   - **Never** run git commands from the parent directory `C:\Users\MD ASIF`, which contains an unrelated parent git repository.
2. **Immutable Handbook Rule:**
   - Never edit, reformat, rename, or overwrite `IMPLEMENTATION_HANDBOOK.md`.
3. **Pulling Remote Updates Safely:**
   ```bash
   git status --short
   git fetch origin
   git pull --rebase origin main
   ```
4. **Pre-Commit Verification:**
   Always run `git diff --check`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` before committing or pushing.

---

## ✦ Known Limitations & Manual Testing Guide

### Automated Sandbox Limitation
In the local development sandbox, automated browser subagent testing via Playwright encountered network restrictions when attempting to download external browser binaries (`404 Not Found` from `azureedge.net`). Direct visual browser screenshots were therefore not captured via automated scripts.

### Manual Verification Checklist
When running locally (`npm run dev` at `http://localhost:3000`):
1. **Sound Toggle:** Click the top-right button. Confirm toggle switches between `Chimes: Quiet` and `Chimes: On`.
2. **Lullaby Lab:** Click a melody card, then click `Play Lullaby Chime`. Confirm pentatonic audio plays and visualizer waves animate. Confirm global mute stops sound.
3. **Nightlight Atelier:** Select `Sleepy Rose` and `Moonlit Blue` moods; test `40%`, `75%`, and `100%` dimmer levels to verify ambient illumination changes.
4. **Dream Delivery:** Click all 3 destination tabs to confirm flight path updates and waypoint selection.
5. **Origin Story:** Use the `Next Chapter` button and keyboard Left/Right arrows to cycle through all 4 chapters.
6. **Dream Room:** Click all 5 hotspots; click the loose floorboard in the lower left to reveal the secret certificate.
7. **Footer:** Click `Return to Dream Gate` to confirm smooth scrolling to the top.
8. **Mobile Viewport:** Open DevTools at 390px width and verify zero horizontal scrolling.
