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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-blue-900/70 text-lg">
            Find answers to common questions about our logistics services and operations.
          </p>
        </header>

        {/* Two-column layout: left label, right list */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left: Category label */}
          <aside className="md:col-span-3">
            <div className="text-blue-900 text-xl">General</div>
          </aside>

          {/* Right: FAQ list with dividers */}
          <div className="md:col-span-9">
            <div className="border-t border-blue-900/10">
              {faqs.map((item, idx) => (
                <details key={idx} className="group border-b border-blue-900/10">
                  <summary className="list-none cursor-pointer py-5 flex items-center gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      {item.question}
                    </a>
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
        </div>

        <div className="mt-10 text-sm text-blue-900/70 text-center md:text-left md:pl-[calc(25%)]">
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
