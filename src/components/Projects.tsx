"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Eye, Sparkles, AlertCircle, Wrench, Lightbulb } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: "Hospitality" | "IoT & Hardware" | "Retail & Commerce";
  stack: string[];
  image: string;
  tagline: string;
  overview: string;
  problem: string;
  tradeoffs: string;
  learned: string;
  metrics: string[];
  isFeatured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "hotel",
    title: "Boutique Hotel Operations Manager",
    category: "Mobile App & Dashboard",
    filterCategory: "Hospitality",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    image: "/hotel.png",
    tagline: "Real-time room management and check-in interface for 15-to-40 room hotels.",
    overview: "I built a real-time operations dashboard and guest check-in interface for independent boutique hotels. It lets front-desk staff process guest arrivals on a tablet while room attendants toggle clean/dirty status from their phones.",
    problem: "Small hotel owners usually can't afford expensive enterprise PMS software, so they end up managing room readiness across WhatsApp groups and paper logbooks. This leads to staff constantly asking each other if rooms are clean, delayed check-ins during peak arrival hours, and double-bookings when reservations come in offline.",
    tradeoffs: "I originally tried implementing WebSockets for live room status sync across staff devices, but connection drops on basement Wi-Fi caused state drift between the front desk and housekeepers. I stripped out WebSockets and switched to SWR short-polling with optimistic UI updates instead. It added a 2-second delay to status updates, but eliminated state desynchronization entirely on spotty networks. I also dropped custom animated charts in favor of basic CSS progress bars to keep client-side JS light on budget Android tablets.",
    learned: "Real-world hotel staff don't care about micro-animations if a button takes 800ms to register on a $90 Android tablet. Prioritizing low-latency touch targets over visual polish reduced check-in processing to under 90 seconds per guest. Next time, I would build the offline-first sync engine earlier in the design phase rather than retrofitting it after field testing.",
    metrics: [
      "Sub-90s check-in processing per guest",
      "Zero state desync on spotty Wi-Fi",
      "Kept JS bundle footprint light for budget tablets"
    ],
    isFeatured: true
  },
  {
    id: "powerbank",
    title: "Power Bank IoT Rental App",
    category: "Mobile App & IoT Interface",
    filterCategory: "IoT & Hardware",
    stack: ["React Native", "Tailwind CSS", "Figma", "Node.js"],
    image: "/powerbank.png",
    tagline: "Scan-to-unlock mobile interface for hardware-connected charging kiosks.",
    overview: "I designed and prototyped the mobile UI for a hardware-connected power bank rental network. Users scan a QR code on a physical kiosk to unlock a portable charger and return it at any station in the city.",
    problem: "Most rental apps fail because users are already anxious about a dying phone battery. If the app takes more than two screens or 10 seconds to authorize a rental, the user's phone shuts off mid-transaction, leaving them without power and locking up station hardware state.",
    tradeoffs: "I bypassed traditional multi-step registration (email verification, profile setup) and required only a one-tap phone number OTP before launching the camera scanner. To keep map rendering fast under low battery modes, I replaced heavy custom Mapbox vectors with native map components and static station pins. I also cut the animated battery charging preview screen because it added main-thread render overhead during hardware handshakes.",
    learned: "Designing for hardware-software handshakes means designing for failure states first. Over 60% of the UI design effort went into handling edge cases: station empty timeouts, blocked return slots, and payment retries. Keeping the main scan-to-unlock flow under 3 taps dropped rental drop-off rates significantly during pilot testing.",
    metrics: [
      "< 3 seconds from QR scan to battery release",
      "3-tap complete rental flow",
      "Handled station hardware timeouts gracefully"
    ]
  },
  {
    id: "handloom",
    title: "Artisan Handloom Storefront",
    category: "E-commerce Mobile UI",
    filterCategory: "Retail & Commerce",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer"],
    image: "/handloom.png",
    tagline: "Mobile-first store connecting rural weaving clusters with retail buyers.",
    overview: "I designed a mobile-first e-commerce store connecting rural weaving clusters directly with retail buyers. The app focuses on fast product filtering, clear fabric weave details, and direct artisan attribution.",
    problem: "Handmade textiles cost 3x more than powerloom garments, but typical e-commerce layouts treat them like commodity t-shirts. Buyers couldn't see why a handwoven saree cost more because product pages lacked provenance details, thread counts, and artisan background information.",
    tradeoffs: "I initially added high-res 4K fabric zoom previews and background weaver video clips to every product page. While visually rich, page load times ballooned to 4.2 seconds on 3G mobile networks. I replaced auto-playing videos with lazy-loaded compressed WebP image grids and expandable text drawers for artisan stories. This cut page payload from 6.8MB to 1.1MB without sacrificing product clarity.",
    learned: "High conversion rates come from clarity, not heavy media payloads. Stripping unnecessary visual clutter and putting fabric specifications and loom origins front-and-center increased conversion rates on detailed product pages. If I rebuilt this today, I'd implement native image blur-up placeholders to make page loads feel instant on slow connections.",
    metrics: [
      "1.1MB total page payload (down from 6.8MB)",
      "1.2s load time on 3G mobile networks",
      "3x higher buyer retention on artisan story pages"
    ]
  },
  {
    id: "restaurant",
    title: "Spice Bistro Restaurant System",
    category: "Mobile App & Table Ordering",
    filterCategory: "Hospitality",
    stack: ["Figma", "React Native", "Tailwind CSS", "Node.js"],
    image: "/hotel.png",
    tagline: "Digital table ordering, reservations, and interactive digital menus.",
    overview: "I designed a digital table ordering and reservation platform for high-footfall dining restaurants. Guests scan QR codes at tables to browse visual menus, customize dishes, and place orders directly to the kitchen.",
    problem: "During peak dinner hours, waiters were overwhelmed taking orders, leading to 25-minute delays, incorrect dietary customizations, and table turnover bottlenecks.",
    tradeoffs: "I initially built a complex multi-step customization modal for every dish. In busy dining environments, customers found it confusing and reverted to calling waiters. I redesigned the menu interface into flat 1-tap add-on chips and sticky order summaries, reducing ordering steps from 5 to 2.",
    learned: "Dining apps must prioritize quick ordering speed over deep menu customization. Simplifying the ordering flow increased table booking conversions by 30% in two weeks while reducing kitchen ticket errors.",
    metrics: [
      "30% increase in table-booking conversions",
      "2-tap order checkout flow",
      "Zero kitchen ticket customization errors"
    ]
  }
];

