export const metadata = {
  title: "Privacy Policy | SMOvers",
  description:
    "Learn how SMOvers collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Overview</h2>
            <p>
              This Privacy Policy explains how SMOvers Logistics Services ("SMOvers",
              "we", "our", or "us") collects, uses, and safeguards information when
              you visit our website or interact with our services. By using our
              website, you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details you provide (for example, name, email, phone)
                when you reach out via our contact form or other channels.
              </li>
              <li>
                Usage data such as pages viewed, links clicked, approximate
                location, and device/browser details collected via cookies or
                similar technologies to help improve our website.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide customer support.</li>
              <li>To operate, maintain, and improve our website and services.</li>
              <li>To analyze site performance and understand user engagement.</li>
              <li>To communicate important updates or service-related notices.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Cookies and Analytics</h2>
            <p>
              We may use cookies and similar technologies to enhance your
              experience and collect aggregated analytics. You can control cookies
              through your browser settings. Some features of the website may not
              function properly if cookies are disabled.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information
              with trusted service providers who assist us in operating our
              website or delivering services, under obligations of confidentiality
              and only for the purposes described in this Policy, or where
              required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this Policy and to comply with
              legal, accounting, or reporting requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Your Choices and Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct,
              or delete your personal information, or to object to or restrict
              certain processing. To exercise these rights, please contact us
              using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect personal information. However, no method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Children’s Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13, and we
              do not knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us so we can take appropriate steps.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">International Transfers</h2>
            <p>
              Your information may be processed in countries other than your own.
              Where we transfer information internationally, we take appropriate
              measures to protect it in accordance with applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last
              updated” date at the top reflects the most recent changes. We
              encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Contact Us</h2>
            <p>
              If you have questions or requests regarding this Privacy Policy,
              please reach out through our <a href="/#contact" className="text-blue-700 underline">Contact</a> section.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
