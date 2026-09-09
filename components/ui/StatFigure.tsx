"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   StatFigure - a single large number that counts up once when it
   is first scrolled into view.

   This is the one scroll-triggered animation the site keeps,
   because here the animation *is* the content: the number
   arriving is the point of a stat band.

   The count is written straight to the DOM rather than held in
   state. The server and the first client paint both render the
   real figure, so the number is correct without JavaScript, and
   the animation is a side effect on an element - which is what
   an effect is for - instead of ninety re-renders.

   A value that is not a plain number ("57/100") is left alone;
   counting up to a fraction means nothing. So is every value
   under prefers-reduced-motion.
   ============================================================ */

const NUMERIC = /^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/;
const DURATION = 900;

export default function StatFigure({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (value.includes("/")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const match = value.match(NUMERIC);
    if (!match) return;

    const target = Number(match[2].replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
    const write = (n: number) => {
      node.textContent = `${match[1]}${n.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${match[3]}`;
    };

    write(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          // The house curve, in JS.
          write(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
          else node.textContent = value;
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      node.textContent = value;
    };
  }, [value]);

  /* One text node, not two. A visually-hidden duplicate would put
     every figure into the page twice, which is the DOM duplication
     this rebuild is removing elsewhere. The node holds the real
     value on the server, before the count starts, and again the
     moment it finishes - and under reduced motion, which is where
     most screen-reader users are, it never changes at all. */
  return (
    <span ref={ref} className="block text-stat text-brand">
      {value}
    </span>
  );
}
