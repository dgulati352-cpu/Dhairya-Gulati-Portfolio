"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  business: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Dhairya completely re-imagined our restaurant app interface. Booking reservations and browsing menus is now super smooth. Our table booking conversions increased by 30% in the first two weeks of launching the new design!",
    author: "Rohan Malhotra",
    role: "Founder",
    business: "The Spice Bistro"
  },
  {
    quote: "Working with Dhairya was a stellar experience. He understood the complexities of tracking and renting charging stations immediately. The app flows are clean, intuitive, and commuters absolutely love the simplicity.",
    author: "Elena Petrova",
    role: "Product Owner",
    business: "VoltCharge Kiosks"
  },
  {
    quote: "Dhairya took our traditional handloom brand identity and translated it beautifully into a modern mobile-first e-commerce app. He helped us highlight artisan heritage, which dramatically boosted customer trust and cart sizes.",
    author: "Ananya Sen",
    role: "Co-Founder",
    business: "Sutra Handloom Weaves"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      {/* Background soft highlights */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Client Success Stories
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Read how my mobile UI/UX designs help local brands deliver premium experiences to their clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 relative flex flex-col justify-between glass-card-hover"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-500/20 absolute right-6 top-6" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-semibold italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-white/5 mb-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{t.author}</span>
                  <span className="text-xs text-slate-500 font-semibold mt-0.5">
                    {t.role}, <span className="text-cyan-400/90">{t.business}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
