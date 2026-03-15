"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Code2, Rocket, TrendingUp, Zap, Globe, Layers,
  ShieldCheck, Star, ChevronRight, CheckCircle, Clock, Award,
} from "lucide-react";
import { InteractiveHeroText } from "@/components/ui/interactive-hero-text";

/* ── Variants ─────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Data ─────────────────────────────────────────────────────── */
const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "3×", label: "Avg. Revenue Growth", icon: TrendingUp },
  { value: "48h", label: "Project Kickoff", icon: Clock },
];

const features = [
  { icon: Code2, title: "Production-Ready Code", desc: "Enterprise-grade architecture that scales from MVP to millions of users.", color: "#5B4DFF" },
  { icon: Rocket, title: "Ship Faster", desc: "From idea to live product in weeks, not months.", color: "#F08A8A" },
  { icon: TrendingUp, title: "Scale Without Limits", desc: "Infrastructure that grows with your business, no surprises at scale.", color: "#7DD3FC" },
  { icon: ShieldCheck, title: "Security-First", desc: "Enterprise security, rate limiting, and data protection built in.", color: "#9B8FFF" },
  { icon: Globe, title: "Global Performance", desc: "Edge-deployed, optimised for every user everywhere.", color: "#F08A8A" },
  { icon: Layers, title: "End-to-End Delivery", desc: "Design, engineering, and launch — all under one roof.", color: "#5B4DFF" },
];

const services = [
  {
    icon: Layers, title: "SaaS Platform Development",
    desc: "Full-featured SaaS products with auth, billing, and analytics — ready for users.",
    href: "/services/saas-development", badge: "Most Popular", stat: "6-week delivery", color: "#5B4DFF",
  },
  {
    icon: Rocket, title: "MVP Development",
    desc: "Validate your idea with a polished MVP. We move at startup speed.",
    href: "/services/mvp-development", stat: "2-week delivery", color: "#F08A8A",
  },
  {
    icon: Globe, title: "Landing Page Development",
    desc: "High-converting pages designed to turn visitors into leads and sales.",
    href: "/services/landing-pages", stat: "1-week delivery", color: "#7DD3FC",
  },
  {
    icon: Code2, title: "Custom Web Applications",
    desc: "Complex data-driven apps and portals built to your exact spec.",
    href: "/services/custom-web-app", stat: "8-week delivery", color: "#9B8FFF",
  },
];

const steps = [
  { step: "01", title: "Discovery & Planning", desc: "We map your idea to a precise technical blueprint.", icon: BarChart3 },
  { step: "02", title: "Design & Build", desc: "Built in agile sprints with weekly demos.", icon: Code2 },
  { step: "03", title: "QA & Launch", desc: "Thorough testing, SEO, performance — then go-live.", icon: Rocket },
  { step: "04", title: "Scale & Optimise", desc: "Ongoing features, monitoring, and scaling.", icon: TrendingUp },
];

import { BarChart3 } from "lucide-react";

const testimonials = [
  { quote: "Mediatrix is a performance-driven digital marketing agency helping brands grow through strategic campaigns, creative storytelling, and data-driven marketing.", color: "#F08A8A", logo: "/Mediatrix.jpeg" },
  { quote: "Akronix builds scalable SaaS platforms, powerful networking solutions, and growth-focused digital marketing systems that help businesses launch, scale, and dominate digitally.", color: "#5B4DFF", logo: "/Akronix.jpeg" },
  { quote: "Gritscape transforms innovative ideas into real startups through expert mentorship, strategic guidance, investor connections, and hands-on startup programs.", color: "#7DD3FC", logo: "/Gritscape.jpeg" },
];



const trustedBy = ["Vercel", "Stripe", "Linear", "Notion", "Supabase", "Framer"];

