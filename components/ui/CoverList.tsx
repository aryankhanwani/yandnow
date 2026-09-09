import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { type SectionBg } from "@/components/ui/Section";

/* ============================================================
   CoverList - "What We Support", as titles and nothing else.

   Every one of these lists used to carry a clarifying line under
   each item; four of the seven pages had the line on some items
   and not others, which read as unfinished. Either every item in
   a list has a description or none do, and at this density the
   answer is none. What the lines explained is on the page the
   item belongs to.

   No icon beside every entry either - an icon on each of six
   rows is six more things to parse and recognises nothing.
   ============================================================ */

export default function CoverList({
  title,
  highlight,
  items,
  bg = "surface",
  headingId = "what-we-cover-heading",
}: {
  title: string;
  highlight?: string;
  items: string[];
  bg?: SectionBg;
  headingId?: string;
}) {
  return (
    <Section bg={bg} aria-labelledby={headingId}>
      <SectionHeading id={headingId} title={title} highlight={highlight} className="mb-10" />
      <ul className="grid border-t border-hairline md:grid-cols-2 md:gap-x-16">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-hairline py-5 text-body-lg text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
