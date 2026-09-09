import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";

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
  title: string;
  highlight?: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  highlight,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero title={title} highlight={highlight} deck={intro} />

      <Section bg="surface">
        <div className="mx-auto max-w-3xl">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="border-t border-hairline py-10 first:border-t-0 first:pt-0"
            >
              <h2 className="text-h3 text-ink">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 measure text-body text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
