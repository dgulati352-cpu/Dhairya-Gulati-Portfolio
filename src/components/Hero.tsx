"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Award, Smartphone, CheckCircle, Star } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 pb-24 px-6 z-10"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 glow-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Luxury Grid Overlay */}
      <div className="absolute inset-0 luxury-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Modular Luxury Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold border border-amber-500/30 text-xs font-bold tracking-[0.2em] text-amber-300 mb-6 uppercase backdrop-blur-md shadow-lg shadow-amber-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>DHAIRYA GULATI — MOBILE APP & UI/UX STUDIO</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            Dhairya Gulati <br />
            <span className="gold-text-gradient">
              Crafting Apps That Scale Local Businesses
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-medium"
          >
            Official Portfolio of Dhairya Gulati: Premium Mobile App & UI/UX Designer creating high-converting mobile applications, restaurant systems, hotel platforms, and digital brand experiences.
          </motion.p>

          {/* Modular Metrics Bento Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-3 gap-3 w-full max-w-lg mb-10 p-2 rounded-2xl glass-card border border-amber-500/15"
          >
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/3 border border-white/5">
              <span className="text-xl font-extrabold gold-text-gradient">10+</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Live Apps</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/3 border border-white/5">
              <span className="text-xl font-extrabold gold-text-gradient">99%</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Satisfaction</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/3 border border-white/5">
              <span className="text-xl font-extrabold gold-text-gradient">Figma</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5">UI/UX Master</span>
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
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl gold-button-gradient text-black font-bold uppercase tracking-wider text-xs transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-amber-200 font-semibold text-xs uppercase tracking-wider transition-all hover:bg-amber-500/10 hover:border-amber-500/40 hover:-translate-y-0.5 border border-amber-500/20 group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Floating mockups visual with Modular Badges */}
        <div className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Glowing central golden orb */}
          <div className="absolute w-[380px] h-[380px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Badge 1 - Top Rated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-4 left-2 z-40 px-3.5 py-2 rounded-2xl glass-card-gold border border-amber-500/30 shadow-xl flex items-center gap-2"
          >
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Top Rated</span>
              <span className="text-[9px] font-medium text-slate-400">UI/UX App Designer</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Live Apps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-6 right-2 z-40 px-3.5 py-2 rounded-2xl glass-card-gold border border-amber-500/30 shadow-xl flex items-center gap-2"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">iOS & Android</span>
              <span className="text-[9px] font-medium text-slate-400">Native Performance</span>
            </div>
          </motion.div>

          {/* Left Floating Mockup - Handloom Ecommerce */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-4 sm:left-10 top-[15%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-slate-900 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden animate-float-1 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-amber-500/40" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Center Floating Mockup - Hotel Management */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[185px] sm:w-[225px] aspect-[9/19.5] rounded-[42px] border-[6px] border-amber-500/30 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(212,175,55,0.25)] overflow-hidden animate-float-2 z-30 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[75px] h-[16px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-3 h-1 rounded-full bg-amber-400/50" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Floating Mockup - Power Bank Rental */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-4 sm:right-10 top-[20%] w-[160px] sm:w-[195px] aspect-[9/19.5] rounded-[36px] border-[5px] border-slate-900 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden animate-float-3 z-25 group"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-2.5 h-1 rounded-full bg-amber-500/40" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-amber-400/80">Scroll to Discover</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#D4AF37]"
        />
      </div>
    </section>
  );
}
