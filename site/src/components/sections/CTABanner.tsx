import Link from "next/link";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to Take the Next Step?",
  subtext = "Schedule your personalized consultation with one of our board-certified plastic surgeons today.",
}: CTABannerProps) {
  return (
    <section className="bg-[#1a2332] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg">
            Schedule Consultation
          </Button>
          <Link
            href="tel:9735610900"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-3.5 text-lg font-medium text-white transition-colors duration-200 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            (973) 561-0900
          </Link>
        </div>
      </div>
    </section>
  );
}
