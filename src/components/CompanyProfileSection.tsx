import React from "react";
import Image from "next/image";
import { Eye, Rocket, Handshake } from "lucide-react";

export default function CompanyProfileSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Company Profile</h2>

        {/* Introduction: two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Introduction</h3>

            <h4 className="text-sm font-semibold text-slate-700">Company History</h4>
            <p className="text-gray-700 mt-2 leading-relaxed">
              SMOvers Logistics Services is a sole proprietorship owned by Engr. John Gilbert Olmoguez. The company officially began operations on February 1, 2021, and is currently managed by his wife, Lydie Rocero Olmoguez.
            </p>

            <h4 className="text-sm font-semibold text-slate-700 mt-4">Company Overview</h4>
            <p className="text-gray-700 mt-2 leading-relaxed">
              SMOvers Logistics Services specializes in Freight Forwarding and Trucking Services. We handle a wide range of domestic cargo shipments, including FCL (Full Container Load), LCL (Less than Container Load), FLATRACK CONTAINER, and Breakbulk cargo. Our services extend to all major domestic ports across the Philippines. We maintain operational branches and strong agent partnerships in Luzon, Visayas, and Mindanao.
            </p>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-slate-700 mb-2">Our Partner Carriers</h5>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <li className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-slate-800 shadow-sm">Trans-Asia Shipping Lines</li>
                <li className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-slate-800 shadow-sm">Meridian Shipping and Container Carrier Inc.</li>
                <li className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-slate-800 shadow-sm">Lorenzo Shipping Lines</li>
                <li className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-slate-800 shadow-sm">Iris Paoay Shipping</li>
              </ul>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md">
            <Image src="/hero.jpg" alt="Logistics operations" width={1200} height={800} className="object-cover w-full h-64 sm:h-80 lg:h-full" priority />
          </div>
        </div>

        {/* Strategy: Vision, Mission, Core Values */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Vision</h4>
                  <p className="text-gray-600 text-sm mt-1">Our vision is to build lasting and trusted relationships with our clients by delivering excellent service and maintaining an efficient and reliable transport system.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-rose-50 p-2">
                  <Rocket className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Mission</h4>
                  <p className="text-gray-600 text-sm mt-1">Our mission is to continuously strengthen our capabilities and expertise to provide the highest quality logistics services that meet and exceed client expectations.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber-50 p-2">
                  <Handshake className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Core Values</h4>
                  <p className="text-gray-600 text-sm mt-1">Palabra de Honor – We honor our word and commitments with integrity and reliability.<br/>Care and Respect – We value our clients, partners, and team members by treating everyone with genuine care and mutual respect.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
