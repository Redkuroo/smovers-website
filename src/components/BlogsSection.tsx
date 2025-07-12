import React from "react";

import Image from "next/image";

const blogs = [
  {
    title: "2nd Outreach Program",
    excerpt: "We are overjoyed to share the success of our 2nd Outreach Program, where we distributed school supplies to 106 selected students in need. This meaningful event was made even more special together with Solumi Delights - Tibungco, whose generous support helped bring more smiles and hope to our dear learners.A huge thank you to all the volunteers who made this possible. Your kindness creates ripples that go far beyond what we see today.",
    date: "2025-06-25",
    image: "/blog1.jpg",
  },
  {
    title: "Proud to Support RGS's Success Story",
    excerpt: "Thank you RGS for having SMOvers Logistics Services. We are very grateful for being part of your success.",
    date: "2024-07-24",
    image: "/blog2.jpg",
  },

];

export default function BlogsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.title} className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col">
              <div className="mb-4 w-full h-48 relative rounded overflow-hidden">
                <Image
                  src={blog.image || "/blog-placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{blog.title}</h3>
              <p className="text-gray-700 mb-2">{blog.excerpt}</p>
              <span className="text-xs text-gray-500">{blog.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
