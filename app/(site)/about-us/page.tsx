import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import OrganisationGrid from "@/components/ui/OrganisationGrid";
import ScrollTextReveal from "@/components/ui/ScrollTextReveal";
import WhoWeServeExplorer, { type AudienceItem } from "@/components/sections/WhoWeServeExplorer";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "About Y&Now | Future-Skills EdTech Division of BroadArks Technology, Bhopal India",
  description:
    "Y&Now is the future-skills EdTech division of BroadArks Technology Pvt. Ltd. — ISO 9001:2015 certified, headquartered in Bhopal, MP — delivering workforce capability for enterprises, government, defence, and schools across India.",
};

const SERVE: AudienceItem[] = [
  {
    icon: "Building2",
    title: "Enterprises",
    description: "Role-based capability programmes that connect technical learning to plant, service, and business performance.",
    image: "/about/audiences/enterprises.png",
    imageAlt: "Manufacturing professionals learning a digital technical workflow on a factory floor",
  },
  {
    icon: "HeartHandshake",
    title: "CSR Sponsors",
    description: "Outcome-led community skilling and livelihood programmes designed for measurable, Schedule VII-aligned impact.",
    image: "/about/audiences/csr-sponsors.png",
    imageAlt: "CSR programme leaders visiting a community digital-skills workshop",
  },
  {
    icon: "Landmark",
    title: "Government & PSUs",
    description: "Scalable implementation for public workforce priorities, national qualifications, and state skill missions.",
    image: "/about/audiences/government-psus.png",
    imageAlt: "Public-sector programme team reviewing training outcomes with vocational instructors",
  },
  {
    icon: "Shield",
    title: "Defence & Veterans",
    description: "Transition-focused technical pathways that translate service experience into meaningful civilian opportunities.",
    image: "/about/audiences/defence-veterans.png",
    imageAlt: "Veterans participating in an advanced technical reskilling workshop",
  },
  {
    icon: "School",
    title: "Schools",
    description: "Applied vocational exposure that helps students discover pathways and prepare confidently for industry entry.",
    image: "/about/audiences/schools.png",
    imageAlt: "School students collaborating with a teacher on an applied robotics project",
  },
  {
    icon: "GraduationCap",
    title: "Individual Learners",
    description: "Industry-recognised skills, practical assessment, and clearer routes into work and career progression.",
    image: "/about/audiences/learners.png",
    imageAlt: "A learner practising a digital technical skill with guidance from a mentor",
  },
];

const CREDENTIALS = [
  {
    logo: "/images/industry/accreditation/iso-9001-2015.png",
    title: "ISO 9001:2015",
    body: "Certified quality management systems under BroadArks Technology Pvt. Ltd.",
    // [VERIFY] Certificate number and validity — Legal/Compliance to supply.
    meta: "Certificate number and validity available on request",
  },
  {
    logo: "/images/industry/accreditation/nsdc-training-partnership.png",
    title: "NSDC Training Partnership",
    body: "Partner for training and implementation across eligible programmes.",
    // [VERIFY] Current partnership scope — Accreditation team to confirm.
    meta: "Partnership scope confirmed at scoping",
  },
  {
    logo: "/images/industry/accreditation/ncvet-dgt-alignment.png",
    title: "NCVET / DGT Qualification Alignment",
    body: "Qualification alignment to national skilling standards where applicable.",
    // [VERIFY] Applicable qualifications — Accreditation team to confirm.
    meta: "Aligned qualifications confirmed at scoping",
  },
];

const PARTNERS = [
  { name: "MPIHTTS, Bhopal", full: "Madhya Pradesh Institute of Hotel Management, Tourism, and Travel Studies" },
  { name: "CRISP, Bhopal", full: "Centre for Research and Industrial Staff Performance" },
  { name: "iACE", full: "Industry Academia Centre of Excellence" },
  // [VERIFY] IIP full name — Business team to supply.
  { name: "IIP", full: "Full name to be confirmed" },
  { name: "Sagar Institute of Research & Technology", full: "Bhopal" },
  { name: "CVRU", full: "C.V. Raman University" },
  { name: "SGSU", full: "Sardar Gulab Singh University" },
];

