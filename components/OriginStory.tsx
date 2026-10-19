"use client";

import { useState } from "react";

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
        {/* Night Sky Gradient Backdrop */}
        <rect width="500" height="300" rx="8" fill="#1C2333" />

        {/* Crescent Moon */}
        <path
          d="M 80 50 A 24 24 0 0 0 104 74 A 20 20 0 0 1 80 50 Z"
          fill="#B58A52"
          opacity="0.85"
        />

        {/* Twinkling Constellations */}
        <text x="160" y="45" fill="#D9A7A6" fontSize="12" opacity="0.6">✦</text>
        <text x="240" y="70" fill="#F6EBDD" fontSize="10" opacity="0.4">✧</text>
        <text x="380" y="50" fill="#B58A52" fontSize="14" opacity="0.6">✦</text>
        <text x="430" y="90" fill="#D9A7A6" fontSize="9" opacity="0.5">✧</text>

        {/* Distant Rolling Hills */}
        <path
          d="M 0 240 Q 140 180 280 230 T 500 200 L 500 300 L 0 300 Z"
          fill="#242E42"
        />
        <path
          d="M 0 260 Q 180 215 360 250 T 500 240 L 500 300 L 0 300 Z"
          fill="#161C28"
        />

        {/* Clover Meadow Ground */}
        <path
          d="M 0 270 Q 250 250 500 270 L 500 300 L 0 300 Z"
          fill="#121722"
        />

        {/* Warm Star Glow Pool */}
        <circle cx="250" cy="225" r="70" fill="radial-gradient(circle, rgba(232, 155, 72, 0.4) 0%, transparent 70%)" />
        <ellipse cx="250" cy="235" rx="55" ry="16" fill="rgba(232, 155, 72, 0.25)" filter="blur(8px)" />

        {/* The Fallen Star */}
        <path
          d="M 250 195 L 254 212 L 271 214 L 257 225 L 261 242 L 247 232 L 233 242 L 237 225 L 223 214 L 240 212 Z"
          fill="#F6EBDD"
          stroke="#E89B48"
          strokeWidth="2"
        />

        {/* Star Sparkle Rays */}
        <line x1="250" y1="180" x2="250" y2="190" stroke="#E89B48" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="247" x2="250" y2="257" stroke="#E89B48" strokeWidth="2" strokeLinecap="round" />
        <line x1="218" y1="218" x2="228" y2="218" stroke="#E89B48" strokeWidth="2" strokeLinecap="round" />
        <line x1="267" y1="218" x2="277" y2="218" stroke="#E89B48" strokeWidth="2" strokeLinecap="round" />

        {/* Clover Stems Around the Star */}
        <circle cx="215" cy="245" r="5" fill="#4A6B53" />
        <circle cx="222" cy="242" r="5" fill="#4A6B53" />
        <circle cx="218" cy="250" r="5" fill="#4A6B53" />

        <circle cx="280" cy="248" r="5" fill="#4A6B53" />
        <circle cx="288" cy="244" r="5" fill="#4A6B53" />
        <circle cx="285" cy="253" r="5" fill="#4A6B53" />
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
        <rect width="500" height="300" rx="8" fill="#201C2B" />

        {/* Ambient Cloud Haze */}
        <circle cx="160" cy="180" r="80" fill="rgba(152, 75, 96, 0.15)" filter="blur(25px)" />
        <circle cx="340" cy="160" r="90" fill="rgba(181, 138, 82, 0.18)" filter="blur(25px)" />

        {/* Big Cloud Fluff Bed */}
        <path
          d="M 120 230 C 100 230 80 200 110 170 C 110 130 160 110 200 130 C 230 90 300 90 330 130 C 370 120 410 150 400 190 C 430 220 390 250 360 240 C 320 260 160 260 120 230 Z"
          fill="#312B3E"
          stroke="rgba(246, 235, 221, 0.25)"
          strokeWidth="1.5"
        />

        {/* Golden Dream Thread Ribbon */}
        <path
          d="M 140 180 Q 210 120 250 170 T 360 150"
          stroke="#E89B48"
          strokeWidth="3"
          strokeDasharray="6 4"
        />

        {/* Glowing Pocket Dream Core */}
        <circle cx="250" cy="170" r="28" fill="#F6EBDD" />
        <circle cx="250" cy="170" r="42" fill="rgba(232, 155, 72, 0.35)" filter="blur(6px)" />
        <text x="250" y="176" fill="#984B60" fontSize="18" textAnchor="middle" fontFamily="Georgia, serif">✦</text>

        {/* Dream Sparks */}
        <text x="210" y="140" fill="#E89B48" fontSize="12">✧</text>
        <text x="290" y="130" fill="#D9A7A6" fontSize="14">✦</text>
        <text x="230" y="215" fill="#E89B48" fontSize="11">✧</text>
        <text x="280" y="210" fill="#F6EBDD" fontSize="12">✦</text>
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
        <rect width="500" height="300" rx="8" fill="#18222F" />

        {/* Window Pane Framing */}
        <rect x="70" y="30" width="360" height="230" rx="4" stroke="#B58A52" strokeWidth="2" fill="#131B26" />
        <line x1="250" y1="30" x2="250" y2="260" stroke="#B58A52" strokeWidth="2" />
        <line x1="70" y1="145" x2="430" y2="145" stroke="#B58A52" strokeWidth="2" />

        {/* Windowsill Base */}
        <rect x="50" y="260" width="400" height="24" rx="2" fill="#2E2422" stroke="#B58A52" strokeWidth="1" />

        {/* Moon Owl Silhouette Outside */}
        <ellipse cx="170" cy="115" rx="26" ry="32" fill="#253549" stroke="rgba(246, 235, 221, 0.4)" strokeWidth="1" />
        <circle cx="160" cy="105" r="7" fill="#E89B48" />
        <circle cx="180" cy="105" r="7" fill="#E89B48" />
        <circle cx="160" cy="105" r="3" fill="#131B26" />
        <circle cx="180" cy="105" r="3" fill="#131B26" />
        <polygon points="168,112 172,112 170,118" fill="#B58A52" />

        {/* Little Starry Lantern Placed on Sill */}
        <rect x="310" y="200" width="30" height="50" rx="4" fill="#2A1E1E" stroke="#E89B48" strokeWidth="1.5" />
        <circle cx="325" cy="225" r="14" fill="#E89B48" opacity="0.8" />
        <circle cx="325" cy="225" r="26" fill="rgba(232, 155, 72, 0.25)" filter="blur(6px)" />
        <path d="M 320 200 L 320 185 Q 325 180 330 185 L 330 200" stroke="#E89B48" strokeWidth="1.5" fill="none" />

        {/* Night Whispers Sound Waves */}
        <path d="M 210 110 Q 225 105 235 115" stroke="rgba(217, 167, 166, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M 205 100 Q 225 95 240 108" stroke="rgba(217, 167, 166, 0.35)" strokeWidth="1.5" fill="none" />
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
        <rect width="500" height="300" rx="8" fill="#1C1827" />

        {/* Nursery Gable Roof Outline */}
        <polygon points="250,35 70,140 430,140" fill="#292135" stroke="#B58A52" strokeWidth="2" />
        <rect x="110" y="140" width="280" height="135" fill="#201A2B" stroke="#B58A52" strokeWidth="1.5" />

        {/* Archival Nursery Signboard */}
        <rect x="160" y="90" width="180" height="42" rx="4" fill="#382B2A" stroke="#E89B48" strokeWidth="1.5" />
        <text x="250" y="110" fill="#F6EBDD" fontSize="12" fontFamily="Georgia, serif" textAnchor="middle" fontWeight="bold">
          MIDNIGHT NURSERY
        </text>
        <text x="250" y="124" fill="#D9A7A6" fontSize="9" fontFamily="Courier, monospace" textAnchor="middle">
          Sector 7 · Dream Workshop
        </text>

        {/* Pip's Signature Pink Bow on Sign */}
        <path d="M 242 85 C 235 78 226 88 238 90 Z" fill="#D9A7A6" stroke="#984B60" strokeWidth="0.8" />
        <path d="M 258 85 C 265 78 274 88 262 90 Z" fill="#D9A7A6" stroke="#984B60" strokeWidth="0.8" />
        <circle cx="250" cy="88" r="3" fill="#984B60" />

        {/* Warm Golden Doorway Light */}
        <rect x="220" y="180" width="60" height="95" rx="30 30 0 0" fill="#F6EBDD" stroke="#B58A52" strokeWidth="1.5" />
        <rect x="220" y="180" width="60" height="95" rx="30 30 0 0" fill="radial-gradient(circle, #E89B48 0%, #B58A52 80%)" opacity="0.85" />
        <circle cx="250" cy="220" r="45" fill="rgba(232, 155, 72, 0.45)" filter="blur(14px)" />

        {/* Nursery Chimney with Sleepy Cloud Puff */}
        <rect x="330" y="55" width="28" height="45" fill="#382B2A" stroke="#B58A52" strokeWidth="1" />
        <circle cx="344" cy="40" r="10" fill="rgba(246, 235, 221, 0.6)" />
        <circle cx="352" cy="25" r="14" fill="rgba(246, 235, 221, 0.45)" />
        <circle cx="362" cy="12" r="18" fill="rgba(246, 235, 221, 0.3)" />
      </svg>
    ),
  },
];

export default function OriginStory() {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const current = SCENES[activeChapterIndex];

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev + 1) % SCENES.length);
  };

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev - 1 + SCENES.length) % SCENES.length);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveChapterIndex((index + 1) % SCENES.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveChapterIndex((index - 1 + SCENES.length) % SCENES.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveChapterIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveChapterIndex(SCENES.length - 1);
    }
  };

  return (
    <div className="origin-story-theatre">
      {/* Main Illustrated Scene Stage */}
      <div
        id="origin-scene-panel"
        role="tabpanel"
        aria-labelledby={`origin-chapter-tab-${current.id}`}
        className="story-scene-display"
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
              className="btn btn-secondary btn-sm"
              onClick={handlePrev}
              aria-label="Previous Chapter"
            >
              <span>← Previous Chapter</span>
            </button>

            <span className="story-counter-badge">
              Chapter {activeChapterIndex + 1} of {SCENES.length}
            </span>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleNext}
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
          className="story-nav-arrow"
          onClick={handlePrev}
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
          className="story-nav-arrow"
          onClick={handleNext}
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
              onClick={() => setActiveChapterIndex(idx)}
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
