import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, Landmark, Shield, HeartHandshake, School, GraduationCap,
  BadgeCheck, Award, FileCheck2, ArrowUpRight, Target,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "About Y&Now | Future-Skills EdTech Division of BroadArks Technology, Bhopal India",
  description:
    "Y&Now is the future-skills EdTech division of BroadArks Technology Pvt. Ltd. — ISO 9001:2015 certified, headquartered in Bhopal, MP — delivering workforce capability for enterprises, government, defence, and schools across India.",
};

const SERVE = [
  { icon: Building2, text: "Enterprises across manufacturing, retail, financial services, energy, and logistics" },
  { icon: HeartHandshake, text: "Corporate CSR sponsors funding community skilling and livelihood programmes" },
  { icon: Landmark, text: "Government bodies and PSUs including Indian Army, Indian Oil, NSDC, and state skill missions" },
  { icon: Shield, text: "Defence establishments and veteran resettlement programmes" },
  { icon: School, text: "Schools and educational institutions preparing students for industry entry" },
  { icon: GraduationCap, text: "Individual learners seeking industry-recognised vocational qualifications" },
];

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015",
    body: "Certified quality management systems under BroadArks Technology Pvt. Ltd.",
    // [VERIFY] Certificate number and validity — Legal/Compliance to supply.
    meta: "Certificate number: [INSERT] · Validity: [INSERT]",
  },
  {
    icon: Award,
    title: "NSDC Training Partnership",
    body: "Partner for training and implementation across eligible programmes.",
    // [VERIFY] Current partnership scope — Accreditation team to confirm.
    meta: "Partnership scope: [INSERT]",
  },
  {
    icon: FileCheck2,
    title: "NCVET / DGT Qualification Alignment",
    body: "Qualification alignment to national skilling standards where applicable.",
    // [VERIFY] Applicable qualifications — Accreditation team to confirm.
    meta: "Applicable qualifications: [INSERT]",
  },
];

const PARTNERS = [
  { name: "MPIHTTS, Bhopal", full: "Madhya Pradesh Institute of Hotel Management, Tourism, and Travel Studies" },
  { name: "CRISP, Bhopal", full: "Centre for Research and Industrial Staff Performance" },
  { name: "iACE", full: "Industry Academia Centre of Excellence" },
  // [VERIFY] IIP full name — Business team to supply.
  { name: "IIP", full: "[INSERT: full name]" },
  { name: "Sagar Institute of Research & Technology", full: "Bhopal" },
  { name: "CVRU", full: "C.V. Raman University" },
  { name: "SGSU", full: "Sardar Gulab Singh University" },
];

const FAQS: FaqItemData[] = [
  {
    q: "What is Y&Now?",
    a: "Y&Now is the future-skills EdTech division of BroadArks Technology Pvt. Ltd. We deliver workforce capability programmes and a digital capability platform for enterprises, CSR sponsors, government bodies, defence establishments, and schools across India.",
  },
  {
    q: "Where is Y&Now based?",
    a: "Y&Now is headquartered at Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar, Bhopal – 462042, Madhya Pradesh, India.",
  },
  {
    q: "Is Y&Now the same as BroadArks Foundation?",
    a: "No. Y&Now is a commercial EdTech division of BroadArks Technology Pvt. Ltd. BroadArks Foundation is a separate registered charitable entity operating at broadarksfoundation.org. The two entities have different legal registrations, purposes, and contact details.",
  },
  {
    q: "Who owns Y&Now?",
    a: "Y&Now operates under BroadArks Technology Pvt. Ltd. All commercial contracts and legal agreements are executed under this entity.",
  },
  {
    q: "How can I contact Y&Now?",
    a: "Email: info@broadarks.com · Phone: +91 75535 53372 · Address: Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar, Bhopal – 462042, Madhya Pradesh.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The future-skills EdTech division of"
        highlight="BroadArks Technology"
        subtitle="We build workforce capability for enterprises, government bodies, defence establishments, communities, and schools through industry-aligned programmes and a proprietary digital platform. Headquartered in Bhopal, Madhya Pradesh, and ISO 9001:2015 certified."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Mission */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#e8ecf2] bg-white p-8 text-center shadow-[0_18px_50px_rgba(20,21,46,0.06)] sm:p-12">
            <Reveal className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
              <Target size={24} />
            </Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-500">Our Mission</p>
            <AnimatedMission />
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Capability across every corner of"
            highlight="India's workforce"
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {SERVE.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.text} className="h-full">
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-[#e8ecf2] bg-surface p-6">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-700">{s.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Parent company */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Parent Company"
                title="Operated by BroadArks Technology Pvt. Ltd."
                align="left"
              />
              <Reveal delay={0.1} className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-600">
                <p>
                  Y&Now operates as the EdTech division of BroadArks Technology Pvt. Ltd. All commercial contracts, invoicing, and legal agreements are executed under BroadArks Technology Pvt. Ltd.
                </p>
                <p>
                  BroadArks Foundation (broadarksfoundation.org) is a separate registered charitable entity. It is not part of BroadArks Technology Pvt. Ltd. and has no commercial or legal relationship with Y&Now.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-6">
                <Link
                  href="https://broadarks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  Visit broadarks.com
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>

            <div>
              <SectionHeading eyebrow="Certifications & Credentials" title="Built on verified standards" align="left" />
              <Stagger className="mt-6 flex flex-col gap-4" stagger={0.09}>
                {CREDENTIALS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <StaggerItem key={c.title}>
                      <div className="flex gap-4 rounded-2xl border border-[#e8ecf2] bg-white p-5">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="mb-1 font-heading text-base font-700 text-ink">{c.title}</h3>
                          <p className="text-sm leading-relaxed text-neutral-600">{c.body}</p>
                          <p className="mt-2 inline-flex rounded-md border border-dashed border-[#d5dbe6] bg-surface px-2 py-1 text-xs font-medium text-neutral-500">
                            {c.meta}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic partners */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Strategic Partners"
            title="A network of implementation & academic"
            highlight="partners"
            className="mb-12"
          />
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {PARTNERS.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="flex h-full flex-col justify-center rounded-2xl border border-[#e8ecf2] bg-surface p-5 transition-colors hover:border-primary-200">
                  <h3 className="font-heading text-base font-700 text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.full}</p>
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
              <SectionHeading eyebrow="About FAQ" title="Get to know" highlight="Y&Now" align="left" />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let's build capability"
        highlight="together"
        subtitle="Talk to the Y&Now team about enterprise training, CSR programmes, or platform demos."
        primaryLabel="Talk to the Y&Now Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore Solutions"
        secondaryHref="/corporate"
      />
    </>
  );
}

function AnimatedMission() {
  return (
    <p className="font-heading text-[clamp(1.35rem,2.6vw,1.9rem)] font-600 leading-snug text-ink">
      To close the gap between what India&apos;s workforce can do and what India&apos;s industries need — through capability programmes and assessment systems that connect directly to{" "}
      <span className="text-primary-600">performance.</span>
    </p>
  );
}
