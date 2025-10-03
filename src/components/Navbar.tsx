"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type MotionProps } from "framer-motion";


// Safe alias: allow standard div props + MotionProps without using `any`
type DivMotionProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
// Cast through unknown to satisfy types without `any`
const MotionDiv = motion.div as unknown as React.FC<DivMotionProps>;

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow sticky top-0 z-50 no-global-radius">
      <div className="site-container flex items-center justify-between py-3">
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SMOvers Logo" width={40} height={40} className="rounded-none no-global-radius" />
          <span className="font-bold text-xl text-blue-900">SMOvers</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`font-medium transition relative ${
                  isActive 
                    ? "text-blue-600" 
                    : "text-blue-900 hover:text-blue-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <MotionDiv
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 text-blue-900 hover:bg-blue-50 rounded-none no-global-radius"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile full-screen overlay */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/95 z-50 md:hidden"
                onClick={() => setOpen(false)}
              />
              
              {/* Mobile menu content */}
              <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-50 md:hidden flex flex-col no-global-radius"
              >
                {/* Header with close button */}
                <div className="flex items-center justify-between px-6 py-4">
                  <Link href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <Image src="/logo.png" alt="SMOvers Logo" width={36} height={36} className="rounded-none no-global-radius" />
                    <span className="font-bold text-lg text-white">SMOvers</span>
                  </Link>
                  <button 
                    aria-label="Close navigation" 
                    onClick={() => setOpen(false)} 
                    className="p-2 text-white hover:bg-white/10 rounded-none no-global-radius transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <MotionDiv
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="relative group"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`text-2xl font-medium transition-colors relative z-10 ${
                            isActive 
                              ? "text-blue-400" 
                              : "text-white hover:text-blue-300"
                          }`}
                        >
                          {link.name}
                        </Link>
                        <MotionDiv
                          className={`absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-none no-global-radius transition-opacity ${
                            isActive 
                              ? "bg-blue-400 opacity-100" 
                              : "bg-blue-400 opacity-0 group-hover:opacity-100"
                          }`}
                          initial={false}
                          animate={{ scale: isActive ? [0, 1.2, 1] : [0, 1.2, 1] }}
                          transition={{ duration: 0.2 }}
                        />
                      </MotionDiv>
                    );
                  })}

                  {/* Contact section */}
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 + 0.2, duration: 0.3 }}
                    className="mt-12 text-center"
                  >
                    <a 
                      href="#contact" 
                      onClick={() => setOpen(false)} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-none no-global-radius font-semibold transition-colors"
                    >
                      Get In Touch
                    </a>
                  </MotionDiv>
                </nav>

                {/* Footer info */}
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="px-6 py-6 text-center text-gray-400 text-sm border-t border-gray-800 no-global-radius"
                >
                  <p>SMOvers Logistics Services</p>
                  <p className="mt-1">0917-772-3701</p>
                </MotionDiv>
              </MotionDiv>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}



