"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { DGLogoIcon } from "./Logo";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(href.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#121212]/95 backdrop-blur-2xl py-3 px-6 shadow-2xl border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#080808]/80 backdrop-blur-md py-4 px-6 border border-[#D4AF37]/20"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform">
              <DGLogoIcon className="w-8 h-8" />
            </div>
            <span className="font-serif font-extrabold text-lg tracking-tight gold-text-gradient group-hover:opacity-90 transition-opacity">
              Dhairya Gulati
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1a1a1a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/25">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-full ${
                    isActive ? "text-[#D4AF37]" : "text-stone-300 hover:text-[#F3E5AB]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#D4AF37]/15 rounded-full border border-[#D4AF37]/40 shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 text-xs uppercase tracking-wider font-extrabold rounded-full terracotta-button-gradient text-black transition-all shadow-lg hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#1c1c1c] border border-[#D4AF37]/30 transition-all md:hidden text-stone-200 hover:text-[#D4AF37]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-45 bg-[#121212]/98 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden border border-[#D4AF37]/40"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-2xl text-sm uppercase tracking-wider font-semibold transition-all ${
                      isActive
                        ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40"
                        : "text-stone-300 hover:bg-[#1a1a1a] hover:text-[#F3E5AB]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl terracotta-button-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-xl transition-transform active:scale-95"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
