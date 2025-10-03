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
    },
    {
      bank: "BPI",
      holder: "John Gilbert Olmoguez",
      number: "9459 2709 62",
      logo: "/bpi%20logo.png",
    },
    {
      bank: "UnionBank",
      holder: "John Gilbert Olmoguez",
      number: "1093 2360 4027",
      logo: "/unionbank%20logo.png",
    },
  ] as const;

  return (
    <section className="w-full bg-blue-50/70">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
          <div className="max-w-sm space-y-3 text-black">
    
            <h2 className="text-2xl font-semibold text-blue-900 sm:text-3xl">
              Banking Details
            </h2>
            <p className="text-sm leading-relaxed text-black/70">
              We accept deposits through these partner banks. Please include your
              transaction reference when sending proof of payment.
            </p>
          </div>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <li key={account.bank} className="space-y-3 text-black">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={account.logo}
                      alt={`${account.bank} logo`}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain"
                    />
                  </span>
                  <h3 className="text-lg font-semibold text-black">
                    {account.bank}
                  </h3>
                </div>

                <div className="space-y-1 pl-[3.75rem] text-sm">
                  <p className="uppercase tracking-[0.25em] text-black/60">
                    Account Number
                  </p>
                  <p className="font-mono text-base font-semibold tracking-widest text-black">
                    {account.number}
                  </p>
                  <p className="text-black/60">Account Name</p>
                  <p className="font-medium text-black">{account.holder}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
