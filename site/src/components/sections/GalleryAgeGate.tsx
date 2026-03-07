"use client";

import { useState, useEffect, useCallback } from "react";
import { ShieldCheck } from "lucide-react";

interface GalleryAgeGateProps {
  children: React.ReactNode;
}

const CURRENT_YEAR = new Date().getFullYear();
const MIN_AGE = 18;
const SESSION_KEY = "gallery_age_verified";

export default function GalleryAgeGate({ children }: GalleryAgeGateProps) {
  const [verified, setVerified] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [birthYear, setBirthYear] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setVerified(true);
    }
  }, []);

  const handleVerify = useCallback(() => {
    const year = parseInt(birthYear, 10);

    if (!birthYear || isNaN(year)) {
      setError("Please enter a valid year.");
      return;
    }

    if (year > CURRENT_YEAR || year < 1900) {
      setError("Please enter a valid birth year.");
      return;
    }

    const age = CURRENT_YEAR - year;

    if (age < MIN_AGE) {
      setError("You must be at least 18 years old to view this content.");
      return;
    }

    setError("");
    setVerified(true);
    sessionStorage.setItem(SESSION_KEY, "true");
  }, [birthYear]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleVerify();
      }
    },
    [handleVerify]
  );

  // Generate year options from current year down to 1920
  const yearOptions: number[] = [];
  for (let y = CURRENT_YEAR; y >= 1920; y--) {
    yearOptions.push(y);
  }

  // Server render and pre-hydration: show blurred with no overlay (prevents flash)
  if (!mounted) {
    return (
      <div className="relative">
        <div className="blur-xl pointer-events-none select-none">{children}</div>
      </div>
    );
  }

  if (verified) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Blurred gallery content */}
      <div className="blur-xl pointer-events-none select-none transition-all duration-700">
        {children}
      </div>

      {/* Full-screen overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
        {/* Modal card */}
        <div className="w-full max-w-md animate-fade-in rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h2 className="text-center font-heading text-2xl font-bold text-heading sm:text-[1.65rem]">
            Age Verification Required
          </h2>

          {/* Description */}
          <p className="mt-3 text-center text-[0.938rem] leading-relaxed text-body">
            Our before and after gallery contains medical images of surgical
            procedures. You must be at least 18 years of age to view this
            content. Please enter your birth year to continue.
          </p>

          {/* Input */}
          <div className="mt-7">
            <label
              htmlFor="birth-year"
              className="mb-1.5 block text-sm font-semibold text-heading"
            >
              Year of Birth
            </label>
            <select
              id="birth-year"
              value={birthYear}
              onChange={(e) => {
                setBirthYear(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              className="w-full rounded-lg border border-peach bg-white px-4 py-3 text-[0.938rem] text-heading shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select your birth year</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Error message */}
          {error && (
            <p className="mt-3 text-center text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Submit button */}
          <button
            onClick={handleVerify}
            className="mt-6 w-full border-2 border-primary bg-primary px-6 py-3.5 text-[0.938rem] font-bold text-white shadow-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 active:scale-[0.98]"
          >
            Verify & View Gallery
          </button>

          {/* Disclaimer */}
          <p className="mt-5 text-center text-xs leading-relaxed text-body/70">
            By proceeding, you confirm that you are 18 years of age or older
            and consent to viewing medical before and after imagery.
          </p>
        </div>
      </div>
    </div>
  );
}
