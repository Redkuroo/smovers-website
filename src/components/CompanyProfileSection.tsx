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
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <Ship className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Logistics Excellence</h3>
                  <p className="text-blue-100">Connecting Philippines from Luzon to Mindanao</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Carriers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Partner Carriers</h3>
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
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Strategy</h3>
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
