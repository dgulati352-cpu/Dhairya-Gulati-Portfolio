"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, Search, Compass, Columns, Palette, Layers, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const [isVisible, setIsVisible] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [isDescDone, setIsDescDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Title Typewriter Effect
  useEffect(() => {
    if (!isVisible) return;
    if (displayedTitle.length < step.title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(step.title.slice(0, displayedTitle.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      setIsTitleDone(true);
    }
  }, [isVisible, displayedTitle, step.title]);

  // Description Typewriter Effect (Starts right after title completes)
  useEffect(() => {
    if (!isTitleDone) return;
    if (displayedDesc.length < step.desc.length) {
      const timeout = setTimeout(() => {
        setDisplayedDesc(step.desc.slice(0, displayedDesc.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setIsDescDone(true);
    }
  }, [isTitleDone, displayedDesc, step.desc]);

  const Icon = step.icon;

  return (
    <div
      ref={cardRef}
      className="w-[340px] sm:w-[410px] md:w-[450px] h-[370px] sm:h-[400px] shrink-0 bg-[#1a1614] rounded-3xl p-6 sm:p-8 border border-[#2c2420] shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#c85a32]/60 hover:shadow-[#c85a32]/10 cursor-pointer"
    >
      {/* Massive Faded Background Index Number */}
      <span className="absolute -right-3 -top-6 text-[110px] sm:text-[140px] font-serif font-extrabold text-[#c85a32]/12 select-none pointer-events-none group-hover:text-[#c85a32]/22 transition-colors duration-300 leading-none">
        {step.num}
      </span>

      {/* Top Header: Icon & Step Label */}
      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 sm:p-3.5 rounded-2xl bg-[#c85a32]/15 border border-[#c85a32]/30 text-[#c85a32] shadow-xs group-hover:bg-[#c85a32] group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c85a32]">
          {step.stepLabel}
        </span>
      </div>

      {/* Center: Typewriter Title & Description */}
      <div className="relative z-10 my-auto">
        <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug min-h-[2.75rem]">
          {displayedTitle}
          {isVisible && !isTitleDone && (
            <span className="inline-block animate-pulse text-[#c85a32] ml-0.5 font-sans font-normal">|</span>
          )}
        </h3>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium min-h-[3.5rem]">
          {displayedDesc}
          {isTitleDone && !isDescDone && (
            <span className="inline-block animate-pulse text-[#c85a32] ml-0.5 font-sans font-normal">|</span>
          )}
          {isDescDone && (
            <span className="inline-block opacity-0 animate-pulse text-[#c85a32] ml-0.5 font-sans font-normal">|</span>
          )}
        </p>
      </div>

      {/* Bottom Details Footer */}
      <div className="pt-4 border-t border-[#2c2420] relative z-10">
        <p className="text-stone-400 text-xs leading-relaxed font-medium flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c85a32] shrink-0" />
          {step.details}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;

    if (!sectionEl || !trackEl) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return -(trackEl.scrollWidth - window.innerWidth + 120);
      };

      gsap.to(trackEl, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${trackEl.scrollWidth - window.innerWidth + 240}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#12100e] text-white h-screen w-full overflow-hidden flex flex-col justify-between py-8 px-6 sm:px-12 md:px-16"
    >
      {/* Ambient Glow Highlights */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#c85a32]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#c85a32]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Top Header */}
      <div className="w-full max-w-7xl mx-auto relative z-10 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1614] border border-[#c85a32]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#c85a32] mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#c85a32]" />
          <span>Interactive Workflow Roadmap</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Structured Product & UI/UX Design Process
        </h2>
      </div>

      {/* Horizontal GSAP Scrubbed Track Container */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden relative z-10 my-auto py-4">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 w-max items-center pr-24"
        >
          {STEPS.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>
      </div>

      {/* Bottom Status Footer */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs text-stone-400 font-bold uppercase tracking-widest relative z-10 pb-4 border-t border-[#2c2420] pt-4">
        <span className="flex items-center gap-2.5 text-[#c85a32]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c85a32] animate-pulse shadow-[0_0_8px_#c85a32]" />
          SCROLL DOWN TO MOVE CARDS HORIZONTALLY
        </span>
        <span className="text-stone-400 font-semibold tracking-[0.15em]">
          01 → 06 WORKFLOW STEPS
        </span>
      </div>
    </section>
  );
}
