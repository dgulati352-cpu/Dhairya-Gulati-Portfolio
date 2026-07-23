"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Star, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentQuarter = `Q${Math.floor(new Date().getMonth() / 3) + 1} ${new Date().getFullYear()}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 pb-24 px-6 z-10"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 glow-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C15F3C]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#E27B56]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Warm Grid Overlay */}
      <div className="absolute inset-0 warm-grid opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Live Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-[#C15F3C]/30 text-[11px] font-extrabold tracking-[0.2em] text-[#C15F3C] mb-6 uppercase backdrop-blur-md shadow-md shadow-[#C15F3C]/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" />
            <span>AVAILABLE FOR CLIENT PROJECTS — {currentQuarter}</span>
          </motion.div>

          {/* Headline - Editorial Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-stone-900"
          >
            Dhairya Gulati <br />
            <span className="terracotta-text-gradient font-serif">
              Crafting Apps That Scale Local Businesses
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-stone-600 max-w-xl mb-8 leading-relaxed font-medium"
          >
            Official Portfolio of Dhairya Gulati: Mobile App & UI/UX Designer creating high-converting mobile applications, restaurant systems, hotel platforms, and digital brand experiences.
          </motion.p>

          {/* Trust Stat Row - Trimmed to 2 stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-4 w-full max-w-md mb-10 p-2.5 rounded-3xl bg-white border border-stone-200/90 shadow-xl shadow-stone-900/5"
          >
            <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-[#C15F3C]/40 transition-colors">
              <span className="text-2xl font-extrabold terracotta-text-gradient font-serif">10+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 mt-0.5">Live Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-[#C15F3C]/40 transition-colors">
              <span className="text-2xl font-extrabold terracotta-text-gradient font-serif">Figma</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 mt-0.5">UI/UX Design Master</span>
            </div>
          </motion.div>

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
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl terracotta-button-gradient text-white font-bold uppercase tracking-wider text-xs transition-all shadow-xl shadow-[#C15F3C]/25 hover:shadow-[#C15F3C]/40 hover:scale-[1.02] group cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider transition-all hover:bg-emerald-100/80 border border-emerald-300 hover:scale-[1.02] group cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Scroll-linked project reveal */}
        <div className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Glowing central orb */}
          <div className="absolute w-[400px] h-[400px] bg-[#C15F3C]/10 rounded-full blur-[110px] pointer-events-none" />

          {/* Floating Badge 1 - Top Rated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-2 left-0 z-40 px-4 py-2.5 rounded-2xl bg-white border border-stone-200 shadow-xl flex items-center gap-2.5"
          >
            <div className="p-1.5 rounded-lg bg-[#C15F3C]/10 text-[#C15F3C]">
              <Star className="w-4 h-4 fill-[#C15F3C]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C15F3C]">Top Rated</span>
              <span className="text-[9px] font-semibold text-stone-500">UI/UX App Specialist</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Live Apps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-4 right-0 z-40 px-4 py-2.5 rounded-2xl bg-white border border-stone-200 shadow-xl flex items-center gap-2.5"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Smartphone className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">iOS & Android</span>
              <span className="text-[9px] font-semibold text-stone-500">Native Performance</span>
            </div>
          </motion.div>

          {/* Left Floating Mockup - Handloom Ecommerce */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-4 sm:left-10 top-[15%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-stone-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden animate-float-1 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-white/40" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/handloom.png"
                alt="Handloom Ecommerce App"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 160px, 195px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Center Floating Mockup - Hotel Management */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[185px] sm:w-[225px] aspect-[9/19.5] rounded-[42px] border-[6px] border-[#C15F3C]/40 bg-black shadow-[0_25px_60px_-15px_rgba(193,95,60,0.25)] overflow-hidden animate-float-2 z-30 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[75px] h-[16px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-3 h-1 rounded-full bg-[#C15F3C]/60" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/hotel.png"
                alt="Hotel Management Platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 185px, 225px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Floating Mockup - Power Bank Rental */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-4 sm:right-10 top-[20%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-stone-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden animate-float-3 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-white/40" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/powerbank.png"
                alt="Power Bank Rental Platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 160px, 195px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C15F3C]">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3.5 rounded-full bg-[#C15F3C] shadow-[0_0_10px_#C15F3C]"
        />
      </div>
    </section>
  );
}
