import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HoverWashCard from "@/components/ui/HoverWashCard";
import StepExplorer, { type StepItem } from "@/components/ui/StepExplorer";
import { CtaButton } from "@/components/ui/CtaButton";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Veteran Transition & Defence Upskilling Programmes | Y&Now",
  description:
    "Y&Now supports armed forces veterans in civilian employment transition through structured, industry-aligned resettlement programmes — co-designed with defence welfare organisations and delivered across India.",
};

const PROGRAMME_DESIGN: StepItem[] = [
  {
    icon: <AnimIcon name="ClipboardCheck" size={24} />,
    tint: "46,49,146",
    kicker: "Step 01",
    label: "Skills assessment",
    body: "We map transferable capabilities from service roles — leadership, technical skills, discipline, and operational decision-making — onto civilian job families, so the programme focuses on genuine gaps rather than retraining existing strengths.",
  },
  {
    icon: <AnimIcon name="HardHat" size={24} />,
    tint: "39,170,226",
    kicker: "Step 02",
    label: "Sector-specific vocational training",
    body: "Vocational retraining for manufacturing operations, security management, logistics, facilities management, and other sectors with strong, stated demand for veteran hires.",
  },
  {
    icon: <AnimIcon name="MessagesSquare" size={24} />,
    tint: "31,34,103",
    kicker: "Step 03",
    label: "Soft skills for civilian environments",
    body: "Communication adaption, team dynamics, and commercial awareness — bridging the gap between a service environment and a commercial workplace.",
  },
  {
    icon: <AnimIcon name="Handshake" size={24} />,
    tint: "32,180,232",
    kicker: "Step 04",
    label: "Employer linkage",
    body: "Direct connections to companies with a stated preference for veteran hires, so training leads to placement rather than ending at certification.",
  },
  // [VERIFY] Specific programmes and delivery formats — awaiting Defence programme lead
  {
    icon: <AnimIcon name="Sparkles" size={24} />,
    tint: "46,49,146",
    kicker: "Step 05",
    label: "Programme formats",
    body: "Specific programme formats and delivery schedules are confirmed with the Defence programme lead at scope definition.",
  },
];

interface Partner {
  icon: string;
  name: string;
  scope: string;
  pending?: boolean;
}

const PARTNERS: Partner[] = [
  // [VERIFY] Indian Army — specific programme scope pending Defence programme lead
  {
    icon: "Shield",
    name: "Indian Army",
    scope: "Specific programme scope to be confirmed with the Defence programme lead.",
    pending: true,
  },
  // [VERIFY] BSF / Bhartiya Vayu Sena / other armed forces partnerships — confirm with Defence team
  {
    icon: "Landmark",
    name: "Additional armed forces partners",
    scope: "BSF, Bhartiya Vayu Sena, and other armed forces partnerships to be confirmed with the Defence team.",
    pending: true,
  },
];

interface ImpactStat {
  icon: string;
  label: string;
}

// [VERIFY] All impact figures pending M&E team — rendered as placeholders, no fabricated numbers
const IMPACT_STATS: ImpactStat[] = [
  { icon: "Users", label: "Veterans supported" },
  { icon: "TrendingUp", label: "Employment linkage rate for veteran participants" },
  { icon: "Clock", label: "Average time from programme completion to employment" },
];

const FAQS: FaqItemData[] = [
  {
    q: "What types of roles do veterans typically transition to through Y&Now programmes?",
    // [VERIFY] Target job families pending Defence programme lead — suggested list retained from copy
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
    a: "Y&Now's assessment stage maps transferable capabilities from service roles — leadership, technical skills, discipline frameworks, and operational decision-making — onto civilian job requirements, ensuring the programme focuses on genuine gaps rather than retraining existing strengths.",
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
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Programme Design"
            title="How the transition programme is"
            highlight="built"
            subtitle="A structured path from service to civilian employment — assessing what veterans already bring, closing genuine gaps, and connecting them to employers who value the hire. Step through each stage."
            className="mb-14"
          />
          <StepExplorer steps={PROGRAMME_DESIGN} className="mx-auto max-w-5xl" />
        </Container>
      </section>

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
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
            {PARTNERS.map((p) => {
              const iconName = p.icon;
              return (
                <StaggerItem key={p.name} className="h-full">
                  <HoverWashCard noLift className="bg-surface">
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100 transition-transform duration-300 group-hover:scale-105">
                        <AnimIcon name={iconName} size={22} />
                      </div>
                      <div>
                        <h3 className="mb-1.5 flex items-center gap-2 font-heading text-base font-700 text-ink">
                          {p.name}
                          {p.pending && (
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-600 uppercase tracking-wide text-neutral-500">
                              To confirm
                            </span>
                          )}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-600">{p.scope}</p>
                      </div>
                    </div>
                  </HoverWashCard>
                </StaggerItem>
              );
            })}
          </Stagger>
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
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {IMPACT_STATS.map((s) => {
              const iconName = s.icon;
              return (
                <StaggerItem key={s.label} className="h-full">
                  {/* [VERIFY] Metric value pending M&E team — placeholder shown, no fabricated number */}
                  <HoverWashCard noLift className="items-center p-8 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-105">
                      <AnimIcon name={iconName} size={22} />
                    </div>
                    <div className="mb-2 font-heading text-3xl font-800 text-neutral-300">—</div>
                    <p className="text-sm leading-relaxed text-neutral-600">{s.label}</p>
                  </HoverWashCard>
                </StaggerItem>
              );
            })}
          </Stagger>
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

      <CtaBand
        eyebrow="Veteran Transition & Defence Upskilling"
        title="Ready to support"
        highlight="veteran transition?"
        subtitle="Whether you represent a defence welfare organisation or a corporate CSR programme, we'll design a resettlement pathway around the roles and outcomes you're targeting."
        primaryLabel="Explore Veteran Transition Programmes"
        primaryHref="/contact-us?type=defence"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
