"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Search, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scrolling services data                                            */
/* ------------------------------------------------------------------ */
const heroServices = [
  { label: "Breast Augmentation", href: "/services/aesthetic-breast/augmentation" },
  { label: "Breast Reduction", href: "/services/aesthetic-breast/reduction" },
  { label: "Breast Lift", href: "/services/aesthetic-breast/lift" },
  { label: "Facelift", href: "/services/face/facelift" },
  { label: "Rhinoplasty", href: "/services/face/rhinoplasty" },
  { label: "Blepharoplasty", href: "/services/face/blepharoplasty" },
  { label: "Tummy Tuck", href: "/services/body/tummy-tuck" },
  { label: "Liposuction", href: "/services/body/liposuction" },
  { label: "Mommy Makeover", href: "/services/body/mommy-makeover" },
  { label: "BBL", href: "/services/body/bbl" },
  { label: "Lipo 360", href: "/services/body/lipo-360" },
  { label: "Neck Lift", href: "/services/face/neck-lift" },
  { label: "Body Lift", href: "/services/body/body-lift" },
  { label: "Arm Lift", href: "/services/body/arm-lift" },
  { label: "Otoplasty", href: "/services/face/otoplasty" },
  { label: "Gynecomastia", href: "/services/aesthetic-breast/gynecomastia" },
];

/* ------------------------------------------------------------------ */
/*  Appointment form types                                             */
/* ------------------------------------------------------------------ */
interface FormData {
  location: string;
  doctor: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const SUBMIT_URL = "https://forms.caltechweb.com/api/submit";
const SITE_ID = "specializedplasticsurgery";

/* ------------------------------------------------------------------ */
/*  Appointment Popup                                                  */
/* ------------------------------------------------------------------ */
function AppointmentPopup({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    location: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  function doctorForLocation(loc: string): string {
    if (loc === "NJ") return "Dr. Michael Sosin";
    if (loc === "NY") return "Dr. Chris Devulapalli";
    return "";
  }

  function handleLocationChange(value: string) {
    setFormData((prev) => ({
      ...prev,
      location: value,
      doctor: doctorForLocation(value),
    }));
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site_id: SITE_ID, ...formData }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "block w-full rounded-md bg-white border border-gray-200 h-[52px] px-4 text-sm text-heading placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-primary/30";
  const selectClasses =
    "block w-full rounded-md bg-white border border-gray-200 h-[52px] px-4 text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      style={{ padding: "50px 100px" }}
      onClick={onClose}
    >
      <div
        className="relative grid h-full w-full overflow-hidden rounded-xl bg-white shadow-2xl lg:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-heading shadow-md transition-colors hover:bg-heading hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left: Doctors Image */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/team/doctors-together.jpg"
            alt="Dr. Michael Sosin and Dr. Chris Devulapalli"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-col justify-center overflow-y-auto p-8 sm:p-10 lg:p-12">
          <h2 className="font-heading text-2xl font-bold text-heading sm:text-3xl">
            Take the Next Step &amp; Schedule a Visit Today
          </h2>
          <p className="mt-2 text-sm text-body">
            Fill out the form below and our team will reach out to confirm your appointment.
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-lg bg-peach-light p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-heading">
                Thank You!
              </h3>
              <p className="mt-2 text-sm text-body">
                Your request has been received. We will contact you shortly.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 rounded-md border-2 border-primary bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
              {/* Location & Doctor row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="popup-location" className="mb-1.5 block text-sm font-medium text-heading">
                    Location
                  </label>
                  <select
                    id="popup-location"
                    value={formData.location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className={selectClasses}
                  >
                    <option value="">Select a location</option>
                    <option value="NJ">Northern New Jersey Office</option>
                    <option value="NY">Westchester New York Office</option>
                  </select>
                </div>
                {formData.location && (
                  <div>
                    <label htmlFor="popup-doctor" className="mb-1.5 block text-sm font-medium text-heading">
                      Doctor
                    </label>
                    <select
                      id="popup-doctor"
                      value={formData.doctor}
                      onChange={(e) => handleChange("doctor", e.target.value)}
                      className={selectClasses}
                    >
                      {formData.location === "NJ" && (
                        <option value="Dr. Michael Sosin">Dr. Michael Sosin</option>
                      )}
                      {formData.location === "NY" && (
                        <option value="Dr. Chris Devulapalli">Dr. Chris Devulapalli</option>
                      )}
                    </select>
                  </div>
                )}
              </div>

              {/* Name & Phone row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="popup-name" className="mb-1.5 block text-sm font-medium text-heading">
                    Your Name
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClasses}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="popup-phone" className="mb-1.5 block text-sm font-medium text-heading">
                    Your Phone
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClasses}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="popup-email" className="mb-1.5 block text-sm font-medium text-heading">
                  Email Address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="popup-message" className="mb-1.5 block text-sm font-medium text-heading">
                  Message
                </label>
                <textarea
                  id="popup-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  Something went wrong. Please try again or call our office directly.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-md border-2 border-primary bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Request an Appointment"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export default function HomeHero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-heading">
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

          {/* Two CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">
                Request an Appointment
              </span>
            </button>
            <Link
              href="/services/face"
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Search className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">
                Find Your Procedure
              </span>
            </Link>
          </div>

          {/* Scrolling services strip */}
          <div className="mt-14 overflow-hidden">
            <div className="flex items-center gap-3 animate-marquee hover:[animation-play-state:paused]">
              {heroServices.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="flex-shrink-0 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/25"
                >
                  {svc.label}
                </Link>
              ))}
              {heroServices.map((svc) => (
                <Link
                  key={`dup-${svc.label}`}
                  href={svc.href}
                  className="flex-shrink-0 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/25"
                >
                  {svc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Popup */}
      {showPopup && <AppointmentPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
