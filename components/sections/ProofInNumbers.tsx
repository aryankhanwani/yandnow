import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProofStats from "@/components/ui/ProofStats";
import { PROOF_IMAGES, PROOF_STATS } from "@/lib/proof";

/* ============================================================
   PROOF IN NUMBERS - Copy deck, Home.

   Its own band rather than a tail on the case-study section:
   these are the published skills-gap figures the programmes are
   built to answer, not evidence about the client work above.

   The paragraph that used to sit under the heading is gone. The
   three reports are named in the caption at the foot of the
   band, which is where a source belongs - it is not something
   the reader needs before the numbers.
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
          title="Why this work"
          highlight="matters"
          className="mb-12 lg:mb-14"
        />
        <ProofStats items={PROOF_STATS} images={PROOF_IMAGES} />
        <p className="mt-6 text-[13px] leading-relaxed text-neutral-500">
          India Skills Report 2026 · NIIT India Skills Gap Report 2026 · Economic
          Survey 2025-26 coverage.
        </p>
      </Container>
    </section>
  );
}
