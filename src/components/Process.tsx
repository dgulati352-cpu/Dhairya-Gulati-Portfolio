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
    <section id="process" className="relative py-10 md:py-16 px-6 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#C15F3C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#E27B56]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#C15F3C] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C15F3C]" />
            <span>Workflow Roadmap</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Structured Product & UI/UX Design Process
          </h2>
          <p className="text-stone-600 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            A battle-tested 6-step design process engineered for speed, quality, and business results.
          </p>
        </div>

        {/* Responsive Horizontal Step Card Grid (Clean 2-column layout, no scrollbar overflow) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-7 border border-stone-200/90 dark:border-stone-800 shadow-xl shadow-stone-900/5 hover:border-[#C15F3C]/40 transition-all duration-300 relative overflow-hidden group flex flex-col sm:flex-row gap-5 items-start cursor-pointer"
              >
                {/* Large Background Step Number */}
                <span className="absolute right-4 top-2 text-6xl sm:text-7xl font-serif font-extrabold text-[#C15F3C]/10 group-hover:text-[#C15F3C]/25 select-none transition-colors duration-300 pointer-events-none">
                  {step.num}
                </span>

                {/* Left Side: Icon & Number Badge */}
                <div className="flex sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto shrink-0 border-b sm:border-b-0 sm:border-r border-stone-100 dark:border-stone-800 pb-3 sm:pb-0 sm:pr-5">
                  <div className="p-3.5 rounded-2xl bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] shadow-xs group-hover:bg-[#C15F3C] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C15F3C] mt-0 sm:mt-4">
                    Step {step.num}
                  </span>
                </div>

                {/* Right Side: Title, Description & Details */}
                <div className="flex-1 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <h4 className="font-serif text-xl font-extrabold text-stone-900 dark:text-white mb-2 group-hover:text-[#C15F3C] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-3 font-semibold">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                    <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-medium">
                      {step.details}
                    </p>
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
