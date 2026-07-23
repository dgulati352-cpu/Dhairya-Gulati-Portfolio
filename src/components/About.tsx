"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Designer Profile</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting Digital Products For Real-World Growth
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Modular Portrait & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="relative group w-full rounded-3xl overflow-hidden glass-card-gold p-4 shadow-2xl border border-amber-500/20 flex flex-col items-center">
              <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-white/10">
                <Image
                  src="/portrait.png"
                  alt="Dhairya Gulati Portrait"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] uppercase tracking-widest font-bold text-amber-300 border border-amber-500/30">
                    Product Designer
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Projects
                  </span>
                </div>
              </div>

              <div className="text-center w-full px-2 py-2">
                <h4 className="text-xl font-extrabold gold-text-gradient mb-1">Dhairya Gulati</h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mobile App & UI/UX Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modular Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Bento Quote Box */}
            <div className="p-8 rounded-3xl glass-card-gold border border-amber-500/25 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <span className="text-[10px] uppercase font-bold text-amber-400/90 tracking-[0.25em] block mb-3">
                CORE POSITIONING
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white leading-relaxed italic mb-4">
                "Dhairya Gulati designs digital experiences that help local businesses grow."
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                I believe digital product design shouldn't be reserved only for tech giants. Local businesses—from restaurants to hotels, salons, and retail stores—deserve world-class mobile app experiences that delight customers and drive revenue.
              </p>
            </div>

            {/* 4-Block Modular Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-amber-500/30 hover:bg-white/5 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Education</h5>
                  <p className="text-sm font-semibold text-white">Chitkara University</p>
                  <p className="text-[11px] text-slate-400">Chandigarh, India</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-amber-500/30 hover:bg-white/5 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Location</h5>
                  <p className="text-sm font-semibold text-white">Saharanpur, UP</p>
                  <p className="text-[11px] text-slate-400">Available Worldwide</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-amber-500/30 hover:bg-white/5 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Target Sectors</h5>
                  <p className="text-sm font-semibold text-white">Local Enterprises</p>
                  <p className="text-[11px] text-slate-400">Hotels, Gyms, Salons & Apps</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-amber-500/30 hover:bg-white/5 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Design Focus</h5>
                  <p className="text-sm font-semibold text-white">Conversion & Retention</p>
                  <p className="text-[11px] text-slate-400">Figma & Framer Systems</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
