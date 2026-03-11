import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Award, BookOpen, ArrowRight, FileText, GraduationCap, Users } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import DoctorsContactForm from "@/components/sections/DoctorsContactForm";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Surgeons | Specialized Plastic Surgery",
  description:
    "Meet our board-certified plastic surgeons. Trained at the nation's top institutions, our doctors bring unparalleled expertise in cosmetic and reconstructive surgery.",
};

export default function DoctorsPage() {
  return (
    <>
      <HeroSection
        title="Our Surgeons"
        subtitle="Meet our board-certified plastic surgeons, trained at the nation's top institutions and recognized for clinical excellence in cosmetic and reconstructive surgery."
        backgroundImage="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-218.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Surgeons" },
        ]}
      />

      {/* Doctors Section */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="space-y-12">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.slug}
                className={`flex flex-col overflow-hidden rounded-lg border border-gray-100 shadow-sm lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full lg:w-[400px] lg:flex-shrink-0">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {doctor.location}
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-body">
                    {doctor.title} &middot; {doctor.credentials}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-body">
                    {doctor.philosophy}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-3">
                    {doctor.boardCertifications.length > 0 && (
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-heading">
                            Board Certifications
                          </p>
                          <p className="mt-0.5 text-sm text-body">
                            {doctor.boardCertifications.join(" · ")}
                          </p>
                        </div>
                      </div>
                    )}

                    {doctor.notableAchievement && (
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-heading">
                            Notable Achievement
                          </p>
                          <p className="mt-0.5 text-sm text-body">
                            {doctor.notableAchievement}
                          </p>
                        </div>
                      </div>
                    )}

                    {doctor.publications && (
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-heading">
                            Publications
                          </p>
                          <p className="mt-0.5 text-sm text-body">
                            {doctor.publications}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
                    >
                      View Full Profile
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="text-center">
            <p className="mb-4 inline-block rounded-sm bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Awards & Recognition
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Recognized for Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Our surgeons are consistently recognized by leading medical
              organizations for their expertise, clinical outcomes, and
              dedication to advancing the field of plastic surgery.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "90+", label: "Peer-Reviewed Publications", icon: FileText },
              { value: "2", label: "Board-Certified Surgeons", icon: Users },
              { value: "5+", label: "Board Certifications & Fellowships", icon: GraduationCap },
              { value: "1,000+", label: "Breast Procedures Performed", icon: Award },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-6 text-center"
              >
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="font-heading text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-tight text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Recognition Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Castle Connolly Top Doctors",
                description:
                  "Both Dr. Sosin and Dr. Devulapalli have been named Castle Connolly Top Doctors, an honor awarded to physicians recognized by their peers for exceptional clinical skill and patient care.",
                doctors: "Dr. Sosin & Dr. Devulapalli",
              },
              {
                title: "US News Top Doctor",
                description:
                  "Dr. Devulapalli has been recognized as a US News Top Doctor, a distinction highlighting physicians who demonstrate outstanding expertise in their specialty.",
                doctors: "Dr. Devulapalli",
              },
              {
                title: "Featured in New York Magazine",
                description:
                  "Both surgeons have been featured in New York Magazine and Jersey's Best Magazine for their contributions to plastic and reconstructive surgery in the tri-state area.",
                doctors: "Dr. Sosin & Dr. Devulapalli",
              },
              {
                title: "American Board of Plastic Surgery",
                description:
                  "Both surgeons hold board certification from the American Board of Plastic Surgery, the gold standard for demonstrating competence in plastic surgery practice.",
                doctors: "Dr. Sosin & Dr. Devulapalli",
              },
              {
                title: "Fellow, American College of Surgeons",
                description:
                  "Dr. Sosin is a Fellow of the American College of Surgeons (FACS), recognizing his commitment to ethical practice, professional competence, and surgical excellence.",
                doctors: "Dr. Sosin",
              },
              {
                title: "First Face Transplant in New York State",
                description:
                  "Dr. Sosin served as a primary team member of the team that performed New York State's first successful face transplant, a landmark achievement in reconstructive surgery.",
                doctors: "Dr. Sosin",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.doctors}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-white py-14 sm:py-16">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('/images/gallery-page/marble-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-block rounded-sm bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Schedule Your Consultation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body">
              Take the first step toward achieving your goals. Choose your preferred location and doctor, and our team will promptly reach out to confirm your appointment.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-lg">
            <DoctorsContactForm />
          </div>
        </div>
      </section>

    </>
  );
}
