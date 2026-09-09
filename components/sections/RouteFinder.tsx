import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   FIND YOUR ROUTE
   ------------------------------------------------------------
   The homepage's routing table: one card per solution the site
   actually has a page for, all the same size, in the order the
   copy deck lists them.

   A card carries the service name and nothing else. The visitor
   is picking an audience here, not reading a description, so the
   card's only job is to be recognisable and clickable - the page
   behind it does the explaining.
   ============================================================ */

interface Route {
  id: string;
  name: string;
  href: string;
  image: string;
  imageAlt: string;
}

const ROUTES: Route[] = [
  {
    id: "corporate",
    name: "Corporate Training",
    href: "/corporate",
    image: "/images/solutions-navbar/corporate-training.jpg",
    imageAlt: "A facilitator leading a workplace training session with a corporate team",
  },
  {
    id: "csr",
    name: "CSR Programmes",
    href: "/csr-programs",
    image: "/images/solutions-navbar/csr-programs.jpg",
    imageAlt: "Participants in a community skill development programme",
  },
  {
    id: "industries",
    name: "Industry Solutions",
    href: "/industry-solutions",
    image: "/images/solutions-navbar/industry-solutions.jpg",
    imageAlt: "Plant operators being guided through equipment checks",
  },
  {
    id: "defence",
    name: "Defence Programmes",
    href: "/defence-programs",
    image: "/images/solutions-navbar/defence-programs.jpg",
    imageAlt: "Veterans in a civilian career-readiness session",
  },
  {
    id: "schools",
    name: "School Solutions",
    href: "/school-solutions",
    image: "/images/solutions-navbar/school-solutions.jpg",
    imageAlt: "School students working through a practical applied-skills task",
  },
  {
    id: "livelihoods",
    name: "Micro-Entrepreneurship",
    href: "/micro-entrepreneurship",
    image: "/images/solutions-navbar/micro-entrepreneurship.jpg",
    imageAlt: "A small-business owner working at their market stall",
  },
  {
    id: "learners",
    name: "For Learners",
    href: "/learners-b2c",
    image: "/images/solutions-navbar/for-learners.jpg",
    imageAlt: "A learner completing a practical technical exercise",
  },
];

function RouteCard({ route, index }: { route: Route; index: number }) {
  return (
    <Reveal y={22} delay={Math.min(index, 5) * 0.05}>
      <Link
        href={route.href}
        className="group relative flex h-[15rem] flex-col overflow-hidden rounded-3xl bg-ink outline-none ring-offset-4 ring-offset-white focus-visible:ring-2 focus-visible:ring-primary-400 lg:h-[17rem]"
      >
        <Image
          src={route.image}
          alt={route.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Base legibility scrim */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/5"
        />
        {/* Deepens on hover - the only thing that changes besides the arrow */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />

        <span className="relative flex flex-1 flex-col justify-end p-6">
          <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-ink/50 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
            <ArrowUpRight size={16} />
          </span>

          <span className="balance-text block font-heading text-[22px] font-700 leading-snug text-white">
            {route.name}
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

/* The eighth cell. Seven routes leave a gap in a four-column bed, and
   the visitor who does not recognise their own route in the seven is
   exactly the one who needs somewhere to go. */
function EnquiryCard() {
  return (
    <Reveal y={22} delay={0.3}>
      <div className="flex h-[15rem] flex-col justify-end rounded-3xl border border-[#e1e7ef] bg-surface p-6 lg:h-[17rem]">
        <p className="balance-text font-heading text-[22px] font-700 leading-snug text-ink">
          Not sure which route fits?
        </p>
        <CtaButton href="/contact-us" variant="primary" className="mt-5 self-start px-5 py-2.5">
          Talk to Y&amp;Now
        </CtaButton>
      </div>
    </Reveal>
  );
}

export default function RouteFinder() {
  return (
    <section
      id="who-we-serve"
      aria-labelledby="find-your-route-heading"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="find-your-route-heading"
          title="Find Your"
          highlight="Route"
          className="mb-12 lg:mb-14"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ROUTES.map((route, index) => (
            <RouteCard key={route.id} route={route} index={index} />
          ))}
          <EnquiryCard />
        </div>
      </Container>
    </section>
  );
}