/* ── Component ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
            style={{ background: "radial-gradient(circle, #5B4DFF, transparent)" }} />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{ background: "radial-gradient(circle, #F08A8A, transparent)" }} />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="container-xl relative z-10 text-center">


          {/* Brand name — interactive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-36 sm:h-48 md:h-60 mb-6"
          >
            <InteractiveHeroText />
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-xl sm:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            We design, build, and scale{" "}
            <span className="gradient-text-primary font-bold">premium digital products</span>
            {" "}— from MVPs to full SaaS platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link href="/contact?type=project" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link href="/contact?type=consultation" className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto">
              Book Free Consultation
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.45)} className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["#5B4DFF", "#F08A8A", "#7DD3FC", "#9B8FFF", "#5B4DFF"].map((bg, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black"
                  style={{ background: bg, borderColor: "#0B0B0F", zIndex: 5 - i }}
                >
                  {["SJ", "BR", "VK", "AM", "TK"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span className="text-white font-semibold">50+</span> companies trust Akronix
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TRUSTED BY ────────────────────────────────────────── */}
      <section className="py-10 border-y" style={{ borderColor: "var(--c-border)" }}>
        <div className="container-xl">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest mb-7" style={{ color: "rgba(255,255,255,0.2)" }}>
            Trusted by founders &amp; companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {trustedBy.map((n) => (
              <span key={n} className="font-bold text-lg transition-colors duration-200 cursor-default"
                style={{ color: "rgba(255,255,255,0.18)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)}
              className="card p-6 text-center group hover:border-[#5B4DFF]/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(91,77,255,0.12)", border: "1px solid rgba(91,77,255,0.2)" }}>
                <Icon size={18} style={{ color: "#9B8FFF" }} />
              </div>
              <p className="text-3xl font-black gradient-text-primary mb-1">{value}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-14">
            <motion.span {...fadeUp()} className="badge mb-4 inline-flex">Why Akronix</motion.span>
            <motion.h2 {...fadeUp(0.07)} className="text-4xl sm:text-5xl font-black mb-4">
              Everything you need to{" "}
              <span className="gradient-text-primary">build and win</span>
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Technical depth meets product mindset — delivering solutions that move the needle.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.07)}
                className="card-hover p-6 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-base font-bold mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--c-surface)" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <motion.span {...fadeUp()} className="badge mb-4 inline-flex">Services</motion.span>
            <motion.h2 {...fadeUp(0.07)} className="text-4xl sm:text-5xl font-black mb-4">
              What we <span className="gradient-text-primary">build for you</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, desc, href, badge, stat, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.08)}
                className="card-hover p-7 relative group flex flex-col">
                {badge && (
                  <span className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold rounded-full text-white uppercase tracking-wider"
                    style={{ background: "linear-gradient(135deg,#5B4DFF,#9B8FFF)" }}>
                    {badge}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                      {stat}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>{desc}</p>
                <Link href={href} className="flex items-center gap-1.5 text-sm font-bold group/link transition-colors"
                  style={{ color }}>
                  Learn more
                  <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-14">
            <motion.span {...fadeUp()} className="badge mb-4 inline-flex">Process</motion.span>
            <motion.h2 {...fadeUp(0.07)} className="text-4xl sm:text-5xl font-black mb-4">
              How we <span className="gradient-text-primary">deliver results</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 inset-x-0 h-px mx-[12.5%]"
              style={{ background: "linear-gradient(90deg,transparent,rgba(91,77,255,0.4),rgba(91,77,255,0.4),transparent)" }} />
            {steps.map(({ step, title, desc }, i) => (
              <motion.div key={step} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg mb-4 relative z-10"
                  style={{ background: "var(--c-card)", border: "1px solid rgba(91,77,255,0.35)", color: "#9B8FFF", boxShadow: "0 0 24px rgba(91,77,255,0.15)" }}>
                  {step}
                </div>
                <h3 className="text-sm font-bold mb-2">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIPS ──────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--c-surface)" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <motion.span {...fadeUp()} className="badge mb-4 inline-flex">Partnerships</motion.span>
            <motion.h2 {...fadeUp(0.07)} className="text-4xl sm:text-5xl font-black mb-4">
              Our <span className="gradient-text-primary">Collaborators</span>
            </motion.h2>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {testimonials.map(({ quote, color, logo }, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="flex flex-col items-center text-center group relative" style={{ width: "300px" }}>

                {/* Logo always visible */}
                <div className="z-10">
                  {logo ? (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2"
                      style={{ border: `2px solid ${color}50`, background: `${color}10` }}>
                      <img src={logo} alt={`partner logo ${i + 1}`} className="w-full h-full object-contain transform scale-125" style={{ display: "block" }} />
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl font-black mb-2"
                      style={{ background: `${color}25`, color, border: `2px solid ${color}50` }}>P</div>
                  )}
                </div>

                {/* Hover card - hidden by default, appears on group hover */}
                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-[300px]"
                  style={{ pointerEvents: "none" }}>
                  <div className="rounded-3xl p-4 opacity-0 scale-95 -translate-y-2 transform transition-all duration-500 ease-out origin-top-center
                    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0 12px 40px rgba(11,11,15,0.45)",
                      pointerEvents: "auto",
                    }}>
                    <p className="text-sm leading-relaxed italic px-2 line-clamp-3 max-w-[260px]"
                      style={{ color: "rgba(255,255,255,0.85)" }}>
                      &ldquo;{quote}&rdquo;
                    </p>
                    {/* No name/role provided — only show quote */}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-lg">
          <motion.div {...fadeUp()}
            className="relative rounded-3xl overflow-hidden text-center p-14"
            style={{
              background: "linear-gradient(135deg,rgba(91,77,255,0.18) 0%,rgba(155,115,255,0.08) 50%,rgba(240,138,138,0.07) 100%)",
              border: "1px solid rgba(91,77,255,0.25)",
            }}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-56 h-56 rounded-full blur-[100px] pointer-events-none"
              style={{ background: "rgba(91,77,255,0.2)" }} />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full blur-[100px] pointer-events-none"
              style={{ background: "rgba(240,138,138,0.15)" }} />
            <div className="relative z-10">
              <span className="badge inline-flex mb-6"><Zap size={10} className="fill-current" />Ready to ship?</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5">
                Let&apos;s build your{" "}
                <span className="gradient-text-primary">next big thing</span>
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
                Book a free 30-minute consultation and we&apos;ll map out your entire product roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact?type=project" className="btn-primary text-base px-10 py-3.5 w-full sm:w-auto">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link href="/contact?type=consultation" className="btn-secondary text-base px-10 py-3.5 w-full sm:w-auto">
                  Book Consultation
                </Link>
              </div>
              <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                No commitment · Free consultation · Response within 24h
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
