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
  ArrowUpRight
} from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Designing responsive, intuitive iOS & Android mobile app interfaces with pixel-perfect precision and fluid gesture mechanics.",
    tag: "iOS & Android"
  },
  {
    icon: Palette,
    title: "UI/UX Architecture",
    desc: "Crafting modern, research-backed user journeys that boost customer retention, reduce churn, and elevate brand prestige.",
    tag: "User Experience"
  },
  {
    icon: Layers,
    title: "Figma Design Systems",
    desc: "Structuring scalable component libraries with auto-layouts, dark/light modes, and strict design tokens for developer handoffs.",
    tag: "Figma Expert"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Analytics",
    desc: "Transforming complex operational data into sleek visual dashboards, booking calendars, and real-time revenue monitors.",
    tag: "Data Visualization"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant App Systems",
    desc: "Streamlining dine-in table ordering, digital reservations, interactive food menus, and delivery tracking interfaces.",
    tag: "Food & Hospitality"
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness Apps",
    desc: "Designing engaging customer workout tracking screens, membership passes, trainer bookings, and class schedulers.",
    tag: "Fitness & Wellness"
  },
  {
    icon: Store,
    title: "Local Business Digital Storefronts",
    desc: "Empowering salons, local boutiques, booking agencies, and service shops with high-converting mobile app interfaces.",
    tag: "Local Enterprise"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      {/* Background gradients */}
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Service Expertise</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Specialized Design Capabilities
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            High-precision digital product design tailored to transform your local brand into a market leader.
          </p>
        </div>

        {/* Modular Bento Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-3xl p-7 glass-card-hover group flex flex-col justify-between border border-white/8 relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-500/10 border border-amber-500/25 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                      {service.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                    Premium Quality
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-amber-500/20 text-slate-400 group-hover:text-amber-300 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
