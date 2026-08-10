"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Smartphone, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "Design Software & Tools",
    icon: Wrench,
    items: ["Figma (Master)", "Framer (Expert)", "Adobe XD", "Illustrator", "Photoshop"]
  },
  {
    category: "Product & UI Expertise",
    icon: Smartphone,
    items: ["Mobile App UI/UX", "iOS & Android Guidelines", "Design Systems", "Interactive Wireframing"]
  },
  {
    category: "UX Research & Strategy",
    icon: Layers,
    items: ["User Journey Mapping", "Information Architecture", "Conversion Optimization", "Usability Testing"]
  }
];

export default function Skills() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#080808]">
      {/* Soft orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-3 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Design Toolkit</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Core Technical & Creative Capabilities
          </h3>
        </div>

        {/* Categorized Bento Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#121212] rounded-3xl p-7 border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-500 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#26221A]">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-[#1c1c1c] border border-[#D4AF37]/25 text-xs font-semibold text-stone-200 hover:border-[#D4AF37] hover:text-[#F3E5AB] hover:bg-[#D4AF37]/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
