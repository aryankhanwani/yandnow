import Image from "next/image";
import Section, { type SectionBg } from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================================
   SplitSection - one photograph and a short list, side by side.

   This is where a sentence carrying a comma-separated list of
   three or more things becomes four visible items. The reader
   should see the list, not hunt for it inside a paragraph.

   Below lg the image is always on top and the list underneath:
   a 50/50 split on a phone gives a 150px photo beside a 150px
   column of broken text. The image side alternates between
   consecutive split sections via `imageRight`.
   ============================================================ */

interface SplitSectionProps {
  title: string;
  highlight?: string;
  deck?: string;
  items: string[];
  image: string;
  imageAlt: string;
  /** Puts the image in the right column at lg. Alternate these. */
  imageRight?: boolean;
  bg?: SectionBg;
  id?: string;
  headingId?: string;
}

export default function SplitSection({
  title,
  highlight,
  deck,
  items,
  image,
  imageAlt,
  imageRight = false,
  bg = "surface",
  id,
  headingId,
}: SplitSectionProps) {
  return (
    <Section bg={bg} id={id} aria-labelledby={headingId}>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-alt lg:aspect-video ${
            imageRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
          <SectionHeading id={headingId} title={title} highlight={highlight} deck={deck} />
          <ul className="gap-heading">
            {items.map((item) => (
              <li
                key={item}
                className="border-b border-hairline py-4 text-body-lg text-ink first:border-t"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
