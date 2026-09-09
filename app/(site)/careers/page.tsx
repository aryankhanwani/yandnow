import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimIcon from "@/components/ui/AnimIcon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Careers | Build Work That Helps People Grow",
  description:
    "Join Y&Now to help create programmes that strengthen employability, workforce learning, and community development.",
};

const WHY = [
  {
    icon: "Wrench",
    title: "Work on programmes with real-world use",
    body: "What you design is delivered to people who use it at work, not filed as a deliverable.",
  },
  {
    icon: "GraduationCap",
    title: "Help shape learning that matters",
    body: "Programme design here starts from a role and a gap, so the shape of the learning is yours to argue for.",
  },
  {
    icon: "Boxes",
    title: "Work across corporate, community, industrial, and learner contexts",
    body: "The same week can span a plant floor, a classroom, and a boardroom.",
  },
  {
    icon: "TrendingUp",
    title: "Be part of a team focused on practical outcomes",
    body: "Success is measured by what people can do afterwards.",
  },
];

/* The copy deck's "What Every Job Post Includes". Listing it here
   keeps the page useful while the current openings are still being
   confirmed - a candidate can see exactly what a Y&Now role
   description will tell them before one is published. */
const JOB_POST_FIELDS = [
  "Role title",
  "Team or function",
  "Location",
  "About the role",
  "Key responsibilities",
  "Required skills",
  "Preferred experience",
  "Application deadline",
];

const APPLY_EMAIL = "info@broadarks.com";

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build Work That Helps People"
        highlight="Grow"
        deck="Join us to help create programmes that strengthen employability, workforce learning, and community development."
        ctaLabel="View open roles"
        ctaHref="#open-roles"
      />

      {/* Why work with us */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <Container className="relative">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Four reasons people stay"
                highlight="here"
                deck="A small team designing programmes that reach a lot of people."
                align="left"
              />
              <Reveal y={20} delay={0.1} className="relative mt-10 hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#e1e7ef]">
                  <Image
                    src="/about/team-collaboration.png"
                    alt="Y&Now team members collaborating over programme sketches"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <Stagger className="border-t border-[#e8ecf2]" stagger={0.07}>
              {WHY.map((item, index) => (
                <StaggerItem key={item.title} className="border-b border-[#e8ecf2]">
                  <div className="group flex items-start gap-5 py-6 lg:gap-7 lg:py-7">
                    <span className="flex flex-none items-center gap-3 lg:gap-4">
                      <span className="font-heading text-[13px] font-800 tabular-nums tracking-[0.1em] text-neutral-300 transition-colors duration-300 group-hover:text-primary-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                        <AnimIcon name={item.icon} size={19} />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="balance-text block font-heading text-[17px] font-700 leading-snug text-ink lg:text-[19px]">
                        {item.title}
                      </span>
                      <span className="pretty-text mt-1.5 block text-[14.5px] leading-relaxed text-neutral-600">
                        {item.body}
                      </span>
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="What every Y&Now job post"
            highlight="includes"
            deck="No roles are open right now. Every post we publish carries all of the following."
            className="mb-14"
          />

          <Stagger
            className="mx-auto grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-2"
            stagger={0.05}
          >
            {JOB_POST_FIELDS.map((field) => (
              <StaggerItem key={field} className="h-full bg-white">
                <div className="flex h-full items-center gap-3.5 px-7 py-5">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-secondary-500" />
                  <span className="text-[15px] font-500 text-ink">{field}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal y={16} delay={0.15} className="mx-auto mt-10 max-w-4xl">
            <div className="rounded-3xl border border-[#e8ecf2] bg-surface p-8 text-center lg:p-10">
              <p className="font-heading text-[clamp(1.15rem,2.1vw,1.5rem)] font-600 leading-snug tracking-tight text-ink">
                Nothing open that fits? Send us your details anyway.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                Tell us what you work on and the kind of programmes you want to
                build. We keep applications on file and come back to them when a
                role opens.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <CtaButton
                  href={`mailto:${APPLY_EMAIL}?subject=Career%20enquiry`}
                  variant="primary"
                  className="px-6 py-3"
                >
                  Apply now
                </CtaButton>
                <CtaButton href="/contact-us" variant="secondary" className="px-6 py-3">
                  Talk to Y&amp;Now
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
