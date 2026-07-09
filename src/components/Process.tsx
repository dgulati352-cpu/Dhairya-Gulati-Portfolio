"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Columns, Palette, Layers, Rocket } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Research",
    icon: Search,
    desc: "Understanding the client business, checking local competitors, and researching user pain points.",
    details: "I analyze existing workflows, audit competitor apps, and conduct short user interviews to find friction points."
  },
  {
    num: "02",
    title: "Strategy",
    icon: Compass,
    desc: "Defining project objectives, core features, app map structure, and user flows.",
    details: "Setting clear milestones, mapping key customer actions, and creating content structure outlines."
  },
  {
    num: "03",
    title: "Wireframes",
    icon: Columns,
    desc: "Creating low-fidelity layout blueprints to validate structure and screen-to-screen routing.",
    details: "Focusing solely on logical information layout, navigation hierarchies, and button positioning."
  },
  {
    num: "04",
    title: "UI Design",
    icon: Palette,
    desc: "Designing high-fidelity dark-themed mockup screens with premium visual aesthetics.",
    details: "Applying typography hierarchy, custom color states, pixel-perfect margins, and brand elements."
  },
  {
    num: "05",
    title: "Prototyping",
    icon: Layers,
    desc: "Linking mockups in Figma/Framer into clickable interactive user journeys.",
    details: "Adding transition curves, modal triggers, micro-animations, and input feedback validation."
  },
  {
    num: "06",
    title: "Launch",
    icon: Rocket,
    desc: "Preparing developer handoff files, exporting code assets, and conducting signoff support.",
    details: "Structuring organized component libraries in Figma, providing specs, and assisting programmers."
  }
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Design Process</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Build Products
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            A structured, collaborative approach tailored to deliver premium apps efficiently.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          
          {/* Vertical central line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] -translate-x-[1px] timeline-line opacity-30 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-20">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between relative ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot/Icon (Desktop) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/25 z-10 hidden md:flex">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Card Content Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="glass-card rounded-2xl p-6 glass-card-hover relative overflow-hidden group">
                      
                      {/* Floating Step Number */}
                      <span className="absolute right-4 top-2 text-7xl font-extrabold text-white/5 group-hover:text-blue-500/5 select-none transition-colors duration-300">
                        {step.num}
                      </span>

                      {/* Header with Icon on mobile */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 md:hidden">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-semibold">
                        {step.desc}
                      </p>

                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {step.details}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for other side layout on desktop */}
                  <div className="w-[45%] hidden md:block" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
