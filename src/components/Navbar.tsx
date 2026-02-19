"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-[40px] left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] sm:h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Adjust logo size: change height below (width auto-scales) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo3.png"
              alt="ASD Technologies"
              className="h-20 w-auto sm:h-24 md:h-[95px] md:w-[220px] max-w-full"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-gold-500"
                    : "text-gray-600 hover:text-gold-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-navy-900 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[120px] sm:top-[128px] z-40 transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative bg-white border-b border-gray-100 shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-50 text-gold-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gold-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
