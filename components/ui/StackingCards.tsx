"use client";

import { useRef, type ReactNode } from "react";
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
   StackingCards — page-scroll-native stacked-card reveal.

   The section is as tall as N viewports. Each card lives in its
   own `sticky top-0 h-screen` wrapper and is centred, so while
   you scroll through the section ONE card fills the viewport at a
   time. As the next card rises from the bottom and pins, the
   card(s) behind it scale down a touch and peek out from the top
   — a physical "deck" building up in the centre of the screen.

   Driven entirely by the page's own scroll (no inner scroll box),
   which is why it never traps the wheel. Falls back to a plain
   vertical list under prefers-reduced-motion.
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
}: {
  card: StackCardItem;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cards further back in the deck settle at a smaller scale; the
  // front-most card (last) stays at full size.
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4">
      <motion.div
        style={{ scale, top: `calc(-6vh + ${i * 26}px)` }}
        className="relative mx-auto w-full max-w-5xl"
      >
        <CardBody card={card} />
      </motion.div>
    </div>
  );
}

function CardBody({ card }: { card: StackCardItem }) {
  const { tint } = card;
  return (
    <div
      className="grid min-h-[440px] grid-cols-1 overflow-hidden rounded-[28px] border border-[#e8ecf2] bg-white shadow-[0_30px_80px_-40px_rgba(20,21,46,0.45)] md:min-h-[520px] md:grid-cols-[0.85fr_1.4fr]"
    >
      {/* Left — tinted panel with watermark number + icon */}
      <div
        className="relative flex flex-col justify-between overflow-hidden p-8 md:p-10"
        style={{
          background: card.image
            ? `rgb(${tint})`
            : `linear-gradient(155deg, rgba(${tint},0.14) 0%, rgba(${tint},0.04) 55%, rgba(255,255,255,0) 100%)`,
        }}
      >
        {card.image ? (
          <Image src={card.image} alt="" fill sizes="(max-width: 768px) 100vw, 36vw" className="object-cover" />
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

      {/* Right — title + body */}
      <div className="flex flex-col justify-center p-8 md:p-12">
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
}: {
  cards: StackCardItem[];
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <div className={cn("mx-auto flex max-w-5xl flex-col gap-8 px-4", className)}>
        {cards.map((card) => (
          <CardBody key={card.num} card={card} />
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className={cn("relative", className)}>
      {cards.map((card, i) => (
        <Card
          key={card.num}
          card={card}
          i={i}
          total={cards.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
