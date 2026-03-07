"use client";

import { useState, type FormEvent } from "react";

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

function doctorForLocation(loc: string): string {
  if (loc === "NJ") return "Dr. Michael Sosin";
  if (loc === "NY") return "Dr. Chris Devulapalli";
  return "";
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    location: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

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
    if (!formData.location) newErrors.location = "Please select a location.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site_id: SITE_ID,
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({
        location: "",
        doctor: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
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
    setFormData((prev) => ({
      ...prev,
      location: value,
      doctor: doctorForLocation(value),
    }));
    if (errors.location) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.location;
        return next;
      });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-xl font-bold text-[#32373c]">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#4054b2] hover:text-[#1f385f]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Location */}
      <div>
        <label htmlFor="contact-location" className="block text-sm font-medium text-[#32373c]">
          Location <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-location"
          value={formData.location}
          onChange={(e) => handleLocationChange(e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#32373c] focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30 ${
            errors.location ? "border-red-400" : "border-gray-300"
          }`}
        >
          <option value="">Select a location</option>
          <option value="NJ">Northern New Jersey Office</option>
          <option value="NY">Westchester New York Office</option>
        </select>
        {errors.location && (
          <p className="mt-1 text-xs text-red-500">{errors.location}</p>
        )}
      </div>

      {/* Doctor (conditional) */}
      {formData.location && (
        <div>
          <label htmlFor="contact-doctor" className="block text-sm font-medium text-[#32373c]">
            Doctor
          </label>
          <select
            id="contact-doctor"
            value={formData.doctor}
            onChange={(e) => handleChange("doctor", e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#32373c] focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
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
        <label htmlFor="contact-name" className="block text-sm font-medium text-[#32373c]">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30 ${
            errors.name ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="Full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-[#32373c]">
          Your Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30 ${
            errors.phone ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="(123) 456-7890"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#32373c]">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30 ${
            errors.email ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#32373c]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30 ${
            errors.message ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again or call our office directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#32373c] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request an Appointment"}
      </button>
    </form>
  );
}
