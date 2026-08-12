import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import { CtaButton } from "@/components/ui/CtaButton";
import AnimIcon from "@/components/ui/AnimIcon";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Industry-Ready Courses for Job Seekers | Y&Now",
  description:
    "Y&Now offers industry-recognised courses in manufacturing, retail, financial services, and IT — with placement support and employer connections. Get job-ready with an NSQF-certified qualification.",
};

const BENEFITS: HorizontalCapability[] = [
  {
    icon: "Handshake",
    tint: "46,49,146",
    title: "Courses co-designed with employers",
    body: "So you learn what's actually needed on the job — not generic textbook content.",
  },
  {
    icon: "BadgeCheck",
    tint: "39,170,226",
    title: "NSQF certifications",
    body: "Nationally recognised qualifications accepted by employers across India.",
  },
  {
    icon: "Briefcase",
    tint: "31,34,103",
    title: "Placement support",
    body: "Y&Now connects completing learners to hiring employers.",
  },
  {
    icon: "MonitorSmartphone",
    tint: "32,180,232",
    title: "Blended delivery",
    body: "Choose in-person, online, or a combination.",
  },
  {
    icon: "Clock",
    tint: "46,49,146",
    title: "Shorter durations",
    body: "Most courses run 4–12 weeks, not years.",
  },
];

/* [VERIFY] Example learner sectors are placeholders from the content doc
   ([INSERT: confirm active learner sectors]) — replace with the confirmed
   active sector list from the School Solutions/Learner team. */
const SECTORS = [
  { icon: "Factory", label: "Manufacturing" },
  { icon: "ShoppingBag", label: "Retail Operations" },
  { icon: "Landmark", label: "Financial Services" },
  { icon: "Headset", label: "IT Support" },
  { icon: "UtensilsCrossed", label: "Hospitality" },
];

const FAQS: FaqItemData[] = [
  {
    q: "Do I need any qualifications to join Y&Now courses?",
    a: "Eligibility varies by course. Most entry-level vocational courses require Class 10 pass. Some advanced courses require Class 12. Per-course eligibility is confirmed at enrolment.",
  },
  {
    q: "How long do Y&Now courses take?",
    a: "Course durations vary by programme. Most employability courses run 4–12 weeks. Per-course durations are confirmed when you choose a course.",
  },
  {
    q: "What does a Y&Now course cost?",
    a: "Fees vary by course. CSR-subsidised courses may have zero fee for eligible candidates. Course fee ranges and fee-waiver conditions are confirmed at enrolment.",
  },
  {
    q: "Will Y&Now help me find a job after I complete the course?",
    a: "Y&Now provides employer connections and placement support for learners who complete the programme and meet the assessment requirements. We cannot guarantee employment, but we maintain active relationships with hiring employers across our partner network.",
  },
  {
    q: "Are Y&Now certifications recognised by employers?",
    a: "Yes. Y&Now certifications are NSQF-aligned and co-badged with a recognised awarding body, and are accepted by employers across manufacturing, retail, and service sectors in India.",
  },
];

export default function LearnersB2cPage() {
  return (
    <>
      <PageHero
        eyebrow="For Learners"
        title="Get Industry-Ready. Get Placed."
        highlight="Start with Y&Now."
        subtitle="Learn what companies hire for through employer-designed courses, earn NSQF certification, and get placement support."
      >
        <CtaButton href="/learners-b2c/courses" variant="primary" className="px-7 py-3.5">
          Find a Course
        </CtaButton>
        <CtaButton href="/contact-us" variant="secondary" className="px-7 py-3.5">
          Talk to Us
        </CtaButton>
      </PageHero>

      {/* Why Y&Now for Individual Learners */}
      <HorizontalCapabilityScroller
        items={BENEFITS}
        eyebrow="Why Y&Now for Individual Learners"
        title="Real skills. Real"
        highlight="jobs."
        subtitle="Everything about a Y&Now course is built around getting you hired — from what you learn to who's hiring."
      />

      {/* Available Courses */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Available Courses"
            title="Explore courses by"
            highlight="sector"
            subtitle="Our course catalogue is co-designed with employers and mapped to NSQF levels. Browse the sectors below, then head to the course finder for live durations, NSQF levels, and fees."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-6 gap-px overflow-hidden rounded-3xl border border-[#e1e7ef] bg-[#e1e7ef]" stagger={0.07}>
            {SECTORS.map((s) => {
              const iconName = s.icon;
              return (
                <StaggerItem key={s.label} className={`h-full bg-white ${SECTORS.indexOf(s) < 3 ? "col-span-2" : "col-span-3"}`}>
                  <article className="flex h-full min-h-36 flex-col items-center justify-center p-6">
                    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-105">
                        <AnimIcon name={iconName} size={22} />
                      </div>
                      <h3 className="font-heading text-sm font-700 text-ink">{s.label}</h3>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
            <StaggerItem className="col-span-6 bg-primary-50/50">
              <div className="flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center lg:p-9">
                <div>
                  <h3 className="mb-1.5 font-heading text-base font-700 text-ink">Full course catalogue</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
                    See every available course with its sector, duration, NSQF level, and fee. New courses are added as employer demand grows.
                  </p>
                </div>
                <CtaButton href="/learners-b2c/courses" variant="primary" className="flex-shrink-0 px-6 py-3">
                  Find a Course
                  <ArrowRight size={16} className="ml-1.5" />
                </CtaButton>
              </div>
            </StaggerItem>
          </Stagger>
          {/* [VERIFY] Course catalogue (sector, duration, NSQF level, fee) is
              [INSERT] in the content doc — the live list comes from the
              School Solutions/Learner team via the /learners-b2c/courses finder. */}
        </Container>
      </section>

      {/* Learner FAQ */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Learner FAQ"
                title="Questions from"
                highlight="job seekers"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="For Learners"
        title="Ready to get"
        highlight="job-ready?"
        subtitle="Find a course that's co-designed with employers, earn an NSQF certification, and get placement support to start your career."
        primaryLabel="Find a Course"
        primaryHref="/learners-b2c/courses"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact-us"
      />
    </>
  );
}
