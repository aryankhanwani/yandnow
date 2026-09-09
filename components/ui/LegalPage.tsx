import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/motion-primitives";

/* ============================================================
   LegalPage - the shared shell for Privacy Policy and Terms.

   Both pages are the same shape: a hero, then a run of short
   headed sections. Keeping them on one component means the two
   can never drift apart typographically, and a third legal page
   costs only its copy.
   ============================================================ */

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({
  eyebrow,
  title,
  highlight,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} highlight={highlight} subtitle={intro} />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            {sections.map((section, index) => (
              <Reveal
                key={section.heading}
                y={16}
                delay={Math.min(index * 0.04, 0.2)}
                className="border-t border-[#e8ecf2] py-9 first:border-t-0 first:pt-0"
              >
                <h2 className="font-heading text-[1.35rem] font-700 leading-snug tracking-tight text-ink">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
