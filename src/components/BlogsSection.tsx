import React from "react";

const blogs = [
  {
    title: "How to Choose the Right Logistics Partner",
    excerpt: "Key factors to consider when selecting a logistics provider for your business.",
    date: "2025-06-15",
  },
  {
    title: "The Future of Route Optimization",
    excerpt: "Emerging technologies that are transforming delivery efficiency.",
    date: "2025-05-30",
  },
];

export default function BlogsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.title} className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition">
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
