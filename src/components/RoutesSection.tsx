"use client";
import React, { useState } from "react";

// Container size filter options
const containerSizes = [
  { id: "all", label: "All" },
  { id: "10ft", label: "10ft" },
  { id: "20ft", label: "20ft" },
  { id: "40ft", label: "40ft" },
  { id: "flat", label: "Flat Rack" },
  { id: "lcl", label: "LCL" },
];

// Route dataset with lanes (placeholder sample data)
interface Lane {
  origin: string;
  destination: string;
  freq: string; // frequency label
  transit: string; // transit time label
  sizes: string[]; // supported container size ids
}
interface RouteGroup {
  name: string;
  description: string;
  lanes: Lane[];
}

const routeGroups: RouteGroup[] = [
  {
    name: "Metro Manila to Luzon",
    description: "Daily trips connecting Metro Manila to key cities in Luzon.",
    lanes: [
      { origin: "Manila", destination: "Batangas", freq: "Daily", transit: "6h", sizes: ["10ft", "20ft", "40ft", "lcl"] },
      { origin: "Manila", destination: "Subic", freq: "Daily", transit: "5h", sizes: ["10ft", "20ft", "40ft", "flat"] },
      { origin: "Manila", destination: "Dagupan", freq: "3x wk", transit: "1d", sizes: ["10ft", "20ft", "lcl"] },
      { origin: "Manila", destination: "Laoag", freq: "2x wk", transit: "2d", sizes: ["20ft", "40ft", "flat"] },
    ],
  },
  {
    name: "Visayas & Mindanao",
    description: "Regular routes to major ports and cities in Visayas and Mindanao.",
    lanes: [
      { origin: "Cebu", destination: "Iloilo", freq: "5x wk", transit: "1d", sizes: ["10ft", "20ft", "40ft", "lcl"] },
      { origin: "Cebu", destination: "Cagayan de Oro", freq: "4x wk", transit: "2d", sizes: ["20ft", "40ft", "lcl", "flat"] },
      { origin: "Davao", destination: "General Santos", freq: "Daily", transit: "8h", sizes: ["10ft", "20ft", "40ft"] },
      { origin: "Cebu", destination: "Zamboanga", freq: "2x wk", transit: "3d", sizes: ["20ft", "40ft", "flat"] },
    ],
  },
  {
    name: "Specialized Express",
    description: "On-demand express delivery for urgent shipments across the Philippines.",
    lanes: [
      { origin: "Manila", destination: "Cebu", freq: "On-demand", transit: "30h", sizes: ["10ft", "20ft", "lcl"] },
      { origin: "Manila", destination: "Davao", freq: "On-demand", transit: "48h", sizes: ["20ft", "40ft"] },
      { origin: "Manila", destination: "Iloilo", freq: "On-demand", transit: "32h", sizes: ["10ft", "20ft", "lcl"] },
    ],
  },
];

export default function RoutesSection() {
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [open, setOpen] = useState<string | null>(routeGroups[0].name);

  return (
    <section className="py-16 px-4" id="routes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Featured Routes</h2>
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {containerSizes.map((s) => {
            const active = sizeFilter === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSizeFilter(s.id)}
                className={`px-3 py-1.5 rounded-full text-sm border transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 ${
                  active
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-blue-800 border-blue-200 hover:bg-blue-50"
                }`}
                aria-pressed={active}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {routeGroups.map((group) => {
            const lanesFiltered = group.lanes.filter((l) =>
              sizeFilter === "all" ? true : l.sizes.includes(sizeFilter)
            );
            const isOpen = open === group.name;
            return (
              <div
                key={group.name}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : group.name)}
                  className="text-left p-5 flex-1"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 leading-snug">{group.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{group.description}</p>
                    </div>
                    <span
                      className={`mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full border text-xs font-semibold transition ${
                        isOpen ? "bg-blue-600 text-white border-blue-600 rotate-180" : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      ˅
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      Lanes: {lanesFiltered.length}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                      Total (all): {group.lanes.length}
                    </span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 space-y-3 text-sm">
                    {lanesFiltered.length === 0 && (
                      <p className="text-gray-500 italic pt-2">No lanes for this container size.</p>
                    )}
                    {lanesFiltered.map((lane, idx) => (
                      <div
                        key={`${lane.origin}-${lane.destination}-${idx}`}
                        className="border border-gray-100 rounded-lg p-3 bg-gray-50/50 hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-blue-900">
                            {lane.origin} → {lane.destination}
                          </p>
                          <div className="flex gap-1">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-600 text-white">
                              {lane.freq}
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                              {lane.transit}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {lane.sizes.map((sz) => (
                            <span
                              key={sz}
                              className={`px-1.5 py-0.5 rounded text-[10px] border ${
                                sizeFilter !== "all" && sz === sizeFilter
                                  ? "bg-amber-400 text-black border-amber-400"
                                  : "bg-white text-gray-700 border-gray-200"
                              }`}
                            >
                              {sz === "flat" ? "Flat" : sz.toUpperCase()}
                            </span>
                          ))}
                        </div>
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
