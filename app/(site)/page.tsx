import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import RouteFinder from "@/components/sections/RouteFinder";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WorkInPractice from "@/components/sections/WorkInPractice";
import ProofInNumbers from "@/components/sections/ProofInNumbers";
import FaqSection, { HOME_FAQS } from "@/components/sections/FaqSection";
import SocialProofBar from "@/components/sections/SocialProofBar";

export const metadata: Metadata = {
  title: "Y&Now | Practical Skills Training for Organisations and Learners",
  description:
    "Y&Now designs practical learning programmes for corporate teams, CSR partners, industry, defence, schools, and individual learners — assess, learn, apply, perform, improve.",
};

/* FAQ structured data - improves AEO / AI-search visibility.
   Generated from the same array <FaqSection /> renders, so the
   two can never drift apart. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
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
      <RouteFinder />
      <HowWeWork />
      <WhyChooseUs />
      {/* Platform preview is hidden for now, pending stakeholder
          sign-off on the live platform features it shows. */}
      <WorkInPractice />
      <ProofInNumbers />
      <FaqSection />
    </>
  );
}
