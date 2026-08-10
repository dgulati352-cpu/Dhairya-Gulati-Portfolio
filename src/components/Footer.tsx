"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { DGLogoIcon } from "./Logo";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 px-6 border-t border-[#26221A] bg-[#080808]">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <DGLogoIcon className="w-7 h-7" />
            <span className="font-serif font-extrabold text-base tracking-tight gold-text-gradient">
              Dhairya Gulati
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
          </div>
          <p className="text-[11px] text-[#D4AF37] font-extrabold uppercase tracking-widest">
            Mobile App & UI/UX Design Studio
          </p>
          <p className="text-xs text-stone-400 font-medium max-w-xs mt-0.5">
            Crafting world-class mobile apps & digital products for global clients.
          </p>
        </div>

        {/* Right Side: Back to top & credits */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <button
            onClick={handleScrollTop}
            className="px-4 py-2 rounded-full bg-[#121212] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#F3E5AB] transition-all cursor-pointer group shadow-xl flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#D4AF37]" />
          </button>
          
          <div className="flex flex-col gap-1">
            <p className="text-xs text-stone-400 font-semibold flex items-center justify-center md:justify-end gap-1 select-none">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
              <span>in Saharanpur, UP, India</span>
            </p>
            <p className="text-[10px] text-stone-400 font-medium">
              &copy; {new Date().getFullYear()} Dhairya Gulati. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
