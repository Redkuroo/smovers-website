import React from "react";
import Image from "next/image";

/**
 * BankingDetails
 * Minimal, mobile-first card showing company bank accounts.
 * Unique layout: responsive grid of compact account cards inside a single container card.
 */
export default function BankingDetails() {
  const accounts = [
    {
      bank: "BDO",
      holder: "John Gilbert Olmoguez",
      number: "010470106255",
      logo: "/bdo%20logo.png",
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
    },
    {
      bank: "BPI",
      holder: "John Gilbert Olmoguez",
      number: "9459 2709 62",
      logo: "/bpi%20logo.png",
      gradient: "from-rose-500 via-red-500 to-orange-400",
    },
    {
      bank: "UnionBank",
      holder: "John Gilbert Olmoguez",
      number: "1093 2360 4027",
      logo: "/unionbank%20logo.png",
      gradient: "from-amber-500 via-orange-500 to-amber-700",
    },
  ] as const;

  return (
    <section className="w-full bg-gray-50">
  <div className="site-container py-10">
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-900">
            Banking Details
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accounts.map((a) => (
            <li key={a.bank}>
              <div
                className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 text-white shadow-lg ring-1 ring-white/10 bg-gradient-to-br ${a.gradient} transition-all duration-300 hover:-translate-y-1`} 
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute inset-0">
                  <span className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-70" />
                  <span className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl opacity-40" />
                </div>

                {/* Header row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="relative h-12 w-12 shrink-0 rounded-md bg-white/90 ring-1 ring-white/60 overflow-hidden">
                    <Image
                      src={a.logo}
                      alt={`${a.bank} logo`}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
          
                </div>

                {/* Bank name */}
                <h3 className="relative z-10 mt-4 text-base font-semibold tracking-wide uppercase">
                  {a.bank}
                </h3>
                {/* Account number */}
                <p className="relative z-10 mt-2 font-mono text-lg tracking-widest">
                  {a.number}
                </p>

                {/* Holder */}
                <div className="relative z-10 mt-4 text-xs/relaxed">
                  <p className="text-white/80">Account Name</p>
                  <p className="font-medium tracking-wide">{a.holder}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Small note to avoid footer placement (informational, no visual change) */}
        {/* Intentionally not rendered in a footer component */}
      </div>
    </section>
  );
}
