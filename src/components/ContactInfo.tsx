import React from "react";

/**
 * ContactInfo
 * Responsive company contact/details panel with a Google Map embed.
 * - Stacks on mobile, two columns on desktop
 * - Clean, professional styling aligned with a logistics brand
 */
export default function ContactInfo() {
  const company = {
    name: "SMOvers Logistics Services",
    businessType: "Sole Proprietorship",
    registrationNumber: "2476151",
    tin: "724-936-326-000",
    address: "Km 10, Purok 6, Buhisan, Tibungco, Davao City",
    phone: "0917-772-3701",
    email: "smoverslogistics@gmail.com",
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2643496271535!2d125.64249637478846!3d7.210655014797296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f941e760cdcd3d%3A0xab73afe1517a6c07!2sSMovers%20Logistics%20Services!5e0!3m2!1sfil!2sph!4v1755056144799!5m2!1sfil!2sph";

  return (
    <section className="w-full bg-white">
  <div className="site-container py-10">
  <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-900">
            Contact Information
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Reach us for inquiries, bookings, and logistics coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Details Card */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 sm:p-8">
              <dl className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Company Name
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base font-semibold text-gray-900">
                    {company.name}
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Business Type
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    {company.businessType}
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Registration Number
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    {company.registrationNumber}
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">TIN</dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    {company.tin}
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Address
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    {company.address}
                  </dd>
                </div>


              
              </dl>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <iframe
                title="SMOvers Logistics Services Location"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
