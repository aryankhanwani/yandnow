import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery | See Y&Now in Action",
  description:
    "The work, the people, and the moments behind Y&Now programmes across sectors and locations.",
};

/* The six captions the copy deck approves, each carried by project
   photography already on the site. Captions stay at the deck's level of
   generality on purpose: naming a partner, a location, or a cohort in a
   caption would be a claim, and the deck's stakeholder note requires
   every image, name, location, and permission to be confirmed first. */
interface Shot {
  image: string;
  alt: string;
  caption: string;
  /** Feature tiles run two columns wide on desktop. */
  wide?: boolean;
  tall?: boolean;
}

const SHOTS: Shot[] = [
  {
    image: "/images/corporate/delivery-model/train.jpg",
    alt: "A facilitator working through a practical exercise with a workplace team",
    caption: "Training in progress",
    wide: true,
  },
  {
    image: "/images/learners/proof/practical-employability-training.jpg",
    alt: "A learner completing a practical technical task with an industry mentor",
    caption: "Learner engagement on site",
  },
  {
    image: "/images/csr/delivery-model/programme-execution.jpg",
    alt: "Facilitators delivering a community programme session",
    caption: "CSR programme delivery",
  },
  {
    image: "/images/industry/proof/plant-floor-training.jpg",
    alt: "Plant operators being guided through equipment checks on a production floor",
    caption: "Industry learning session",
    wide: true,
  },
  {
    image: "/images/corporate/delivery-model/improve.jpg",
    alt: "A team mapping ideas across a planning wall during a workshop",
    caption: "Workshop highlights",
  },
  {
    image: "/images/csr/programme-streams/community-development.jpg",
    alt: "Community members taking part in a group programme session",
    caption: "Community outreach in action",
  },
  {
    image: "/images/school/proof/applied-robotics-learning.jpg",
    alt: "School students building a small robot with guidance from their teacher",
    caption: "Training in progress",
  },
  {
    image: "/images/micro-entrepreneurship/proof/women-enterprise-market-linkage.jpg",
    alt: "Women entrepreneurs reviewing products and market information together",
    caption: "Community outreach in action",
  },
  {
    image: "/images/defence/proof/veteran-transition-training.jpg",
    alt: "Veterans working with an instructor during civilian technical training",
    caption: "Workshop highlights",
    wide: true,
  },
];

function GalleryTile({ shot, index }: { shot: Shot; index: number }) {
  return (
    <Reveal
      y={22}
      delay={Math.min(index, 5) * 0.05}
      className={cn("relative", shot.wide ? "md:col-span-2" : "md:col-span-1")}
    >
      <figure
        className={cn(
          "group relative overflow-hidden rounded-3xl bg-ink",
          shot.wide ? "h-[16rem] lg:h-[21rem]" : "h-[16rem] lg:h-[21rem]",
        )}
      >
        <Image
          src={shot.image}
          alt={shot.alt}
          fill
          sizes={shot.wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-6">
          <span className="text-body-sm text-white">
            {shot.caption}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="See Y&Now in"
        highlight="Action"
        deck="The work, the people, and the moments behind our programmes."
        ctaLabel="Talk to Y&amp;Now"
        ctaHref="/contact-us"
      />

      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <Container className="relative">
          <SectionHeading
            title="Proof of work, in the places it actually"
            highlight="happens"
            deck="Workshops, field delivery, and programme moments across enterprise, community, and learner settings."
            align="left"
            className="mb-12 max-w-3xl lg:mb-14"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {SHOTS.map((shot, index) => (
              <GalleryTile key={`${shot.image}-${index}`} shot={shot} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
