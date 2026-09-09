import Section, { type SectionBg } from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import CoverList from "@/components/ui/CoverList";
import SplitSection from "@/components/ui/SplitSection";
import ChipRow from "@/components/ui/ChipRow";
import StatBand, { type Stat } from "@/components/ui/StatBand";
import ProofList, { type ProofItem } from "@/components/ui/ProofList";
import BestFor from "@/components/ui/BestFor";
import CTABand from "@/components/ui/CTABand";

/* ============================================================
   SolutionPage - the one template all seven solution pages use.

   They used to drift: different section counts, half-finished
   lists, an eyebrow on one page that belonged to another. One
   template fixes the inconsistency and the density together, and
   there is no bespoke section markup left on any of them.

   The blocks, in order:

     1. Hero            H1, one line, one CTA
     2. What we cover   titles only
     3. Split           photograph + a four-item list
     4. Delivery        chips, not sentences
     5. Stats           published figures for that vertical
     6. Proof           real named clients only
     7. Best for        short lines
     8. CTA band        the same component the homepage ends on

   Blocks 3-6 are optional and are **omitted** where the copy
   deck has nothing to put in them. An empty section filled with
   generic copy is exactly the problem this rebuild exists to
   remove.

   Backgrounds alternate white / tint down whatever set of blocks
   a page actually has, so the tint edge stays the divider and no
   two adjacent bands share a ground.
   ============================================================ */

export interface SolutionPageData {
  hero: {
    title: string;
    highlight?: string;
    deck?: string;
    ctaLabel: string;
    ctaHref: string;
    image?: string;
    imageAlt?: string;
  };
  cover: { title: string; highlight?: string; items: string[] };
  split?: {
    title: string;
    highlight?: string;
    deck?: string;
    items: string[];
    image: string;
    imageAlt: string;
  };
  formats?: { title: string; highlight?: string; items: string[]; note?: string };
  stats?: { title?: string; highlight?: string; items: Stat[]; caption?: string };
  proof?: { title: string; highlight?: string; items: ProofItem[] };
  bestFor: string[];
  cta: { title: string; highlight?: string; line?: string; ctaLabel: string; ctaHref: string };
}

/** Hands out white, tint, white, tint … to whichever blocks exist. */
function bands(count: number): SectionBg[] {
  return Array.from({ length: count }, (_, i) => (i % 2 === 0 ? "surface" : "tint"));
}

export default function SolutionPage({ data }: { data: SolutionPageData }) {
  const present = [
    "cover",
    data.split && "split",
    data.formats && "formats",
    data.stats && "stats",
    data.proof && "proof",
    "bestFor",
  ].filter(Boolean) as string[];

  const band = Object.fromEntries(
    present.map((key, index) => [key, bands(present.length)[index]]),
  ) as Record<string, SectionBg>;

  return (
    <>
      <PageHero {...data.hero} />

      <CoverList
        title={data.cover.title}
        highlight={data.cover.highlight}
        items={data.cover.items}
        bg={band.cover}
      />

      {data.split && (
        <SplitSection
          title={data.split.title}
          highlight={data.split.highlight}
          deck={data.split.deck}
          items={data.split.items}
          image={data.split.image}
          imageAlt={data.split.imageAlt}
          bg={band.split}
          headingId="split-heading"
          imageRight
        />
      )}

      {data.formats && (
        <Section bg={band.formats} aria-labelledby="formats-heading">
          <SectionHeading
            id="formats-heading"
            title={data.formats.title}
            highlight={data.formats.highlight}
            deck={data.formats.note}
            className="mb-10"
          />
          <ChipRow items={data.formats.items} label={data.formats.title} />
        </Section>
      )}

      {data.stats && (
        <StatBand
          bg={band.stats}
          title={data.stats.title}
          highlight={data.stats.highlight}
          stats={data.stats.items}
          caption={data.stats.caption}
          headingId={data.stats.title ? "stats-heading" : undefined}
        />
      )}

      {data.proof && (
        <ProofList
          bg={band.proof}
          title={data.proof.title}
          highlight={data.proof.highlight}
          items={data.proof.items}
        />
      )}

      <BestFor items={data.bestFor} bg={band.bestFor} />

      <CTABand
        id="page-cta"
        title={data.cta.title}
        highlight={data.cta.highlight}
        line={data.cta.line}
        ctaLabel={data.cta.ctaLabel}
        ctaHref={data.cta.ctaHref}
      />
    </>
  );
}
