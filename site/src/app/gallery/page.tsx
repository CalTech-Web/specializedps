import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import GalleryClient from "@/components/sections/GalleryClient";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "View before and after photos of breast reconstruction, aesthetic breast surgery, body contouring, and facial procedures at Specialized Plastic Surgery.",
};

export default function GalleryPage() {
  // Group gallery items by category
  const groupedItems = galleryCategories.map((cat) => ({
    ...cat,
    items: galleryItems.filter((item) => item.category === cat.slug),
  }));

  return (
    <>
      <HeroSection
        title="Before & After Gallery"
        subtitle="Real results from real patients. Browse our gallery to see the transformative outcomes achieved by our board-certified surgeons."
      />

      {/* Age-gated gallery content */}
      <GalleryAgeGate>
        {/* Gallery Category Hub */}
        <section className="bg-[#f5f5f5] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#32373c]">
              Browse by Category
            </h2>
            <GalleryClient />
          </div>
        </section>

        {/* Before & After Images by Category */}
        {groupedItems
          .filter((group) => group.items.length > 0)
          .map((group) => (
            <section
              key={group.slug}
              id={group.slug}
              className="bg-white py-16 even:bg-[#f5f5f5]"
            >
              <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-10 text-3xl font-bold text-[#32373c]">
                  {group.label}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <BeforeAfterSlider
                      key={item.id}
                      before={item.before}
                      after={item.after}
                      alt={item.procedureLabel}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}

        {/* Patient Privacy Notice */}
        <section className="bg-[#f5f5f5] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-10">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-[#fb8e28]" />
              <h2 className="text-2xl font-bold text-[#32373c]">
                Patient Privacy & Consent
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                All before and after photos are shared with the explicit written
                consent of our patients. We are deeply committed to protecting
                patient privacy and will only display images that patients have
                approved. Photos are presented for educational purposes and to
                help prospective patients understand potential outcomes.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Individual results may vary. The photos in our gallery represent
                real patient outcomes but should not be considered a guarantee of
                specific results. During your consultation, your surgeon will
                discuss what is realistically achievable based on your individual
                anatomy and goals.
              </p>
            </div>
          </div>
        </section>
      </GalleryAgeGate>

      <CTABanner
        heading="Want to See What's Possible?"
        subtext="Schedule a consultation to discuss your goals and view additional before and after photos during your visit."
      />
    </>
  );
}
