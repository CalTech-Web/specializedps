import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { Camera, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "View before and after photos of breast reconstruction, aesthetic breast surgery, body contouring, and facial procedures at Specialized Plastic Surgery.",
};

const galleryCategories = [
  {
    title: "Breast Reconstruction",
    description:
      "DIEP flap, implant-based reconstruction, oncoplastic reduction, and revision procedures.",
    color: "from-[#1a2332] to-[#2a3a52]",
  },
  {
    title: "Aesthetic Breast",
    description:
      "Breast augmentation, breast lift, breast reduction, and implant removal results.",
    color: "from-[#1a2332] to-[#2a3a52]",
  },
  {
    title: "Body",
    description:
      "Tummy tuck, liposuction, Lipo 360, Brazilian Butt Lift, and body lift transformations.",
    color: "from-[#1a2332] to-[#2a3a52]",
  },
  {
    title: "Face",
    description:
      "Facelift, rhinoplasty, blepharoplasty, neck lift, and chin liposuction results.",
    color: "from-[#1a2332] to-[#2a3a52]",
  },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Before & After Gallery"
        subtitle="Real results from real patients. Browse our gallery to see the transformative outcomes achieved by our board-certified surgeons."
      />

      {/* Gallery Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Gallery Categories"
            subtitle="Select a category below to view before and after photos from our practice. Each result reflects our commitment to personalized care and surgical precision."
            centered
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {galleryCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-[#1a2332] to-[#2a3a52] shadow-sm"
              >
                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center">
                  <Camera className="mb-4 h-10 w-10 text-[#c9a96e]" />
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
                    {category.description}
                  </p>
                </div>

                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1a2332]/85 backdrop-blur-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c9a96e]/40 bg-[#c9a96e]/10">
                    <Lock className="h-6 w-6 text-[#c9a96e]" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-wide text-[#c9a96e]">
                    Coming Soon
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Photos will be available shortly
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Consent Note */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl border border-[#c9a96e]/20 bg-white p-10">
            <Lock className="mx-auto mb-4 h-8 w-8 text-[#c9a96e]" />
            <h2 className="text-2xl font-bold text-[#1a2332]">
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

      <CTABanner
        heading="Want to See What's Possible?"
        subtext="Schedule a consultation to discuss your goals and view additional before and after photos during your visit."
      />
    </>
  );
}
