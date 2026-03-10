"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

interface GalleryAgeGateProps {
  children: React.ReactNode;
}

const SESSION_KEY = "gallery_age_verified";

export default function GalleryAgeGate({ children }: GalleryAgeGateProps) {
  const [verified, setVerified] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setVerified(true);
    }
  }, []);

  function handleYes() {
    setVerified(true);
    sessionStorage.setItem(SESSION_KEY, "true");
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
            Content Advisory
          </h2>

          {/* Description */}
          <p className="mt-3 text-center text-[0.938rem] leading-relaxed text-body">
            Our before and after gallery contains medical images of surgical
            procedures. This content is intended for viewers 18 years of age or
            older. Are you at least 18 years old?
          </p>

          {/* Yes / No buttons */}
          <div className="mt-7 flex gap-3">
            <button
              onClick={handleYes}
              className="flex-1 border-2 border-primary bg-primary px-6 py-3.5 text-[0.938rem] font-bold text-white shadow-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 active:scale-[0.98]"
            >
              Yes, I&apos;m 18+
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border-2 border-gray-200 bg-white px-6 py-3.5 text-[0.938rem] font-bold text-heading shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200/40 focus:ring-offset-2 active:scale-[0.98]"
            >
              No, Go Back
            </button>
          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-center text-xs leading-relaxed text-body/70">
            By clicking &ldquo;Yes&rdquo;, you confirm that you are 18 years of
            age or older and consent to viewing medical before and after imagery.
          </p>
        </div>
      </div>
    </div>
  );
}
