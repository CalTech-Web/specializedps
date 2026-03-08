"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileSubItem, setActiveMobileSubItem] = useState<string | null>(
    null
  );
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileItem = (label: string) => {
    setActiveMobileItem(activeMobileItem === label ? null : label);
    setActiveMobileSubItem(null);
  };

  const toggleMobileSubItem = (label: string) => {
    setActiveMobileSubItem(activeMobileSubItem === label ? null : label);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMobileItem(null);
    setActiveMobileSubItem(null);
  };

  const { nj, ny } = siteConfig.locations;

  return (
    <>
      {/* ============ Row 1: Announcement Bar ============ */}
      <div className="bg-heading py-2 text-center">
        <p className="text-[13px] tracking-wide text-white/90">
          We&apos;re Ready to Help You. Connect with us Today.
        </p>
      </div>

      {/* ============ Row 2: Logo Bar (Navy) ============ */}
      <div className="bg-heading">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
          {/* Left: Phone Numbers stacked */}
          <div className="hidden flex-col gap-1 lg:flex">
            <Link
              href={`tel:${ny.phoneRaw}`}
              className="flex items-center gap-2 text-[13px] text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">{ny.phone} NY</span>
            </Link>
            <Link
              href={`tel:${nj.phoneRaw}`}
              className="flex items-center gap-2 text-[13px] text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">{nj.phone} NJ</span>
            </Link>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Image
              src="/images/logos/white-logo.webp"
              alt="Specialized Plastic Surgery"
              width={260}
              height={65}
              className="h-12 w-auto lg:h-[60px]"
              priority
            />
          </Link>

          {/* Right: CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-block border border-white/60 px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:border-white hover:bg-white hover:text-heading"
            >
              Request an Appointment
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* ============ Row 3: Navigation Bar (Navy, slightly lighter border top) ============ */}
      <nav
        className={`hidden w-full border-t border-white/10 bg-heading lg:block ${
          scrolled ? "sticky top-0 z-50 shadow-lg animate-slide-down" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-center px-4">
          {navigation.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              );
            }

            // Services mega menu
            if (item.label === "Services") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="inline-flex items-center gap-1 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-[750px] -translate-x-1/2 pt-0 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="rounded-b-md bg-white p-6 shadow-xl">
                      <div className="grid grid-cols-4 gap-6">
                        {item.children!.map((category) => (
                          <div key={category.label}>
                            <Link
                              href={category.href || "#"}
                              className="mb-3 block text-[13px] font-bold uppercase tracking-wide text-heading transition-colors hover:text-primary"
                            >
                              {category.label}
                            </Link>
                            <ul className="space-y-1.5">
                              {category.children?.map((procedure) => (
                                <li key={procedure.label}>
                                  <Link
                                    href={procedure.href!}
                                    className="group flex items-center gap-1 text-[13px] text-body transition-all hover:text-primary"
                                  >
                                    <ChevronRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary" />
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                      {procedure.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Simple dropdown items
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                ) : (
                  <button
                    className="inline-flex items-center gap-1 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-gold"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                <div
                  className={`absolute left-0 top-full z-50 pt-0 transition-all duration-200 ${
                    activeDropdown === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="w-[220px] rounded-b-md bg-white py-2 shadow-xl">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        className="group flex items-center gap-1 px-4 py-2.5 text-[13px] text-body transition-all hover:text-primary"
                      >
                        <ChevronRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary" />
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* ============ Mobile Offcanvas Overlay ============ */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMobile}
      />

      {/* ============ Mobile Offcanvas Panel ============ */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-[calc(100%-50px)] max-w-[450px] flex-col bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <Link href="/" onClick={closeMobile}>
            <Image
              src="/images/logos/black-logo.webp"
              alt="Specialized Plastic Surgery"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-heading" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pb-8 pt-4">
          <div className="mb-4 space-y-2 border-b border-gray-100 pb-4">
            <Link href={`tel:${ny.phoneRaw}`} className="flex items-center gap-2 text-sm text-body">
              <Phone className="h-4 w-4 text-primary" />
              <span>{ny.phone} NY</span>
            </Link>
            <Link href={`tel:${nj.phoneRaw}`} className="flex items-center gap-2 text-sm text-body">
              <Phone className="h-4 w-4 text-primary" />
              <span>{nj.phone} NJ</span>
            </Link>
          </div>

          <ul className="space-y-0">
            {navigation.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label} className="border-b border-gray-100">
                    <Link
                      href={item.href!}
                      onClick={closeMobile}
                      className="block py-3.5 font-sans text-[15px] font-medium text-heading transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = activeMobileItem === item.label;

              return (
                <li key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleMobileItem(item.label)}
                    className="flex w-full items-center justify-between py-3.5 font-sans text-[15px] font-medium text-heading transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[1000px] pb-3" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-0 pl-3">
                      {item.children!.map((child) => {
                        if (child.children && child.children.length > 0) {
                          const isSubOpen = activeMobileSubItem === child.label;
                          return (
                            <li key={child.label}>
                              <button
                                onClick={() => toggleMobileSubItem(child.label)}
                                className="flex w-full items-center justify-between py-2.5 font-sans text-[14px] font-semibold text-heading transition-colors hover:text-primary"
                              >
                                {child.label}
                                <ChevronDown
                                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                    isSubOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isSubOpen ? "max-h-[500px] pb-2" : "max-h-0"
                                }`}
                              >
                                <ul className="space-y-0 pl-3">
                                  {child.children.map((procedure) => (
                                    <li key={procedure.label}>
                                      <Link
                                        href={procedure.href!}
                                        onClick={closeMobile}
                                        className="block py-2 font-sans text-[13px] text-body transition-colors hover:text-primary"
                                      >
                                        {procedure.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          );
                        }

                        return (
                          <li key={child.label}>
                            <Link
                              href={child.href!}
                              onClick={closeMobile}
                              className="block py-2.5 font-sans text-[13px] text-body transition-colors hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-gray-100 px-6 py-5">
          <Link
            href="/contact"
            onClick={closeMobile}
            className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 font-sans text-[15px] font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Request an Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
