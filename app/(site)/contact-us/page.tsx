import type { Metadata } from "next";
import { Mail, Phone, MapPin, Building, ShieldCheck, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Contact Y&Now — Workforce Training, CSR & Platform Enquiries",
  description:
    "Contact Y&Now to explore corporate workforce training, CSR skilling partnerships, platform demos, or school and defence programmes. Email: info@broadarks.com · +91 75535 53372 · Bhopal, MP.",
};

const DETAILS = [
  { icon: Mail, label: "Email", value: "info@broadarks.com", href: "mailto:info@broadarks.com" },
  { icon: Phone, label: "Phone", value: "+91 75535 53372", href: "tel:+917553553372" },
  {
    icon: MapPin,
    label: "Address",
    value: "Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar, Bhopal – 462042, Madhya Pradesh, India",
  },
  { icon: Building, label: "Legal entity", value: "BroadArks Technology Pvt. Ltd." },
  { icon: ShieldCheck, label: "ISO certification", value: "ISO 9001:2015 certified" },
  { icon: Clock, label: "Response time", value: "We respond to all commercial enquiries within 2 working days." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to the"
        highlight="Y&Now team"
        subtitle="Use the form or the contact details to reach us directly. Tell us which programme or service you're enquiring about and we'll route your message to the right person."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Left — details */}
            <div>
              <Reveal>
                <h2 className="font-heading text-xl font-700 text-ink">Contact details</h2>
              </Reveal>
              <div className="mt-6 space-y-4">
                {DETAILS.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-[#e8ecf2] bg-white p-5 transition-colors hover:border-primary-200">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <Icon size={19} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">{d.label}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink">{d.value}</p>
                      </div>
                    </div>
                  );
                  return (
                    <Reveal key={d.label} y={16}>
                      {d.href ? <a href={d.href} className="block">{content}</a> : content}
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <Reveal delay={0.1} y={20}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
