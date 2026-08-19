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

    // Lenis clamps every scroll target to a cached limit and only refreshes
    // it from its own (250 ms debounced) ResizeObserver on <html>. Anything
    // that changes the page height after boot — a web font swapping in, an
    // FAQ accordion opening, a tab panel exchanging content — would
    // otherwise leave the limit short and make the page stop dead before
    // the footer. Observing <body> catches those directly and re-measures
    // on the next frame.
    let resizeFrame = 0;
    const remeasure = () => {
      if (resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        lenis.resize();
      });
    };
    const bodyObserver = new ResizeObserver(remeasure);
    bodyObserver.observe(document.body);
    // Late-loading fonts reflow text without resizing <body> on every browser.
    document.fonts?.ready.then(remeasure).catch(() => {});
    window.addEventListener("load", remeasure);

    return () => {
      cancelAnimationFrame(rafId);
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      bodyObserver.disconnect();
      window.removeEventListener("load", remeasure);
      lenis.destroy();
      if (activeLenisController === lenis) activeLenisController = null;
    };
  }, []);

  useEffect(() => {
    // Interactive sections may temporarily pause Lenis while pinned. Always
    // recover the global controller on route changes so a destination page
    // can never inherit a stopped scroll state from the previous route.
    activeLenisController?.start();
    // A new route means a new document height; re-measure so the first
    // scroll on the destination page is not clamped to the old page's limit.
    activeLenisController?.resize();
  }, [pathname]);

  return <>{children}</>;
}
