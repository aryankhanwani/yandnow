import type { CaseStudyItem } from "@/components/ui/CaseStudyGrid";
import type { ProofImage, ProofStat } from "@/components/ui/ProofStats";

/* ============================================================
   The site's single source of proof.

   Both the homepage and the Corporate page show the same client
   work, so the list lives here rather than in either page. Only
   entries approved in the Final Copy Deck belong in this file -
   if a name, figure, or outcome is not in the deck, it does not
   go on the site.
   ============================================================ */

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    client: "Tata Group",
    work: "Behavioural skills and productivity learning across diverse teams.",
    image: "/images/corporate/programme-categories/operational-performance.jpg",
    imageAlt: "Team members in a facilitated workplace learning session",
  },
  {
    client: "JSW Energy",
    work: "Digital transformation and SCADA literacy for plant operations.",
    image: "/images/industry/proof/plant-floor-training.jpg",
    imageAlt: "Plant operators being guided through equipment checks on a production floor",
  },
  {
    client: "Castrol India",
    work: "Sales-force learning across dealer networks.",
    image: "/images/corporate/programme-categories/leadership-management.jpg",
    imageAlt: "A sales team working through a training exercise with a facilitator",
  },
  {
    client: "Bharat Petroleum",
    work: "Digital point-of-sale adoption and customer experience.",
    image: "/images/corporate/programme-categories/digital-workflow-adoption.jpg",
    imageAlt: "A frontline employee learning a digital point-of-sale workflow",
  },
  {
    client: "Jaquar",
    work: "Showroom customer engagement and brand excellence.",
    image: "/images/corporate/programme-categories/customer-excellence.jpg",
    imageAlt: "A showroom advisor guiding a customer through a product display",
  },
];

/** Published skills-gap figures. The reports they come from are
    credited once, in the section that renders them. */
export const PROOF_STATS: ProofStat[] = [
  { value: "56.35%", label: "India's employability rate" },
  { value: "57/100", label: "Student job-readiness confidence" },
  { value: "0.97%", label: "14-18-year-olds formally skilled" },
];

/** The photographs interleaved with the figures above. Existing
    project photography only - one per figure, in the same order. */
export const PROOF_IMAGES: ProofImage[] = [
  {
    src: "/images/corporate/programme-categories/operational-performance.jpg",
    alt: "Team members in a facilitated workplace learning session",
  },
  {
    src: "/images/learners/proof/practical-employability-training.jpg",
    alt: "Learners completing a practical technical task with an industry mentor",
  },
  {
    src: "/images/school/proof/applied-robotics-learning.jpg",
    alt: "School students building a small robot with guidance from their teacher",
  },
];
