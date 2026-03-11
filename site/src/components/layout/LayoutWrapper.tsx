"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const STANDALONE_ROUTES = [
  "/breast-reduction-covered-by-insurance-in-westchester",
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
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
