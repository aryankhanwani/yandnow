import Section, { type SectionBg } from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================================
   ProofList - named client work, on the one page it belongs to.

   Three per row of client name and a single short line. The
   section is omitted entirely on pages with no real client work
   rather than filled with generic copy.

   Nothing here carries a figure or a testimonial: the copy deck
   holds those back for verification, and an unverified outcome
   number on a skilling site is a credibility risk.
   ============================================================ */

export interface ProofItem {
  client: string;
  /** Eight words maximum. */
  work: string;
}

export default function ProofList({
  items,
  title,
  highlight,
  headingId = "proof-heading",
  bg = "surface",
}: {
  items: ProofItem[];
  title: string;
  highlight?: string;
  headingId?: string;
  bg?: SectionBg;
}) {
  return (
    <Section bg={bg} aria-labelledby={headingId}>
      <SectionHeading id={headingId} title={title} highlight={highlight} className="mb-10" />
      <ul className="grid border-t border-hairline sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.client} className="border-b border-hairline py-6">
            <p className="text-h4 text-ink">{item.client}</p>
            <p className="mt-2 measure text-body-sm text-ink-muted">{item.work}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
