"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BLOGS } from "@/constants/blogs";
import { formatDisplayDate } from "@/utils/date";

const POSTS_PER_PAGE = 1;

export default function BlogsSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BLOGS.length / POSTS_PER_PAGE);
  const paginatedBlogs = BLOGS.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
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
      // swipe left -> next page
      setPage((prev) => Math.min(totalPages, prev + 1));
    } else {
      // swipe right -> prev page
      setPage((prev) => Math.max(1, prev - 1));
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
  <div className="site-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">Latest Blogs</h2>
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
            className={`hidden md:flex cursor-pointer absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 shadow-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === 1}
            aria-label="Previous post"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <div className="w-full flex items-center justify-center max-w-4xl">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.title}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full"
              >
                {/* Left: Image with overlay */}
                <div className="relative w-full overflow-hidden md:w-1/2">
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[16rem]">
                    <Image
                      src={blog.image || "/blog-placeholder.jpg"}
                      alt={`SMOvers blog post: ${blog.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#256D7B]/90 to-transparent px-4 py-3 md:px-6 md:py-4">
                      <h3 className="text-sm md:text-lg font-bold text-white drop-shadow leading-tight mb-1">
                        {blog.title}
                      </h3>
                      <span className="text-xs md:text-sm text-yellow-200 font-medium">
                        {formatDisplayDate(blog.date)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Right: Content */}
                <div className="flex-1 flex flex-col justify-center p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-2xl font-extrabold text-blue-900 mb-3 md:mb-4 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                    {blog.excerpt}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit bg-blue-900 text-white rounded-md px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base hover:bg-blue-800 transition duration-300 shadow-md"
                  >
                    View Post
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Chevron */}
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className={`hidden md:flex cursor-pointer absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 shadow-lg ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === totalPages}
            aria-label="Next post"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* Pagination numbers only */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full font-bold border-2 border-blue-900 text-xs md:text-base transition-all duration-200 ${
                page === idx + 1
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-white text-blue-900 hover:bg-blue-100 hover:shadow-md"
              }`}
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
