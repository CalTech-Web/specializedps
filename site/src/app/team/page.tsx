import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Specialized Plastic Surgery",
  description:
    "Meet the board-certified plastic surgeons and dedicated support staff at Specialized Plastic Surgery.",
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Alexis", role: "Office Manager, NY", image: "/images/team/alexis.png" },
  { name: "Millie", role: "Office Manager, NJ", image: "/images/team/millie.png" },
  { name: "Diana", role: "Billing Manager", image: "/images/team/diana.jpg" },
  { name: "Courtney", role: "Registered Nurse", image: "/images/team/courtney.png" },
  { name: "Stephanie", role: "Medical Assistant", image: "/images/team/stephanie.png" },
  { name: "Danielle", role: "Surgical Coordinator", image: "/images/team/danielle.jpg" },
  { name: "Amanda", role: "Surgical Coordinator", image: "/images/team/amanda.jpg" },
  { name: "Briggitte", role: "Front Desk Coordinator", image: "/images/team/briggitte.jpg" },
  { name: "Ashley", role: "Marketing Coordinator", image: "/images/team/ashley.png" },
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-1020.jpg"
        title="Our Team"
        subtitle="A dedicated team of professionals committed to providing exceptional patient care at every step of your journey."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
      />

      {/* Team Members */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="The Team Behind the Scenes"
            title="Our Support Staff"
            subtitle="From your first phone call to your final follow-up, our team ensures a seamless, supportive experience."
            centered
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="px-3 py-4 text-center">
                  <h3 className="font-heading text-lg font-bold text-heading">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-body">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
