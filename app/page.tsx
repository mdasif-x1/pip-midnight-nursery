import Image from "next/image";
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
            1. THE DREAM GATE — CELESTIAL ENTRANCE & TACTILE ADVENTURE WAYMARKS
            ================================================================= */}
        <section
          id="dream-gate"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          {/* Subtle Twinkling Starfield Layer */}
          <div className="hero-constellation-bg" aria-hidden="true" />

          {/* Radiant Glowing Crescent Moon in Upper Sky */}
          <div className="hero-crescent-moon" aria-hidden="true">
            <svg
              className="moon-svg"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF3DF" />
                  <stop offset="65%" stopColor="#FFD166" />
                  <stop offset="100%" stopColor="#D5AE72" />
                </radialGradient>
              </defs>
              <path
                d="M 66 18 A 38 38 0 0 0 66 82 A 32 32 0 0 1 66 18 Z"
                fill="url(#moonGlow)"
              />
              <circle cx="82" cy="22" r="3" fill="#FFF3DF" opacity="0.9" />
              <circle cx="28" cy="74" r="2.5" fill="#FFD166" opacity="0.85" />
            </svg>
          </div>

          <div className="site-container">
            <div className="hero-grid">
              {/* Text & Narrative Orientation */}
              <div className="hero-content">
                <div className="hero-eyebrow-wrapper">
                  <span className="hero-eyebrow-pill">
                    <span aria-hidden="true">✦</span> Junior Dream Engineer · Cloud Sector 7 <span aria-hidden="true">✦</span>
                  </span>
                </div>

                <div className="hero-storybook-plate">
                  <h1 id="hero-title" className="hero-title">
                    <span className="hero-welcome-script">Welcome to</span>
                    <span className="hero-title-highlight">Pip&apos;s Midnight</span>
                    <span className="hero-title-sub">Nursery</span>
                  </h1>

                  <div className="hero-story-group">
                    <p className="hero-tagline">
                      &ldquo;I build the dreams you fall asleep inside.&rdquo;
                    </p>
                    <p className="hero-supporting">
                      A quiet storybook workshop above the chimney tops where restorative lullabies are tuned,
                      dream lanterns are filled with amber glow, and every restless creature finds peaceful sleep.
                    </p>
                  </div>
                </div>

                {/* Primary Action Buttons */}
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

              {/* Character Focal Diorama with Handcrafted Marginalia Callouts */}
              <div className="character-hero-diorama">
                <div className="character-ambient-halo" aria-hidden="true" />
                <div className="character-float">
                  <Image
                    src="/assets/pip_avatar_cloud.png"
                    alt="Pip the friendly Skull Baby floating comfortably on a fluffy dream cloud, wearing a starry nightcap and pink bow, waving hello"
                    width={448}
                    height={545}
                    priority
                    className="character-image"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 448px"
                  />
                </div>

                {/* Handcrafted Marginalia Callouts */}
                <div className="character-callout callout-nightcap" aria-hidden="true">
                  <span className="callout-spark">✦</span>
                  <span className="callout-text">Starry nightcap &amp; pink bow</span>
                </div>
                <div className="character-callout callout-eyes" aria-hidden="true">
                  <span className="callout-text">Warm amber eyes (2200K)</span>
                  <span className="callout-spark">✦</span>
                </div>
                <div className="character-callout callout-cloud" aria-hidden="true">
                  <span className="callout-spark">☁</span>
                  <span className="callout-text">Cumulus dream-fluff bed</span>
                </div>

                <div className="character-badge-tag">
                  <span aria-hidden="true">✦</span>
                  <span>Canon Skull Baby · 0% Scary · 100% Cozy</span>
                </div>
              </div>
            </div>

            {/* The 6 Tactile Adventure Waymark Signposts */}
            <div className="hero-portals-wrapper">
              <p className="hero-portals-heading">
                <span aria-hidden="true">✦</span>
                <span>Nursery Adventure Waymarks · Choose a Destination</span>
                <span aria-hidden="true">✦</span>
              </p>
              <div
                className="hero-waymarks-grid"
                role="region"
                aria-label="Nursery Adventure Waymarks"
              >
                <a href="#meet-pip" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">📖</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Field Journal</strong>
                    <span className="waymark-sub">Meet Pip &amp; credentials</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#lab" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">🎵</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Lullaby Lab</strong>
                    <span className="waymark-sub">Web Audio music box</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#atelier" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">✨</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Nightlight Atelier</strong>
                    <span className="waymark-sub">Bedside lighting moods</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#delivery" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">📮</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Postal Flight</strong>
                    <span className="waymark-sub">Delivery route docket</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#origin-story" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">📜</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Origin Journey</strong>
                    <span className="waymark-sub">4 bedtime chapters</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#dream-room" className="waymark-tag">
                  <span className="tag-eyelet" aria-hidden="true">○</span>
                  <span className="waymark-icon" aria-hidden="true">🕯️</span>
                  <div className="waymark-info">
                    <strong className="waymark-title">Pip&apos;s Bedchamber</strong>
                    <span className="waymark-sub">Diorama &amp; secret stash</span>
                  </div>
                  <span className="waymark-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Organic Wavy Cloud Section Divider */}
          <div className="cloud-transition-divider" aria-hidden="true">
            <svg
              className="cloud-transition-svg"
              viewBox="0 0 1440 60"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 60 L 0 35 Q 180 5 360 30 T 720 20 T 1080 30 T 1440 15 L 1440 60 Z"
                fill="var(--paper-cream)"
              />
            </svg>
          </div>
        </section>

        {/* =================================================================
            2. MEET PIP — THE INVENTOR'S TWO-PAGE FIELD NOTEBOOK SPREAD
            ================================================================= */}
        <section
          id="meet-pip"
          className="section-shell-cream"
          aria-labelledby="meet-title"
        >
          <div className="site-container">
            <header className="section-header-ink">
              <div className="section-divider-ink" aria-hidden="true">
                <span className="section-divider-line-ink" />
                <span>☾ · ✦ · ☽</span>
                <span className="section-divider-line-ink" />
              </div>
              <p className="section-kicker-ink">The Inventor&apos;s Notebook</p>
              <h2 id="meet-title" className="section-title-ink">
                Field Journal: Pip the Skull Baby
              </h2>
              <p className="section-subtitle-ink">
                Gentle, sleepy, and wonderfully curious. Pip crafts custom dreams for every
                restless creature in the Midnight Nursery.
              </p>
            </header>

            {/* The Two-Page Open Notebook Spread */}
            <div className="field-notebook-spread">
              <div className="notebook-spine-shadow" aria-hidden="true" />

              {/* Left Page: Archival Portrait Plate with Washi-Tape Corners */}
              <div className="notebook-page notebook-page-left">
                <div className="washi-tape washi-tape-tl" aria-hidden="true" />
                <div className="washi-tape washi-tape-br" aria-hidden="true" />

                <div className="portrait-plate-frame">
                  <Image
                    src="/assets/pip_portrait.png"
                    alt="Official studio portrait of Pip wearing a starry bedtime nightcap and pink bow with warm amber glowing eye sockets"
                    width={380}
                    height={570}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="portrait-caption-box">
                    <span className="plate-number">Plate II · Official Studio Portrait</span>
                    <span className="plate-canon-tag">haX.baby Track 1 Canon · 100% Gentle</span>
                  </div>
                </div>

                <div className="notebook-handwritten-note">
                  <span className="note-star" aria-hidden="true">✦</span>
                  <p>
                    <em>Field Note:</em> Pip never removes the starry nightcap during bedtime shifts.
                    Those warm amber eye pinpoints glow brighter whenever a little dreamer falls asleep.
                  </p>
                </div>
              </div>

              {/* Right Page: The Character Dossier & Credentials */}
              <div className="notebook-page notebook-page-right">
                {/* Pull-quote Treatment */}
                <div className="pullquote-container">
                  <span className="pullquote-mark" aria-hidden="true">&ldquo;</span>
                  <blockquote className="dossier-pullquote-text">
                    I never begin a night shift without my starry nightcap and a fresh
                    jar of warm amber starlight. Silence is nice, but lullaby music is much better.
                  </blockquote>
                  <p className="pullquote-attribution">— Pip, Junior Dream Engineer</p>
                </div>

                <p className="dossier-story-paragraph">
                  Pip isn&apos;t scary at all. Behind those soft, round eye sockets live two
                  cozy pinpricks of warm amber light that glow brighter whenever someone
                  finally drifts into a peaceful sleep. With a tiny crooked smile and a pink bow,
                  Pip works through the quiet midnight hours to make bedtime magical.
                </p>

                {/* 5-Point Character Profile Grid */}
                <div className="character-sheet-grid" aria-label="Official Nursery Dossier">
                  <div className="sheet-cell">
                    <span className="sheet-label">Identity:</span>
                    <strong className="sheet-val">Pip · Skull Baby (0% Spooky)</strong>
                  </div>
                  <div className="sheet-cell">
                    <span className="sheet-label">Profession:</span>
                    <strong className="sheet-val">Junior Dream Engineer (Cloud 7)</strong>
                  </div>
                  <div className="sheet-cell">
                    <span className="sheet-label">Sleepiness Index:</span>
                    <strong className="sheet-val">Steady 94% Drowsy</strong>
                  </div>
                  <div className="sheet-cell">
                    <span className="sheet-label">Bedtime Tools:</span>
                    <strong className="sheet-val">Golden Music Key &amp; Star Jar</strong>
                  </div>
                  <div className="sheet-cell sheet-cell-wide">
                    <span className="sheet-label">Bedtime Motto:</span>
                    <strong className="sheet-val">&ldquo;Small dreams. Big adventures.&rdquo;</strong>
                  </div>
                </div>

                <div className="notebook-seal-row">
                  <div className="wax-seal-badge" aria-hidden="true">
                    <span>✦</span>
                    <span className="seal-text">NURSERY SEAL</span>
                  </div>
                  <span className="seal-text-note">
                    Midnight Nursery Commissary · Certified 0% Scary, 100% Cozy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. PIP'S INVENTIONS — ART-DIRECTED WORKBENCH SHOWCASE
            ================================================================= */}
        <section
          id="inventions"
          className="section-shell-midnight"
          aria-labelledby="inventions-title"
        >
          <div className="site-container">
            <header className="section-header-gold">
              <div className="section-divider-gold" aria-hidden="true">
                <span className="section-divider-line-gold" />
                <span>✦ · · · ☾ · · · ✦</span>
                <span className="section-divider-line-gold" />
              </div>
              <p className="section-kicker-gold">The Workshop</p>
              <h2 id="inventions-title" className="section-title-gold">
                Three Dream Inventions
              </h2>
              <p className="section-subtitle-gold">
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

              {/* Bottom Row: Full-width Interactive Flight Route Blueprint */}
              <div id="delivery" className="station-anchor-wrap">
                <DreamDelivery />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. ORIGIN STORY — 4-CHAPTER STORYBOOK VIGNETTES
            ================================================================= */}
        <section
          id="origin-story"
          className="section-shell-tint"
          aria-labelledby="origin-title"
        >
          <div className="site-container">
            <header className="section-header-ink">
              <div className="section-divider-ink" aria-hidden="true">
                <span className="section-divider-line-ink" />
                <span>☾ · ✦ · ☽</span>
                <span className="section-divider-line-ink" />
              </div>
              <p className="section-kicker-ink">Bedtime Journey</p>
              <h2 id="origin-title" className="section-title-ink">
                Origin of the Midnight Nursery
              </h2>
              <p className="section-subtitle-ink">
                How a curious skull baby with a starry nightcap came to engineer the dreams of the sleeping world.
              </p>
            </header>

            <OriginStory />
          </div>
        </section>

        {/* =================================================================
            5. THE DREAM ROOM — EXPLORATORY QUARTERS & SECRET EASTER EGG
            ================================================================= */}
        <section
          id="dream-room"
          className="section-shell-midnight"
          aria-labelledby="dream-room-title"
        >
          <div className="site-container">
            <header className="section-header-gold">
              <div className="section-divider-gold" aria-hidden="true">
                <span className="section-divider-line-gold" />
                <span>✦ · · · ☾ · · · ✦</span>
                <span className="section-divider-line-gold" />
              </div>
              <p className="section-kicker-gold">Nursery Quarters</p>
              <h2 id="dream-room-title" className="section-title-gold">
                Inside Pip&apos;s Dream Room
              </h2>
              <p className="section-subtitle-gold">
                An interactive bedtime diorama. Inspect the drafting desk, test the night window,
                and search the floorboards for the nursery&apos;s oldest hidden secret.
              </p>
            </header>

            <DreamRoom />
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
              <span>Pip, Junior Dream Engineer</span>
              <span className="sig-star" aria-hidden="true">✦</span>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Pip&apos;s Midnight Nursery</h4>
              <p className="footer-text">
                An interactive character-driven dream workshop and portfolio created for the
                haX.baby &ldquo;Baby&apos;s First Website&rdquo; hackathon (Track 1: Pip the Skull Baby).
              </p>
              <p className="footer-quote" style={{ fontStyle: "italic", color: "var(--moon-gold)", marginTop: "0.5rem" }}>
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
