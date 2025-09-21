export const metadata = {
  title: "Terms of Service | SMOvers",
  description: "Read the terms governing use of SMOvers' website and services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using the SMOvers Logistics Services ("SMOvers",
              "we", "us", or "our") website and services, you agree to be bound
              by these Terms of Service ("Terms"). If you do not agree with these
              Terms, you may not use the website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Use of the Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use the website only for lawful purposes.</li>
              <li>You will not attempt to disrupt or compromise the website’s security or integrity.</li>
              <li>You will not engage in activities that may harm SMOvers or other users.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Accounts and Communications</h2>
            <p>
              If you create an account or contact us via forms, you agree to
              provide accurate information and keep it up to date. We may contact
              you for service-related communications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of SMOvers or its licensors and is
              protected by intellectual property laws. You may not copy,
              distribute, modify, or create derivative works without prior written
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Acceptable Use</h2>
            <p>
              You agree not to misuse the website. Prohibited behavior includes,
              but is not limited to, transmitting malware, engaging in fraudulent
              activities, scraping without permission, or attempting to gain
              unauthorized access. For more details, see our <a href="/acceptable-use" className="text-blue-700 underline">Acceptable Use</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of those sites
              and you access them at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Disclaimers</h2>
            <p>
              The website and its content are provided "as is" without warranties
              of any kind, whether express or implied, including but not limited
              to warranties of merchantability, fitness for a particular purpose,
              and non-infringement. We do not guarantee that the website will be
              uninterrupted, secure, or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SMOvers will not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or
              other intangible losses, resulting from your use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Indemnification</h2>
            <p>
              You agree to indemnify and hold SMOvers harmless from any claims,
              liabilities, damages, losses, and expenses, including reasonable
              attorney’s fees, arising out of or in any way connected with your
              use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The “Last updated”
              date at the top indicates the most recent changes. Continued use of
              the website after changes constitutes acceptance of the updated
              Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              SMOvers operates, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Contact Us</h2>
            <p>
              For questions about these Terms, please reach out through our <a href="/#contact" className="text-blue-700 underline">Contact</a> section.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
