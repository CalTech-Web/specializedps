import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Blog",
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
        title="Blog"
        subtitle="Insights, education, and updates from our board-certified plastic surgeons on the latest in aesthetic and reconstructive surgery."
      />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="flex h-48 items-center justify-center bg-[#1f385f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4054b2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Category badge */}
                  <span className="inline-block w-fit rounded-full bg-[#4054b2]/10 px-3 py-1 text-xs font-medium text-[#4054b2]">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="mt-3 text-lg font-bold text-[#32373c] transition-colors group-hover:text-[#4054b2]">
                    {post.title}
                  </h2>

                  {/* Date */}
                  <p className="mt-2 text-sm text-gray-500">
                    {formatDate(post.date)}
                  </p>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4054b2] transition-colors group-hover:text-[#32373c]">
                    Read More
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
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
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
