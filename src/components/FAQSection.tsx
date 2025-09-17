"use client";
import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What services does SMOvers provide?",
    answer:
      "We offer door-to-door cargo moving, route-optimized deliveries, and tailored logistics solutions for businesses of any size.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Use our contact form or call us directly. Share your origin, destination, package details, and timeline so we can prepare an accurate quote.",
  },
  {
    question: "Do you support same-day or rush deliveries?",
    answer:
      "Yes, rush options are available in select routes. Availability depends on time of request and route capacity.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "We provide status updates and tracking options depending on the route and service level chosen.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-2 text-blue-900/70">Quick answers to common questions about our services.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, idx) => (
            <details key={idx} className="group border border-blue-900/10 rounded-lg bg-white/60 backdrop-blur-sm">
              <summary className="cursor-pointer list-none select-none px-5 py-4 flex items-center justify-between gap-4">
                <span className="font-semibold text-blue-900">{item.question}</span>
                <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs transition-transform group-open:rotate-180">▲</span>
              </summary>
              <div className="px-5 pb-5 pt-0 text-blue-900/80 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-sm text-blue-900/70">
          Still have questions? <a href="#contact" className="text-blue-700 underline underline-offset-4 hover:text-blue-800">Contact us</a> and we’ll help you out.
        </div>
      </div>
    </section>
  );
}
