"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Sparkles,
  CheckCircle2,
  Sun,
  Moon
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [isSectionLight, setIsSectionLight] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    projectType: "Mobile App Design",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    // Construct WhatsApp message
    const text = `Hi Dhairya!\n\nI reached out via your portfolio:\n- *Name:* ${formData.name}\n- *Email:* ${formData.email}\n- *Business:* ${formData.business || 'N/A'}\n- *Project Type:* ${formData.projectType}\n- *Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/918791416116?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      
      // Fire confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C15F3C", "#E27B56", "#F3EFEA"],
      });

      // Clear Form
      setFormData({
        name: "",
        email: "",
        business: "",
        projectType: "Mobile App Design",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C15F3C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative">
        
        {/* Header & Section Theme Toggle */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-terracotta border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#E88D6A] shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E88D6A]" />
              <span>Initiate Collaboration</span>
            </div>

            {/* Section Scoped Theme Toggle */}
            <button
              onClick={() => setIsSectionLight(!isSectionLight)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-stone-200 transition-all cursor-pointer shadow-sm"
              title="Toggle Section Theme (Light/Dark Spec Mode)"
            >
              {isSectionLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-stone-300" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>Light Spec Mode</span>
                </>
              )}
            </button>
          </div>

          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Schedule a Design Consultation
          </h3>
          <p className="text-stone-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Have a project idea? Fill out the form or connect via WhatsApp for an immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Info & Credentials */}
          <div className={`lg:col-span-5 flex flex-col justify-between p-7 rounded-3xl border shadow-xl relative transition-colors duration-300 ${
            isSectionLight 
              ? "bg-[#F9F6F0] text-[#15130F] border-[#C15F3C]/40" 
              : "glass-card-terracotta text-white border-[#C15F3C]/20"
          }`}>
            <div className="flex flex-col gap-8">
              
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-[0.25em] ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                  POSITIONING STATEMENT
                </span>
                <h4 className={`font-serif text-lg font-bold mt-2 leading-relaxed italic ${isSectionLight ? "text-[#15130F]" : "text-white"}`}>
                  "Dhairya Gulati designs digital experiences that help local businesses grow."
                </h4>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-5">
                <a 
                  href="mailto:dgulati352@gmail.com" 
                  className={`flex items-center gap-4 group transition-colors p-3.5 rounded-2xl border ${
                    isSectionLight 
                      ? "bg-white border-stone-200 text-stone-800 hover:border-[#C15F3C]" 
                      : "bg-white/3 border-white/8 text-stone-300 hover:text-white hover:border-[#C15F3C]/30"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionLight ? "text-stone-500" : "text-stone-400"}`}>Direct Email</span>
                    <span className={`text-sm font-semibold ${isSectionLight ? "text-[#15130F]" : "text-white"}`}>dgulati352@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20connect%20with%20you!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-emerald-500 transition-colors p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionLight ? "text-stone-500" : "text-stone-400"}`}>Call / WhatsApp</span>
                    <span className="text-sm font-bold text-emerald-500 font-mono">+91 8791416116</span>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-3.5 rounded-2xl border ${
                  isSectionLight 
                    ? "bg-white border-stone-200 text-stone-800" 
                    : "bg-white/3 border-white/8 text-stone-300"
                }`}>
                  <div className="p-3 rounded-xl bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionLight ? "text-stone-500" : "text-stone-400"}`}>Based In</span>
                    <span className={`text-sm font-semibold ${isSectionLight ? "text-[#15130F]" : "text-white"}`}>Saharanpur, UP, India</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10">
              <span className={`text-[10px] uppercase font-bold tracking-[0.2em] block mb-4 ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                SOCIAL CONNECT
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all ${
                    isSectionLight 
                      ? "bg-white border-stone-200 text-stone-700 hover:border-[#C15F3C] hover:text-[#C15F3C]" 
                      : "bg-white/4 border-white/8 text-stone-400 hover:text-[#E88D6A] hover:bg-[#C15F3C]/10 hover:border-[#C15F3C]/30"
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/dgulati352-cpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all ${
                    isSectionLight 
                      ? "bg-white border-stone-200 text-stone-700 hover:border-[#C15F3C] hover:text-[#C15F3C]" 
                      : "bg-white/4 border-white/8 text-stone-400 hover:text-[#E88D6A] hover:bg-[#C15F3C]/10 hover:border-[#C15F3C]/30"
                  }`}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://dribbble.com/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-xl border transition-all font-bold text-xs ${
                    isSectionLight 
                      ? "bg-white border-stone-200 text-stone-700 hover:border-[#C15F3C] hover:text-[#C15F3C]" 
                      : "bg-white/4 border-white/8 text-stone-400 hover:text-[#E88D6A] hover:bg-[#C15F3C]/10 hover:border-[#C15F3C]/30"
                  }`}
                  aria-label="Dribbble Profile"
                >
                  Dr
                </a>
                <a
                  href="https://behance.net/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-xl border transition-all font-bold text-xs ${
                    isSectionLight 
                      ? "bg-white border-stone-200 text-stone-700 hover:border-[#C15F3C] hover:text-[#C15F3C]" 
                      : "bg-white/4 border-white/8 text-stone-400 hover:text-[#E88D6A] hover:bg-[#C15F3C]/10 hover:border-[#C15F3C]/30"
                  }`}
                  aria-label="Behance Profile"
                >
                  Be
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={`lg:col-span-7 p-7 rounded-3xl border shadow-xl relative transition-colors duration-300 ${
            isSectionLight 
              ? "bg-[#F9F6F0] text-[#15130F] border-[#C15F3C]/40" 
              : "glass-card-terracotta text-white border-[#C15F3C]/20"
          }`}>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className={`font-serif text-2xl font-bold mb-3 ${isSectionLight ? "text-[#15130F]" : "text-white"}`}>Message Sent Successfully!</h4>
                  <p className={`max-w-sm text-sm leading-relaxed mb-8 ${isSectionLight ? "text-stone-600" : "text-stone-400"}`}>
                    Thank you for reaching out. Dhairya will review your details and get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="https://wa.me/918791416116"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setStatus("idle")}
                      className={`px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSectionLight 
                          ? "bg-white border-stone-300 text-stone-800 hover:bg-stone-100" 
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                      Your Name <span className="text-[#C15F3C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full border px-4 py-3.5 rounded-2xl text-sm placeholder-stone-400 focus:outline-none transition-all ${
                        isSectionLight 
                          ? "bg-white border-stone-300 text-stone-900 focus:border-[#C15F3C]" 
                          : "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60"
                      } ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.name && <span className="text-[11px] text-red-400 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email & Business Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                        Email Address <span className="text-[#C15F3C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className={`w-full border px-4 py-3.5 rounded-2xl text-sm placeholder-stone-400 focus:outline-none transition-all ${
                          isSectionLight 
                            ? "bg-white border-stone-300 text-stone-900 focus:border-[#C15F3C]" 
                            : "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60"
                        } ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 font-semibold">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className={`text-xs font-bold uppercase tracking-wider ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="e.g. Royal Bistro / FitClub"
                        className={`w-full border px-4 py-3.5 rounded-2xl text-sm placeholder-stone-400 focus:outline-none transition-all ${
                          isSectionLight 
                            ? "bg-white border-stone-300 text-stone-900 focus:border-[#C15F3C]" 
                            : "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className={`text-xs font-bold uppercase tracking-wider ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3.5 rounded-2xl text-sm focus:outline-none transition-all cursor-pointer ${
                        isSectionLight 
                          ? "bg-white border-stone-300 text-stone-900 focus:border-[#C15F3C]" 
                          : "bg-[#15130F] border-white/10 text-white focus:border-[#C15F3C]/60"
                      }`}
                    >
                      <option value="Mobile App Design">Mobile App Design (iOS & Android)</option>
                      <option value="UI/UX Redesign">UI/UX Redesign</option>
                      <option value="Figma Design Systems">Figma Design Systems</option>
                      <option value="Dashboard & Analytics">Dashboard & Analytics</option>
                      <option value="Restaurant App System">Restaurant App System</option>
                      <option value="Gym Management App">Gym Management App</option>
                      <option value="Local Business App">Local Business App</option>
                      <option value="Other Design Consultation">Other Design Consultation</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className={`text-xs font-bold uppercase tracking-wider ${isSectionLight ? "text-[#C15F3C]" : "text-[#E88D6A]"}`}>
                      Project Details <span className="text-[#C15F3C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your business goals, app requirements, and timeline..."
                      className={`w-full border px-4 py-3.5 rounded-2xl text-sm placeholder-stone-400 focus:outline-none transition-all ${
                        isSectionLight 
                          ? "bg-white border-stone-300 text-stone-900 focus:border-[#C15F3C]" 
                          : "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60"
                      } ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.message && <span className="text-[11px] text-red-400 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full py-4 rounded-2xl terracotta-button-gradient text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-[#C15F3C]/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Inquiry via WhatsApp</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
