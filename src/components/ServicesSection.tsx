import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Containerized Cargo",
    description: "We cater 10 footer, 20 footer, 40 footer containers for all types of goods or general cargo.",
    image: "/services/container.jpg",
    alt: "Stacked shipping containers",
  },
  {
    title: "Flat Rack Container",
    description: "We cater oversized or heavy cargo from one place to another.",
    image: "/services/flat-rack.jpg",
    alt: "Flat rack container with oversized cargo",
  },
  {
    title: "LCL (Less than Container Load)",
    description: "We do consolidation for LCL goods.",
    image: "/services/lcl.jpg",
    alt: "Mixed cartons prepared for consolidation",
  },
  {
    title: "Breakbulk Cargo",
    description: "We cater heavy equipment or any breakbulk cargos that need to be shipped from one place to another.",
    image: "/services/breakbulk.jpg",
    alt: "Heavy equipment loaded as breakbulk cargo",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Main Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border border-gray-100"
            >
              <div className="relative h-40 sm:h-44">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition">
                  View Details
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-blue-800 leading-snug">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {s.description}
                </p>
                {/* Optional CTA placeholder */}
                <button
                  type="button"
                  className="mt-auto text-blue-700 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          * Images are placeholders. Replace with actual service photos.
        </p>
      </div>
    </section>
  );
}
