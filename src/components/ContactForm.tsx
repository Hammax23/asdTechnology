"use client";

import { useState } from "react";
import {
  MessageSquare,
  Cpu,
  Car,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

type ServiceType = "technology" | "chauffeur";

export default function ContactForm() {
  const [serviceType, setServiceType] = useState<ServiceType>("technology");

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all";

  return (
    <div className="lg:col-span-3">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
          <p className="text-gray-500 text-sm">
            Fill in the form and we&apos;ll get back to you shortly.
          </p>
        </div>
      </div>

      <form className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+92 300 0000000"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              placeholder="Your company name"
              className={inputClass}
            />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-3">
            Service Category
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "technology", label: "Technology", icon: Cpu },
              { value: "chauffeur", label: "Chauffeur", icon: Car },
            ].map((opt) => {
              const checked = serviceType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setServiceType(opt.value as ServiceType)}
                  className={`flex flex-col items-center gap-2 border rounded-xl py-4 px-3 transition-all ${
                    checked
                      ? "border-gold-400 bg-gold-400/5"
                      : "border-gray-200 hover:border-gold-300"
                  }`}
                >
                  <opt.icon
                    className={`w-5 h-5 ${
                      checked ? "text-gold-500" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      checked ? "text-gold-600" : "text-gray-500"
                    }`}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chauffeur-specific fields */}
        {serviceType === "chauffeur" && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Islamabad Airport"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Drop-off Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Serena Hotel"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Select Car
              </label>
              <select className={inputClass}>
                <option value="">Choose a vehicle type</option>
                <option value="executive-sedan">Executive Sedan</option>
                <option value="luxury-sedan">Luxury Sedan</option>
                <option value="suv">Premium SUV</option>
                <option value="van">Luxury Van</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="date" className={`${inputClass} pl-9`} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Pickup Time
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="time" className={`${inputClass} pl-9`} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specific Service */}
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-2">
            Specific Service
          </label>
          <select className={inputClass} key={serviceType}>
            <option value="">Select a service</option>
            {serviceType === "technology" ? (
              <>
                <option value="software-dev">Software Development</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="data">Data & Analytics</option>
                <option value="support">24/7 Tech Support</option>
              </>
            ) : (
              <>
                <option value="airport">Airport Transfer</option>
                <option value="corporate">Corporate Travel</option>
                <option value="event">Event Transportation</option>
                <option value="hourly">Hourly Hire</option>
                <option value="long-distance">Long Distance</option>
                <option value="custom">Custom Solution</option>
              </>
            )}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-2">
            Your Message
          </label>
          <textarea
            rows={5}
            placeholder="Tell us about your project or transportation needs..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          Send Message
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

