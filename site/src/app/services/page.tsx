import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart, HandHeart, User, ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceCategories, getProceduresByCategory, type ProcedureCategory } from "@/data/procedures";

export const metadata: Metadata = {
  title: "Our Services | Specialized Plastic Surgery",
  description:
    "Explore our full range of cosmetic and reconstructive plastic surgery services, including face, breast, and body procedures.",
};

const categoryIcons: Record<string, typeof Sparkles> = {
  face: Sparkles,
  "aesthetic-breast": Heart,
  "breast-reconstruction": HandHeart,
  body: User,
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="A comprehensive range of cosmetic and reconstructive plastic surgery procedures performed by board-certified surgeons."
        backgroundImage="/images/hero/SPS-Image-125.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Categories Overview */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="Explore Our Specialties"
            description="From facial rejuvenation to breast reconstruction, our surgeons deliver personalized care across every area of plastic surgery."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {serviceCategories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || Sparkles;
              const procedures = getProceduresByCategory(cat.slug as ProcedureCategory);

              return (
                <div
                  key={cat.slug}
                  className="rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary rounded-t-lg" />
                  <div className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-heading">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-body">{cat.description}</p>
                      </div>
                    </div>

                    <ul className="mt-6 grid gap-1 sm:grid-cols-2">
                      {procedures.map((proc) => (
                        <li key={proc.slug}>
                          <Link
                            href={`/services/${proc.categorySlug}/${proc.slug}`}
                            className="block rounded py-1.5 text-[13px] text-body transition-colors hover:text-primary"
                          >
                            {proc.shortName ?? proc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${cat.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-heading"
                    >
                      View All {cat.name} Procedures
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6 text-center">
          <SectionHeading
            eyebrow="Our Approach"
            title="Why Choose Our Surgeons"
            description="With training from Georgetown, Johns Hopkins, and NYU, our board-certified surgeons bring complementary expertise in both aesthetic and reconstructive plastic surgery to every procedure."
            light
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
