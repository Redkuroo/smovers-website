import Link from "next/link";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Privacy Policy",
  description: "How SMOvers handles your information: collection, use, sharing, and rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | SMOvers",
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy | SMOvers",
  },
});

export default function PrivacyPolicyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "smoverslogistics@gmail.com";
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-white">
  <section className="site-container py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-2">
        Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: {lastUpdated}</p>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <p>
              We respect your privacy. This Privacy Policy explains how we handle
              your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Information you provide via our contact form (name, email, phone,
                message).
              </li>
              <li>Information submitted through our meeting booking form.</li>
              <li>
                Non-personal data such as browser type, pages visited (via
                cookies/analytics if enabled).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To schedule and confirm meetings.</li>
              <li>To improve our services and website content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Sharing of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not sell, rent, or trade your personal information.</li>
              <li>Your details are only shared internally with our team to serve your request.</li>
              <li>
                We may use third-party services (e.g., email provider, analytics
                tools) that follow strict confidentiality.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Data Security</h2>
            <p>
              We take reasonable steps to protect your information, but no online
              method is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You may request access, correction, or deletion of your personal
                data by contacting us.
              </li>
              <li>You may opt out of marketing communications at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Contact</h2>
            <p>
              📩 For privacy concerns, contact us at <span className="font-medium">{contactEmail}</span> or use our
              <Link href="/#contact" className="text-blue-700 underline ml-1">Contact</Link> section.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