const FILTER_CATEGORIES = [
  "All Work",
  "Hospitality",
  "IoT & Hardware",
  "Retail & Commerce"
] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_CATEGORIES[number]>("All Work");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All Work") return true;
    return proj.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C15F3C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#C15F3C] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C15F3C]" />
            <span>Featured Portfolio</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Selected Product Case Studies
          </h3>
          <p className="text-stone-600 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Real problems, real architectural trade-offs, and practical lessons from building digital products.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#C15F3C] text-white border-[#C15F3C] shadow-lg shadow-[#C15F3C]/25"
                    : "bg-white text-stone-600 border-stone-200 hover:text-stone-900 hover:border-[#C15F3C]/40 shadow-sm"
                }`}
              >
                {cat}
              </button>
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
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`${
                  isHeroCard ? "md:col-span-8" : "md:col-span-4"
                } bg-white rounded-3xl overflow-hidden glass-card-hover group cursor-pointer flex flex-col justify-between border border-stone-200/90 shadow-xl shadow-stone-900/5`}
              >
                {/* Image Frame */}
                <div className={`relative ${isHeroCard ? "aspect-[16/9]" : "aspect-[4/3]"} w-full overflow-hidden bg-stone-900 border-b border-stone-200`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={isHeroCard ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  
                  {isHeroCard && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C15F3C] text-white font-extrabold text-[10px] uppercase tracking-widest shadow-md">
                      FEATURED CASE STUDY
                    </span>
                  )}

                  <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full terracotta-button-gradient font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-[#C15F3C]/30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Read Case Study</span>
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold text-[#C15F3C] px-2 py-0.5 rounded-md bg-[#C15F3C]/10 border border-[#C15F3C]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-serif text-xl font-extrabold text-stone-900 mb-2 group-hover:text-[#C15F3C] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-700 group-hover:text-[#C15F3C] transition-colors flex items-center gap-1.5">
                      <span>View Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                      Developer Spec
                    </span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#FBF9F5] border border-stone-300 rounded-3xl overflow-y-auto shadow-2xl flex flex-col text-stone-900"
            >
              
              {/* Header Banner */}
              <div className="relative h-[220px] sm:h-[280px] w-full bg-stone-900 border-b border-stone-200">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 border border-stone-200 text-stone-900 hover:bg-white hover:scale-105 transition-all cursor-pointer z-10 shadow-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="text-xs font-bold text-white bg-[#C15F3C] border border-[#C15F3C] px-3 py-0.5 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 sm:p-8 flex flex-col gap-8">
                
                {/* Lead Summary */}
                <div className="p-5 rounded-2xl bg-[#C15F3C]/10 border border-[#C15F3C]/25">
                  <p className="text-stone-900 text-sm sm:text-base font-semibold leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* The Problem */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#C15F3C] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C15F3C]" />
                    <span>The Problem</span>
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed font-medium">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Key Trade-offs */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#C15F3C] flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#C15F3C]" />
                    <span>Key Trade-offs</span>
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed font-medium">
                    {selectedProject.tradeoffs}
                  </p>
                </div>

                {/* What I Learned */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm uppercase tracking-widest font-extrabold text-[#C15F3C] flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#C15F3C]" />
                    <span>What I Learned</span>
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed font-medium">
                    {selectedProject.learned}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-500 mb-3">Functional Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-[#C15F3C]">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-stone-200 flex items-center justify-end bg-stone-100/80">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-200 font-bold text-xs uppercase tracking-wider text-stone-800 transition-colors cursor-pointer"
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
