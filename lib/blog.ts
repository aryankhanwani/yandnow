/* ============================================================
   BLOG DATA LAYER

   Source of truth is the Supabase `posts` table, managed from the
   separate `yandnow-backend` admin panel. Content is authored as
   Markdown and rendered with <Markdown> on the reader pages.

   If Supabase isn't configured (no env vars) the layer falls back
   to the bundled seed posts below, so the site always builds and
   renders something sensible. The seed content mirrors the columns
   of the Supabase table 1:1.
   ============================================================ */

import { supabase } from "@/lib/supabase";

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
  /** Optional cover image URL - takes precedence over the tint gradient. */
  coverImage?: string;
  featured?: boolean;
  /** Article body as Markdown. */
  content: string;
  /** SEO / social metadata. */
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    keywords?: string;
  };
}

/* ----------------------------------------------------------------
   Supabase row → BlogPost mapper
   ---------------------------------------------------------------- */
interface PostRow {
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  content: string | null;
  cover_tint: string | null;
  cover_image: string | null;
  author_name: string | null;
  author_role: string | null;
  read_minutes: number | null;
  featured: boolean | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  keywords: string | null;
  published_at: string | null;
  created_at: string | null;
}

function mapRow(row: PostRow): BlogPost {
  const published = row.published_at ?? row.created_at ?? new Date().toISOString();
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    category: row.category ?? "General",
    date: published.slice(0, 10),
    readMinutes: row.read_minutes ?? estimateReadMinutes(row.content ?? ""),
    author: {
      name: row.author_name ?? "Y&Now Editorial",
      role: row.author_role ?? "Editorial",
    },
    tint: row.cover_tint ?? "46,49,146",
    coverImage: row.cover_image ?? undefined,
    featured: row.featured ?? false,
    content: row.content ?? "",
    seo: {
      metaTitle: row.meta_title ?? undefined,
      metaDescription: row.meta_description ?? undefined,
      ogImage: row.og_image ?? undefined,
      canonicalUrl: row.canonical_url ?? undefined,
      keywords: row.keywords ?? undefined,
    },
  };
}

const POST_COLUMNS =
  "slug,title,excerpt,category,content,cover_tint,cover_image,author_name,author_role,read_minutes,featured,meta_title,meta_description,og_image,canonical_url,keywords,published_at,created_at";

/* ----------------------------------------------------------------
   Public API - all async so the source can be a DB or the seed.
   ---------------------------------------------------------------- */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from("posts")
      .select(POST_COLUMNS)
      .eq("status", "published")
      .order("published_at", { ascending: false });
    if (!error && data) return (data as PostRow[]).map(mapRow);
  }
  return [...SEED_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (supabase) {
    const { data, error } = await supabase
      .from("posts")
      .select(POST_COLUMNS)
      .eq("status", "published")
      .eq("slug", slug)
      .maybeSingle();
    if (!error && data) return mapRow(data as PostRow);
    if (!error) return undefined;
  }
  return SEED_POSTS.find((p) => p.slug === slug);
}

/** Related posts - same category first, then most recent, excluding `slug`. */
export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getAllPosts();
  const current = all.find((p) => p.slug === slug);
  const others = all.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current?.category);
  const rest = others.filter((p) => p.category !== current?.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** "2026-07-28" → "28 July 2026". */
export function formatBlogDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** Rough reading-time estimate from Markdown length (200 wpm). */
export function estimateReadMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/* ================================================================
   SEED CONTENT - fallback + reference shape for the Supabase seed.
   Keep in sync with supabase/seed.sql in yandnow-backend.
   ================================================================ */
export const SEED_POSTS: BlogPost[] = [
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
    featured: true,
    content: `Most workforce training is still measured by the wrong number. Completion rates, hours logged, and satisfaction scores describe what happened inside the classroom, not whether anything changed at the workplace. If an L&D investment cannot be traced to a business signal, it is almost impossible to defend at budget time.

## Start from the performance signal, not the course

A useful programme design begins with the outcome the business already watches: error rates, conversion, time-to-competence, safety incidents, or OKR attainment. Work backwards from that signal to the specific behaviours that move it, and only then to the learning that builds those behaviours.

- Name the business signal before designing content.
- Map the signal to observable on-the-job behaviours.
- Baseline the signal, then re-measure on a fixed cadence.
- Report capability gains and the signal side by side.

## Make the measurement continuous

A single post-training test is a snapshot. Capability shows up over weeks, through manager check-ins, live scenarios, and real tasks. Treat measurement as a loop: each cycle informs the next intervention and the next round of workforce planning.

> If you cannot point to the number that moved, you did not measure the training; you measured the event.`,
    seo: {
      metaTitle: "Measuring L&D That Shows Up in Performance | Y&Now",
      metaDescription:
        "Tie every learning programme to a performance signal your leadership already tracks: a practical framework for measuring workforce capability.",
      keywords: "L&D measurement, workforce capability, training ROI, learning analytics",
    },
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
    content: `CSR skilling has matured past good intentions. Boards now expect the same rigour from a livelihood programme that they expect from any other spend: a defined objective, a mapped Schedule VII head, and evidence that stands up to independent review.

## Anchor the design to a Schedule VII head

Before a single beneficiary is enrolled, the programme should be mapped to a specific category of Schedule VII of the Companies Act, 2013, and confirmed with your legal team. That mapping shapes eligibility, reporting format, and the documentation you must retain.

## Build the evidence trail as you go

- Baseline surveys and beneficiary identification with verifiable IDs.
- Attendance registers and standardised quality-assurance checks.
- End-line assessments and employment or income verification.
- A final impact report in your compliance committee's format.

Reconstructing this evidence after the fact is where most programmes stumble. Captured continuously, it becomes the impact report almost automatically.

> The strongest impact reports are not written at the end; they are assembled from the first week onward.`,
    seo: {
      metaTitle: "CSR Skilling Programmes That Survive an Audit | Y&Now",
      metaDescription:
        "Build Schedule VII-aligned CSR skilling programmes with compliance-ready evidence from day one.",
      keywords: "CSR skilling, Schedule VII, CSR compliance, impact reporting",
    },
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
    content: `Simulation is easy to oversell. But in regulated, high-consequence environments, letting people practise a dangerous or expensive task safely, as many times as they need, is exactly where immersive training pays back.

## Use it where reality is costly or risky

- High-risk procedures where mistakes carry safety consequences.
- Expensive equipment that cannot be tied up for practice.
- Rare events that are hard to rehearse on the job.
- Standardising a procedure across many sites at once.

## Keep it tied to competence, not novelty

The value is not the headset. It is repeated, measured practice against a defined standard, with the results feeding the same competency framework as the rest of the programme. Blend simulation with instructor-led and on-the-job learning rather than treating it as a standalone showcase.

> Immersive training earns its budget when the alternative is practising on something you cannot afford to break.`,
    seo: {
      metaTitle: "Where AR/VR Simulation Earns Its Place in Training | Y&Now",
      metaDescription:
        "A grounded view of where immersive AR/VR simulation outperforms the classroom in industrial training.",
      keywords: "AR VR training, industrial simulation, immersive learning, safety training",
    },
  },
];
