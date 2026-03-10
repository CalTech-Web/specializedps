import Link from "next/link";
import Image from "next/image";
import { blogPosts, getFeaturedImage } from "@/data/blog-posts";

export default function LatestBlog() {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-blog-bg py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            From Our Blog
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Latest News &amp; Insights
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getFeaturedImage(post)}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-heading line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-body/60">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-primary transition-colors group-hover:text-heading">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-md border-2 border-heading bg-heading px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-white hover:text-heading hover:shadow-md"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
