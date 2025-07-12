import React from "react";
export default function AccomplishmentsSection() {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Accomplishments & Updates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Awarded Best Logistics Partner 2024</h3>
            <p className="text-gray-700">Recognized for outstanding service and reliability by the National Logistics Association.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Expanded Fleet</h3>
            <p className="text-gray-700">Added 20 new trucks and 5 new routes to better serve our clients nationwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
