import Image from "next/image";
import LullabyLab from "@/components/LullabyLab";
import NightlightAtelier from "@/components/NightlightAtelier";
import DreamDelivery from "@/components/DreamDelivery";
import OriginStory from "@/components/OriginStory";
import DreamRoom from "@/components/DreamRoom";
import SoundToggle from "@/components/SoundToggle";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      {/* Storybook Top Navigation Bar */}
      <header className="site-header">
        <div className="site-container">
          <nav className="nav-container" aria-label="Nursery Navigation">
            <a href="#dream-gate" className="brand-link">
              <span className="brand-icon" aria-hidden="true">✦</span>
              <span className="brand-title">Pip&apos;s Midnight Nursery</span>
            </a>

            <ul className="nav-links">
              <li>
                <a href="#dream-gate" className="nav-item-link">
                  Dream Gate
                </a>
              </li>
              <li>
                <a href="#meet-pip" className="nav-item-link">
                  Meet Pip
                </a>
              </li>
              <li>
                <a href="#inventions" className="nav-item-link">
                  Inventions
                </a>
              </li>
              <li>
                <a href="#origin-story" className="nav-item-link">
                  Origin Story
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
            1. THE DREAM GATE — HERO SECTION (FADED MIDNIGHT GROUND)
            ================================================================= */}
        <section
          id="dream-gate"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          <div className="site-container">
            <div className="hero-grid">
              {/* Text & Narrative Orientation */}
              <div className="hero-content">
                <p className="hero-eyebrow">A Little Place Between Dreams</p>

                <h1 id="hero-title" className="hero-title">
                  Pip&apos;s Midnight <br />
                  <span className="hero-title-italic">Nursery</span>
                </h1>

                <div className="hero-story-group">
                  <p className="hero-tagline">
                    &ldquo;I build the dreams you fall asleep inside.&rdquo;
                  </p>
                  <p className="hero-supporting">
                    A moonlit workshop for little dreams, gentle lullabies, and sleepy stars.
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="hero-actions">
                  <a href="#meet-pip" className="btn btn-primary">
                    <span aria-hidden="true">✦</span>
                    <span>Enter the Nursery</span>
                  </a>
                  <a href="#inventions" className="btn btn-secondary">
                    <span>Explore Inventions</span>
                  </a>
                  <a href="#origin-story" className="btn btn-ghost">
                    <span>Read Origin Story →</span>
                  </a>
                </div>
              </div>

              {/* Character Diorama & Bookplate Frontispiece */}
              <div className="diorama-container">
                <div className="diorama-frame">
                  {/* Antique Frame Corner Accents */}
                  <span className="frame-corner frame-corner-tl" aria-hidden="true">✦</span>
                  <span className="frame-corner frame-corner-tr" aria-hidden="true">✦</span>
                  <span className="frame-corner frame-corner-bl" aria-hidden="true">✦</span>
                  <span className="frame-corner frame-corner-br" aria-hidden="true">✦</span>

                  {/* Character Illustration */}
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

                  {/* Journal Marginalia / Archival Caption */}
                  <div className="character-speech-bubble">
                    <p>
                      <strong>Fig. 1:</strong> Pip on cloud bed · Dream batch #404 ready for delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. MEET PIP — DELIBERATE PAPER CREAM JOURNAL SPREAD
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
              <p className="section-kicker-ink">Character Dossier</p>
              <h2 id="meet-title" className="section-title-ink">
                Meet Pip the Skull Baby
              </h2>
              <p className="section-subtitle-ink">
                Gentle, sleepy, and wonderfully curious. Pip crafts custom dreams for every
                restless creature in the Midnight Nursery.
              </p>
            </header>

            <div className="meet-grid">
              {/* Studio Portrait Asset mounted with prominent archival presence */}
              <div className="portrait-frame-prominent">
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

              {/* Character Details & Personality Ledger */}
              <div className="dossier-card-editorial">
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

                {/* Purposefully Grouped Character Categories */}
                <div className="dossier-categories" aria-label="Official Nursery Dossier">
                  {/* Category 1: Primary Registry */}
                  <div className="dossier-category-box">
                    <span className="category-title">Primary Registry</span>
                    <div className="category-entry">
                      <span className="entry-label">Official Title:</span>
                      <span className="entry-value">Junior Dream Engineer</span>
                    </div>
                    <div className="category-entry">
                      <span className="entry-label">Nursery Sector:</span>
                      <span className="entry-value">Cloud Sector 7</span>
                    </div>
                    <div className="category-entry">
                      <span className="entry-label">Sleepiness Meter:</span>
                      <span className="entry-value">94% Drowsy</span>
                    </div>
                  </div>

                  {/* Category 2: Provisions & Gear */}
                  <div className="dossier-category-box">
                    <span className="category-title">Bedtime Gear</span>
                    <div className="category-entry">
                      <span className="entry-label">Favorite Tool:</span>
                      <span className="entry-value">Golden Music-Box Key</span>
                    </div>
                    <div className="category-entry">
                      <span className="entry-label">Attire:</span>
                      <span className="entry-value">Nightcap &amp; Pink Bow</span>
                    </div>
                    <div className="category-entry">
                      <span className="entry-label">Disposition:</span>
                      <span className="entry-value">Curious, Gentle, Giggly</span>
                    </div>
                  </div>
                </div>

                <div className="marginalia-stamp">
                  <span>✦ Certified Nursery Safety: 0% scary · 100% cozy</span>
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
                <LullabyLab />

                {/* Project B: Interactive Lighting Mood Nightlight Atelier */}
                <NightlightAtelier />
              </div>

              {/* Bottom Row: Full-width Interactive Flight Route Blueprint */}
              <DreamDelivery />
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
          STORYBOOK FOOTER & ATTRIBUTIONS (DEEP INK BROWN GROUND)
          ================================================================= */}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-heading">Pip&apos;s Midnight Nursery</h3>
              <p className="footer-text">
                An interactive character-driven dream workshop and portfolio created for the
                haX.baby &ldquo;Baby&apos;s First Website&rdquo; hackathon (Track 1: Pip the Skull Baby).
              </p>
              <p className="footer-text" style={{ fontStyle: "italic", color: "var(--dusty-rose)" }}>
                &ldquo;I build the dreams you fall asleep inside.&rdquo;
              </p>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Rooms &amp; Nav</h3>
              <ul className="footer-links">
                <li><a href="#dream-gate">The Dream Gate (Hero)</a></li>
                <li><a href="#meet-pip">Meet Pip (Character Dossier)</a></li>
                <li><a href="#inventions">Three Inventions (Workshop)</a></li>
                <li><a href="#origin-story">Origin Journey (Story Scenes)</a></li>
                <li><a href="#dream-room">The Dream Room (Secret)</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Credits &amp; Canon</h3>
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
            <p>© 2026 Pip&apos;s Midnight Nursery · Interactive Workshop Verified</p>
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
