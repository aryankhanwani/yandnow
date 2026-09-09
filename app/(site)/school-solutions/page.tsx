import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import DataPoint from "@/components/ui/DataPoint";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   SCHOOL SOLUTIONS - Final Copy Deck, "SCHOOL SOLUTIONS", in the
   deck's order and under its own headings.
   ============================================================ */

export const metadata: Metadata = {
  title: "School Solutions | Practical Skills for What Comes Next",
  description:
    "Y&Now helps schools build applied skills that prepare students for further education, workplace entry, and changing industry needs.",
};

const SUPPORT: HorizontalCapability[] = [
  {
    icon: "Wrench",
    tint: "46,49,146",
    title: "Vocational and applied skills",
    body: "Practical skills alongside the academic timetable, adapted to the age group.",
  },
  {
    icon: "Factory",
    tint: "39,170,226",
    title: "Industry exposure",
    body: "A clear view of how these skills are used at work.",
  },
  {
    icon: "UserCog",
    tint: "31,34,103",
    title: "Teacher and facilitator support",
    body: "Capacity building, so the programme is owned inside the school.",
  },
  {
    icon: "BadgeCheck",
    tint: "32,180,232",
    title: "Assessment and certification where applicable",
    body: "Assessment against what the programme builds.",
  },
];

export default function SchoolSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="School Solutions"
        title="Practical Skills for What"
        highlight="Comes Next"
        subtitle="Applied skills that prepare students for further education and workplace entry."
      >
        <CtaButton href="/contact-us?type=schools" variant="primary" className="px-7 py-3.5">
          Enquire about school programmes
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller
        eyebrow="School Solutions"
        items={SUPPORT}
        title="What We"
        highlight="Support"
        subtitle="Applied learning alongside the academic timetable, with support for the teachers who run it."
      />

      <EditorialProofSection
        title="Learning Beyond the"
        highlight="Classroom"
        body="Students benefit when they can connect what they learn with how skills are used in real settings. We support programmes that combine classroom learning with practical application, assessment, and exposure to workplace requirements."
        image="/images/school/proof/applied-robotics-learning.jpg"
        imageAlt="School students building a small robot with guidance from their teacher"
      />

      <EditorialProofSection
        title="Preparing Students for the"
        highlight="Next Step"
        body="We help students understand and apply practical skills alongside academic learning. Programme design adapts to the age group, learning context, and intended pathway."
        image="/images/solutions-navbar/school-solutions.jpg"
        imageAlt="School students working through a practical exercise with their teacher"
        imageFirst
        className="bg-surface"
      />

      <DataPoint
        value="0.97%"
        statement="the share of 14-18-year-olds reported to have received institutional skilling."
        source="Economic Survey 2025-26 coverage"
      />
    </>
  );
}
