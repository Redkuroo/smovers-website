"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface Lane { origin: string; destination: string; }
interface RouteGroup { name: string; description: string; lanes: Lane[]; }

const routeGroups: RouteGroup[] = [
  {
    name: "Metro Manila to Luzon",
    description: "Daily trips connecting Metro Manila to key cities in Luzon.",
    lanes: [
      { origin: "Manila", destination: "Batangas" },
      { origin: "Manila", destination: "Subic" },
      { origin: "Manila", destination: "Dagupan" },
      { origin: "Manila", destination: "Laoag" },
    ],
  },
  {
    name: "Visayas & Mindanao",
    description: "Regular routes to major ports and cities in Visayas and Mindanao.",
    lanes: [
      { origin: "Cebu", destination: "Iloilo" },
      { origin: "Cebu", destination: "Cagayan de Oro" },
      { origin: "Davao", destination: "General Santos" },
      { origin: "Cebu", destination: "Zamboanga" },
    ],
  },
  {
    name: "Specialized Express",
    description: "On-demand express delivery for urgent shipments across the Philippines.",
    lanes: [
      { origin: "Manila", destination: "Cebu" },
      { origin: "Manila", destination: "Davao" },
      { origin: "Manila", destination: "Iloilo" },
    ],
  },
];

export default function RoutesSection() {
  const [open, setOpen] = useState<string | null>(routeGroups[0].name);

  return (
    <section className="py-16 px-4" id="routes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Featured Routes</h2>
        <div className="grid md:grid-cols-3 gap-6">
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
                    <ChevronDown className={`mt-1 w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : 'text-blue-700'}`} />
                  </div>
                  <p className="mt-4 text-[11px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700">Lanes: {group.lanes.length}</p>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${isOpen ? "max-h-80" : "max-h-0"}`}>
                  <div className="px-5 pb-5 space-y-2 text-sm">
                    {group.lanes.map((lane, idx) => (
                      <div key={idx} className="border border-gray-100 rounded-md p-3 bg-gray-50/50 hover:bg-gray-50 transition">
                        <p className="font-medium text-blue-900 flex items-center gap-1">
                          <span>{lane.origin}</span>
                          <ArrowRight className="w-4 h-4 text-blue-500" aria-hidden="true" />
                          <span>{lane.destination}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
