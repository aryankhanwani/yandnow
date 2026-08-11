"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   ProcessSteps — a compact, horizontal row of process cards.
   Each card carries a large watermark step number, a tinted
   icon badge, a stage kicker, a short title, and a tight body.
   On desktop the cards are threaded by a small arrow node that
   sits in the gap between them, so the row reads as a sequence
   rather than three unrelated tiles. Cards inherit the cursor
   spotlight glow from SpotlightCard.
   ============================================================ */

export interface ProcessStep {
  /** Two-digit step number, e.g. "01". */
  num: string;
  /** Small label above the title, e.g. "Stage 01". */
  kicker?: string;
  label: string;
  /** Keep short — one line or two. */
  body: string;
  /** Pre-rendered icon element. */
  icon: ReactNode;
  /** "r,g,b" brand tint. */
  tint: string;
}

export default function ProcessSteps({
  steps,
  className,
}: {
  steps: ProcessStep[];
  className?: string;
}) {
  return (
    <Stagger
      className={cn("grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6", className)}
      stagger={0.12}
    >
      {steps.map((s, i) => (
        <StaggerItem key={s.label} className="relative h-full">
          {/* Connector node in the gap (desktop only) */}
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute -right-[18px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8ecf2] bg-white text-primary-500 shadow-[0_6px_16px_-8px_rgba(20,21,46,0.4)] md:flex"
            >
              <ArrowRight size={15} strokeWidth={2.5} />
            </span>
          )}

          <SpotlightCard>
            {/* Watermark step number */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1 select-none font-heading text-[5.5rem] font-800 leading-none"
              style={{ color: `rgb(${s.tint})`, opacity: 0.08 }}
            >
              {s.num}
            </span>

            <span
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6"
              style={{ color: `rgb(${s.tint})`, backgroundColor: `rgba(${s.tint},0.1)` }}
            >
              {s.icon}
            </span>

            <span
              className="mt-6 block text-[11px] font-700 uppercase tracking-[0.16em]"
              style={{ color: `rgb(${s.tint})` }}
            >
              {s.kicker ?? `Step ${s.num}`}
            </span>
            <h3 className="mt-1.5 font-heading text-xl font-700 leading-tight text-ink">
              {s.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.body}</p>
          </SpotlightCard>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
