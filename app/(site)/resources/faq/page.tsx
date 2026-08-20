import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Y&Now FAQ: Workforce Training, Platform & CSR Programmes",
  description:
    "Answers to common questions about Y&Now's workforce skilling programmes, capability platform, CSR implementation, defence transition, and enterprise onboarding.",
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
    title: "The company and",
    highlight: "credentials",
    items: [
      {
        q: "What is Y&Now?",
        a: "Y&Now designs and delivers workforce capability programmes for enterprises, CSR sponsors, government bodies, defence establishments, and schools across India. We also operate a proprietary digital platform that integrates learning management, role-based assessment, and OKR-aligned performance review into one system.",
      },
      {
        q: "Who owns Y&Now?",
        a: "Y&Now operates under BroadArks Technology Pvt. Ltd., which also anchors the group's CSR and foundation work. All enquiries are handled by the BroadArks team at info@broadarks.com.",
      },
      {
        q: "Where is Y&Now based?",
        a: "Y&Now is headquartered in India and delivers programmes nationwide through a network of in-person facilitators, virtual instructor-led sessions, and its digital platform.",
        // [VERIFY] Confirm registered head-office city/address before publishing a specific location.
      },
      {
        q: "Is Y&Now ISO certified?",
        a: "Yes. Y&Now operates under BroadArks Technology Pvt. Ltd., which holds ISO 9001:2015 certification for its quality management systems.",
      },
      {
        q: "Which organisations has Y&Now worked with?",
        a: "Y&Now has partnered with Tata Group, JSW, Castrol India, BPCL, Jaquar, Indian Army, Indian Oil, Boeing, Reliance Foundation, NSDC, and thousands of other organisations across India.",
      },
      {
        q: "How is Y&Now different from a standard training vendor?",
        a: "Y&Now links learning to measurable performance outcomes, not just course completion. Our 5-stage framework (Assess, Train, Apply, Perform, Improve) ensures capability translates into on-the-job execution, measured through OKRs, supervisor sign-offs, and operational performance signals.",
      },
    ],
  },
  {
    icon: "Briefcase",
    tint: "39,170,226",
    eyebrow: "Corporate Programmes",
    title: "Enterprise training and",
    highlight: "delivery",
    items: [
      {
        q: "What industries does Y&Now serve?",
        a: "Y&Now delivers corporate capability programmes across manufacturing, energy, retail, financial services, FMCG, automotive, and logistics.",
      },
      {
        q: "How does the 5-stage methodology work?",
        a: "Every corporate engagement runs through Assess → Train → Apply → Perform → Improve. We assess role-level capability gaps, deliver targeted training, embed application into workflow, measure on-the-job performance, and iterate. The full cycle typically runs across a 12–16 week delivery period with quarterly review touchpoints.",
      },
      {
        q: "How are outcomes measured?",
        a: "Outcomes are measured through pre- and post-assessment scores, OKR achievement rates, supervisor-validated competency evidence, and operational performance signals such as incident rates, error rates, or conversion rates. Clients receive monthly impact dashboards and quarterly outcome reports.",
      },
      {
        q: "How long does onboarding take?",
        a: "A standard corporate capability programme, from training needs analysis through delivery and outcome review, runs across 12–16 weeks. Shorter engagements (4–6 weeks) are available for specific skill interventions. Timelines are confirmed at scope definition.",
      },
      {
        q: "Can Y&Now deliver training at multiple locations simultaneously?",
        a: "Yes. Y&Now delivers across multiple sites using a combination of in-person facilitators, virtual instructor-led sessions, and self-paced digital content.",
      },
    ],
  },
  {
    icon: "HeartHandshake",
    tint: "31,34,103",
    eyebrow: "CSR Programmes",
    title: "Corporate social responsibility",
    highlight: "implementation",
    items: [
      {
        q: "What CSR programmes does Y&Now offer?",
        a: "Y&Now designs and implements CSR skilling programmes on behalf of corporate sponsors, including youth employability, vocational skilling, defence and veteran transition, and school-level capability initiatives, delivered as measurable, outcome-linked interventions.",
        // [VERIFY] Confirm the exact CSR programme catalogue/named initiatives before publishing.
      },
      {
        q: "How does Y&Now report CSR outcomes?",
        a: "CSR sponsors receive structured impact reporting through the Y&Now platform (beneficiary tracking, assessment and completion data, and outcome dashboards), packaged into periodic reports suitable for board and statutory CSR disclosure.",
        // [VERIFY] Confirm reporting cadence and specific disclosure formats provided.
      },
      {
        q: "Which Schedule VII categories apply?",
        a: "Y&Now's skilling and employability programmes map primarily to Schedule VII (ii) of the Companies Act, covering promotion of education and employment-enhancing vocational skills, and can be structured to align with related categories depending on the sponsor's CSR policy.",
        // [VERIFY] Confirm the full list of Schedule VII categories Y&Now programmes qualify under.
      },
    ],
  },
  {
    icon: "MonitorSmartphone",
    tint: "32,180,232",
    eyebrow: "Platform",
    title: "The digital capability",
    highlight: "platform",
    items: [
      {
        q: "What does the platform include?",
        a: "The Y&Now platform connects a Learning Management System (LMS), role-based assessments, and OKR-based Performance Management into a single capability suite. It integrates with existing HRMS and ERP systems including SAP, SuccessFactors, and Darwinbox via REST APIs, SSO/SAML, and SCIM provisioning.",
      },
      {
        q: "Which HRMS/ERP systems does it integrate with?",
        a: "The Y&Now platform connects with SAP, SuccessFactors, Darwinbox, and other HRMS via REST APIs, SSO/SAML, and SCIM provisioning. Our integration team conducts a technical assessment at onboarding to map the connection to your specific system configuration.",
      },
      {
        q: "Is it mobile-accessible?",
        a: "Yes. The platform is designed for mobile access so frontline and field workforces can complete assessments, learning, and performance tasks from their own devices.",
        // [VERIFY] Confirm mobile support details (responsive web vs. native app) before publishing.
      },
      {
        q: "How is data secured?",
        a: "Access is controlled through SSO/SAML authentication and SCIM provisioning, and the platform operates under BroadArks Technology's ISO 9001:2015 quality management framework. A technical and security review is completed with your team at onboarding.",
        // [VERIFY] Confirm data-security certifications (e.g. ISO 27001) and hosting/data-residency specifics.
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
        q: "How do I request a demo?",
        a: "Request a demo through our contact form or by emailing info@broadarks.com. A member of the team will arrange a walkthrough of the platform and discuss how a programme could be scoped for your organisation.",
      },
      {
        q: "What is the typical programme timeline?",
        a: "A standard corporate capability programme runs across 12–16 weeks from needs analysis to outcome review, with shorter 4–6 week interventions available for specific skills. CSR and other engagements are scoped to the sponsor's objectives.",
      },
      {
        q: "Who do I contact?",
        a: "Contact the Y&Now team at info@broadarks.com, or use the contact form on this site. We'll route your enquiry to the right programme lead: corporate, CSR, platform, or defence transition.",
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
        title="Frequently Asked Questions about"
        highlight="Y&Now"
        subtitle="Clear answers on our skilling programmes, capability platform, CSR implementation, defence transition, and enterprise onboarding."
      >
        <CtaButton href="/contact-us" variant="primary" className="px-7 py-3.5">
          Contact Us
        </CtaButton>
        <CtaButton href="/our-platform" variant="secondary" className="px-7 py-3.5">
          Explore the Platform
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
