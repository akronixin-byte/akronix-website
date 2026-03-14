"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Layers, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SaaSDevelopmentPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/10 border border-fuchsia-900/20 text-xs font-bold uppercase tracking-widest text-cyan-700 mb-8">
              <Layers size={14} />
              <span>Full Scale SaaS</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Enterprise-grade <span className="gradient-text-primary">SaaS Systems</span> built for global scale.
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
              We build complete, multi-tenant SaaS platforms with secure authentication, automated billing, and high-performance infrastructure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="space-y-8">
                {[
                  { title: "Multi-tenant Architecture", desc: "Isolate customer data while sharing resources efficiently." },
                  { title: "Subscription Management", desc: "Integrated Stripe/Paddle for tiered billing and seat-based pricing." },
                  { title: "Advanced Analytics", desc: "Real-time insights for your users and your business metrics." },
                  { title: "API-First Design", desc: "Built with modern APIs for easy integration and ecosystem growth." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                     <div className="w-6 h-6 rounded-full bg-fuchsia-900/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-cyan-700" />
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
                  src="/blog-cloud.png" 
                  alt="SaaS Platform"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
          </div>
          
          <div className="glass-card p-12 rounded-3xl border-white/10 text-center">
             <h2 className="text-3xl font-bold mb-6">Ready to launch your platform?</h2>
             <Link href="/contact?service=saas" className="btn-primary px-8 py-4 inline-flex items-center gap-2 mx-auto">
                Schedule a Deep Dive <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
