import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** `narrow` for prose blocks; `wide` for full-bleed panels. */
  size?: "default" | "narrow" | "wide";
}

/**
 * Container - the canonical width-limiting wrapper.
 *
 * Content caps at 1200px. Side padding steps 20 → 32 → 48px across
 * the four breakpoints and never gets an ad-hoc value inside a
 * component.
 */
export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const maxWidth =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[1600px]"
        : "max-w-[1200px]";

  return (
    <div className={cn(maxWidth, "mx-auto w-full px-5 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
