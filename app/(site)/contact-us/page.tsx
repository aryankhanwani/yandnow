import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Contact Y&Now | Let's Build the Right Learning Route",
  description:
    "Tell us what you are trying to solve — workforce training, a CSR programme, an industry solution, a platform demonstration, a defence or school programme, or a learner enquiry.",
};

const ADDRESS =
  "Sagar Premium Tower, Phase I, Block C-1, CP-02, JK Hospital Road, Kolar Road, Bhopal – 462042, Madhya Pradesh, India";

const DETAILS = [
  { icon: "Mail", label: "Email", value: "info@broadarks.com", href: "mailto:info@broadarks.com" },
  { icon: "Phone", label: "Phone", value: "+91 75535 53372", href: "tel:+917553553372" },
  { icon: "MapPin", label: "Address", value: ADDRESS },
];

// Exact office pin, from Google Maps → Share → Embed a map.
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.816042630252!2d77.42007795791575!3d23.183624444824403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433af6de395b%3A0x6dd5492ce91aedd6!2sBroadArks%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1787568361447!5m2!1sen!2sin";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Build the Right Learning"
        highlight="Route"
        deck="Tell us what you are trying to solve, and we will help you identify the right next step."
        ctaLabel="Email the team"
        ctaHref="mailto:info@broadarks.com"
      />

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Left - details */}
            <div>
              <Reveal>
                <h2 className="font-heading text-xl font-700 text-ink">Talk to us</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Use the enquiry form or the contact details below to tell us what
                  you need. Your enquiry is then routed to the appropriate team.
                </p>
              </Reveal>

              <Reveal y={16} delay={0.05}>
                <div className="mt-7 divide-y divide-[#e8ecf2] border-y border-[#e8ecf2]">
                  {DETAILS.map((d) => {
                    const content = (
                      <div className="group flex items-center gap-4 py-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                          <AnimIcon name={d.icon} size={17} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-caption">{d.label}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-ink">{d.value}</p>
                        </div>
                      </div>
                    );
                    return d.href ? (
                      <a key={d.label} href={d.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={d.label}>{content}</div>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal y={16} delay={0.1}>
                <div className="mt-7 overflow-hidden rounded-3xl border border-[#e8ecf2] shadow-[0_18px_50px_rgba(20,21,46,0.06)]">
                  <iframe
                    src={MAPS_EMBED_SRC}
                    className="h-64 w-full grayscale-[0.15]"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Y&Now office location"
                  />
                </div>
              </Reveal>

              <Reveal y={16} delay={0.15}>
                <p className="mt-5 text-xs leading-relaxed text-neutral-400">
                  Your information will be used only to respond to your enquiry and
                  in line with our{" "}
                  <a href="/privacy-policy" className="font-medium text-neutral-500 hover:text-primary-600">
                    Privacy Policy
                  </a>
                  .
                </p>
              </Reveal>
            </div>

            {/* Right - form */}
            <Reveal delay={0.1} y={20}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
