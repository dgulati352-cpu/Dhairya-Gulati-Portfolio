"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Crafting Digital Products For Real-World Impact
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-3 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              {/* Outer glowing border */}
              <div className="absolute -inset-[1px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] pointer-events-none" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/portrait.png"
                  alt="Dhairya Gulati Portrait"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 320px, 280px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-7 flex flex-col justify-center"
          >
            <h4 className="text-xl font-bold text-white mb-6">
              "Dhairya Gulati designs digital experiences that help local businesses grow."
            </h4>
            
            <p className="text-slate-400 leading-relaxed font-medium mb-8">
              Hi, I'm Dhairya. I'm a Mobile App Designer & UI/UX Designer specialized in creating digital experiences for local stores, booking platforms, hotels, gyms, salons, restaurants, and other local service businesses. 
            </p>

            <p className="text-slate-400 leading-relaxed font-medium mb-10">
              I believe digital product design shouldn't be reserved only for tech giants. Local businesses are the backbone of our economy, and they deserve premium-grade, highly engaging app experiences that streamline their daily operations, improve efficiency, and elevate their brand presence.
            </p>

            {/* Quick credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white mb-1">Education</h5>
                  <p className="text-xs text-slate-400 font-medium">Chitkara University, Chandigarh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white mb-1">Location</h5>
                  <p className="text-xs text-slate-400 font-medium">Saharanpur, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white mb-1">Target Businesses</h5>
                  <p className="text-xs text-slate-400 font-medium">Restaurants, Gyms, Salons, Local Stores</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white mb-1">Design Focus</h5>
                  <p className="text-xs text-slate-400 font-medium">User retention, conversion, premium aesthetics</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
