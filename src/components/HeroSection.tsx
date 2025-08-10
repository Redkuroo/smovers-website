
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SMOvers Logistics Services</h1>
        <p className="text-lg md:text-2xl mb-6">Freight Forwarding Company</p>
        <p className="text-base md:text-lg italic">
          That organizes shipment from one place to another nationwide.
        </p>
      </div>
    </section>
  );
}
