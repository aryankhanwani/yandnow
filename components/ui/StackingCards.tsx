"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================================
   StackingCards - page-scroll-native stacked-card reveal.

   The section is as tall as N viewports. A single sticky stage keeps
   the optional heading and the deck in one vertically centred layout,
   while each new card rises into the deck as the page scrolls.

   Driven entirely by the page's own scroll (no inner scroll box),
   which is why it never traps the wheel.

   Pinning is desktop-only (md and up). A stacked card is a two-column
   layout that fits a landscape viewport; below md it collapses to one
   column and needs roughly 500px of its own, so pinning it inside a
   single viewport clipped the card AND asked for one screen-height of
   swiping per card with almost nothing moving - which reads as the page
   having stopped scrolling. On small screens the deck is therefore laid
   out as a plain vertical list, the same fallback used under
   prefers-reduced-motion.
   ============================================================ */

export interface StackCardItem {
  /** Two-digit index label, e.g. "01". */
  num: string;
  title: string;
  body: string;
  /** Pre-rendered icon node (pass a JSX element, not a component). */
  icon: ReactNode;
  /** "r,g,b" brand tint for accents. */
  tint: string;
  /** Optional contextual photograph for the visual side of the card. */
  image?: string;
  /** Optional caption line under the body (e.g. a compliance mapping). */
  meta?: string;
  /** Optional cross-link rendered as an "Explore" action. */
  href?: string;
}

function Card({
  card,
  i,
  total,
  progress,
  entryDistance,
}: {
  card: StackCardItem;
  i: number;
  total: number;
  progress: MotionValue<number>;
  entryDistance: number;
}) {
  // Cards further back in the deck settle at a smaller scale; the
  // front-most card (last) stays at full size.
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const enterStart = i === 0 ? 0 : (i - 0.75) / total;
  const enterEnd = i === 0 ? 0.001 : i / total;
  const y = useTransform(
    progress,
    [enterStart, enterEnd],
    i === 0 ? [0, 0] : [entryDistance, 0],
  );
  const stackOffset = i * 14;
  const maxStackOffset = (total - 1) * 14;

  return (
    <motion.div
      style={{
        scale,
        y,
        top: stackOffset,
        height: `calc(100% - ${maxStackOffset}px)`,
        zIndex: i + 1,
      }}
      className="absolute inset-x-0 top-0 h-full origin-top"
    >
      <CardBody card={card} imageOnRight={Boolean(card.image) && i % 2 === 1} />
    </motion.div>
  );
}

