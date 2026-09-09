import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   CaseStudyGrid - image-led proof of real work.

   The copy deck asks each case study to show the client, the
   need, and what was delivered. Anything beyond that (metrics,
   testimonials) stays out until it is verified, so this card
   carries a photo and a single delivered-work line and nothing
   that could be read as an unapproved outcome claim.

   Five items lay out as three-then-two on desktop; any other
   count falls back to an even three-column grid.
   ============================================================ */

export interface CaseStudyItem {
  client: string;
  work: string;
  image: string;
  imageAlt: string;
}

export default function CaseStudyGrid({ items }: { items: CaseStudyItem[] }) {
  const isThreeThenTwo = items.length === 5;

  return (
    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6" stagger={0.08}>
      {items.map((item, index) => (
        <StaggerItem
          key={item.client}
          className={
            isThreeThenTwo
              ? index < 3
                ? "lg:col-span-2"
                : "lg:col-span-3"
              : "lg:col-span-2"
          }
        >
          <article className="group h-full overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"
              />
              <span className="absolute bottom-4 left-4 font-heading text-lg font-700 text-white">
                {item.client}
              </span>
            </div>
            <p className="p-6 text-[14.5px] leading-relaxed text-neutral-600">{item.work}</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
