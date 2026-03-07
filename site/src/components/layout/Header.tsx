"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigation, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileSubItem, setActiveMobileSubItem] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  return (
    <>
      {/* ============ ROW 1: Top Bar ============ */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/black-logo.webp"
              alt="Specialized Plastic Surgery"
              width={240}
              height={60}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Right cluster: Phone numbers + CTA button */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* NY Phone */}
            <Link
              href={`tel:${siteConfig.locations.ny.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.locations.ny.phone} NY
            </Link>

            {/* NJ Phone */}
            <Link
              href={`tel:${siteConfig.locations.nj.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.locations.nj.phone} NJ
            </Link>

            {/* Request an Appointment button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#32373c] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1f385f]"
            >
              Request an Appointment
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[#32373c] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* ============ ROW 2: Navigation Bar (Sticky) ============ */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="mx-auto hidden max-w-7xl items-center justify-center px-4 lg:flex sm:px-6 lg:px-8">
          {navigation.map((item) => {
            // Direct link items (Home, Gallery, Blog, Contact Us)
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-4 py-4 text-sm font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
                >
                  {item.label}
                </Link>
              );
            }

            // Services gets a mega menu
            if (item.label === "Services") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="inline-flex items-center gap-1 px-4 py-4 text-sm font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute left-1/2 top-full z-50 w-[750px] -translate-x-1/2 pt-0">
                      <div className="border border-gray-100 bg-white p-6 shadow-lg">
                        <div className="grid grid-cols-4 gap-6">
                          {item.children!.map((category) => (
                            <div key={category.label}>
                              <Link
                                href={category.href || "#"}
                                className="mb-3 block text-sm font-bold uppercase tracking-wide text-[#32373c] hover:text-[#1f385f]"
                              >
                                {category.label}
                              </Link>
                              <ul className="space-y-1.5">
                                {category.children?.map((procedure) => (
                                  <li key={procedure.label}>
                                    <Link
                                      href={procedure.href!}
                                      className="block text-sm text-gray-500 transition-colors hover:text-[#1f385f]"
                                    >
                                      {procedure.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Simple dropdown items (Doctors, Locations, About Us)
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="inline-flex items-center gap-1 px-4 py-4 text-sm font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 pt-0">
                    <div className="min-w-[200px] border border-gray-100 bg-white py-2 shadow-lg">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href!}
                          className="block px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#1f385f]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </header>

      {/* ============ Mobile Menu Overlay ============ */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-[60] bg-white lg:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-6">
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
              className="inline-flex items-center justify-center rounded-md p-2 text-[#32373c]"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="h-[calc(100vh-65px)] overflow-y-auto px-4 pb-8 pt-4 sm:px-6">
            <ul className="space-y-1">
              {navigation.map((item) => {
                // Direct links
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        onClick={closeMobile}
                        className="block border-b border-gray-100 px-2 py-3 text-base font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // Items with children
                const isOpen = activeMobileItem === item.label;

                return (
                  <li key={item.label}>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="flex w-full items-center justify-between border-b border-gray-100 px-2 py-3 text-base font-medium text-[#32373c] transition-colors hover:text-[#1f385f]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <ul className="border-b border-gray-100 bg-gray-50 py-2">
                        {item.children!.map((child) => {
                          // If this child has sub-children (service categories)
                          if (child.children && child.children.length > 0) {
                            const isSubOpen =
                              activeMobileSubItem === child.label;
                            return (
                              <li key={child.label}>
                                <button
                                  onClick={() =>
                                    toggleMobileSubItem(child.label)
                                  }
                                  className="flex w-full items-center justify-between px-6 py-2.5 text-sm font-semibold text-[#32373c] transition-colors hover:text-[#1f385f]"
                                >
                                  {child.label}
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      isSubOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                {isSubOpen && (
                                  <ul className="bg-gray-100 py-1">
                                    {child.children.map((procedure) => (
                                      <li key={procedure.label}>
                                        <Link
                                          href={procedure.href!}
                                          onClick={closeMobile}
                                          className="block px-10 py-2 text-sm text-gray-500 transition-colors hover:text-[#1f385f]"
                                        >
                                          {procedure.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          }

                          // Simple child link
                          return (
                            <li key={child.label}>
                              <Link
                                href={child.href!}
                                onClick={closeMobile}
                                className="block px-6 py-2.5 text-sm text-gray-500 transition-colors hover:text-[#1f385f]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA section */}
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
              {/* Phone numbers */}
              <Link
                href={`tel:${siteConfig.locations.ny.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#32373c] px-6 py-3 text-sm font-medium text-[#32373c] transition-colors hover:bg-[#32373c] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.locations.ny.phone} NY
              </Link>
              <Link
                href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#32373c] px-6 py-3 text-sm font-medium text-[#32373c] transition-colors hover:bg-[#32373c] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.locations.nj.phone} NJ
              </Link>

              {/* Appointment button */}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex w-full items-center justify-center rounded-full bg-[#32373c] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f385f]"
              >
                Request an Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
