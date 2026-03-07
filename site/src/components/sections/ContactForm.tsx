"use client";

import { useState, type FormEvent } from "react";

const procedureOptions = [
  { group: "Face", items: ["Facelift", "Neck Lift", "Rhinoplasty", "Blepharoplasty (Eyelid Surgery)", "Otoplasty (Ear Surgery)", "Chin Liposuction"] },
  { group: "Aesthetic Breast", items: ["Breast Augmentation", "Breast Lift", "Breast Reduction", "Breast Implant Removal", "Gynecomastia"] },
  { group: "Breast Reconstruction", items: ["Natural Tissue Flap Reconstruction", "Implant-Based Reconstruction", "Oncoplastic Breast Reduction", "Resensation", "Revision Breast Reconstruction", "Specialized Reconstruction Procedures"] },
  { group: "Body", items: ["Liposuction", "Lipo 360", "Brazilian Butt Lift", "Tummy Tuck", "Mommy Makeover", "Body Lift", "Thigh Lift", "Arm Lift"] },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  procedure: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const SUBMIT_URL = "https://forms.caltechweb.com/api/submit";
const SITE_ID = "specializedplasticsurgery";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    procedure: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        procedure: "",
        message: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-xl font-bold text-[#1a2332]">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#c9a96e] hover:text-[#b8954f]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#1a2332]">
            First Name <span className="text-[#d4a0a0]">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
              errors.firstName ? "border-[#d4a0a0]" : "border-gray-300"
            }`}
            placeholder="First name"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-[#d4a0a0]">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#1a2332]">
            Last Name <span className="text-[#d4a0a0]">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
              errors.lastName ? "border-[#d4a0a0]" : "border-gray-300"
            }`}
            placeholder="Last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-[#d4a0a0]">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email and phone row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a2332]">
            Email <span className="text-[#d4a0a0]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
              errors.email ? "border-[#d4a0a0]" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[#d4a0a0]">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1a2332]">
            Phone <span className="text-[#d4a0a0]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
              errors.phone ? "border-[#d4a0a0]" : "border-gray-300"
            }`}
            placeholder="(123) 456-7890"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-[#d4a0a0]">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Location and procedure row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-[#1a2332]">
            Preferred Location <span className="text-[#d4a0a0]">*</span>
          </label>
          <select
            id="location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
              errors.location ? "border-[#d4a0a0]" : "border-gray-300"
            }`}
          >
            <option value="">Select a location</option>
            <option value="NJ">Millburn, NJ</option>
            <option value="NY">Harrison, NY (Westchester)</option>
          </select>
          {errors.location && (
            <p className="mt-1 text-xs text-[#d4a0a0]">{errors.location}</p>
          )}
        </div>

        <div>
          <label htmlFor="procedure" className="block text-sm font-medium text-[#1a2332]">
            Procedure of Interest
          </label>
          <select
            id="procedure"
            value={formData.procedure}
            onChange={(e) => handleChange("procedure", e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50"
          >
            <option value="">Select a procedure (optional)</option>
            {procedureOptions.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a2332]">
          Message <span className="text-[#d4a0a0]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/50 ${
            errors.message ? "border-[#d4a0a0]" : "border-gray-300"
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[#d4a0a0]">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="rounded-lg border border-[#d4a0a0]/30 bg-[#d4a0a0]/10 p-4 text-sm text-[#1a2332]">
          Something went wrong. Please try again or call our office directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-[#c9a96e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a2332] transition-colors hover:bg-[#b8954f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
