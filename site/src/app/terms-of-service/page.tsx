import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Review the terms and conditions governing use of our website.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-[#1a2332] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#c9a96e] to-[#e2c891] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="mt-4 text-gray-400">
            Last updated: March 6, 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-section space-y-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to the {siteConfig.name} website. By accessing or using
              this website, you agree to be bound by these Terms of Service. If
              you do not agree with any part of these terms, please do not use
              this website.
            </p>

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">
                Acceptance of Terms
              </h2>
              <p className="mt-4 text-gray-700">
                By accessing and using this website, you acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Service and our Privacy Policy. We reserve the right to modify
                these terms at any time, and changes will be effective
                immediately upon posting to this website. Your continued use of
                the website after any such changes constitutes your acceptance of
                the updated terms.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">
                Use of Website
              </h2>
              <p className="mt-4 text-gray-700">
                This website is provided for informational and educational
                purposes. You agree to use the website only for lawful purposes
                and in a manner that does not infringe upon the rights of others.
                You may not:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  <span className="text-gray-700">
                    Use the website in any way that could disable, overburden, or
                    impair its functionality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  <span className="text-gray-700">
                    Attempt to gain unauthorized access to any portion of the
                    website or its related systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  <span className="text-gray-700">
                    Use any automated means to access the website or collect
                    information from it
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  <span className="text-gray-700">
                    Reproduce, distribute, or create derivative works from
                    website content without written permission
                  </span>
                </li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">
                Medical Disclaimer
              </h2>
              <div className="mt-4 rounded-xl border border-[#c9a96e]/30 bg-[#c9a96e]/5 p-6">
                <p className="text-gray-700">
                  The content on this website is provided for general
                  informational purposes only and does not constitute medical
                  advice, diagnosis, or treatment. The information presented
                  should not be considered a substitute for professional medical
                  advice from a qualified healthcare provider.
                </p>
                <p className="mt-4 text-gray-700">
                  Always seek the advice of your physician or other qualified
                  healthcare provider with any questions you may have regarding a
                  medical condition. Never disregard professional medical advice
                  or delay seeking it because of something you have read on this
                  website.
                </p>
                <p className="mt-4 text-gray-700">
                  Individual results from surgical and non-surgical procedures
                  may vary. Before and after photographs on this website
                  represent individual outcomes and do not guarantee similar
                  results for all patients. All surgical procedures carry
                  inherent risks, and a thorough consultation is necessary to
                  determine if a procedure is appropriate for your specific
                  situation.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">
                Intellectual Property
              </h2>
              <p className="mt-4 text-gray-700">
                All content on this website, including text, graphics,
                photographs, logos, icons, images, and software, is the property
                of {siteConfig.name} or its content suppliers and is protected by
                United States and international copyright, trademark, and other
                intellectual property laws.
              </p>
              <p className="mt-4 text-gray-700">
                You may not reproduce, modify, distribute, display, or transmit
                any content from this website without our prior written
                permission. Limited personal, non-commercial use is permitted,
                provided you maintain all copyright and proprietary notices.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">
                Limitation of Liability
              </h2>
              <p className="mt-4 text-gray-700">
                To the fullest extent permitted by applicable law,{" "}
                {siteConfig.name}, its surgeons, employees, and affiliates shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of or
                inability to use this website.
              </p>
              <p className="mt-4 text-gray-700">
                We make no representations or warranties of any kind, express or
                implied, regarding the accuracy, completeness, reliability, or
                availability of the website or the information contained on it.
                Your use of this website is at your sole risk.
              </p>
              <p className="mt-4 text-gray-700">
                This website may contain links to third-party websites or
                services that are not owned or controlled by{" "}
                {siteConfig.name}. We have no control over and assume no
                responsibility for the content, privacy policies, or practices
                of any third-party websites or services.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2332]">Contact</h2>
              <p className="mt-4 text-gray-700">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-[#1a2332]">
                  {siteConfig.name}
                </p>
                <p className="mt-2 text-gray-700">
                  {siteConfig.locations.ny.address}
                </p>
                <p className="text-gray-700">
                  Phone: {siteConfig.locations.ny.phone}
                </p>
                <p className="text-gray-700">
                  Email: {siteConfig.locations.ny.email}
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-[#1a2332]">
                  {siteConfig.name}
                </p>
                <p className="mt-2 text-gray-700">
                  {siteConfig.locations.nj.address}
                </p>
                <p className="text-gray-700">
                  Phone: {siteConfig.locations.nj.phone}
                </p>
                <p className="text-gray-700">
                  Email: {siteConfig.locations.nj.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
