import { cn } from "@/lib/utils";
import { balanceTitle } from "@/lib/typography";

/* ============================================================
   SectionHeading - a route rule, a heading, and at most one line.

   There is no eyebrow prop. Every eyebrow label on the site was
   restating the heading below it in more words, so they are gone
   and the 40px brand route rule stands in their place: the
   heading keeps a visual anchor without costing a single word.

   `deck` is optional by design - it belongs on about half the
   sections, never on all of them, and is capped at one sentence
   by the copy budget and at 62 characters of measure by the CSS.
   ============================================================ */

interface SectionHeadingProps {
  title: string;
  /** Trailing accent-coloured phrase appended to the title. */
  highlight?: string;
  /** One sentence, 18 words maximum. Use on half the sections. */
  deck?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  id?: string;
  className?: string;
  titleClassName?: string;
  /** Inverts the rule and text for brand / ink grounds. */
  tone?: "default" | "inverse";
}

export default function SectionHeading({
  title,
  highlight,
  deck,
  align = "left",
  as: Tag = "h2",
  id,
  className,
  titleClassName,
  tone = "default",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const inverse = tone === "inverse";
  const { lead, carry, tail, hold } = balanceTitle(title, highlight);

  return (
    <div className={cn("flex flex-col", isCenter && "items-center text-center", className)}>
      <span
        aria-hidden
        className={cn("route-rule mb-6", inverse && "route-rule-inverse")}
      />

      <Tag
        id={id}
        className={cn(
          "text-h2 balance-text",
          inverse ? "text-white" : "text-ink",
          isCenter ? "max-w-3xl" : "max-w-2xl",
          titleClassName,
        )}
      >
        {lead}
        {tail && (
          <>
            {lead ? " " : ""}
            <span className={cn(hold && "whitespace-nowrap")}>
              {carry ? `${carry} ` : ""}
              <span className={inverse ? "text-white/70" : "text-brand"}>{tail}</span>
            </span>
          </>
        )}
      </Tag>

      {deck && (
        <p
          className={cn(
            "gap-heading measure text-body",
            inverse ? "text-white/80" : "text-ink-muted",
          )}
        >
          {deck}
        </p>
      )}
    </div>
  );
}
