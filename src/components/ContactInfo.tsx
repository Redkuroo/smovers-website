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

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    company.address
  )}&output=embed`;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
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

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Phone
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    <a
                      href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                      className="text-blue-700 hover:text-blue-900 underline underline-offset-2"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="col-span-1 text-sm font-medium text-gray-500">
                    Email
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base text-gray-900">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-blue-700 hover:text-blue-900 underline underline-offset-2 break-all"
                    >
                      {company.email}
                    </a>
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
