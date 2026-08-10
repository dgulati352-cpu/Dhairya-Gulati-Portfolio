"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle2, Building2 } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  business: string;
  avatarUrl?: string;
  logoUrl?: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Dhairya completely re-imagined our restaurant app interface. Booking reservations and browsing menus is now super smooth. Our table booking conversions increased by 30% in the first two weeks of launching the new design!",
    author: "Rohan Malhotra",
    role: "Founder",
    business: "The Spice Bistro",
    initials: "RM"
  },
  {
    quote: "Working with Dhairya was a stellar experience. He understood the complexities of tracking and renting charging stations immediately. The app flows are clean, intuitive, and commuters absolutely love the simplicity.",
    author: "Elena Petrova",
    role: "Product Owner",
    business: "VoltCharge Kiosks",
    initials: "EP"
  },
  {
    quote: "Dhairya took our traditional handloom brand identity and translated it beautifully into a modern mobile-first e-commerce app. He helped us highlight artisan heritage, which dramatically boosted customer trust and cart sizes.",
    author: "Ananya Sen",
    role: "Co-Founder",
    business: "Sutra Handloom Weaves",
    initials: "AS"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-12 md:py-20 px-6 bg-[#080808]">
      {/* Background soft highlights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] mb-3 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Client Reviews & Success Stories
          </h2>
          <p className="text-stone-300 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
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
              whileHover={{ y: -4 }}
              className="bg-[#121212] rounded-3xl p-7 relative flex flex-col justify-between border border-[#D4AF37]/30 shadow-2xl hover:border-[#D4AF37] transition-all duration-500 cursor-pointer"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4AF37]/25 absolute right-6 top-6" />

                {/* Rating & Verification */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Verified Client
                  </span>
                </div>

                <p className="font-serif text-stone-200 text-sm leading-relaxed font-semibold italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-[#26221A] mb-4" />
                
                {/* Author Avatar & Logo Slots */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {t.avatarUrl ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40">
                        <Image src={t.avatarUrl} alt={t.author} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F3E5AB] to-[#D4AF37] flex items-center justify-center text-black font-extrabold text-xs shadow-md">
                        {t.initials}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-bold gold-text-gradient font-serif">{t.author}</span>
                      <span className="text-xs text-stone-400 font-semibold mt-0.5">
                        {t.role}, <span className="text-[#D4AF37] font-medium">{t.business}</span>
                      </span>
                    </div>
                  </div>

                  {/* Company Logo Slot */}
                  <div className="p-2 rounded-xl bg-[#1c1c1c] border border-[#D4AF37]/25 text-[#D4AF37]">
                    {t.logoUrl ? (
                      <div className="relative w-6 h-6">
                        <Image src={t.business} fill className="object-contain" alt={t.business} />
                      </div>
                    ) : (
                      <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
