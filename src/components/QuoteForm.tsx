"use client";

import { useState } from "react";
import {
  Mail,
  Cpu,
  Car,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";

export default function QuoteForm() {
  const [serviceType, setServiceType] = useState<"technology" | "chauffeur">(
    "technology"
  );

  const inputClass =
    "w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all duration-200";

  return (
    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl shadow-black/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base leading-tight">
            Request a Quote
          </h3>
          <p className="text-blue-200/40 text-xs">
            Get a free estimate for your needs
          </p>
        </div>
      </div>

      <form className="space-y-3.5">
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
              Full Name
            </label>
            <input type="text" placeholder="John Doe" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+92 300 0000000"
            className={inputClass}
          />
        </div>

        

        {/* Specific Service */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
            Specific Service
          </label>
          <select
            key={serviceType}
            className={`${inputClass} text-gray-400 appearance-none [&>option]:bg-navy-950 [&>option]:text-white [&>option]:py-2`}
          >
            {serviceType === "technology" ? (
              <>
                <option value="">Select a tech service</option>
                <option value="software-dev">Custom Software Development</option>
                <option value="web-dev">Website Development</option>
                <option value="ecommerce-dev">E‑Commerce Website Development</option>
                <option value="web-app-dev">Web Application Development</option>
                <option value="landing-page">Landing Page / Portfolio Website</option>
                <option value="wordpress-dev">WordPress / CMS Development</option>
                <option value="ui-ux">UI/UX Design for Web</option>
                <option value="seo">SEO Services</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="tech-support">Technical Support</option>
              </>
            ) : (
              <>
                <option value="">Select a chauffeur service</option>
                <option value="airport">Airport Transfer</option>
                <option value="corporate">Corporate Travel</option>
                <option value="event">Event Transportation</option>
                <option value="hourly">Hourly Hire</option>
                <option value="long-distance">Long Distance</option>
              </>
            )}
          </select>
        </div>

        {/* Chauffeur-specific fields */}
        <div
          className={`grid gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
            serviceType === "chauffeur"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-4">
              {/* Pickup & Drop-off */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="e.g. Islamabad Airport"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                    Drop-off Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="e.g. Serena Hotel"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="date"
                      className={`${inputClass} pl-10 [color-scheme:dark]`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="time"
                      className={`${inputClass} pl-10 [color-scheme:dark]`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
            {serviceType === "chauffeur"
              ? "Additional Notes"
              : "Project Details"}
          </label>
          <textarea
            rows={3}
            placeholder={
              serviceType === "chauffeur"
                ? "Any special requirements (e.g. child seat, luggage)..."
                : "Briefly describe your project requirements..."
            }
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          {serviceType === "chauffeur" ? "Book Chauffeur" : "Get Free Quote"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-center text-blue-200/30 text-[11px] mt-4">
        We respond within 2 hours · No obligations
      </p>
    </div>
  );
}
