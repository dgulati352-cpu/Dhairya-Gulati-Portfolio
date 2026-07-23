"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.substring(1),
            top: rect.top - 120,
            bottom: rect.bottom - 120,
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(
        (sec) => sec && sec.top <= 0 && sec.bottom > 0
      );
      if (current) {
        setActiveSection(current.id);
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl py-3 px-6 shadow-xl shadow-stone-900/5 border border-stone-200/80"
            : "bg-transparent py-5 px-6 border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E27B56] to-[#C15F3C] flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-[#C15F3C]/20 group-hover:scale-105 transition-transform">
              DG
            </div>
            <span className="font-serif font-extrabold text-lg tracking-wider terracotta-text-gradient group-hover:opacity-90 transition-opacity">
              DHAIRYA.DESIGN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] animate-pulse shadow-[0_0_8px_#C15F3C]"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-bold transition-colors duration-200 rounded-full ${
                    isActive ? "text-[#C15F3C]" : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white rounded-full border border-stone-200 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 text-xs uppercase tracking-wider font-bold rounded-full terracotta-button-gradient text-white transition-all shadow-md shadow-[#C15F3C]/25 hover:shadow-[#C15F3C]/40 hover:scale-[1.02] group cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-stone-100 border border-stone-200 hover:border-[#C15F3C]/40 transition-all md:hidden text-stone-700 hover:text-stone-900"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C15F3C]" /> : <Menu className="w-5 h-5" />}
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
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-45 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden border border-stone-200"
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
                        ? "bg-[#C15F3C]/10 text-[#C15F3C] border border-[#C15F3C]/30"
                        : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
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
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl terracotta-button-gradient text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#C15F3C]/30 transition-colors"
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
