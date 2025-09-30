"use client";

import React from "react";
import Image from "next/image";
import Script from "next/script";

export default function HeroSection() {

  const handleBookMeeting = () => {
    // @ts-expect-error Cal.com embed API is injected at runtime
    if (typeof window !== 'undefined' && window.Cal) {
      // @ts-expect-error Cal.com UI API call
      window.Cal("ui", {
        "styles": {"branding":{"brandColor":"#1e40af"}},
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
      // @ts-expect-error Cal.com open modal API call
      window.Cal("openModal", "smovers-logistics/30min"); // Replace with your Cal.com username/event
    } else {
      // Fallback: redirect to Cal.com page
      window.open('https://cal.com/smovers-logistics/30min', '_blank');
    }
  };

  return (
    <section className="w-full">
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        {/* Left: Gradient + Text */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white flex items-center px-6 sm:px-10 py-16 md:py-0">
          <div className="w-full max-w-xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SMOvers Logistics Services
            </h1>
            <p className="text-lg md:text-xl mb-4 font-medium tracking-wide">
              Freight Forwarding Company
            </p>
            <p className="text-base md:text-lg italic mb-8">
              That organizes shipment from one place to another nationwide.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-sm md:text-base"
              >
                Contact Us
              </a>
              <button
                onClick={handleBookMeeting}
                className=" text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base border-2 border-blue-600 hover:border-blue-700 cursor-pointer"
              >
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 relative h-64 md:h-auto no-global-radius">
          <Image
            src="/hero.jpg"
            alt="Cargo vessel and logistics background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-none"
          />
          <div className="absolute inset-0 pointer-events-none bg-black/20 md:bg-black/10 rounded-none no-global-radius" />
        </div>
      </div>
    </section>
  );
}
