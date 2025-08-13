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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-900">
            Banking Details
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accounts.map((a) => (
            <li key={a.bank}>
              <div
                className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 text-white shadow-lg ring-1 ring-white/10 bg-gradient-to-br ${a.gradient} transition-transform duration-200 hover:-translate-y-0.5`}
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
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/30 ring-1 ring-white/50 text-white/90">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M6 9c1.5 1.5 1.5 4.5 0 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 7c2 2 2 8 0 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5c3.5 3.5 3.5 10.5 0 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3c5 5 5 14 0 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 2c3 3 3 17 0 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                    </svg>
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
