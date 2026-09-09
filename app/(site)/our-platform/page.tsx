import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import ModuleTabs, { type ModuleTab } from "@/components/ui/ModuleTabs";
import CoverList from "@/components/ui/CoverList";
import SplitSection from "@/components/ui/SplitSection";
import BestFor from "@/components/ui/BestFor";
import CTABand from "@/components/ui/CTABand";

/* ============================================================
   Y&NOW PLATFORM - Final Copy Deck, "Y&NOW PLATFORM", in the
   deck's order: Assess / Learn / Perform - Connect With Existing
   Systems - Data and Security - Best For - Request a Demo.

   Built from the same primitives as the seven solution pages,
   with the tab set standing in for the "what we cover" block:
   three modules, each with its own list, is more than a
   titles-only list can hold and less than three split sections
   in a row should be allowed to take.

   The integrations grid keeps four entries at the stakeholder's
   explicit request; what changed is that each is now a name
   rather than a name and a sentence.
   ============================================================ */

export const metadata: Metadata = {
  title: "Y&Now Platform | One System for Learning, Assessment, and Performance",
  description:
    "The Y&Now platform helps organisations connect digital learning, role-based assessment, and performance in one place.",
};

const MODULES: ModuleTab[] = [
  {
    tag: "Assess",
    title: "Role-based assessment",
    image: "/images/corporate/delivery-model/assess.jpg",
    imageAlt: "Supervisors assessing an operator against the requirements of their role",
    features: [
      "Competency assessments built around the role",
      "Current skills mapped against job requirements",
      "Individual skill heatmaps",
      "Team and role-level gap reports",
    ],
    note: "Where enabled in the product environment.",
  },
  {
    tag: "Learn",
    title: "Personalised learning paths",
    image: "/images/corporate/delivery-model/train.jpg",
    imageAlt: "A facilitator working through a practical exercise with a workplace team",
    features: [
      "Digital modules and microlearning",
      "Standard e-learning content formats",
      "Instructor-led learning",
      "Simulation where relevant to the programme",
    ],
  },
  {
    tag: "Perform",
    title: "Performance tracking",
    image: "/images/corporate/delivery-model/perform.jpg",
    imageAlt: "A team reviewing performance measures on a dashboard",
    features: [
      "Objective and key results tracking",
      "Supervisor check-ins",
      "Performance reviews",
      "Relevant operational signals",
    ],
  },
];

const INTEGRATIONS = [
  "HRMS and ERP",
  "Identity and access",
  "Learning content",
  "Data exchange",
];

const DATA_AND_SECURITY = [
  "Hosting",
  "Access controls",
  "Data ownership",
  "Retention",
  "Security",
];

const BEST_FOR = [
  "Learning and development teams",
  "Human resources teams",
  "Information technology teams",
  "Enterprise buyers evaluating systems",
];

export default function OurPlatformPage() {
  return (
    <>
      <PageHero
        title="One system for learning, assessment, and"
        highlight="performance"
        deck="Digital learning, role-based assessment, and performance in one place."
        ctaLabel="Request a demo"
        ctaHref="/contact-us?type=platform"
      />

      {/* Assess / Learn / Perform - the deck's three module names are
          the tabs, so the section needs no heading of its own. */}
      <Section bg="surface" aria-label="Platform modules">
        <ModuleTabs modules={MODULES} />
      </Section>

      <CoverList
        title="Connect with existing"
        highlight="systems"
        items={INTEGRATIONS}
        bg="tint"
        headingId="integrations-heading"
      />

      <SplitSection
        title="Data and"
        highlight="security"
        deck="For enterprise deployments."
        items={DATA_AND_SECURITY}
        image="/about/learning-team.png"
        imageAlt="A technical team reviewing platform configuration together"
        bg="surface"
        headingId="data-security-heading"
        imageRight
      />

      <BestFor items={BEST_FOR} bg="tint" />

      <CTABand
        id="platform-cta"
        title="Request a platform"
        highlight="demo"
        line="Tell us what your environment looks like and what it needs to do."
        ctaLabel="Request a demo"
        ctaHref="/contact-us?type=platform"
      />
    </>
  );
}
