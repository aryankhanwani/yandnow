import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import StatementSection from "@/components/ui/StatementSection";
import BestFor from "@/components/ui/BestFor";
import ClosingCta from "@/components/ui/ClosingCta";
import DataPoint from "@/components/ui/DataPoint";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   INDUSTRY SOLUTIONS - Final Copy Deck, "INDUSTRY SOLUTIONS",
   in the deck's order and under its own headings.
   ============================================================ */

export const metadata: Metadata = {
  title: "Industry Solutions | Learning Built Around the Work",
  description:
    "Y&Now designs workforce learning around the technical, safety, quality, and operational requirements of specific industries and roles.",
};

const SUPPORT: HorizontalCapability[] = [
  {
    icon: "Cog",
    tint: "46,49,146",
    title: "Technical and role-based skills",
    body: "Built around the equipment, processes, and standards people work with.",
  },
  {
    icon: "ShieldCheck",
    tint: "39,170,226",
    title: "Environment, health and safety",
    body: "Hazard awareness, incident reporting, and emergency response.",
  },
  {
    icon: "ClipboardCheck",
    tint: "31,34,103",
    title: "Quality and process improvement",
    body: "Consistent standards, clearer procedures, fewer defects on the line.",
  },
  {
    icon: "Gauge",
    tint: "32,180,232",
    title: "Operational excellence",
    body: "Reliable, repeatable execution across shifts, teams, and sites.",
  },
  {
    icon: "FileCheck",
    tint: "46,49,146",
    title: "Role-based assessment and competency tracking",
    body: "A clear record of who is signed off on what.",
  },
  {
    icon: "Laptop",
    tint: "39,170,226",
    title: "Digital and simulation-based learning",
    body: "Used where it suits the role and the work environment.",
  },
];

/* The sectors the deck names under "Where This Works". */
const SECTORS = [
  "Banking and financial services",
  "Construction",
  "Healthcare",
  "Information technology and IT-enabled services",
  "Retail",
  "Technical and soft-skills training",
];

const BEST_FOR = [
  "Plant managers",
  "Environment, Health and Safety leaders",
  "Manufacturing human resources teams",
  "Industrial leaders who need role-based training that fits the job",
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Solutions"
        title="Learning Built Around"
        highlight="the Work"
        subtitle="Workforce learning designed around the requirements of specific industries and roles."
      >
        <CtaButton href="/contact-us?type=industry" variant="primary" className="px-7 py-3.5">
          Discuss an industry requirement
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller items={SUPPORT} title="What We" highlight="Support" />

      <EditorialProofSection
        title="Built Around the"
        highlight="Workplace"
        body="We study the role, workflow, tools, and conditions people face on the job. We then build learning around what people need to do, not just what they need to know."
        image="/images/industry/proof/plant-floor-training.jpg"
        imageAlt="A technical trainer guiding plant operators through a quality inspection"
      />

      <StatementSection
        className="bg-surface"
        items={[
          {
            title: "Manufacturing and Precision",
            highlight: "Engineering",
            body: "Our team supports workforce learning for manufacturing and precision-engineering environments, including technical roles, plant operations, safety, quality, and relevant digital or process-related skills.",
          },
          {
            title: "From Learning to Workplace",
            highlight: "Readiness",
            body: "Participants are assessed against role requirements, trained against identified gaps, and supported through workplace activities where included in the programme.",
          },
        ]}
      />

      <ChecklistPanel
        title="Where This"
        highlight="Works"
        subtitle="Our materials reference workforce programmes across these sectors, alongside manufacturing and precision engineering."
        items={SECTORS}
        image="/images/corporate/delivery-model/assess.jpg"
        imageAlt="Engineers reviewing process documentation together on a factory floor"
        imageFirst
      />

      <BestFor items={BEST_FOR} className="bg-surface" />

      <DataPoint
        statement="Digital, data, and artificial-intelligence-related capabilities rank among the most important future skills in recent India skills-gap reporting."
        source="India skills-gap reporting, 2026"
      />

      <ClosingCta
        title="Discuss an Industry"
        highlight="Requirement"
      >
        <CtaButton href="/contact-us?type=industry" variant="primary" className="px-7 py-3.5">
          Discuss an industry requirement
        </CtaButton>
      </ClosingCta>
    </>
  );
}
