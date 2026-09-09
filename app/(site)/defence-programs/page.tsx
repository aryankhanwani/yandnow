import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import StatementSection from "@/components/ui/StatementSection";
import BestFor from "@/components/ui/BestFor";
import ClosingCta from "@/components/ui/ClosingCta";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   DEFENCE PROGRAMMES - Final Copy Deck, "DEFENCE PROGRAMMES",
   in the deck's order and under its own headings.
   ============================================================ */

export const metadata: Metadata = {
  title: "Defence Programmes | Experience That Moves Forward",
  description:
    "Y&Now supports veteran transition and in-service upskilling through learning that connects existing service experience with civilian workplace requirements.",
};

const FOCUS: HorizontalCapability[] = [
  {
    icon: "Briefcase",
    tint: "46,49,146",
    title: "Civilian career readiness",
    body: "How civilian workplaces hire, operate, and talk about the job.",
  },
  {
    icon: "UserCog",
    tint: "39,170,226",
    title: "Role-aligned upskilling",
    body: "Learning pointed at a target role and the gaps assessment finds.",
  },
  {
    icon: "MessagesSquare",
    tint: "31,34,103",
    title: "Employability skills",
    body: "Communication, team dynamics, and commercial awareness.",
  },
  {
    icon: "Factory",
    tint: "32,180,232",
    title: "Industry exposure",
    body: "Direct contact with the sectors that hire for these skills.",
  },
  {
    icon: "HeartHandshake",
    tint: "46,49,146",
    title: "Employer linkage",
    body: "Employment pathways, where the agreed programme includes them.",
  },
];

const ROUTE = [
  "Understand existing experience and skills",
  "Identify the target role",
  "Map the gaps",
  "Focus learning on the capabilities that matter",
  "Support towards employment pathways, where employer linkage is part of the programme",
];

const BEST_FOR = [
  "Defence establishments",
  "Public sector human resources teams",
  "Institutional partners",
  "Veterans preparing for their next career step",
];

export default function DefenceProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Defence Programmes"
        title="Experience That Moves"
        highlight="Forward"
        subtitle="Veteran transition and in-service upskilling, built on the experience people already have."
      >
        <CtaButton href="/contact-us?type=defence" variant="primary" className="px-7 py-3.5">
          Explore defence programmes
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller items={FOCUS} title="Programme" highlight="Focus" />

      <EditorialProofSection
        title="Make Existing Experience Work in a"
        highlight="New Context"
        body="Veterans bring experience, discipline, leadership, and role-specific strengths. A systematic transition programme helps connect those strengths with civilian job requirements, workplace language, and new skill areas."
        image="/images/defence/proof/veteran-transition-training.jpg"
        imageAlt="Veterans working with an instructor during civilian technical training"
      />

      <ChecklistPanel
        title="A Practical Transition"
        highlight="Route"
        items={ROUTE}
        image="/images/csr/programme-streams/veteran-transition.jpg"
        imageAlt="A veteran in conversation with a programme facilitator"
        imageFirst
        className="bg-surface"
      />

      <StatementSection
        items={[
          {
            title: "For Defence and Institutional",
            highlight: "Partners",
            body: "Our team works with defence, institutional, and employer partners on programmes designed around the transition, reskilling, or workforce requirements identified at the start of the engagement.",
          },
        ]}
      />

      <BestFor items={BEST_FOR} className="bg-surface" />

      <ClosingCta title="Explore Defence" highlight="Programmes" className="bg-white">
        <CtaButton href="/contact-us?type=defence" variant="primary" className="px-7 py-3.5">
          Explore defence programmes
        </CtaButton>
      </ClosingCta>
    </>
  );
}
