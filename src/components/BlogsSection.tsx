"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    title: "2nd Outreach Program",
    excerpt:
      "We are overjoyed to share the success of our 2nd Outreach Program, where we distributed school supplies to 106 selected students in need. This meaningful event was made even more special together with Solumi Delights - Tibungco, whose generous support helped bring more smiles and hope to our dear learners. A huge thank you to all the volunteers who made this possible. Your kindness creates ripples that go far beyond what we see today.",
    date: "2025-06-25",
    image: "/blog1.jpg",
  },
  {
    title: "Proud to Support RGS's Success Story",
    excerpt:
      "Thank you RGS for having SMOvers Logistics Services. We are very grateful for being part of your success.",
    date: "2024-07-24",
    image: "/blog2.jpg",
  },
  // Add more blog objects as needed
];

const POSTS_PER_PAGE = 1;

export default function BlogsSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = blogs.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <section className="py-8 px-2 md:py-16 md:px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Latest Blogs</h2>
        <div className="relative flex items-center justify-center space-y-10">
          {/* Left Chevron */}
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className={`absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === 1}
            aria-label="Previous post"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="w-full flex items-center justify-center">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.title}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Left: Image with overlay */}
                <div className="relative md:w-1/2 w-full min-h-[260px]">
                  <Image
                    src={blog.image || "/blog-placeholder.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#256D7B]/90 to-transparent px-6 py-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow">
                      {blog.title}
                    </h3>
                    <span className="text-xs md:text-sm text-yellow-200">
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                {/* Right: Content */}
                <div className="flex-1 flex flex-col justify-center p-6 md:p-10 bg-white">
                  <h3 className="text-3xl font-extrabold text-blue-900 mb-4 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-8 text-base md:text-lg">
                    {blog.excerpt}
                  </p>
                  <button
                    className="w-fit px-8 py-3 rounded bg-blue-600 text-white font-bold shadow hover:bg-blue-900 transition text-lg cursor-pointer"
                    type="button"
                  >
                    View Post
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Right Chevron */}
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className={`absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === totalPages}
            aria-label="Next post"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Pagination numbers only */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-9 h-9 cursor-pointer rounded-full font-bold border-2 border-blue-900 ${
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
