"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Smartphone, Wrench } from "lucide-react";

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
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Soft orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Design Toolkit</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
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
                className="glass-card-gold rounded-3xl p-7 border border-amber-500/20 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/8">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-white/4 border border-white/8 text-xs font-semibold text-slate-200 hover:border-amber-500/30 hover:text-amber-300 hover:bg-amber-500/10 transition-all cursor-default"
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
