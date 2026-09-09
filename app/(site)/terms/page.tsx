import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Y&Now",
  description:
    "The terms that apply to using the Y&Now website, including permitted use, intellectual property, and limitation of liability.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Use of the website",
    body: [
      "You may use this website for personal, informational, or business enquiry purposes. You agree not to misuse the website or interfere with its operation.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All website content, including text, design, graphics, and materials, belongs to Y&Now unless stated otherwise. You may not copy or reuse content without permission.",
    ],
  },
  {
    heading: "Accuracy of information",
    body: [
      "We aim to keep information accurate and current, but we do not guarantee that every page will always be complete, error-free, or fully up to date.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "We are not responsible for losses or damages that may arise from use of the website, except where required by law.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Continued use of the website means you accept the updated version.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "If you have questions about these terms, you can contact us through the enquiry form on the contact page, or by email at info@broadarks.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of"
      highlight="Use"
      intro="By using this website, you agree to the terms and conditions set out on this page. These terms explain how the website may be used, what content belongs to us, and what limitations apply."
      sections={SECTIONS}
    />
  );
}
