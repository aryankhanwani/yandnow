import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProofStats from "@/components/ui/ProofStats";
import { PROOF_STATS } from "@/lib/proof";

/* ============================================================
   PROOF IN NUMBERS - Copy deck, Home.

   Its own band rather than a tail on the case-study section:
   these are the published skills-gap figures the programmes are
   built to answer, not evidence about the client work above.

   The reports are credited once here, so each card can carry the
   figure and a short label and nothing else.
   ============================================================ */

export default function ProofInNumbers() {
  return (
    <section
      id="proof-in-numbers"
      aria-labelledby="proof-in-numbers-heading"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="proof-in-numbers-heading"
          eyebrow="Proof in Numbers"
          title="Why this work"
          highlight="matters"
          subtitle="Published figures from the India Skills Report 2026, the NIIT India Skills Gap Report 2026, and Economic Survey 2025-26 coverage."
          className="mb-12 lg:mb-14"
        />
        <ProofStats items={PROOF_STATS} />
      </Container>
    </section>
  );
}
