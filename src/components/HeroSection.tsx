import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white py-24 md:py-32 px-4 text-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: 'url(/bg.jpg)' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">SMOvers Logistics Services</h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">Freight Forwarding Company</p>
        <p className="text-base md:text-lg italic drop-shadow">
          That organizes shipment from one place to another nationwide.
        </p>
      </div>
    </section>
  );
}
