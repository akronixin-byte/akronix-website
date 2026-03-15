"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Building2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$499",
    billing: "per project",
    desc: "Ideal for validating your MVP or landing page.",
    icon: Zap,
    features: [
      "Custom UI Design",
      "Next.js / React Web App",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "2 Rounds of Revisions",
      "14 Days Support",
    ],
    cta: "Start with Starter",
    href: "/contact?plan=starter",
    variant: "secondary",
  },
  {
    name: "Professional",
    price: "$1,999",
    billing: "per month",
    desc: "For growing startups needing regular development.",
    icon: Rocket,
    features: [
      "Dedicated Developer",
      "Unlimited Revisions",
      "Priority Support",
      "Advanced Backend / API",
      "Database Integration",
      "Cloud Deployment",
      "Bi-weekly Progress Sync",
    ],
    cta: "Go Professional",
    href: "/contact?plan=professional",
    variant: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    billing: "on demand",
    desc: "Full-scale product teams and complex architectures.",
    icon: Building2,
    features: [
      "Full Product Team",
      "CTO Level Consulting",
      "Security Auditing",
      "Custom Microservices",
      "Infrastructure Setup",
      "24/7 On-call Support",
      "Lifetime Warranty",
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    variant: "secondary",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white min-h-screen">
        <div className="pt-32 pb-24">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-6 font-mono"
              >
                <span>Pricing Plans</span>
              </motion.div>
              <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Predictable pricing for <span className="gradient-text-primary">unstoppable</span> growth.
              </motion.h1>
              <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-lg text-white/50 leading-relaxed"
              >
                Choose the plan that fits your current stage. No hidden fees, just world-class engineering delivered at speed.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className={cn(
                    "glass-card p-8 md:p-10 rounded-3xl border-white/10 relative flex flex-col h-full",
                    plan.popular && "ring-2 ring-fuchsia-900 shadow-2xl shadow-fuchsia-900/10"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-fuchsia-950 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-cyan-700">
                          <plan.icon size={24} />
                       </div>
                       <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{plan.name}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-black">{plan.price}</span>
                      <span className="text-sm text-white/40">{plan.billing}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-fuchsia-500" />
                        </div>
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={plan.href} 
                    className={cn(
                      "w-full py-4 text-sm font-bold rounded-xl text-center transition-all",
                      plan.variant === "primary" ? "btn-primary" : "btn-secondary"
                    )}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
