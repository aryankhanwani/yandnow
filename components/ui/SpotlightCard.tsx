"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   SpotlightCard: a professional surface card with a soft radial
   glow that tracks the cursor. The glow is a pointer-events-none
   layer whose radial-gradient centre follows the mouse, fading
   in on enter and out on leave. Content sits above it at z-10.

   The wash stays entirely in the secondary blue family (no
   indigo/purple), matching the site's calm aesthetic: soft
   border + shadow on hover, no harsh colour.
   ============================================================ */
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white p-8",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-secondary-200/80 hover:shadow-[0_22px_50px_-24px_rgba(39,170,226,0.38)]",
        className,
      )}
    >
      {/* Cursor-following blue glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(39,170,226,0.16), rgba(94,192,237,0.09) 38%, transparent 68%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
