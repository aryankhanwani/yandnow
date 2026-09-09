import Image from "next/image";
import Container from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { balanceTitle } from "@/lib/typography";

/* ============================================================
   PageHero - the opening block of every inner page.

   H1, one line, one call to action. No eyebrow chip: it repeated
   the page title in smaller capitals directly above the page
   title.

   A full-width photograph where the page has one, the brand
   block where it does not - either way the hero is a solid
   ground the white copy sits on, which is what stops seven
   identical white page-tops from blurring together.
   ============================================================ */

interface PageHeroProps {
  title: string;
  /** Trailing accent-coloured phrase appended to the title. */
  highlight?: string;
  /** One sentence, 18 words maximum. */
  deck?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  title,
  highlight,
  deck,
  ctaLabel,
  ctaHref,
  image,
  imageAlt = "",
}: PageHeroProps) {
  const { lead, carry, tail, hold } = balanceTitle(title, highlight);

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative isolate flex min-h-[62svh] flex-col justify-end overflow-hidden bg-brand pb-14 pt-32 landscape:max-h-[520px] lg:min-h-[68svh] lg:pb-20"
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          {/* The one overlay scrim, at the one set of values used
              everywhere text sits on a photograph. */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/60 to-ink/35"
          />
        </>
      )}

      <Container>
        <div className="max-w-3xl">
          <span aria-hidden className="route-rule route-rule-inverse mb-8" />

          <h1 id="page-hero-heading" className="text-h1 balance-text text-white">
            {lead}
            {tail && (
              <>
                {lead ? " " : ""}
                <span className={hold ? "whitespace-nowrap" : undefined}>
                  {carry ? `${carry} ` : ""}
                  <span className="text-white/70">{tail}</span>
                </span>
              </>
            )}
          </h1>

          {deck && <p className="mt-6 measure text-body-lg text-white/85">{deck}</p>}

          {ctaLabel && ctaHref && (
            <CtaButton href={ctaHref} onDark className="mt-10 w-full sm:w-auto">
              {ctaLabel}
            </CtaButton>
          )}
        </div>
      </Container>
    </section>
  );
}
