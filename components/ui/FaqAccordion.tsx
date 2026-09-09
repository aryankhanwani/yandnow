"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   FaqAccordion - all panels closed by default.

   An open panel on load is a paragraph the visitor did not ask
   for, on a page whose whole problem was unasked-for paragraphs.

   Each trigger row is at least 56px tall and the whole row is
   the target, not just the words. The chevron is drawn from two
   hairlines so it inherits the site's single stroke weight, and
   the panel is toggled with `hidden` rather than swapped through
   display, so the height transition has something to animate.
   ============================================================ */

export interface FaqItemData {
  q: string;
  a: string;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "ml-4 flex h-6 w-6 flex-none items-center justify-center transition-transform transition-house-slow",
        open && "rotate-180",
      )}
    >
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden>
        <path
          d="M3 6l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

export default function FaqAccordion({
  items,
  className,
}: {
  items: FaqItemData[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={cn("border-t border-hairline", className)}>
      {items.map((faq, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-trigger-${index}`;

        return (
          <div key={faq.q} className="border-b border-hairline">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left text-h4 text-ink transition-colors transition-house hover:text-brand"
              >
                <span>{faq.q}</span>
                <Chevron open={isOpen} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              <p className="measure text-body text-ink-muted">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
