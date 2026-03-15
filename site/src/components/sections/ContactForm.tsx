"use client";

import { useState, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  location: string;
  doctor: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  fixedLocation?: string;
  fixedDoctor?: string;
  recipientEmail?: string;
}

const SUBMIT_URL = "https://forms.caltechweb.com/api/submit";
const SITE = "specializedplasticsurgery";

const locations = [
  {
    value: "NJ",
    label: "Northern New Jersey",
    doctor: "Dr. Michael Sosin, MD, FACS",
    email: "NJ@myspsdocs.com",
  },
  {
    value: "NY",
    label: "Westchester New York Office",
    doctor: "Dr. Chris Devulapalli, MD",
    email: "Westchester@myspsdocs.com",
  },
];

const inputBase =
  "w-full border-b border-body/30 bg-transparent py-3 text-sm text-heading outline-none transition-colors placeholder:text-body/40 focus:border-primary";

export default function ContactForm({
  fixedLocation,
  fixedDoctor,
  recipientEmail,
}: ContactFormProps = {}) {
  const router = useRouter();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const isFixed = !!(fixedLocation && fixedDoctor);

  const [formData, setFormData] = useState<FormData>({
    location: fixedLocation ?? "",
    doctor: fixedDoctor ?? "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const selectedLocation = locations.find((l) => l.value === formData.location);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!isFixed && !formData.location)
      newErrors.location = "Please select a location.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s()+-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypotRef.current?.value) {
      setStatus("success");
      router.push("/thank-you");
      return;
    }
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: SITE,
          ...formData,
          recipientEmail: recipientEmail ?? selectedLocation?.email,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleLocationChange(value: string) {
    const loc = locations.find((l) => l.value === value);
    setFormData((prev) => ({
      ...prev,
      location: value,
      doctor: loc?.doctor ?? "",
    }));
    if (errors.location) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.location;
        return next;
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1: Location + Doctor (hidden when fixed) */}
      {!isFixed && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-location" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
              Location *
            </label>
            <select
              id="cf-location"
              value={formData.location}
              onChange={(e) => handleLocationChange(e.target.value)}
              className={`${inputBase} ${errors.location ? "border-red-400" : ""}`}
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="mt-1 text-xs text-red-500">{errors.location}</p>
            )}
          </div>
          <div>
            <label htmlFor="cf-doctor" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
              Doctor *
            </label>
            <select
              id="cf-doctor"
              value={formData.doctor}
              onChange={(e) => handleChange("doctor", e.target.value)}
              className={inputBase}
            >
              <option value="">Select Doctor</option>
              {selectedLocation && (
                <option value={selectedLocation.doctor}>
                  {selectedLocation.doctor}
                </option>
              )}
            </select>
          </div>
        </div>
      )}

      {/* Row 2: Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
            Your Name *
          </label>
          <input
            id="cf-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`${inputBase} ${errors.name ? "border-red-400" : ""}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
            Your Phone *
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(200) 555-0123"
            className={`${inputBase} ${errors.phone ? "border-red-400" : ""}`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 3: Email */}
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
          Email Address *
        </label>
        <input
          id="cf-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`${inputBase} ${errors.email ? "border-red-400" : ""}`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold tracking-wider text-heading">
          Message *
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Please tell us what procedure you're interested in"
          className={`${inputBase} resize-none ${errors.message ? "border-red-400" : ""}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or call our office directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md border-2 border-heading bg-transparent px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-heading transition-all hover:bg-heading hover:text-white disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Request an Appointment"}
      </button>
    </form>
  );
}
