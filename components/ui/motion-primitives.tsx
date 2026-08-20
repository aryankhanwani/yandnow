"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "motion/react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   MOTION PRIMITIVES - shared, scalable animation building blocks
   Built on Framer Motion (`motion/react`). Every primitive:
   • fires once when scrolled into view (viewport once:true)
   • respects prefers-reduced-motion (falls back to a plain fade
     or no motion at all)
   • uses the same easing curve site-wide for a coherent feel
   ============================================================ */

/** House easing - a soft, premium "quart-out". */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const DEFAULT_VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/* ------------------------------------------------------------
   Reveal - fade + rise a single block into view.
   ------------------------------------------------------------ */
interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Seconds to wait before animating (stagger by hand when needed). */
  delay?: number;
  /** Travel distance in px (default 24). */
  y?: number;
  /** Animation duration in seconds (default 0.7). */
  duration?: number;
  as?: "div" | "section" | "li" | "span";
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------
   Stagger + StaggerItem - orchestrate a group of children so
   they cascade in. Wrap a list in <Stagger>, each child in
   <StaggerItem>.
   ------------------------------------------------------------ */
const staggerContainer = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child (seconds). */
  stagger?: number;
  /** Delay before the first child (seconds). */
  delay?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={DEFAULT_VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------
   AnimatedHeading - reveals a heading word-by-word on scroll.
   Renders real text (SEO-safe) split into inline word spans.
   The space that follows each word is a plain text node at flow
   level so inter-word spacing survives and descenders (g, y, p)
   are never clipped.
   ------------------------------------------------------------ */
interface AnimatedHeadingProps {
  text: string;
  className?: string;
  id?: string;
  /** Element to render as - keeps semantic heading levels correct. */
  as?: "h1" | "h2" | "h3";
  delay?: number;
  /** Optional trailing highlighted phrase rendered in accent colour. */
  highlight?: string;
  highlightClassName?: string;
}

export function AnimatedHeading({
  text,
  className,
  id,
  as = "h2",
  delay = 0,
  highlight,
  highlightClassName = "text-primary-500",
}: AnimatedHeadingProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");
  const highlightWords = highlight ? highlight.split(" ") : [];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.5em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
  };

  return (
    <Tag className={className} id={id}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={DEFAULT_VIEWPORT}
        className="inline"
      >
        {words.map((w, i) => (
          <span key={`w-${i}`}>
            <motion.span variants={word} className="inline-block will-change-transform">
              {w}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
        {highlightWords.length > 0 && (
          <span className={cn(highlightClassName)}>
            {highlightWords.map((w, i) => (
              <span key={`h-${i}`}>
                {" "}
                <motion.span variants={word} className="inline-block will-change-transform">
                  {w}
                </motion.span>
              </span>
            ))}
          </span>
        )}
      </motion.span>
    </Tag>
  );
}
