'use client';
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
      {/* KPI strip (animated horizontal scroll) */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-b border-blue-100 overflow-hidden">
        <div className="relative">
          <div className="flex w-max gap-10 px-6 py-2 animate-[kpiScroll_28s_linear_infinite]">
            {[...kpis, ...kpis].map((kpi, idx) => (
              <div
                key={kpi.label + idx}
                className="text-center min-w-[140px] flex items-center justify-center"
                title={kpi.label}
                aria-label={kpi.label}
              >
                {/* Number + label inline */}
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="text-base md:text-lg font-extrabold text-blue-900 leading-none">
                    {kpi.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wide text-gray-600 leading-none whitespace-nowrap">
                    {kpi.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
      <style jsx>{`
        @keyframes kpiScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
