import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Routes", href: "#routes" },
  { name: "Company", href: "#company" },
  { name: "Blogs", href: "#blogs" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SMOvers Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-blue-900">SMOvers</span>
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-blue-900 hover:text-blue-600 font-medium transition">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
