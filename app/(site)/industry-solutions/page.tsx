import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HoverWashCard from "@/components/ui/HoverWashCard";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Industrial Workforce Training — Manufacturing, EHS & Precision Engineering",
  description:
    "Y&Now delivers sector-specific workforce training for industrial environments — combining AR/VR simulation, NSDC/NCVET co-badging, EHS compliance, and traceable competency outcomes for manufacturing and precision engineering.",
};

const CAPABILITIES: HorizontalCapability[] = [
  {
    icon: "Cog",
    tint: "46,49,146",
    title: "CNC Machine Operation",
    body: "Setup, programming, and quality control for CNC machining across production environments.",
  },
  {
    icon: "Flame",
    tint: "39,170,226",
    title: "Welding Certification",
    body: "SMAW, GTAW, and GMAW certification delivered to WPS (Welding Procedure Specification) standards.",
  },
  {
    icon: "Wrench",
    tint: "31,34,103",
    title: "TPM & SMED",
    body: "Total Productive Maintenance and Single-Minute Exchange of Die for reliable, high-uptime operations.",
  },
  {
    icon: "ShieldAlert",
    tint: "32,180,232",
    title: "EHS Compliance",
    body: "Hazard identification, incident reporting, and emergency response embedded into daily practice.",
  },
  {
    icon: "ClipboardCheck",
    tint: "46,49,146",
    title: "Quality Management",
    body: "FPY (first-pass yield), RCA (root cause analysis), and NDT protocols for measurable quality gains.",
  },
  {
    icon: "Glasses",
    tint: "39,170,226",
    title: "AR/VR Simulation Labs",
    body: "Simulation for high-risk procedures — enabling practice without production risk or consumables cost.",
  },
];

interface Accreditation {
  icon: string;
  title: string;
  body: string;
}

const ACCREDITATIONS: Accreditation[] = [
  {
    icon: "Award",
    title: "NSDC Training Partnership",
    body: "Co-badged certifications for eligible programmes under our NSDC training partnership.",
  },
  {
    icon: "BadgeCheck",
    title: "NCVET & DGT Alignment",
    /* [VERIFY] confirm specific qualifications — Accreditation team */
    body: "NCVET and DGT qualification alignment. [Specific qualifications to be confirmed.]",
  },
  {
    icon: "FileCheck",
    title: "ISO 9001:2015 Certified",
    body: "ISO 9001:2015 certified delivery process (BroadArks Technology Pvt. Ltd.).",
  },
];

const FAQS: FaqItemData[] = [
  {
    q: "What sectors does Y&Now cover for industrial training?",
    /* [VERIFY] confirm full active sector list — Programme team */
    a: "Y&Now currently delivers industrial training for manufacturing, precision engineering, automotive components, energy, and regulated chemical/process environments.",
  },
  {
    q: "Does Y&Now provide AR/VR simulation for hazardous processes?",
    a: "Yes. Y&Now deploys AR/VR simulation for high-risk procedures including welding, heavy machinery operation, chemical handling, and emergency response scenarios. Simulation allows skill practice without production risk or consumables cost.",
  },
  {
    q: "Are Y&Now industrial programmes NSDC-accredited?",
    /* [VERIFY] current NSDC-accredited programme list — Accreditation team */
    a: "Select programmes are co-badged with NSDC. NCVET and DGT alignment is available for applicable qualifications. We confirm accreditation applicability at programme scoping.",
  },
  {
    q: "Can Y&Now deliver training inside our plant facility?",
    a: "Yes. Y&Now delivers on-site, at dedicated training centres, or through a blended model combining both. We have experience operating within active production environments and follow your site safety protocols throughout delivery.",
  },
  {
    q: "How does Y&Now measure the outcome of industrial training?",
    /* [VERIFY] confirm specific outcome measurement framework — Programme team */
    a: "Outcomes are measured through post-assessment competency scores, supervisor-validated sign-offs, and operational performance signals such as FPY improvement, incident rate reduction, and OEE (Overall Equipment Effectiveness) change.",
  },
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Solutions"
        title="Workforce Training Built for"
        highlight="Technical Environments"
        subtitle="Sector-specific training with blended learning, AR/VR simulation, and on-the-job evidence for safety and compliance standards."
      >
        <CtaButton href="/contact-us?type=industry" variant="primary" className="px-7 py-3.5">
          Request a Sector Pilot
        </CtaButton>
        <CtaButton href="/our-platform" variant="secondary" className="px-7 py-3.5">
          Explore the Platform
        </CtaButton>
      </PageHero>

      {/* Manufacturing & Precision Engineering */}
      <HorizontalCapabilityScroller items={CAPABILITIES} />

      {/* Case Evidence */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Case Evidence"
            title="Outcomes on the"
            highlight="plant floor"
            className="mb-12"
          />
          {/* [VERIFY] Replace anonymised placeholder with an approved client reference (named with permission, or anonymised) — Account team */}
          <Reveal y={20} className="mx-auto max-w-5xl">
            <figure className="grid overflow-hidden rounded-[2rem] border border-[#dde5f0] bg-white lg:grid-cols-[0.78fr_1.22fr]">
              <div className="relative flex min-h-[19rem] flex-col justify-between overflow-hidden bg-primary-950 p-8 text-white lg:p-10">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(39,170,226,0.34),transparent_48%),radial-gradient(circle_at_100%_100%,rgba(46,49,146,0.7),transparent_55%)]"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-secondary-300 backdrop-blur-sm">
                  <AnimIcon name="Factory" size={22} />
                </div>
                <div className="relative">
                  <div className="font-heading text-[clamp(4rem,8vw,6.5rem)] font-800 leading-none tracking-[-0.06em]">
                    18%
                  </div>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                    reduction in first-pass yield defects during the pilot period
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 lg:p-10 lg:pl-12">
                <div>
                  <div className="mb-8 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary-50 px-3 py-1.5 text-[11px] font-700 uppercase tracking-[0.14em] text-primary-600">
                      8-week pilot
                    </span>
                    <span className="rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] font-600 text-neutral-500">
                      Automotive components
                    </span>
                  </div>
                  <blockquote className="font-heading text-[clamp(1.45rem,2.7vw,2.15rem)] font-600 leading-[1.3] tracking-tight text-ink">
                    &ldquo;A focused capability pilot translated training into a measurable improvement on the production floor.&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-10 flex items-start gap-3 border-t border-neutral-100 pt-5 text-xs leading-relaxed text-neutral-500">
                  <span className="mt-1 block h-2 w-2 flex-none rounded-full bg-secondary-400" aria-hidden />
                  Anonymised pilot outcome — approved client reference pending verification.
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* Accreditation & Certification */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Accreditation & Certification"
            title="Credentials that carry"
            highlight="weight"
            subtitle="Programmes are co-badged and aligned to national frameworks, delivered through an ISO-certified process."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
            {ACCREDITATIONS.map((a) => {
              const iconName = a.icon;
              return (
                <StaggerItem key={a.title} className="h-full">
                  <HoverWashCard>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-105">
                      <AnimIcon name={iconName} size={20} />
                    </div>
                    <h3 className="mb-2 font-heading text-base font-700 text-ink">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{a.body}</p>
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
                eyebrow="Industry FAQ"
                title="Common questions from"
                highlight="plant leaders"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Industry Solutions"
        title="Ready to run a"
        highlight="sector pilot?"
        subtitle="Tell us about your plant, your workforce, and the technical outcomes you're targeting — we'll scope a sector-calibrated pilot around them."
        primaryLabel="Request a Sector Pilot"
        primaryHref="/contact-us?type=industry"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
