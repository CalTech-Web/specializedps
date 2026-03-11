import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Award, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import AppointmentButton from "@/components/ui/AppointmentButton";

const locationData: Record<string, { address: string; phone: string; phoneRaw: string }> = {
  nj: siteConfig.locations.nj,
  ny: siteConfig.locations.ny,
};

export default function DoctorsShowcase() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Meet Your Surgeons
          </p>
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
            Our Surgeons
          </h2>
        </div>

        <div className="space-y-8">
          {doctors.map((doctor) => {
            const loc = locationData[doctor.locationKey];
            return (
              <div
                key={doctor.slug}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Doctor Image */}
                  <div className="relative w-full flex-shrink-0 md:w-[380px] lg:w-[420px]">
                    <div className="relative h-80 md:h-full md:min-h-[480px]">
                      <Image
                        src={doctor.aboutImage || doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="font-heading text-2xl font-bold text-heading transition-colors hover:text-primary"
                    >
                      {doctor.name}, {doctor.credentials}
                    </Link>
                    <p className="mt-1 text-base font-medium text-primary">
                      {doctor.title}
                    </p>

                    {/* Credentials */}
                    <div className="mt-5 space-y-2">
                      {doctor.boardCertifications.slice(0, 4).map((cert) => (
                        <div key={cert} className="flex items-start gap-2.5">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                          <span className="text-sm text-body">{cert}</span>
                        </div>
                      ))}
                    </div>

                    {/* Location & Phone */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-body">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                        </div>
                        {loc.address}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                          <Phone className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <a
                          href={`tel:${loc.phoneRaw}`}
                          className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                        >
                          {loc.phone}
                        </a>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={`/doctors/${doctor.slug}`}
                        className="inline-flex items-center gap-2 rounded-md border-2 border-heading bg-heading px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-heading"
                      >
                        View Profile
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <AppointmentButton className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-primary">
                        Schedule Consultation
                      </AppointmentButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
