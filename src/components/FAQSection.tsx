"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "What services does SMOvers provide?",
    answer: (
      <>
        <p>
          We provide comprehensive domestic shipping solutions, ensuring seamless
          container movement from one port to another.
        </p>
        <p className="mt-3">Our range of services includes:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Pier to Pier</li>
          <li>Yard to Yard</li>
          <li>Door to Door</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I request a quote?",
    answer: (
      <>
        For inquiries, you may contact us at{" "}
        <a href="tel:0917-772-3701" className="text-blue-600 hover:underline">
          0917-772-3701
        </a>{" "}
        or email us at{" "}
        <a href="mailto:smoverslogistics@gmail.com" className="text-blue-600 hover:underline">
          smoverslogistics@gmail.com
        </a>
        .
      </>
    ),
  },

  {
    question: "Can I track my shipment?",
    answer: (
      <>
        For shipment status updates, you may contact us at{" "}
        <a href="tel:0917-772-3701" className="text-blue-600 hover:underline">
          0917-772-3701
        </a>{" "}
        or email us at{" "}
        <a href="mailto:smoverslogistics@gmail.com" className="text-blue-600 hover:underline">
          smoverslogistics@gmail.com
        </a>
        .
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="bg-blue-50">
      <div className="site-container py-20">
        {/* Centered heading like the reference */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about our logistics services and operations.
          </p>
        </header>

        {/* Single-column list aligned to brand styles */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="border-t border-blue-900/10 no-global-radius">
            {faqs.map((item, idx) => (
              <details key={idx} className="group border-b border-blue-900/10 no-global-radius">
                <summary className="list-none cursor-pointer py-5 flex items-center gap-4">
                  <span className="text-blue-800 hover:text-blue-700 text-lg font-semibold">
                    {item.question}
                  </span>
                  <div className="ml-auto text-blue-600 transition-transform group-open:rotate-180">
                    <ChevronDown size={18} />
                  </div>
                </summary>
                <div className="pb-6 -mt-1 text-slate-600 leading-relaxed pr-8">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 text-sm text-slate-600 text-center">
          Still have questions?{" "}
          <a href="#contact" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
            Contact us
          </a>{" "}
          and we’ll help you out.
        </div>
      </div>
    </section>
  );
}
