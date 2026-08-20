"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   ProcessSteps - a compact, horizontal row of process cards.
   Each card carries a large watermark step number, a tinted
   icon badge, a stage kicker, a short title, and a tight body.
   Cards inherit the cursor spotlight glow from SpotlightCard.
   ============================================================ */

export interface ProcessStep {
  /** Two-digit step number, e.g. "01". */
  num: string;
  /** Small label above the title, e.g. "Stage 01". */
  kicker?: string;
  label: string;
  /** Keep short - one line or two. */
  body: string;
  /** Pre-rendered icon element. */
  icon: ReactNode;
  /** "r,g,b" brand tint. */
  tint: string;
  /** Optional contextual photograph for the stage card. */
  image?: string;
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
      {steps.map((s) => (
        <StaggerItem key={s.label} className="relative h-full">
          <SpotlightCard className={s.image ? "p-0" : undefined}>
            {s.image ? (
              <>
                <div className="relative h-72 flex-shrink-0 overflow-hidden">
                  <Image src={s.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-heading text-xl font-700 leading-tight text-white">
                      {s.label}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 p-6">
                  <p className="text-sm leading-relaxed text-neutral-600">{s.body}</p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </SpotlightCard>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
