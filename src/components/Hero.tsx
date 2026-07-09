"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20 px-6 z-10"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 glow-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-6 tracking-wide backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERSONAL BRAND POSITIONING</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent"
          >
            I Design Apps <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              That Help Businesses Grow
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-medium"
          >
            Mobile App Designer crafting intuitive digital experiences for restaurants, gyms, hotels, local stores, and service businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollClick(e, "projects")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, "contact")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold transition-all hover:bg-white/10 hover:-translate-y-0.5 border border-white/10 hover:border-white/20 group"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Right Side: Floating mockups visual */}
        <div className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Glowing central orb behind mockups */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Floating Mockup - Handloom Ecommerce */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-4 sm:left-12 top-[15%] w-[160px] sm:w-[200px] aspect-[9/19.5] rounded-[36px] border-[5px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden animate-float-1 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-slate-800" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/handloom.png"
                alt="Handloom Ecommerce App"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 160px, 200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Center Floating Mockup - Hotel Management */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[180px] sm:w-[220px] aspect-[9/19.5] rounded-[42px] border-[6px] border-slate-900 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden animate-float-2 z-30 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[75px] h-[16px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-3 h-1 rounded-full bg-slate-800" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/hotel.png"
                alt="Hotel Management Platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 180px, 220px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Floating Mockup - Power Bank Rental */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-4 sm:right-12 top-[20%] w-[160px] sm:w-[200px] aspect-[9/19.5] rounded-[36px] border-[5px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden animate-float-3 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-slate-800" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/powerbank.png"
                alt="Power Bank Rental Platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 160px, 200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Soft background light */}
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3 rounded-full bg-cyan-400"
        />
      </div>
    </section>
  );
}
