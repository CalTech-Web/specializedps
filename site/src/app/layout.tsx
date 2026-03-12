import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { AppointmentModalProvider } from "@/components/sections/AppointmentModal";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  title: {
    default:
      "Specialized Plastic Surgery | Board-Certified Plastic Surgeons in NJ & NY",
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
    title:
      "Specialized Plastic Surgery | Board-Certified Plastic Surgeons in NJ & NY",
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
      <head>
        <link rel="preconnect" href="https://specializedplasticsurgery.com" />
      </head>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <AppointmentModalProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AppointmentModalProvider>
      </body>
    </html>
  );
}
