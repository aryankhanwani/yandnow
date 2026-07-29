"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   ROTATING TYPEWRITER
   ============================================================ */
const ROTATING_PHRASES = [
  "for Enterprises",
  "at Scale",
  "with Outcomes",
  "for Industry",
  "That Deliver",
  "with Impact",
];

const TYPING_SPEED      = 60;
const ERASE_SPEED       = 32;
const PAUSE_AFTER_TYPE  = 2600;
const PAUSE_AFTER_ERASE = 380;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed]     = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping]       = useState(true);
  const [started, setStarted]         = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 950);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const phrase = phrases[phraseIndex];
    const clear = () => { if (timer.current) clearTimeout(timer.current); };

    if (isTyping) {
      if (displayed.length < phrase.length) {
        timer.current = setTimeout(
          () => setDisplayed(phrase.slice(0, displayed.length + 1)),
          TYPING_SPEED
        );
      } else {
        timer.current = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          ERASE_SPEED
        );
      } else {
        timer.current = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASE);
      }
    }
    return clear;
  }, [started, displayed, isTyping, phraseIndex, phrases]);

  return { displayed, isTyping };
}

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ============================================================
   HERO SECTION — Sticky-scroll video expansion
   ─────────────────────────────────────────────────────────────

   DOM structure:
   ┌─────────────────────────────────────────┐
   │  <div id="hero-text">                   │  ← normal flow, white bg
   │    Eyebrow / H1 / sub / CTAs            │
   │  </div>                                 │
   │                                         │
   │  <div id="hero-wrapper" ref={wrapperRef}│  ← sticky zone
   │    height = 100vh + BUDGET_PX           │
   │                                         │
   │    <div style="sticky; top:0; h:100vh"> │  ← pins here while user scrolls
   │       <div video-box />                 │     video expands 0→fullscreen
   │    </div>                               │
   │  </div>                                 │
   └─────────────────────────────────────────┘

   Progress = (-wrapper.top) / BUDGET_PX
   • At rest (top = 0):       progress = 0  → video is a padded card
   • After scrolling BUDGET:  progress = 1  → video is fullscreen
   • Past wrapper bottom:     sticky unsticks, next sections scroll up naturally

   BUDGET_VH = 1.2 → the video goes fullscreen after scrolling 1.2 viewport
   heights through the sticky zone (= ~4-5 Lenis wheel ticks, feels like
   "3-4 scrolls" to the user).
   ============================================================ */

const BUDGET_VH = 1.2; // viewport-heights of scroll to reach fullscreen

/* Navbar uses max-w-6xl = 1152px (same as container max-width) */
const NAV_MAX_W = 1152;

