import Section from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { balanceTitle } from "@/lib/typography";

/* ============================================================
   CTABand - the second and final call to action on a page.

   One band, one heading, one supporting line, one button. The
   mid-page CTAs that used to sit under Find Your Route, inside
   the nav dropdown, and beside the FAQ are gone: the budget is
   the hero, this band, and the button in the nav.

   Stacks to a centred column at base with a full-width button;
   goes horizontal - text left, button right - from lg only.
   ============================================================ */

interface CTABandProps {
  title: string;
  highlight?: string;
  /** One line. */
  line?: string;
  ctaLabel: string;
  ctaHref: string;
  id?: string;
}

export default function CTABand({
  title,
  highlight,
  line,
  ctaLabel,
  ctaHref,
  id,
}: CTABandProps) {
  const headingId = `${id ?? "cta"}-heading`;
  const { lead, carry, tail, hold } = balanceTitle(title, highlight);

  return (
    <Section bg="brand" id={id} aria-labelledby={headingId}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div>
          <span aria-hidden className="route-rule route-rule-inverse mb-6" />
          <h2 id={headingId} className="text-h2 balance-text text-white">
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
          </h2>
          {line && <p className="gap-heading measure text-body text-white/80">{line}</p>}
        </div>

        <CtaButton
          href={ctaHref}
          onDark
          className="w-full shrink-0 lg:w-auto"
        >
          {ctaLabel}
        </CtaButton>
      </div>
    </Section>
  );
}
