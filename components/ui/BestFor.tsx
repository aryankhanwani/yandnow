import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { type SectionBg } from "@/components/ui/Section";

/* ============================================================
   BestFor - the copy deck's "Best For" block.

   The deck gives these as bare noun phrases with no explanation,
   so they are set as bare noun phrases: hairline-divided rows of
   names with nothing underneath them.
   ============================================================ */

export default function BestFor({
  items,
  bg = "tint",
  headingId = "best-for-heading",
}: {
  items: string[];
  bg?: SectionBg;
  headingId?: string;
}) {
  return (
    <Section bg={bg} aria-labelledby={headingId}>
      <SectionHeading id={headingId} title="Best" highlight="for" className="mb-10" />
      <ul className="grid border-t border-hairline md:grid-cols-2 md:gap-x-16">
        {items.map((item) => (
          <li key={item} className="border-b border-hairline py-5 text-body-lg text-ink">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
