"use client";

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getLenisController } from "@/components/ui/LenisProvider";

export interface HorizontalCapability {
  icon: string;
  tint: string;
  title: string;
  body: string;
}

function CapabilityTrack({
  items,
  trackRef,
  activeIndex,
}: {
  items: HorizontalCapability[];
  trackRef?: RefObject<HTMLDivElement | null>;
  activeIndex?: number;
}) {
  return (
    <div ref={trackRef} className="flex w-max gap-5 pl-8 sm:gap-6 sm:pl-10 lg:pl-20">
      {items.map((item, index) => {
        const active = activeIndex === undefined || activeIndex === index;

        return (
          <article
            key={item.title}
            aria-current={activeIndex === index ? "step" : undefined}
            className={`group relative aspect-[3/4] w-[clamp(270px,76vw,320px)] flex-none overflow-hidden rounded-2xl border p-7 transition-[border-color,background-color,transform,opacity] duration-500 ease-out sm:w-[clamp(280px,34vw,320px)] ${
              active
                ? "scale-100 border-[#4e47ad] bg-gradient-to-br from-[#2e3192] via-[#493aa5] to-[#6848ba] opacity-100"
                : "scale-[0.955] border-[#d8e3ef] bg-white opacity-90"
            }`}
          >
            {!active && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.34),rgba(14,165,233,0.13)_34%,transparent_68%)]"
              />
            )}
            {active ? (
              <div className="relative flex h-full flex-col justify-between">
                <motion.h3
                  layoutId={`capability-title-${index}`}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  className="max-w-[13rem] font-heading text-2xl font-700 leading-tight text-white"
                >
                    {item.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 }}
                  className="border-t border-white/20 pt-5 text-sm leading-relaxed text-white/80"
                >
                  {item.body}
                </motion.p>
              </div>
            ) : (
              <>
                <span className="absolute left-7 top-7 text-xl font-800 tabular-nums tracking-[0.1em] text-[#2563a8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <motion.h3
                  layoutId={`capability-title-${index}`}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  className="absolute inset-x-7 bottom-7 z-10 font-heading text-xl font-700 leading-tight text-[#102a4c]"
                >
                  {item.title}
                </motion.h3>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default function HorizontalCapabilityScroller({
  items,
}: {
  items: HorizontalCapability[];
}) {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLocked = useRef(false);
  const wheelUnlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionLocked = useRef(false);
  const lockedScrollY = useRef(0);
  const exitingSection = useRef(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [travel, setTravel] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const snappedX = items.length > 1 ? -(travel / (items.length - 1)) * activeIndex : 0;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (reduceMotion) return;

    const unlockAfterGesture = () => {
      if (wheelUnlockTimer.current) clearTimeout(wheelUnlockTimer.current);
      wheelUnlockTimer.current = setTimeout(() => {
        wheelLocked.current = false;
      }, 180);
    };

    const onWheel = (event: WheelEvent) => {
      const node = section.current;
      if (!node || event.deltaY === 0 || exitingSection.current) return;

      const rect = node.getBoundingClientRect();
      const sectionIsPinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!sectionIsPinned) return;

      const sectionTop = window.scrollY + rect.top;
      if (!sectionLocked.current) {
        const lenis = getLenisController();
        sectionLocked.current = true;
        lockedScrollY.current = sectionTop;
        lenis?.stop();
        if (lenis) {
          lenis.scrollTo(sectionTop, { immediate: true, force: true });
        } else {
          window.scrollTo({ top: sectionTop, behavior: "auto" });
        }
      }

      if (wheelLocked.current) {
        event.preventDefault();
        unlockAfterGesture();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const current = activeIndexRef.current;
      const next = current + direction;

      event.preventDefault();
      wheelLocked.current = true;
      unlockAfterGesture();

      if (next >= 0 && next < items.length) {
        activeIndexRef.current = next;
        setActiveIndex(next);
        return;
      }

      sectionLocked.current = false;
      exitingSection.current = true;
      const exitTarget = direction > 0 ? sectionTop + travel + 2 : Math.max(sectionTop - 2, 0);
      const lenis = getLenisController();
      lenis?.start();
      if (lenis) {
        lenis.scrollTo(exitTarget, { duration: 0.8, force: true });
      } else {
        window.scrollTo({ top: exitTarget, behavior: "smooth" });
      }
      if (exitTimer.current) clearTimeout(exitTimer.current);
      exitTimer.current = setTimeout(() => {
        exitingSection.current = false;
      }, 800);
    };

    const holdPinnedPosition = () => {
      if (
        sectionLocked.current &&
        !exitingSection.current &&
        Math.abs(window.scrollY - lockedScrollY.current) > 1
      ) {
        window.scrollTo({ top: lockedScrollY.current, behavior: "auto" });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", holdPinnedPosition, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", holdPinnedPosition);
      if (wheelUnlockTimer.current) clearTimeout(wheelUnlockTimer.current);
      if (exitTimer.current) clearTimeout(exitTimer.current);
      if (sectionLocked.current) getLenisController()?.start();
    };
  }, [items.length, reduceMotion, travel]);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;

      const cards = Array.from(track.current.children) as HTMLElement[];
      const stepWidth =
        cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
      setTravel(stepWidth * Math.max(items.length - 1, 0));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (viewport.current) observer.observe(viewport.current);
    if (track.current) observer.observe(track.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items.length]);

  const heading = (
    <SectionHeading
      eyebrow="Manufacturing & Precision Engineering"
      title="What our manufacturing programmes"
      highlight="cover"
      subtitle="Y&Now's manufacturing training programmes span the full technical stack — from machine operation and certification through maintenance, safety, and quality."
      align="left"
    />
  );

  if (reduceMotion) {
    return (
      <section className="bg-surface py-20 lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.4fr)] lg:gap-8">
          <div className="max-w-md">{heading}</div>
          <div className="overflow-x-auto pb-4">
            <CapabilityTrack items={items} />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={section}
      className="relative bg-surface"
      style={{ height: `calc(100vh + ${travel}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden pt-16 lg:pt-20">
        <div className="flex h-full flex-col justify-center pb-6">
          <Container className="grid items-center gap-9 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.4fr)] lg:gap-8">
            <div className="max-w-md">{heading}</div>
            <div ref={viewport} className="relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-16 bg-gradient-to-r from-surface via-surface/85 to-transparent backdrop-blur-[2px] lg:block"
              />
              <motion.div
                animate={{ x: snappedX }}
                transition={{ type: "spring", stiffness: 115, damping: 21, mass: 0.9 }}
              >
                <CapabilityTrack items={items} trackRef={track} activeIndex={activeIndex} />
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
