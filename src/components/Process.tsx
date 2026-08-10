"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Sparkles,
  Search,
  Compass,
  Columns,
  Palette,
  Layers,
  Rocket,
  CheckCircle2,
  Terminal,
  Zap,
  Cpu
} from "lucide-react";

interface Step {
  num: string;
  stepLabel: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  deliverables: string[];
  deliverableLabel: string;
  metric: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    stepLabel: "STEP 01",
    title: "Discovery & Research",
    icon: Search,
    desc: "Deconstructing target business models, evaluating local competition, and mapping user pain points to unlock high-impact opportunities.",
    deliverables: ["Stakeholder Interviews", "Workflow Audit", "Pain Point Mapping", "UI/UX Opportunities"],
    deliverableLabel: "Research Specs & Insights",
    metric: "100% Insight Accuracy"
  },
  {
    num: "02",
    stepLabel: "STEP 02",
    title: "Product Strategy & Flows",
    icon: Compass,
    desc: "Defining clear core features, app navigation architecture, and conversion-focused user journeys engineered for global scale.",
    deliverables: ["Information Architecture", "Milestone Mapping", "User Flow Diagrams", "Screen Hierarchy"],
    deliverableLabel: "Product Blueprint",
    metric: "Seamless UX Architecture"
  },
  {
    num: "03",
    stepLabel: "STEP 03",
    title: "UX Wireframing",
    icon: Columns,
    desc: "Building low-fidelity screen blueprints to validate information layout, thumb accessibility, and screen transitions before visual polish.",
    deliverables: ["Low-Fi Blueprints", "Thumb Accessibility", "CTA Optimization", "Screen Transitions"],
    deliverableLabel: "Interactive Wireframes",
    metric: "Rapid Layout Validation"
  },
  {
    num: "04",
    stepLabel: "STEP 04",
    title: "High-Fidelity UI Design",
    icon: Palette,
    desc: "Crafting luxury interface mockups with dark-mode visual aesthetics, custom color tokens, and pixel-perfect typography.",
    deliverables: ["Figma Design System", "Custom Color Tokens", "Pixel-Perfect Grids", "Dark Mode Styling"],
    deliverableLabel: "High-Fi UI System",
    metric: "Luxury Visual Polish"
  },
  {
    num: "05",
    stepLabel: "STEP 05",
    title: "Interactive Prototyping",
    icon: Layers,
    desc: "Linking mockups in Figma into fluid, interactive prototypes featuring natural gesture micro-interactions and state feedback.",
    deliverables: ["Figma Prototype", "Micro-Interactions", "Modal Overlays", "Form Feedback"],
    deliverableLabel: "Clickable Prototype",
    metric: "Real-Feel User Testing"
  },
  {
    num: "06",
    stepLabel: "STEP 06",
    title: "Developer Handoff & Launch",
    icon: Rocket,
    desc: "Structuring clean Figma component libraries, exporting production code assets, and providing ongoing engineering support.",
    deliverables: ["Design Tokens JSON", "Asset Export Package", "Component Specs", "Post-Launch QA"],
    deliverableLabel: "Production Handoff",
    metric: "Zero-Friction Launch"
  }
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [phase, setPhase] = useState<"idle" | "title" | "desc" | "done">("idle");
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "idle") {
          setPhase("title");
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [phase]);

  // Phase 1: Title Typewriter
  useEffect(() => {
    if (phase !== "title") return;
    if (displayedTitle.length < step.title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(step.title.slice(0, displayedTitle.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setPhase("desc");
    }
  }, [phase, displayedTitle, step.title]);

  // Phase 2: Description Typewriter
  useEffect(() => {
    if (phase !== "desc") return;
    if (displayedDesc.length < step.desc.length) {
      const timeout = setTimeout(() => {
        setDisplayedDesc(step.desc.slice(0, displayedDesc.length + 1));
      }, 12);
      return () => clearTimeout(timeout);
    } else {
      setPhase("done");
    }
  }, [phase, displayedDesc, step.desc]);

  const Icon = step.icon;

  return (
    <div
      ref={cardRef}
      className={`relative w-full my-6 md:my-10 flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Empty Spacer Column for Desktop Timeline Alignment */}
      <div className="hidden md:block w-1/2" />

      {/* Center Laser Timeline Node & Radar Pulse */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-[#c85a32] opacity-30" />
          <div className="w-10 h-10 rounded-full bg-[#1a1614] border-2 border-[#c85a32] flex items-center justify-center text-xs font-serif font-extrabold text-[#c85a32] shadow-[0_0_15px_rgba(200,90,50,0.5)] z-10">
            {step.num}
          </div>
        </div>
      </div>

      {/* Card Body Container */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -6, scale: 1.01 }}
        className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0"
      >
        <div className="bg-[#1a1614]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#2c2420] shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#c85a32]/70 hover:shadow-[0_15px_40px_rgba(200,90,50,0.2)] transition-all duration-500 cursor-pointer">
          
          {/* Faded Background Watermark Number */}
          <span className="absolute -right-2 -top-6 text-[110px] sm:text-[140px] font-serif font-extrabold text-[#c85a32]/10 select-none pointer-events-none group-hover:text-[#c85a32]/20 transition-colors duration-500 leading-none">
            {step.num}
          </span>

          {/* Glowing Top Pill Bar */}
          <div className="flex items-center justify-between gap-3 relative z-10 mb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#c85a32]/15 border border-[#c85a32]/30 text-[#c85a32] group-hover:bg-[#c85a32] group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#c85a32]">
                {step.stepLabel}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{step.metric}</span>
            </div>
          </div>

          {/* Sequential Typewriter Title & Description */}
          <div className="relative z-10 mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug min-h-[2.5rem]">
              {displayedTitle}
              {phase === "title" && (
                <span className="inline-block animate-pulse text-[#c85a32] ml-1 font-sans font-normal">|</span>
              )}
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium min-h-[3.2rem]">
              {displayedDesc}
              {phase === "desc" && (
                <span className="inline-block animate-pulse text-[#c85a32] ml-1 font-sans font-normal">|</span>
              )}
            </p>
          </div>

          {/* Deliverable Tags Grid */}
          <div className="relative z-10 mb-5">
            <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-2">
              Deliverables & Outputs
            </span>
            <div className="flex flex-wrap gap-2">
              {step.deliverables.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-stone-300 px-3 py-1 rounded-xl bg-[#241e1b] border border-[#342a25] group-hover:border-[#c85a32]/30 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#c85a32]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Footer Artifact Status */}
          <div className="pt-4 border-t border-[#2c2420] relative z-10 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-stone-400">
              <Terminal className="w-3.5 h-3.5 text-[#c85a32]" />
              {step.deliverableLabel}
            </span>
            <span className="text-[10px] font-bold text-[#c85a32] uppercase tracking-wider">
              Phase {step.num} Verified ✓
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#12100e] text-white py-16 md:py-28 px-6 overflow-hidden w-full"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c85a32]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#c85a32]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 warm-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1614] border border-[#c85a32]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#c85a32] mb-4 shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c85a32] animate-pulse" />
            <span>Interactive Workflow Roadmap</span>
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Structured Product & <br className="hidden sm:inline" />
            <span className="terracotta-text-gradient font-serif">UI/UX Design Process</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-medium leading-relaxed">
            An end-to-end 6-phase engineering workflow. Scroll down to watch each milestone node type into view sequentially.
          </p>
        </div>

        {/* Timeline Container with Center Glowing Laser Line */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Central Vertical Laser Beam Track */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#2c2420]" />
          
          {/* Animated Glowing Laser Pulse Fill */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c85a32] via-[#e27b56] to-[#c85a32] shadow-[0_0_12px_#c85a32] z-10"
          />

          {/* Step Cards List */}
          <div className="flex flex-col gap-6 md:gap-4 relative z-10">
            {STEPS.map((step, idx) => (
              <StepCard key={step.num} step={step} index={idx} />
            ))}
          </div>

        </div>

        {/* Section Bottom Summary Meter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-3xl bg-[#1a1614] border border-[#c85a32]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#c85a32]/15 border border-[#c85a32]/30 text-[#c85a32]">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                Ready to transform your product vision?
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 font-medium">
                6 Battle-tested phases designed for rapid validation, world-class UI, and high conversion.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-2xl terracotta-button-gradient text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#c85a32]/25 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start A Project</span>
            <Zap className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
