import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CredentialsBar from "@/components/sections/CredentialsBar";
import ProcedureCategoriesGrid from "@/components/sections/ProcedureCategoriesGrid";
import DoctorsShowcase from "@/components/sections/DoctorsShowcase";
import PopularProceduresTabs from "@/components/sections/PopularProceduresTabs";
import GalleryCTA from "@/components/sections/GalleryCTA";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import GoogleReviews from "@/components/sections/GoogleReviews";
import AdvancedTechnology from "@/components/sections/AdvancedTechnology";
import LatestBlog from "@/components/sections/LatestBlog";
import BeforeAfterDragSlider from "@/components/sections/BeforeAfterDragSlider";
import HotspotBodyMap from "@/components/sections/HotspotBodyMap";

export default function HomePage() {
  return (
    <>
      {/* ───────── 1. Hero Section ───────── */}
      <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-heading">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://specializedplasticsurgery.com/wp-content/uploads/2025/09/new-header-sps-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-heading/40" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <h1 className="font-heading text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[3.5rem]">
            Your Destination for Plastic Surgery in New York and New Jersey
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-[15px] leading-relaxed text-white/90 sm:text-base">
            At Specialized Plastic Surgery, we offer world-class expertise,
            advanced surgical training, and cutting-edge techniques, delivering
            results with unmatched precision, artistry, and compassionate care.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`tel:${siteConfig.locations.ny.phoneRaw}`}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">
                Call Now
              </span>
              <span className="text-white/40">|</span>
              <span className="font-medium">
                NY {siteConfig.locations.ny.phone}
              </span>
            </Link>
            <Link
              href={`tel:${siteConfig.locations.nj.phoneRaw}`}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">
                Call Now
              </span>
              <span className="text-white/40">|</span>
              <span className="font-medium">
                NJ {siteConfig.locations.nj.phone}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── 2. Welcome Section ───────── */}
      <WelcomeSection />

      {/* ───────── 3. Credentials Bar ───────── */}
      <CredentialsBar />

      {/* ───────── 4. Procedure Categories ───────── */}
      <ProcedureCategoriesGrid />

      {/* ───────── 5. Meet Our Doctors ───────── */}
      <DoctorsShowcase />

      {/* ───────── 6. Popular Procedures Tabs ───────── */}
      <PopularProceduresTabs />

      {/* ───────── 7. Gallery CTA ───────── */}
      <GalleryCTA />

      {/* ───────── 8. Why Choose SPS ───────── */}
      <WhyChooseSection />

      {/* ───────── 9. Google Reviews ───────── */}
      <GoogleReviews />

      {/* ───────── 10. Advanced Technology ───────── */}
      <AdvancedTechnology />

      {/* ───────── 11. Latest Blog ───────── */}
      <LatestBlog />

      {/* ───────── 12. Before & After Slider ───────── */}
      <BeforeAfterDragSlider />

      {/* ───────── 13. Hotspot Body Map ───────── */}
      <HotspotBodyMap />
    </>
  );
}
