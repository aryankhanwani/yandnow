import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { type StepItem } from "@/components/ui/StepExplorer";
import StepScroller from "@/components/ui/StepScroller";
import StackingCards, { type StackCardItem } from "@/components/ui/StackingCards";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Corporate Workforce Training & L&D Solutions",
  description:
    "Y&Now builds enterprise workforce capability across operational performance, digital adoption, leadership, and customer excellence. Trusted by Tata Group, JSW, Castrol India, BPCL, and Jaquar.",
};

const CATEGORIES: StackCardItem[] = [
  {
    num: "01",
    icon: <AnimIcon name="Gauge" size={26} />,
    tint: "46,49,146",
    image: "/images/corporate/programme-categories/operational-performance.jpg",
    title: "Operational Performance",
    body: "Role-specific behavioural skills, SOPs, and frontline execution standards that directly reduce operational error rates.",
  },
  {
    num: "02",
    icon: <AnimIcon name="MonitorSmartphone" size={26} />,
    tint: "39,170,226",
    image: "/images/corporate/programme-categories/digital-workflow-adoption.jpg",
    title: "Digital & Workflow Adoption",
    body: "Technology onboarding, digital POS, and ERP/HRMS user capability — so your workforce works with the systems you already run.",
  },
  {
    num: "03",
    icon: <AnimIcon name="Users2" size={26} />,
    tint: "31,34,103",
    image: "/images/corporate/programme-categories/leadership-management.jpg",
    title: "Leadership & Management",
    body: "First-line manager effectiveness and performance conversation frameworks for mid-to-senior leadership cohorts.",
  },
  {
    num: "04",
    icon: <AnimIcon name="Sparkles" size={26} />,
    tint: "32,180,232",
    image: "/images/corporate/programme-categories/customer-excellence.jpg",
    title: "Customer Excellence",
    body: "Showroom interaction, service recovery, and brand experience programmes for customer-facing roles.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: "Target",
    title: "Performance linkage",
    body: "Every programme maps to a defined performance signal. L&D ROI is measured before the contract closes.",
  },
  {
    icon: "Plug",
    title: "Platform integration",
    body: "Connects with SAP, SuccessFactors, Darwinbox, and other HRMS via REST APIs and SSO — no extra system to manage.",
  },
  {
    icon: "Layers",
    title: "Scale and sector depth",
    body: "Sector-specific content, NSDC/NCVET co-badging, and AR/VR simulation across manufacturing, retail, and energy.",
  },
];

const DELIVERY: StepItem[] = [
  {
    label: "Assess",
    kicker: "Stage 01",
    icon: <AnimIcon name="ClipboardCheck" size={24} />,
    tint: "46,49,146",
    image: "/images/corporate/delivery-model/assess.jpg",
    body: "We map current competency across roles, functions, and levels to pinpoint the exact gaps between where your workforce is and where it needs to be.",
  },
  {
    label: "Train",
    kicker: "Stage 02",
    icon: <AnimIcon name="GraduationCap" size={24} />,
    tint: "39,170,226",
    image: "/images/corporate/delivery-model/train.jpg",
    body: "Personalised learning paths — instructor-led, digital, AR/VR simulation, and microlearning — close identified skill gaps at individual and team level.",
  },
  {
    label: "Apply",
    kicker: "Stage 03",
    icon: <AnimIcon name="Wrench" size={24} />,
    tint: "31,34,103",
    image: "/images/corporate/delivery-model/apply.jpg",
    body: "On-the-job tasks, manager check-ins, and live scenario assessments verify that learning is transferring from training into the workplace.",
  },
  {
    label: "Perform",
    kicker: "Stage 04",
    icon: <AnimIcon name="TrendingUp" size={24} />,
    tint: "23,25,80",
    image: "/images/corporate/delivery-model/perform.jpg",
    body: "OKR tracking and performance signals measure whether capability improvements show up in actual job performance and operational KPIs.",
  },
  {
    label: "Improve",
    kicker: "Stage 05",
    icon: <AnimIcon name="RefreshCw" size={24} />,
    tint: "32,180,232",
    image: "/images/corporate/delivery-model/improve.jpg",
    body: "Analytics from each cycle inform the next — a continuous loop between learning investment, performance data, and workforce planning.",
  },
];

const CLIENTS = ["Tata Group", "JSW", "Castrol India", "BPCL", "Jaquar"];

