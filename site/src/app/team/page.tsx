import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import DoctorCard from "@/components/sections/DoctorCard";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/data/doctors";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team",
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
      />

      {/* Surgeons */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
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
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Team Behind the Scenes"
            title="Our Support Staff"
            subtitle="From your first phone call to your final follow-up, our team ensures a seamless, supportive experience."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                {member.image ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1f385f] to-[#32373c]">
                    <span className="text-lg font-semibold text-[#4054b2]">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-[#32373c]">{member.name}</h3>
                  <p className="text-sm text-[#4054b2]">{member.role}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {member.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
