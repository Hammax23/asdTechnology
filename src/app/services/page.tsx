import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe2,
  Palette,
  Cloud,
  Search,
  Megaphone,
  Plane,
  Building,
  Clock,
  Settings,
  Wifi,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Web Development & Digital Services | ASD Technology Canada",
  description:
    "Professional web development, custom software, e-commerce solutions, SEO, and digital marketing services in Oakville, Canada. Transform your business with ASD Technology.",
  keywords: "web development services, custom software development, e-commerce website, SEO services Canada, digital marketing Oakville, IT consulting Toronto",
};

const techServices = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Tailored websites and web applications built to match your brand, goals, and business workflows.",
    features: [
      "Corporate & portfolio websites",
      "Custom web applications",
      "E‑commerce platforms",
      "Performance optimization",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Globe2,
    title: "WordPress/CMS Development",
    description:
      "Fast, secure, and easy‑to‑manage WordPress and CMS solutions for blogs, business sites, and portals.",
    features: [
      "Custom WordPress themes",
      "CMS setup & migration",
      "Content management workflows",
      "Speed & security hardening",
    ],
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Modern, user‑focused interfaces and experiences that make your digital products intuitive and engaging.",
    features: [
      "Wireframes & prototypes",
      "Web & mobile UI design",
      "Design systems & style guides",
      "User‑centric experience flows",
    ],
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment strategies to keep your applications fast, secure, and reliable.",
    features: ["Cloud migration", "Hosting & deployment", "DevOps pipelines", "Monitoring & alerts"],
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Search engine optimization that improves visibility, drives organic traffic, and grows your online presence.",
    features: [
      "On‑page & technical SEO",
      "Keyword & content strategy",
      "Local SEO optimization",
      "SEO audits & reporting",
    ],
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Performance‑driven campaigns across search, social, and paid channels that turn visitors into customers.",
    features: [
      "Social media marketing",
      "Paid ads (Google & Meta)",
      "Content & email campaigns",
      "Analytics & conversion tracking",
    ],
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-400",
  },
];

const chauffeurServices = [
  {
    icon: Wifi,
    title: "Smart Connected Vehicles",
    description:
      "Complimentary WiFi for productivity and GPS tracking for safety and security in all vehicles.",
  },
  {
    icon: Building,
    title: "Dedicated Account Management",
    description:
      "Personalized support with tailored preferences, consolidated billing, and 24/7 priority assistance.",
  },
  {
    icon: Shield,
    title: "Premium Safety & Privacy",
    description:
      "Background-checked drivers, secure routes, real-time tracking, and strict confidentiality protocols.",
  },
  {
    icon: Plane,
    title: "Global Reservations Network",
    description:
      "Multi-city coverage with simple booking and consistent premium service standards worldwide.",
  },
  {
    icon: Clock,
    title: "VIP Meet & Greet Experience",
    description:
      "Professional airport and lobby service with luggage assistance and seamless guest coordination.",
  },
  {
    icon: Settings,
    title: "Private Jet & Luxury Fleet Coordination",
    description:
      "Seamless coordination with private jets featuring executive sedans, luxury SUVs, and specialty vehicles.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="Our Services"
        title="Digital & Technology"
        highlight=" Services"
        description="Discover our full range of digital solutions — from web development and SEO to cloud and marketing."
      />

      {/* Technology Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-16">
            <div>
              <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
                Digital Services
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Digital & Technology Services
              </h2>
              <p className="mt-3 text-gray-500 text-lg max-w-2xl">
                Modern web, cloud, and marketing services designed to grow your brand and support your business.
              </p>
            </div>
            <Link
              href="/services/technology"
              className="group inline-flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-600 transition-colors"
            >
              View All Tech Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs bg-navy-50 text-navy-700 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeur Services */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-16">
            <div>
              <span className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200">
                Chauffeur & Charter
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Executive Chauffeured & Private Chartered Services
              </h2>
              <p className="mt-3 text-blue-100/50 text-lg max-w-2xl">
                Executive ground transportation, safety‑focused travel, and seamless coordination with private chartered flights.
              </p>
            </div>
            <Link
              href="/services/chauffeur"
              className="group inline-flex items-center gap-2 text-blue-300 font-semibold hover:text-white transition-colors"
            >
              View All Chauffeur Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chauffeurServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white/5 border border-white/5 rounded-2xl p-7 hover:bg-white/8 hover:border-blue-400/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-blue-200/40 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Every business is unique. Let us create a tailored package that
            perfectly fits your technology and transportation needs.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            Request a Custom Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