export default function HeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);

  const [visible,  setVisible]  = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1
  /* Viewport dims — updated on resize so insets stay correct */
  const [dims, setDims] = useState({ vw: 1440, vh: 900 });

  const { displayed, isTyping } = useTypewriter(ROTATING_PHRASES);

  /* ── Entrance animation ──────────────────────────────────── */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* ── Video autoplay ──────────────────────────────────────── */
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  /* ── Track viewport dimensions ──────────────────────────── */
  useEffect(() => {
    const update = () => setDims({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Scroll-driven progress ──────────────────────────────── */
  useEffect(() => {
    const compute = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      /* wrapper.getBoundingClientRect().top goes from 0 (when wrapper just
         enters the viewport from below) to negative (as we scroll into it).
         The budget is BUDGET_VH * vh, which is the "travel distance". */
      const { top } = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const budgetPx = BUDGET_VH * vh;

      // scrolled = how many px into the sticky zone we are (0 → budgetPx)
      const scrolled = -top;
      const raw = budgetPx > 0 ? scrolled / budgetPx : 0;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    return () => window.removeEventListener("scroll", compute);
  }, []);

  /* ── Derived visual values ───────────────────────────────── */
  const p = ease(progress);

  // Text fades out in first 35% of scroll travel
  const textOpacity = Math.max(0, 1 - (progress / 0.35) * 1.5);

  /*
   * Video box insets at rest — match the navbar width & maintain 16:9 ratio.
   *
   * sideRest mirrors the navbar's max-width centering.
   * The sticky shell sits directly below the text block in document flow —
   * its top edge is already at the bottom of the hero text on every screen.
   * So topRest is just a small breathing gap (VIDEO_GAP) from the shell's
   * top edge to the video card. Clamped so the card always fits on short
   * viewports (e.g. landscape mobile).
   */
  const { vw, vh } = dims;
  const sideRest   = Math.max(16, (vw - NAV_MAX_W) / 2);  // mirrors navbar centering
  const widthRest  = vw - 2 * sideRest;                    // = NAV_MAX_W on wide screens
  const heightRest = widthRest * (9 / 16);                 // 16:9
  const VIDEO_GAP  = 24;                                    // px gap: shell top → video card
  const topRest    = Math.min(VIDEO_GAP, Math.max(0, vh - heightRest - VIDEO_GAP));
  const bottomRest = Math.max(0, vh - topRest - heightRest);

  const insetSide   = lerp(sideRest,   0, p);
  const insetTop    = lerp(topRest,    0, p);
  const insetBottom = lerp(bottomRest, 0, p);
  const radius      = lerp(16, 0, p);

  // White bg overlay on sticky shell fades away as video fills it
  const shellBg = Math.max(0, 1 - p * 5);

  return (
    /* Root wrapper — white background for the entire hero zone */
    <div style={{ background: "#ffffff" }} id="hero-section-root">

      {/* ══ TEXT BLOCK — normal flow, scrolls up naturally ══════════ */}
      <div
        id="hero"
        aria-label="Hero — Y&Now Workforce Capability Solutions"
        style={{
          position: "relative",
          overflow: "hidden",
          zIndex: 2,
          background: "#ffffff",
        }}
      >
        {/* Subtle bg orbs */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
        >
          <div
            className="hero-orb-1"
            style={{
              position: "absolute", top: "-12rem", left: "-10rem",
              width: "700px", height: "700px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(46,49,146,0.055) 0%, transparent 65%)",
            }}
          />
          <div
            className="hero-orb-2"
            style={{
              position: "absolute", top: "-6rem", right: "-6rem",
              width: "600px", height: "600px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(39,170,226,0.065) 0%, transparent 65%)",
            }}
          />
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.018 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2E3192" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Text content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "9.5rem 1.5rem 3.5rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 delay-[100ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="block w-8 h-px bg-secondary-400 hero-line-expand" />
            <span className="text-secondary-500 text-xs font-semibold tracking-[0.18em] uppercase">
              Future-Skills EdTech · BroadArks Technology Pvt. Ltd.
            </span>
            <span className="block w-8 h-px bg-secondary-400 hero-line-expand" />
          </div>

          {/* H1 */}
          <h1
            className="font-heading font-800 text-ink leading-[1.13] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", maxWidth: "1220px" }}
          >
            <span
              className={`block transition-all duration-700 delay-[200ms] ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Workforce Capability Solutions
            </span>
            <span
              className={`block transition-all duration-700 delay-[380ms] ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="hero-highlight whitespace-nowrap">{displayed}</span>
              <span
                className={`inline-block w-[2px] h-[0.82em] bg-secondary-400 ml-[2px] align-middle rounded-sm ${
                  isTyping ? "animate-blink" : "opacity-0"
                }`}
              />
              <span
                className={`text-ink transition-all duration-700 delay-[500ms] ease-out ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                {" "}Across India
              </span>
            </span>
          </h1>

          {/* Sub-heading */}
          <p
            className={`mt-5 text-neutral-500 leading-relaxed font-body font-400 transition-all duration-700 delay-[650ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", maxWidth: "520px" }}
          >
            Industry-aligned capability programmes for enterprises, CSR sponsors,
            defence, and individual learners — measured end-to-end and integrated
            with your HRMS and ERP.
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-[800ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <CtaButton
              href="/corporate"
              id="hero-cta-primary"
              variant="primary"
              className="px-7 py-3.5"
            >
              Explore Corporate Solutions
            </CtaButton>
            <CtaButton
              href="/contact-us"
              id="hero-cta-secondary"
              variant="secondary"
              className="px-7 py-3.5"
            >
              Talk to Our Team
            </CtaButton>
          </div>
        </div>
      </div>

      {/* ══ STICKY SCROLL ZONE — video expands as user scrolls ══════ */}
      {/*
          Height = 100vh (sticky shell) + BUDGET_VH * 100vh (scroll travel)
          Once the user scrolls through the budget, the wrapper exits the
          viewport and sticky unsticks — next sections flow up naturally.
      */}
      <div
        id="hero-wrapper"
        ref={wrapperRef}
        style={{
          position: "relative",
          height: `calc(100vh + ${BUDGET_VH * 100}vh)`,
          /* No background here — let the sticky shell handle it */
        }}
      >
        {/* ── STICKY SHELL — height:100vh, sticks at top:0 ── */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            /* White bg that fades away as the video expands to fullscreen */
            background: `rgba(255,255,255,${shellBg})`,
            zIndex: 10,
          }}
        >
          {/* ── VIDEO BOX — absolute inside sticky shell ───────── */}
          {/*
              p=0: navbar-width wide, 16:9 tall, vertically centred
              p=1: all insets = 0, fills the full sticky shell (viewport)
          */}
          <div
            style={{
              position: "absolute",
              top:    `${insetTop}px`,
              left:   `${insetSide}px`,
              right:  `${insetSide}px`,
              bottom: `${insetBottom}px`,
              borderRadius: `${radius}px`,
              overflow: "hidden",
              boxShadow: p < 0.06
                ? "0 4px 6px rgba(20,21,46,0.04), 0 20px 48px rgba(20,21,46,0.10), 0 48px 80px rgba(46,49,146,0.06)"
                : "none",
              border: p < 0.06 ? "1px solid #e8ecf2" : "none",
              willChange: "top, left, right, bottom, border-radius",
            }}
          >
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Dark overlay that materialises as video expands */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(160deg, rgba(10,12,44,0.75) 0%, rgba(10,12,44,0.50) 60%, rgba(10,12,44,0.38) 100%)",
                opacity: p,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator — fades with text ─────────────────── */}
      <div
        className={`pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 delay-[1200ms] ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 50, opacity: textOpacity * 0.55 }}
      >
        <span className="text-neutral-400 text-[10px] tracking-[0.15em] uppercase font-medium">
          Scroll
        </span>
        <ChevronDown size={18} className="text-neutral-400 animate-bounce" />
      </div>
    </div>
  );
}
