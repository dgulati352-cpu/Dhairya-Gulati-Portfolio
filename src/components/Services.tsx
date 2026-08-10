"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Palette, 
  Layers, 
  LayoutDashboard, 
  UtensilsCrossed, 
  Dumbbell, 
  Store,
  Sparkles,
  ArrowUpRight,
  Boxes,
  CheckCircle2
} from "lucide-react";

interface ServiceGroup {
  groupTitle: string;
  groupTagline: string;
  icon: React.ComponentType<{ className?: string }>;
  services: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
    tag: string;
    highlights: string[];
    accentColor: string;
  }[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    groupTitle: "Core Design",
    groupTagline: "Foundational product architecture & visual design",
    icon: Palette,
    services: [
      {
        icon: Smartphone,
        title: "Mobile App Design",
        desc: "Designing responsive, intuitive iOS & Android mobile app interfaces with pixel-perfect precision and fluid gesture mechanics.",
        tag: "iOS & Android",
        highlights: ["Gesture Mechanics", "Pixel-Perfect Layouts", "iOS & Android Specs"],
        accentColor: "from-[#F3E5AB] to-[#D4AF37]"
      },
      {
        icon: Palette,
        title: "UI/UX Architecture",
        desc: "Crafting modern, research-backed user journeys that boost customer retention and reduce drop-off friction.",
        tag: "User Experience",
        highlights: ["User Flow Maps", "Friction Reduction", "High Retention UI"],
        accentColor: "from-[#D4AF37] to-[#AA771C]"
      },
      {
        icon: Layers,
        title: "Figma Design Systems",
        desc: "Structuring scalable component libraries with auto-layouts, dark/light modes, and strict design tokens for developer handoffs.",
        tag: "Figma Master",
        highlights: ["Auto-Layout 5.0", "Design Tokens", "Dev Handoff Ready"],
        accentColor: "from-[#F3E5AB] to-[#AA771C]"
      }
    ]
  },
  {
    groupTitle: "Product Dashboards",
    groupTagline: "Data-dense web applications & management consoles",
    icon: LayoutDashboard,
    services: [
      {
        icon: LayoutDashboard,
        title: "SaaS & Web Dashboards",
        desc: "Transforming complex analytics and enterprise data pipelines into clean, actionable dashboard UIs.",
        tag: "SaaS & B2B",
        highlights: ["Analytics Dashboards", "Data Visualization", "Role-Based Navigation"],
        accentColor: "from-[#D4AF37] to-[#F3E5AB]"
      },
      {
        icon: Boxes,
        title: "Admin Management Consoles",
        desc: "Engineering high-productivity management control panels for e-commerce, inventory, and user management systems.",
        tag: "Control Panels",
        highlights: ["Batch Actions", "Data Table Filters", "Rapid Navigation"],
        accentColor: "from-[#AA771C] to-[#D4AF37]"
      }
    ]
  },
  {
    groupTitle: "Niche Solutions",
    groupTagline: "Specialized mobile app UIs for high-growth sectors",
    icon: Store,
    services: [
      {
        icon: UtensilsCrossed,
        title: "Food & Q-Commerce Apps",
        desc: "Designing fast-checkout delivery flows, cart management, and real-time order tracking screens like Blinkit & Zomato.",
        tag: "Q-Commerce",
        highlights: ["Instant Cart", "Live Delivery Track", "Promo Conversion"],
        accentColor: "from-[#F3E5AB] to-[#D4AF37]"
      },
      {
        icon: Dumbbell,
        title: "Fitness & Habit Tracking",
        desc: "Interactive workout logs, streak counters, and habit tracking visual charts engineered for daily user engagement.",
        tag: "Fitness Tech",
        highlights: ["Streak Counters", "Workout Logs", "Interactive Charts"],
        accentColor: "from-[#D4AF37] to-[#AA771C]"
      },
      {
        icon: Store,
        title: "Handloom & Craft Commerce",
        desc: "Luxury product storytelling layouts and cultural heritage showcase stores that double conversion rates for artisanal brands.",
        tag: "Heritage E-Com",
        highlights: ["Storytelling Layouts", "High-Resolution Galleries", "Seamless Checkout"],
        accentColor: "from-[#AA771C] to-[#F3E5AB]"
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-28 px-6 overflow-hidden bg-[#080808]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#AA771C]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-3 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Service Tiers</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mobile App & UI/UX Design Services
          </h2>
          <p className="text-stone-300 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Structured design services mapped to launch, scale, and optimize mobile app products.
          </p>
        </div>

        {/* 3 Grouped Tiers Layout */}
        <div className="flex flex-col gap-14">
          {SERVICE_GROUPS.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.groupTitle}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="flex flex-col gap-6"
              >
                {/* Group Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#26221A]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shadow-sm">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-white">{group.groupTitle}</h4>
                      <p className="text-xs text-stone-400 font-medium">{group.groupTagline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm">
                    Tier 0{groupIdx + 1}
                  </span>
                </div>

                {/* Bento Cards Grid inside Tier */}
                <div className={`grid grid-cols-1 ${group.services.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.title}
                        whileHover={{ y: -6, scale: 1.015 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-[#121212] rounded-3xl p-7 group flex flex-col justify-between border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-500"
                      >
                        {/* Top Gradient Highlight Bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accentColor}`} />

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:scale-110 transition-all duration-300 shadow-md">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#D4AF37]/30 text-[#F3E5AB]">
                              {service.tag}
                            </span>
                          </div>

                          <h5 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-[#D4AF37] transition-colors duration-200">
                            {service.title}
                          </h5>
                          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                            {service.desc}
                          </p>

                          {/* Highlights Checklist */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.highlights.map((item) => (
                              <span key={item} className="inline-flex items-center gap-1.5 text-[10px] font-bold text-stone-200 bg-[#1c1c1c] border border-[#D4AF37]/20 px-2.5 py-1 rounded-lg">
                                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-[#26221A] flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 group-hover:text-[#D4AF37] transition-colors">
                            Complete UI Handoff Spec
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-black flex items-center justify-center transition-all shadow-sm">
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
