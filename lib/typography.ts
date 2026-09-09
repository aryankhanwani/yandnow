/* ============================================================
   TYPOGRAPHY HELPERS

   Two rules every headline on the site holds to:

     1. A headline never ends with a single word alone on the
        last line.
     2. A short highlighted phrase (the accent-coloured tail of a
        section title) is never split across two lines.

   `text-wrap: balance` evens out the rag, but balancing is only a
   hint the browser may ignore, so these helpers make the two hard
   rules structural: the words that must stay together are joined
   by a non-breaking space and rendered inside one unbreakable
   inline box.
   ============================================================ */

/** A non-breaking space. Kept as a named constant so it is
    obvious in diffs that the whitespace is deliberate. */
export const NBSP = " ";

/** Longest run of characters we will make unbreakable. Beyond
    this a heading would overflow a 320px column, and an orphaned
    word reads better than a horizontal scrollbar. */
const MAX_UNBREAKABLE = 26;

/**
 * Glue the last two words with a non-breaking space so a line can
 * never break between them and strand one word on its own.
 */
export function noOrphan(text: string, maxRun = MAX_UNBREAKABLE): string {
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return text.trim();

  const last = words[words.length - 1];
  const penultimate = words[words.length - 2];
  if (last.length + penultimate.length + 1 > maxRun) return words.join(" ");

  return [...words.slice(0, -2), `${penultimate}${NBSP}${last}`].join(" ");
}

/** True when a highlight phrase is short enough to hold on one line. */
export function canHoldOnOneLine(phrase: string, maxWords = 2, maxLength = 24): boolean {
  const trimmed = phrase.trim();
  if (!trimmed) return false;
  return trimmed.split(/\s+/).length <= maxWords && trimmed.length <= maxLength;
}

export interface BalancedTitle {
  /** Leading words, rendered in the base colour and free to wrap. */
  lead: string;
  /** A base-colour word pulled into the unbreakable tail run so the
      accent phrase is never left alone on the final line. */
  carry?: string;
  /** Accent-coloured tail. */
  tail?: string;
  /** Whether `carry` + `tail` must be kept on a single line. */
  hold: boolean;
}

/**
 * Split a title + highlight pair into the two runs a heading
 * renders, having already resolved both wrapping rules.
 *
 * A one-word highlight is the orphan case: the word before it is
 * carried down into the accent run so the last line always holds
 * at least two words.
 */
export function balanceTitle(title: string, highlight?: string): BalancedTitle {
  const lead = title.trim();
  const tail = highlight?.trim();

  if (!tail) return { lead: noOrphan(lead), hold: false };

  const hold = canHoldOnOneLine(tail);
  const tailWords = tail.split(/\s+/);
  const leadWords = lead.split(/\s+/);

  if (hold && tailWords.length === 1 && leadWords.length > 1) {
    const carried = leadWords[leadWords.length - 1];
    if (carried.length + tail.length + 1 <= MAX_UNBREAKABLE) {
      return {
        lead: leadWords.slice(0, -1).join(" "),
        carry: carried,
        tail,
        hold: true,
      };
    }
  }

  /* A tail too long to hold on one line can still strand its own
     last word, so the same glue is applied inside it. */
  return { lead, tail: hold ? tail : noOrphan(tail), hold };
}
