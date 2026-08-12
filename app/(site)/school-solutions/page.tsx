import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import { CtaButton } from "@/components/ui/CtaButton";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "School Vocational & Industry-Readiness Programmes",
  description:
    "Y&Now delivers NSQF-aligned vocational and applied skills programmes for schools — preparing students for industry entry through practical training, industry co-designed curriculum, and placement connections.",
};

const DELIVERABLES: HorizontalCapability[] = [
  {
    icon: "GraduationCap",
    tint: "46,49,146",
    title: "NSQF-aligned vocational courses",
    // [VERIFY] Sectors / qualification levels pending confirmation — School Solutions lead
    body: "NSQF-aligned vocational courses across confirmed sectors and qualification levels for secondary and senior secondary students.",
  },
  {
    icon: "Handshake",
    tint: "39,170,226",
    title: "Industry co-designed curriculum",
    body: "Curriculum built with input from employers in manufacturing, retail, financial services, and hospitality — so the skills taught match what employers need.",
  },
  {
    icon: "Laptop",
    tint: "31,34,103",
    title: "Blended delivery",
    body: "In-school facilitators paired with digital learning tools, delivered within the school's timetable and physical infrastructure.",
  },
  {
    icon: "BadgeCheck",
    tint: "32,180,232",
    title: "Assessment & NSQF certification",
    body: "Student assessment and NSQF certification on programme completion — a credible, employer-recognised qualification.",
  },
  {
    icon: "Briefcase",
    tint: "46,49,146",
    title: "Placement linkage",
    body: "Employer connections for students completing the programme, supporting entry into employment or further vocational education.",
  },
  {
    icon: "UserCog",
    tint: "39,170,226",
    title: "Teacher training",
    body: "Capacity building for school faculty on vocational pedagogy, so programmes are sustained and owned within the school.",
  },
];

// [VERIFY] Student Outcomes metrics pending confirmation — M&E team
const OUTCOMES = [
  { label: "Students trained", note: "Metric to be confirmed — M&E team" },
  { label: "NSQF qualification pass rate", note: "Metric to be confirmed — M&E team" },
  { label: "Employment / further-education linkage rate", note: "Metric to be confirmed — M&E team" },
];

const FAQS: FaqItemData[] = [
  {
    q: "What NSQF levels does Y&Now deliver for schools?",
    // [VERIFY] Confirmed NSQF levels and sectors pending — School Solutions lead & Accreditation team
    a: "Confirmed NSQF levels and sectors are being finalised with our School Solutions lead and Accreditation team. Contact us for the current list of available qualifications for your school.",
  },
  {
    q: "How is Y&Now's school programme delivered — classroom or online?",
    // [VERIFY] Specific delivery model to be confirmed — School Solutions lead
    a: "Y&Now uses a blended model: in-school facilitators for practical and applied modules, supported by digital self-paced content. We work within the school's timetable and physical infrastructure. Specific delivery details are confirmed per engagement with our School Solutions lead.",
  },
  {
    q: "Does Y&Now provide the equipment for vocational labs?",
    // [VERIFY] Equipment model (supply / co-invest / school-provided) to be confirmed — School Solutions lead
    a: "The equipment model — whether Y&Now supplies, co-invests, or requires school-provided infrastructure — is confirmed during scoping with our School Solutions lead.",
  },
  {
    q: "Can state government or district education offices engage Y&Now at scale?",
    // [VERIFY] State/district bodies reference to be confirmed — Government team
    a: "Yes. Large-scale deployments use a hub-and-spoke model with master trainers and standardised quality assurance. For state or district-level engagements, contact info@broadarks.com.",
  },
  {
    q: "Do students receive a nationally recognised certificate?",
    // [VERIFY] Awarding body to be confirmed — Accreditation team
    a: "Students completing eligible programmes receive NSQF co-badged certifications. These certifications are portable and can support entry into employment or further vocational training. The awarding body is confirmed with our Accreditation team.",
  },
];

export default function SchoolSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="School Solutions"
        title="Job-Ready Skills for"
        highlight="School Students"
        subtitle="Hands-on skills courses built with employers, so school students earn a real, recognised certificate."
      >
        <CtaButton href="/contact-us?type=schools" variant="primary" className="px-7 py-3.5">
          Enquire About School Programmes
        </CtaButton>
        <CtaButton href="/contact-us" variant="secondary" className="px-7 py-3.5">
          Talk to Our Team
        </CtaButton>
      </PageHero>

      {/* What We Deliver for Schools */}
      <HorizontalCapabilityScroller
        items={DELIVERABLES}
        eyebrow="What We Deliver for Schools"
        title="A complete school-to-work"
        highlight="programme"
        subtitle="From industry co-designed curriculum through certification and placement — everything a school needs to make its students industry-ready."
      />

      <EditorialProofSection
        eyebrow="Applied Learning"
        title="Skills become real when students"
        highlight="build and practise"
        body="Hands-on projects connect classroom concepts with practical problem-solving, teamwork, and the confidence to explore technical career pathways."
        image="/images/school/proof/applied-robotics-learning.jpg"
        imageAlt="School students building a small robot with guidance from their teacher"
        note="Practical projects · guided assessment"
      />

      {/* Student Outcomes */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Student Outcomes"
            title="Measured impact for"
            highlight="every student"
            subtitle="We track outcomes across the student journey — from training completion through certification and onward pathways."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {OUTCOMES.map((o) => (
              <StaggerItem key={o.label} className="h-full">
                <div className="flex h-full flex-col items-start rounded-2xl border border-dashed border-[#d5dbe6] bg-surface p-8 text-left">
                  {/* [VERIFY] Metric value pending — M&E team */}
                  <span className="font-heading text-4xl font-800 text-neutral-300">—</span>
                  <h3 className="mt-3 font-heading text-base font-700 text-ink">{o.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">{o.note}</p>
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
                eyebrow="School Solutions FAQ"
                title="Common questions from"
                highlight="schools & educators"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="School Solutions"
        title="Ready to make your students"
        highlight="industry-ready?"
        subtitle="Tell us about your school and the pathways you want your students to reach — we'll map an NSQF-aligned vocational programme around them."
        primaryLabel="Enquire About School Programmes"
        primaryHref="/contact-us?type=schools"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
