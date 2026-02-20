import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "FAQ | ASD Technology - Web Development Questions",
  description:
    "Frequently asked questions about ASD Technology's web development, software solutions, SEO, and digital marketing services in Canada.",
  keywords: "web development FAQ, software development questions, SEO services FAQ Canada",
};

const generalFaqs = [
  {
    question: "What services does ASD Technology offer?",
    answer: "ASD Technology provides two main categories of services: (1) Technology Solutions — including software development, IT consulting, cloud solutions, cybersecurity, data analytics, and 24/7 technical support; and (2) Premium Chauffeur Services — including airport transfers, corporate travel, event transportation, hourly hire, long distance travel, and custom solutions.",
  },
  {
    question: "Where is ASD Technology based?",
    answer: "Our headquarters is located at 231 Oak Park Blvd, Oakville, ON L6H 7S8, Canada. However, we serve clients across the region and can provide technology services remotely to clients worldwide.",
  },
  {
    question: "How can I request a quote?",
    answer: "You can request a free quote through our website's contact form, by calling us at 416-418-0528, or by emailing info@asdtechnology.ca. We typically respond within 2 hours during business hours.",
  },
  {
    question: "What are your business hours?",
    answer: "Our office is open Monday through Saturday, 9:00 AM to 6:00 PM. However, our chauffeur service operates 24/7, and emergency technical support is available around the clock.",
  },
];

const techFaqs = [
  {
    question: "What technologies do you use for software development?",
    answer: "We work with modern technologies including React, Next.js, Angular, Node.js, Python, .NET, and mobile frameworks like React Native and Flutter. Our tech stack is chosen based on the specific needs of each project to ensure the best performance and maintainability.",
  },
  {
    question: "How long does a typical software project take?",
    answer: "Project timelines vary based on complexity. A simple web application might take 4-8 weeks, while a complex enterprise system could take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout development.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages with SLA-based response times. Our 24/7 technical support ensures your systems are always running optimally with regular updates, monitoring, and proactive issue resolution.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely. We specialize in system integration, API development, and legacy system modernization. Our team will assess your current infrastructure and create a seamless integration plan that minimizes disruption to your operations.",
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into every project from the ground up. We follow industry best practices including encryption, secure coding standards, regular security audits, and compliance with ISO 27001, GDPR, and other relevant standards.",
  },
];

const chauffeurFaqs = [
  {
    question: "What types of vehicles are in your fleet?",
    answer: "Our fleet includes Executive Sedans (Mercedes E-Class, BMW 5 Series), Luxury Sedans (Mercedes S-Class, BMW 7 Series), Premium SUVs (Range Rover, Mercedes GLS), and Luxury Vans (Mercedes V-Class). All vehicles are meticulously maintained and equipped with WiFi, charging ports, and refreshments.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance for standard services. For events and long-distance travel, booking 48-72 hours ahead is ideal. However, we do accommodate last-minute requests whenever possible — just call us directly.",
  },
  {
    question: "Are your drivers professionally trained?",
    answer: "Yes, all our chauffeurs are professionally trained, licensed, and thoroughly background-checked. Many are trained in defensive driving, first aid, and VIP protocol. For corporate clients, our drivers sign NDAs to ensure complete confidentiality.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 6 hours before your scheduled pickup. Cancellations within 6 hours may incur a partial charge. For events and long-distance bookings, we request 24 hours notice for free cancellation.",
  },
  {
    question: "Do you offer corporate accounts?",
    answer: "Yes, we offer dedicated corporate accounts with benefits including monthly billing, dedicated account managers, priority booking, volume discounts, and customized reporting. Contact us to set up your corporate account.",
  },
];

function FaqSection({
  title,
  subtitle,
  faqs,
  dark = false,
}: {
  title: string;
  subtitle: string;
  faqs: { question: string; answer: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`py-16 sm:py-24 ${dark ? "bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden" : "bg-white"}`}>
      {dark && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className={`inline-flex items-center font-semibold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 ${
            dark
              ? "bg-white/10 border border-white/10 text-blue-200"
              : "bg-blue-50 text-gold-500"
          }`}>
            {subtitle}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}>
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className={`group rounded-xl border transition-all duration-200 ${
                dark
                  ? "bg-white/5 border-white/5 hover:border-blue-400/15"
                  : "bg-white border-gray-100 hover:border-blue-100 hover:shadow-md"
              }`}
            >
              <summary
                className={`flex items-center justify-between cursor-pointer px-4 sm:px-6 py-4 font-semibold text-sm ${
                  dark ? "text-white" : "text-navy-900"
                }`}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-transform group-open:rotate-45 ${
                    dark
                      ? "bg-blue-500/15 text-blue-300"
                      : "bg-blue-50 text-gold-500"
                  }`}
                >
                  +
                </span>
              </summary>
              <div
                className={`px-4 sm:px-6 pb-5 leading-relaxed text-sm ${
                  dark ? "text-blue-200/40" : "text-gray-500"
                }`}
              >
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        badge="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Find answers to common questions about our technology solutions and chauffeur services. Can't find what you're looking for? Contact us directly."
      />

      <FaqSection
        title="General Questions"
        subtitle="General"
        faqs={generalFaqs}
      />

      <FaqSection
        title="Technology Services"
        subtitle="Tech FAQ"
        faqs={techFaqs}
        dark
      />

      <FaqSection
        title="Chauffeur Services"
        subtitle="Chauffeur FAQ"
        faqs={chauffeurFaqs}
      />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Our team is ready to help. Reach out and we&apos;ll get back to you within 2 hours.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
