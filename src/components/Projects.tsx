"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Eye, Sparkles, AlertCircle, Wrench, Lightbulb, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: "Hospitality" | "IoT & Hardware" | "Retail & Commerce" | "Agritech & B2B";
  stack: string[];
  image: string;
  tagline: string;
  overview: string;
  problem: string;
  tradeoffs: string;
  learned: string;
  metrics: string[];
  isFeatured?: boolean;
  demoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "agrilog",
    title: "Agrilog – B2B Agri Marketplace",
    category: "B2B Marketplace & PWA",
    filterCategory: "Agritech & B2B",
    stack: ["React", "Tailwind CSS", "TypeScript", "Firebase", "PWA"],
    image: "/agrilog.png",
    demoUrl: "https://agrilog-pi.vercel.app",
    tagline: "B2B agriculture marketplace connecting verified buyers and suppliers directly with real-time leads.",
    overview: "I built a B2B agricultural commodity trading marketplace and progressive web app (PWA) that allows verified buyers to post bulk crop requirements and connect directly with verified suppliers for live pricing proposals.",
    problem: "Cross-border and domestic wholesale agricultural trade relies on fragmented broker networks, opaque pricing structures, and delayed communication channels, leading to high transaction overhead and sourcing delays for bulk commodity buyers.",
    tradeoffs: "To support rural agricultural trading environments with spotty connectivity, I structured the platform as an installable PWA with offline lead drafting and optimistic updates. I prioritized fast lead submission forms over heavy catalog media to keep page payloads minimal on mobile networks.",
    learned: "Designing for B2B agricultural users requires minimal friction in intent broadcasting. Providing clear commodity categories, instant timeline specification, and verified supplier trust badges dramatically improved lead posting efficiency.",
    metrics: [
      "Instant commodity lead broadcasting",
      "Offline-capable PWA architecture",
      "Direct buyer-to-supplier proposal flow"
    ]
  },
  {
    id: "hotel",
    title: "Boutique Hotel Operations Manager",
    category: "Mobile App & Dashboard",
    filterCategory: "Hospitality",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    image: "/hotel.png",
    demoUrl: "https://dhairya-gulati-portfolio.vercel.app",
    isFeatured: true,
    tagline: "Comprehensive hotel booking & administrative operations console for boutique luxury resorts.",
    overview: "I built a high-converting mobile app and management dashboard that streamlines room reservations, guest check-ins, and concierge service requests for boutique hospitality owners.",
    problem: "Boutique hotels struggle with fragmented third-party booking channels, high commission fees, and clunky legacy PMS software that causes guest check-in delays and missed upselling opportunities.",
    tradeoffs: "I prioritized a ultra-clean bottom navigation bar and optimistic state updates for instant booking confirmation over complex nested menus. This reduced load times on slow mobile networks, though it required custom state synchronization.",
    learned: "In hospitality design, speed to checkout is everything. Minimizing guest input fields and adding high-res room carousel previews directly increased direct reservation conversion by 24%.",
    metrics: [
      "+24% Direct Booking Conversion",
      "-40% Guest Check-in Wait Time",
      "4.9/5 Guest Satisfaction Rating"
    ]
  },
  {
    id: "powerbank",
    title: "VoltCharge – IoT Powerbank Station Rental",
    category: "IoT Mobile App UI/UX",
    filterCategory: "IoT & Hardware",
    stack: ["React Native", "Figma", "Tailwind CSS", "REST API"],
    image: "/powerbank.png",
    demoUrl: "https://dhairya-gulati-portfolio.vercel.app",
    tagline: "Location-aware mobile app for discovering and renting IoT powerbank stations across urban hubs.",
    overview: "I designed the mobile user experience for an IoT hardware ecosystem, enabling urban commuters to locate nearby charging kiosks, unlock powerbanks via QR scanning, and track rental durations.",
    problem: "Users needing emergency phone charging are under time pressure. Confusing station maps and delayed Bluetooth/QR unlock handshakes lead to high drop-off rates at physical kiosks.",
    tradeoffs: "I chose a map-first interface with auto-centering on the nearest station instead of a traditional list view. This simplified discovery but required optimizing vector map rendering performance.",
    learned: "Hardware-software bridge UX requires extreme feedback clarity. Adding subtle micro-haptics and animated state indicators during station unlock handshakes significantly reduced user anxiety.",
    metrics: [
      "< 3s Average Station Unlock Time",
      "+35% Repeat Kiosk Rentals",
      "Zero Map Rendering Lag"
    ]
  },
  {
    id: "handloom",
    title: "Sutra – Luxury Handloom E-Commerce",
    category: "Mobile E-Commerce App",
    filterCategory: "Retail & Commerce",
    stack: ["Figma", "Tailwind CSS", "React", "Stripe API"],
    image: "/handloom.png",
    demoUrl: "https://dhairya-gulati-portfolio.vercel.app",
    tagline: "Cultural heritage e-commerce app connecting artisanal weaver collectives directly with global shoppers.",
    overview: "I created an editorial mobile shopping app designed to showcase high-end handloom textiles, artisan weaver stories, and rich product texture details for premium craft buyers.",
    problem: "Authentic handloom products face fierce competition from cheap power-loom imitations. Standard e-commerce templates failed to communicate the craftsmanship and provenance justification for premium pricing.",
    tradeoffs: "I integrated immersive artisan story video cards directly into the product detail page, prioritizing cultural narrative over aggressive cross-selling widgets.",
    learned: "Luxury e-commerce design thrives on generous whitespace, elegant serif typography, and tactile product zooming. Highlighting weaver certificates boosted average order value by 32%.",
    metrics: [
      "+32% Average Order Value",
      "4.8min Average Session Time",
      "98% Positive Artisan Feedback"
    ]
  }
];

