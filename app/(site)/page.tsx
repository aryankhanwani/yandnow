import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import RouteFinder from "@/components/sections/RouteFinder";
import ProofInNumbers from "@/components/sections/ProofInNumbers";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqSection, { HOME_FAQS } from "@/components/sections/FaqSection";
import CTABand from "@/components/ui/CTABand";

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

/* ============================================================
   HOMEPAGE

   Order and background bands, both deliberate. Sections end in
   one of exactly two ways: the tint band simply ends where its
   colour ends, or - for the one pair that shares a ground - a
   container-width hairline separates them.

     Hero          ink (video)
     Client band   white   ┐ hairline between these two, since
     Find a route  white   ┘ they share a ground
     Stats         tint    ← the rest stop, moved up from the foot
     Journey       white
     Why us        tint
     FAQ           white
     Closing CTA   brand
     Footer        white

   No two adjacent sections use the same layout shape: full-bleed
   image → name row → image grid → number band → timeline → two-
   column list → accordion → CTA band.

   "Work in Practice" is not here any more. The five client
   stories were on this page in full, in the marquee above it,
   and again on /corporate. They now live on /corporate only, and
   the homepage keeps the name band.
   ============================================================ */
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
      <ProofInNumbers />
      <HowWeWork />
      <WhyChooseUs />
      <FaqSection />
      <CTABand
        id="home-cta"
        title="Tell us what you want to"
        highlight="improve"
        line="We will point you to the route that fits."
        ctaLabel="Talk to Y&Now"
        ctaHref="/contact-us"
      />
    </>
  );
}
