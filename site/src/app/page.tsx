import HomeHero from "@/components/sections/HomeHero";
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
      <HomeHero />

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
