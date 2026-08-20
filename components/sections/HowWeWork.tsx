"use client";

import { type ComponentType, useMemo, useRef, useState } from "react";
import { ClipboardCheckIcon } from "@/components/ui/clipboard-check";
import { GraduationCapIcon } from "@/components/ui/graduation-cap";
import { WrenchIcon } from "@/components/ui/wrench";
import { TrendingUpIcon } from "@/components/ui/trending-up";
import { RefreshCWIcon } from "@/components/ui/refresh-cw";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import InViewIcon from "@/components/ui/InViewIcon";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/** Animated icons expose only size/className to callers. */
type AnimatedIcon = ComponentType<{ size?: number; className?: string }>;

/* ============================================================
   HOW WE WORK - 5-step framework as an interactive vertical
   timeline. Alternating sides on desktop, single rail on
   mobile, with a scroll-drawn progress line. The cards are
   presentational: nodes light up as the scroll-drawn fill
   reaches them. Copy: Final Copy, section 4.
   ============================================================ */

interface Step {
  id: string;
  num: string;
  label: string;
  icon: AnimatedIcon;
  tint: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: "assess",
    num: "01",
    label: "Assess",
    icon: ClipboardCheckIcon,
    tint: "46,49,146",
    description:
      "We map competency across roles and levels to pinpoint the exact skill gaps.",
  },
  {
    id: "train",
    num: "02",
    label: "Train",
    icon: GraduationCapIcon,
    tint: "46,49,146",
    description:
      "Personalised learning paths (instructor-led, digital, AR/VR, and microlearning) close those gaps.",
  },
  {
    id: "apply",
    num: "03",
    label: "Apply",
    icon: WrenchIcon,
    tint: "46,49,146",
    description:
      "On-the-job tasks and live scenarios verify learning transfers to the workplace.",
  },
  {
    id: "perform",
    num: "04",
    label: "Perform",
    icon: TrendingUpIcon,
    tint: "46,49,146",
    description:
      "OKR tracking measures whether capability gains show up in real job performance.",
  },
  {
    id: "improve",
    num: "05",
    label: "Improve",
    icon: RefreshCWIcon,
    tint: "46,49,146",
    description:
      "Analytics from each cycle feed the next, in a continuous improvement loop.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function TimelineNode({ step, glow }: { step: Step; glow: boolean }) {
  const Icon = step.icon;
  return (
    <span
      aria-hidden
      className="absolute left-6 top-0 z-10 -translate-x-1/2 lg:left-1/2"
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-500",
          glow ? "scale-110 border-transparent" : "border-neutral-150",
        )}
        style={{
          borderColor: glow ? undefined : "#e8ecf2",
          backgroundColor: glow ? `rgb(${step.tint})` : undefined,
          boxShadow: glow
            ? `0 0 0 7px rgba(${step.tint},0.16), 0 8px 22px rgba(${step.tint},0.35)`
            : "0 6px 18px rgba(20,21,46,0.10)",
        }}
      >
        <InViewIcon>
          <Icon size={19} className={glow ? "text-white" : "text-primary-600"} />
        </InViewIcon>
      </span>
    </span>
  );
}

export default function HowWeWork() {
  const reduce = useReducedMotion();
  const [reachedIndex, setReachedIndex] = useState(-1);
  const railRef = useRef<HTMLDivElement>(null);

  /* Thresholds where the scroll-drawn fill "reaches" each node -
     evenly spaced across the rail, since nodes sit at even intervals. */
  const thresholds = useMemo(
    () => STEPS.map((_, i) => i / (STEPS.length - 1)),
    [],
  );

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    let idx = -1;
    for (let i = 0; i < thresholds.length; i++) {
      if (v >= thresholds[i]) idx = i;
    }
    setReachedIndex((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="how-we-work-heading"
          eyebrow="Our Framework"
          title="Five steps from capability gap to"
          highlight="measurable performance"
          subtitle="Every programme we design runs through the same rigorous cycle, ensuring your investment in L&D shows up as real business outcomes."
          className="mb-16"
        />

        <div ref={railRef} className="relative mx-auto max-w-4xl">
          {/* Rail - track + scroll-scrubbed fill */}
          <div className="absolute bottom-0 left-6 top-2 w-[2px] -translate-x-1/2 bg-neutral-150 lg:left-1/2" style={{ backgroundColor: "#e8ecf2" }} />
          <motion.div
            aria-hidden
            className="absolute left-6 top-2 w-[2px] -translate-x-1/2 origin-top rounded-full bg-primary-400 lg:left-1/2"
            style={{ bottom: 0, scaleY: reduce ? 1 : scrollYProgress }}
            transition={{ ease: EASE }}
          />

          <div className="space-y-10 lg:space-y-4">
            {STEPS.map((step, i) => {
              const even = i % 2 === 0;
              const glow = reduce || i <= reachedIndex;
              return (
                <div
                  key={step.id}
                  className="relative pl-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
                >
                  <TimelineNode step={step} glow={glow} />

                  <Reveal
                    y={20}
                    delay={i * 0.05}
                    className={cn(
                      "lg:py-6",
                      even ? "lg:col-start-1" : "lg:col-start-2 lg:row-start-1",
                    )}
                  >
                    <div
                      className={cn(
                        "group relative w-full overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white p-6 text-left transition-[border-color,box-shadow] duration-300 hover:border-primary-200/70 hover:shadow-[0_18px_44px_-20px_rgba(46,49,146,0.28)]",
                        even && "lg:text-right",
                      )}
                    >
                      {/* Calm blue-brand gradient wash that eases in on hover - no lift */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 via-secondary-50/50 to-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                      />
                      <div
                        className={cn(
                          "relative z-10 mb-2 flex items-center gap-2",
                          even && "lg:flex-row-reverse",
                        )}
                      >
                        <span className="text-[11px] font-bold tracking-widest text-primary-400">
                          STEP {step.num}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span className="text-lg font-800 uppercase tracking-wide text-primary-700 lg:text-xl">
                          {step.label}
                        </span>
                      </div>
                      <p className="relative z-10 text-[15px] leading-relaxed text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
