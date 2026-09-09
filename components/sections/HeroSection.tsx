"use client";

import { useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   ROTATING TYPEWRITER
   ============================================================ */
/* One phrase per audience the site routes to, so the headline
   itself previews the "Find Your Route" section below it. */
const ROTATING_PHRASES = [
  "for Your Team",
  "for Your Workforce",
  "for Your Community",
  "for Your School",
  "for Your Career",
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

/* ============================================================
   HERO SECTION
   ────────────────────────────────────────────────────────────
   Full-screen video hero. The programme footage fills the
   viewport rather than sitting in a card under the copy, so the
   page opens on the work itself instead of on white space.

   Legibility comes from two neutral scrims over the video: a
   vertical wash and a left-weighted gradient behind the column of
   text. Neither is tinted, so the footage reads as footage rather
   than as a blue-washed background plate.
   ============================================================ */
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div className="bg-ink">
      <section
        id="hero"
        aria-label="Hero: Discover the right route to grow with Y&Now"
        className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pb-20 pt-28 sm:pt-32"
      >
        {/* ══ BACKGROUND VIDEO ══════════════════════════════════ */}
        <video
          ref={videoRef}
          className="hero-video-zoom absolute inset-0 -z-10 h-full w-full object-cover"
          src="/hero-video-clean.mp4"
          poster="/hero-bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Scrims - neutral, not tinted. The footage keeps its own
            colour; the overlays only buy back the contrast the white
            copy needs, weighted to the left column where it sits. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,14,0.62) 0%, rgba(10,10,14,0.34) 38%, rgba(10,10,14,0.46) 72%, rgba(10,10,14,0.72) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,10,14,0.62) 0%, rgba(10,10,14,0.30) 45%, transparent 80%)",
          }}
        />
        {/* ══ CONTENT ═══════════════════════════════════════════ */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div
              className={`mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md transition-all duration-700 delay-[100ms] ease-out ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary-400" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 sm:text-[11px] sm:tracking-[0.18em]">
                Practical Learning · Real Outcomes
              </span>
            </div>

            {/* H1 - the rotating phrase is held on one line so the
                typewriter never reflows mid-word. */}
            {/* Each line is its own block so the balancer works on it
                alone, and neither line can leave a single word behind. */}
            <h1
              className="font-heading font-800 leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(1.95rem, 4.4vw, 3.5rem)" }}
            >
              <span
                className={`block balance-text transition-all duration-700 delay-[200ms] ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                Discover the Right Route
              </span>
              <span
                className={`block balance-text transition-all duration-700 delay-[380ms] ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                to Grow{" "}
                <span className="hero-highlight whitespace-nowrap">{displayed}</span>
                <span
                  className={`ml-[2px] inline-block h-[0.82em] w-[2px] rounded-sm bg-secondary-400 align-middle ${
                    isTyping ? "animate-blink" : "opacity-0"
                  }`}
                />
              </span>
            </h1>

            {/* Sub-heading */}
            <p
              className={`mt-6 max-w-xl pretty-text font-body font-400 leading-relaxed text-white/75 transition-all duration-700 delay-[650ms] ease-out ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ fontSize: "clamp(0.98rem, 2.6vw, 1.125rem)" }}
            >
              We help people and organisations build practical skills, grow with
              confidence, and stay ready for what comes next.
            </p>

            {/* CTAs */}
            <div
              className={`mt-9 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-[800ms] ease-out ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <CtaButton
                href="/corporate"
                id="hero-cta-primary"
                variant="primary"
                glassy
                className="px-7 py-3.5"
              >
                Explore corporate solutions
              </CtaButton>
              <CtaButton
                href="/learners-b2c"
                id="hero-cta-secondary"
                variant="secondary"
                glassy
                className="px-7 py-3.5"
              >
                Explore learning
              </CtaButton>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
