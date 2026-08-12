import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import Markdown from "@/components/ui/Markdown";
import { Reveal } from "@/components/ui/motion-primitives";
import ReadingProgress from "@/components/blog/ReadingProgress";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
  type BlogPost,
} from "@/lib/blog";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found | Y&Now" };

  const title = post.seo.metaTitle ?? `${post.title} | Y&Now Blog`;
  const description = post.seo.metaDescription ?? post.excerpt;
  const image = post.seo.ogImage ?? post.coverImage;

  return {
    title,
    description,
    keywords: post.seo.keywords,
    alternates: post.seo.canonicalUrl ? { canonical: post.seo.canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
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

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:shadow-[0_22px_50px_-24px_rgba(46,49,146,0.3)]"
    >
      <div className="relative h-28 overflow-hidden">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.72) 100%)`,
            }}
          />
        )}
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
          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug);

  return (
    <>
      <ReadingProgress />

      {/* Article hero */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-white pb-12 pt-32 lg:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-halo" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30"
          style={{ maskImage: "radial-gradient(65% 55% at 50% 0%, #000 0%, transparent 75%)" }}
        />
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-600 text-neutral-500 transition-colors hover:text-primary-600"
            >
              <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              All articles
            </Link>

            <span
              className="mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
              style={{ backgroundColor: `rgb(${post.tint})` }}
            >
              {post.category}
            </span>

            <h1 className="mt-4 font-heading text-[clamp(1.95rem,4.6vw,3.1rem)] font-800 leading-[1.1] tracking-tight text-ink">
              {post.title}
            </h1>

            <p className="mt-5 text-[19px] font-500 leading-relaxed text-neutral-600">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-neutral-500">
              <span className="flex items-center gap-2.5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: `rgb(${post.tint})` }}
                >
                  {initials(post.author.name)}
                </span>
                <span className="text-ink">
                  <span className="block font-600 leading-tight">{post.author.name}</span>
                  <span className="block text-xs text-neutral-500">{post.author.role}</span>
                </span>
              </span>
              <span aria-hidden className="hidden h-8 w-px bg-neutral-200 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {post.readMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover banner */}
      <Container>
        <div
          className="relative mx-auto -mt-1 h-56 max-w-4xl overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(46,49,146,0.5)] sm:h-72 lg:h-80"
          style={
            post.coverImage
              ? undefined
              : {
                  background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.7) 100%)`,
                }
          }
        >
          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <>
              <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-14 select-none font-heading text-[18rem] font-800 leading-none text-white/10"
              >
                {post.category.charAt(0)}
              </span>
            </>
          )}
        </div>
      </Container>

      {/* Article body */}
      <article className="py-14 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <Markdown content={post.content} tint={post.tint} />

            {/* Author card */}
            <div className="mt-14 flex items-center gap-4 rounded-2xl border border-neutral-100 bg-surface p-6">
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: `rgb(${post.tint})` }}
              >
                {initials(post.author.name)}
              </span>
              <div>
                <p className="text-xs font-600 uppercase tracking-[0.1em] text-neutral-400">
                  Written by
                </p>
                <p className="font-heading text-base font-700 text-ink">{post.author.name}</p>
                <p className="text-sm text-neutral-500">{post.author.role}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#eef1f6] pt-6">
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
            <h2 className="mb-8 font-heading text-2xl font-700 text-ink">Keep reading</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
