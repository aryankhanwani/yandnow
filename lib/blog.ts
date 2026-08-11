/* ============================================================
   BLOG — hardcoded content source.
   Swap this file for a CMS/API later; the page components only
   depend on the exported types + helper functions below.
   Covers use a brand "r,g,b" tint (rendered as a gradient) so
   there are no image assets to manage yet.
   ============================================================ */

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. "2026-07-28". */
  date: string;
  readMinutes: number;
  author: { name: string; role: string };
  /** "r,g,b" brand tint used for the gradient cover. */
  tint: string;
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "measuring-l-and-d-that-shows-up-in-performance",
    title: "Measuring L&D That Actually Shows Up in Performance",
    excerpt:
      "Course completions tell you attendance, not capability. Here is how to tie every learning programme to a performance signal your leadership already tracks.",
    category: "Learning & Development",
    date: "2026-07-28",
    readMinutes: 6,
    author: { name: "Y&Now Editorial", role: "Capability Practice" },
    tint: "46,49,146",
    content: [
      {
        type: "paragraph",
        text: "Most workforce training is still measured by the wrong number. Completion rates, hours logged, and satisfaction scores describe what happened inside the classroom — not whether anything changed at the workplace. If an L&D investment cannot be traced to a business signal, it is almost impossible to defend at budget time.",
      },
      { type: "heading", text: "Start from the performance signal, not the course" },
      {
        type: "paragraph",
        text: "A useful programme design begins with the outcome the business already watches: error rates, conversion, time-to-competence, safety incidents, or OKR attainment. Work backwards from that signal to the specific behaviours that move it, and only then to the learning that builds those behaviours.",
      },
      {
        type: "list",
        items: [
          "Name the business signal before designing content.",
          "Map the signal to observable on-the-job behaviours.",
          "Baseline the signal, then re-measure on a fixed cadence.",
          "Report capability gains and the signal side by side.",
        ],
      },
      { type: "heading", text: "Make the measurement continuous" },
      {
        type: "paragraph",
        text: "A single post-training test is a snapshot. Capability shows up over weeks, through manager check-ins, live scenarios, and real tasks. Treat measurement as a loop — each cycle informs the next intervention and the next round of workforce planning.",
      },
      {
        type: "quote",
        text: "If you cannot point to the number that moved, you did not measure the training — you measured the event.",
      },
    ],
  },
  {
    slug: "designing-schedule-vii-csr-skilling-programmes",
    title: "Designing CSR Skilling Programmes That Survive an Audit",
    excerpt:
      "A Schedule VII-aligned programme lives or dies on documentation. A practical look at building CSR skilling initiatives with compliance-ready evidence from day one.",
    category: "CSR & Impact",
    date: "2026-07-15",
    readMinutes: 7,
    author: { name: "Y&Now Editorial", role: "CSR Practice" },
    tint: "39,170,226",
    content: [
      {
        type: "paragraph",
        text: "CSR skilling has matured past good intentions. Boards now expect the same rigour from a livelihood programme that they expect from any other spend — a defined objective, a mapped Schedule VII head, and evidence that stands up to independent review.",
      },
      { type: "heading", text: "Anchor the design to a Schedule VII head" },
      {
        type: "paragraph",
        text: "Before a single beneficiary is enrolled, the programme should be mapped to a specific category of Schedule VII of the Companies Act, 2013 — and confirmed with your legal team. That mapping shapes eligibility, reporting format, and the documentation you must retain.",
      },
      { type: "heading", text: "Build the evidence trail as you go" },
      {
        type: "list",
        items: [
          "Baseline surveys and beneficiary identification with verifiable IDs.",
          "Attendance registers and standardised quality-assurance checks.",
          "End-line assessments and employment or income verification.",
          "A final impact report in your compliance committee's format.",
        ],
      },
      {
        type: "paragraph",
        text: "Reconstructing this evidence after the fact is where most programmes stumble. Captured continuously, it becomes the impact report almost automatically.",
      },
      {
        type: "quote",
        text: "The strongest impact reports are not written at the end — they are assembled from the first week onward.",
      },
    ],
  },
  {
    slug: "ar-vr-simulation-in-industrial-training",
    title: "Where AR/VR Simulation Earns Its Place in Industrial Training",
    excerpt:
      "Immersive training is not a gimmick when the alternative is risk. A grounded view of where simulation outperforms the classroom on the plant floor.",
    category: "Industry",
    date: "2026-06-30",
    readMinutes: 5,
    author: { name: "Y&Now Editorial", role: "Industry Practice" },
    tint: "31,34,103",
    content: [
      {
        type: "paragraph",
        text: "Simulation is easy to oversell. But in regulated, high-consequence environments, letting people practise a dangerous or expensive task safely — as many times as they need — is exactly where immersive training pays back.",
      },
      { type: "heading", text: "Use it where reality is costly or risky" },
      {
        type: "list",
        items: [
          "High-risk procedures where mistakes carry safety consequences.",
          "Expensive equipment that cannot be tied up for practice.",
          "Rare events that are hard to rehearse on the job.",
          "Standardising a procedure across many sites at once.",
        ],
      },
      { type: "heading", text: "Keep it tied to competence, not novelty" },
      {
        type: "paragraph",
        text: "The value is not the headset. It is repeated, measured practice against a defined standard, with the results feeding the same competency framework as the rest of the programme. Blend simulation with instructor-led and on-the-job learning rather than treating it as a standalone showcase.",
      },
      {
        type: "quote",
        text: "Immersive training earns its budget when the alternative is practising on something you cannot afford to break.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Up to `limit` posts other than the given slug. */
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

/** "2026-07-28" → "28 July 2026". */
export function formatBlogDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
