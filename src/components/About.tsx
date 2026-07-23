"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building, Globe, Sparkles, Wrench, Cpu, ShieldCheck } from "lucide-react";
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
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#C15F3C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E27B56]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-terracotta border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#E88D6A] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E88D6A]" />
            <span>Designer Profile</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
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
            <div className="relative group w-full rounded-3xl overflow-hidden glass-card-terracotta p-4 shadow-2xl border border-[#C15F3C]/20 flex flex-col items-center">
              <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#1E1B16] mb-4 border border-white/10">
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
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] uppercase tracking-widest font-bold text-[#E88D6A] border border-[#C15F3C]/30">
                    Product Designer
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>

              <div className="text-center w-full px-2 py-2">
                <h4 className="font-serif text-xl font-extrabold terracotta-text-gradient mb-1">Dhairya Gulati</h4>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Mobile App & UI/UX Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Positioning, Quick-Facts, and Merged Toolkit Sub-Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Bento Quote Box */}
            <div className="p-8 rounded-3xl glass-card-terracotta border border-[#C15F3C]/25 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C15F3C]/10 rounded-full blur-3xl group-hover:bg-[#C15F3C]/20 transition-all" />
              <span className="text-[10px] uppercase font-bold text-[#E88D6A] tracking-[0.25em] block mb-3">
                CORE POSITIONING
              </span>
              <h4 className="font-serif text-xl md:text-2xl font-bold text-white leading-relaxed italic mb-4">
                "Dhairya Gulati designs digital experiences that help local businesses grow."
              </h4>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-medium">
                I believe digital product design shouldn't be reserved only for tech giants. Local businesses—from restaurants to hotels, salons, and retail stores—deserve world-class mobile app experiences that delight customers and drive revenue.
              </p>
            </div>

            {/* 4-Block Quick Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-[#C15F3C]/40 hover:bg-white/5 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-1">Education</h5>
                  <p className="text-sm font-semibold text-white">Chitkara University</p>
                  <p className="text-[11px] text-stone-400">Chandigarh, India</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-[#C15F3C]/40 hover:bg-white/5 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-1">Location</h5>
                  <p className="text-sm font-semibold text-white">Saharanpur, UP</p>
                  <p className="text-[11px] text-stone-400">Available Worldwide</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-[#C15F3C]/40 hover:bg-white/5 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-1">Target Sectors</h5>
                  <p className="text-sm font-semibold text-white">Local Enterprises</p>
                  <p className="text-[11px] text-stone-400">Hotels, Gyms, Salons & Apps</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/8 hover:border-[#C15F3C]/40 hover:bg-white/5 transition-all flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-1">Design Focus</h5>
                  <p className="text-sm font-semibold text-white">Conversion & Retention</p>
                  <p className="text-[11px] text-stone-400">Figma Design Systems</p>
                </div>
              </div>
            </div>

            {/* Folded Toolkit Sub-Block */}
            <div className="p-6 rounded-3xl glass-card border border-white/8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#E88D6A]" />
                <h5 className="text-xs uppercase tracking-widest font-extrabold text-[#E88D6A]">Toolkit & Capabilities</h5>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Software & Tooling</span>
                  <div className="flex flex-wrap gap-2">
                    {SOFTWARE_TOOLS.map((tool) => (
                      <span key={tool} className="text-xs font-semibold text-stone-200 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Design Expertise</span>
                  <div className="flex flex-wrap gap-2">
                    {EXPERTISE_TAGS.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-[#E88D6A] px-3 py-1 rounded-xl bg-[#C15F3C]/10 border border-[#C15F3C]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
