"use client";

import { useState, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useRecaptcha } from "@/hooks/useRecaptcha";

type FormStatus = "idle" | "submitting" | "success" | "error";

const SUBMIT_URL = "https://forms.caltechweb.com/api/submit";
const SITE_ID = "specializedplasticsurgery";

const inputClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[56px] px-[20px] text-sm text-heading placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary/30";

const selectClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[56px] px-[20px] text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary/30";

function doctorForLocation(loc: string): string {
  if (loc === "NJ") return "Dr. Michael Sosin";
  if (loc === "NY") return "Dr. Chris Devulapalli";
  return "";
}

export default function DoctorsContactForm() {
  const router = useRouter();
  const { getToken } = useRecaptcha();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    location: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleLocationChange(value: string) {
    setFormData((prev) => ({
      ...prev,
      location: value,
      doctor: doctorForLocation(value),
    }));
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypotRef.current?.value) {
      setStatus("success");
      router.push("/thank-you");
      return;
    }
    setStatus("submitting");

    try {
      const recaptcha_token = await getToken("doctors_contact_form");
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site_id: SITE_ID, ...formData, recaptcha_token }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-peach-light p-6 text-center">
        <h3 className="font-heading text-lg font-bold text-heading">Thank You!</h3>
        <p className="mt-2 text-sm text-body">
          Your request has been received. We will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Row 1: Location + Doctor */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-location" className="block text-sm font-medium text-heading mb-1.5">
            Location
          </label>
          <select
            id="contact-location"
            value={formData.location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className={selectClasses}
          >
            <option value="">Select Location</option>
            <option value="NJ">Northern New Jersey Office</option>
            <option value="NY">Westchester New York Office</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-doctor" className="block text-sm font-medium text-heading mb-1.5">
            Doctor
          </label>
          <select
            id="contact-doctor"
            value={formData.doctor}
            onChange={(e) => handleChange("doctor", e.target.value)}
            className={selectClasses}
          >
            <option value="">Select Doctor</option>
            {formData.location === "NJ" && (
              <option value="Dr. Michael Sosin">Dr. Michael Sosin</option>
            )}
            {formData.location === "NY" && (
              <option value="Dr. Chris Devulapalli">Dr. Chris Devulapalli</option>
            )}
          </select>
        </div>
      </div>

      {/* Row 2: Name + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-heading mb-1.5">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClasses}
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-heading mb-1.5">
            Your Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClasses}
            placeholder="(200) 555-0123"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-heading mb-1.5">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-heading mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] px-[20px] py-4 text-sm text-heading placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Please tell us what procedure you're interested in"
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Something went wrong. Please try again or call our office directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full border-2 border-primary bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request an Appointment"}
      </button>
    </form>
  );
}
