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
  Store 
} from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
}

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Designing responsive, intuitive, and modern iOS & Android mobile app interfaces prioritizing thumb reach and accessibility.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Crafting modern, research-driven user journeys that improve customer retention, reduce friction, and align with business objectives.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Structuring clean, reusable Figma component libraries with auto-layouts and strict tokens for efficient engineering handoffs.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Design",
    desc: "Simplifying complex operations with visually engaging data visualisations, booking calendars, and employee metric monitoring.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant App Design",
    desc: "Streamlining dine-in table ordering, digital reservations, interactive food menus, and delivery tracking interfaces.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Dumbbell,
    title: "Gym Management App",
    desc: "Designing engaging customer workout tracking screens, membership scans, trainer bookings, and class scheduler calendars.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Store,
    title: "Local Business App Design",
    desc: "Helping salons, local boutiques, booking agencies, and service shops establish credible digital storefronts that secure client bookings.",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      {/* Background gradients */}
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            My Specializations
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            I craft digital products tailored to your business needs, focusing on sleek premium visual design and high-converting user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.color} bg-opacity-10 text-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/5 my-4 group-hover:bg-blue-500/20 transition-colors" />

                <div className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-cyan-400 uppercase group-hover:text-white transition-colors duration-200">
                  <span>High Fidelity Design</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
