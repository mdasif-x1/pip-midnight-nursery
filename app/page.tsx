import Image from "next/image";
import InteractivePip from "@/components/InteractivePip";
import LullabyLab from "@/components/LullabyLab";
import NightlightAtelier from "@/components/NightlightAtelier";
import DreamDelivery from "@/components/DreamDelivery";
import OriginStory from "@/components/OriginStory";
import DreamRoom from "@/components/DreamRoom";
import SoundToggle from "@/components/SoundToggle";
import SparkleTrail from "@/components/SparkleTrail";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      {/* Whimsical Starlight Pointer Sparkle Trail (Early-Web Soul Side Quest) */}
      <SparkleTrail />

      {/* Floating Frosted Celestial Navigation */}
      <header className="site-header">
        <div className="site-container">
          <nav className="nav-container" aria-label="Nursery Navigation">
            <a href="#dream-gate" className="brand-link">
              <span className="brand-icon-wrapper" aria-hidden="true">✦</span>
              <span className="brand-title">Pip&apos;s Midnight Nursery</span>
            </a>

            <div className="nav-center-strip" aria-hidden="true">
              <span className="nav-shift-pill">✦ Sector 7 · Shift: 00:00–05:00</span>
            </div>

            <ul className="nav-links">
              <li>
                <a href="#dream-gate" className="nav-item-link">
                  Dream Gate
                </a>
              </li>
              <li>
                <a href="#meet-pip" className="nav-item-link">
                  Field Journal
                </a>
              </li>
              <li>
                <a href="#inventions" className="nav-item-link">
                  Inventions
                </a>
              </li>
              <li>
                <a href="#origin-story" className="nav-item-link">
                  Storybook
                </a>
              </li>
              <li>
                <a href="#dream-room" className="nav-item-link">
                  Dream Room
                </a>
              </li>
            </ul>

            <SoundToggle />
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content">
        {/* =================================================================
            1. THE DREAM GATE — PASTEL ENTRANCE TO PIP'S NURSERY
            ================================================================= */}
        <section
          id="dream-gate"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          {/* Soft Pastel Horizon Glow & Gentle Constellations */}
          <div className="hero-atmosphere-backdrop" aria-hidden="true" />

          {/* Gentle Glowing Crescent Moon in Soft Twilight Mist */}
          <div className="hero-crescent-moon" aria-hidden="true">
            <svg
              className="moon-svg"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9EE" />
                  <stop offset="70%" stopColor="#F2C879" />
                  <stop offset="100%" stopColor="#D7A95B" />
                </radialGradient>
              </defs>
              <path
                d="M 66 18 A 38 38 0 0 0 66 82 A 32 32 0 0 1 66 18 Z"
                fill="url(#moonGlow)"
              />
              <circle cx="82" cy="22" r="3" fill="#FFF8F1" opacity="0.9" />
              <circle cx="28" cy="74" r="2.5" fill="#D7A95B" opacity="0.8" />
            </svg>
          </div>

          <div className="site-container">
            <div className="hero-grid">
              {/* Text & Narrative Orientation */}
              <div className="hero-content">
                <div className="hero-eyebrow-wrapper">
                  <span className="hero-eyebrow-pill">
                    <span aria-hidden="true">✦</span> Junior Dream Engineer · Cloud Sector 7
                  </span>
                </div>

                <div className="hero-storybook-plate">
                  <h1 id="hero-title" className="hero-title">
                    <span className="hero-welcome-script">Welcome to</span>
                    <span className="hero-title-main">Pip&apos;s Midnight Nursery</span>
                  </h1>

                  <div className="hero-story-group">
                    <p className="hero-tagline">
                      &ldquo;I build the dreams you fall asleep inside.&rdquo;
                    </p>
                    <p className="hero-supporting">
                      A magical world of gentle inventions, soft lights and sleepy dreams.
                      A quiet storybook workshop above the chimney tops where restorative lullabies are tuned,
                      nightlight jars are filled with warm ember glow, and every restless creature finds gentle sleep.
                    </p>
                  </div>
                </div>

                {/* The Primary Actions */}
                <div className="hero-actions">
                  <a href="#inventions" className="btn btn-primary">
                    <span>Explore Pip&apos;s Inventions</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="#dream-room" className="btn btn-secondary">
                    <span aria-hidden="true">✦</span>
                    <span>Enter Dream Room</span>
                  </a>
                  <a href="#meet-pip" className="btn btn-ghost">
                    <span>Field Journal 📖</span>
                  </a>
                </div>
              </div>

              {/* Character Focal Diorama — Interactive Bedtime Pip */}
              <InteractivePip />
            </div>

            {/* Subtle Storybook Scroll Invitation */}
            <div className="hero-scroll-cue" aria-hidden="true">
              <span className="scroll-cue-flourish">☾ · · ·</span>
              <span className="scroll-cue-text">Turn the page to explore Pip&apos;s world</span>
              <span className="scroll-cue-flourish">· · · ☽</span>
            </div>
          </div>

          {/* Organic Layered Cloud Section Transition (Hero -> Meet Pip) */}
          <div className="cloud-transition-divider" aria-hidden="true">
            <svg
              className="cloud-transition-svg"
              viewBox="0 0 1440 70"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Back Misty Lavender/Blue Cloud Layer */}
              <path
                d="M 0 70 L 0 38 Q 140 12 280 34 T 580 18 T 900 36 T 1200 16 T 1440 32 L 1440 70 Z"
                fill="rgba(233, 217, 232, 0.55)"
              />
              {/* Front Warm Parchment Cloud Crests Flowing into Meet Pip */}
              <path
                d="M 0 70 L 0 46 C 160 18 320 54 480 28 C 640 8 800 48 960 24 C 1120 8 1280 44 1440 22 L 1440 70 Z"
                fill="var(--parchment-warm)"
              />
            </svg>
          </div>
        </section>

        {/* =================================================================
            2. MEET PIP — THE INVENTOR'S EDITORIAL FIELD JOURNAL
            ================================================================= */}
        <section
          id="meet-pip"
          className="section-shell-parchment"
          aria-labelledby="meet-title"
        >
          <div className="site-container">
            <header className="section-header-editorial">
              <div className="section-divider-story" aria-hidden="true">
                <span className="section-divider-line" />
                <span>☾ · ✦ · ☽</span>
                <span className="section-divider-line" />
              </div>
              <p className="section-kicker">The Inventor&apos;s Field Journal</p>
              <h2 id="meet-title" className="section-title">
                Field Journal: Pip the Skull Baby
              </h2>
              <p className="section-subtitle">
                Gentle, sleepy, and wonderfully curious. Pip designs custom dreams for every
                restless creature across Cloud Sector 7.
              </p>
            </header>

            {/* The Two-Page Open Journal Spread */}
            <div className="field-journal-spread">
              <div className="journal-spine-shadow" aria-hidden="true" />

              {/* Left Page: Official Portrait Plate with Room to Breathe */}
              <div className="journal-page journal-page-left">
                <div className="portrait-plate-frame">
                  <Image
                    src="/assets/pip_portrait.png"
                    alt="Official studio portrait of Pip wearing a starry bedtime nightcap and pink bow with warm amber glowing eye sockets"
                    width={380}
                    height={570}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="portrait-plate-img"
                  />
                  <div className="portrait-caption-box">
                    <span className="plate-caption-title">Plate II · Official Studio Portrait</span>
                    <span className="plate-caption-sub">Track 1 Canon · 100% Gentle · 0% Spooky</span>
                  </div>
                </div>

                <div className="journal-handwritten-annotation">
                  <span className="annotation-star" aria-hidden="true">✦</span>
                  <p>
                    <em>Field Note:</em> Pip never takes off the starry nightcap during bedtime shifts.
                    Those warm amber eye pinpoints (2200K) glow brighter whenever a little dreamer falls asleep.
                  </p>
                </div>
              </div>

              {/* Right Page: The Storybook Editorial Dossier */}
              <div className="journal-page journal-page-right">
                <div className="journal-pullquote">
                  <span className="pullquote-glyph" aria-hidden="true">&ldquo;</span>
                  <blockquote className="pullquote-text">
                    I never begin a night shift without my starry nightcap and a fresh
                    jar of warm amber starlight. Silence is nice, but lullaby music is much better.
                  </blockquote>
                  <p className="pullquote-author">— Pip, Junior Dream Engineer</p>
                </div>

                <div className="journal-narrative-prose">
                  <p>
                    Pip isn&apos;t scary at all. Behind those soft, round eye sockets live two
                    cozy pinpricks of warm amber hearthlight that glow brighter whenever someone
                    finally drifts into peaceful slumber. With a tiny crooked smile and a pink bow,
                    Pip works through the quiet midnight hours to make bedtime welcoming.
                  </p>
                </div>

                {/* 3 Focused In-World Anchors (Clean, Non-Crowded) */}
                <div className="journal-anchors-row" aria-label="Essential Character Anchors">
                  <div className="journal-anchor-item">
                    <span className="anchor-label">Character Nature</span>
                    <strong className="anchor-value">100% Gentle · 0% Scary</strong>
                  </div>
                  <div className="journal-anchor-item">
                    <span className="anchor-label">Nursery Duty</span>
                    <strong className="anchor-value">Cloud Sector 7 Shift</strong>
                  </div>
                  <div className="journal-anchor-item">
                    <span className="anchor-label">Bedtime Tools</span>
                    <strong className="anchor-value">Star Jar &amp; Music Key</strong>
                  </div>
                </div>

                {/* Single Handcrafted Commissary Seal Sign-Off */}
                <div className="journal-seal-signoff">
                  <div className="wax-seal-badge" aria-hidden="true">
                    <span>✦</span>
                    <span className="seal-text">NURSERY SEAL</span>
                  </div>
                  <span className="seal-text-note">
                    Midnight Nursery Commissary · Certified Cozy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Storybook Deckle Edge Transition (Meet Pip -> Inventions) */}
          <div className="transition-deckle-divider" aria-hidden="true">
            <svg
              className="transition-deckle-svg"
              viewBox="0 0 1440 38"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Organic Deckle Tears into the Nursery Workshop Paper */}
              <path
                d="M 0 0 L 1440 0 L 1440 10 Q 1380 28 1320 12 T 1200 14 T 1080 26 T 960 12 T 840 24 T 720 10 T 600 24 T 480 12 T 360 24 T 240 10 T 120 24 T 0 8 Z"
                fill="var(--parchment-warm)"
              />
              <path
                d="M 0 8 Q 120 24 240 10 T 360 24 T 480 12 T 600 24 T 720 10 T 840 24 T 960 12 T 1080 26 T 1200 14 T 1320 12 T 1440 10"
                stroke="var(--ink-border)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />
            </svg>
          </div>
        </section>

        {/* =================================================================
            3. PIP'S INVENTIONS — ART-DIRECTED WORKBENCH SHOWCASE
            ================================================================= */}
        <section
          id="inventions"
          className="section-shell-workshop"
          aria-labelledby="inventions-title"
        >
          <div className="site-container">
            <header className="section-header-editorial">
              <div className="section-divider-story" aria-hidden="true">
                <span className="section-divider-line" />
                <span>✦ · · · ☾ · · · ✦</span>
                <span className="section-divider-line" />
              </div>
              <p className="section-kicker">The Workshop</p>
              <h2 id="inventions-title" className="section-title">
                Three Dream Inventions
              </h2>
              <p className="section-subtitle">
                Each gadget is handcrafted in the nursery to soothe restless minds and
                guide dreamers safely into slumber.
              </p>
            </header>

            <div className="workshop-showcase-grid">
              {/* Top Row: Prominent Interactive Bays for Project A and Project B */}
              <div className="workshop-interactive-bays">
                {/* Project A: Interactive Web Audio Lullaby Lab */}
                <div id="lab" className="station-anchor-wrap">
                  <LullabyLab />
                </div>

                {/* Project B: Interactive Lighting Mood Nightlight Atelier */}
                <div id="atelier" className="station-anchor-wrap">
                  <NightlightAtelier />
                </div>
              </div>

              {/* Subtle Environmental Continuity: Twilight Skyline Leading to Flight Route */}
              <div className="transition-skyline-divider" aria-hidden="true">
                <svg
                  className="transition-skyline-svg"
                  viewBox="0 0 1200 44"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Distant chimney silhouettes and sleeping gables */}
                  <path
                    d="M 0 44 L 0 32 L 60 20 L 120 32 L 180 24 L 240 36 L 320 16 L 400 38 L 500 22 L 600 36 L 700 18 L 780 34 L 880 20 L 980 36 L 1080 18 L 1150 32 L 1200 26 L 1200 44 Z"
                    fill="rgba(119, 56, 77, 0.08)"
                  />
                  <line x1="0" y1="43" x2="1200" y2="43" stroke="var(--ink-border)" strokeWidth="1" strokeDasharray="6 6" />
                </svg>
              </div>

              {/* Bottom Row: Full-width Interactive Flight Route Blueprint */}
              <div id="delivery" className="station-anchor-wrap">
                <DreamDelivery />
              </div>
            </div>
          </div>

          {/* Storybook Spine & Bookmark Ribbon Transition (Inventions -> Origin Story) */}
          <div className="transition-storybook-spine" aria-hidden="true">
            <svg
              className="storybook-spine-svg"
              viewBox="0 0 1440 50"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Arched Fairytale Book Margin into Storybook Canvas */}
              <path
                d="M 0 50 L 0 25 Q 360 45 720 20 Q 1080 45 1440 25 L 1440 50 Z"
                fill="var(--parchment-soft)"
              />
              {/* Rose Ribbon Center Bookmark Tab */}
              <path
                d="M 700 0 L 740 0 L 740 38 L 720 28 L 700 38 Z"
                fill="var(--rose-sleepy)"
                stroke="var(--berry-dusky)"
                strokeWidth="1"
              />
              <circle cx="720" cy="14" r="3" fill="var(--gold-starlight)" />
            </svg>
          </div>
        </section>

        {/* =================================================================
            4. ORIGIN STORY — 4-CHAPTER STORYBOOK VIGNETTES
            ================================================================= */}
        <section
          id="origin-story"
          className="section-shell-storybook"
          aria-labelledby="origin-title"
        >
          <div className="site-container">
            <header className="section-header-editorial">
              <div className="section-divider-story" aria-hidden="true">
                <span className="section-divider-line" />
                <span>☾ · ✦ · ☽</span>
                <span className="section-divider-line" />
              </div>
              <p className="section-kicker">Bedtime Journey</p>
              <h2 id="origin-title" className="section-title">
                Origin of the Midnight Nursery
              </h2>
              <p className="section-subtitle">
                How a curious skull baby with a starry nightcap came to engineer the dreams of the sleeping world.
              </p>
            </header>

            <OriginStory />
          </div>

          {/* Honey Timber Nursery Floorboard Transition (Origin Story -> Dream Room) */}
          <div className="transition-timber-planks" aria-hidden="true">
            <svg
              className="timber-planks-svg"
              viewBox="0 0 1440 45"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Alternating Honey Timber Nursery Planks */}
              <rect x="0" y="0" width="1440" height="45" fill="var(--parchment-warm)" />
              {/* Floorboard Plank Seams with Soft Amber Tone */}
              <line x1="0" y1="15" x2="1440" y2="15" stroke="rgba(119, 56, 77, 0.16)" strokeWidth="1.5" />
              <line x1="0" y1="30" x2="1440" y2="30" stroke="rgba(119, 56, 77, 0.16)" strokeWidth="1.5" />
              <line x1="0" y1="44" x2="1440" y2="44" stroke="var(--ink-border)" strokeWidth="1" />
              {/* Staggered Vertical Wood Plank Joints */}
              <line x1="220" y1="0" x2="220" y2="15" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              <line x1="580" y1="15" x2="580" y2="30" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              <line x1="940" y1="0" x2="940" y2="15" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              <line x1="1260" y1="30" x2="1260" y2="45" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              <line x1="380" y1="30" x2="380" y2="45" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              <line x1="820" y1="15" x2="820" y2="30" stroke="rgba(119, 56, 77, 0.18)" strokeWidth="1" />
              {/* Tiny Brass Nail Heads */}
              <circle cx="215" cy="7" r="1.5" fill="var(--gold-starlight)" opacity="0.8" />
              <circle cx="575" cy="22" r="1.5" fill="var(--gold-starlight)" opacity="0.8" />
              <circle cx="935" cy="7" r="1.5" fill="var(--gold-starlight)" opacity="0.8" />
              <circle cx="1255" cy="37" r="1.5" fill="var(--gold-starlight)" opacity="0.8" />
            </svg>
          </div>
        </section>

        {/* =================================================================
            5. THE DREAM ROOM — EXPLORATORY QUARTERS & SECRET EASTER EGG
            ================================================================= */}
        <section
          id="dream-room"
          className="section-shell-dreamroom"
          aria-labelledby="dream-room-title"
        >
          <div className="site-container">
            <header className="section-header-editorial">
              <div className="section-divider-story" aria-hidden="true">
                <span className="section-divider-line" />
                <span>✦ · · · ☾ · · · ✦</span>
                <span className="section-divider-line" />
              </div>
              <p className="section-kicker">Nursery Quarters</p>
              <h2 id="dream-room-title" className="section-title">
                Inside Pip&apos;s Dream Room
              </h2>
              <p className="section-subtitle">
                An interactive bedtime diorama. Inspect the drafting desk, test the night window,
                and search the floorboards for the nursery&apos;s oldest hidden secret.
              </p>
            </header>

            <DreamRoom />
          </div>

          {/* Storybook Endpaper Dusk Transition (Dream Room -> Footer) */}
          <div className="transition-endpaper-border" aria-hidden="true">
            <svg
              className="endpaper-border-svg"
              viewBox="0 0 1440 40"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Soft Endpaper Dusk Curve into Calming Storybook Footer */}
              <path
                d="M 0 40 L 0 16 Q 360 32 720 12 Q 1080 32 1440 16 L 1440 40 Z"
                fill="var(--parchment-soft)"
              />
              <path
                d="M 0 16 Q 360 32 720 12 Q 1080 32 1440 16"
                stroke="var(--gold-starlight)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                opacity="0.85"
              />
            </svg>
          </div>
        </section>
      </main>

      {/* =================================================================
          STORYBOOK FOOTER & ATTRIBUTIONS (THE FINAL PAGE)
          ================================================================= */}
      <footer className="site-footer">
        <div className="site-container">
          {/* Bedtime Closing Endpaper Banner */}
          <div className="footer-endpaper-banner">
            <span className="endpaper-flourish" aria-hidden="true">☾ · · · ✦ · · · ☽</span>
            <h3 className="footer-closing-heading">The Final Page · Goodnight, Little Dreamer</h3>
            <p className="footer-closing-text">
              &ldquo;The stars are on duty, the dream delivery route is cleared, and the nursery nightlights are lit. Close your eyes; Pip will take care of the rest.&rdquo;
            </p>
            <div className="footer-pip-signature" aria-label="Pip's signature">
              <span>Pip ✧ Junior Dream Engineer</span>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Pip&apos;s Midnight Nursery</h4>
              <p className="footer-text">
                An interactive character-driven dream workshop created for the
                haX.baby &ldquo;Baby&apos;s First Website&rdquo; hackathon (Track 1: Pip the Skull Baby).
              </p>
              <p className="footer-quote">
                &ldquo;Because every child deserves a little magic...&rdquo;
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Rooms &amp; Stations</h4>
              <ul className="footer-links">
                <li><a href="#dream-gate">The Dream Gate (Entrance)</a></li>
                <li><a href="#meet-pip">Field Journal (Character Sheet)</a></li>
                <li><a href="#lab">Lullaby Lab (Web Audio Chimes)</a></li>
                <li><a href="#atelier">Nightlight Atelier (Reactive Moods)</a></li>
                <li><a href="#delivery">Dream Delivery (Route Dispatch)</a></li>
                <li><a href="#origin-story">Origin Journey (4 Story Chapters)</a></li>
                <li><a href="#dream-room">The Dream Room (Interactive Diorama)</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Credits &amp; Canon</h4>
              <p className="footer-text">
                Character design and official artwork: <strong>haX.baby Track 1</strong>.
              </p>
              <p className="footer-text">
                Engineering &amp; development: <strong>Md Asif</strong>.
              </p>
              <p className="footer-text">
                No horror elements. 100% gentle, cozy storybook canon.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Pip&apos;s Midnight Nursery · Junior Dream Engineer</p>
            <a href="#dream-gate" className="back-to-top-btn">
              <span>Return to Dream Gate</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
