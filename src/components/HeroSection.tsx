"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { ChevronLeft, ChevronRight, Phone, MapPin, User, CalendarClock } from "lucide-react";

import { HERO_HIGHLIGHTS } from "@/constants/heroHighlights";
import { CAL_LINK, CAL_URL } from "@/utils/config";

const VISIBLE_CARDS = 4;

const wrapIndex = (index: number, length: number) => {
  return (index % length + length) % length;
};

export default function HeroSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-advance carousel when possible
  useEffect(() => {
    if (!canNavigate || isPaused) return;
    const id = setInterval(() => {
      setStartIndex((prev) => wrapIndex(prev + 1, totalHighlights));
    }, 4000);
    return () => clearInterval(id);
  }, [canNavigate, isPaused, totalHighlights]);

  // Pause when tab is hidden; resume when visible
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

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
    const bookingSlug = CAL_LINK;
    const bookingUrl = `https://cal.com/${bookingSlug}`;
    try {
      // @ts-expect-error Cal.com embed API is injected at runtime
      if (typeof window !== 'undefined' && window.Cal) {
        // @ts-expect-error Cal.com UI API call
        window.Cal("ui", {
          styles: { branding: { brandColor: "#1e40af" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        try {
          // @ts-expect-error Cal.com new open API
          window.Cal("open", { calLink: bookingSlug });
        } catch {
          // @ts-expect-error Cal.com legacy open modal API
          window.Cal("openModal", bookingSlug);
        }
        return;
      }
    } catch {}
    if (typeof window !== 'undefined') {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="w-full">
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
      />
  <div className="flex flex-col md:flex-row min-h-[70vh] md:min-h-[85vh] lg:min-h-screen">
        {/* Left: Gradient + Text */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white flex items-center px-6 sm:px-10 py-16 md:py-0">
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
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); handleBookMeeting(); }}
                aria-label="Book a meeting"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
                role="button"
              >
                <CalendarClock className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                <span>Book a Meeting</span>
              </a>
            </div>
            {/* Quick contact details */}
            <div className="mt-8 md:mt-10 space-y-3 text-sm md:text-base">
              <a
                href="tel:0917-772-3701"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">0917-772-3701</span>
              </a>
              <a
                href="https://maps.google.com/?q=Km%2010%2C%20Purok%206%2C%20Buhisan%2C%20Tibungco%2C%20Davao%20City"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <MapPin className="h-5 w-5" />
                <span>Km 20, Purok 6, Buhisan, Tibungco, Davao City</span>
              </a>
              <div className="inline-flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>
                  Contact Person: <span className="font-medium">Lydie Grace Rocero</span>
                </span>
              </div>
                  <div className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>
                  Viber Number: <span className="font-medium">0917-772-3701 | 0966-081-1277</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Video (fallback to image) */}
  <div className="md:w-3/5 relative h-80 md:h-auto no-global-radius">
          {!videoError ? (
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero.jpg"
              onError={() => setVideoError(true)}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/hero.jpg"
              alt="Cargo vessel and logistics background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-none"
            />
          )}
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
              <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-live="polite"
              >
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
