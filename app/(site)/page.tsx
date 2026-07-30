import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import LogoSection from "@/components/sections/LogoSection";
import WhoWeServe from "@/components/sections/WhoWeServeScrollReveal";
import PlatformPreview from "@/components/sections/PlatformPreview";
import HowWeWork from "@/components/sections/HowWeWork";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import SocialProofBar from "@/components/sections/SocialProofBar";

export const metadata: Metadata = {
  title: "Workforce Capability Solutions for Enterprise, CSR & Industrial India | Y&Now",
  description:
    "Y&Now builds workforce capability through industry-aligned programmes, role-based assessment, and a digital performance platform. Trusted by Tata, JSW, Castrol, BPCL, Indian Army, and 3,800+ organisations across India.",
};

/* FAQ structured data — improves AEO / AI-search visibility.
   Mirrors the copy rendered in <FaqSection />. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Y&Now do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Y&Now designs and delivers workforce capability programmes for enterprises, CSR sponsors, government bodies, defence establishments, and schools across India. We also operate a proprietary digital platform that integrates learning management, role-based assessment, and OKR-aligned performance review into one system.",
      },
    },
    {
      "@type": "Question",
      name: "Which organisations has Y&Now worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Y&Now has partnered with Tata Group, JSW, Castrol India, BPCL, Jaquar, Indian Army, Indian Oil, Boeing, Reliance Foundation, NSDC, and thousands of other organisations across India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Y&Now platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Y&Now platform connects a Learning Management System (LMS), role-based assessments, and OKR-based Performance Management into a single capability suite. It integrates with existing HRMS and ERP systems including SAP, SuccessFactors, and Darwinbox via REST APIs, SSO/SAML, and SCIM provisioning.",
      },
    },
    {
      "@type": "Question",
      name: "Is Y&Now ISO certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Y&Now operates under BroadArks Technology Pvt. Ltd., which holds ISO 9001:2015 certification for its quality management systems.",
      },
    },
    {
      "@type": "Question",
      name: "How is Y&Now different from a standard training vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Y&Now links learning to measurable performance outcomes — not just course completion. Our 5-stage framework (Assess, Train, Apply, Perform, Improve) ensures capability translates into on-the-job execution, measured through OKRs, supervisor sign-offs, and operational performance signals.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <SocialProofBar />
      <WhoWeServe />
      <PlatformPreview />
      <HowWeWork />
      <ImpactMetrics />
      <Testimonials />
      <FaqSection />
    </>
  );
}
