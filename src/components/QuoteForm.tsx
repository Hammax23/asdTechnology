"use client";

import { useState } from "react";
import {
  Mail,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function QuoteForm() {
  const [serviceType, setServiceType] = useState<"technology" | "chauffeur">(
    "technology"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specificService: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType,
          formType: "quote",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          specificService: "",
          pickupLocation: "",
          dropoffLocation: "",
          pickupDate: "",
          pickupTime: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all duration-200";

  if (submitStatus === "success") {
    return (
      <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl shadow-black/10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Thank You!</h3>
        <p className="text-blue-200/60 text-sm mb-4">
          Your quote request has been submitted successfully. We will get back to you within 2 hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-gold-400 hover:text-gold-300 text-sm font-medium"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

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

      {submitStatus === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
          <p className="text-red-400 text-sm">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
              Full Name
            </label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={inputClass} required />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={inputClass}
              required
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
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 416 000 0000"
            className={inputClass}
            required
          />
        </div>

        

        {/* Specific Service */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
            Specific Service
          </label>
          <select
            key={serviceType}
            name="specificService"
            value={formData.specificService}
            onChange={handleInputChange}
            required
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
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Toronto Airport"
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
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Downtown Hotel"
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
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
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
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
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
            name="message"
            value={formData.message}
            onChange={handleInputChange}
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
          disabled={isSubmitting}
          className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              {serviceType === "chauffeur" ? "Book Chauffeur" : "Get Free Quote"}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <p className="text-center text-blue-200/30 text-[11px] mt-4">
        We respond within 2 hours · No obligations
      </p>
    </div>
  );
}
