"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MVPDevelopmentPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 border border-purple-600/20 text-xs font-bold uppercase tracking-widest text-purple-600 mb-8">
              <Rocket size={14} />
              <span>MVP Launchpad</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Validate your <span className="gradient-text-primary">Vision</span> with a high-fidelity MVP.
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
              We focus on the absolute essentials to get you to market fast. Clean code, professional UI, and a foundation built for scale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <Image 
                  src="/blog-engineering.png" 
                  alt="MVP Development"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
             <div className="space-y-8">
                {[
                  { title: "Rapid Prototyping", desc: "Interactive wireframes and high-fidelity designs in days." },
                  { title: "Core Feature Focus", desc: "Laser focus on the 20% of features that deliver 80% of value." },
                  { title: "Agile Development", desc: "Weekly sprints with live builds you can test immediately." },
                  { title: "Investor-Ready", desc: "A polished product that proves your concept to stakeholders." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                     <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-purple-600" />
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
             <h2 className="text-3xl font-bold mb-6">Ready to ship your MVP?</h2>
             <Link href="/contact?service=mvp" className="btn-primary px-8 py-4 inline-flex items-center gap-2 mx-auto">
                Get Your Quote <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