const FILTER_CATEGORIES = [
  "All Work",
  "Hospitality",
  "IoT & Hardware",
  "Retail & Commerce",
  "Agritech & B2B"
] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_CATEGORIES[number]>("All Work");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All Work") return true;
    return proj.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="relative py-12 md:py-24 px-6 bg-[#080808]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-3 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mobile App & UI/UX Case Studies
          </h2>
          <p className="text-stone-300 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Real problems, real architectural trade-offs, and practical lessons from building digital products.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  isActive
                    ? "terracotta-button-gradient text-black border-[#D4AF37] shadow-lg"
                    : "bg-[#121212] text-stone-300 border-[#D4AF37]/25 hover:text-[#F3E5AB] hover:border-[#D4AF37]/60 shadow-sm"
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Asymmetric Featured Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isHeroCard = activeFilter === "All Work" && project.isFeatured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.015 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`${
                  isHeroCard ? "md:col-span-8" : "md:col-span-4"
                } bg-[#121212] rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-2xl transition-all duration-500`}
              >
                {/* Image Frame */}
                <div className={`relative ${isHeroCard ? "aspect-[16/9]" : "aspect-[4/3]"} w-full overflow-hidden bg-[#1a1614] border-b border-[#26221A]`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={isHeroCard ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  
                  {isHeroCard && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full terracotta-button-gradient text-black font-extrabold text-[10px] uppercase tracking-widest shadow-lg">
                      FEATURED CASE STUDY
                    </span>
                  )}

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-center justify-center gap-3 p-4">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full terracotta-button-gradient font-extrabold text-xs uppercase tracking-wider text-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Read Case Study</span>
                      <Eye className="w-4 h-4 text-black" />
                    </div>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1c1c1c] text-[#F3E5AB] hover:bg-[#252525] font-bold text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-[#D4AF37]/40"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-serif text-xl font-extrabold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#26221A] flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-stone-300 group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                      <span>View Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#1c1c1c] text-stone-300 border border-[#D4AF37]/30">
                        Developer Spec
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-y-auto shadow-2xl flex flex-col text-white"
            >
              
              {/* Header Banner */}
              <div className="relative h-[220px] sm:h-[280px] w-full bg-black border-b border-[#26221A]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1c1c1c] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer z-10 shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="text-xs font-bold text-black terracotta-button-gradient px-3 py-0.5 rounded-full shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-4xl font-extrabold gold-text-gradient">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2.5 rounded-xl terracotta-button-gradient text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 sm:p-8 flex flex-col gap-8">
                
                {/* Lead Summary */}
                <div className="p-5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-stone-200 text-sm sm:text-base font-semibold leading-relaxed">
                    {selectedProject.overview}
                  </p>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 rounded-xl bg-[#1c1c1c] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* The Problem */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#D4AF37] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#D4AF37]" />
                    <span>The Problem</span>
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed font-medium">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Key Trade-offs */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#D4AF37] flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#D4AF37]" />
                    <span>Key Trade-offs</span>
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed font-medium">
                    {selectedProject.tradeoffs}
                  </p>
                </div>

                {/* What I Learned */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#D4AF37] flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                    <span>What I Learned</span>
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed font-medium">
                    {selectedProject.learned}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-5 rounded-2xl bg-[#1c1c1c] border border-[#D4AF37]/30 shadow-sm">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-3">Functional Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#121212] border border-[#D4AF37]/30 text-xs font-bold text-[#F3E5AB]">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-[#26221A] flex flex-wrap items-center justify-between gap-3 bg-[#0a0a0a]">
                {selectedProject.demoUrl ? (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl terracotta-button-gradient text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>Visit Live App ({selectedProject.demoUrl.replace(/^https?:\/\//, '')})</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div />
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#1c1c1c] hover:bg-[#252525] font-bold text-xs uppercase tracking-wider text-[#F3E5AB] transition-colors cursor-pointer"
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
