"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface Lane { origin: string; destination: string; }
interface RouteGroup { name: string; description: string; lanes: Lane[]; }

const routeGroups: RouteGroup[] = [
  {
    name: "Luzon",
    description: "Key Luzon and inter-island departures originating from Manila & Palawan.",
    lanes: [
      { origin: "Manila", destination: "Davao" },
      { origin: "Manila", destination: "Gensan" },
      { origin: "Manila", destination: "Butuan" },
      { origin: "Manila", destination: "Cagayan" },
      { origin: "Manila", destination: "Zamboanga" },
      { origin: "Manila", destination: "Cebu" },
      { origin: "Manila", destination: "Tagbilaran" },
      { origin: "Manila", destination: "Iloilo" },
      { origin: "Manila", destination: "Bacolod" },
      { origin: "Manila", destination: "Tacloban" },
      { origin: "Manila", destination: "Palawan" },
      { origin: "Palawan", destination: "Manila" },
    ],
  },
  {
    name: "Visayas",
    description: "Primary Visayas hub connections linking to Manila and Mindanao.",
    lanes: [
      { origin: "Cebu", destination: "Manila" },
      { origin: "Cebu", destination: "Davao" },
      { origin: "Cebu", destination: "Cagayan" },
      { origin: "Cebu", destination: "Gensan" },
      { origin: "Iloilo", destination: "Manila" },
      { origin: "Bacolod", destination: "Manila" },
      { origin: "Tagbilaran", destination: "Manila" },
      { origin: "Tacloban", destination: "Manila" },
      { origin: "Iloilo", destination: "Cebu" },
      { origin: "Bacolod", destination: "Cebu" },
      { origin: "Dumaguete", destination: "Manila" },
      { origin: "Culasi Roxas", destination: "Manila" },
    ],
  },
  {
    name: "Mindanao",
    description: "Mindanao origin lanes including multi-leg (via) routings.",
    lanes: [
      { origin: "Davao", destination: "Manila" },
      { origin: "Davao", destination: "Cebu" },
      { origin: "Davao", destination: "Iloilo (via Cebu)" },
      { origin: "Davao", destination: "Bacolod (via Cebu)" },
      { origin: "Davao", destination: "Tagbilaran (via Cebu)" },
      { origin: "Davao", destination: "Tacloban (via Manila)" },
      { origin: "Davao", destination: "Palawan (via Manila)" },
      { origin: "Gensan", destination: "Manila" },
      { origin: "Butuan", destination: "Manila" },
      { origin: "Zamboanga", destination: "Manila" },
      { origin: "Zamboanga", destination: "Tacloban" },
      { origin: "Zamboanga", destination: "Palawan" },
      { origin: "Cagayan", destination: "Manila" },
      { origin: "Cagayan", destination: "Cebu" },
      { origin: "Dipolog", destination: "Manila" },
    ],
  },
];

export default function RoutesSection() {
  const [open, setOpen] = useState<string | null>(routeGroups[0].name);

  return (
    <section className="py-16 px-4" id="routes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Featured Routes</h2>
        {/* Two-column layout: left accordion, right reserved map space */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="w-full lg:w-[56%] flex flex-col gap-6">
            {routeGroups.map(group => {
              const isOpen = open === group.name;
              return (
                <div key={group.name} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : group.name)}
                    className="text-left p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 leading-snug">{group.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{group.description}</p>
                      </div>
                      <ChevronDown className={`mt-1 w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : 'text-blue-700'} cursor-pointer` } />
                    </div>
                    <p className="mt-4 text-[11px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 cursor-pointer">Lanes: {group.lanes.length}</p>
                  </button>
                  <div className={`transition-[max-height] duration-500 ease-in-out ${isOpen ? (group.lanes.length > 10 ? 'max-h-[700px] overflow-y-auto' : 'max-h-[420px]') : 'max-h-0'} overflow-hidden`}>
                    <div className="px-5 pb-5 flex flex-wrap gap-2 text-[11px] md:text-xs">
                      {group.lanes.map((lane, idx) => {
                        const rawDest = lane.destination;
                        const viaMatch = rawDest.match(/^(.*)\s*\(via\s+([^\)]+)\)\s*$/i);
                        const mainDest = viaMatch ? viaMatch[1].trim() : rawDest;
                        const viaPort = viaMatch ? viaMatch[2].trim() : null;
                        return (
                          <div
                            key={idx}
                            className="inline-flex items-center flex-none rounded-full border border-blue-100 bg-blue-50/60 hover:bg-blue-50 hover:border-blue-200 px-3 py-1.5 gap-1.5 text-blue-900 shadow-sm transition cursor-pointer"
                          >
                            <span className="font-medium">{lane.origin}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
                            <span className="font-semibold text-blue-800">{mainDest}</span>
                            {viaPort && (
                              <span className="ml-1 leading-none px-1.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-medium tracking-wide shadow">
                                via {viaPort}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:flex-1 mt-8 lg:mt-0">
            {/* Placeholder for Philippine map component (now visible on mobile) */}
            <div className="w-full h-72 sm:h-80 lg:h-[560px] rounded-2xl border border-dashed border-[#fab36b]/50 bg-gradient-to-br from-[#fab36b]/10 to-white flex items-center justify-center text-[#6b3a00] text-sm">
              Map placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
