"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 px-6 border-t border-stone-200/80 bg-[#F7F5F0]">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E27B56] to-[#C15F3C] flex items-center justify-center text-white font-extrabold text-[10px] shadow-sm">
              DG
            </div>
            <span className="font-serif font-extrabold text-base tracking-wider terracotta-text-gradient">
              DHAIRYA GULATI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] shadow-[0_0_8px_#C15F3C]"></span>
          </div>
          <p className="text-[11px] text-stone-500 font-bold uppercase tracking-widest">
            Mobile App & UI/UX Design Studio
          </p>
          <p className="text-xs text-stone-600 font-medium max-w-xs mt-0.5">
            Crafting digital products that scale local businesses worldwide.
          </p>
        </div>

        {/* Right Side: Back to top & credits */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <button
            onClick={handleScrollTop}
            className="px-4 py-2 rounded-full bg-white border border-stone-200 text-[#C15F3C] text-xs font-bold uppercase tracking-wider hover:border-[#C15F3C] hover:text-[#A04A2A] transition-all cursor-pointer group shadow-sm flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="flex flex-col gap-1">
            <p className="text-xs text-stone-500 font-semibold flex items-center justify-center md:justify-end gap-1 select-none">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#C15F3C] fill-[#C15F3C] animate-pulse" />
              <span>in Saharanpur, UP, India</span>
            </p>
            <p className="text-[10px] text-stone-500 font-medium">
              &copy; {new Date().getFullYear()} Dhairya Gulati. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
