"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-slate-950/20">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dhairya Gulati
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            Mobile App Designer & UI/UX Designer
          </p>
          <p className="text-xs text-slate-400 font-medium max-w-xs mt-1">
            Crafting premium digital experiences for local businesses and modern brands.
          </p>
        </div>

        {/* Right Side: Back to top & credits */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-full bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer group shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-500 font-semibold flex items-center justify-center md:justify-end gap-1 select-none">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span>in India</span>
            </p>
            <p className="text-[10px] text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} Dhairya Gulati. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
