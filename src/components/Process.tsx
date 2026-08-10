"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Compass,
  Columns,
  Palette,
  Layers,
  Rocket,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Terminal,
  Zap,
  Cpu
} from "lucide-react";

interface Step {
  num: string;
  stepLabel: string;
  category: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  deliverables: string[];
  metric: string;
  details: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    stepLabel: "MILESTONE 01",
    category: "RESEARCH & DISCOVERY",
    title: "Discovery & Business Architecture",
    icon: Search,
    desc: "Deconstructing complex target business models, auditing competitive landscapes, and mapping user friction points to unlock growth.",
    deliverables: ["Stakeholder Alignment", "Workflow Audit", "Pain Point Mapping", "Opportunity Blueprint"],
    metric: "100% Insight Accuracy",
    details: "Conducting end-to-end user interviews, manual workflow audits, and high-impact structural UI maps."
  },
  {
    num: "02",
    stepLabel: "MILESTONE 02",
    category: "PRODUCT STRATEGY",
    title: "Product Strategy & Navigation Flows",
    icon: Compass,
    desc: "Architecting intuitive navigation hierarchies, data schemas, and high-conversion user journeys tailored for international scale.",
    deliverables: ["Information Architecture", "Milestone Roadmap", "User Flow Diagrams", "Screen Hierarchy"],
    metric: "Seamless UX Flow",
    details: "Establishing milestone targets, primary conversion paths, and multi-platform app structural frameworks."
  },
  {
    num: "03",
    stepLabel: "MILESTONE 03",
    category: "UX BLUEPRINTING",
    title: "Low-Fidelity UX Wireframing",
    icon: Columns,
    desc: "Building precise screen blueprints to validate information layout, thumb-reach accessibility, and core interface transitions.",
    deliverables: ["Low-Fi Blueprints", "Thumb Ergonomics", "CTA Positioning", "Screen Transitions"],
    metric: "Rapid Layout Validation",
    details: "Focusing strictly on effortless navigation, thumb accessibility, and conversion button positioning."
  },
  {
    num: "04",
    stepLabel: "MILESTONE 04",
    category: "VISUAL SYSTEM",
    title: "High-Fidelity UI & Design Systems",
    icon: Palette,
    desc: "Crafting obsidian & gold luxury interface mockups with contrast, custom color tokens, and pixel-perfect typography.",
    deliverables: ["Figma Design Tokens", "Custom Color Systems", "Pixel-Perfect Grids", "Obsidian Dark Mode"],
    metric: "Luxury Visual Polish",
    details: "Applying custom color tokens, responsive layout grids, icon sets, and luxury brand design assets."
  },
  {
    num: "05",
    stepLabel: "MILESTONE 05",
    category: "PROTOTYPING",
    title: "Interactive Prototyping & Motion",
    icon: Layers,
    desc: "Linking mockups into fluid, clickable prototypes complete with natural gesture micro-interactions and realistic state feedback.",
    deliverables: ["Clickable Prototypes", "Gesture Interactions", "Modal Transitions", "Micro-Animations"],
    metric: "Real-Feel User Testing",
    details: "Adding natural gesture micro-interactions, modal overlays, animated state transitions, and form feedback."
  },
  {
    num: "06",
    stepLabel: "MILESTONE 06",
    category: "ENGINEERING HANDOFF",
    title: "Developer Handoff & Quality Assurance",
    icon: Rocket,
    desc: "Structuring clean component libraries, exporting design tokens, and guiding engineering teams through production deployment.",
    deliverables: ["Design Tokens JSON", "Asset Export Package", "Component Specs", "Post-Launch QA"],
    metric: "Zero-Friction Launch",
    details: "Delivering complete design tokens, responsive guidelines, asset exports, and post-launch engineering assistance."
  }
];

