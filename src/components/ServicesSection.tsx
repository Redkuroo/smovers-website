import React from "react";

const services = [
  {
    title: "Containerized Cargo",
    description: "Efficient and reliable freight solutions for all cargo types, both domestic and international.",
  },
  {
    title: "Flat Rack Container",
    description: "Secure, scalable storage options with real-time inventory management.",
  },
  {
    title: "LCL (Less than Container Load)",
    description: "Advanced route planning to ensure timely and cost-effective deliveries.",
  },
  {
    title: "Breakbulk Cargo",
    description: "Expert handling of customs documentation and compliance for smooth cross-border operations.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Main Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
