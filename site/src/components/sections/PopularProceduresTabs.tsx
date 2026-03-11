"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { popularProcedures } from "@/data/popular-procedures";
import { CircleDot } from "lucide-react";

export default function PopularProceduresTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const active = popularProcedures[activeTab];

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          Popular Procedures
        </h2>

        {/* Overlapping layout: image behind, text panel on top */}
        <div className="relative min-h-[500px] sm:min-h-[550px]">
          {/* Image — right 50% */}
          <div className="absolute right-0 top-0 bottom-0 w-full overflow-hidden rounded-lg lg:w-[50%]">
            <Image
              key={active.id}
              src={active.image}
              alt={active.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 660px"
            />
          </div>

          {/* Text panel — left 60%, overlapping 10% over the image */}
          <div className="relative flex min-h-[500px] items-center sm:min-h-[550px]">
            <div className="relative w-full p-6 sm:p-0 lg:w-[60%]">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('/images/procedures/tab-panel-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative p-10 sm:p-14">
                  <h3 className="font-heading text-xl font-bold text-heading">
                    {active.name}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-body">
                    {active.description}
                  </p>
                  <Link
                    href={active.href}
                    className="mt-8 inline-block rounded-md border-2 border-heading bg-transparent px-7 py-3 text-xs font-bold tracking-[0.15em] text-heading transition-all hover:bg-heading hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mt-6 flex flex-wrap justify-center gap-1">
          {popularProcedures.map((proc, i) => (
            <button
              key={proc.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-bold tracking-wider transition-all sm:px-6 ${
                i === activeTab
                  ? "bg-heading text-white"
                  : "bg-warm-grey text-heading hover:bg-heading/10"
              }`}
            >
              <CircleDot className="h-3.5 w-3.5" />
              {proc.tabLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
