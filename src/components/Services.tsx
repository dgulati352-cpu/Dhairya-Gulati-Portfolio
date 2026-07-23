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
        accentColor: "from-[#C15F3C] to-[#E27B56]"
      },
      {
        icon: Palette,
        title: "UI/UX Architecture",
        desc: "Crafting modern, research-backed user journeys that boost customer retention and reduce drop-off friction.",
        tag: "User Experience",
        highlights: ["User Flow Maps", "Friction Reduction", "High Retention UI"],
        accentColor: "from-[#D66F4A] to-[#C15F3C]"
      },
      {
        icon: Layers,
        title: "Figma Design Systems",
        desc: "Structuring scalable component libraries with auto-layouts, dark/light modes, and strict design tokens for developer handoffs.",
        tag: "Figma Master",
        highlights: ["Auto-Layout 5.0", "Design Tokens", "Dev Handoff Ready"],
        accentColor: "from-[#E27B56] to-[#A04A2A]"
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
        tag: "Data Visualization",
        highlights: ["Real-Time Metrics", "Booking Calendars", "Interactive Widgets"],
        accentColor: "from-[#C15F3C] to-[#D66F4A]"
      },
      {
        icon: Store,
        title: "Local Business Digital Storefronts",
        desc: "Empowering salons, local boutiques, booking agencies, and service shops with high-converting mobile app interfaces.",
        tag: "Local Enterprise",
        highlights: ["Instant Booking", "Service Catalog", "Revenue Conversion"],
        accentColor: "from-[#E27B56] to-[#C15F3C]"
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
        tag: "Food & Hospitality",
        highlights: ["Digital Table Menus", "Instant Reservation", "30% Lift Proof"],
        accentColor: "from-[#D66F4A] to-[#E27B56]"
      },
      {
        icon: Dumbbell,
        title: "Gym & Fitness Apps",
        desc: "Designing engaging workout tracking screens, digital membership passes, trainer bookings, and class schedulers.",
        tag: "Fitness & Wellness",
        highlights: ["Workout Trackers", "Trainer Booking", "Member Passes"],
        accentColor: "from-[#C15F3C] to-[#A04A2A]"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#C15F3C] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C15F3C]" />
            <span>Service Tiers</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Specialized Design Capabilities
          </h3>
          <p className="text-stone-600 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
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
                <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/90">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#C15F3C]/15 to-[#E27B56]/20 text-[#C15F3C] border border-[#C15F3C]/30 shadow-sm">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-stone-900">{group.groupTitle}</h4>
                      <p className="text-xs text-stone-500 font-medium">{group.groupTagline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#C15F3C]/10 text-[#C15F3C] border border-[#C15F3C]/25 shadow-sm">
                    Tier 0{groupIdx + 1}
                  </span>
                </div>

                {/* Bento Cards Grid inside Tier */}
                <div className={`grid grid-cols-1 ${group.services.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="bg-white rounded-3xl p-7 glass-card-hover group flex flex-col justify-between border border-stone-200/90 shadow-xl shadow-stone-900/5 relative overflow-hidden"
                      >
                        {/* Top Gradient Highlight Bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accentColor}`} />

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#C15F3C]/10 to-[#E27B56]/20 border border-[#C15F3C]/30 text-[#C15F3C] group-hover:scale-110 transition-all duration-300 shadow-md shadow-[#C15F3C]/10">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[#C15F3C] shadow-sm">
                              {service.tag}
                            </span>
                          </div>

                          <h5 className="font-serif text-xl font-bold text-stone-900 mb-2.5 group-hover:text-[#C15F3C] transition-colors duration-200">
                            {service.title}
                          </h5>
                          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                            {service.desc}
                          </p>

                          {/* Highlights Checklist */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.highlights.map((item) => (
                              <span key={item} className="inline-flex items-center gap-1.5 text-[10px] font-bold text-stone-700 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-lg">
                                <CheckCircle2 className="w-3 h-3 text-[#C15F3C]" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 group-hover:text-[#C15F3C] transition-colors">
                            Complete UI Handoff Spec
                          </span>
                          <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#C15F3C] text-stone-500 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
