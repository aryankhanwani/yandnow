import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Y&Now",
  description:
    "How Y&Now collects, uses, and protects the information visitors share through this website.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "We may collect information you share through forms, enquiries, newsletter sign-ups, or other site interactions. We may also collect basic usage information that helps us understand how the website is used.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "We use information to respond to enquiries, improve the website, support communications, and manage services related to learning, programmes, or partnerships.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    body: [
      "We do not sell personal information. We may share information with trusted service providers only when needed to operate the website or support our services.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "The website may use cookies or similar tools to improve user experience, understand traffic, and support performance tracking.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We take reasonable steps to protect information and reduce the risk of unauthorised access, misuse, or disclosure.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You may choose not to provide certain information, although this may affect how some features or responses work.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "If you have questions about privacy or data handling, you can contact us through the enquiry form on the contact page, or by email at info@broadarks.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="How We Handle Your"
      highlight="Information"
      intro="We respect the privacy of visitors and users. This page explains what information may be collected, how it may be used, and how it is protected."
      sections={SECTIONS}
    />
  );
}
