import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ============================================================
   CardGrid - image tiles carrying a name and nothing else.

   A visitor scanning this grid is picking an audience, not
   reading a description: the page behind the tile does the
   explaining. So there is no description slot, and adding one
   back is the fastest way to undo this whole rebuild.

   Every tile carries the same corner marker, which shifts on
   hover in the same direction - one mark, one motion, on all of
   them. The tile aspect ratio is fixed so nothing moves as the
   images load.
   ============================================================ */

export interface CardItem {
  id: string;
  name: string;
  href: string;
  image: string;
  imageAlt: string;
}

/* Sized for the real column counts: 2 up at base, 3 at md, 4 at lg. */
const SIZES = "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw";

export default function CardGrid({
  items,
  className,
}: {
  items: CardItem[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-[var(--space-grid-gap)] md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className="group block"
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-surface-alt">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes={SIZES}
                className="object-cover"
              />
              {/* The one overlay scrim used site-wide, so the corner
                  marker holds up over a light photograph. */}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"
              />
              {/* Corner marker - the route line's terminal detail,
                  travelling the same way on every tile. */}
              <span
                aria-hidden
                className="absolute right-4 top-4 h-1.5 w-6 bg-white transition-transform transition-house group-hover:translate-x-1"
              />
            </span>
            <span className="mt-4 block text-h4 text-ink group-hover:text-brand transition-colors transition-house">
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
