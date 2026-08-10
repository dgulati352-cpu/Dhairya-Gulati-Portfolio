"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building, Globe, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

const SOFTWARE_TOOLS = [
  "Figma",
  "Framer",
  "Adobe XD",
  "Illustrator",
  "Photoshop"
];

const EXPERTISE_TAGS = [
  "Design Systems",
  "Information Architecture (IA)",
  "Conversion Optimization",
  "Usability Testing",
  "Mobile Wireframing",
  "Interactive Prototyping"
];

export default function About() {
  return (
    <section id="about" className="relative py-12 md:py-20 px-6 overflow-hidden bg-[#080808]">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#AA771C]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-3 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Designer Profile</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Dhairya Gulati — Product & Mobile App Designer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Modular Portrait & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative group w-full h-full rounded-3xl overflow-hidden bg-[#121212] p-4 shadow-2xl border border-[#D4AF37]/35 flex flex-col justify-between items-center hover:border-[#D4AF37] transition-all duration-500">
              <div className="relative w-full aspect-[4/3.3] sm:aspect-[4/3.5] rounded-2xl overflow-hidden bg-[#1a1614] mb-3 border border-[#D4AF37]/20">
                <Image
                  src="/portrait.png"
                  alt="Dhairya Gulati — Mobile App & UI/UX Designer in Saharanpur, India"
                  fill
                  className="object-cover object-[center_15%] group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  style={{ objectPosition: "center 15%" }}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#080808]/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-extrabold text-[#D4AF37] border border-[#D4AF37]/40 shadow-md">
                    Product Designer
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>

              <div className="text-center w-full px-2 py-1.5">
                <h4 className="font-serif text-xl font-extrabold gold-text-gradient mb-0.5">Dhairya Gulati</h4>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Mobile App & UI/UX Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Positioning & 4-Block Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Bento Quote Box */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#121212] border border-[#D4AF37]/35 relative overflow-hidden group shadow-2xl cursor-pointer hover:border-[#D4AF37]"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all" />
              <span className="text-[10px] uppercase font-extrabold text-[#D4AF37] tracking-[0.25em] block mb-2">
                CORE POSITIONING
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug italic mb-3">
                "Dhairya Gulati designs high-converting digital products for global clients & startups."
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium">
                I believe exceptional digital product design is the catalyst for global scale. Modern tech startups and international brands deserve world-class mobile app experiences that delight users and drive revenue worldwide.
              </p>
            </motion.div>

            {/* 4-Block Quick Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#121212] border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] transition-all flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-bold text-stone-400 mb-0.5">Education</h5>
                  <p className="text-xs font-bold text-white">Chitkara University</p>
                  <p className="text-[10px] text-stone-400">Chandigarh, India</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#121212] border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] transition-all flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-bold text-stone-400 mb-0.5">Availability</h5>
                  <p className="text-xs font-bold text-white">Global Remote</p>
                  <p className="text-[10px] text-stone-400">Serving Clients Worldwide</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#121212] border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] transition-all flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Building className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-bold text-stone-400 mb-0.5">Target Sectors</h5>
                  <p className="text-xs font-bold text-white">Global Clients & Startups</p>
                  <p className="text-[10px] text-stone-400">SaaS, E-Commerce & Mobile Apps</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#121212] border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] transition-all flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-bold text-stone-400 mb-0.5">Design Focus</h5>
                  <p className="text-xs font-bold text-white">Conversion & Global Scale</p>
                  <p className="text-[10px] text-stone-400">Figma Design Systems</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Full-Width Toolkit & Capabilities Bento Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="mt-6 p-6 sm:p-7 rounded-3xl bg-[#121212] border border-[#D4AF37]/30 shadow-2xl flex flex-col gap-5 cursor-pointer hover:border-[#D4AF37]"
        >
          <div className="flex items-center gap-2.5 border-b border-[#26221A] pb-3.5">
            <div className="p-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <Wrench className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-widest font-extrabold text-[#D4AF37]">Toolkit & Capabilities</h5>
              <p className="text-[11px] text-stone-400 font-medium">Software tools, design systems, and core product capabilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2.5 tracking-wider">
                Software & Tooling
              </span>
              <div className="flex flex-wrap gap-2">
                {SOFTWARE_TOOLS.map((tool) => (
                  <motion.span 
                    key={tool} 
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="text-xs font-semibold text-stone-200 px-3.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#D4AF37]/30 cursor-pointer shadow-xs"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2.5 tracking-wider">
                Design Expertise
              </span>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE_TAGS.map((tag) => (
                  <motion.span 
                    key={tag} 
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="text-xs font-semibold text-[#F3E5AB] px-3.5 py-1.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 cursor-pointer shadow-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
