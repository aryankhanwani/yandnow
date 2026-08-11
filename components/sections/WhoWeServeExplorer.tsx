"use client";

import Image from "next/image";
import { useState } from "react";

export interface AudienceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
}

export default function WhoWeServeExplorer({ items }: { items: AudienceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div role="tablist" aria-label="Who Y&Now serves" className="border-t border-neutral-100">
        {items.map((item, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={item.title}
              id={`audience-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="audience-panel"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onPointerEnter={() => setActiveIndex(index)}
              className={`group w-full border-b border-neutral-100 px-4 py-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400 sm:px-5 ${
                active ? "bg-primary-50/70" : "bg-transparent hover:bg-surface"
              }`}
            >
              <span className="flex items-center gap-4">
                <span
                  className={`font-heading text-xs font-700 tabular-nums transition-colors duration-300 ${
                    active ? "text-primary-500" : "text-neutral-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-heading text-[clamp(1rem,1.7vw,1.2rem)] font-700 transition-colors duration-300 ${
                    active ? "text-ink" : "text-neutral-500 group-hover:text-neutral-700"
                  }`}
                >
                  {item.title}
                </span>
              </span>

              <span
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="overflow-hidden">
                  <span className="block pl-8 pt-3 text-sm leading-relaxed text-neutral-600 sm:pl-9">
                    {item.description}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="audience-panel"
        role="tabpanel"
        aria-labelledby={`audience-tab-${activeIndex}`}
        className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-neutral-100 bg-surface shadow-[0_18px_50px_rgba(20,21,46,0.1)] lg:sticky lg:top-28"
      >
        {items.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={index === activeIndex ? item.imageAlt : ""}
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className={`object-cover will-change-opacity transition-opacity duration-500 ease-out ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}

      </div>
    </div>
  );
}
