import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "FAQ | Questions About Y&Now",
  description:
    "Answers to common questions about Y&Now's learning programmes, community and CSR work, the platform, and how to get started.",
};

/* ============================================================
   FAQ page - /resources/faq - NEW PAGE.
   Critical for AEO / AI-search visibility (ChatGPT, Perplexity,
   Google AI Overviews). Aggregates the verified Q&As already
   shipped on the homepage (<FaqSection />) and /corporate, then
   extends coverage to the 5 categories the content doc requires:
   About / Corporate / CSR / Platform / Getting started.
   ============================================================ */

interface FaqCategory {
  icon: string;
  tint: string; // "r,g,b"
  eyebrow: string;
  title: string;
  highlight?: string;
  items: FaqItemData[];
}

const CATEGORIES: FaqCategory[] = [
  {
    icon: "Building2",
    tint: "46,49,146",
    eyebrow: "About Y&Now",
    title: "The company and what it",
    highlight: "does",
    items: [
      {
        q: "What does Y&Now do?",
        a: "We design practical learning programmes for organisations and learners.",
      },
      {
        q: "Who is Y&Now for?",
        a: "We work with corporate teams, CSR partners, industry groups, defence partners, schools, institutional partners, and individual learners.",
      },
      {
        q: "How does Y&Now work?",
        a: "We follow a simple loop: assess, learn, apply, perform, improve, and return. Each stage feeds the next, so a programme is shaped by what the previous cycle showed.",
      },
      {
        q: "Where is Y&Now based?",
        a: "Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar Road, Bhopal – 462042, Madhya Pradesh, India.",
      },
      {
        q: "How is Y&Now registered?",
        a: "Y&Now is presented as a registered trademark associated with BroadArks Technology Private Limited. Commercial contracts and legal agreements are executed under that entity.",
      },
    ],
  },
  {
    icon: "Briefcase",
    tint: "39,170,226",
    eyebrow: "Corporate Programmes",
    title: "Workforce training and",
    highlight: "delivery",
    items: [
      {
        q: "How do you decide what to train?",
        a: "We start with the role: what people need to do, the gaps in the way, and the workplace outcome you want to improve. The programme is designed from there.",
      },
      {
        q: "How is learning delivered?",
        a: "Instructor-led, virtual, blended, digital, and self-paced. Depending on the role and programme we use microlearning, scenario-based activities, practical exercises, or simulation where relevant.",
      },
      {
        q: "How do you know the learning is being applied?",
        a: "Role-based assessment establishes the starting point. Afterwards, workplace tasks, manager feedback, and performance measures show whether the learning is showing up in the work.",
      },
      {
        q: "Can a programme run across several sites?",
        a: "Yes, using a mix of in-person facilitation, virtual sessions, and self-paced content.",
      },
    ],
  },
  {
    icon: "HeartHandshake",
    tint: "31,34,103",
    eyebrow: "CSR & Community",
    title: "Community programmes and",
    highlight: "reporting",
    items: [
      {
        q: "What kinds of programmes do you run?",
        a: "Skill development and employability, livelihood and entrepreneurship, community development, and veteran transition, along with participant assessment and tracking.",
      },
      {
        q: "What reporting do partners receive?",
        a: "Participation records, beneficiary information, attendance, assessment results, progress updates, and photographic evidence.",
      },
      {
        q: "Will a programme qualify under our CSR obligations?",
        a: "Skill development, livelihood, and community programmes are commonly funded through CSR budgets. We recommend confirming the applicable head with your legal team, and we provide the documentation needed for utilisation reporting.",
      },
    ],
  },
  {
    icon: "MonitorSmartphone",
    tint: "32,180,232",
    eyebrow: "Platform",
    title: "The Y&Now",
    highlight: "platform",
    items: [
      {
        q: "What does the platform do?",
        a: "It helps organisations connect digital learning, role-based assessment, and performance in one place, rather than across separate systems.",
      },
      {
        q: "Does it connect to the systems we already use?",
        a: "The platform can connect to existing HRMS and ERP environments through agreed integrations. The current integration list is confirmed before a deployment begins.",
      },
      {
        q: "How is our data handled?",
        a: "Information on hosting, access controls, data ownership, retention, and security is provided for enterprise deployments and reviewed with your team during onboarding.",
      },
    ],
  },
  {
    icon: "Rocket",
    tint: "46,49,146",
    eyebrow: "Getting Started",
    title: "Working with",
    highlight: "Y&Now",
    items: [
      {
        q: "How do I request a platform demonstration?",
        a: "Use the enquiry form and choose 'Platform demonstration', or email info@broadarks.com. Tell us what your current environment looks like and what you need the system to do.",
      },
      {
        q: "What happens after I get in touch?",
        a: "Your enquiry is routed to the appropriate team, who will discuss the programme, learning route, or platform that fits your requirement.",
      },
      {
        q: "Who do I contact?",
        a: "Email info@broadarks.com or call +91 75535 53372. You can also use the enquiry form on the contact page.",
      },
    ],
  },
];

/* FAQPage structured data - mirrors every Q&A rendered below.
   Explicitly built for AEO / AI-search extraction. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Resources · FAQ"
        title="Questions about"
        highlight="Y&Now"
        subtitle="Clear answers on our learning programmes, community and CSR work, the platform, and how to get started."
      >
        <CtaButton href="/contact-us" variant="primary" className="px-7 py-3.5">
          Talk to Y&amp;Now
        </CtaButton>
        <CtaButton href="/our-platform" variant="secondary" className="px-7 py-3.5">
          Explore the platform
        </CtaButton>
      </PageHero>

      {CATEGORIES.map((cat, i) => {
        const iconName = cat.icon;
        return (
          <section
            key={cat.eyebrow}
            className={i % 2 === 0 ? "bg-surface py-20 lg:py-28" : "bg-white py-20 lg:py-28"}
          >
            <Container>
              <div className="mx-auto max-w-3xl">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ color: `rgb(${cat.tint})`, backgroundColor: `rgba(${cat.tint},0.08)` }}
                  >
                    <AnimIcon name={iconName} size={22} />
                  </div>
                  <SectionHeading
                    eyebrow={cat.eyebrow}
                    title={cat.title}
                    highlight={cat.highlight}
                    align="center"
                    className="mb-10"
                  />
                </div>
                <FaqAccordion items={cat.items} defaultOpen={i === 0 ? 0 : null} />
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
