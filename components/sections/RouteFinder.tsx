import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";

/* ============================================================
   FIND YOUR ROUTE
   ------------------------------------------------------------
   The most valuable section on the homepage, and the one place
   the seven solutions live properly. Image and name, nothing
   else: the visitor is picking an audience, not reading seven
   descriptions of it.

   The "Not sure which route fits? → Talk to Y&Now" card that sat
   under this grid is gone. It was a third call to action on a
   page whose budget is two.
   ============================================================ */

const ROUTES: CardItem[] = [
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

export default function RouteFinder() {
  return (
    <Section id="find-your-route" aria-labelledby="find-your-route-heading" bg="surface" divider>
      <SectionHeading
        id="find-your-route-heading"
        title="Find your"
        highlight="route"
        className="mb-10"
      />
      <CardGrid items={ROUTES} />
    </Section>
  );
}
