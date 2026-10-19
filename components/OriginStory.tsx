"use client";

import { useState } from "react";
import { useSound } from "@/lib/SoundContext";
import visualStyles from "@/styles/dream-visuals.module.css";

interface StoryScene {
  id: number;
  chapter: string;
  title: string;
  subtitle: string;
  icon: string;
  eyebrow: string;
  narrative: string;
  quote: string;
  timecode: string;
  renderIllustration: () => React.ReactNode;
}

const SCENES: StoryScene[] = [
  {
    id: 1,
    chapter: "Chapter I",
    title: "The Fallen Star",
    subtitle: "The Little Cloud & Star",
    icon: "☁️",
    eyebrow: "Midnight Meadow · 00:04",
    narrative:
      "Pip was wandering through a quiet meadow when a tiny fallen star tumbled down from the Milky Way. It landed gently in a patch of soft clover, humming a lonesome little tune. Pip picked it up, blew away the star dust, and listened closely.",
    quote: "“Don't be frightened little star. The meadow is soft, and I hate silence too.”",
    timecode: "Origin Log · Entry #01",
    renderIllustration: () => (
      <svg
        className="origin-svg-illustration"
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration: Tiny glowing star resting softly in midnight clover meadow"
      >
        <defs>
          <linearGradient id="sc1-sky" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A2035" />
            <stop offset="55%" stopColor="#4A3955" />
            <stop offset="85%" stopColor="#735269" />
            <stop offset="100%" stopColor="#8C667B" />
          </linearGradient>
        </defs>

        {/* Soft Fairytale Twilight Backdrop */}
        <rect width="500" height="300" rx="8" fill="url(#sc1-sky)" />

        {/* Crescent Moon */}
        <path
          d="M 80 50 A 24 24 0 0 0 104 74 A 20 20 0 0 1 80 50 Z"
          fill="#D7A95B"
          opacity="0.9"
        />

        {/* Twinkling Constellations */}
        <text x="160" y="45" fill="#DDA6B0" fontSize="12" opacity="0.75">✦</text>
        <text x="240" y="70" fill="#FFF8F1" fontSize="10" opacity="0.6">✧</text>
        <text x="380" y="50" fill="#D7A95B" fontSize="14" opacity="0.75">✦</text>
        <text x="430" y="90" fill="#DDA6B0" fontSize="9" opacity="0.65">✧</text>

        {/* Distant Rolling Hills in Soft Mist Blue and Plum */}
        <path
          d="M 0 230 Q 140 170 280 220 T 500 190 L 500 300 L 0 300 Z"
          fill="#3B445A"
          opacity="0.8"
        />
        <path
          d="M 0 255 Q 180 210 360 245 T 500 235 L 500 300 L 0 300 Z"
          fill="#2C3545"
        />

        {/* Clover Meadow Ground in Soft Sage Velvet */}
        <path
          d="M 0 268 Q 250 248 500 268 L 500 300 L 0 300 Z"
          fill="#233529"
        />

        {/* Warm Star Glow Pool */}
        <circle cx="250" cy="225" r="75" fill="rgba(215, 169, 91, 0.28)" filter="blur(16px)" />
        <ellipse cx="250" cy="235" rx="55" ry="16" fill="rgba(215, 169, 91, 0.35)" filter="blur(6px)" />

        {/* The Fallen Star */}
        <path
          d="M 250 195 L 254 212 L 271 214 L 257 225 L 261 242 L 247 232 L 233 242 L 237 225 L 223 214 L 240 212 Z"
          fill="#FFF8F1"
          stroke="#D7A95B"
          strokeWidth="2"
        />

        {/* Star Sparkle Rays */}
        <line x1="250" y1="180" x2="250" y2="190" stroke="#D7A95B" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="247" x2="250" y2="257" stroke="#D7A95B" strokeWidth="2" strokeLinecap="round" />
        <line x1="218" y1="218" x2="228" y2="218" stroke="#D7A95B" strokeWidth="2" strokeLinecap="round" />
        <line x1="267" y1="218" x2="277" y2="218" stroke="#D7A95B" strokeWidth="2" strokeLinecap="round" />

        {/* Clover Stems Around the Star */}
        <circle cx="215" cy="245" r="5" fill="#4B6E57" />
        <circle cx="222" cy="242" r="5" fill="#4B6E57" />
        <circle cx="218" cy="250" r="5" fill="#4B6E57" />

        <circle cx="280" cy="248" r="5" fill="#4B6E57" />
        <circle cx="288" cy="244" r="5" fill="#4B6E57" />
        <circle cx="285" cy="253" r="5" fill="#4B6E57" />
      </svg>
    ),
  },
  {
    id: 2,
    chapter: "Chapter II",
    title: "The First Dream",
    subtitle: "Spun in Cloud Cotton",
    icon: "☾",
    eyebrow: "Cloud Workshop · 01:15",
    narrative:
      "Pip carried the humming star up to Cloud Sector 7. Using two silver knitting pins and freshly fluffed cloud cotton, Pip wrapped the star until its glow turned soft and drowsy. When held near the ear, it spun sweet images of warm honey and floating feathers.",
    quote: "“A dream is just starlight wrapped in soft flannel so it doesn't poke your eyes when you sleep.”",
    timecode: "Origin Log · Entry #02",
    renderIllustration: () => (
      <svg
        className="origin-svg-illustration"
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration: Pip spinning starlight inside cloud cotton"
      >
        <defs>
          <linearGradient id="sc2-sky" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E233E" />
            <stop offset="60%" stopColor="#4A3A5E" />
            <stop offset="100%" stopColor="#755272" />
          </linearGradient>
        </defs>

        <rect width="500" height="300" rx="8" fill="url(#sc2-sky)" />

        {/* Ambient Cloud Haze */}
        <circle cx="160" cy="180" r="80" fill="rgba(221, 166, 176, 0.25)" filter="blur(25px)" />
        <circle cx="340" cy="160" r="90" fill="rgba(215, 169, 91, 0.22)" filter="blur(25px)" />

        {/* Big Dreamy Cloud Fluff Bed in Gentle Lavender */}
        <path
          d="M 120 230 C 100 230 80 200 110 170 C 110 130 160 110 200 130 C 230 90 300 90 330 130 C 370 120 410 150 400 190 C 430 220 390 250 360 240 C 320 260 160 260 120 230 Z"
          fill="#4A3C5B"
          stroke="rgba(233, 217, 232, 0.45)"
          strokeWidth="1.5"
        />

        {/* Golden Dream Thread Ribbon */}
        <path
          d="M 140 180 Q 210 120 250 170 T 360 150"
          stroke="#D7A95B"
          strokeWidth="3"
          strokeDasharray="6 4"
        />

        {/* Glowing Pocket Dream Core */}
        <circle cx="250" cy="170" r="28" fill="#FFF8F1" />
        <circle cx="250" cy="170" r="42" fill="rgba(215, 169, 91, 0.4)" filter="blur(8px)" />
        <text x="250" y="177" fill="#77384D" fontSize="20" textAnchor="middle" fontFamily="Georgia, serif">✦</text>

        {/* Dream Sparks */}
        <text x="210" y="140" fill="#D7A95B" fontSize="12">✧</text>
        <text x="290" y="130" fill="#DDA6B0" fontSize="14">✦</text>
        <text x="230" y="215" fill="#D7A95B" fontSize="11">✧</text>
        <text x="280" y="210" fill="#FFF8F1" fontSize="12">✦</text>
      </svg>
    ),
  },
  {
    id: 3,
    chapter: "Chapter III",
    title: "The Night Whispers",
    subtitle: "Woodland Bedtime Visitors",
    icon: "🦉",
    eyebrow: "Nursery Windowsill · 02:40",
    narrative:
      "Word traveled through the nocturnal branches. A sleepy moon owl with insomnia fluttered to Pip's window, followed by mother badgers whose kits would not sleep. Each whispered their bedtime troubles into Pip's ear, and Pip promised to craft a remedy for all of them.",
    quote: "“One needs a chiming song, another needs a gentle lantern. No one should be alone in the dark.”",
    timecode: "Origin Log · Entry #03",
    renderIllustration: () => (
      <svg
        className="origin-svg-illustration"
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration: Woodland creatures gathering at Pip's moonlit windowsill"
      >
        <defs>
          <linearGradient id="sc3-sky" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#241B30" />
            <stop offset="100%" stopColor="#3F304E" />
          </linearGradient>
        </defs>

        <rect width="500" height="300" rx="8" fill="#F2E6D7" />

        {/* Window Pane Framing & Moonlit Sky Beyond */}
        <rect x="70" y="30" width="360" height="230" rx="4" stroke="#77384D" strokeWidth="2.5" fill="url(#sc3-sky)" />
        <line x1="250" y1="30" x2="250" y2="260" stroke="#77384D" strokeWidth="2" />
        <line x1="70" y1="145" x2="430" y2="145" stroke="#77384D" strokeWidth="2" />

        {/* Windowsill Base in Warm Timber */}
        <rect x="50" y="260" width="400" height="24" rx="2" fill="#5F433A" stroke="#382B2A" strokeWidth="1.5" />

        {/* Moon Owl Silhouette Outside on Branch */}
        <ellipse cx="170" cy="115" rx="26" ry="32" fill="#3D4B60" stroke="rgba(255, 248, 241, 0.45)" strokeWidth="1.5" />
        <circle cx="160" cy="105" r="7" fill="#D7A95B" />
        <circle cx="180" cy="105" r="7" fill="#D7A95B" />
        <circle cx="160" cy="105" r="3" fill="#241B30" />
        <circle cx="180" cy="105" r="3" fill="#241B30" />
        <polygon points="168,112 172,112 170,118" fill="#FFF8F1" />

        {/* Little Starry Lantern Placed on Sill */}
        <rect x="310" y="200" width="30" height="50" rx="4" fill="#382B2A" stroke="#D7A95B" strokeWidth="1.5" />
        <circle cx="325" cy="225" r="14" fill="#D7A95B" opacity="0.9" />
        <circle cx="325" cy="225" r="26" fill="rgba(215, 169, 91, 0.35)" filter="blur(6px)" />
        <path d="M 320 200 L 320 185 Q 325 180 330 185 L 330 200" stroke="#D7A95B" strokeWidth="1.5" fill="none" />

        {/* Night Whispers Sound Waves in Sleepy Rose */}
        <path d="M 210 110 Q 225 105 235 115" stroke="rgba(221, 166, 176, 0.7)" strokeWidth="2" fill="none" />
        <path d="M 205 100 Q 225 95 240 108" stroke="rgba(221, 166, 176, 0.5)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 4,
    chapter: "Chapter IV",
    title: "The Midnight Nursery",
    subtitle: "A Dreamer's Calling",
    icon: "✨",
    eyebrow: "Grand Opening · 04:00",
    narrative:
      "By 4:00 AM, the dream workshop was humming. Pip organized the music boxes in the Lullaby Lab, filled the dream lanterns with starlight in the Nightlight Atelier, and mapped flight paths across the chimney rooftops. Pip tied on the pink bow and smiled: the Midnight Nursery was open.",
    quote: "“I build the dreams you fall asleep inside. Rest now—Pip is on the night shift.”",
    timecode: "Origin Log · Certified",
    renderIllustration: () => (
      <svg
        className="origin-svg-illustration"
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration: The Midnight Nursery sign illuminated under starry skies"
      >
        <defs>
          <linearGradient id="sc4-sky" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#251C33" />
            <stop offset="70%" stopColor="#413054" />
            <stop offset="100%" stopColor="#6E506B" />
          </linearGradient>
        </defs>

        <rect width="500" height="300" rx="8" fill="url(#sc4-sky)" />

        {/* Nursery Gable Roof Outline */}
        <polygon points="250,35 70,140 430,140" fill="#3D2D49" stroke="#D7A95B" strokeWidth="2" />
        <rect x="110" y="140" width="280" height="135" fill="#32243C" stroke="#D7A95B" strokeWidth="1.5" />

        {/* Archival Nursery Signboard */}
        <rect x="155" y="88" width="190" height="44" rx="4" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
        <text x="250" y="108" fill="#382B2A" fontSize="12" fontFamily="Georgia, serif" textAnchor="middle" fontWeight="bold">
          MIDNIGHT NURSERY
        </text>
        <text x="250" y="122" fill="#77384D" fontSize="9" fontFamily="Courier, monospace" textAnchor="middle" fontWeight="bold">
          Sector 7 · Dream Workshop
        </text>

        {/* Pip's Signature Pink Bow on Sign */}
        <path d="M 242 83 C 235 76 226 86 238 88 Z" fill="#DDA6B0" stroke="#77384D" strokeWidth="1" />
        <path d="M 258 83 C 265 76 274 86 262 88 Z" fill="#DDA6B0" stroke="#77384D" strokeWidth="1" />
        <circle cx="250" cy="86" r="3" fill="#77384D" />

        {/* Warm Golden Doorway Light */}
        <rect x="220" y="180" width="60" height="95" rx="30 30 0 0" fill="#FFF8F1" stroke="#D7A95B" strokeWidth="2" />
        <rect x="220" y="180" width="60" height="95" rx="30 30 0 0" fill="radial-gradient(circle, #F2C879 0%, #D7A95B 80%)" opacity="0.9" />
        <circle cx="250" cy="220" r="45" fill="rgba(215, 169, 91, 0.45)" filter="blur(14px)" />

        {/* Nursery Chimney with Sleepy Cloud Puff */}
        <rect x="330" y="55" width="28" height="45" fill="#5F3B4A" stroke="#D7A95B" strokeWidth="1" />
        <circle cx="344" cy="40" r="10" fill="rgba(255, 248, 241, 0.75)" />
        <circle cx="352" cy="25" r="14" fill="rgba(255, 248, 241, 0.55)" />
        <circle cx="362" cy="12" r="18" fill="rgba(255, 248, 241, 0.35)" />
      </svg>
    ),
  },
];

export default function OriginStory() {
  const { playTick } = useSound();
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const current = SCENES[activeChapterIndex];

  const isFirstChapter = activeChapterIndex === 0;
  const isLastChapter = activeChapterIndex === SCENES.length - 1;

  const handleNext = () => {
    if (isLastChapter) return;
    playTick();
    setActiveChapterIndex((prev) => Math.min(prev + 1, SCENES.length - 1));
  };

  const handlePrev = () => {
    if (isFirstChapter) return;
    playTick();
    setActiveChapterIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (index < SCENES.length - 1) {
        playTick();
        setActiveChapterIndex(index + 1);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (index > 0) {
        playTick();
        setActiveChapterIndex(index - 1);
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      playTick();
      setActiveChapterIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      playTick();
      setActiveChapterIndex(SCENES.length - 1);
    }
  };

  return (
    <div className="origin-story-theatre">
      {/* Main Illustrated Scene Stage */}
      <div
        id="origin-scene-panel"
        key={current.id}
        role="tabpanel"
        aria-labelledby={`origin-chapter-tab-${current.id}`}
        className={`story-scene-display ${visualStyles.pageTurnActive}`}
        aria-live="polite"
      >
        <div className="story-illustration-frame">
          {current.renderIllustration()}
          <div className="story-frame-marginalia">
            <span>{current.eyebrow}</span>
            <span>{current.timecode}</span>
          </div>
        </div>

        {/* Story Prose & Editorial Manuscript */}
        <div className="story-prose-dossier">
          <div className="story-prose-header">
            <span className="story-chapter-eyebrow">
              {current.chapter} · {current.subtitle}
            </span>
            <h3 className="story-chapter-title">{current.title}</h3>
          </div>

          <p className="story-narrative-text">{current.narrative}</p>

          <blockquote className="story-pullquote">
            <p>{current.quote}</p>
          </blockquote>

          {/* Stepper Navigation Buttons */}
          <div className="story-navigation-row">
            <button
              type="button"
              className={`btn btn-secondary btn-sm ${isFirstChapter ? visualStyles.btnDisabled : ""}`}
              onClick={handlePrev}
              disabled={isFirstChapter}
              aria-label="Previous Chapter"
            >
              <span>← Previous Chapter</span>
            </button>

            <span className="story-counter-badge">
              Chapter {activeChapterIndex + 1} of {SCENES.length}
            </span>

            <button
              type="button"
              className={`btn btn-secondary btn-sm ${isLastChapter ? visualStyles.btnDisabled : ""}`}
              onClick={handleNext}
              disabled={isLastChapter}
              aria-label="Next Chapter"
            >
              <span>Next Chapter →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dot Cluster & Quick Arrow Controls */}
      <div className="story-pagination-bar" role="toolbar" aria-label="Story chapter quick navigation">
        <button
          type="button"
          className={`story-nav-arrow ${isFirstChapter ? visualStyles.btnDisabled : ""}`}
          onClick={handlePrev}
          disabled={isFirstChapter}
          aria-label="Previous chapter"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="story-dots-cluster" aria-hidden="true">
          {SCENES.map((_, i) => (
            <span
              key={i}
              className={`story-dot ${i === activeChapterIndex ? "story-dot-active" : ""}`}
            />
          ))}
        </div>
        <button
          type="button"
          className={`story-nav-arrow ${isLastChapter ? visualStyles.btnDisabled : ""}`}
          onClick={handleNext}
          disabled={isLastChapter}
          aria-label="Next chapter"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* 4 Illustrated Bedtime Chapter Cards (Matching Reference Panel 2) */}
      <div
        className="story-chapter-cards-grid"
        role="tablist"
        aria-label="Origin Chapters"
      >
        {SCENES.map((s, idx) => {
          const isActive = idx === activeChapterIndex;
          return (
            <button
              key={s.id}
              id={`origin-chapter-tab-${s.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="origin-scene-panel"
              className={`story-chapter-card ${isActive ? "chapter-card-active" : ""}`}
              onClick={() => {
                playTick();
                setActiveChapterIndex(idx);
              }}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              <div className="chapter-card-badge" aria-hidden="true">
                <span className="chapter-card-icon">{s.icon}</span>
              </div>
              <div className="chapter-card-details">
                <span className="chapter-card-num">{s.chapter}</span>
                <strong className="chapter-card-name">{s.title}</strong>
                <span className="chapter-card-sub">{s.subtitle}</span>
              </div>
              {isActive && (
                <span className="chapter-active-sparkle" aria-hidden="true">
                  ✦
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
