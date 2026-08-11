import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { getAllPosts, formatBlogDate, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insights on Workforce Capability | Y&Now",
  description:
    "Practical thinking on workforce capability, L&D measurement, CSR skilling, and industry training from the Y&Now team.",
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:shadow-[0_22px_50px_-24px_rgba(46,49,146,0.3)]"
    >
      {/* Gradient cover */}
      <div
        className="relative h-40 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.72) 100%)`,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -top-8 select-none font-heading text-[7rem] font-800 leading-none text-white/10"
        >
          {post.category.charAt(0)}
        </span>
        <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-700 leading-snug text-ink transition-colors duration-200 group-hover:text-primary-700">
          {post.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#eef1f6] pt-4 text-xs text-neutral-500">
          <span className="flex items-center gap-3">
            <span>{formatBlogDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {post.readMinutes} min
            </span>
          </span>
          <ArrowRight
            size={16}
            className="text-primary-500 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on building"
        highlight="workforce capability"
        subtitle="Practical thinking on measuring L&D, designing CSR skilling programmes, and training industrial workforces at scale."
      />

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {posts.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

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
