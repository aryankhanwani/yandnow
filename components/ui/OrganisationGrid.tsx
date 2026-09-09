import { Reveal } from "@/components/ui/motion-primitives";

export interface OrganisationItem {
  name: string;
  note?: string;
}

/* ============================================================
   OrganisationGrid - a hairline-divided wall of names, each with
   an optional line describing the work.

   Single column on phones: the cells carry a name and usually a
   sentence, neither of which survives being cut into thirds on a
   390px screen. From `sm` up it becomes a 6- or 12-column bed so
   the common counts (five, seven) land on balanced rows instead
   of leaving an orphan.
   ============================================================ */

/** Column span from `sm` up, chosen so the last row fills. */
function spanFor(index: number, count: number): string {
  if (count === 7) return index < 4 ? "sm:col-span-3" : "sm:col-span-4"; // 12-col bed
  if (count === 5) return index < 3 ? "sm:col-span-2" : "sm:col-span-3"; // three, then two
  if (count <= 2) return "sm:col-span-3";
  return "sm:col-span-2"; // three per row
}

export default function OrganisationGrid({ items }: { items: OrganisationItem[] }) {
  const bed = items.length === 7 ? "sm:grid-cols-12" : "sm:grid-cols-6";

  return (
    <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2]">
      <div className={`grid grid-cols-1 gap-px ${bed}`}>
        {items.map((item, index) => (
          <div
            key={item.name}
            className={`group flex min-h-28 flex-col items-center justify-center bg-white px-5 py-7 text-center transition-colors duration-300 hover:bg-primary-50/50 ${spanFor(index, items.length)}`}
          >
            <span className="font-heading text-base font-700 text-neutral-500 transition-colors duration-300 group-hover:text-primary-600 lg:text-lg">
              {item.name}
            </span>
            {item.note && (
              <span className="mt-2 max-w-xs text-[13px] leading-relaxed text-neutral-500">
                {item.note}
              </span>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
