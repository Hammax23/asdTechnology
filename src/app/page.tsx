import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import {
  Monitor,
  Shield,
  Clock,
  Users,
  Star,
  Award,
  Zap,
  ArrowRight,
  Code2,
  Globe2,
  Palette,
  Cloud,
  Search,
  Megaphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

/* ───────────────────── Hero ───────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/cover-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-12 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-200/70">
                Excellence in Web Development & Digital Solutions
              </span>
            </div>

            <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6 tracking-tight">
              Driving Innovation,
              <br />
              <span className="text-gradient">Delivering Excellence</span>
            </h1>

            <p className="animate-fade-in-up-delay max-w-xl text-base sm:text-lg text-blue-100/50 mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0">
              From cutting-edge software development to SEO, digital marketing,
              and cloud solutions, ASD Technology ensures every digital
              experience is seamless, secure, and world-class.
            </p>

            {/* Stats */}
            <div className="animate-fade-in-up-delay-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 lg:max-w-none">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "50+", label: "Expert Team" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-200/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quote Form */}
          <div className="animate-fade-in-up-delay w-full max-w-md mx-auto lg:max-w-none">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Services ───────────────────── */
const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Tailored websites and web applications built to match your brand, goals, and business workflows.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Globe2,
    title: "WordPress/CMS Development",
    description:
      "Fast, secure, and easy-to-manage WordPress and CMS solutions for blogs, business sites, and portals.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Modern, user-focused interfaces and experiences that make your digital products intuitive and engaging.",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment strategies to keep your applications fast, secure, and reliable.",
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Search engine optimization that improves visibility, drives organic traffic, and grows your online presence.",
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Performance-driven digital campaigns across social, search, and paid channels to attract and convert customers.",
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-400",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Our Premium Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            Combining web development, SEO, digital marketing, and cloud
            expertise to deliver a comprehensive suite of digital services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0172bd]/30 hover:scale-[1.03] cursor-pointer"
              style={{ backgroundColor: "#0172BD" }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── About ───────────────────── */
function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center bg-blue-50 text-gold-500 font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
              Your Technology & Transportation Partner in Oakville
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Starting in 2018 from our home office in Oakville, we began by helping
              local businesses build better websites. What started as a two-person 
              web development team has grown into a full-service digital agency.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              In 2021, we expanded into executive transportation services after
              several clients needed reliable airport transfers for their business
              meetings. Today, we&#39;re proud to serve both technology and transportation
              needs across the Greater Toronto Area.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { icon: Award, label: "Since 2018", sub: "Established Business" },
                { icon: Users, label: "Local Team", sub: "GTA Based" },
                { icon: Clock, label: "Same Day", sub: "Quick Response" },
                { icon: Star, label: "4.8/5", sub: "Google Reviews" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="max-w-md mx-auto rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-4 flex items-center justify-center">
              <img
                src="/aboutus.png"
                alt="About ASD Technology"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Chauffeur Highlight ───────────────────── */
const chauffeurReasons = [
  {
    title: "Smart Connected Vehicles",
    description:
      "Complimentary WiFi for productivity and GPS tracking for safety and security in all vehicles.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "Personalized support with tailored preferences, consolidated billing, and 24/7 priority assistance.",
  },
  {
    title: "Premium Safety & Privacy",
    description:
      "Background-checked drivers, secure routes, real-time tracking, and strict confidentiality protocols.",
  },
  {
    title: "Global Reservations Network",
    description:
      "Multi-city coverage with simple booking and consistent premium service standards worldwide.",
  },
  {
    title: "VIP Meet & Greet Experience",
    description:
      "Professional airport and lobby service with luggage assistance and seamless guest coordination.",
  },
  {
    title: "Private Jet & Luxury Fleet Coordination",
    description:
      "Seamless coordination with private jets featuring executive sedans, luxury SUVs, and specialty vehicles.",
  },
];


function ChauffeurSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200">
            Chauffeur Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Executive Chauffeured Services & Private Chartered Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-blue-100/50 text-sm sm:text-base">
            From airport transfers to corporate travel and events, our chauffeur
            services are designed for comfort, reliability, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {chauffeurReasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/5 border border-white/5 rounded-2xl p-7 hover:bg-white/8 hover:border-blue-400/15 transition-all duration-300"
            >
              <h3 className="text-base font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-blue-200/40 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA ───────────────────── */
function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-950 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/8 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100/50 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you need a technology partner or a premium chauffeur
              service, we&apos;re here to help. Reach out today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border border-white/10 text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-white/5 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Home Page ───────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ChauffeurSection />
      <CTA />
      <Footer />
    </>
  );
}
