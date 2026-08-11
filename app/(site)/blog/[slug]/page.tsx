import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/motion-primitives";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | Y&Now" };
  return {
    title: `${post.title} | Y&Now Blog`,
    description: post.excerpt,
  };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ContentBlock({ block, tint }: { block: BlogBlock; tint: string }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 font-heading text-2xl font-700 leading-tight text-ink">
          {block.text}
        </h2>
      );
    case "paragraph":
      return <p className="mt-5 text-[17px] leading-relaxed text-neutral-700">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[17px] leading-relaxed text-neutral-700">
              <span
                aria-hidden
                className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: `rgb(${tint})` }}
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          className="my-8 rounded-r-2xl border-l-[3px] bg-surface px-6 py-5 font-heading text-lg font-600 italic leading-snug text-ink"
          style={{ borderColor: `rgb(${tint})` }}
        >
          “{block.text}”
          {block.cite && <cite className="mt-2 block text-sm font-500 not-italic text-neutral-500">— {block.cite}</cite>}
        </blockquote>
      );
  }
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:shadow-[0_22px_50px_-24px_rgba(46,49,146,0.3)]"
    >
      <div
        className="relative h-28"
        style={{ background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.72) 100%)` }}
      >
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-700 leading-snug text-ink transition-colors group-hover:text-primary-700">
          {post.title}
        </h3>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
          Read article
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-white pb-14 pt-32 lg:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-halo" />
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-600 text-neutral-500 transition-colors hover:text-primary-600"
            >
              <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              Blog
            </Link>

            <span
              className="mt-6 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
              style={{ backgroundColor: `rgb(${post.tint})` }}
            >
              {post.category}
            </span>

            <h1 className="mt-4 font-heading text-[clamp(1.9rem,4.4vw,3rem)] font-800 leading-[1.12] tracking-tight text-ink">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: `rgb(${post.tint})` }}
                >
                  {initials(post.author.name)}
                </span>
                <span className="text-ink">
                  <span className="block font-600 leading-tight">{post.author.name}</span>
                  <span className="block text-xs text-neutral-500">{post.author.role}</span>
                </span>
              </span>
              <span className="h-4 w-px bg-neutral-200" />
              <span>{formatBlogDate(post.date)}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} />
                {post.readMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover banner */}
      <Container>
        <div
          className="relative mx-auto -mt-2 h-52 max-w-3xl overflow-hidden rounded-3xl sm:h-64"
          style={{ background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.7) 100%)` }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-10 select-none font-heading text-[14rem] font-800 leading-none text-white/10"
          >
            {post.category.charAt(0)}
          </span>
        </div>
      </Container>

      {/* Article body */}
      <article className="py-14 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-[19px] font-500 leading-relaxed text-ink">{post.excerpt}</p>
            <div className="mt-2">
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} tint={post.tint} />
              ))}
            </div>

            <div className="mt-12 border-t border-[#eef1f6] pt-6">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 text-sm font-600 text-primary-600 transition-colors hover:text-primary-700"
              >
                <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
                Back to all articles
              </Link>
            </div>
          </Reveal>
        </Container>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-700 text-ink">More from the blog</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <RelatedCard key={r.slug} post={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        eyebrow="Work With Y&Now"
        title="Ready to build capability that"
        highlight="shows up in results?"
        subtitle="Tell us about your workforce and the outcomes you're targeting — we'll map a programme around them."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore Solutions"
        secondaryHref="/corporate"
      />
    </>
  );
}