const TEAM_IMAGES = [
  {
    src: "/about/team-collaboration.png",
    alt: "Y&Now team members collaborating over programme sketches",
    className: "h-[19rem] sm:h-[27rem] lg:h-[34rem]",
    sizes: "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 24vw",
  },
  {
    src: "/about/program-planning.png",
    alt: "Learning designers planning a vocational programme together",
    className: "mt-8 h-[15rem] sm:mt-14 sm:h-[21rem] lg:mt-20 lg:h-[25rem]",
    sizes: "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw",
  },
  {
    src: "/about/training-review.png",
    alt: "Programme managers reviewing digital training material",
    className: "h-[15rem] sm:mt-6 sm:h-[23rem] lg:mt-8 lg:h-[29rem]",
    sizes: "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 23vw",
  },
  {
    src: "/about/learning-team.png",
    alt: "Y&Now colleagues sharing ideas around a laptop",
    className: "mt-8 h-[19rem] sm:mt-0 sm:h-[27rem] lg:h-[34rem]",
    sizes: "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 24vw",
  },
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
        subtitle="Building workforce capability for enterprises, government, defence, communities, and schools through industry-aligned programmes and platform."
        className="border-b-0"
      />

      {/* Team collage */}
      <section className="overflow-hidden py-8 sm:py-12 lg:py-16" aria-label="The Y&Now team at work">
        <Container>
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-[0.95fr_1.06fr_0.95fr_0.95fr] lg:gap-7">
            {TEAM_IMAGES.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 0.08}
                y={24}
                className={`relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.sizes}
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="max-w-5xl text-left">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-500">Our Mission</p>
            <ScrollTextReveal
              text="We bridge the gap between industry needs and workforce skills, turning practical learning into stronger performance and lasting opportunity."
              highlightWords={["industry", "skills", "performance", "opportunity"]}
              className="font-heading text-[clamp(1.65rem,3.4vw,3rem)] font-600 leading-[1.2] tracking-tight"
            />
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
            align="left"
            className="mb-14"
          />
          <WhoWeServeExplorer items={SERVE} />
        </Container>
      </section>

      {/* Parent company */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="max-w-xl">
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
            <Reveal delay={0.12} y={20} className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-[#e1e7ef] bg-white p-8 sm:min-h-[440px] lg:p-12">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(39,170,225,0.13),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(46,49,146,0.1),transparent_42%)]" />
              <Image
                src="/about/broadarks-technology.png"
                alt="BroadArks Technology — Innovation and Beyond"
                width={1200}
                height={1170}
                sizes="(max-width: 1024px) 82vw, 42vw"
                className="relative mx-auto h-auto max-h-[340px] w-[88%] object-contain object-center"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Certifications and credentials */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Certifications & Credentials"
            title="Built on verified"
            highlight="standards"
            subtitle="National qualification alignment and quality-management credentials that support consistent, accountable programme delivery."
            className="mb-14"
          />
          <Stagger
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#e1e7ef] bg-[#e1e7ef] md:grid-cols-3"
            stagger={0.1}
          >
            {CREDENTIALS.map((credential) => (
              <StaggerItem key={credential.title} className="h-full bg-white">
                <article className="flex h-full flex-col p-7 text-left lg:p-8">
                  <div className="relative mb-7 h-28 w-28 overflow-hidden rounded-2xl border border-primary-100 bg-white">
                    <Image src={credential.logo} alt="" fill sizes="112px" className="object-contain" />
                  </div>
                  <h3 className="font-heading text-lg font-700 leading-tight text-ink">{credential.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{credential.body}</p>
                  <p className="mt-4 text-xs font-medium leading-relaxed text-neutral-500">{credential.meta}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Strategic partners */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Strategic Partners"
            title="A network of implementation & academic"
            highlight="partners"
            className="mb-12"
          />
          <OrganisationGrid items={PARTNERS.map(({ name }) => ({ name }))} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading eyebrow="About FAQ" title="Get to know" highlight="Y&Now" align="left" />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

    </>
  );
}
