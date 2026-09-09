import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import BlogIndex, { type BlogCardData } from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ideas, Updates, and Useful Thinking",
  description:
    "Practical content for learning and development leaders, human resources teams, employers, and learners who want to stay current.",
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
        title="Ideas, Updates, and"
        highlight="Useful Thinking"
        deck="Practical content for L&D leaders, HR teams, employers, and learners."
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
