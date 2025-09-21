import React from "react";

const testimonials = [
  {
    name: "ABC Manufacturing",
    feedback: "SMOvers has been a reliable partner for our nationwide deliveries. Their team is responsive and professional!",
  },
  {
    name: "XYZ Retailers",
    feedback: "We appreciate the efficiency and transparency in their logistics process. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="site-container">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-blue-50 rounded-lg shadow p-6">
              <p className="text-gray-700 italic mb-2">&quot;{testimonial.feedback}&quot;</p>
              <span className="text-blue-800 font-semibold">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