function StepCard({ step }: { step: Step }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [isDescDone, setIsDescDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Phase 1: Card Title Typewriter Effect
  useEffect(() => {
    if (!hasStarted) return;
    if (displayedTitle.length < step.title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(step.title.slice(0, displayedTitle.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTitleDone(true);
    }
  }, [hasStarted, displayedTitle, step.title]);

  // Phase 2: Card Primary Description Typewriter Effect
  useEffect(() => {
    if (!isTitleDone) return;
    if (displayedDesc.length < step.desc.length) {
      const timeout = setTimeout(() => {
        setDisplayedDesc(step.desc.slice(0, displayedDesc.length + 1));
      }, 12);
      return () => clearTimeout(timeout);
    } else {
      setIsDescDone(true);
    }
  }, [isTitleDone, displayedDesc, step.desc]);

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="w-full bg-[#121212]/95 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_50px_rgba(212,175,55,0.18)] cursor-pointer"
    >
      {/* Faded Champagne Gold Background Watermark Index */}
      <span className="absolute -right-2 -top-6 text-[120px] sm:text-[150px] font-serif font-extrabold text-[#D4AF37]/10 select-none pointer-events-none group-hover:text-[#D4AF37]/22 transition-colors duration-500 leading-none">
        {step.num}
      </span>

      {/* Top Header Pill Row */}
      <div className="flex items-center justify-between gap-4 relative z-10 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#AA771C]/10 border border-[#D4AF37]/40 text-[#D4AF37] shadow-sm group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
              {step.stepLabel}
            </span>
            <span className="text-[9px] font-bold text-stone-400 tracking-widest uppercase">
              {step.category}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] font-bold text-[#F3E5AB]">
          <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
          <span>{step.metric}</span>
        </div>
      </div>

      {/* Sequential Typewriter Title & Description */}
      <div className="relative z-10 mb-6">
        <h3 className="font-serif text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent mb-3 leading-snug min-h-[2.5rem]">
          {displayedTitle}
          {hasStarted && !isTitleDone && (
            <span className="inline-block animate-pulse text-[#D4AF37] ml-1 font-sans font-normal">|</span>
          )}
        </h3>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium min-h-[3.2rem]">
          {displayedDesc}
          {isTitleDone && !isDescDone && (
            <span className="inline-block animate-pulse text-[#D4AF37] ml-1 font-sans font-normal">|</span>
          )}
        </p>
      </div>

      {/* Deliverable Tags Grid */}
      <div className="relative z-10 mb-6">
        <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-2.5">
          Key Outputs & Deliverables
        </span>
        <div className="flex flex-wrap gap-2">
          {step.deliverables.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-stone-300 px-3.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/45 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Details */}
      <div className="pt-4 border-t border-[#D4AF37]/20 relative z-10 flex items-center justify-between text-xs text-stone-400">
        <span className="flex items-center gap-2 font-mono text-[11px] text-stone-300">
          <Terminal className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span>{step.details}</span>
        </span>
        <div className="p-2 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0 ml-3">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headlineText, setHeadlineText] = useState("");
  const [headlineStarted, setHeadlineStarted] = useState(false);
  const fullHeadline = "ARCHITECTING DIGITAL EXCELLENCE FOR GLOBAL BRANDS";

  // Scroll-Triggered Section Headline Typewriter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !headlineStarted) {
          setHeadlineStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [headlineStarted]);

  useEffect(() => {
    if (!headlineStarted) return;
    if (headlineText.length < fullHeadline.length) {
      const timeout = setTimeout(() => {
        setHeadlineText(fullHeadline.slice(0, headlineText.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [headlineStarted, headlineText]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 md:py-28 px-6 overflow-hidden w-full select-none"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#AA771C]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Warm Grid Overlay */}
      <div className="absolute inset-0 warm-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-4 shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Obsidian & Gold Workflow System</span>
          </motion.div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent tracking-tight leading-tight min-h-[3.5rem] max-w-4xl mx-auto">
            {headlineText}
            {headlineStarted && headlineText.length < fullHeadline.length && (
              <span className="inline-block animate-pulse text-[#D4AF37] ml-1 font-sans font-normal">|</span>
            )}
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm md:text-base font-medium leading-relaxed">
            An end-to-end 6-phase engineering workflow. Scroll down to watch each milestone card reveal its specification details sequentially.
          </p>
        </div>

        {/* Vertical Stack Layout of Milestone Cards */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-4xl mx-auto relative z-10">
          {STEPS.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>

        {/* Section Bottom Summary Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                Ready to transform your product vision?
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                6 Battle-tested phases designed for rapid validation, luxury UI, and global scale.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-2xl terracotta-button-gradient text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start A Project</span>
            <Zap className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bottom Status Footer */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-bold uppercase tracking-widest relative z-10 mt-16 pt-6 border-t border-[#D4AF37]/20">
          <span className="flex items-center gap-2.5 text-[#D4AF37]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]" />
            VERTICAL WORKFLOW ROADMAP
          </span>
          <span className="text-stone-300 font-semibold tracking-[0.2em] flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            01 → 06 OBSIDIAN WORKFLOW STEPS
          </span>
        </div>

      </div>
    </section>
  );
}
