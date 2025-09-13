"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Create a properly-typed alias for motion.div so we can pass className and other props
// without triggering the `no-explicit-any` ESLint rule.
// (No alias needed anymore)

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Routes", href: "#routes" },
  { name: "Company", href: "#company" },
  { name: "Blogs", href: "#blogs" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SMOvers Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-blue-900">SMOvers</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-blue-900 hover:text-blue-600 font-medium transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-blue-900 hover:bg-blue-50"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile sidebar (sliding) */}
        <AnimatePresence>
          {open && (
            <aside className="fixed inset-y-0 right-0 w-72 bg-white shadow-lg z-50 md:hidden">
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                  <Link href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <Image src="/logo.png" alt="SMOvers Logo" width={36} height={36} className="rounded-full" />
                    <span className="font-bold text-lg text-blue-900">SMOvers</span>
                  </Link>
                  <button aria-label="Close navigation" onClick={() => setOpen(false)} className="p-2">
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-3 overflow-auto">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-blue-900 hover:text-blue-600 font-medium text-lg transition"
                    >
                      {link.name}
                    </a>
                  ))}

                  <div className="mt-6 border-t pt-4">
                    <a href="#contact" onClick={() => setOpen(false)} className="block text-blue-700 font-semibold">
                      Contact
                    </a>
                  </div>
                </nav>
                </div>
              </motion.div>
            </aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
