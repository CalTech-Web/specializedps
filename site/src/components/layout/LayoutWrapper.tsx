"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";
import CherryWidget from "@/components/ui/CherryWidget";

const AccessibilityWidget = dynamic(
  () => import("@/components/ui/AccessibilityWidget"),
  { ssr: false }
);

const STANDALONE_ROUTES = [
  "/breast-reduction-covered-by-insurance-in-westchester",
  "/breast-reduction-covered-by-insurance-in-new-jersey",
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
