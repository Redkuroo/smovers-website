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
  <section className="site-container py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: {lastUpdated}</p>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <p>
              By accessing or using our website, you agree to these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Use of Website</h2>
            <p className="mb-2">This website is provided to share information about our company, services, and routes.</p>
            <p>You may use our contact and booking forms only for legitimate business inquiries.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Intellectual Property</h2>
            <p className="mb-2">All content on this site (text, images, layout, blogs) belongs to SMOvers.</p>
            <p>You may not copy, modify, or use our content without permission.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Disclaimer</h2>
            <p className="mb-2">Information on this website is provided for general purposes only and may change without notice.</p>
            <p>We are not responsible for errors, omissions, or third-party content linked from our site.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Limitation of Liability</h2>
            <p>We are not liable for any damages resulting from use of this site, including interruptions, errors, or data loss.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Governing Law</h2>
            <p>These Terms are governed by the laws of [Your Country/Region].</p>
          </div>
        </div>
      </section>
    </main>
  );
}
