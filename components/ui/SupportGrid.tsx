import AnimIcon from "@/components/ui/AnimIcon";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   SupportGrid - the canonical "What We Support" list.

   Every solution page opens with a short, scannable list of what
   Y&Now actually delivers for that audience. One icon, one line,
   nothing else: the copy deck asks for outcome-led bullets, not
   paragraphs, so this component deliberately has no body-text
   slot beyond a single supporting line.
   ============================================================ */

export interface SupportItem {
  icon: string;
  title: string;
  /** Optional single clarifying line. Keep it under ~90 characters. */
  body?: string;
}

/* Four items read best as a clean 2x2 rather than a row of three
   with one stranded underneath; everything else sits on three. */
function columnCount(count: number): 2 | 3 {
  return count === 4 ? 2 : 3;
}

/* The grid is a hairline-gap layout, so an unfilled trailing cell
   shows up as a grey block rather than as whitespace. Stretching
   the last card across the leftover columns keeps the block solid
   at any item count. */
function lastCardSpan(count: number, columns: 2 | 3): string {
  const sm = count % 2 === 1 ? "sm:col-span-2" : "";
  const remainder = count % columns;
  if (remainder === 0) return sm;
  // Written out rather than interpolated: Tailwind only emits classes
  // it can find as literal strings in the source.
  const lg = columns - remainder + 1 === 3 ? "lg:col-span-3" : "lg:col-span-2";
  return `${sm} ${lg}`;
}

export default function SupportGrid({
  items,
  className,
}: {
  items: SupportItem[];
  className?: string;
}) {
  const columns = columnCount(items.length);
  const lastSpan = lastCardSpan(items.length, columns);

  return (
    <Stagger
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        className,
      )}
      stagger={0.06}
    >
      {items.map((item, index) => (
        <StaggerItem
          key={item.title}
          className={cn("h-full bg-white", index === items.length - 1 && lastSpan)}
        >
          <article className="group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:bg-primary-50/40 lg:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-105">
              <AnimIcon name={item.icon} size={20} />
            </span>
            <div>
              <h3 className="font-heading text-[17px] font-700 leading-snug text-ink">
                {item.title}
              </h3>
              {item.body && (
                <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-600">{item.body}</p>
              )}
            </div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
