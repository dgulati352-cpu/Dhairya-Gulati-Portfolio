"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Columns, Palette, Layers, Rocket, Sparkles } from "lucide-react";

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
    title: "Discovery & Research",
    icon: Search,
    desc: "Deconstructing target business models, evaluating local competition, and mapping user pain points.",
    details: "Conducting stakeholder interviews, auditing existing manual workflows, and identifying high-impact UI opportunities."
  },
  {
    num: "02",
    title: "Product Strategy & Flows",
    icon: Compass,
    desc: "Defining clear core features, app navigation architecture, and conversion-focused user journeys.",
    details: "Establishing milestone targets, mapping primary user actions, and structuring seamless screen hierarchies."
  },
  {
    num: "03",
    title: "UX Wireframing",
    icon: Columns,
    desc: "Building low-fidelity screen blueprints to validate information layout and screen transitions.",
    details: "Focusing strictly on intuitive navigation, thumb accessibility, and clear call-to-action button placements."
  },
  {
    num: "04",
    title: "High-Fidelity UI Design",
    icon: Palette,
    desc: "Crafting dark-mode interface mockups with luxury visual aesthetics, typography, and contrast.",
    details: "Applying custom color tokens, pixel-perfect layout grids, custom icons, and brand design elements."
  },
  {
    num: "05",
    title: "Interactive Prototyping",
    icon: Layers,
    desc: "Linking mockups in Figma into fluid, interactive prototypes for stakeholder testing.",
    details: "Adding natural gesture micro-interactions, modal overlays, animated state transitions, and form feedback."
  },
  {
    num: "06",
    title: "Developer Handoff & Launch",
    icon: Rocket,
    desc: "Structuring clean Figma component libraries, exporting code assets, and guiding engineering teams.",
    details: "Delivering complete design tokens, responsive guidelines, asset exports, and post-launch QA assistance."
  }
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Workflow Roadmap</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Build High-Impact Products
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            A battle-tested 6-step design process engineered for speed, quality, and business results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          
          {/* Vertical central gold line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-[1px] timeline-line opacity-40 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-16">
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
                  {/* Timeline Gold Node (Desktop) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A0C13] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10 hidden md:flex">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Modular Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-[46%] pl-8 md:pl-0"
                  >
                    <div className="glass-card-gold rounded-3xl p-7 glass-card-hover relative overflow-hidden group border border-amber-500/20 shadow-xl">
                      
                      {/* Floating Step Number */}
                      <span className="absolute right-4 top-2 text-7xl font-extrabold text-amber-500/5 group-hover:text-amber-500/10 select-none transition-colors duration-300">
                        {step.num}
                      </span>

                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 md:hidden">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-3 font-semibold">
                        {step.desc}
                      </p>

                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {step.details}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="w-[46%] hidden md:block" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
