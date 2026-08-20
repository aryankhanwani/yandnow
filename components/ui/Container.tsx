import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Allow narrower inner widths for prose/text-heavy sections */
  size?: "default" | "narrow" | "wide";
}

/**
 * Container - the canonical width-limiting wrapper used on every page.
 * max-w-7xl (1280px), horizontally padded, centered.
 * Use `size="narrow"` for prose sections, `size="wide"` for edge-to-edge panels.
 */
export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const maxWidth =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-screen-2xl"
      : "max-w-7xl";

  return (
    <div
      className={`${maxWidth} mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
