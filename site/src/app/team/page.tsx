import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import DoctorCard from "@/components/sections/DoctorCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { doctors } from "@/data/doctors";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Specialized Plastic Surgery",
  description:
    "Meet the board-certified plastic surgeons and dedicated support staff at Specialized Plastic Surgery.",
};

interface TeamMember {
  name: string;
  role: string;
  location: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Alexis", role: "Office Manager", location: "NY", image: "/images/team/alexis.png" },
  { name: "Millie", role: "Office Manager", location: "NJ", image: "/images/team/millie.png" },
  { name: "Courtney", role: "Registered Nurse", location: "Both Locations", image: "/images/team/courtney.png" },
  { name: "Stephanie", role: "Medical Assistant", location: "Both Locations", image: "/images/team/stephanie.png" },
  { name: "Danielle", role: "Surgical Coordinator", location: "Both Locations", image: "/images/team/danielle.jpg" },
  { name: "Amanda", role: "Surgical Coordinator", location: "Both Locations", image: "/images/team/amanda.jpg" },
  { name: "Diana", role: "Billing Manager", location: "Both Locations", image: "/images/team/diana.jpg" },
  { name: "Briggitte", role: "Front Desk Coordinator", location: "Both Locations", image: "/images/team/briggitte.jpg" },
  { name: "Ashley", role: "Marketing Coordinator", location: "Both Locations", image: "/images/team/ashley.png" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero/team-hero.jpg"
        title="Our Team"
        subtitle="A dedicated team of professionals committed to providing exceptional patient care at every step of your journey."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
      />

      {/* Surgeons */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Surgeons"
            title="Board-Certified Plastic Surgeons"
            subtitle="Trained at Georgetown, Johns Hopkins, and NYU, our surgeons bring complementary expertise in both reconstructive and aesthetic plastic surgery."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="The Team Behind the Scenes"
            title="Our Support Staff"
            description="From your first phone call to your final follow-up, our team ensures a seamless, supportive experience."
            centered
            light
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex items-center gap-4 rounded-lg border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                {member.image ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <span className="text-lg font-semibold text-primary">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-0.5 text-xs text-white/50">
                    {member.location}
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
