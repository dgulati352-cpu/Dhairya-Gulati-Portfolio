"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle2 } from "lucide-react";

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
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-gold border border-amber-500/20 text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Endorsements</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Client Success Stories
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Read how my mobile UI/UX designs help local brands deliver premium experiences to their clients.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card-gold rounded-3xl p-7 relative flex flex-col justify-between glass-card-hover border border-amber-500/20 shadow-xl"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/20 absolute right-6 top-6" />

                {/* Gold Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Verified Client
                  </span>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed font-semibold italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-white/8 mb-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold gold-text-gradient">{t.author}</span>
                  <span className="text-xs text-slate-400 font-semibold mt-0.5">
                    {t.role}, <span className="text-amber-300 font-medium">{t.business}</span>
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
