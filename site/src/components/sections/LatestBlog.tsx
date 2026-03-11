import Link from "next/link";
import Image from "next/image";
import { blogPosts, getFeaturedImage } from "@/data/blog-posts";

export default function LatestBlog() {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const featured = latest[0];
  const rest = latest.slice(1);

  return (
    <section className="bg-blog-bg py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">
            From Our Blog
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Latest News &amp; Insights
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Featured Post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-lg"
          >
            <Image
              src={getFeaturedImage(featured)}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/90 via-heading/40 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-xs font-semibold tracking-wider text-primary">
                {featured.category}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-xs text-white/50">
                {new Date(featured.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-primary transition-colors group-hover:text-white">
                Read More &rarr;
              </span>
            </div>
          </Link>

          {/* Right: 3 Smaller Posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-auto w-36 flex-shrink-0 sm:w-44">
                  <Image
                    src={getFeaturedImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="176px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                  <p className="text-[10px] font-semibold tracking-wider text-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-heading line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-body/50">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-body line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 text-sm font-bold text-primary transition-colors group-hover:text-heading">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-md border-2 border-heading bg-heading px-7 py-3 text-xs font-bold tracking-[0.15em] text-white transition-all hover:bg-white hover:text-heading hover:shadow-md"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
