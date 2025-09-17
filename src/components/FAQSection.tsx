"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Centered heading like the reference */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-blue-900/70 text-base md:text-lg">
            Find answers to common questions about our logistics services and operations.
          </p>
        </header>

        {/* Single-column list aligned to brand styles */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="border-t border-blue-900/10">
            {faqs.map((item, idx) => (
              <details key={idx} className="group border-b border-blue-900/10">
                <summary className="list-none cursor-pointer py-5 flex items-center gap-4">
                  <span className="text-blue-600 hover:text-blue-700 font-medium">
                    {item.question}
                  </span>
                  <div className="ml-auto text-blue-600 transition-transform group-open:rotate-180">
                    <ChevronDown size={18} />
                  </div>
                </summary>
                <div className="pb-6 -mt-1 text-blue-900/80 leading-relaxed pr-8">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 text-sm text-blue-900/70 text-center">
          Still have questions? {" "}
          <a href="#contact" className="text-blue-700 underline underline-offset-4 hover:text-blue-800">
            Contact us
          </a>{" "}
          and we’ll help you out.
        </div>
      </div>
    </section>
  );
}
