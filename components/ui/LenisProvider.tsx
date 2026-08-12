"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

let activeLenisController: Lenis | null = null;

export function getLenisController() {
  return activeLenisController;
}

/* ============================================================
   LenisProvider
   Boots Lenis smooth scrolling on the client for the entire site.

   Lenis v1 works by intercepting wheel/touch events and updating
   the real scrollTop on <html> — so existing window.scrollY reads
   and window "scroll" event listeners work without any bridging.

   Config:
   • duration      1.3 s  — leisurely, premium feel
   • easing        expo-out — quick to engage, floaty to settle
   • smoothWheel   true
   • touchMultiplier adjusted for natural mobile feel
   ============================================================ */
export default function LenisProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      infinite: false,
    });
    activeLenisController = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (activeLenisController === lenis) activeLenisController = null;
    };
  }, []);

  useEffect(() => {
    // Interactive sections may temporarily pause Lenis while pinned. Always
    // recover the global controller on route changes so a destination page
    // can never inherit a stopped scroll state from the previous route.
    activeLenisController?.start();
  }, [pathname]);

  return <>{children}</>;
}
