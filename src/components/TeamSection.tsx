"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const team = [
  { name: "Engr. John Gilbert Olnmoguez", role: "Proprietor", image: "/team3.jpg" },
  { name: "Lydie Grace Rocero", role: "General Manager", image: "/ceo.jpg" },
  { name: "Jenny Reyes", role: "Operation Manager", image: "/team3.jpg" },
  { name: "Mark Melvin Dullas", role: "Cargo Releasing Team Leader", image: "/team3.jpg" },
  { name: "Teressa Conde", role: "Finance / Admin Staff", image: "/team3.jpg" },
  { name: "Genevieve Andales", role: "Human Resource Relation TL", image: "/team3.jpg" },
];

const MEMBERS_PER_PAGE = 3;

export default function TeamSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(team.length / MEMBERS_PER_PAGE);
  const paginatedTeam = team.slice(
    (page - 1) * MEMBERS_PER_PAGE,
    page * MEMBERS_PER_PAGE
  );

  // Touch swipe pagination (mobile)
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const SWIPE_THRESHOLD = 50; // pixels

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null) return;
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) {
      setPage((prev) => Math.min(totalPages, prev + 1));
    } else {
      setPage((prev) => Math.max(1, prev - 1));
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="site-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-blue-900">Our Team</h2>
        <div
          className="relative flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Left Chevron */}
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className={`hidden md:flex cursor-pointer absolute left-2 md:left-0 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === 1}
            aria-label="Previous team page"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8">
            {paginatedTeam.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow p-4 md:p-6 flex flex-col items-center w-full max-w-xs md:w-64">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full mb-3 md:mb-4 object-cover md:w-24 md:h-24" 
                />
                <h3 className="text-base md:text-lg font-semibold text-blue-800 text-center leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center mt-1">{member.role}</p>
              </div>
            ))}
          </div>
          {/* Right Chevron */}
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className={`hidden md:flex cursor-pointer absolute right-2 md:right-0 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === totalPages}
            aria-label="Next team page"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6 md:mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-8 h-8 md:w-9 md:h-9 rounded-full font-bold border-2 border-blue-900 text-xs md:text-base ${
                page === idx + 1
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 hover:bg-blue-100"
              } transition`}
              aria-current={page === idx + 1 ? "page" : undefined}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}