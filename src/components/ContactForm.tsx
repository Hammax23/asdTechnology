"use client";

import { useState } from "react";
import {
  MessageSquare,
  Cpu,
  Car,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

type ServiceType = "technology" | "chauffeur";

export default function ContactForm() {
  const [serviceType, setServiceType] = useState<ServiceType>("technology");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    specificService: "",
    pickupLocation: "",
    dropoffLocation: "",
    carType: "",
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
          formType: "contact",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          specificService: "",
          pickupLocation: "",
          dropoffLocation: "",
          carType: "",
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
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all";

  if (submitStatus === "success") {
    return (
      <div className="lg:col-span-3 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-navy-900 font-bold text-xl mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm mb-4">
          Thank you for contacting us. We will get back to you within 2 hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-gold-500 hover:text-gold-600 text-sm font-medium"
        >
          Send Another Message
        </button>
      </div>
    );
  }

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

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-sm">Something went wrong. Please try again or contact us directly at info@asdtechnology.ca</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className={inputClass}
              required
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
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 416 000 0000"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
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
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Toronto Airport"
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
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Downtown Hotel"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Select Car
              </label>
              <select name="carType" value={formData.carType} onChange={handleInputChange} className={inputClass}>
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
                  <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} className={`${inputClass} pl-9`} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Pickup Time
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleInputChange} className={`${inputClass} pl-9`} />
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
          <select name="specificService" value={formData.specificService} onChange={handleInputChange} required className={inputClass} key={serviceType}>
            <option value="">Select a service</option>
            {serviceType === "technology" ? (
              <>
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
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project or transportation needs..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

