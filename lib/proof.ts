import type { ProofItem } from "@/components/ui/ProofList";
import type { Stat } from "@/components/ui/StatBand";

/* ============================================================
   The site's single source of proof.

   The client work appears on /corporate only. It used to be on
   the homepage in full, in the name band above it, and again on
   /corporate - the same five stories, three times on one scroll.

   Only entries approved in the Final Copy Deck belong in this
   file: if a name, figure, or outcome is not in the deck, it does
   not go on the site.
   ============================================================ */

export const CASE_STUDIES: ProofItem[] = [
  {
    client: "Tata Group",
    work: "Behavioural skills and productivity learning across diverse teams.",
  },
  {
    client: "JSW Energy",
    work: "Digital transformation and SCADA literacy for plant operations.",
  },
  {
    client: "Castrol India",
    work: "Sales-force learning across dealer networks.",
  },
  {
    client: "Bharat Petroleum",
    work: "Digital point-of-sale adoption and customer experience.",
  },
  {
    client: "Jaquar",
    work: "Showroom customer engagement and brand excellence.",
  },
];

/** Published skills-gap figures. The reports they come from are
    credited once, in the section that renders them. */
export const PROOF_STATS: Stat[] = [
  { value: "56.35%", label: "India's employability rate" },
  { value: "57/100", label: "Student job-readiness confidence" },
  { value: "0.97%", label: "14-18-year-olds formally skilled" },
];
