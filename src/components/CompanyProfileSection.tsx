import React from "react";
import Image from "next/image";
import { Eye, Rocket, Handshake, Ship, Building2 } from "lucide-react";

export default function CompanyProfileSection() {
  return (
    <section className="py-20 bg-blue-50">
  <div className="site-container">
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
              {/* Image placeholder */}
              <div className="relative h-80 bg-slate-100 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image src="/cargo.jpg" alt="Cargo containers at a Philippine port" fill className="object-cover" />
                </div>

                {/* overlay removed per request; image only */}
              </div>

              {/* image-only: CTAs removed per request */}
            </div>
          </div>
        </div>

        {/* Partner Carriers Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center gap-4 mb-8 text-center">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-white sm:px-4 sm:py-1 sm:text-xs">
              Partner Carriers
            </span>
            <p className="text-slate-600 max-w-2xl">
              We partner with trusted domestic carriers to ensure seamless nationwide freight coverage.
            </p>
          </div>

          <div className="relative -mx-4 sm:mx-0">
            <div className="flex snap-x snap-mandatory items-center justify-center gap-3 overflow-x-auto px-4 pb-2 sm:overflow-visible sm:px-0">
              {[
                "Trans-Asia Shipping Lines",
                "Meridian Shipping & Container Carrier Inc.",
                "Lorenzo Shipping Lines",
                "Iris Paoay Shipping",
             
              ].map((partner) => (
                <div
                  key={partner}
                  className="flex min-w-[180px] snap-start items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-sm transition hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Ship className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
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
