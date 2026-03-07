"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type FormEvent,
} from "react";
import { X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Context so any button in the tree can open the modal               */
/* ------------------------------------------------------------------ */
interface AppointmentModalContextValue {
  open: () => void;
  close: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextValue>({
  open: () => {},
  close: () => {},
});

export function useAppointmentModal() {
  return useContext(AppointmentModalContext);
}

/* ------------------------------------------------------------------ */
/*  Provider + Modal                                                   */
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

export function AppointmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AppointmentModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <AppointmentModalOverlay onClose={close} />}
    </AppointmentModalContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal overlay + form                                               */
/* ------------------------------------------------------------------ */
function AppointmentModalOverlay({ onClose }: { onClose: () => void }) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#32373c]"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold text-[#32373c]">
          Request an Appointment
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Fill out the form below and our team will reach out to confirm your appointment.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6 text-center">
            <h3 className="text-lg font-bold text-[#32373c]">Thank You!</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your request has been received. We will contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-full bg-[#32373c] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1f385f]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {/* Location */}
            <div>
              <label htmlFor="modal-location" className="block text-sm font-medium text-[#32373c]">
                Location
              </label>
              <select
                id="modal-location"
                value={formData.location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#32373c] focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
              >
                <option value="">Select a location</option>
                <option value="NJ">Northern New Jersey Office</option>
                <option value="NY">Westchester New York Office</option>
              </select>
            </div>

            {/* Doctor (conditional) */}
            {formData.location && (
              <div>
                <label htmlFor="modal-doctor" className="block text-sm font-medium text-[#32373c]">
                  Doctor
                </label>
                <select
                  id="modal-doctor"
                  value={formData.doctor}
                  onChange={(e) => handleChange("doctor", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#32373c] focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
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
              <label htmlFor="modal-name" className="block text-sm font-medium text-[#32373c]">
                Your Name
              </label>
              <input
                id="modal-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
                placeholder="Full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-[#32373c]">
                Your Phone
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-[#32373c]">
                Email Address
              </label>
              <input
                id="modal-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-[#32373c]">
                Message
              </label>
              <textarea
                id="modal-message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#32373c] placeholder:text-gray-400 focus:border-[#4054b2] focus:outline-none focus:ring-2 focus:ring-[#4054b2]/30"
                placeholder="How can we help you?"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
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
        )}
      </div>
    </div>
  );
}
