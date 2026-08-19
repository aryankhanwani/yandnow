"use client";

import { cn } from "@/lib/utils";
import { AnimatedHeading, Reveal } from "@/components/ui/motion-primitives";

/* ============================================================
   SectionHeading — canonical section header used site-wide.
   Standardises the eyebrow · title · subtitle rhythm so every
   section shares the same vertical cadence and animation.
   ============================================================ */
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Trailing accent-coloured phrase appended to the title. */
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  /** Constrain the subtitle width. */
  subtitleClassName?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal
          y={12}
          duration={0.6}
          className={cn(
            "mb-3 inline-flex items-center gap-2",
            isCenter ? "justify-center" : "",
          )}
        >
          <span className="h-px w-6 bg-secondary-400/70" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-500">
            {eyebrow}
          </span>
          {isCenter && <span className="h-px w-6 bg-secondary-400/70" aria-hidden />}
        </Reveal>
      )}

      <AnimatedHeading
        id={id}
        as="h2"
        text={title}
        highlight={highlight}
        className={cn(
          "font-heading font-700 leading-[1.15] tracking-tight text-ink",
          "text-[clamp(1.75rem,3.2vw,2.6rem)]",
          isCenter ? "max-w-3xl" : "max-w-2xl",
          titleClassName,
        )}
      />

      {subtitle && (
        <Reveal
          delay={0.15}
          y={16}
          className={cn(
            "mt-4 text-[15px] leading-relaxed text-neutral-600 sm:text-base",
            isCenter ? "max-w-2xl" : "max-w-xl",
            subtitleClassName,
          )}
          as="div"
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
