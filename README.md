# Pip's Midnight Nursery ✦ ☾

> *“I build the dreams you fall asleep inside.”*  
> — **Pip, Junior Dream Engineer**

An interactive, character-driven bedtime dream world created for the **haX.baby “Baby's First Website” Hackathon (Track 1: Pip the Skull Baby)**.

**🌐 Live Demo:** [https://pip-midnight-nursery-xi.vercel.app/](https://pip-midnight-nursery-xi.vercel.app/)<br />
**🛠️ Engineering & Development:** **Pyrrhic Commit** (`mdasif-x1` & `mohdasif-v1`)<br />
**🏆 Hackathon Track:** [haX.baby](https://hax.baby/) — Track 1: Pip the Skull Baby

<p align="center">
  <img src="public/assets/pip_avatar_cloud.png" alt="Pip the Skull Baby floating on a bedtime dream cloud" width="300" />
</p>

---

## ✦ Table of Contents

- [Overview & Pitch](#-overview--pitch)
- [Live Demo & Hackathon Attribution](#-live-demo--hackathon-attribution)
- [Character Canon](#-character-canon)
- [Key Interactive Features](#-key-interactive-features)
- [Design Aesthetics & Color System](#-design-aesthetics--color-system)
- [Tech Stack](#-tech-stack)
- [Local Setup & Verification](#-local-setup--verification)
- [Project Architecture](#-project-architecture)
- [Asset Attribution & Licensing](#-asset-attribution--licensing)
- [Documentation Index](#-documentation-index)

---

## ✦ Overview & Pitch

Step into a dreamy, pastel fairytale nursery high above the chimney tops where Pip—a gentle baby with a starry nightcap, pink bow, and warm amber-lit eye sockets—tunes bedtime lullabies, adjusts moonlight lanterns, dispatches dream parcels, and records field notes for restless dreamers across Cloud Sector 7.

Built without generic AI boilerplate or heavy 3D frameworks, the experience uses authentic early-web personality, handcrafted responsive SVG art, tactile Web Audio chimes, and rich storybook typography to make visitors feel immersed in Pip's magical world.

---

## ✦ Live Demo & Hackathon Attribution

- **Live Deployment:** [https://pip-midnight-nursery-xi.vercel.app/](https://pip-midnight-nursery-xi.vercel.app/)
- **Hackathon:** [haX.baby](https://hax.baby/) — “Baby's First Website”
- **Track:** Track 1 (Pip the Skull Baby)
- **Challenge Brief:** [https://hax.baby/baby-problem](https://hax.baby/baby-problem)
- **Team Credit:** **Pyrrhic Commit**
  - Developer: `mdasif-x1`
  - Collaborator: `mohdasif-v1`

---

## ✦ Character Canon

Pip's character design adheres strictly to the canonical haX.baby Track 1 specifications:

- **Identity:** Pip, Junior Dream Engineer at Midnight Nursery (Cloud Sector 7 · Shift: 00:00–05:00).
- **Visuals:** Smooth, rounded ivory skull face, soft eye sockets with cozy glowing hearthlight pinpoints (2200K), a tiny crooked smile, and a starry blue bedtime nightcap tied with a pastel pink bow.
- **Personality:** Sleepy, gentle, deeply curious, clumsy, giggles easily, loves tuning chimes.
- **Canon Guardrail:** **100% gentle, 0% horror.** Pip must never appear scary, gory, or sinister. Pip is a comforting nighttime guardian for children.

---

## ✦ Key Interactive Features

### 1. The Dream Gate & Interactive Bedtime Pip
- Cinematic peach, blush-pink, and lavender dawn sky backdrop (`hero_cinematic_sky.jpg`) with golden sunbeams.
- **Interactive Character Diorama:** Clicking or tapping Pip triggers a nightcap wiggle, stardust burst (`✦ ✧ ⋆`), sweet starlight chime (A5 880Hz), and cycling in-character bedtime whispers (*"Almost asleep... thank you for visiting! ✦"*, *"Tuning starlight lullabies for you... ☾"*).
- **Starlight Flight Corridor & Wayfinder:** Persistent central flight path with coordinate beacons linking every landmark station from Station I (00:00) to Station VI (05:00).

### 2. Meet Pip (The Field Journal)
- Two-page vintage storybook spread on warm nursery parchment.
- **Left Page:** Official studio portrait plate (`pip_portrait.png`) framed with handwritten field annotations.
- **Right Page:** Character lore, gentle canon statement, and an archival nursery wax-seal badge.

### 3. Exhibit 01 — Lullaby Lab (Project A)
- Curated music-box workbench powered by native **Web Audio API** oscillators (zero audio dependencies).
- **3 Selectable Lullaby Cylinders:**
  - *Cylinder I: Starlight Chime* (Dreamy celestial descent)
  - *Cylinder II: Velvet Slumber* (Reassuring cradle chimes)
  - *Cylinder III: Cloud Waltz* (Whimsical rooftop music box)
- Animated brass winding spring indicator, active soundwave ribbon, floating harmonic particles, and global mute integration. Zero unexpected autoplay.

### 4. Exhibit 02 — Nightlight Atelier (Project B)
- Miniature bedside window alcove showcasing the handcrafted crescent moon lantern (`pip_dream_lantern.png`).
- **3 Atmospheric Lighting Moods:** *Warm Amber* (2200K), *Sleepy Rose* (Twilight blush), and *Moonlit Blue* (6500K).
- **3 Responsive Dimmer Levels:** *Soft (40%)*, *Bedtime (75%)*, and *Luminous (100%)* scaling ambient light pools and background contrast dynamically.

### 5. Project C — Dream Delivery (Fairytale Route Dispatch)
- Miniature fairytale village landscape with pastel rooftops, smoking chimneys, and a wicker delivery glider (`🧺 ✦`).
- **3 Interactive Waypoint Destinations:** *Whispering Willow Grove*, *Cloud 9 Observatory*, and *Astraea Nebula*.
- Real-time animated stardust routes and Sector 7 registry dispatch docket.

### 6. Origin Story (4-Chapter Bedtime Storybook)
- Illustrated storybook narrative presented in 4 concise chapters:
  1. *The Falling Star*
  2. *The Clockwork Moon*
  3. *The Star-Weaver's Loom*
  4. *The Midnight Nursery*
- Illustrated with custom SVG story vignettes and smooth Previous/Next chapter navigation with keyboard arrow support.

### 7. Inside Pip's Dream Room (Interactive Diorama & Secret Easter Egg)
- Illustrated bedtime chamber with honey timber floorboards, cloud hammock, and drafting desk.
- **5 Glowing Hotspots (`✦`):**
  - *Window Sky:* Cycles starry constellations, shooting meteors, and night clouds.
  - *Star-Oil Lamp:* Inspects Pip's amber reading lamp.
  - *Cloud Hammock:* Explores the spun-silk bedtime cradle.
  - *Drafting Desk:* Inspects active blueprints and field notes.
  - *Secret Floorboard:* Discoverable Easter egg playing a pentatonic chime and revealing the archival *"Diploma of the Belfry"* certificate.

### 8. Bedtime Guestbook (Station VI)
- Persistent bedtime wish guestbook allowing visitors to leave a note or wish under the nursery stars.
- Client-side storage via `localStorage` with safe error-handling and data recovery.
- Live character counter, validation, and bedtime wish stamps.

### 9. Tactile Sound & Universal Accessibility
- **Zero Autoplay:** All sound synthesis is strictly user-initiated.
- **Universal Sound Switch:** Top-right navigation toggle (`Chimes: On` / `Chimes: Quiet`) controlling all chimes and tactile taps.
- **Tactile Wooden Taps (`playTick()`):** Interactive controls trigger soft ~22ms wooden music-box tine taps (D6 → D5).
- Full `prefers-reduced-motion` compliance across all animations and transitions.

---

## ✦ Design Aesthetics & Color System

Designed with a rich fairytale palette reminiscent of illustrated storybooks and vintage parchment:

| Token | Hex Value | Role & Usage |
|---|:---:|---|
| **Nursery Paper** | `#FFF8F1` | Primary canvas & exhibit card backgrounds |
| **Warm Parchment** | `#F2E6D7` | Storybook pages, workbenches, footer endpaper |
| **Soft Parchment** | `#FAF4EB` | Secondary containers, inputs, tab pills |
| **Dusky Berry** | `#77384D` | Primary action buttons, active states, key headings |
| **Starlight Gold** | `#D7A95B` | Tiny stars, celestial highlights, winding key accents |
| **Ink Brown** | `#382B2A` | Primary typography, borders, storybook line work |
| **Sleepy Rose** | `#DDA6B0` | Twilight blush accents and decorative flourishes |
| **Moonlit Blue** | `#9BBBD4` | Fairytale sky, rooftops, atmospheric moonlight |
| **Midnight Plum** | `#251827` | Contained strictly within window apertures |

---

## ✦ Tech Stack

- **Framework:** [Next.js 15.1](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS Custom Properties & CSS Modules (`app/globals.css`, `styles/dream-visuals.module.css`)
- **Audio:** Native Web Audio API (zero external audio libraries)
- **Linting:** ESLint 9 (`eslint-config-next`)
- **Deployment:** Vercel

---

## ✦ Local Setup & Verification

### Prerequisites
- Node.js `>= 18.18.0` or `>= 20.0.0`
- npm `>= 9.0.0`

### 1. Clone & Install
```bash
git clone https://github.com/mdasif-x1/pip-midnight-nursery.git
cd pip-midnight-nursery
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Quality & Validation Suite
```bash
# Verify git formatting and whitespace
git diff --check

# Run ESLint check
npm run lint

# Verify TypeScript type correctness
npx tsc --noEmit

# Run production build
npm run build
```

---

## ✦ Project Architecture

```
pip-midnight-nursery/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Core design tokens, typography, and base layout
│   ├── layout.tsx               # Root layout, metadata, and SoundProvider wrapper
│   └── page.tsx                 # Main experience assembling all dream-world stations
├── components/
│   ├── CloudGatewayDivider.tsx  # Organic cloud transition below hero
│   ├── DreamCorridor.tsx        # Persistent flight corridor beacons & receivers
│   ├── DreamDelivery.tsx        # Project C: Fairytale route village & delivery glider
│   ├── DreamGuestbook.tsx       # Station VI: Bedtime wish guestbook with local persistence
│   ├── DreamRoom.tsx            # Station V: Interactive diorama with 5 hotspots & Easter egg
│   ├── HeroGatewayActions.tsx   # Hero call-to-action buttons
│   ├── HeroStardust.tsx         # Ambient floating stardust canvas
│   ├── InteractivePip.tsx       # Interactive bedtime Pip character diorama
│   ├── LullabyLab.tsx           # Exhibit 01: Music-box workbench with Web Audio synth
│   ├── NightlightAtelier.tsx    # Exhibit 02: Window alcove with reactive mood lighting
│   ├── NurseryWayfinder.tsx     # Flight route landmark navigator
│   ├── OriginStory.tsx          # 4-chapter bedtime storybook with custom SVG vignettes
│   ├── PipCloudVoyage.tsx       # Smooth cloud-sailing cinematic voyage
│   ├── SoundToggle.tsx          # Accessible universal mute/unmute navigation toggle
│   └── SparkleTrail.tsx         # Lightweight starlight pointer sparkle trail
├── lib/
│   └── SoundContext.tsx         # React context managing global audio mute state
├── public/
│   └── assets/
│       ├── ASSET_INVENTORY.md   # Official asset register & verification log
│       ├── pip_avatar_cloud.png # Official hero Pip artwork (896x1090)
│       ├── pip_portrait.png     # Official character portrait (682x1024)
│       ├── pip_lullaby_box.png  # Official music box render (1024x924)
│       ├── pip_dream_lantern.png# Official dream lantern render (1024x914)
│       └── hero_cinematic_sky.jpg# Atmospheric sky backdrop (1280x720)
├── styles/
│   └── dream-visuals.module.css # Modular dream world, corridor, & exhibit styling
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✦ Asset Attribution & Licensing

All character artwork and official assets are property of the **haX.baby** hackathon organizers and are licensed for use in Track 1 entries.

- `pip_avatar_cloud.png` (haX.baby Track 1)
- `pip_portrait.png` (haX.baby Track 1)
- `pip_lullaby_box.png` (haX.baby Track 1)
- `pip_dream_lantern.png` (haX.baby Track 1)

See [`public/assets/ASSET_INVENTORY.md`](public/assets/ASSET_INVENTORY.md) for full hash verification, dimension audit, and extracted license terms.

All environmental scenery, SVG vignettes, interactive diorama props, and sound synthesis are original implementations designed by **Pyrrhic Commit** specifically for Pip's storybook world.

---

## ✦ Documentation Index

- [`public/assets/ASSET_INVENTORY.md`](public/assets/ASSET_INVENTORY.md) — Official asset integrity verification registry.
- [`IMPLEMENTATION_HANDBOOK.md`](IMPLEMENTATION_HANDBOOK.md) — Immutable authoritative hackathon handbook.
- [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) — Project roadmap, phase history, and feature matrix.
- [`ANTIGRAVITY_WORKFLOW.md`](ANTIGRAVITY_WORKFLOW.md) — Engineering rules and governance guide.
