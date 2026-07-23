"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Sparkles } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/918791416116?text=Hi%20Dhairya,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expanded Popup Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-72 sm:w-80 rounded-3xl glass-card-gold border border-amber-500/30 p-5 shadow-2xl flex flex-col gap-4 relative overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-black font-extrabold text-sm shadow-lg shadow-emerald-500/20">
                  DG
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#07080C] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Dhairya Gulati</span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">● Online & Ready to Chat</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/4 border border-white/8 text-xs text-slate-300 leading-relaxed font-medium">
              "Hi there! 👋 Looking for a custom mobile app UI/UX design or website? Message me directly on WhatsApp!"
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Start WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-black shadow-[0_8px_30px_rgba(16,185,129,0.4)] border border-emerald-300/40 cursor-pointer"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageCircle className="w-7 h-7 text-black fill-black" />
        )}
      </motion.button>
    </div>
  );
}
