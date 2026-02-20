"use client";

import { Mail, Phone } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-navy-950 to-navy-900 border-b border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-end py-2.5 gap-6">
          {/* Email */}
          <a 
            href="mailto:info@asdtechnology.ca"
            className="flex items-center gap-2 text-blue-200/80 hover:text-gold-400 transition-colors duration-200 group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium hidden sm:inline">info@asdtechnology.ca</span>
          </a>
          
          {/* Separator */}
          <div className="w-px h-4 bg-blue-300/20"></div>
          
          {/* Phone */}
          <a 
            href="tel:+14164180528"
            className="flex items-center gap-2 text-blue-200/80 hover:text-gold-400 transition-colors duration-200 group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">416-418-0528</span>
          </a>
        </div>
      </div>
    </div>
  );
}
