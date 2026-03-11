"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  RotateCcw,
  Type,
  Eye,
  Link2,
  BookOpen,
  ALargeSmall,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "a11y-preferences";

interface A11yPreferences {
  fontSize: number;
  highContrast: boolean;
  readingMode: boolean;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
}

const DEFAULT_PREFS: A11yPreferences = {
  fontSize: 0,
  highContrast: false,
  readingMode: false,
  dyslexiaFont: false,
  highlightLinks: false,
};

const FS_CLASSES = [
  "a11y-fs--2",
  "a11y-fs--1",
  "a11y-fs-1",
  "a11y-fs-2",
  "a11y-fs-3",
  "a11y-fs-4",
];

function applyClasses(p: A11yPreferences) {
  const el = document.documentElement;

  // Font size
  FS_CLASSES.forEach((c) => el.classList.remove(c));
  if (p.fontSize !== 0) el.classList.add(`a11y-fs-${p.fontSize}`);

  // Toggles
  el.classList.toggle("a11y-high-contrast", p.highContrast);
  el.classList.toggle("a11y-reading-mode", p.readingMode);
  el.classList.toggle("a11y-dyslexia-font", p.dyslexiaFont);
  el.classList.toggle("a11y-highlight-links", p.highlightLinks);
}

export default function AccessibilityWidget() {
  const [prefs, setPrefs] = useState<A11yPreferences>(DEFAULT_PREFS);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Load preferences on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as A11yPreferences;
        setPrefs(parsed);
        applyClasses(parsed);
      }
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  // Apply classes and persist on change
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    applyClasses(prefs);
  }, [prefs, mounted]);

  // Close on Escape and click-outside
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const updatePref = useCallback(
    <K extends keyof A11yPreferences>(key: K, value: A11yPreferences[K]) => {
      setPrefs((p) => ({ ...p, [key]: value }));
    },
    []
  );

  const reset = useCallback(() => setPrefs(DEFAULT_PREFS), []);

  const hasActivePrefs =
    prefs.fontSize !== 0 ||
    prefs.highContrast ||
    prefs.readingMode ||
    prefs.dyslexiaFont ||
    prefs.highlightLinks;

  if (!mounted) return null;

  return (
    <div className="a11y-widget">
      {/* Floating trigger button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="Accessibility Options"
        aria-expanded={open}
        className={cn(
          "fixed right-6 top-[160px] z-[45] flex h-11 w-11 items-center justify-center lg:right-4 lg:h-12 lg:w-12",
          "rounded-full shadow-lg",
          "transition-all duration-300 hover:scale-110",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          hasActivePrefs
            ? "bg-primary text-white"
            : "bg-heading text-white hover:bg-primary hover:text-white"
        )}
      >
        <Accessibility className="h-6 w-6" />
        {hasActivePrefs && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility Settings"
          className={cn(
            "fixed right-6 top-[220px] z-[45] w-[300px] animate-fade-in lg:right-4",
            "rounded-xl bg-white shadow-2xl ring-1 ring-black/10",
            "max-h-[calc(100vh-100px)] overflow-y-auto"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <Accessibility className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                Accessibility
              </h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="flex h-7 w-7 items-center justify-center rounded-full text-body transition-colors hover:bg-warm-grey hover:text-heading"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Controls */}
          <div className="space-y-1 p-3">
            {/* Font Size */}
            <div className="flex items-center justify-between rounded-lg px-3 py-3">
              <div className="flex items-center gap-3">
                <Type className="h-5 w-5 text-body" />
                <span className="text-sm font-medium text-heading">
                  Font Size
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    updatePref("fontSize", Math.max(-2, prefs.fontSize - 1))
                  }
                  disabled={prefs.fontSize <= -2}
                  aria-label="Decrease font size"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-body transition-colors hover:bg-warm-grey disabled:opacity-30"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-7 text-center text-xs font-bold text-heading">
                  {prefs.fontSize > 0 ? `+${prefs.fontSize}` : prefs.fontSize}
                </span>
                <button
                  onClick={() =>
                    updatePref("fontSize", Math.min(4, prefs.fontSize + 1))
                  }
                  disabled={prefs.fontSize >= 4}
                  aria-label="Increase font size"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-body transition-colors hover:bg-warm-grey disabled:opacity-30"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-3 h-px bg-gray-100" />

            {/* Reading Mode */}
            <ToggleRow
              icon={BookOpen}
              label="Reading Mode"
              description="Simplified layout for easier reading"
              active={prefs.readingMode}
              onToggle={() => updatePref("readingMode", !prefs.readingMode)}
            />

            {/* High Contrast */}
            <ToggleRow
              icon={Eye}
              label="High Contrast"
              description="Increased text and color contrast"
              active={prefs.highContrast}
              onToggle={() => updatePref("highContrast", !prefs.highContrast)}
            />

            {/* Dyslexia Font */}
            <ToggleRow
              icon={ALargeSmall}
              label="Dyslexia Friendly"
              description="OpenDyslexic font with extra spacing"
              active={prefs.dyslexiaFont}
              onToggle={() => updatePref("dyslexiaFont", !prefs.dyslexiaFont)}
            />

            {/* Highlight Links */}
            <ToggleRow
              icon={Link2}
              label="Highlight Links"
              description="Underline and color all links"
              active={prefs.highlightLinks}
              onToggle={() =>
                updatePref("highlightLinks", !prefs.highlightLinks)
              }
            />
          </div>

          {/* Reset */}
          <div className="border-t border-gray-100 px-3 py-3">
            <button
              onClick={reset}
              disabled={!hasActivePrefs}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-warm-grey px-4 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-gray-200 disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" />
              Reset All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Toggle Row                                                         */
/* ------------------------------------------------------------------ */
function ToggleRow({
  icon: Icon,
  label,
  description,
  active,
  onToggle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={active}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left",
        "transition-colors hover:bg-warm-grey",
        active && "bg-primary/10"
      )}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
          active
            ? "bg-primary text-white"
            : "bg-warm-grey text-body"
        )}
      >
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            "block text-sm font-medium",
            active ? "text-primary" : "text-heading"
          )}
        >
          {label}
        </span>
        <span className="block text-xs text-body/70">{description}</span>
      </div>
      {/* Toggle indicator */}
      <div
        className={cn(
          "flex h-6 w-10 shrink-0 items-center rounded-full px-0.5 transition-colors",
          active ? "bg-primary" : "bg-gray-200"
        )}
      >
        <div
          className={cn(
            "h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
            active && "translate-x-4"
          )}
        />
      </div>
    </button>
  );
}
