"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Eye, ShieldCheck, Cpu, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  metrics: string[];
}

const PROJECTS: Project[] = [
  {
    id: "hotel",
    title: "Boutique Hotel Management",
    category: "Mobile App & Dashboard UI",
    image: "/hotel.png",
    tagline: "Streamlining guest check-ins, room logistics, and reservations.",
    overview: "A comprehensive digital ecosystem tailored for boutique hotels to automate reservation lifecycles, track operational room readiness in real time, and empower hotel managers with dynamic insights.",
    problem: "Boutique hotels often rely on clunky legacy booking software that lacks mobile optimization, causing slow check-in queues, reservation errors, and high operational overhead.",
    solution: "Designed a mobile-first management application paired with an executive tablet dashboard. Front-desk staff can instantly verify guest check-ins while managers track live occupancy analytics.",
    features: [
      "Dynamic Room Status Matrix (Clean / Dirty / Occupied)",
      "Instant In-App Guest Verification & QR Pass",
      "Drag-and-Drop Interactive Booking Calendar",
      "Executive Revenue & Performance Analytics"
    ],
    metrics: [
      "40% faster check-in cycles",
      "15% increase in operational room utilization",
      "94% staff satisfaction rating in trial runs"
    ]
  },
  {
    id: "powerbank",
    title: "Power Bank Charging Network",
    category: "Product Design & Service App",
    image: "/powerbank.png",
    tagline: "Sleek IoT mobile rental experience for urban commuters.",
    overview: "A mobile application enabling commuters to locate nearby charging kiosks, scan QR codes to rent power banks, track live timer usage, and return hardware to any network station.",
    problem: "Urban commuters face battery anxiety, yet existing rental applications suffered from clunky maps, inaccurate station markers, and slow payment authorization gates.",
    solution: "Engineered a map-centric user experience with instantaneous QR scanning, visual route guidance to active kiosks, active rental timer floating cards, and automated wallet checkouts.",
    features: [
      "Real-time Geo-Location Station Finder",
      "One-Tap Instant QR Code Rental Initiation",
      "Dynamic Floating Active Usage Timer",
      "Automated Multi-Gateway Payment Checkout"
    ],
    metrics: [
      "< 3 seconds from scan to battery release",
      "35% increase in repeat rental conversions",
      "Zero checkout friction failures in user testing"
    ]
  },
  {
    id: "handloom",
    title: "Artisan Handloom Ecommerce",
    category: "Luxury Mobile E-commerce",
    image: "/handloom.png",
    tagline: "Preserving heritage craftsmanship through storytelling UI.",
    overview: "A premium mobile e-commerce platform connecting rural artisan weavers with global buyers, combining modern micro-interactions with rich cultural provenance storytelling.",
    problem: "Authentic handloom products struggle to compete online when standard e-commerce templates strip away artisan provenance, failing to justify premium pricing to buyers.",
    solution: "Constructed an immersive shopping experience highlighting weaver mini-documentaries, loom details, and raw material authenticity seals alongside rapid 2-step checkout flows.",
    features: [
      "Integrated Artisan Provenance Video Player",
      "Material Authenticity Verification Seal",
      "Minimalist 2-Step Frictionless Checkout Funnel",
      "High-Definition Fabric Texture Zoom Lens"
    ],
    metrics: [
      "55% increase in Average Order Value (AOV)",
      "2.4x higher conversion rate on story pages",
      "4.9/5 customer rating on verified reviews"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Featured Portfolio</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Digital Product Work
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Explore how I design high-converting mobile applications and digital platforms that solve real-world problems.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card-gold rounded-3xl overflow-hidden glass-card-hover group cursor-pointer flex flex-col h-full border border-amber-500/20 shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3.2] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gold hover overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full gold-button-gradient font-bold text-xs uppercase tracking-wider text-black shadow-lg shadow-amber-500/30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Case Study</span>
                    <Eye className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Full UI Spec
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#0A0C13] border border-amber-500/30 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
            >
              
              {/* Header Image/Banner */}
              <div className="relative h-[240px] sm:h-[320px] w-full bg-slate-950 border-b border-amber-500/20">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C13] via-[#0A0C13]/50 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:scale-105 transition-all cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-500/20 border border-amber-500/40 px-3.5 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient mt-3">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Side: Overview & Core Breakdown */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Project Overview</h4>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/3 border border-white/8">
                      <h5 className="text-xs uppercase font-bold text-red-400 flex items-center gap-1.5 mb-2">
                        <X className="w-4 h-4" /> The Problem
                      </h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                      <h5 className="text-xs uppercase font-bold text-amber-400 flex items-center gap-1.5 mb-2">
                        <ShieldCheck className="w-4 h-4 text-amber-400" /> The Solution
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed font-medium">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-3">Key UI Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 bg-white/3 border border-white/8 py-3 px-4 rounded-xl">
                          <Cpu className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Metrics */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  <div className="p-5 rounded-2xl glass-card-gold border border-amber-500/30">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-amber-400 flex items-center gap-1.5 mb-4">
                      <Zap className="w-4 h-4 text-amber-400" /> Proven Impact
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {selectedProject.metrics.map((metric, i) => (
                        <li key={i} className="flex flex-col">
                          <span className="text-xl font-extrabold gold-text-gradient">{metric.split(" ")[0]}</span>
                          <span className="text-xs text-slate-400 font-medium">{metric.substring(metric.indexOf(" ") + 1)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/3 border border-white/8 flex flex-col gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">Deliverable Specs</span>
                      <p className="text-xs font-semibold text-slate-300">Complete Figma UI Kit & Prototype</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">Role</span>
                      <p className="text-xs font-semibold text-slate-300">Lead Product & UI/UX Designer</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-end bg-slate-950/60">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 font-semibold text-xs uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
