/* ============================================================
   ChipRow - delivery formats and tags, never buttons.

   Chips wrap, they do not scroll: five short chips fall onto two
   lines at 375px and that is the correct outcome. A horizontal
   scroller here would hide items behind an edge.
   ============================================================ */

export default function ChipRow({
  items,
  label,
}: {
  items: string[];
  /** Names the list for assistive tech, since chips carry no heading. */
  label: string;
}) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}
