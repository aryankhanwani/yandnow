"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export default function ScrollTextReveal({ text, className, highlightWords = [] }: ScrollTextRevealProps) {
  const target = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  /* Fill completes by the time the paragraph sits at the middle
     of the viewport: it starts colouring as the first line enters
     from the bottom and every word is ink-black once the block's
     centre crosses the halfway mark. */
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 0.95", "center 0.5"],
  });

  return (
    <p ref={target} className={`group/mission-copy ${className ?? ""}`}>
      {words.map((word, index) => (
        <ScrollWord
          key={`${word}-${index}`}
          progress={scrollYProgress}
          start={index / words.length}
          end={(index + 1) / words.length}
          reduceMotion={Boolean(reduceMotion)}
          highlighted={highlightWords.includes(word.replace(/[^a-zA-Z]/g, "").toLowerCase())}
        >
          {word}
        </ScrollWord>
      ))}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  start,
  end,
  reduceMotion,
  highlighted,
}: {
  children: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  reduceMotion: boolean;
  highlighted: boolean;
}) {
  const color = useTransform(
    progress,
    [start, end],
    reduceMotion ? ["#14152E", "#14152E"] : ["#b3bdd0", "#14152E"],
  );

  return (
    <span className="inline-block">
      <motion.span style={{ color }}>
        <span
          className={
            highlighted
              ? "relative inline-block bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#1d4ed8] bg-clip-text bg-[length:200%_100%] bg-left transition-[background-position,color] duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#2563eb] after:via-[#0ea5e9] after:to-[#1d4ed8] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/mission-copy:bg-right group-hover/mission-copy:!text-transparent group-hover/mission-copy:after:scale-x-100"
              : undefined
          }
        >
          {children}
        </span>
      </motion.span>
      {"\u00a0"}
    </span>
  );
}
