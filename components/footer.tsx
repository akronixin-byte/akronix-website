import Link from "next/link";
import { Zap, Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "MVP Development", href: "/services/mvp-development" },
    { label: "Landing Pages", href: "/services/landing-pages" },
    { label: "Custom Web Apps", href: "/services/custom-web-apps" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Start a Project", href: "/contact?type=project" },
    { label: "Client Portal", href: "/portal" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/akronix", label: "Twitter" },
  { icon: Github, href: "https://github.com/akronix", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/akronix", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(15, 10, 60, 0.6)" }}>
      {/* Newsletter Section */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="container-xl py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Stay ahead of the curve</h3>
              <p className="text-sm text-white/50">
                Get insights on building & scaling digital products — no spam.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input w-full md:w-64"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Akron<span className="gradient-text-primary">ix</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-5 max-w-xs">
              We help SMEs and startups build and scale premium digital products from idea to market.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 hover:bg-white/8 hover:border-white/20"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <Icon size={14} className="text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">
                {section}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Akronix Technologies Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
