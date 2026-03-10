import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, ChevronRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getFeaturedImage } from "@/data/blog-posts";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");

  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="font-heading mb-4 mt-10 text-xl font-bold text-heading"
        >
          {trimmed.replace(/^### /, "")}
        </h3>
      );
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-heading mb-4 mt-10 text-2xl font-bold text-heading"
        >
          {trimmed.replace(/^## /, "")}
        </h2>
      );
    }

    const lines = trimmed.split("\n");
    const isListBlock = lines.every((line) => line.trim().startsWith("- "));
    if (isListBlock) {
      return (
        <ul key={i} className="mb-6 ml-2 space-y-2">
          {lines.map((line, j) => {
            const text = line.trim().replace(/^- /, "");
            return (
              <li key={j} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span
                  className="text-body"
                  dangerouslySetInnerHTML={{
                    __html: text.replace(
                      /\*\*(.+?)\*\*/g,
                      '<strong class="font-semibold text-heading">$1</strong>'
                    ),
                  }}
                />
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <p
        key={i}
        className="mb-6 text-base leading-relaxed text-body"
        dangerouslySetInnerHTML={{
          __html: trimmed.replace(
            /\*\*(.+?)\*\*/g,
            '<strong class="font-semibold text-heading">$1</strong>'
          ),
        }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  const categories = [...new Set(blogPosts.map((p) => p.category))].sort();

  const { ny } = siteConfig.locations;

  return (
    <>
      {/* Hero with featured image */}
      <section className="relative h-[350px] sm:h-[400px]">
        <Image
          src={getFeaturedImage(post)}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-heading/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-gold">
            {post.category}
          </span>
          <h1 className="font-heading mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-white/70">{formatDate(post.date)}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <article>
            {renderContent(post.content)}

            <div className="mt-10 border-t border-gray-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-heading"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Back to Educational Resources
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA Card */}
            <div className="rounded-lg bg-heading p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-white">
                Schedule a Consultation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Ready to take the next step? Our board-certified surgeons are here to help.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
              <Link
                href={`tel:${ny.phoneRaw}`}
                className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                {ny.phone}
              </Link>
            </div>

            {/* Recent Posts */}
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-heading">
                Recent Posts
              </h3>
              <div className="mt-4 space-y-4">
                {recentPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-3"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={getFeaturedImage(p)}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-sm font-medium text-heading transition-colors group-hover:text-primary">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-body/60">
                        {formatDate(p.date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-heading">
                Categories
              </h3>
              <div className="mt-4 space-y-1">
                {categories.map((cat) => {
                  const count = blogPosts.filter((p) => p.category === cat).length;
                  return (
                    <div
                      key={cat}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <span className="flex items-center gap-2 text-body">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        {cat}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-body/70">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
