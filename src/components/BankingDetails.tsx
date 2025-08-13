import React from "react";

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
      accent: "border-blue-600",
      dot: "bg-blue-600",
    },
    {
      bank: "BPI",
      holder: "John Gilbert Olmoguez",
      number: "9459 2709 62",
      accent: "border-red-600",
      dot: "bg-red-600",
    },
    {
      bank: "UnionBank",
      holder: "John Gilbert Olmoguez",
      number: "1093 2360 4027",
      accent: "border-orange-500",
      dot: "bg-orange-500",
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

        {/* Container Card */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {accounts.map((a) => (
                <li
                  key={a.bank}
                  className={`relative rounded-xl border border-gray-100 bg-white p-4 shadow-xs hover:shadow-sm transition-shadow duration-200 border-l-4 ${a.accent}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${a.dot}`}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {a.bank}
                        </h3>
                      </div>
                      <p className="mt-0.5 text-xs text-gray-500 truncate">
                        {a.holder}
                      </p>
                      <p className="mt-2 font-mono text-sm tracking-wider text-gray-800">
                        {a.number}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Small note to avoid footer placement (informational, no visual change) */}
        {/* Intentionally not rendered in a footer component */}
      </div>
    </section>
  );
}
