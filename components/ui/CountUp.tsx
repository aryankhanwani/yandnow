"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "motion/react";

/* ============================================================
   CountUp — animates a number from 0 → `to` when scrolled into
   view. Formats with Indian digit grouping. Shared by the
   social-proof bar and the impact-metrics band.
   ============================================================ */
interface CountUpProps {
  to: number;
  /** Rendered after the number, e.g. "+", "%", "K+". */
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  className,
  duration = 1.6,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("en-IN"));

  useEffect(() => {
    if (!inView) return;
    if (reduce) { count.set(to); return; }
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, to, reduce, count, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
