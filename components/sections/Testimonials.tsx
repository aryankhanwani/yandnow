"use client";

import { useState, useEffect, useRef } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/* ============================================================
   TESTIMONIALS — auto-rotating featured quotes.
   ------------------------------------------------------------
   ⚠️  [REPLACE BEFORE PUBLISHING] Quotes use generic sector /
   role attributions as placeholders. The content doc (Section 5)
   requires verified, approved client testimonials (name ·
   designation · company · photo). Swap the TESTIMONIALS array
   with confirmed copy — do not attribute unverified quotes to
   named brands.
   ============================================================ */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Y&Now didn't just deliver training — they tied every programme to a performance signal our leadership could actually track. For the first time, L&D showed up in our operational numbers.",
    name: "L&D Director",
    role: "Fortune 500 Manufacturing Enterprise",
    initials: "LD",
  },
  {
    quote:
      "The impact reporting was rigorous enough for our CSR committee and our board. Independent monitoring, transparent fund utilisation, real employment outcomes — exactly what we needed.",
    name: "Head of CSR",
    role: "Leading Energy Company",
    initials: "HC",
  },
  {
    quote:
      "Their AR/VR simulations and role-based assessments cut our time-to-competence on the shop floor dramatically. The platform integrated with our HRMS without friction.",
    name: "Plant HR Lead",
    role: "Precision Engineering Firm",
    initials: "PH",
  },
  {
    quote:
      "From dealer networks to showroom teams, Y&Now built customer-excellence capability at a scale we couldn't have reached alone — and measured every bit of it.",
    name: "VP, Human Resources",
    role: "National Retail Brand",
    initials: "VP",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => {
    setDir(next > index || (index === TESTIMONIALS.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(() => {
      setDir(1);
      setIndex((p) => (p + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, reduce]);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client Voices"
          title="Trusted by the teams who"
          highlight="measure results"
          className="mb-14"
        />

        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white p-6 shadow-[0_20px_50px_rgba(20,21,46,0.07)] sm:p-10 lg:p-16">
            <Quote className="absolute right-6 top-6 h-14 w-14 text-primary-50 sm:right-10 sm:top-10 lg:right-12 lg:top-12" strokeWidth={1.5} fill="currentColor" />

            <div className="relative flex h-[360px] flex-col justify-center sm:h-[300px] lg:h-[280px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <blockquote className="font-heading text-lg font-500 leading-relaxed text-ink sm:text-2xl lg:text-[1.75rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="block text-sm text-neutral-500">{t.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-primary-300 hover:text-primary-600"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-primary-500" : "w-2 bg-neutral-300 hover:bg-neutral-400",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-primary-300 hover:text-primary-600"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
