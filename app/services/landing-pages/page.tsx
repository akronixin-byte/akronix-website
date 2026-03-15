"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Globe, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPagesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-32 pb-24">
        <div className="container-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold uppercase tracking-widest text-fuchsia-500 mb-8">
              <Globe size={14} />
              <span>Conversion Catalyst</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              High-converting <span className="gradient-text-primary">Landing Pages</span> that drive results.
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
              We design and build premium landing pages that don&apos;t just look stunning, but are architected to convert visitors into loyal customers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="space-y-8">
                {[
                  { title: "Psychology-Led Design", desc: "Using visual cues and hierarchy to guide users to action." },
                  { title: "Blazing Fast Performance", desc: "Sub-second load times to capture every single visitor." },
                  { title: "A/B Testing Ready", desc: "Structured to easily test headlines, CTAs, and layouts." },
                  { title: "Fully Responsive", desc: "Flawless experience across desktop, tablet, and mobile." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                     <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-fuchsia-500" />
                     </div>
                     <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/40">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <Image 
                  src="/blog-design.png" 
                  alt="Landing Pages"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
          </div>
          
          <div className="glass-card p-12 rounded-3xl border-white/10 text-center">
             <h2 className="text-3xl font-bold mb-6">Boost your conversion rate today.</h2>
             <Link href="/contact?service=landing" className="btn-primary px-8 py-4 inline-flex items-center gap-2 mx-auto">
                Calculate ROI <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
