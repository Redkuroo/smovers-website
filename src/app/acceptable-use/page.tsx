export const metadata = {
  title: "Acceptable Use Policy | SMOvers",
  description: "Rules for acceptable use of SMOvers' website and services.",
};

export default function AcceptableUsePage() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-4">
          Acceptable Use Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Purpose</h2>
            <p>
              This Acceptable Use Policy ("AUP") describes prohibited and
              restricted activities when using the SMOvers Logistics Services
              ("SMOvers", "we", "our") website and services. By using our
              website, you agree to comply with this AUP.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Prohibited Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uploading or transmitting malware, viruses, or harmful code.</li>
              <li>Attempting to gain unauthorized access to systems or data.</li>
              <li>Interfering with or disrupting the integrity or performance of the website.</li>
              <li>Engaging in fraud, phishing, or deceptive practices.</li>
              <li>Violating intellectual property or privacy rights.</li>
              <li>Posting or transmitting unlawful, defamatory, or abusive content.</li>
              <li>Scraping or harvesting data without explicit permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Security and Reporting</h2>
            <p>
              Do not test or bypass security measures. If you discover a
              vulnerability, please report it responsibly using our <a href="/#contact" className="text-blue-700 underline">Contact</a> section instead of exploiting it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Fair Use and Rate Limits</h2>
            <p>
              Automated access should be limited and respectful. Excessive
              requests or actions that degrade performance are not allowed without
              prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Compliance with Laws</h2>
            <p>
              You must comply with all applicable laws and regulations when using
              the website, including export controls and data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Consequences of Violations</h2>
            <p>
              Violations of this AUP may result in warnings, suspension, or
              termination of access, and may also result in legal action where
              appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Changes to This AUP</h2>
            <p>
              We may update this AUP from time to time. The “Last updated” date
              at the top reflects the most recent changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
