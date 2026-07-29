import type { Metadata } from "next";
import {
  Gauge, MonitorSmartphone, Users2, Sparkles,
  Target, Plug, Layers, Check, type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Corporate Workforce Training & L&D Solutions",
  description:
    "Y&Now builds enterprise workforce capability across operational performance, digital adoption, leadership, and customer excellence. Trusted by Tata Group, JSW, Castrol India, BPCL, and Jaquar.",
};

interface Category {
  icon: LucideIcon;
  tint: string;
  title: string;
  body: string;
}

const CATEGORIES: Category[] = [
  {
    icon: Gauge,
    tint: "46,49,146",
    title: "Operational Performance",
    body: "Role-specific behavioural skills, SOPs, and frontline execution standards that directly reduce operational error rates.",
  },
  {
    icon: MonitorSmartphone,
    tint: "39,170,226",
    title: "Digital & Workflow Adoption",
    body: "Technology onboarding, digital POS, and ERP/HRMS user capability — so your workforce works with the systems you already run.",
  },
  {
    icon: Users2,
    tint: "31,34,103",
    title: "Leadership & Management",
    body: "First-line manager effectiveness and performance conversation frameworks for mid-to-senior leadership cohorts.",
  },
  {
    icon: Sparkles,
    tint: "32,180,232",
    title: "Customer Excellence",
    body: "Showroom interaction, service recovery, and brand experience programmes for customer-facing roles.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Performance linkage",
    body: "Every programme maps to a defined performance signal. L&D ROI is measured before the contract closes.",
  },
  {
    icon: Plug,
    title: "Platform integration",
    body: "Connects with SAP, SuccessFactors, Darwinbox, and other HRMS via REST APIs and SSO — no extra system to manage.",
  },
  {
    icon: Layers,
    title: "Scale and sector depth",
    body: "Sector-specific content, NSDC/NCVET co-badging, and AR/VR simulation across manufacturing, retail, and energy.",
  },
];

const DELIVERY = ["Assess", "Train", "Apply", "Perform", "Improve"];

const CLIENT_RESULTS = [
  { name: "Tata Group", focus: "Behavioural skills transformation across diverse teams." },
  { name: "JSW", focus: "Digital transformation and SCADA literacy for plant operations." },
  { name: "Castrol India", focus: "Sales force capability across dealer networks." },
  { name: "BPCL", focus: "Digital POS adoption and customer experience." },
  { name: "Jaquar", focus: "Showroom customer engagement and brand excellence." },
];

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
        title="Build a High-Performance Workforce with"
        highlight="Industry-Aligned L&D"
        subtitle="Y&Now partners with enterprise organisations to build workforce proficiency across roles, functions, and levels. Our programmes connect learning directly to operational performance — with outcomes measured through OKRs, supervisor sign-offs, and operational KPIs your leadership team can track."
        crumbs={[{ label: "Home", href: "/" }, { label: "Corporate" }]}
      >
        <CtaButton href="/contact-us?type=corporate" variant="primary" className="px-7 py-3.5">
          Design a Corporate Programme
        </CtaButton>
        <CtaButton href="/our-platform" variant="secondary" className="px-7 py-3.5">
          Explore the Platform
        </CtaButton>
      </PageHero>

      {/* Programme categories */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Programme Categories"
            title="Four categories of corporate"
            highlight="capability"
            subtitle="Y&Now delivers enterprise capability where it moves the business — from the frontline to the leadership bench."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title} className="h-full">
                  <div className="group flex h-full gap-5 rounded-2xl border border-[#e8ecf2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_44px_rgba(20,21,46,0.09)]">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ color: `rgb(${c.tint})`, backgroundColor: `rgba(${c.tint},0.08)` }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-lg font-700 text-ink">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-600">{c.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Why Enterprises Choose Y&Now"
                title="L&D that shows up in"
                highlight="business results"
                subtitle="Built around operational performance signals, not course-completion metrics — embedded into workflow and integrated with your HRMS."
                align="left"
              />
            </div>
            <Stagger className="flex flex-col gap-4" stagger={0.1}>
              {DIFFERENTIATORS.map((d) => {
                const Icon = d.icon;
                return (
                  <StaggerItem key={d.title}>
                    <div className="flex gap-5 rounded-2xl border border-[#e8ecf2] bg-surface p-6">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="mb-1.5 font-heading text-base font-700 text-ink">{d.title}</h3>
                        <p className="text-sm leading-relaxed text-neutral-600">{d.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Delivery model */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The 5-Stage Delivery Model"
            title="Assess → Train → Apply → Perform → Improve"
            subtitle="For corporate engagements, the cycle typically runs across a 12–16 week delivery period with quarterly review touchpoints."
            className="mb-12"
          />
          <Reveal className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {DELIVERY.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-full border border-[#e8ecf2] bg-white px-5 py-3 shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-ink">{step}</span>
                </div>
                {i < DELIVERY.length - 1 && <span className="hidden text-neutral-300 sm:inline">→</span>}
              </div>
            ))}
          </Reveal>
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
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {CLIENT_RESULTS.map((c) => (
              <StaggerItem key={c.name} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-surface p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-bold text-primary-600 shadow-sm ring-1 ring-neutral-100">
                    {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="mb-1.5 font-heading text-base font-700 text-ink">{c.name}</h3>
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                    {c.focus}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
