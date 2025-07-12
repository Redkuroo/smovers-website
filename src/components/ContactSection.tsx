import React from "react";

export default function ContactSection() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Contact Us</h3>
      <p className="text-gray-700 text-center mb-4">Have questions or need a quote? Reach out to us and our team will get back to you promptly.</p>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" required />
        <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" required />
        <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4} required />
        <button type="submit" className="bg-blue-900 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition">Send Message</button>
      </form>
       <div className="mt-6 text-center text-gray-600 text-sm">
        Call us <a href="smoverslogistics@gmail.com" className="text-blue-700 underline">
0917 772 3701</a>
      </div>
      <div className="mt-6 text-center text-gray-600 text-sm">
        Or email us at <a href="smoverslogistics@gmail.com" className="text-blue-700 underline">info@smovers.com</a>
      </div>
    </div>
  );
}
