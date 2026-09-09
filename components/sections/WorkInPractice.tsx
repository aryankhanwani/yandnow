import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyGrid from "@/components/ui/CaseStudyGrid";
import { CASE_STUDIES } from "@/lib/proof";

/* ============================================================
   WORK IN PRACTICE
   Copy deck - Home, "Experience You Can Review", and the Case
   Studies page.

   Real client work rather than a testimonial carousel, whose
   quotes were unattributed placeholders. The published figures
   that used to sit under this section now have a band of their
   own - see <ProofInNumbers />.
   ============================================================ */

export default function WorkInPractice() {
  return (
    <section id="work-in-practice" aria-labelledby="work-in-practice-heading" className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <Container className="relative">
        <SectionHeading
          id="work-in-practice-heading"
          eyebrow="Work in Practice"
          title="Real work. Real learning. Real"
          highlight="outcomes."
          className="mb-14"
        />

        <CaseStudyGrid items={CASE_STUDIES} />
      </Container>
    </section>
  );
}
