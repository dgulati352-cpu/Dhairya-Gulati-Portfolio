"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, Search, Compass, Columns, Palette, Layers, Rocket } from "lucide-react";

interface Step {
  num: string;
  stepLabel: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    stepLabel: "STEP 01",
    title: "Discovery & Research",
    icon: Search,
    desc: "Deconstructing target business models, evaluating local competition, and mapping user pain points.",
    details: "Conducting stakeholder interviews, auditing existing manual workflows, and identifying high-impact UI opportunities."
  },
  {
    num: "02",
    stepLabel: "STEP 02",
    title: "Product Strategy & Flows",
    icon: Compass,
    desc: "Defining clear core features, app navigation architecture, and conversion-focused user journeys.",
    details: "Establishing milestone targets, mapping primary user actions, and structuring seamless screen hierarchies."
  },
  {
    num: "03",
    stepLabel: "STEP 03",
    title: "UX Wireframing",
    icon: Columns,
    desc: "Building low-fidelity screen blueprints to validate information layout and screen transitions.",
    details: "Focusing strictly on intuitive navigation, thumb accessibility, and clear call-to-action button placements."
  },
  {
    num: "04",
    stepLabel: "STEP 04",
    title: "High-Fidelity UI Design",
    icon: Palette,
    desc: "Crafting dark-mode interface mockups with luxury visual aesthetics, typography, and contrast.",
    details: "Applying custom color tokens, pixel-perfect layout grids, custom icons, and brand design elements."
  },
  {
    num: "05",
    stepLabel: "STEP 05",
    title: "Interactive Prototyping",
    icon: Layers,
    desc: "Linking mockups in Figma into fluid, interactive prototypes for stakeholder testing.",
    details: "Adding natural gesture micro-interactions, modal overlays, animated state transitions, and form feedback."
  },
  {
    num: "06",
    stepLabel: "STEP 06",
    title: "Developer Handoff & Launch",
    icon: Rocket,
    desc: "Structuring clean Figma component libraries, exporting code assets, and guiding engineering teams.",
    details: "Delivering complete design tokens, responsive guidelines, asset exports, and post-launch QA assistance."
  }
];

function StepCard({ step }: { step: Step }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [displayedDetails, setDisplayedDetails] = useState("");
  const [phase, setPhase] = useState<"idle" | "title" | "desc" | "details" | "done">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "idle") {
          setPhase("title");
        }
      },
      { threshold: 0.25 }
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
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      setPhase("desc");
    }
  }, [phase, displayedTitle, step.title]);

  // Phase 2: Primary Description Typewriter (Triggers after Title)
  useEffect(() => {
    if (phase !== "desc") return;
    if (displayedDesc.length < step.desc.length) {
      const timeout = setTimeout(() => {
        setDisplayedDesc(step.desc.slice(0, displayedDesc.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setPhase("details");
    }
  }, [phase, displayedDesc, step.desc]);

  // Phase 3: Sub-description Typewriter (Triggers after Description)
  useEffect(() => {
    if (phase !== "details") return;
    if (displayedDetails.length < step.details.length) {
      const timeout = setTimeout(() => {
        setDisplayedDetails(step.details.slice(0, displayedDetails.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setPhase("done");
    }
  }, [phase, displayedDetails, step.details]);

  const Icon = step.icon;

  return (
    <div
      ref={cardRef}
      className="w-full bg-[#1a1614] rounded-3xl p-7 sm:p-9 border border-[#2c2420] shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:border-[#c85a32]/60 hover:shadow-[#c85a32]/10 cursor-pointer"
    >
      {/* Massive Faded Background Index Number */}
      <span className="absolute -right-4 -top-6 text-[120px] sm:text-[150px] font-serif font-extrabold text-[#c85a32]/12 select-none pointer-events-none group-hover:text-[#c85a32]/22 transition-colors duration-300 leading-none">
        {step.num}
      </span>

      {/* Card Header: Icon & Step Label */}
      <div className="flex items-center gap-4 relative z-10 mb-6">
        <div className="p-3.5 rounded-2xl bg-[#c85a32]/15 border border-[#c85a32]/30 text-[#c85a32] shadow-xs group-hover:bg-[#c85a32] group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#c85a32]">
          {step.stepLabel}
        </span>
      </div>

      {/* Sequential Typewriter Content: Title & Primary Description */}
      <div className="relative z-10 mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug min-h-[2.5rem]">
          {displayedTitle}
          {phase === "title" && (
            <span className="inline-block animate-pulse text-[#c85a32] ml-1 font-sans font-normal">|</span>
          )}
        </h3>

        <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-medium min-h-[3rem]">
          {displayedDesc}
          {phase === "desc" && (
            <span className="inline-block animate-pulse text-[#c85a32] ml-1 font-sans font-normal">|</span>
          )}
        </p>
      </div>

      {/* Sub-description (Details) Footer */}
      <div className="pt-5 border-t border-[#2c2420] relative z-10">
        <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-medium flex items-start gap-2.5 min-h-[1.75rem]">
          <span className="w-2 h-2 rounded-full bg-[#c85a32] shrink-0 mt-1.5" />
          <span>
            {displayedDetails}
            {phase === "details" && (
              <span className="inline-block animate-pulse text-[#c85a32] ml-1 font-sans font-normal">|</span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-[#12100e] text-white py-16 md:py-24 px-6 overflow-hidden w-full"
    >
      {/* Background Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c85a32]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#c85a32]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1614] border border-[#c85a32]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#c85a32] mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a32]" />
            <span>Workflow Roadmap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Structured Product & UI/UX Design Process
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-medium">
            A battle-tested design process where each step sequentially types into view as you scroll down.
          </p>
        </div>

        {/* Clean Centered Vertical Column (flex-direction: column) with Generous Spacing */}
        <div className="flex flex-col gap-8 md:gap-12 w-full max-w-3xl mx-auto">
          {STEPS.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>

      </div>
    </section>
  );
}
