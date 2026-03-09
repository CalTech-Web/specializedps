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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase text-heading sm:text-4xl lg:text-5xl">
          Popular Procedures
        </h2>

        {/* Overlapping layout: image behind, text panel on top */}
        <div className="relative min-h-[500px] sm:min-h-[550px]">
          {/* Background image — full width */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              key={active.id}
              src={active.image}
              alt={active.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1320px"
            />
          </div>

          {/* Text panel overlapping on the left */}
          <div className="relative flex min-h-[500px] items-center sm:min-h-[550px]">
            <div className="relative w-full p-6 sm:p-0 lg:w-[55%]">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('/images/procedures/tab-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative bg-white/85 p-10 sm:p-14">
                  <h3 className="font-heading text-2xl font-bold text-heading sm:text-3xl">
                    {active.name}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-body">
                    {active.description}
                  </p>
                  <Link
                    href={active.href}
                    className="mt-8 inline-block rounded-md border-2 border-heading bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-heading transition-all hover:bg-heading hover:text-white"
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
              className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all sm:px-6 ${
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
