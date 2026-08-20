import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import ImpactStatGrid from "@/components/ui/ImpactStatGrid";
import OrganisationGrid, { type OrganisationItem } from "@/components/ui/OrganisationGrid";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Veteran Transition & Defence Upskilling Programmes | Y&Now",
  description:
    "Y&Now supports armed forces veterans in civilian employment transition through structured, industry-aligned resettlement programmes, co-designed with defence welfare organisations and delivered across India.",
};

const PROGRAMME_DESIGN: HorizontalCapability[] = [
  {
    icon: "ClipboardCheck",
    tint: "46,49,146",
    title: "Skills assessment",
    body: "We map transferable capabilities from service roles (leadership, technical skills, discipline, and operational decision-making) onto civilian job families, so the programme focuses on genuine gaps rather than retraining existing strengths.",
  },
  {
    icon: "HardHat",
    tint: "39,170,226",
    title: "Sector-specific vocational training",
    body: "Vocational retraining for manufacturing operations, security management, logistics, facilities management, and other sectors with strong, stated demand for veteran hires.",
  },
  {
    icon: "MessagesSquare",
    tint: "31,34,103",
    title: "Soft skills for civilian environments",
    body: "Communication adaption, team dynamics, and commercial awareness, bridging the gap between a service environment and a commercial workplace.",
  },
  {
    icon: "Handshake",
    tint: "32,180,232",
    title: "Employer linkage",
    body: "Direct connections to companies with a stated preference for veteran hires, so training leads to placement rather than ending at certification.",
  },
  // [VERIFY] Specific programmes and delivery formats - awaiting Defence programme lead
  {
    icon: "Sparkles",
    tint: "46,49,146",
    title: "Programme formats",
    body: "Specific programme formats and delivery schedules are confirmed with the Defence programme lead at scope definition.",
  },
];

const PARTNERS: OrganisationItem[] = [
  // [VERIFY] Indian Army - specific programme scope pending Defence programme lead
  {
    name: "Indian Army",
    note: "Specific programme scope to be confirmed with the Defence programme lead.",
  },
  // [VERIFY] BSF / Bhartiya Vayu Sena / other armed forces partnerships - confirm with Defence team
  {
    name: "Additional armed forces partners",
    note: "BSF, Bhartiya Vayu Sena, and other armed forces partnerships to be confirmed with the Defence team.",
  },
];

// [VERIFY] All impact figures pending M&E team - rendered as placeholders, no fabricated numbers
const IMPACT_STATS = [
  { title: "Veterans Supported", sub: "Veterans supported through transition programmes" },
  { title: "Employment Linkage", sub: "Employment linkage rate for veteran participants" },
  { title: "Time to Employment", sub: "Average time from programme completion to employment" },
];

const FAQS: FaqItemData[] = [
  {
    q: "What types of roles do veterans typically transition to through Y&Now programmes?",
    // [VERIFY] Target job families pending Defence programme lead - suggested list retained from copy
    a: "Target job families are being confirmed with our Defence programme lead. Suggested pathways include manufacturing supervision, security management, logistics operations, facilities management, and EHS compliance roles.",
  },
  {
    q: "Can corporate CSR budgets fund Y&Now veteran transition programmes?",
    a: "Yes. Veteran transition programmes may qualify under Schedule VII of the Companies Act, 2013. We recommend confirming the applicable schedule head with your legal team. Y&Now provides full documentation for CSR fund utilisation reporting.",
  },
  {
    q: "How long does a Y&Now veteran transition programme run?",
    // [VERIFY] Programme duration pending Defence team
    a: "Programme duration is confirmed at scope definition with our Defence team.",
  },
  {
    q: "Does Y&Now work directly with defence welfare organisations?",
    // [VERIFY] Specific partnership arrangements pending Defence programme lead
    a: "Yes. Y&Now co-designs and delivers programmes in partnership with defence welfare bodies. Specific partnership arrangements are confirmed with our Defence programme lead.",
  },
  {
    q: "How does Y&Now account for the existing skills veterans bring?",
    a: "Y&Now's assessment stage maps transferable capabilities from service roles (leadership, technical skills, discipline frameworks, and operational decision-making) onto civilian job requirements, ensuring the programme focuses on genuine gaps rather than retraining existing strengths.",
  },
];

export default function DefenceProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Veteran Transition & Defence Upskilling"
        title="New Careers for"
        highlight="Armed Forces Veterans"
        subtitle="We help veterans train, build new skills, and find good civilian jobs after service."
      >
        <CtaButton href="/contact-us?type=defence" variant="primary" className="px-7 py-3.5">
          Explore Veteran Transition Programmes
        </CtaButton>
        <CtaButton href="/contact-us" variant="secondary" className="px-7 py-3.5">
          Talk to Our Team
        </CtaButton>
      </PageHero>

      {/* Programme Design */}
      <HorizontalCapabilityScroller
        items={PROGRAMME_DESIGN}
        eyebrow="Programme Design"
        title="How the transition programme is"
        highlight="built"
        subtitle="A structured path from service to civilian employment: assessing what veterans already bring, closing genuine gaps, and connecting them to employers who value the hire."
      />

      <EditorialProofSection
        eyebrow="Transition in Practice"
        title="Service experience, translated for"
        highlight="civilian work"
        body="Practical, instructor-led environments help veterans connect existing operational strengths with the expectations, tools, and language of civilian roles."
        image="/images/defence/proof/veteran-transition-training.jpg"
        imageAlt="Veterans collaborating with an instructor during civilian technical training"
        note="Assessment → training → employer linkage"
      />

      {/* Partner Organisations */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Partner Organisations"
            title="Delivered in partnership with defence"
            highlight="institutions"
            subtitle="Y&Now has delivered veteran-focused programmes in partnership with armed forces and defence welfare organisations across India."
            className="mb-14"
          />
          <OrganisationGrid items={PARTNERS} />
        </Container>
      </section>

      {/* Impact Data */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Impact Data"
            title="Measuring veteran transition"
            highlight="outcomes"
            subtitle="Programme impact is tracked and verified by our M&E team. Figures for the current reporting cycle are being finalised."
            className="mb-14"
          />
          {/* [VERIFY] Metric values pending M&E team sign-off. */}
          <ImpactStatGrid items={IMPACT_STATS} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Defence FAQ"
                title="Common questions on veteran"
                highlight="transition"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}
