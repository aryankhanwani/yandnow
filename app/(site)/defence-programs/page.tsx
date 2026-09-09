import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
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
  "Map the gaps",
  "Identify the target role",
  "Understand existing experience and skills",
  "Focus learning on the capabilities that matter",
  "Support towards employment pathways, where employer linkage is part of the programme",
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

      <HorizontalCapabilityScroller
        eyebrow="Defence Programmes"
        items={FOCUS}
        title="Programme"
        highlight="Focus"
        subtitle="Where the learning is aimed: the target role, the gaps assessment finds, and the civilian workplace people are moving into."
      />

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

      <EditorialProofSection
        title="For Defence and Institutional"
        highlight="Partners"
        body="Our team works with defence, institutional, and employer partners on programmes designed around the transition, reskilling, or workforce requirements identified at the start of the engagement."
        image="/images/solutions-navbar/defence-programs.jpg"
        imageAlt="A programme team meeting with defence and employer partners"
      />
    </>
  );
}
