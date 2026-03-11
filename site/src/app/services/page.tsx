import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  HandHeart,
  User,
  ArrowRight,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Stethoscope,
  CalendarCheck,
  Activity,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import AppointmentButton from "@/components/ui/AppointmentButton";
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

const categoryImages: Record<string, string> = {
  face: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-115.jpg",
  "aesthetic-breast": "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-218.jpg",
  "breast-reconstruction": "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-130.jpg",
  body: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-236.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="A comprehensive range of cosmetic and reconstructive plastic surgery procedures performed by board-certified surgeons."
        backgroundImage="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-236.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Categories Overview */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="text-center">
            <p className="mb-4 inline-block rounded-sm bg-primary/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </p>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Explore Our Specialties
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-body">
              From facial rejuvenation to breast reconstruction, our surgeons deliver personalized care across every area of plastic surgery.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {serviceCategories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || Sparkles;
              const procedures = getProceduresByCategory(cat.slug as ProcedureCategory);
              const bgImage = categoryImages[cat.slug];

              return (
                <div
                  key={cat.slug}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    {bgImage && (
                      <Image
                        src={bgImage}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/70 to-heading/10" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-body">{cat.description}</p>

                    <ul className="mt-5 grid gap-1 sm:grid-cols-2">
                      {procedures.map((proc) => (
                        <li key={proc.slug}>
                          <Link
                            href={`/services/${proc.categorySlug}/${proc.slug}`}
                            className="flex items-center gap-1.5 rounded py-1.5 text-[13px] text-body transition-colors hover:text-primary"
                          >
                            <ArrowRight className="h-3 w-3 shrink-0 text-primary/50" />
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
              Our Approach
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Why Choose Our Surgeons
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              With training from Georgetown, Johns Hopkins, and NYU, our board-certified surgeons bring complementary expertise in both aesthetic and reconstructive plastic surgery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Board-Certified Surgeons",
                description: "Both surgeons hold board certification from the American Board of Plastic Surgery, the gold standard for competence in the field.",
              },
              {
                icon: Microscope,
                title: "Fellowship-Trained Microsurgeons",
                description: "Advanced microsurgical training enables complex reconstructive procedures like DIEP flap breast reconstruction with precision.",
              },
              {
                icon: Activity,
                title: "ERAS Recovery Protocols",
                description: "Our Enhanced Recovery After Surgery protocols mean faster healing, less pain, and shorter downtime for every patient.",
              },
              {
                icon: ClipboardList,
                title: "Personalized Treatment Plans",
                description: "Every procedure is customized to your unique anatomy, goals, and lifestyle for results that look and feel natural.",
              },
              {
                icon: Stethoscope,
                title: "Dual-Surgeon Practice",
                description: "Two specialists with complementary expertise across reconstructive and aesthetic surgery, covering the full spectrum of procedures.",
              },
              {
                icon: CalendarCheck,
                title: "Two Convenient Locations",
                description: "Offices in Millburn, NJ and Harrison, NY serve the tri-state area, with accommodations for traveling patients.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="text-center">
            <p className="mb-4 inline-block rounded-sm bg-primary/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Your Journey
            </p>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              What to Expect
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-body">
              From your first consultation to full recovery, we guide you through every step with personalized care and support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Meet with your surgeon to discuss your goals, assess your anatomy, and review all available options in a comfortable setting.",
              },
              {
                step: "02",
                title: "Personalized Plan",
                description: "Your surgeon develops a customized treatment plan tailored to your unique needs, goals, and expectations.",
              },
              {
                step: "03",
                title: "Pre-Operative Prep",
                description: "ERAS protocol preparation including nutritional screening, medication review, and detailed pre-op instructions.",
              },
              {
                step: "04",
                title: "Your Procedure",
                description: "Surgery performed using advanced techniques, opioid-sparing anesthesia, and minimally invasive methods when possible.",
              },
              {
                step: "05",
                title: "Recovery",
                description: "ERAS-guided recovery with early mobility, multimodal pain management, and comprehensive aftercare support.",
              },
              {
                step: "06",
                title: "Follow-Up",
                description: "Regular post-operative appointments to monitor healing, with remote follow-ups available for traveling patients.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="font-heading text-4xl font-bold text-primary/15">
                  {item.step}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-236.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-heading/80" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center">
          <div className="mx-auto mb-6 h-[2px] w-16 bg-gold" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Schedule a consultation with one of our board-certified plastic surgeons and discover what is possible.
          </p>
          <div className="mt-10">
            <AppointmentButton className="inline-flex items-center gap-2.5 rounded-md border-2 border-gold bg-gold px-8 py-3.5 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md">
              Schedule a Consultation
            </AppointmentButton>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>
    </>
  );
}
