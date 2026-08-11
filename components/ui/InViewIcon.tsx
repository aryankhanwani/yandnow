"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactElement,
} from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================================
   InViewIcon — plays an animated icon's entrance ONCE, the
   first time it scrolls into view.

   The animated icons (from lucide-animated.com, installed into
   components/ui/) expose `startAnimation()` / `stopAnimation()`
   through their ref, and disable their own hover trigger as soon
   as a ref is attached. We attach that ref, watch a wrapper with
   an IntersectionObserver, and fire `startAnimation()` a single
   time on first intersection — so icons animate when you reach
   their section, not on hover, and never replay.

   Usage: <InViewIcon><SomeAnimatedIcon size={22} className="…"/></InViewIcon>
   Respects prefers-reduced-motion (no animation, icon still shown).
   ============================================================ */

interface IconHandle {
  startAnimation?: () => void;
  stopAnimation?: () => void;
}

interface InViewIconProps {
  children: ReactElement;
  /** Extra classes on the inline wrapper (layout only). */
  className?: string;
  /** Visibility fraction that counts as "in view" (0–1). */
  threshold?: number;
  /** Delay before the animation fires, ms. */
  delay?: number;
}

export default function InViewIcon({
  children,
  className,
  threshold = 0.5,
  delay = 0,
}: InViewIconProps) {
  const handleRef = useRef<IconHandle | null>(null);
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = wrapRef.current;
    if (!el) return;

    let played = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !played) {
            played = true;
            timer = setTimeout(() => handleRef.current?.startAnimation?.(), delay);
            observer.disconnect();
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [reduce, threshold, delay]);

  const child = Children.only(children);

  return (
    <span ref={wrapRef} className={cn("inline-flex", className)}>
      {isValidElement(child)
        ? cloneElement(child as ReactElement<{ ref?: React.Ref<IconHandle> }>, {
            ref: handleRef,
          })
        : child}
    </span>
  );
}
