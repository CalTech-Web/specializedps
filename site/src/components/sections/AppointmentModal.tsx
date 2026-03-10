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
export interface DoctorPreset {
  doctor: string;
  location: string;
  recipientEmail: string;
}

interface AppointmentModalContextValue {
  open: (preset?: DoctorPreset) => void;
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

const modalInputClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[56px] px-[20px] text-sm text-heading placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary/30";

const modalSelectClasses =
  "block w-full bg-white border-0 shadow-[0px_10px_45px_rgba(0,0,0,0.04)] h-[56px] px-[20px] text-sm text-heading focus:outline-none focus:ring-2 focus:ring-primary/30";

export function AppointmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<DoctorPreset | undefined>();

  const open = useCallback((p?: DoctorPreset) => {
    setPreset(p);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    setPreset(undefined);
  }, []);

  return (
    <AppointmentModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <AppointmentModalOverlay onClose={close} preset={preset} />}
    </AppointmentModalContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal overlay + form                                               */
/* ------------------------------------------------------------------ */
function AppointmentModalOverlay({ onClose, preset }: { onClose: () => void; preset?: DoctorPreset }) {
  const [formData, setFormData] = useState<FormData>({
    location: preset?.location ?? "",
    doctor: preset?.doctor ?? "",
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
      const payload: Record<string, string> = { site_id: SITE_ID, ...formData };
      if (preset?.recipientEmail) {
        payload.recipientEmail = preset.recipientEmail;
      }
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
        className="relative w-full max-w-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-body transition-colors hover:bg-peach hover:text-heading"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-heading text-2xl font-bold text-heading">
          {preset ? `Book with ${preset.doctor}` : "Request an Appointment"}
        </h2>
        <p className="mt-1 text-sm text-body">
          Fill out the form below and our team will reach out to confirm your appointment.
        </p>

        {status === "success" ? (
          <div className="mt-6 bg-peach-light p-6 text-center">
            <h3 className="font-heading text-lg font-bold text-heading">Thank You!</h3>
            <p className="mt-2 text-sm text-body">
              Your request has been received. We will contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 border-2 border-primary bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {/* Location & Doctor — hidden when preset */}
            {!preset && (
              <>
                <div>
                  <label htmlFor="modal-location" className="block text-sm font-medium text-heading mb-1.5">
                    Location
                  </label>
                  <select
                    id="modal-location"
                    value={formData.location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className={modalSelectClasses}
                  >
                    <option value="">Select a location</option>
                    <option value="NJ">Northern New Jersey Office</option>
                    <option value="NY">Westchester New York Office</option>
                  </select>
                </div>

                {formData.location && (
                  <div>
                    <label htmlFor="modal-doctor" className="block text-sm font-medium text-heading mb-1.5">
                      Doctor
                    </label>
                    <select
                      id="modal-doctor"
                      value={formData.doctor}
                      onChange={(e) => handleChange("doctor", e.target.value)}
                      className={modalSelectClasses}
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
              </>
            )}

            {/* Name */}
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-heading mb-1.5">
                Your Name
              </label>
              <input
                id="modal-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={modalInputClasses}
                placeholder="Full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-heading mb-1.5">
                Your Phone
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={modalInputClasses}
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-heading mb-1.5">
                Email Address
              </label>
              <input
                id="modal-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={modalInputClasses}
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-heading mb-1.5">
                Message
              </label>
              <textarea
                id="modal-message"
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
        )}
      </div>
    </div>
  );
}
