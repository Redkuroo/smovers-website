"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Top hero-like row inside footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Large illustration (EPS with SVG fallback) */}
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

          {/* Center section - Spacer to align similar to screenshot (kept as subtle placeholder) */}
          <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
            <div className="w-64 h-24 rounded-lg border border-white/10 bg-white/5" />
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