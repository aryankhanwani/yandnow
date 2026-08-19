"use client";

import { useEffect, useRef, useState } from "react";
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

/* ============================================================
   HERO SECTION
   ────────────────────────────────────────────────────────────
   Calm, static hero: eyebrow / H1 / sub / CTAs, then the product
   video sits below as a plain rounded card in normal document
   flow — no scroll-linked expansion, it just sits there.

   A soft blurred colour wash sits behind the very top of the
   section so the full-width nav (translucent while at rest)
   blends into it instead of floating on flat white.
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
    <div style={{ background: "#ffffff" }} id="hero-section-root">
      <div
        id="hero"
        aria-label="Hero — Y&Now Workforce Capability Solutions"
        style={{ position: "relative", overflow: "hidden", background: "#ffffff" }}
      >
        {/* Subtle bg orbs + top blur wash (behind the translucent nav) */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 -top-32 h-[460px] blur-[100px]"
            style={{
              background:
                "radial-gradient(55% 100% at 50% 0%, rgba(46,49,146,0.18) 0%, rgba(39,170,226,0.13) 45%, transparent 75%)",
            }}
          />
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
            style={{ fontSize: "clamp(0.75rem, 2.8vw, 1rem)", maxWidth: "640px" }}
          >
            <span className="block whitespace-nowrap">Industry-aligned programmes for every workforce.</span>
            <span className="block whitespace-nowrap">Measured outcomes, integrated with your systems.</span>
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

        {/* ══ PRODUCT VIDEO — static card, no scroll-linked effect ══ */}
        <div
          className={`relative z-[1] mx-auto max-w-6xl px-4 pb-20 transition-all duration-700 delay-[950ms] ease-out sm:px-6 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="overflow-hidden rounded-2xl border border-neutral-100 bg-white"
            style={{
              boxShadow:
                "0 4px 6px rgba(20,21,46,0.04), 0 20px 48px rgba(20,21,46,0.10), 0 48px 80px rgba(46,49,146,0.06)",
            }}
          >
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>


    </div>
  );
}
