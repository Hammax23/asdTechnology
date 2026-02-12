import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  ArrowRight,
  CheckCircle,
  Plane,
  Building,
  PartyPopper,
  Clock,
  MapPin,
  Settings,
  Shield,
  Star,
  Users,
  Wifi,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Chauffeur Services | ASD Technology",
  description:
    "Premium chauffeur services — airport transfers, corporate travel, event transportation, hourly hire, and long distance journeys.",
};

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Start or end your journey in comfort. Our airport transfer service includes real-time flight tracking, meet-and-greet at arrivals, and complimentary luggage assistance.",
    features: [
      "Real-time flight tracking & monitoring",
      "Meet & greet at arrivals hall",
      "Complimentary luggage assistance",
      "Available 24/7 for all flights",
      "Free 60-minute waiting on arrivals",
      "All major airports covered",
    ],
  },
  {
    icon: Building,
    title: "Corporate Travel",
    description: "Impress your clients and keep your executives comfortable with our corporate chauffeur service. Professional drivers, premium vehicles, and complete confidentiality.",
    features: [
      "Executive and luxury vehicle fleet",
      "NDA-signed professional drivers",
      "Monthly corporate billing & invoicing",
      "Dedicated account manager",
      "Multi-city availability",
      "Priority booking & last-minute requests",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event Transportation",
    description: "Make your special occasions unforgettable with our elegant event transportation. From weddings to galas, we ensure every arrival is grand.",
    features: [
      "Wedding car decoration service",
      "Fleet coordination for large events",
      "Red carpet & VIP treatment",
      "Group transportation logistics",
      "Conference shuttle services",
      "Customizable packages",
    ],
  },
  {
    icon: Clock,
    title: "Hourly Hire",
    description: "Maximum flexibility for your schedule. Hire a chauffeur by the hour for shopping trips, city tours, multi-stop meetings, or just having a driver on standby.",
    features: [
      "Minimum 2-hour booking",
      "Multi-stop capability",
      "City tours with local knowledge",
      "Wait & return service",
      "Shopping trip assistance",
      "Flexible schedule changes",
    ],
  },
  {
    icon: MapPin,
    title: "Long Distance Travel",
    description: "Travel between cities in comfort and style. Our long-distance service offers refreshments, WiFi, and experienced drivers for a relaxing journey.",
    features: [
      "Intercity & cross-country travel",
      "Complimentary refreshments",
      "In-car WiFi connectivity",
      "Planned rest stops on request",
      "Experienced long-haul drivers",
      "Door-to-door service",
    ],
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Have a unique transportation need? We create bespoke chauffeur packages tailored to your exact requirements, no matter how specific.",
    features: [
      "Custom route planning",
      "Special vehicle requests",
      "VIP & dignitary service",
      "Dedicated personal driver",
      "Security-trained chauffeurs",
      "Multi-day hire packages",
    ],
  },
];

const fleet = [
  { name: "Executive Sedan", description: "Mercedes E-Class, BMW 5 Series — perfect for business and airport transfers.", capacity: "3 passengers" },
  { name: "Luxury Sedan", description: "Mercedes S-Class, BMW 7 Series — the ultimate in luxury and comfort.", capacity: "3 passengers" },
  { name: "Premium SUV", description: "Range Rover, Mercedes GLS — spacious luxury for families and groups.", capacity: "5 passengers" },
  { name: "Luxury Van", description: "Mercedes V-Class — ideal for group travel, events, and corporate outings.", capacity: "7 passengers" },
];

export default function ChauffeurPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="Chauffeur Services"
        title="Premium"
        highlight="Chauffeur Services"
        description="Experience luxury transportation with professional drivers, premium vehicles, and a commitment to punctuality, safety, and comfort."
      />

      {/* Why Our Chauffeur Service */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              The ASD Chauffeur Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Safe & Insured", desc: "Fully licensed, insured vehicles with certified professional drivers." },
              { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars by our clients for quality and reliability." },
              { icon: Clock, title: "Always On Time", desc: "100% punctuality guarantee. We value your time as much as you do." },
              { icon: Wifi, title: "Connected Travel", desc: "In-car WiFi, charging ports, and refreshments for a productive journey." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              Chauffeur Service Options
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200">
              Our Fleet
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Premium Vehicles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-blue-100/50 text-lg">
              Every vehicle in our fleet is meticulously maintained and equipped for maximum comfort.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleet.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-white/5 border border-white/5 rounded-2xl p-7 hover:bg-white/8 hover:border-blue-400/15 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mx-auto mb-5">
                  <Car className="w-7 h-7 text-blue-300" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-blue-200/40 text-sm leading-relaxed mb-4">{vehicle.description}</p>
                <div className="inline-flex items-center gap-1.5 bg-blue-500/15 px-3 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5 text-blue-300" />
                  <span className="text-blue-300 text-xs font-medium">{vehicle.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Book Your Ride Today
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Experience the luxury and professionalism of ASD Technology&apos;s chauffeur service. Book now or request a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              Book a Chauffeur
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/technology"
              className="border border-gray-200 text-navy-900 px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-white transition-all duration-200"
            >
              Technology Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
