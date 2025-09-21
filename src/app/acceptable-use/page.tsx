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
        <p className="text-sm text-gray-500 mb-10">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <div>
            <p>
              To keep our website safe and professional, users agree to:
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-3">✅ Allowed</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the site for legitimate purposes (learning about our company,
                booking a meeting, contacting us).
              </li>
              <li>Share accurate and respectful information through our forms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-700 mb-3">❌ Not Allowed</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submitting false, misleading, or fraudulent information.</li>
              <li>Attempting to hack, disrupt, or overload the website.</li>
              <li>Using our site for spam, scams, or unlawful activity.</li>
              <li>Uploading offensive, illegal, or harmful content.</li>
            </ul>
          </div>

          <div>
            <p>
              We reserve the right to block access, delete messages, or take legal
              action against violations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
