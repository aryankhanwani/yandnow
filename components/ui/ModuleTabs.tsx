"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ============================================================
   ModuleTabs - the platform's three modules, one at a time.

   A tab set is its own layout shape, which is why the platform
   page can carry Assess / Learn / Perform here without three
   near-identical split sections running back to back.

   Rebuilt for the density pass: no cross-fade on switch, no
   per-item entrance on the feature list, no capitals, no card
   shadow, no tint gradient. Switching tabs is interaction
   feedback, so the only thing that moves is the active fill.

   Keyboard: arrow keys move between tabs and select as they go,
   Home and End jump to the ends - the standard tabs pattern.
   ============================================================ */

export interface ModuleTab {
  tag: string;
  title: string;
  features: string[];
  note?: string;
  image: string;
  imageAlt: string;
}

export default function ModuleTabs({ modules }: { modules: ModuleTab[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const next = (index + modules.length) % modules.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(modules.length - 1);
        break;
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Platform modules"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {modules.map((m, i) => {
          const isActive = i === active;
          return (
            <button
              key={m.tag}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              ref={(node) => {
                tabsRef.current[i] = node;
              }}
              onClick={() => setActive(i)}
              className={cn(
                "h-12 rounded-lg px-6 text-body-sm font-700 transition-colors transition-house",
                isActive
                  ? "bg-brand text-white"
                  : "bg-surface-alt text-ink hover:bg-brand-soft",
              )}
            >
              {m.tag}
            </button>
          );
        })}
      </div>

      {modules.map((m, i) => (
        <div
          key={m.tag}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="gap-heading grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-alt lg:aspect-video">
            <Image
              src={m.image}
              alt={m.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-h3 text-ink">{m.title}</h3>
            <ul className="mt-6 border-t border-hairline">
              {m.features.map((feature) => (
                <li
                  key={feature}
                  className="border-b border-hairline py-4 text-body text-ink"
                >
                  {feature}
                </li>
              ))}
            </ul>
            {m.note && <p className="mt-6 text-caption">{m.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
