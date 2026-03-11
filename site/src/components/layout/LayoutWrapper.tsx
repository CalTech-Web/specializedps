"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";
import CherryWidget from "@/components/ui/CherryWidget";

const STANDALONE_ROUTES = [
  "/breast-reduction-covered-by-insurance-in-westchester",
  "/exclusive-breast-augmentation-pricing",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isStandalone) {
    return (
      <>
        {children}
        <AccessibilityWidget />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <CherryWidget />
      <Footer />
      <AccessibilityWidget />
    </>
  );
}
