import StatBand from "@/components/ui/StatBand";
import { PROOF_STATS } from "@/lib/proof";

/* ============================================================
   PROOF IN NUMBERS
   ------------------------------------------------------------
   Moved up the page: it now sits directly after Find Your Route
   rather than near the footer. It is the page's rest stop, and a
   rest stop belongs where the reading actually starts.

   Three figures, not six. The brief asks for six, half of them
   Y&Now's own (learners trained, programmes delivered,
   organisations served, cities, trainers, years) - those numbers
   are not available and were not invented. Supply them and this
   band widens to six with no other change.

   The three reports are credited in one caption line at the foot
   of the band, which is where the old attribution paragraph went.
   ============================================================ */

export default function ProofInNumbers() {
  return (
    <StatBand
      id="proof-in-numbers"
      headingId="proof-in-numbers-heading"
      title="Why this work"
      highlight="matters"
      stats={PROOF_STATS}
      caption="India Skills Report 2026 · NIIT India Skills Gap Report 2026 · Economic Survey 2025-26."
    />
  );
}