function CardBody({ card, imageOnRight = false }: { card: StackCardItem; imageOnRight?: boolean }) {
  const { tint } = card;
  return (
    <div
      className={cn(
        "grid h-full min-h-[300px] grid-cols-1 overflow-hidden rounded-[28px] border border-[#e8ecf2] bg-white md:min-h-[360px]",
        imageOnRight ? "md:grid-cols-[1.4fr_0.85fr]" : "md:grid-cols-[0.85fr_1.4fr]",
      )}
    >
      {/* Visual panel - alternates left/right on image-backed cards. */}
      <div
        className={cn(
          "relative flex min-h-[190px] flex-col justify-between overflow-hidden p-8 md:min-h-0 md:p-10",
          imageOnRight && "md:order-2",
        )}
        style={{
          background: card.image
            ? "#ffffff"
            : `linear-gradient(155deg, rgba(${tint},0.14) 0%, rgba(${tint},0.04) 55%, rgba(255,255,255,0) 100%)`,
        }}
      >
        {card.image ? (
          <div
            className={cn(
              "absolute bottom-0 top-5 overflow-hidden rounded-t-[22px]",
              imageOnRight ? "left-0 right-5" : "left-5 right-0",
            )}
          >
            <Image src={card.image} alt="" fill sizes="(max-width: 768px) 100vw, 36vw" className="object-cover" />
          </div>
        ) : (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-[8rem] font-800 leading-none md:text-[10rem]"
              style={{ color: `rgb(${tint})`, opacity: 0.08 }}
            >
              {card.num}
            </span>
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
              style={{ color: `rgb(${tint})` }}
            >
              {card.icon}
            </div>
            <div className="relative mt-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: `rgb(${tint})` }}>
                {card.num} · Programme
              </span>
              <span aria-hidden className="mt-4 block h-1 w-12 rounded-full" style={{ backgroundColor: `rgb(${tint})` }} />
            </div>
          </>
        )}
      </div>

      {/* Content panel */}
      <div className={cn("flex min-h-0 flex-col justify-center p-8 md:p-12", imageOnRight && "md:order-1")}>
        <h3 className="font-heading text-2xl font-700 leading-tight text-ink md:text-[2rem]">
          {card.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          {card.body}
        </p>
        {card.meta && (
          <div className="mt-6 flex max-w-xl items-start gap-3 border-t border-[#eef1f6] pt-5">
            <span
              aria-hidden
              className="mt-0.5 block h-4 w-1 flex-shrink-0 rounded-full"
              style={{ backgroundColor: `rgb(${tint})` }}
            />
            <span className="text-xs font-500 leading-relaxed text-neutral-500">{card.meta}</span>
          </div>
        )}
        {card.href && (
          <Link
            href={card.href}
            className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600 transition-colors hover:text-primary-700"
          >
            Explore programme
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function StackingCards({
  cards,
  className,
  heading,
}: {
  cards: StackCardItem[];
  className?: string;
  /** Optional heading that stays pinned at the top while the deck stacks. */
  heading?: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const deck = useRef<HTMLDivElement>(null);
  const [entryDistance, setEntryDistance] = useState(0);
  const reduce = useReducedMotion();
  // Default to the pinned layout so server-rendered desktop HTML matches
  // what desktop paints; phones flip to the list before first paint.
  const [pinned, setPinned] = useState(true);

  // useLayoutEffect, not useEffect: this resolves before the hydrated frame
  // is painted, so a phone does not flash the pinned layout on its way to
  // the list.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPinned(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      if (!stage.current || !deck.current) return;

      const stageRect = stage.current.getBoundingClientRect();
      const deckRect = deck.current.getBoundingClientRect();
      setEntryDistance(Math.max(stageRect.height - (deckRect.top - stageRect.top), 0));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (stage.current) observer.observe(stage.current);
    if (deck.current) observer.observe(deck.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  if (reduce || !pinned) {
    return (
      <div className={cn("mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 md:gap-8 md:py-20", className)}>
        {heading && <div className="mx-auto mb-2 max-w-3xl">{heading}</div>}
        {cards.map((card, index) => (
          <CardBody key={card.num} card={card} imageOnRight={Boolean(card.image) && index % 2 === 1} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={container}
      className={cn("relative", className)}
      style={{ height: `${Math.max(cards.length, 1) * 100}vh` }}
    >
      {/* svh, not vh: on a phone/tablet with a retractable browser bar 100vh is
          the *large* viewport, so a 100vh sticky stage hangs below the visible
          area and overflow-hidden clips the bottom of the deck. svh === vh on
          desktop, so nothing changes there. */}
      <div ref={stage} className="sticky top-0 h-[100svh] overflow-hidden px-4 pt-16 lg:pt-20">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center pb-4 lg:pb-6">
          {heading && (
            <div className="relative z-20 mx-auto mb-5 w-full max-w-3xl shrink-0 lg:mb-7">
              {heading}
            </div>
          )}
          <div ref={deck} className="relative h-[min(53vh,430px)] min-h-[340px] w-full shrink-0 md:h-[min(48vh,384px)] md:min-h-[384px]">
            {cards.map((card, i) => (
              <Card
                key={card.num}
                card={card}
                i={i}
                total={cards.length}
                progress={scrollYProgress}
                entryDistance={entryDistance}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
