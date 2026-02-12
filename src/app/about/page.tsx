import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Star,
  Target,
  Heart,
  Eye,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us | ASD Technology",
  description:
    "Learn about ASD Technology — a decade of excellence in technology solutions and premium chauffeur services.",
};

const values = [
  { icon: Target, title: "Mission", description: "To deliver innovative technology solutions and world-class chauffeur services that exceed expectations and empower our clients to achieve more." },
  { icon: Eye, title: "Vision", description: "To be the most trusted name in technology and premium transportation, known for reliability, innovation, and unmatched quality of service." },
  { icon: Heart, title: "Values", description: "Integrity, excellence, innovation, and client satisfaction are the pillars that guide every decision we make and every service we deliver." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="About Us"
        title="Our Story of"
        highlight="Excellence"
        description="For over a decade, ASD Technology has been delivering premium technology solutions and luxury chauffeur services with an unwavering commitment to quality."
      />

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-navy-50/50 border border-blue-50 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
                Who We Are
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Bridging Technology & Premium Service
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                ASD Technology was born from a simple idea: what if one company could
                master both cutting-edge technology and luxury service? Today, we
                stand as proof that excellence knows no boundaries.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Our technology division builds enterprise-grade solutions that
                transform businesses, while our chauffeur service provides an
                unmatched travel experience. Together, they represent our
                commitment to delivering the best in everything we do.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Certified team of 50+ professionals",
                  "Serving 500+ clients across the region",
                  "24/7 support for all services",
                  "100% client satisfaction guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Briefcase, value: "10+", label: "Years of Experience", color: "from-blue-500/10 to-blue-600/10" },
                { icon: Users, value: "500+", label: "Happy Clients", color: "from-purple-500/10 to-purple-600/10" },
                { icon: Globe, value: "50+", label: "Expert Team Members", color: "from-cyan-500/10 to-cyan-600/10" },
                { icon: Star, value: "5.0", label: "Average Rating", color: "from-gold-400/10 to-gold-600/10" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-6 h-6 text-navy-800" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied clients who trust ASD Technology for their
            technology and transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="border border-gray-200 text-navy-900 px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-white transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
