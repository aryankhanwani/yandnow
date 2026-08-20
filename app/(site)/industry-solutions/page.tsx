import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import CountUp from "@/components/ui/CountUp";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Industrial Workforce Training: Manufacturing, EHS & Precision Engineering",
  description:
    "Y&Now delivers sector-specific workforce training for industrial environments, combining AR/VR simulation, NSDC/NCVET co-badging, EHS compliance, and traceable competency outcomes for manufacturing and precision engineering.",
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
    body: "Simulation for high-risk procedures, enabling practice without production risk or consumables cost.",
  },
];

interface Accreditation {
  logo: string;
  title: string;
  body: string;
}

const ACCREDITATIONS: Accreditation[] = [
  {
    logo: "/images/industry/accreditation/nsdc-training-partnership.png",
    title: "NSDC Training Partnership",
    body: "Co-badged certifications for eligible programmes under our NSDC training partnership.",
  },
  {
    logo: "/images/industry/accreditation/ncvet-dgt-alignment.png",
    title: "NCVET & DGT Alignment",
    /* [VERIFY] confirm specific qualifications - Accreditation team */
    body: "NCVET and DGT qualification alignment. [Specific qualifications to be confirmed.]",
  },
  {
    logo: "/images/industry/accreditation/iso-9001-2015.png",
    title: "ISO 9001:2015 Certified",
    body: "ISO 9001:2015 certified delivery process (BroadArks Technology Pvt. Ltd.).",
  },
];

const FAQS: FaqItemData[] = [
  {
    q: "What sectors does Y&Now cover for industrial training?",
    /* [VERIFY] confirm full active sector list - Programme team */
    a: "Y&Now currently delivers industrial training for manufacturing, precision engineering, automotive components, energy, and regulated chemical/process environments.",
  },
  {
    q: "Does Y&Now provide AR/VR simulation for hazardous processes?",
    a: "Yes. Y&Now deploys AR/VR simulation for high-risk procedures including welding, heavy machinery operation, chemical handling, and emergency response scenarios. Simulation allows skill practice without production risk or consumables cost.",
  },
  {
    q: "Are Y&Now industrial programmes NSDC-accredited?",
    /* [VERIFY] current NSDC-accredited programme list - Accreditation team */
    a: "Select programmes are co-badged with NSDC. NCVET and DGT alignment is available for applicable qualifications. We confirm accreditation applicability at programme scoping.",
  },
  {
    q: "Can Y&Now deliver training inside our plant facility?",
    a: "Yes. Y&Now delivers on-site, at dedicated training centres, or through a blended model combining both. We have experience operating within active production environments and follow your site safety protocols throughout delivery.",
  },
  {
    q: "How does Y&Now measure the outcome of industrial training?",
    /* [VERIFY] confirm specific outcome measurement framework - Programme team */
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
          {/* [VERIFY] Replace anonymised placeholder with an approved client reference (named with permission, or anonymised) - Account team */}
          <Reveal y={20} className="w-full">
            <figure className="w-full overflow-hidden rounded-3xl border border-[#e1e7ef] bg-surface">
              <div className="relative aspect-[16/7] min-h-64 w-full">
                <Image
                  src="/images/industry/proof/plant-floor-training.jpg"
                  alt="Technical trainer guiding plant operators through machined-component quality inspection"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-950/25 to-transparent" />
              </div>
              <div className="grid p-8 md:grid-cols-[0.62fr_1.38fr] md:p-12 lg:p-16">
                <div className="pb-8 md:pb-0 md:pr-10">
                  <CountUp
                    to={18}
                    suffix="%"
                    className="block font-heading text-[clamp(3.75rem,7vw,5.5rem)] font-800 leading-none tracking-[-0.055em] text-primary-600"
                  />
                  <p className="mt-3 max-w-[12rem] text-sm leading-relaxed text-neutral-600">
                    fewer first-pass yield defects in an 8-week pilot
                  </p>
                </div>

                <div className="border-t border-neutral-200 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <blockquote className="font-heading text-[clamp(1.35rem,2.4vw,1.85rem)] font-600 leading-[1.35] tracking-tight text-ink">
                    An automotive components manufacturer translated focused workforce training into a measurable production-floor improvement.
                  </blockquote>
                  <figcaption className="mt-6 text-xs leading-relaxed text-neutral-500">
                    Anonymised pilot outcome. Approved client reference pending verification.
                  </figcaption>
                </div>
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
          <Stagger
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#e1e7ef] bg-[#e1e7ef] md:grid-cols-3"
            stagger={0.1}
          >
            {ACCREDITATIONS.map((a) => {
              return (
                <StaggerItem key={a.title} className="h-full bg-white">
                  <article className="flex h-full flex-col p-7 lg:p-8">
                    <div className="relative mb-7 h-28 w-28 overflow-hidden rounded-2xl border border-primary-100 bg-white">
                      <Image src={a.logo} alt="" fill sizes="112px" className="object-contain" />
                    </div>
                    <h3 className="font-heading text-lg font-700 leading-tight text-ink">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{a.body}</p>
                  </article>
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
    </>
  );
}
