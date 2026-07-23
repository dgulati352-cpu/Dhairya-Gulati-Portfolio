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
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#C15F3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-terracotta border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#E88D6A] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E88D6A]" />
            <span>Workflow Roadmap</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Build High-Impact Products
          </h3>
          <p className="text-stone-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            A battle-tested 6-step design process engineered for speed, quality, and business results.
          </p>
        </div>

        {/* Desktop View: Horizontal Scroll-Snap Track */}
        <div className="hidden md:block">
          <div className="overflow-x-auto horizontal-scroll-snap flex gap-6 pb-8 pt-2 scrollbar-thin">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="w-[340px] flex-shrink-0 glass-card-terracotta rounded-3xl p-7 glass-card-hover border border-[#C15F3C]/25 relative overflow-hidden group flex flex-col justify-between"
                >
                  <span className="absolute right-4 top-2 text-7xl font-serif font-extrabold text-[#C15F3C]/10 group-hover:text-[#C15F3C]/20 select-none transition-colors duration-300">
                    {step.num}
                  </span>

                  <div>
                    <div className="p-3 rounded-2xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A] w-fit mb-5 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#E88D6A] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-3 font-semibold">
                      {step.desc}
                    </p>
                  </div>

                  <p className="text-stone-400 text-xs leading-relaxed font-medium pt-4 border-t border-white/5">
                    {step.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-3 text-[11px] uppercase font-bold text-stone-500 tracking-widest">
            ← Scroll Horizontally to Explore Workflow →
          </div>
        </div>

        {/* Mobile View: Vertical Timeline Stack */}
        <div className="flex flex-col gap-6 md:hidden">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card-terracotta rounded-3xl p-6 border border-[#C15F3C]/20 relative overflow-hidden"
              >
                <span className="absolute right-4 top-2 text-6xl font-serif font-extrabold text-[#C15F3C]/10 select-none">
                  {step.num}
                </span>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {step.title}
                  </h4>
                </div>

                <p className="text-stone-300 text-xs leading-relaxed mb-2 font-semibold">
                  {step.desc}
                </p>

                <p className="text-stone-400 text-[11px] leading-relaxed font-medium">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
