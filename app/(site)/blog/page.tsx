import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import BlogIndex, { type BlogCardData } from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: Insights on Workforce Capability | Y&Now",
  description:
    "Practical thinking on workforce capability, L&D measurement, CSR skilling, and industry training from the Y&Now team.",
};

// Refresh from Supabase at most once a minute.
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  const cards: BlogCardData[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readMinutes: p.readMinutes,
    author: p.author,
    tint: p.tint,
    coverImage: p.coverImage,
    featured: p.featured,
  }));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on building"
        highlight="workforce capability"
        subtitle="Practical thinking on measuring L&D, designing CSR skilling programmes, and training industrial workforces at scale."
      />

      <section className="bg-surface py-20 lg:py-24">
        <Container>
          {cards.length > 0 ? (
            <BlogIndex posts={cards} />
          ) : (
            <p className="py-16 text-center text-neutral-500">
              No articles published yet. Check back soon.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
