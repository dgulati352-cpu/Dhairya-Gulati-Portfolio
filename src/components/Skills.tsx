"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SKILLS = [
  { name: "Figma", level: "Expert", color: "from-orange-500 to-red-500" },
  { name: "Framer", level: "Expert", color: "from-blue-500 to-indigo-500" },
  { name: "Adobe XD", level: "Proficient", color: "from-pink-500 to-purple-500" },
  { name: "UI Design", level: "Expert", color: "from-cyan-500 to-blue-500" },
  { name: "UX Design", level: "Expert", color: "from-teal-500 to-emerald-500" },
  { name: "Prototyping", level: "Expert", color: "from-amber-500 to-orange-500" },
  { name: "Design Systems", level: "Expert", color: "from-purple-500 to-fuchsia-500" },
  { name: "Mobile Design", level: "Expert", color: "from-blue-500 to-cyan-500" },
  { name: "User Research", level: "Intermediate", color: "from-emerald-500 to-teal-500" },
];

export default function Skills() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Soft orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Toolbox & Core Skills</h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Design Capabilities
          </h3>
        </div>

        {/* Skill Cards Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-white/20 transition-all cursor-default group"
            >
              {/* Glowing Skill Bullet */}
              <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-md group-hover:scale-125 transition-transform`} />
              
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
