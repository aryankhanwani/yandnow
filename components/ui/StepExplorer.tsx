"use client";

import { type ReactNode, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
   StepExplorer - interactive process walk-through.
   A vertical rail of numbered, clickable steps on the left;
   an animated detail panel on the right that swaps as you
   select a step. Distinct from the homepage HowWeWork timeline
   (which shows every description at once) - here the visitor
   drives the reveal one step at a time.

   Desktop: rail (left) + detail panel (right).
   Mobile:  horizontal scrollable number chips + panel below.
   Respects prefers-reduced-motion.
   ============================================================ */

export interface StepItem {
  /** Short label, e.g. "Assess" or "Needs Assessment". */
  label: string;
  /** Optional kicker above the title, e.g. "Stage 1". */
  kicker?: string;
  /** Detail body shown in the panel. */
  body: string;
  /** Pre-rendered icon element (pass e.g. <ClipboardCheck size={24} />). */
  icon?: ReactNode;
  /** "r,g,b" accent tint. Defaults to brand primary. */
  tint?: string;
  /** Optional contextual photograph used by visual process components. */
  image?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const DEFAULT_TINT = "46,49,146";

export default function StepExplorer({
  steps,
  className,
}: {
  steps: StepItem[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const step = steps[active];
  const tint = step.tint ?? DEFAULT_TINT;

  return (
    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10", className)}>
      {/* Step rail */}
      <ol
        className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
        role="tablist"
        aria-label="Process steps"
      >
        {steps.map((s, i) => {
          const isActive = i === active;
          const sTint = s.tint ?? DEFAULT_TINT;
          return (
            <li key={s.label} className="flex-shrink-0 lg:flex-shrink">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300",
                  isActive
                    ? "border-transparent bg-white shadow-[0_14px_34px_-18px_rgba(46,49,146,0.4)]"
                    : "border-[#e8ecf2] bg-white/60 hover:border-primary-200/70 hover:bg-white",
                )}
                style={isActive ? { borderColor: `rgb(${sTint})` } : undefined}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                    isActive ? "text-white" : "text-neutral-500",
                  )}
                  style={{
                    backgroundColor: isActive ? `rgb(${sTint})` : "#eef1f6",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  {s.kicker && (
                    <span className="block text-[10px] font-700 uppercase tracking-[0.14em] text-secondary-500">
                      {s.kicker}
                    </span>
                  )}
                  <span
                    className={cn(
                      "block truncate text-sm font-700 transition-colors",
                      isActive ? "text-ink" : "text-neutral-600",
                    )}
                  >
                    {s.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Detail panel */}
      <div className="relative overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white p-8 shadow-[0_18px_50px_-30px_rgba(20,21,46,0.4)] lg:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(80% 70% at 100% 0%, rgba(${tint},0.07) 0%, transparent 60%)`,
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative"
          >
            <div className="mb-5 flex items-center gap-4">
              {step.icon && (
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6"
                  style={{ color: `rgb(${tint})`, backgroundColor: `rgba(${tint},0.1)` }}
                >
                  {step.icon}
                </span>
              )}
              <div>
                {step.kicker && (
                  <span className="block text-[11px] font-700 uppercase tracking-[0.16em] text-secondary-500">
                    {step.kicker}
                  </span>
                )}
                <h3 className="font-heading text-xl font-700 leading-tight text-ink lg:text-2xl">
                  {step.label}
                </h3>
              </div>
            </div>
            <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-600">{step.body}</p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="relative mt-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              onClick={() => setActive(i)}
              className="group py-1.5"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-8" : "w-2.5 bg-neutral-200 group-hover:bg-neutral-300",
                )}
                style={i === active ? { backgroundColor: `rgb(${tint})` } : undefined}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setActive((a) => (a + 1) % steps.length)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-600 text-primary-600 transition-colors hover:text-primary-700"
          >
            Next
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
