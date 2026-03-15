"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Clock, User } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  { 
    title: "Building Scalable SaaS Architectures in 2024", 
    category: "Engineering", 
    date: "Mar 11, 2024",
    readTime: "8 min read",
    author: "Shanjay",
    image: "/blog-cloud.png",
    color: "#5B4DFF"
  },
  { 
    title: "The Art of the High-Converting Landing Page", 
    category: "Design", 
    date: "Mar 08, 2024",
    readTime: "6 min read",
    author: "Vishal",
    image: "/blog-design.png",
    color: "#F08A8A"
  },
  { 
    title: "Why Performance is the #1 UX Feature", 
    category: "Strategy", 
    date: "Mar 05, 2024",
    readTime: "5 min read",
    author: "Bharath",
    image: "/blog-strategy.png",
    color: "#7DD3FC"
  },
  { 
    title: "Serverless vs Containers: Making the Right Choice", 
    category: "Cloud", 
    date: "Feb 28, 2024",
    readTime: "10 min read",
    author: "Vijay",
    image: "/blog-cloud.png",
    color: "#9B8FFF"
  },
  { 
    title: "Automating Growth with Modern AI Tools", 
    category: "AI", 
    date: "Feb 22, 2024",
    readTime: "7 min read",
    author: "Arjun",
    image: "/blog-ai.png",
    color: "#F08A8A"
  },
  { 
    title: "From MVP to Product-Market Fit", 
    category: "Business", 
    date: "Feb 15, 2024",
    readTime: "12 min read",
    author: "Shanjay",
    image: "/blog-engineering.png",
    color: "#5B4DFF"
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-32 pb-24 min-h-screen">
        <div className="container-xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
               <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-black mb-6"
               >
                Insights & <span className="gradient-text-primary">Innovation</span>
               </motion.h1>
               <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/50 text-lg"
               >
                Exploring the intersection of high-performance engineering, product design, and business scale.
               </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:w-80"
            >
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
               <input 
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4DFF]/50 transition-all"
                  placeholder="Search articles..."
               />
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {blogPosts.map((post, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/20 transition-all duration-500"
               >
                  {/* Image Header */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                     <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
                     
                     <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                          style={{ background: post.color }}>
                          {post.category}
                        </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                     <div className="flex items-center gap-4 mb-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
                        <div className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</div>
                     </div>
                     
                     <h3 className="text-xl font-bold mb-6 group-hover:text-white transition-colors flex-1 leading-tight">
                        {post.title}
                     </h3>
                     
                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2.5">
                           <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                             style={{ background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}30` }}>
                             {post.author[0]}
                           </div>
                           <span className="text-xs font-bold text-white/60">{post.author}</span>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#5B4DFF] group-hover:text-white transition-all duration-300">
                           <ArrowRight size={16} />
                        </button>
                     </div>
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
