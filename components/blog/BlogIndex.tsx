"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { formatBlogDate } from "@/lib/blog";

/* Minimal shape the index needs - the article body is intentionally
   omitted so the list payload stays small. */
export interface BlogCardData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  author: { name: string; role: string };
  tint: string;
  coverImage?: string;
  featured?: boolean;
}

function Cover({
  post,
  size,
}: {
  post: BlogCardData;
  size: "sm" | "lg";
}) {
  if (post.coverImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={post.coverImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(135deg, rgb(${post.tint}) 0%, rgba(${post.tint},0.68) 100%)`,
      }}
    >
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
      <span
        aria-hidden
        className={`pointer-events-none absolute select-none font-heading font-800 leading-none text-white/10 ${
          size === "lg" ? "-right-6 -top-12 text-[16rem]" : "-right-4 -top-8 text-[8rem]"
        }`}
      >
        {post.category.charAt(0)}
      </span>
    </div>
  );
}

function Meta({ post, className = "" }: { post: BlogCardData; className?: string }) {
  return (
    <span className={`flex items-center gap-3 text-xs text-neutral-500 ${className}`}>
      <span>{formatBlogDate(post.date)}</span>
      <span aria-hidden className="h-3 w-px bg-neutral-200" />
      <span className="inline-flex items-center gap-1">
        <Clock size={12} />
        {post.readMinutes} min
      </span>
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:shadow-[0_30px_70px_-30px_rgba(46,49,146,0.35)] lg:grid-cols-2"
    >
      <div className="relative h-56 overflow-hidden lg:h-full lg:min-h-[22rem]">
        <Cover post={post} size="lg" />
        <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          {post.category}
        </span>
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-11">
        <span className="text-caption text-primary-500">Featured</span>
        <h2 className="mt-3 font-heading text-[clamp(1.5rem,2.6vw,2.15rem)] font-800 leading-[1.14] tracking-tight text-ink transition-colors duration-200 group-hover:text-primary-700">
          {post.title}
        </h2>
        <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>
        <div className="mt-7 flex items-center justify-between">
          <Meta post={post} />
          <span className="inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
            Read article
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:shadow-[0_22px_50px_-24px_rgba(46,49,146,0.3)]"
    >
      <div className="relative h-40 overflow-hidden">
        <Cover post={post} size="sm" />
        <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-700 leading-snug text-ink transition-colors duration-200 group-hover:text-primary-700">
          {post.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#eef1f6] pt-4">
          <Meta post={post} />
          <ArrowUpRight
            size={16}
            className="text-primary-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

export default function BlogIndex({ posts }: { posts: BlogCardData[] }) {
  const reduce = useReducedMotion();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const [active, setActive] = useState("All");

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <>
      {featured && (
        <div className="mb-14">
          <FeaturedCard post={featured} />
        </div>
      )}

      {/* Filter bar */}
      <div className="sticky top-[76px] z-10 -mx-2 mb-10 flex flex-wrap items-center gap-2 rounded-2xl bg-surface/80 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-4 py-2 text-[13px] font-600 transition-colors ${
                isActive
                  ? "text-white"
                  : "text-neutral-600 hover:bg-white hover:text-primary-700"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary-500"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-neutral-500">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}
