import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import ScrollTextReveal from "@/components/ui/ScrollTextReveal";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import TeamGrid, { type TeamMember } from "@/components/sections/TeamGrid";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "About Y&Now | Practical Learning with a Clear Purpose",
  description:
    "Y&Now is a learning brand focused on practical outcomes. We design programmes that help learners become job-ready, teams perform better, and organisations build capability that lasts.",
};

const BELIEFS = [
  "Learning should feel useful.",
  "Skills should help people move forward.",
  "Good training should lead to real change.",
  "People learn best when the path is clear.",
  "Confidence grows when learning connects to the real world.",
];

const TEAM: TeamMember[] = [
  {
    name: "Mr. Pankaj Dutta",
    role: "Founder & Chief Executive Officer",
    bio: "Brings more than 17 years of experience across media, business, and strategy, and believes skilling is essential for employability and long-term growth.",
  },
  {
    name: "Dr. Kaveri Dutta",
    role: "Co-Founder & Chief Learning Officer",
    bio: "Brings more than 15 years of experience in learning and development, curriculum design, and learner engagement.",
  },
  {
    name: "Mr. Tarun Abbhani",
    role: "Chief Financial Officer",
    bio: "A Chartered Accountant with more than 14 years of experience in finance leadership and operational strategy.",
  },
  {
    name: "Ms. Souri Mukherjee",
    role: "Head, Financial Planning & Analysis and IT",
    bio: "Brings 24 years of experience across consumer and brand environments, with an analytical and problem-solving approach.",
  },
];

const ADVISERS: TeamMember[] = [
  {
    name: "Mr. Pradeep Narayanan",
    role: "Adviser",
    bio: "Brings more than 26 years of experience in the development sector across health, education, child protection, and gender.",
  },
  {
    name: "Mr. Brajendra Gupta",
    role: "Adviser",
    bio: "An entrepreneur who believes skill development is essential for broader opportunity.",
  },
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
    a: "Y&Now is a learning brand focused on practical outcomes. We design programmes that help learners become more job-ready, help teams perform better, and help organisations build capability that lasts.",
  },
  {
    q: "Who does Y&Now work with?",
    a: "Corporate teams, CSR partners, industry groups, defence partners, schools, institutional partners, and individual learners.",
  },
  {
    q: "Where is Y&Now based?",
    a: "Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar Road, Bhopal – 462042, Madhya Pradesh, India.",
  },
  {
    q: "Is Y&Now the same as BroadArks Foundation?",
    a: "No. BroadArks Foundation is a separate registered charitable entity at broadarksfoundation.org, with its own legal registration, purpose, and contact details.",
  },
  {
    q: "How can I contact Y&Now?",
    a: "Email info@broadarks.com or call +91 75535 53372. You can also use the enquiry form on the contact page.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Y&Now"
        title="Practical Learning with a"
        highlight="Clear Purpose"
        subtitle="We help people and organisations build useful skills, grow with confidence, and stay ready for what comes next."
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

      {/* Who we are */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="max-w-5xl text-left">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-500">Who We Are</p>
            <ScrollTextReveal
              text="Y&Now is a learning brand focused on practical outcomes. We design programmes that help learners become job-ready, teams perform better, and organisations build capability that lasts."
              highlightWords={["practical", "job-ready", "perform", "capability"]}
              className="font-heading text-[clamp(1.65rem,3.4vw,3rem)] font-600 leading-[1.2] tracking-tight"
            />
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] lg:grid-cols-2">
            <Reveal y={18} className="bg-white p-8 lg:p-12">
              <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-secondary-500">Our Mission</p>
              <p className="mt-5 font-heading text-[clamp(1.05rem,1.8vw,1.35rem)] font-600 leading-snug text-ink">
                To make practical learning easier to access, easier to apply, and
                more useful for real work and real life.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.1} className="bg-white p-8 lg:p-12">
              <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-secondary-500">Our Vision</p>
              <p className="mt-5 font-heading text-[clamp(1.05rem,1.8vw,1.35rem)] font-600 leading-snug text-ink">
                A future where more people can turn learning into opportunity,
                confidence, and better work.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we believe */}
      <ChecklistPanel
        eyebrow="What We Believe"
        title="Our work"
        highlight="matters"
        subtitle="The gap between learning and doing is still too wide. We help people close it."
        items={BELIEFS}
        image="/about/training-review.png"
        imageAlt="Programme managers reviewing digital training material together"
        className="bg-surface"
      />

      {/* Team */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Meet the Team"
            title="The people behind the"
            highlight="programmes"
            className="mb-14"
          />
          <TeamGrid members={TEAM} />

          <div className="mt-16">
            <SectionHeading eyebrow="Advisers" title="Guidance from the wider field" align="left" className="mb-8" />
            <TeamGrid members={ADVISERS} columns={2} />
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-xl">
              <SectionHeading eyebrow="Credentials" title="How Y&Now is registered" align="left" />
              <Reveal delay={0.1} className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-600">
                <p>
                  Y&Now is presented as a registered trademark associated with
                  BroadArks Technology Private Limited. Commercial contracts and
                  legal agreements are executed under that entity.
                </p>
                <p>
                  BroadArks Foundation (broadarksfoundation.org) is a separate
                  registered charitable entity, with its own legal registration,
                  purpose, and contact details.
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
            <Reveal delay={0.12} y={20} className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-[#e1e7ef] bg-white p-8 sm:min-h-[380px] lg:p-12">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(39,170,225,0.13),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(46,49,146,0.1),transparent_42%)]" />
              <Image
                src="/about/broadarks-technology.png"
                alt="BroadArks Technology"
                width={1200}
                height={1170}
                sizes="(max-width: 1024px) 82vw, 42vw"
                className="relative mx-auto h-auto max-h-[280px] w-[85%] object-contain object-center"
              />
            </Reveal>
          </div>
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
