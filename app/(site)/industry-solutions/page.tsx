import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HoverWashCard from "@/components/ui/HoverWashCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Industrial Workforce Training — Manufacturing, EHS & Precision Engineering",
  description:
    "Y&Now delivers sector-specific workforce training for industrial environments — combining AR/VR simulation, NSDC/NCVET co-badging, EHS compliance, and traceable competency outcomes for manufacturing and precision engineering.",
};

interface Capability {
  icon: string;
  tint: string;
  title: string;
  body: string;
}

const CAPABILITIES: Capability[] = [
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
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Manufacturing & Precision Engineering"
            title="What our manufacturing programmes"
            highlight="cover"
            subtitle="Y&Now's manufacturing training programmes span the full technical stack — from machine operation and certification through maintenance, safety, and quality."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {CAPABILITIES.map((c) => {
              const iconName = c.icon;
              return (
                <StaggerItem key={c.title} className="h-full">
                  <HoverWashCard>
                    <div
                      className="mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ color: `rgb(${c.tint})`, backgroundColor: `rgba(${c.tint},0.08)` }}
                    >
                      <AnimIcon name={iconName} size={22} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-lg font-700 text-ink">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-600">{c.body}</p>
                    </div>
                  </HoverWashCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

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
          <Reveal y={20} className="mx-auto max-w-3xl">
            <figure className="relative overflow-hidden rounded-3xl border border-[#e8ecf2] bg-surface p-9 shadow-[0_18px_40px_rgba(20,21,46,0.06)] lg:p-12">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-mist opacity-60" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <AnimIcon name="Factory" size={22} />
                </div>
                <blockquote className="font-heading text-xl font-600 leading-snug text-ink lg:text-2xl">
                  &ldquo;A pilot at an automotive components manufacturer in India reduced
                  first-pass yield defects by 18% within 8 weeks.&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-neutral-500">
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
