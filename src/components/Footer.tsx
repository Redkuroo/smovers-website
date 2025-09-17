"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Top hero-like row inside footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Large illustration (PNG) */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="w-full max-w-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/global-transportation-system-abstract-concept-vector-illustration.png"
                alt="Global transportation concept illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Quote text */}
          <div className="text-left">
            <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              LOVE WHAT YOU DO
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              We believe that with the right tools, anyone can turn their passion into an empire. So we made them.
            </p>
          </div>
        </div>
      </div>

      {/* Links area below the hero row */}
      <div className="max-w-7xl mx-auto px-6 pb-16 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left section - Logo and tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">EASOL</h2>
            <p className="text-lg md:text-xl font-semibold leading-snug uppercase opacity-90">
              Sell Experiences<br />
              Not Things
            </p>
          </div>

          {/* Center section - Subtle decorative SVG */}
          <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 96"
              role="img"
              aria-labelledby="footerDecorTitle footerDecorDesc"
              className="w-64 h-24"
            >
              <title id="footerDecorTitle">Logistics decorative graphic</title>
              <desc id="footerDecorDesc">Subtle white line-art with a globe, route lines, and container motif for visual balance.</desc>
              <defs>
                <style>{`
                  .s{stroke:#ffffff;fill:none;stroke-linecap:round;stroke-linejoin:round}
                  .b{stroke-width:2}
                  .m{stroke-width:1.25}
                  .t{stroke-width:0.8}
                  .faint{opacity:.25}
                  .muted{opacity:.6}
                  .dot{stroke-dasharray:4 4}
                `}</style>
              </defs>

              {/* faint grid */}
              <g className="faint">
                <path className="s t" d="M16 16 H240"/>
                <path className="s t" d="M16 48 H240"/>
                <path className="s t" d="M16 80 H240"/>
                <path className="s t" d="M16 16 V80"/>
                <path className="s t" d="M64 16 V80"/>
                <path className="s t" d="M112 16 V80"/>
                <path className="s t" d="M160 16 V80"/>
                <path className="s t" d="M208 16 V80"/>
              </g>

              {/* globe */}
              <g id="globe" transform="translate(40,48)">
                <circle className="s b" cx="0" cy="0" r="20"/>
                <ellipse className="s t muted" cx="0" cy="0" rx="20" ry="8"/>
                <path className="s t muted" d="M-12 -16 A20 20 0 0 0 -12 16"/>
                <path className="s t muted" d="M12 -16 A20 20 0 0 1 12 16"/>
                <path className="s t muted" d="M-20 0 H20"/>
              </g>

              {/* route lines with arrows */}
              <g id="route">
                <path className="s m dot" d="M72 52 C 104 36, 140 36, 172 48 S 220 68, 240 56"/>
                <path className="s t muted" d="M72 60 C 112 44, 150 54, 200 60"/>
                {/* arrows */}
                <path className="s m" d="M198 60 l10 -4 l-5 10"/>
                <path className="s m" d="M168 48 l9 -3 l-4 9"/>
              </g>

              {/* mini container motif */}
              <g id="mini-container" transform="translate(184,30)">
                <rect className="s m" x="0" y="0" width="44" height="14" rx="2"/>
                <path className="s t faint" d="M8 0 V14 M16 0 V14 M24 0 V14 M32 0 V14"/>
              </g>
            </svg>
          </div>

          {/* Right section - Navigation links in 3 columns */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-3 gap-8">
              <nav className="space-y-3 text-sm font-semibold uppercase tracking-wide">
                <a href="/company" className="block hover:opacity-80">About</a>
                <a href="#themes" className="block hover:opacity-80">Themes</a>
                <a href="#ex-commerce" className="block hover:opacity-80">Ex-Commerce</a>
                <a href="#inspiration" className="block hover:opacity-80">Inspiration</a>
              </nav>
              <nav className="space-y-3 text-sm font-semibold uppercase tracking-wide">
                <a href="#press" className="block hover:opacity-80">Press</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:opacity-80">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="block hover:opacity-80">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="block hover:opacity-80">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block hover:opacity-80">LinkedIn</a>
              </nav>
              <nav className="space-y-3 text-sm font-semibold uppercase tracking-wide">
                <a href="/faq" className="block hover:opacity-80">FAQ</a>
                <a href="/help" className="block hover:opacity-80">Help Centre</a>
                <a href="/careers" className="block hover:opacity-80">Careers</a>
                <a href="#contact" className="block hover:opacity-80">Contact</a>
                <a href="/acceptable-use" className="block hover:opacity-80">Acceptable Use</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and policy links */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Copyright */}
            <div className="text-white text-sm opacity-90">
              &copy; {new Date().getFullYear()} SMOvers Logistics Services. All rights reserved.
            </div>

            {/* Right - Policy links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a href="/privacy" className="hover:opacity-80">Privacy Policy</a>
              <a href="/terms" className="hover:opacity-80">Terms of Service</a>
              <a href="/acceptable-use" className="hover:opacity-80">Acceptable Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}