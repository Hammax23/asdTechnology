import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  Shield,
  Cpu,
  Globe,
  Headphones,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Technology Services | ASD Technology - Software Development Canada",
  description:
    "Enterprise-grade software development, IT consulting, cloud solutions, cybersecurity, and 24/7 technical support in Oakville, Canada. Serving businesses across the GTA.",
  keywords: "software development Canada, IT consulting Oakville, cloud solutions Toronto, cybersecurity services GTA, technical support Canada",
};

const services = [
  {
    icon: Monitor,
    title: "Software Development",
    description: "We build custom web and mobile applications using the latest technologies. Our agile development process ensures rapid delivery without compromising quality.",
    features: [
      "Custom Web Applications (React, Next.js, Angular)",
      "Mobile App Development (iOS & Android)",
      "RESTful API & Microservices Architecture",
      "UI/UX Design & Prototyping",
      "E-commerce & SaaS Platforms",
      "Legacy System Modernization",
    ],
    color: "from-blue-500 to-blue-600",
    lightColor: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: Globe,
    title: "IT Consulting",
    description: "Our certified consultants help align your IT strategy with business objectives. We audit, plan, and implement solutions that drive measurable growth.",
    features: [
      "IT Strategy & Roadmap Planning",
      "Digital Transformation Consulting",
      "Business Process Automation",
      "Technology Stack Assessment",
      "Vendor Selection & Management",
      "IT Governance & Compliance",
    ],
    color: "from-purple-500 to-purple-600",
    lightColor: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: Cpu,
    title: "Cloud Solutions",
    description: "Migrate, manage, and optimize your cloud infrastructure. We work with AWS, Azure, and Google Cloud to deliver scalable, cost-effective solutions.",
    features: [
      "Cloud Migration & Architecture",
      "AWS, Azure & GCP Management",
      "DevOps & CI/CD Pipelines",
      "Infrastructure as Code (Terraform)",
      "Performance Monitoring & Optimization",
      "Disaster Recovery & Backup",
    ],
    color: "from-cyan-500 to-cyan-600",
    lightColor: "from-cyan-500/10 to-cyan-600/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business from evolving cyber threats. Our security experts implement comprehensive defense strategies tailored to your risk profile.",
    features: [
      "Security Audit & Vulnerability Assessment",
      "Penetration Testing & Ethical Hacking",
      "Compliance (ISO 27001, GDPR, SOC2)",
      "24/7 Threat Monitoring & Response",
      "Employee Security Training",
      "Firewall & Endpoint Protection",
    ],
    color: "from-green-500 to-green-600",
    lightColor: "from-green-500/10 to-green-600/10",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights. We build dashboards, data pipelines, and BI solutions that empower better decision-making.",
    features: [
      "Business Intelligence Dashboards",
      "Data Warehouse Design & ETL",
      "Real-time Analytics & Reporting",
      "Machine Learning Integration",
      "Data Visualization (Power BI, Tableau)",
      "Predictive Analytics Models",
    ],
    color: "from-amber-500 to-amber-600",
    lightColor: "from-amber-500/10 to-amber-600/10",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description: "Round-the-clock IT support with guaranteed SLAs. Our support engineers resolve issues fast so your business never skips a beat.",
    features: [
      "24/7 Help Desk & Ticketing",
      "Remote & On-Site Support",
      "SLA-Based Response Guarantees",
      "System Monitoring & Alerts",
      "Software Updates & Patch Management",
      "IT Asset Management",
    ],
    color: "from-rose-500 to-rose-600",
    lightColor: "from-rose-500/10 to-rose-600/10",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We understand your business needs, goals, and challenges through detailed consultation." },
  { step: "02", title: "Planning", description: "We create a comprehensive strategy, timeline, and technical architecture for your project." },
  { step: "03", title: "Development", description: "Our agile team builds your solution with regular updates and quality checkpoints." },
  { step: "04", title: "Testing", description: "Rigorous QA testing ensures your solution is secure, performant, and bug-free." },
  { step: "05", title: "Deployment", description: "Smooth launch with zero downtime, complete documentation, and team training." },
  { step: "06", title: "Support", description: "Ongoing maintenance, monitoring, and support to keep your systems running optimally." },
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="Technology Services"
        title="Enterprise"
        highlight="Technology Solutions"
        description="From custom software development to cloud infrastructure — we deliver end-to-end technology solutions that transform your business."
      />

      {/* Services Detail */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.lightColor} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: "inherit" }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        <span className="text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`hidden lg:block ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${service.lightColor} p-8 flex items-center justify-center`}>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow-lg text-center">
                      <service.icon className="w-16 h-16 mx-auto mb-4 text-navy-800" />
                      <div className="text-xl font-bold text-navy-900">{service.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-blue-100/50 text-lg">
              A proven, transparent process that delivers results on time, every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((item) => (
              <div
                key={item.step}
                className="group bg-white/5 border border-white/5 rounded-2xl p-7 hover:bg-white/8 hover:border-blue-400/15 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gradient mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200/40 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project and find the perfect technology solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/chauffeur"
              className="border border-gray-200 text-navy-900 px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-white transition-all duration-200"
            >
              Chauffeur Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
