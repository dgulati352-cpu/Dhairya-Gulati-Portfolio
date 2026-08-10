"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Star, Smartphone, Sparkles, Zap } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-24 md:pb-28 px-6 z-10"
    >
      {/* Background glow effects - Animated pulse */}
      <div className="absolute inset-0 glow-bg" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C15F3C]/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#E27B56]/5 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Warm Grid Overlay */}
      <div className="absolute inset-0 warm-grid opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Animated Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900/80 border border-[#C15F3C]/30 shadow-md shadow-stone-900/5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300 tracking-wider uppercase">
              Available for Global Projects
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C15F3C] animate-pulse" />
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
              Crafting Apps That Scale Global Tech & Startups
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-stone-600 max-w-xl mb-8 leading-relaxed font-medium"
          >
            Official Portfolio of Dhairya Gulati: Mobile App & UI/UX Designer creating high-converting iOS & Android applications, SaaS interfaces, and digital product experiences for global clients worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-8 lg:mb-0"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollClick(e, "projects")}
              className="relative overflow-hidden flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl terracotta-button-gradient text-white font-bold uppercase tracking-wider text-xs transition-all shadow-xl shadow-[#C15F3C]/25 hover:shadow-[#C15F3C]/40 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer whitespace-nowrap"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
            <a
              href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider transition-all hover:bg-emerald-100/80 border border-emerald-300 dark:border-emerald-700/50 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer shadow-sm whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Scroll-linked project reveal */}
        <div className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Glowing central orb */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[400px] h-[400px] bg-[#C15F3C]/10 rounded-full blur-[110px] pointer-events-none" 
          />

          {/* Floating Badge 1 - Top Rated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: 0.6 }}
            className="absolute top-2 left-0 z-40 px-4 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl flex items-center gap-2.5 cursor-pointer backdrop-blur-lg"
          >
            <div className="p-1.5 rounded-lg bg-[#C15F3C]/10 text-[#C15F3C]">
              <Star className="w-4 h-4 fill-[#C15F3C]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C15F3C]">Top Rated</span>
              <span className="text-[9px] font-semibold text-stone-500 dark:text-stone-400">UI/UX Specialist</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Live Apps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-4 right-0 z-40 px-4 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl flex items-center gap-2.5 cursor-pointer backdrop-blur-lg"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Smartphone className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">iOS & Android</span>
              <span className="text-[9px] font-semibold text-stone-500 dark:text-stone-400">Native Performance</span>
            </div>
          </motion.div>

          {/* Left Floating Mockup - Handloom Ecommerce */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
            whileHover={{ scale: 1.08, rotate: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 260 }}
            className="absolute left-4 sm:left-10 top-[15%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-stone-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden animate-float-1 z-25 group cursor-pointer"
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
            whileHover={{ scale: 1.08, y: -12 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 260 }}
            className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[185px] sm:w-[225px] aspect-[9/19.5] rounded-[42px] border-[6px] border-[#C15F3C]/50 bg-black shadow-[0_25px_60px_-15px_rgba(193,95,60,0.4)] overflow-hidden animate-float-2 z-30 group cursor-pointer"
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
            whileHover={{ scale: 1.08, rotate: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 260 }}
            className="absolute right-4 sm:right-10 top-[20%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-stone-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden animate-float-3 z-25 group cursor-pointer"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-white/40" />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/powerbank.png"
                alt="Powerbank IoT Rental Station Mobile App UI UX Design by Dhairya Gulati"
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

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleScrollClick(e, "about")}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#C15F3C] group-hover:text-[#D66F4A] transition-colors">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#C15F3C]/60 group-hover:border-[#C15F3C] flex justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] shadow-[0_0_8px_#C15F3C]"
          />
        </div>
      </motion.a>
    </section>
  );
}

