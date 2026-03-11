import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts, getFeaturedImage } from "@/data/blog-posts";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Educational Resources | Specialized Plastic Surgery",
  description:
    "Read the latest articles on plastic surgery, breast reconstruction, body contouring, and aesthetic procedures from Specialized Plastic Surgery.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <HeroSection
        title="Educational Resources"
        subtitle="Insights, education, and updates from our board-certified plastic surgeons on the latest in aesthetic and reconstructive surgery."
        backgroundImage="/images/hero/SPS-Image-115.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Educational Resources" },
        ]}
      />

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getFeaturedImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-sm bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>

                  <h2 className="font-heading mt-3 text-lg font-bold text-heading transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-sm text-body/60">
                    {formatDate(post.date)}
                  </p>

                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-body">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-heading">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
