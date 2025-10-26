"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { HERO_HIGHLIGHTS } from "@/constants/heroHighlights";

const VISIBLE_CARDS = 4;

const wrapIndex = (index: number, length: number) => {
  return (index % length + length) % length;
};

export default function HeroSection() {
  const [startIndex, setStartIndex] = useState(0);
  const totalHighlights = HERO_HIGHLIGHTS.length;
  const canNavigate = totalHighlights > VISIBLE_CARDS;

  const handlePrev = () => {
    if (!canNavigate) return;
    setStartIndex((prev) => wrapIndex(prev - 1, totalHighlights));
  };

  const handleNext = () => {
    if (!canNavigate) return;
    setStartIndex((prev) => wrapIndex(prev + 1, totalHighlights));
  };

  const visibleHighlights = useMemo(() => {
    if (totalHighlights <= VISIBLE_CARDS) {
      return HERO_HIGHLIGHTS;
    }

    return Array.from({ length: VISIBLE_CARDS }, (_, offset) => {
      const index = wrapIndex(startIndex + offset, totalHighlights);
      return HERO_HIGHLIGHTS[index];
    });
  }, [startIndex, totalHighlights]);

  const primaryCardIndex = useMemo(() => {
    if (visibleHighlights.length === 0) return -1;
    if (visibleHighlights.length === 1) return 0;
    return Math.min(1, visibleHighlights.length - 1);
  }, [visibleHighlights.length]);

  const handleBookMeeting = () => {
    // @ts-expect-error Cal.com embed API is injected at runtime
    if (typeof window !== 'undefined' && window.Cal) {
      // @ts-expect-error Cal.com UI API call
      window.Cal("ui", {
        "styles": {"branding":{"brandColor":"#1e40af"}},
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
      // @ts-expect-error Cal.com open modal API call
      window.Cal("openModal", "smovers-logistics/30min"); // Replace with your Cal.com username/event
    } else {
      // Fallback: redirect to Cal.com page
      window.open('https://cal.com/smovers-logistics/30min', '_blank');
    }
  };

  return (
    <section className="w-full relative">
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] relative">
        {/* Decorative Curved Arrow Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block overflow-hidden">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Main curved arrow path - counterclockwise flow */}
            <path
              d="M 200 150 Q 400 100 600 200 T 950 500 Q 1000 600 900 700"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="20 10"
            />
            {/* Arrowhead pointing counterclockwise */}
            <path
              d="M 900 700 L 920 680 L 890 670 Z"
              fill="rgba(255, 255, 255, 0.15)"
            />
            {/* Secondary accent curve for depth */}
            <path
              d="M 180 180 Q 380 130 580 230 T 930 520"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Left: Gradient + Text */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white flex items-center px-6 sm:px-10 py-16 md:py-0 relative z-20">
          <div className="w-full max-w-xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SMOvers Logistics Services
            </h1>
            <p className="text-lg md:text-xl mb-4 font-medium tracking-wide">
              Freight Forwarding Company
            </p>
            <p className="text-base md:text-lg italic mb-8">
              That organizes shipment from one place to another nationwide.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-sm md:text-base"
              >
                Contact Us
              </a>
              <button
                onClick={handleBookMeeting}
                className=" text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base border-2 border-blue-600 hover:border-blue-700 cursor-pointer"
              >
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-3/5 relative h-64 md:h-auto no-global-radius z-20">
          <Image
            src="/hero.jpg"
            alt="Cargo vessel and logistics background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-none"
          />
          <div className="absolute inset-0 pointer-events-none bg-black/20 md:bg-black/10 rounded-none no-global-radius" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8 pointer-events-none">
            <div className="pointer-events-auto flex items-center justify-end gap-2 mb-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canNavigate}
                className="rounded-full bg-white/80 p-2 text-blue-900 shadow-md transition hover:bg-white disabled:cursor-not-allowed disabled:text-blue-300 disabled:opacity-70"
                aria-label="Show previous highlight"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canNavigate}
                className="rounded-full bg-white/80 p-2 text-blue-900 shadow-md transition hover:bg-white disabled:cursor-not-allowed disabled:text-blue-300 disabled:opacity-70"
                aria-label="Show next highlight"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="pointer-events-auto">
              <div className="relative w-full overflow-hidden">
                <div className="flex w-max gap-3 sm:gap-4 justify-end translate-x-8 sm:translate-x-12 lg:translate-x-16">
                  {visibleHighlights.map((highlight, index) => {
                    const isPrimary = index === primaryCardIndex;
                    return (
                      <article
                        key={highlight.title}
                        className={`relative w-32 sm:w-36 lg:w-40 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition ${
                          isPrimary
                            ? "scale-105 ring-2 ring-white"
                            : "opacity-80 ring-1 ring-white/40"
                        }`}
                      >
                        <div className="relative h-24 w-full sm:h-28">
                          <Image
                            src={highlight.image}
                            alt={highlight.alt}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
