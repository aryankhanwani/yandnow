"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   FaqAccordion — reusable animated accordion.
   Shared by the homepage FAQ and per-page FAQ sections.
   ============================================================ */
export interface FaqItemData {
  q: string;
  a: string;
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
        isOpen ? "border-primary-200 shadow-[0_10px_30px_rgba(20,21,46,0.06)]" : "border-[#e8ecf2]",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className={cn("font-heading text-base font-600 leading-snug transition-colors sm:text-[1.05rem]", isOpen ? "text-primary-700" : "text-ink")}>
          {faq.q}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
            isOpen ? "rotate-45 bg-primary-500 text-white" : "bg-neutral-100 text-neutral-500",
          )}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6 sm:pb-6 sm:text-[15px]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItemData[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <Stagger className={cn("flex flex-col gap-3", className)} stagger={0.06}>
      {items.map((faq, idx) => (
        <StaggerItem key={faq.q}>
          <FaqItem faq={faq} isOpen={open === idx} onToggle={() => setOpen(open === idx ? null : idx)} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
