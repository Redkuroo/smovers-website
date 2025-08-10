import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
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
            {/* Optional CTA buttons (placeholders) */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-white text-blue-900 font-semibold px-5 py-2 rounded shadow hover:bg-blue-50 transition text-sm md:text-base"
              >
                Contact Us
              </a>
            
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/hero.jpg"
            alt="Cargo vessel and logistics background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 pointer-events-none bg-black/20 md:bg-black/10" />
        </div>
      </div>
    </section>
  );
}
