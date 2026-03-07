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

const inputClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[80px] px-[25px] text-base text-heading placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary/30";

const selectClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[80px] px-[25px] text-base text-heading focus:outline-none focus:ring-2 focus:ring-primary/30";

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
      <div className="bg-peach-light p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-heading">Thank You!</h3>
        <p className="mt-2 text-body">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:text-heading"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-peach-light p-8 sm:p-10">
      {/* Location */}
      <div>
        <label htmlFor="contact-location" className="block text-sm font-medium text-heading mb-2">
          Location <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-location"
          value={formData.location}
          onChange={(e) => handleLocationChange(e.target.value)}
          className={`${selectClasses} ${
            errors.location ? "ring-2 ring-red-400" : ""
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
          <label htmlFor="contact-doctor" className="block text-sm font-medium text-heading mb-2">
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
        <label htmlFor="contact-name" className="block text-sm font-medium text-heading mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`${inputClasses} ${
            errors.name ? "ring-2 ring-red-400" : ""
          }`}
          placeholder="Full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-heading mb-2">
          Your Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`${inputClasses} ${
            errors.phone ? "ring-2 ring-red-400" : ""
          }`}
          placeholder="(123) 456-7890"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-heading mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`${inputClasses} ${
            errors.email ? "ring-2 ring-red-400" : ""
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-heading mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] px-[25px] py-5 text-base text-heading placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.message ? "ring-2 ring-red-400" : ""
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again or call our office directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary border-2 border-primary px-6 py-6 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request an Appointment"}
      </button>
    </form>
  );
}
