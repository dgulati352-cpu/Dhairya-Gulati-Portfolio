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
  ShieldCheck,
  Cpu,
  Boxes
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
        tag: "iOS & Android"
      },
      {
        icon: Palette,
        title: "UI/UX Architecture",
        desc: "Crafting modern, research-backed user journeys that boost customer retention and reduce drop-off friction.",
        tag: "User Experience"
      },
      {
        icon: Layers,
        title: "Figma Design Systems",
        desc: "Structuring scalable component libraries with auto-layouts, dark/light modes, and strict design tokens for developer handoffs.",
        tag: "Figma Master"
      }
    ]
  },
  {
    groupTitle: "Systems & Handoff",
    groupTagline: "Data dashboards & business operational platforms",
    icon: LayoutDashboard,
    services: [
      {
        icon: LayoutDashboard,
        title: "Dashboard & Analytics",
        desc: "Transforming complex operational data into sleek visual dashboards, booking calendars, and real-time revenue monitors.",
        tag: "Data Visualization"
      },
      {
        icon: Store,
        title: "Local Business Digital Storefronts",
        desc: "Empowering salons, local boutiques, booking agencies, and service shops with high-converting mobile app interfaces.",
        tag: "Local Enterprise"
      }
    ]
  },
  {
    groupTitle: "Vertical Specialties",
    groupTagline: "Industry-tailored mobile applications for high demand",
    icon: Boxes,
    services: [
      {
        icon: UtensilsCrossed,
        title: "Restaurant App Systems",
        desc: "Streamlining dine-in table ordering, digital reservations, interactive food menus, and kitchen order routing.",
        tag: "Food & Hospitality"
      },
      {
        icon: Dumbbell,
        title: "Gym & Fitness Apps",
        desc: "Designing engaging workout tracking screens, digital membership passes, trainer bookings, and class schedulers.",
        tag: "Fitness & Wellness"
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      {/* Background gradients */}
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-[#C15F3C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-terracotta border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#E88D6A] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E88D6A]" />
            <span>Service Tiers</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Specialized Design Capabilities
          </h3>
          <p className="text-stone-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Structured design services mapped to launch, scale, and optimize mobile app products.
          </p>
        </div>

        {/* 3 Grouped Tiers Layout */}
        <div className="flex flex-col gap-12">
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
                <div className="flex items-center justify-between pb-3 border-b border-[#C15F3C]/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#C15F3C]/15 text-[#E88D6A] border border-[#C15F3C]/30">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-white">{group.groupTitle}</h4>
                      <p className="text-xs text-stone-400">{group.groupTagline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#C15F3C]/10 text-[#E88D6A] border border-[#C15F3C]/20">
                    Tier 0{groupIdx + 1}
                  </span>
                </div>

                {/* Cards Grid inside Tier */}
                <div className={`grid grid-cols-1 ${group.services.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="glass-card-terracotta rounded-3xl p-6 glass-card-hover group flex flex-col justify-between border border-[#C15F3C]/20 relative overflow-hidden"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#E88D6A] group-hover:scale-110 transition-all duration-300 shadow-md">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E88D6A]">
                              {service.tag}
                            </span>
                          </div>

                          <h5 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#E88D6A] transition-colors duration-200">
                            {service.title}
                          </h5>
                          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-medium">
                            {service.desc}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500 group-hover:text-[#E88D6A] transition-colors">
                            Spec Available
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#C15F3C]/20 text-stone-400 group-hover:text-[#E88D6A] flex items-center justify-center transition-all">
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
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
