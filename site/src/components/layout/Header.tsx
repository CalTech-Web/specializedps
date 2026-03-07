"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigation, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

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

  // Find the Services nav item for the mega menu
  const servicesItem = navigation.find((item) => item.label === "Services");
  // All other items with dropdowns (not Services)
  const dropdownItems = navigation.filter(
    (item) => item.children && item.label !== "Services"
  );
  // Direct link items (no children)
  const directItems = navigation.filter((item) => !item.children);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logos/black-logo.webp"
            alt="Specialized Plastic Surgery"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            // Direct link items (Gallery, Blog)
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1a2332] transition-colors hover:text-[#c9a96e]"
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
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#1a2332] transition-colors hover:text-[#c9a96e]"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 pt-2">
                      <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-xl">
                        <div className="grid grid-cols-4 gap-6">
                          {item.children!.map((category) => (
                            <div key={category.label}>
                              <Link
                                href={category.href || "#"}
                                className="mb-3 block text-sm font-semibold text-[#c9a96e] hover:text-[#b8954f]"
                              >
                                {category.label}
                              </Link>
                              <ul className="space-y-1.5">
                                {category.children?.map((procedure) => (
                                  <li key={procedure.label}>
                                    <Link
                                      href={procedure.href!}
                                      className="block text-sm text-gray-600 transition-colors hover:text-[#1a2332]"
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

            // Simple dropdown items (Doctors, Locations, About)
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#1a2332] transition-colors hover:text-[#c9a96e]"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="min-w-[200px] rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href!}
                          className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#1a2332]"
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

          {/* CTA Button */}
          <Button href="/contact" variant="primary" size="sm" className="ml-4">
            Schedule Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1a2332] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-white lg:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-6">
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
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1a2332]"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="h-[calc(100vh-73px)] overflow-y-auto px-4 pb-8 pt-4 sm:px-6">
            <ul className="space-y-1">
              {navigation.map((item) => {
                // Direct links
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        onClick={closeMobile}
                        className="block rounded-md px-3 py-3 text-base font-medium text-[#1a2332] transition-colors hover:bg-gray-50"
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
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-[#1a2332] transition-colors hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <ul className="ml-4 space-y-1 border-l-2 border-[#c9a96e]/20 pl-4 pt-1">
                        {item.children!.map((child) => {
                          // If this child has sub-children (service categories)
                          if (child.children && child.children.length > 0) {
                            const isSubOpen = activeMobileSubItem === child.label;
                            return (
                              <li key={child.label}>
                                <button
                                  onClick={() => toggleMobileSubItem(child.label)}
                                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-[#c9a96e] transition-colors hover:bg-gray-50"
                                >
                                  {child.label}
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      isSubOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                {isSubOpen && (
                                  <ul className="ml-3 space-y-0.5 border-l border-gray-200 pl-3 pt-1">
                                    {child.children.map((procedure) => (
                                      <li key={procedure.label}>
                                        <Link
                                          href={procedure.href!}
                                          onClick={closeMobile}
                                          className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:text-[#1a2332]"
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
                                className="block rounded-md px-3 py-2.5 text-sm text-gray-600 transition-colors hover:text-[#1a2332]"
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

            {/* Mobile CTA */}
            <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Schedule Consultation
              </Button>
              <Link
                href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#1a2332] px-6 py-3.5 text-base font-medium text-[#1a2332] transition-colors hover:bg-[#1a2332] hover:text-white"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.locations.nj.phone}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
