import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo3.png"
                alt="ASD Technologies"
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-blue-200/40 text-sm leading-relaxed">
              Digital solutions, web development, and executive chauffeur &amp;
              charter services — delivered with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Custom Web Development", href: "/services/technology" },
                { label: "WordPress/CMS Development", href: "/services/technology" },
                { label: "UI/UX Design", href: "/services/technology" },
                { label: "Cloud Solutions", href: "/services/technology" },
                { label: "SEO & Digital Marketing", href: "/services/technology" },
                {
                  label: "Executive Chauffeur & Charter",
                  href: "/services/chauffeur",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2.5 text-blue-200/40 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                416-893-5779
              </li>
              <li className="flex items-center gap-2.5 text-blue-200/40 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                info@asdtechnology.ca
              </li>
              <li className="flex items-center gap-2.5 text-blue-200/40 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                231 Oak Park Blvd, Oakville, ON L6H 7S8
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/30 text-sm" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} ASD Technology. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-blue-200/30 hover:text-white text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
