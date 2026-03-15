"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Terminal, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CustomWebAppsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-widest text-purple-500 mb-8">
              <Terminal size={14} />
              <span>Full-Stack Engineering</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Tailor-made <span className="gradient-text-primary">Web Apps</span> for complex needs.
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
              From internal dashboards to complex data-driven platforms, we build custom solutions that fit your business perfectly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <Image 
                  src="/blog-strategy.png" 
                  alt="Custom Web Apps"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
             <div className="space-y-8">
                {[
                  { title: "Custom Architecture", desc: "Built specifically for your business processes and scale." },
                  { title: "Third-Party Integration", desc: "Seamlessly connecting with your existing tools and APIs." },
                  { title: "Real-time Operations", desc: "Implementing WebSockets and streaming for live data." },
                  { title: "High Security", desc: "Enterprise-grade protection for your sensitive data." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                     <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-purple-500" />
                     </div>
                     <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/40">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="glass-card p-12 rounded-3xl border-white/10 text-center">
             <h2 className="text-3xl font-bold mb-6">Let&apos;s discuss your custom requirement.</h2>
             <Link href="/contact?service=custom" className="btn-primary px-8 py-4 inline-flex items-center gap-2 mx-auto">
                Schedule a Deep Dive <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
