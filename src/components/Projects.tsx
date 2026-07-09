"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Eye, ShieldCheck, Cpu, Zap, ShoppingBag } from "lucide-react";
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
    title: "Hotel Management Platform",
    category: "Mobile App & Dashboard Design",
    image: "/hotel.png",
    tagline: "Streamlining guest check-ins and room bookings for boutique hotels.",
    overview: "A comprehensive digital solution tailored for boutique hotels to automate reservation lifecycles, track operational rooms in real time, and empower managers with instant visual insights.",
    problem: "Boutique hotels often rely on disjointed, manual legacy booking systems or expensive SaaS platforms that lack mobile optimization, leading to slow check-in queues, double bookings, and zero real-time operational flexibility.",
    solution: "A mobile-first management app combined with a high-fidelity tablet dashboard. Staff can track room clean status, guests can complete fast mobile check-ins, and managers can view dynamic revenue graphs instantly.",
    features: [
      "Dynamic Room Status Matrix (Clean/Dirty/Occupied)",
      "Instant In-App Guest Verification",
      "Interactive Booking Calendar with Drag-and-Drop",
      "Comprehensive Manager Analytics Dashboard"
    ],
    metrics: [
      "40% reduction in check-in times",
      "15% increase in operational room utilization",
      "94% staff satisfaction rating in test trials"
    ]
  },
  {
    id: "powerbank",
    title: "Power Bank Rental Platform",
    category: "Product Design & Service App",
    image: "/powerbank.png",
    tagline: "High-end UI for on-the-go power bank charging network.",
    overview: "A mobile app that enables users to scan QR codes, rent power banks from nearby automated kiosks, track usage time, and return batteries to any station seamlessly.",
    problem: "Urban commuters and tourists face constant battery anxiety but finding, renting, and returning power banks via existing apps was clunky, with inaccurate map markers and complex payment checkout gates.",
    solution: "Designed a clean, map-centric user experience with instantaneous QR scanning, visual route guidance to the nearest active kiosk, active rental tracking timers, and automated payment gate integration.",
    features: [
      "Real-time Geo-Map Station Finder",
      "One-tap QR Scan Rental Initiation",
      "Dynamic Floating Rental Timer Panel",
      "Seamless UPI & Card Wallet Integration"
    ],
    metrics: [
      "Less than 3 seconds from scan to rent",
      "35% increase in repeat rental conversions",
      "Zero reported checkout errors in user testing"
    ]
  },
  {
    id: "handloom",
    title: "Handloom Ecommerce Experience",
    category: "Mobile E-commerce UI/UX",
    image: "/handloom.png",
    tagline: "Preserving cultural heritage through premium shopping journeys.",
    overview: "A premium mobile-first e-commerce app connecting rural Indian handloom artisans with global buyers, combining modern micro-interactions with rich cultural storytelling.",
    problem: "Authentic handloom products struggle to compete with fast fashion online because typical ecommerce designs strip away the artisan's story, failing to justify premium pricing to target customers.",
    solution: "Built a visually immersive shopping flow highlighting artisan background videos, loom details, and raw material authenticity certificates alongside modern filtering and rapid checkout cycles.",
    features: [
      "Artisan Storytelling Video Integrations",
      "Material Authenticity Certification Badges",
      "Minimalist Multi-step Checkout Funnel",
      "Interactive Fabric Texture Zoom Views"
    ],
    metrics: [
      "55% increase in average cart value (AOV)",
      "2.4x higher conversion rate on storytelling pages",
      "4.8/5 Customer rating on artisan reviews"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Featured Projects</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Digital Product Work
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Take a look at how I design apps that solve real-world problems and drive growth for local businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-3xl overflow-hidden glass-card-hover group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 font-semibold text-sm text-white shadow-lg shadow-blue-600/30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Case Study</span>
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6 flex-grow">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#050816] border border-white/10 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
            >
              
              {/* Header Image/Banner */}
              <div className="relative h-[240px] sm:h-[320px] w-full bg-slate-900 border-b border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:scale-105 transition-all cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 overflow-visible">
                
                {/* Left Side: Overview & Core Breakdown */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-2">Overview</h4>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-white/3 border border-white/5">
                      <h5 className="text-sm font-bold text-red-400 flex items-center gap-1.5 mb-2">
                        <X className="w-4 h-4" /> The Problem
                      </h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/3 border border-white/5">
                      <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                        <ShieldCheck className="w-4 h-4" /> The Solution
                      </h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-3">Key System Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/3 border border-white/5 py-3 px-4 rounded-xl">
                          <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Metrics & Delivery info */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  {/* Results & Metrics */}
                  <div className="p-5 rounded-2xl bg-blue-600/5 border border-blue-500/20">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-blue-400 flex items-center gap-1.5 mb-4">
                      <Zap className="w-4 h-4" /> Impact Metrics
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {selectedProject.metrics.map((metric, i) => (
                        <li key={i} className="flex flex-col">
                          <span className="text-lg font-extrabold text-white">{metric.split(" ")[0]}</span>
                          <span className="text-xs text-slate-400 font-medium">{metric.substring(metric.indexOf(" ") + 1)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables details */}
                  <div className="p-5 rounded-2xl bg-white/3 border border-white/5 flex flex-col gap-3.5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">Timeline</span>
                      <p className="text-xs font-semibold text-slate-300">2-4 Weeks</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">My Role</span>
                      <p className="text-xs font-semibold text-slate-300">Sole Mobile UI/UX Designer</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">Tools Used</span>
                      <p className="text-xs font-semibold text-slate-300">Figma, Adobe Illustrator</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Sticky Action Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-end bg-slate-950/40">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 font-semibold text-sm transition-colors cursor-pointer"
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
