import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   FAQ - required for AEO / AI-search visibility.
   Copy sourced from Final Copy doc - Section 7.
   (Unverified certificate placeholders intentionally omitted.)
   ============================================================ */

const FAQS: FaqItemData[] = [
  {
    q: "What does Y&Now do?",
    a: "Y&Now designs and delivers workforce capability programmes for enterprises, CSR sponsors, government bodies, defence establishments, and schools across India. We also operate a proprietary digital platform that integrates learning management, role-based assessment, and OKR-aligned performance review into one system.",
  },
  {
    q: "Which organisations has Y&Now worked with?",
    a: "Y&Now has partnered with Tata Group, JSW, Castrol India, BPCL, Jaquar, Indian Army, Indian Oil, Boeing, Reliance Foundation, NSDC, and thousands of other organisations across India.",
  },
  {
    q: "What is the Y&Now platform?",
    a: "The Y&Now platform connects a Learning Management System (LMS), role-based assessments, and OKR-based Performance Management into a single capability suite. It integrates with existing HRMS and ERP systems including SAP, SuccessFactors, and Darwinbox via REST APIs, SSO/SAML, and SCIM provisioning.",
  },
  {
    q: "Is Y&Now ISO certified?",
    a: "Yes. Y&Now operates under BroadArks Technology Pvt. Ltd., which holds ISO 9001:2015 certification for its quality management systems.",
  },
  {
    q: "How is Y&Now different from a standard training vendor?",
    a: "Y&Now links learning to measurable performance outcomes, not just course completion. Our 5-stage framework (Assess, Train, Apply, Perform, Improve) ensures capability translates into on-the-job execution, measured through OKRs, supervisor sign-offs, and operational performance signals.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="faq-heading"
              eyebrow="Questions & Answers"
              title="Everything you need to know about"
              highlight="Y&Now"
              subtitle="Can't find what you're looking for? Our team is happy to walk you through how Y&Now can work for your organisation."
              align="left"
            />
            <Reveal delay={0.2} className="mt-7">
              <CtaButton href="/contact-us" id="faq-cta" variant="primary" className="px-6 py-3">
                Talk to Our Team
              </CtaButton>
            </Reveal>
          </div>

          <FaqAccordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
