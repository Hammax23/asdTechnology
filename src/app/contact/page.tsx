import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ASD Technology - Web Development Canada",
  description:
    "Contact ASD Technology for web development, custom software, and digital marketing services in Canada. Get a free quote - we respond within 2 hours.",
  keywords: "contact web developer Canada, hire software developer Oakville, web development quote Toronto",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
   
    secondary: "24/7 Available",
    
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@asdtechnology.ca",
    secondary: "Quick Response",
    description: "We respond within 2 hours during business hours.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "231 Oak Park Blvd",
    secondary: "Oakville, ON L6H 7S8",
    description: "Open Mon–Sat, 9:00 AM – 6:00 PM.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon – Sat: 9 AM – 6 PM",
   
    
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="Contact Us"
        title="Let's"
        highlight="Connect"
        description="Have a question, need a quote, or want to book a service? We're here to help. Reach out through any channel below."
      />

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-navy-50/50 border border-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-gold-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-900 font-medium text-sm">{item.primary}</p>
                <p className="text-gray-500 text-sm">{item.secondary}</p>
                <p className="text-gray-400 text-xs mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — takes 3 cols (client component) */}
            <ContactForm />

            {/* Sidebar — takes 2 cols */}
            <div className="lg:col-span-2">
              {/* Quick Contact */}
              <div className="bg-gradient-to-b from-navy-950 to-navy-900 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-blue-200/40 text-sm mb-6 leading-relaxed">
                  Our team is ready to assist you. Call us directly or send a WhatsApp message for instant support.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+14164180528"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">416-418-0528</span>
                  </a>
                  <a
                    href="mailto:info@asdtechnology.ca"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">info@asdtechnology.ca</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
