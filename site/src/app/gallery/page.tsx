import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import GalleryClient from "@/components/sections/GalleryClient";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "View before and after photos of breast reconstruction, aesthetic breast surgery, body contouring, and facial procedures at Specialized Plastic Surgery.",
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Before & After Gallery"
        subtitle="Real results from real patients. Browse our gallery to see the transformative outcomes achieved by our board-certified surgeons."
      />

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryClient />
        </div>
      </section>

      {/* Patient Consent Note */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl border border-[#c9a96e]/20 bg-white p-10">
            <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-[#c9a96e]" />
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
