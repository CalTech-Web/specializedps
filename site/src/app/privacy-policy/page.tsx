import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1f385f] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#4054b2] to-[#fb8e28] bg-clip-text text-transparent">
              Privacy Policy
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
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">
                Information Collection
              </h2>
              <p className="mt-4 text-gray-700">
                We may collect personal information that you voluntarily provide
                when you:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Fill out a contact form or consultation request
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Schedule an appointment by phone, email, or online
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Subscribe to our newsletter or promotional communications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Interact with our website, including through cookies and
                    analytics tools
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                This information may include your name, email address, phone
                number, mailing address, and any other details you choose to
                provide. We do not collect protected health information (PHI)
                through this website. All medical records and patient health
                information are managed in compliance with HIPAA.
              </p>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">
                How We Use Information
              </h2>
              <p className="mt-4 text-gray-700">
                We use the information we collect to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Respond to your inquiries and schedule consultations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Provide information about our services and procedures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Send appointment reminders and follow-up communications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Improve our website and services based on usage patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Comply with legal obligations and regulatory requirements
                  </span>
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">
                Information Sharing
              </h2>
              <p className="mt-4 text-gray-700">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    With trusted service providers who assist in operating our
                    website and conducting our business, provided they agree to
                    keep your information confidential
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    When required by law, regulation, or legal process
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    To protect the rights, property, or safety of our practice,
                    patients, or others
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">
                Data Security
              </h2>
              <p className="mt-4 text-gray-700">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include
                encrypted data transmission (SSL/TLS), secure server
                infrastructure, regular security assessments, and restricted
                access to personal information on a need-to-know basis.
              </p>
              <p className="mt-4 text-gray-700">
                While we strive to protect your personal information, no method
                of transmission over the Internet or electronic storage is
                completely secure. We cannot guarantee absolute security of your
                data.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">
                Your Rights
              </h2>
              <p className="mt-4 text-gray-700">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Access the personal information we hold about you
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Request correction of inaccurate or incomplete data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Request deletion of your personal information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Opt out of marketing communications at any time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                  <span className="text-gray-700">
                    Request a copy of your personal data in a portable format
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#32373c]">Contact</h2>
              <p className="mt-4 text-gray-700">
                If you have questions or concerns about this Privacy Policy or
                how we handle your personal information, please contact us:
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-[#32373c]">
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
                <p className="font-semibold text-[#32373c]">
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
