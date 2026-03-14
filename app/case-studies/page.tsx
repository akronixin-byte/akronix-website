"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white min-h-screen pt-32 pb-24">
        <div className="container-xl">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Case <span className="gradient-text-primary">Studies</span></h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">See how we&apos;ve helped companies transform their digital landscape.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {[1, 2].map((_, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="glass-card rounded-3xl overflow-hidden border-white/5 group h-[400px] flex items-end p-8 relative"
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <div className="relative z-20">
                     <p className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-2">SaaS Development</p>
                     <h3 className="text-2xl font-bold mb-4">Empowering {i === 0 ? "TechFlow" : "GrowthStack"} with a scale-ready platform.</h3>
                     <button className="text-sm font-bold border-b border-cyan-700 pb-1 hover:text-cyan-700 transition-colors">Read Full Study</button>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
