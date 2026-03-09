"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Breast",
    image: "/images/categories/breast.jpg",
    href: "/services/aesthetic-breast",
  },
  {
    name: "Face",
    image: "/images/categories/face.jpg",
    href: "/services/face",
  },
  {
    name: "Body",
    image: "/images/categories/body.jpg",
    href: "/services/body",
  },
  {
    name: "Non-Surgical",
    image: "/images/gallery-page/sps-building.jpg",
    href: "/contact",
  },
];

export default function ProcedureCategoriesGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          href={cat.href}
          className="group relative h-[60vh] overflow-hidden sm:h-[70vh]"
        >
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heading/70 via-heading/20 to-transparent transition-colors duration-300 group-hover:from-heading/80" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-10 sm:pb-14">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white sm:text-2xl">
              {cat.name}
            </h3>
            <span className="mt-4 inline-block rounded-md border-2 border-white bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-heading">
              View Procedures
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
