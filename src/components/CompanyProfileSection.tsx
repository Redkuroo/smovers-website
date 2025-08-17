import React from "react";
import Image from "next/image";
import { Eye, Rocket, Handshake, Ship, Building2, Users } from "lucide-react";

export default function CompanyProfileSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Company Profile</h2>
          
        </div>

        {/* Hero Section with Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800 leading-snug">History</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                SMOvers Logistics Services is a sole proprietorship owned by Engr. John Gilbert Olmoguez. The company officially began operations on February 1, 2021, and is currently managed by his wife, Lydie Rocero Olmoguez.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Ship className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800 leading-snug">Overview</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mt-1">
                SMOvers Logistics Services specializes in Freight Forwarding and Trucking Services. We handle a wide range of domestic cargo shipments, including FCL (Full Container Load), LCL (Less than Container Load), FLATRACK CONTAINER, and Breakbulk cargo.
              </p>

              <p className="text-slate-700 leading-relaxed mt-4">
                Our services extend to all major domestic ports across the Philippines. We maintain operational branches and strong agent partnerships in the following locations: LUZON, VISAYAS, and MINDANAO.
              </p>
          
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              {/* Animated hero: SVG scene with moving vessels (no external video required) */}
              <div className="relative h-80 bg-gradient-to-br from-blue-600 to-purple-600">
                <svg viewBox="0 0 1200 240" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="fade" x1="0" x2="0">
                      <stop offset="0%" stopColor="#000" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* background subtle band */}
                  <rect width="1200" height="240" fill="url(#g1)" opacity="0.12" />

                  {/* moving line layers (parallax) */}
                  <g fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2">
                    <path d="M-200 160 C200 40 400 40 800 160 S1400 280 1600 160" />
                    <g>
                      <path d="M0 140 q150 -60 300 0 t300 0 t300 0" />
                      <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-600 0" dur="30s" repeatCount="indefinite" />
                    </g>
                    <g>
                      <path d="M0 100 q200 -40 400 0 t400 0" />
                      <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-800 0" dur="40s" repeatCount="indefinite" />
                    </g>
                  </g>

                  {/* simple vessel icons as circles with small bows; multiple layers animate across */}
                  <g fill="#fff" fillOpacity="0.9">
                    <g transform="translate(0,120)">
                      <g>
                        <rect x="0" y="-6" width="36" height="12" rx="3" fill="#fff" fillOpacity="0.85" />
                        <polygon points="36,-6 44,0 36,6" fill="#fff" fillOpacity="0.85" />
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="1200 0" dur="18s" repeatCount="indefinite" />
                      </g>
                    </g>

                    <g transform="translate(-300,80)">
                      <g>
                        <rect x="0" y="-6" width="24" height="10" rx="2" fill="#fff" fillOpacity="0.75" />
                        <polygon points="24,-6 30,0 24,6" fill="#fff" fillOpacity="0.75" />
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="1400 0" dur="24s" repeatCount="indefinite" />
                      </g>
                    </g>

                    <g transform="translate(-600,40)">
                      <g>
                        <rect x="0" y="-5" width="18" height="8" rx="2" fill="#fff" fillOpacity="0.7" />
                        <polygon points="18,-5 22,0 18,5" fill="#fff" fillOpacity="0.7" />
                        <animateTransform attributeName="transform" type="translate" from="0 0" to="1600 0" dur="30s" repeatCount="indefinite" />
                      </g>
                    </g>
                  </g>

                </svg>

                {/* overlay content */}
                <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
                  <div className="text-center">
                    <Ship className="h-14 w-14 mx-auto mb-3 opacity-95" />
                    <h3 className="text-2xl font-bold mb-1">Operations in Motion</h3>
                    <p className="text-blue-100">Live operations across the archipelago</p>
                  </div>
                </div>
              </div>

              {/* CTA area below the animated hero */}
              <div className="p-6 bg-white">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Request a demo
                  </a>
                  <a href="#routes" className="inline-flex items-center justify-center border border-slate-200 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-sm hover:shadow transition">
                    View routes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Carriers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">

            <h3 className="text-2xl font-bold  text-blue-800 mb-4">Our Partner Carriers</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">We proudly work with the following trusted carrier partners:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Trans-Asia Shipping Lines",
              "Meridian Shipping and Container Carrier Inc.",
              "Lorenzo Shipping Lines",
              "Iris Paoay Shipping"
            ].map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <Ship className="h-8 w-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                  <h4 className="text-center font-semibold text-slate-800 text-sm leading-tight">{partner}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Section */}
        <div>
          <div className="text-center mb-12">
          <h3 className="text-2xl font-bold  text-blue-800 mb-4">Our Strategy</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Built on strong foundations of trust, excellence, and genuine care for our stakeholders</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Vision</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">Our vision is to build lasting and trusted relationships with our clients by delivering excellent service and maintaining an efficient and reliable transport system.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-rose-100 rounded-2xl group-hover:bg-rose-200 transition-colors">
                    <Rocket className="h-8 w-8 text-rose-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Mission</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">Our mission is to continuously strengthen our capabilities and expertise to provide the highest quality logistics services that meet and exceed client expectations.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-amber-100 rounded-2xl group-hover:bg-amber-200 transition-colors">
                    <Handshake className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Core Values</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-1">Palabra de Honor</h5>
                    <p className="text-slate-600 text-sm">We honor our word and commitments with integrity and reliability.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-1">Care and Respect</h5>
                    <p className="text-slate-600 text-sm">We value our clients, partners, and team members by treating everyone with genuine care and mutual respect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
