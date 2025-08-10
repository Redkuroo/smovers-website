import React from "react";
import Image from "next/image";

export default function HeroImage() {
  const kpis = [
    { label: "Cities Served", value: "150+" },
    { label: "On-Time Rate", value: "99.2%" },
    { label: "Operations", value: "24/7" },
    { label: "Clients", value: "500+" },
    { label: "New Routes 2025", value: "20" },
  ];
  return (
    <div className="w-full">
      {/* KPI strip (compact) */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-2 py-2 grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="space-y-0">
              <p className="text-base md:text-lg font-extrabold text-blue-900 leading-none">
                {kpi.value}
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-wide leading-tight">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Hero full-width banner */}
      <Image
        src="/hero.jpg"
        alt="SMOvers Logistics Hero"
        width={1920}
        height={500}
        className="w-full h-[180px] md:h-[320px] lg:h-[480px] object-cover"
        priority
      />
    </div>
  );
}
