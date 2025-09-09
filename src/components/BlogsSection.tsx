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
    link: "https://www.facebook.com/share/p/1CApQ8hSMB/",
  },
  {
    title: "Proud to Support RGS's Success Story",
    excerpt:
      "Thank you RGS for having SMOvers Logistics Services. We are very grateful for being part of your success.",
    date: "2024-07-24",
    image: "/blog2.jpg",
    link: "https://www.facebook.com/share/p/168sLvMHbF/",
  },
  {
    title: "Sealed and secured cargo",
    excerpt:
      "The shipment has been carefully sealed, secured, and prepared for its scheduled departure this Thursday, bound for Manila from Davao",
    date: "2023-09-13",
    image: "/blog3.jpg",
    link: "https://www.facebook.com/share/p/1BBPrP5edX/",
  },
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
    <section className="py-6 px-2 md:py-16 md:px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-blue-900">Latest Blogs</h2>
        <div className="relative flex items-center justify-center px-6 md:px-0">
          {/* Left Chevron */}
        
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className={`cursor-pointer absolute left-0 md:left-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === 1}
            aria-label="Previous post"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <div className="w-full flex items-center justify-center">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.title}
                className="flex flex-col md:flex-row bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden max-w-sm md:max-w-none mx-auto"
              >
                {/* Left: Image with overlay */}
                <div className="relative md:w-1/2 w-full min-h-[200px] md:min-h-[260px]">
                  <Image
                    src={blog.image || "/blog-placeholder.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#256D7B]/90 to-transparent px-3 py-2 md:px-6 md:py-4">
                    <h3 className="text-sm md:text-2xl font-bold text-white drop-shadow leading-tight">
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
                <div className="flex-1 flex flex-col justify-center p-4 md:p-10 bg-white">
                  <h3 className="text-lg md:text-3xl font-extrabold text-blue-900 mb-3 md:mb-4 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-8 text-sm md:text-lg line-clamp-4 md:line-clamp-none">
                    {blog.excerpt}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit bg-blue-900 text-white rounded-lg px-6 py-4 font-bold text-lg hover:bg-blue-800 transition duration-300 shadow-lg text-center"
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
            className={`cursor-pointer absolute right-0 md:right-0 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full font-bold border-2 border-blue-900 bg-white text-blue-900 hover:bg-blue-100 transition top-1/2 -translate-y-1/2 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={page === totalPages}
            aria-label="Next post"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
        {/* Pagination numbers only */}
        <div className="flex justify-center mt-6 md:mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-8 h-8 md:w-9 md:h-9 cursor-pointer rounded-full font-bold border-2 border-blue-900 text-xs md:text-base ${
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
