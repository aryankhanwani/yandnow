import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ModuleTabs, { type ModuleTab } from "@/components/ui/ModuleTabs";
import SupportGrid, { type SupportItem } from "@/components/ui/SupportGrid";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import ClosingCta from "@/components/ui/ClosingCta";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/motion-primitives";

/* ============================================================
   Y&NOW PLATFORM - Final Copy Deck, "Y&NOW PLATFORM", in the
   deck's order: Assess / Learn / Perform (the three tabs) -
   Connect With Existing Systems - Data and Security - Best For -
   Request a Platform Demo.
   ============================================================ */

export const metadata: Metadata = {
  title: "Y&Now Platform | One System for Learning, Assessment, and Performance",
  description:
    "The Y&Now platform helps organisations connect digital learning, role-based assessment, and performance in one place.",
};

const MODULES: ModuleTab[] = [
  {
    icon: <AnimIcon name="ClipboardCheck" size={24} />,
    tint: "46,49,146",
    tag: "Assess",
    image: "/images/corporate/delivery-model/assess.jpg",
    imageAlt: "Supervisors assessing an operator against the requirements of their role",
    title: "Role-based assessment",
    features: [
      "Competency assessments built around the role",
      "Current skills mapped against job requirements",
      "Individual skill heatmaps",
      "Team and role-level gap reports",
    ],
    note: "Outputs may include heatmaps and gap reports where enabled in the relevant product environment.",
  },
  {
    icon: <AnimIcon name="GraduationCap" size={24} />,
    tint: "46,49,146",
    tag: "Learn",
    image: "/images/corporate/delivery-model/train.jpg",
    imageAlt: "A facilitator working through a practical exercise with a workplace team",
    title: "Personalised learning paths",
    features: [
      "Digital modules and microlearning",
      "Standard e-learning content formats",
      "Instructor-led learning",
      "Simulation where relevant to the programme",
    ],
  },
  {
    icon: <AnimIcon name="TrendingUp" size={24} />,
    tint: "46,49,146",
    tag: "Perform",
    image: "/images/corporate/delivery-model/perform.jpg",
    imageAlt: "A team reviewing performance measures on a dashboard",
    title: "Performance tracking",
    features: [
      "Objective and key results tracking",
      "Supervisor check-ins",
      "Performance reviews",
      "Relevant operational signals",
    ],
  },
];

const INTEGRATIONS: SupportItem[] = [
  {
    icon: "Users2",
    title: "HRMS and ERP",
    body: "The platform may connect with your existing HRMS and ERP environments through agreed integrations.",
  },
  {
    icon: "KeyRound",
    title: "Identity and access",
    body: "Single sign-on and user provisioning, configured with your IT team as part of the deployment.",
  },
  {
    icon: "FileCode2",
    title: "Learning content",
    body: "Standard e-learning content formats, so material you already own can be brought across.",
  },
  {
    icon: "Webhook",
    title: "Data exchange",
    body: "Reporting into the systems you already use, agreed as part of the integration scope.",
  },
];

const DATA_AND_SECURITY = [
  "Hosting",
  "Access controls",
  "Data ownership",
  "Retention",
  "Security",
];

export default function OurPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Y&Now Platform"
        title="One System for Learning, Assessment, and"
        highlight="Performance"
        subtitle="The Y&Now platform helps organisations connect digital learning, role-based assessment, and performance in one place."
      >
        <CtaButton href="/contact-us?type=platform" variant="primary" className="px-7 py-3.5">
          Request a platform demo
        </CtaButton>
      </PageHero>

      {/* Assess / Learn / Perform - the deck's three module headings are
          the tabs, so the section needs no heading of its own. */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <Reveal y={20} className="mx-auto max-w-6xl">
            <ModuleTabs modules={MODULES} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Connect With Existing"
            highlight="Systems"
            subtitle="The platform may connect with existing HRMS and ERP environments through agreed integrations. The current integration list is confirmed before a deployment begins."
            className="mb-12"
          />
          <SupportGrid items={INTEGRATIONS} />
        </Container>
      </section>

      <ChecklistPanel
        title="Data and"
        highlight="Security"
        subtitle="Information on the following is provided for enterprise deployments."
        items={DATA_AND_SECURITY}
        image="/about/learning-team.png"
        imageAlt="A technical team reviewing platform configuration together"
        imageFirst
        className="bg-surface"
      />

      <ClosingCta
        title="Request a Platform"
        highlight="Demo"
        body="Tell us what your current environment looks like and what you need the system to do."
      >
        <CtaButton href="/contact-us?type=platform" variant="primary" className="px-7 py-3.5">
          Request a platform demo
        </CtaButton>
      </ClosingCta>
    </>
  );
}
