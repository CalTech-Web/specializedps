import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Specialized Plastic Surgery | Board-Certified Plastic Surgeons in NJ & NY",
    template: "%s | Specialized Plastic Surgery",
  },
  description:
    "Board-certified plastic surgeons in New Jersey and Westchester, NY, specializing in breast reconstruction, aesthetic surgery, and body contouring with advanced microsurgical techniques.",
  keywords: [
    "plastic surgery",
    "breast reconstruction",
    "breast augmentation",
    "liposuction",
    "tummy tuck",
    "facelift",
    "NJ plastic surgeon",
    "Westchester plastic surgeon",
    "DIEP flap",
    "mommy makeover",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://specializedplasticsurgery.com",
    siteName: "Specialized Plastic Surgery",
    title: "Specialized Plastic Surgery | Board-Certified Plastic Surgeons in NJ & NY",
    description:
      "Board-certified plastic surgeons specializing in breast reconstruction, aesthetic surgery, and body contouring.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
