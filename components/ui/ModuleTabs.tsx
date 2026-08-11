"use client";

import { type ReactNode, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
   ModuleTabs — tabbed product-module explorer.
   Built for Our Platform's Assess → Learn → Perform modules:
   a segmented tab bar with an animated active pill, and a
   feature panel that cross-fades as you switch modules.
   Deliberately different from the homepage PlatformPreview
   (three static mock cards) — this one is one focused, driven
   panel. Respects prefers-reduced-motion.
   ============================================================ */

export interface ModuleTab {
  tag: string;
  title: string;
  /** Pre-rendered icon element (pass e.g. <ClipboardCheck size={24} />). */
  icon: ReactNode;
  /** "r,g,b" accent tint. */
  tint: string;
  features: string[];
  note?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ModuleTabs({ modules }: { modules: ModuleTab[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Platform modules"
        className="mx-auto mb-8 flex w-full max-w-xl gap-1.5 rounded-2xl border border-[#e8ecf2] bg-white p-1.5 shadow-sm"
      >
        {modules.map((m, i) => {
          const isActive = i === active;
          return (
            <button
              key={m.tag}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex-1 rounded-xl px-3 py-2.5 text-sm font-700 transition-colors duration-300",
                isActive ? "text-white" : "text-neutral-600 hover:text-ink",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="module-tab-pill"
                  aria-hidden
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: `rgb(${m.tint})` }}
                  transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                />
              )}
              <span className="relative">{m.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="relative overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white p-8 shadow-[0_18px_50px_-30px_rgba(20,21,46,0.4)] lg:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(70% 60% at 0% 0%, rgba(${mod.tint},0.08) 0%, transparent 55%)`,
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
            <div className="mb-6 flex items-center gap-4">
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6"
                style={{ color: `rgb(${mod.tint})`, backgroundColor: `rgba(${mod.tint},0.1)` }}
              >
                {mod.icon}
              </span>
              <div>
                <span
                  className="block text-[11px] font-700 uppercase tracking-[0.16em]"
                  style={{ color: `rgb(${mod.tint})` }}
                >
                  {mod.tag}
                </span>
                <h3 className="font-heading text-xl font-700 leading-tight text-ink lg:text-2xl">
                  {mod.title}
                </h3>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {mod.features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: reduce ? 0 : 0.05 + i * 0.04, ease: EASE }}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700"
                >
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                  {f}
                </motion.li>
              ))}
            </ul>

            {mod.note && (
              <p className="mt-6 inline-flex rounded-lg bg-surface px-3 py-2 text-xs font-500 text-neutral-500">
                {mod.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