const FAQS: FaqItemData[] = [
  {
    q: "What industries does Y&Now cover for corporate training?",
    a: "Y&Now delivers corporate capability programmes across manufacturing, energy, retail, financial services, FMCG, automotive, and logistics.",
  },
  {
    q: "How does Y&Now measure L&D ROI?",
    a: "Outcomes are measured through pre- and post-assessment scores, OKR achievement rates, supervisor-validated competency evidence, and operational performance signals such as incident rates, error rates, or conversion rates. Clients receive monthly impact dashboards and quarterly outcome reports.",
  },
  {
    q: "How does the Y&Now platform integrate with our existing HRMS?",
    a: "The Y&Now platform connects with SAP, SuccessFactors, Darwinbox, and other HRMS via REST APIs, SSO/SAML, and SCIM provisioning. Our integration team conducts a technical assessment at onboarding to map the connection to your specific system configuration.",
  },
  {
    q: "How long does a typical corporate programme take?",
    a: "A standard corporate capability programme — from training needs analysis through delivery and outcome review — runs across 12–16 weeks. Shorter engagements (4–6 weeks) are available for specific skill interventions. Timelines are confirmed at scope definition.",
  },
  {
    q: "Can Y&Now deliver training at multiple locations simultaneously?",
    a: "Yes. Y&Now delivers across multiple sites using a combination of in-person facilitators, virtual instructor-led sessions, and self-paced digital content.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Training"
        title="Build a High-Performance"
        highlight="Workforce with L&D"
        subtitle="We build proficiency at every level, tying learning to performance measured through OKRs and KPIs."
      >
        <CtaButton href="/contact-us?type=corporate" variant="primary" className="px-7 py-3.5">
          Design a Corporate Programme
        </CtaButton>
        <CtaButton href="/our-platform" variant="secondary" className="px-7 py-3.5">
          Explore the Platform
        </CtaButton>
      </PageHero>

      {/* Programme categories — scroll-stacked deck with a pinned title */}
      <section className="bg-surface">
        <StackingCards
          cards={CATEGORIES}
          heading={
            <SectionHeading
              eyebrow="Programme Categories"
              title="Four categories of corporate"
              highlight="capability"
              subtitle="Y&Now delivers enterprise capability where it moves the business — from the frontline to the leadership bench. Scroll to step through each."
            />
          }
        />
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Enterprises Choose Y&Now"
            title="L&D that shows up in"
            highlight="business results"
            subtitle="Built around operational performance signals, not course-completion metrics — embedded into workflow and integrated with your HRMS."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
            {DIFFERENTIATORS.map((d) => {
              return (
                <StaggerItem key={d.title} className="h-full">
                  <SpotlightCard>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-transform duration-300 group-hover:scale-105">
                      <AnimIcon name={d.icon} size={24} />
                    </div>
                    <h3 className="mb-2.5 font-heading text-xl font-700 leading-tight text-ink">{d.title}</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-600">{d.body}</p>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Delivery model */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The 5-Stage Delivery Model"
            title="Assess → Train → Apply → Perform →"
            highlight="Improve"
            subtitle="Step through the corporate delivery cycle — which typically runs across a 12–16 week period with quarterly review touchpoints."
            className="mb-12"
          />
          <StepScroller steps={DELIVERY} className="mx-auto max-w-6xl" />
        </Container>
      </section>

      {/* Client results */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Client Focus"
            title="Enterprises we build capability"
            highlight="with"
            className="mb-14"
          />
          {/* Logo wall — one unified grid (3 over 2), hairline
              dividers via a 1px gap over the border colour. Logos
              to be dropped into each cell. */}
          <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2]">
            <div className="grid grid-cols-6 gap-px">
              {CLIENTS.map((name, i) => (
                <div
                  key={name}
                  className={`group flex h-24 items-center justify-center bg-white px-4 transition-colors duration-300 hover:bg-primary-50/50 lg:h-28 ${
                    i < 3 ? "col-span-2" : "col-span-3"
                  }`}
                >
                  <span className="text-center font-heading text-base font-700 text-neutral-400 transition-colors duration-300 group-hover:text-primary-600 lg:text-lg">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Corporate FAQ"
                title="Common questions from"
                highlight="L&D leaders"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Corporate Training"
        title="Ready to design a"
        highlight="corporate programme?"
        subtitle="Tell us about your workforce and the outcomes you're targeting — we'll map a capability programme around them."
        primaryLabel="Design a Corporate Programme"
        primaryHref="/contact-us?type=corporate"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
