"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

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
    setStatus("submitting");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site_id: SITE_ID, ...formData }),
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
      {/* Location */}
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
          <option value="">Select a location</option>
          <option value="NJ">Northern New Jersey Office</option>
          <option value="NY">Westchester New York Office</option>
        </select>
      </div>

      {/* Doctor */}
      {formData.location && (
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
            {formData.location === "NJ" && (
              <option value="Dr. Michael Sosin">Dr. Michael Sosin</option>
            )}
            {formData.location === "NY" && (
              <option value="Dr. Chris Devulapalli">Dr. Chris Devulapalli</option>
            )}
          </select>
        </div>
      )}

      {/* Name */}
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

      {/* Phone */}
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
          placeholder="(123) 456-7890"
        />
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
          placeholder="How can we help you?"
        />
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
