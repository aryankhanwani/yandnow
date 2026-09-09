import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/* ------------------------------------------------------------
   tailwind-merge has to be told about this project's custom
   utilities, or it silently drops classes it misreads:

   • `font-700` is not one of Tailwind's named weights, so the
     default config filed it under font-FAMILY - which meant
     `font-heading font-700` resolved to `font-700` alone and the
     heading quietly fell back to the body typeface.
   • `text-[1.6rem]` is a font size, and the default config treats
     font size as conflicting with `leading-*` (true in Tailwind v3,
     where the size utilities also set line-height, but not in v4).
     That silently removed line heights.
   Registering them keeps `cn()` honest.
   ------------------------------------------------------------ */
type CustomGroupId = "text-wrap-custom";

const twMerge = extendTailwindMerge<CustomGroupId>({
  override: {
    // Tailwind v4 font sizes no longer carry a line-height.
    conflictingClassGroups: { "font-size": [] },
  },
  extend: {
    classGroups: {
      "font-family": ["font-heading", "font-body"],
      "font-weight": ["font-400", "font-500", "font-600", "font-700", "font-800"],
      "text-wrap-custom": ["balance-text", "pretty-text"],
    },
  },
});

/**
 * cn - the canonical className combiner used across the design system.
 * Merges conditional clsx output and de-dupes conflicting Tailwind
 * utilities via tailwind-merge (e.g. `px-2 px-4` → `px-4`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
