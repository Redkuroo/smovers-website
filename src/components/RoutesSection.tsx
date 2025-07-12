import React from "react";

const routes = [
  {
    name: "Metro Manila to Luzon",
    description: "Daily trips connecting Metro Manila to key cities in Luzon.",
  },
  {
    name: "Visayas & Mindanao",
    description: "Regular routes to major ports and cities in Visayas and Mindanao.",
  },
  {
    name: "Specialized Express",
    description: "On-demand express delivery for urgent shipments across the Philippines.",
  },
];

export default function RoutesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Featured Routes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.name} className="bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{route.name}</h3>
              <p className="text-gray-700">{route.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
