"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { type StepItem } from "@/components/ui/StepExplorer";

/* ============================================================
   StepScroller — scroll-driven process walk-through.

   Left: a sticky visual panel that CROSS-FADES between steps.
   Right: the steps laid out vertically; each one activates as it
   scrolls through the centre of the viewport (IntersectionObserver
   with a thin centre band), which drives the left visual. The
   active step is highlighted; the others dim back. A connecting
   rail threads the numbered nodes so the sequence reads as a
   process, not a list.

   Reduced-motion → visual swaps instantly (no fade); steps still
   activate on scroll.
   ============================================================ */

const DEFAULT_TINT = "46,49,146";
const EASE = [0.16, 1, 0.3, 1] as const;

function Visual({
  step,
  index,
  total,
}: {
  step: StepItem;
  index: number;
  total: number;
}) {
  const tint = step.tint ?? DEFAULT_TINT;

  if (step.image) {
    return (
      <div className="relative flex h-full items-end overflow-hidden rounded-3xl border border-black/5 bg-primary-950 p-8 md:p-10">
        <Image src={step.image} alt="" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/5 to-transparent" />
        <div className="relative w-full">
          <h3 className="font-heading text-2xl font-700 leading-tight text-white">
            {step.label}
          </h3>
          <div className="mt-5 flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{ backgroundColor: i <= index ? "#fff" : "rgba(255,255,255,0.3)" }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-black/5 p-8 md:p-10"
      style={{
        background: `linear-gradient(158deg, rgba(${tint},0.18) 0%, rgba(${tint},0.05) 55%, rgba(255,255,255,0.9) 100%)`,
      }}
    >
      {/* Watermark number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-8 select-none font-heading text-[12rem] font-800 leading-none"
        style={{ color: `rgb(${tint})`, opacity: 0.08 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Top — stage chip + counter */}
      <div className="relative flex items-center justify-between">
        <span
          className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-700 uppercase tracking-[0.16em] backdrop-blur-sm"
          style={{ color: `rgb(${tint})` }}
        >
          {step.kicker ?? `Stage ${index + 1}`}
        </span>
        <span className="font-heading text-sm font-700 text-ink/40">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Middle — large icon badge */}
      <div className="relative flex flex-1 items-center justify-center py-8">
        <span
          className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-white/85 shadow-[0_18px_44px_-18px_rgba(20,21,46,0.4)] ring-1 ring-white/30 backdrop-blur-sm [&_svg]:h-11 [&_svg]:w-11"
          style={{ color: `rgb(${tint})` }}
        >
          {step.icon}
        </span>
      </div>

      {/* Bottom — label + progress segments */}
      <div className="relative">
        <h3 className="font-heading text-2xl font-700 leading-tight text-ink">
          {step.label}
        </h3>
        <div className="mt-5 flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 flex-1 rounded-full transition-colors duration-500"
              style={{
                backgroundColor: i <= index ? `rgb(${tint})` : "rgba(20,21,46,0.10)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StepScroller({
  steps,
  className,
}: {
  steps: StepItem[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        }
      },
      // Thin band across the vertical centre — the step crossing it wins.
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div className={cn("grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14", className)}>
      {/* LEFT — visual pinned to the vertical centre of the viewport
          (only the right column scrolls). The sliding reel stacks the
          panels and springs up to the active one. */}
      <div className="relative">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="relative h-[360px] w-full overflow-hidden rounded-3xl sm:h-[440px] lg:h-[540px]">
            <motion.div
              className="absolute inset-0"
              animate={{ y: `-${active * 100}%` }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 34, mass: 0.9 }
              }
            >
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  aria-hidden={i !== active}
                  className="absolute inset-x-0 h-full"
                  style={{ top: `${i * 100}%` }}
                >
                  <Visual step={s} index={i} total={steps.length} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* RIGHT — steps that activate on scroll */}
      <ol className="relative">
        {/* Connecting rail */}
        <span
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-neutral-200 lg:left-[23px]"
        />
        {steps.map((s, i) => {
          const isActive = i === active;
          const sTint = s.tint ?? DEFAULT_TINT;
          return (
            <li
              key={s.label}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="relative py-8 first:pt-0 last:pb-0 lg:flex lg:min-h-[72vh] lg:items-center lg:py-0"
            >
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="flex w-full gap-5"
              >
                {/* Numbered node */}
                <span
                  className={cn(
                    "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white text-sm font-800 transition-all duration-400 lg:h-12 lg:w-12",
                  )}
                  style={{
                    borderColor: isActive ? `rgb(${DEFAULT_TINT})` : "#e0e6ef",
                    color: isActive ? "#fff" : "#8e9cb8",
                    backgroundColor: isActive ? `rgb(${DEFAULT_TINT})` : "#fff",
                    boxShadow: isActive ? `0 10px 26px -10px rgba(${DEFAULT_TINT},0.6)` : "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Card */}
                <div
                  className={cn(
                    "flex-1 rounded-2xl border p-5 transition-all duration-400 lg:p-6",
                    isActive
                      ? "border-transparent bg-white shadow-[0_20px_50px_-28px_rgba(20,21,46,0.4)]"
                      : "border-transparent bg-transparent",
                  )}
                  style={isActive ? { borderColor: `rgb(${sTint})` } : undefined}
                >
                  {s.kicker && (
                    <span
                      className="block text-[11px] font-700 uppercase tracking-[0.16em] transition-colors duration-400"
                      style={{ color: isActive ? `rgb(${sTint})` : "#8e9cb8" }}
                    >
                      {s.kicker}
                    </span>
                  )}
                  <h3
                    className={cn(
                      "mt-1.5 font-heading text-xl font-700 leading-tight transition-colors duration-400 lg:text-[1.75rem]",
                      isActive ? "text-ink" : "text-neutral-500",
                    )}
                  >
                    {s.label}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[15px] leading-relaxed transition-colors duration-400",
                      isActive ? "text-neutral-600" : "text-neutral-400",
                    )}
                  >
                    {s.body}
                  </p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
