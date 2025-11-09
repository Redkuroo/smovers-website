"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Top hero-like row inside footer */}
  <div className="site-container pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Large illustration (PNG) */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="w-full max-w-3xl -mt-8 md:-mt-10 lg:-mt-16">
              <Image
                src="/footer.png"
                alt="Illustration of logistics and global shipping"
                width={1600}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>

          {/* Right: Quote text */}
          <div className="text-left">
            <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              MOVE WHAT MATTERS
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
             With the right tools and the right partner, businesses can move faster, farther, and smarter. That’s why we built them.
            </p>
          </div>
        </div>
      </div>

      {/* Links area below the hero row */}
  <div className="site-container pb-16 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left section - Logo and tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">SMOvers</h2>
            <p className="text-lg md:text-xl font-semibold leading-snug uppercase opacity-90">
              Deliver Experiences<br />
              Not Just Packages
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
                <Link href="/#services" className="block hover:opacity-80">Services</Link>
                <Link href="/#routes" className="block hover:opacity-80">Routes</Link>
                <Link href="/#company" className="block hover:opacity-80">Company</Link>
              </nav>
              <nav className="space-y-3 text-sm font-semibold uppercase tracking-wide">
                <Link href="/#blogs" className="block hover:opacity-80">Blogs</Link>
                <Link href="/#team" className="block hover:opacity-80">Team</Link>
                <Link href="/#contact" className="block hover:opacity-80">Contact</Link>
              </nav>
              <nav className="space-y-3 text-sm font-semibold uppercase tracking-wide">
              
              
                <a href="https://www.facebook.com/smoverslogistics" target="_blank" rel="noreferrer" className="block hover:opacity-80">Facebook</a>
               
              </nav>
          
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and policy links */}
  <div className="border-t border-white/20 no-global-radius">
  <div className="site-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Copyright */}
            <div className="text-white text-sm opacity-90">
              &copy; {new Date().getFullYear()} SMOvers Logistics Services. All rights reserved.
            </div>

            {/* Right - Policy links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy" className="hover:opacity-80">Privacy Policy</Link>
              <Link href="/terms" className="hover:opacity-80">Terms of Service</Link>
              <Link href="/acceptable-use" className="hover:opacity-80">Acceptable Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}