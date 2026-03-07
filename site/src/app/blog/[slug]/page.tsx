import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import CTABanner from "@/components/sections/CTABanner";

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

    // Heading: ### (h3)
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

    // Heading: ## (h2)
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-heading mb-4 mt-12 text-2xl font-bold text-heading"
        >
          {trimmed.replace(/^## /, "")}
        </h2>
      );
    }

    // List items: lines starting with -
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

    // Regular paragraph with bold support
    return (
      <p
        key={i}
        className="mb-6 text-lg leading-relaxed text-body"
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

  return (
    <>
      {/* Article header */}
      <section className="bg-heading py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-gold">
            {post.category}
          </span>
          <h1 className="font-heading mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-secondary">{formatDate(post.date)}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Back to Blog */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
            Back to Blog
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
