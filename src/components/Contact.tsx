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
  const [isSectionDark, setIsSectionDark] = useState(false);
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
        colors: ["#C15F3C", "#E27B56", "#1A1714"],
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C15F3C]/30 text-xs uppercase font-bold tracking-[0.25em] text-[#C15F3C] shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C15F3C]" />
              <span>Initiate Collaboration</span>
            </div>

            {/* Section Scoped Theme Toggle */}
            <button
              onClick={() => setIsSectionDark(!isSectionDark)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200/80 hover:bg-stone-300 border border-stone-300 text-xs font-bold text-stone-800 transition-all cursor-pointer shadow-sm"
              title="Toggle Section Theme (Dark Spec Mode)"
            >
              {isSectionDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-stone-700" />
                  <span>Dark Spec Mode</span>
                </>
              )}
            </button>
          </div>

          <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Schedule a Design Consultation
          </h3>
          <p className="text-stone-600 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Have a project idea? Fill out the form or connect via WhatsApp for an immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Info & Credentials */}
          <div className={`lg:col-span-5 flex flex-col justify-between p-7 rounded-3xl border shadow-xl relative transition-colors duration-300 ${
            isSectionDark 
              ? "bg-[#15130F] text-white border-[#C15F3C]/30" 
              : "bg-white text-stone-900 border-stone-200/90 shadow-stone-900/5"
          }`}>
            <div className="flex flex-col gap-8">
              
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-[0.25em] ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
                  POSITIONING STATEMENT
                </span>
                <h4 className={`font-serif text-lg font-bold mt-2 leading-relaxed italic ${isSectionDark ? "text-white" : "text-stone-900"}`}>
                  "Dhairya Gulati designs digital experiences that help local businesses grow."
                </h4>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-5">
                <a 
                  href="mailto:dgulati352@gmail.com" 
                  className={`flex items-center gap-4 group transition-colors p-3.5 rounded-2xl border ${
                    isSectionDark 
                      ? "bg-white/5 border-white/10 text-stone-200 hover:border-[#C15F3C]" 
                      : "bg-stone-50 border-stone-200 text-stone-800 hover:border-[#C15F3C]"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionDark ? "text-stone-400" : "text-stone-500"}`}>Direct Email</span>
                    <span className={`text-sm font-semibold ${isSectionDark ? "text-white" : "text-stone-900"}`}>dgulati352@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918791416116?text=Hi%20Dhairya,%20I'd%20like%20to%20connect%20with%20you!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-emerald-600 transition-colors p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionDark ? "text-stone-400" : "text-stone-500"}`}>Call / WhatsApp</span>
                    <span className="text-sm font-bold text-emerald-600 font-mono">+91 8791416116</span>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-3.5 rounded-2xl border ${
                  isSectionDark 
                    ? "bg-white/5 border-white/10 text-stone-200" 
                    : "bg-stone-50 border-stone-200 text-stone-800"
                }`}>
                  <div className="p-3 rounded-xl bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase ${isSectionDark ? "text-stone-400" : "text-stone-500"}`}>Based In</span>
                    <span className={`text-sm font-semibold ${isSectionDark ? "text-white" : "text-stone-900"}`}>Saharanpur, UP, India</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10">
              <span className={`text-[10px] uppercase font-bold tracking-[0.2em] block mb-4 ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
                CONNECT & VERIFIED PORTFOLIOS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-sm ${
                    isSectionDark 
                      ? "bg-[#0A66C2]/15 border-[#0A66C2]/35 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30 hover:-translate-y-1" 
                      : "bg-[#0A66C2]/10 border-[#0A66C2]/25 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/25 hover:-translate-y-1"
                  }`}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold tracking-wide">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/dgulati352-cpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-sm ${
                    isSectionDark 
                      ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-stone-900 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1" 
                      : "bg-stone-900/10 border-stone-900/20 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 hover:shadow-lg hover:shadow-stone-900/25 hover:-translate-y-1"
                  }`}
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold tracking-wide">GitHub</span>
                </a>

                {/* Dribbble */}
                <a
                  href="https://dribbble.com/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-sm ${
                    isSectionDark 
                      ? "bg-[#EA4C89]/15 border-[#EA4C89]/35 text-white hover:bg-[#EA4C89] hover:border-[#EA4C89] hover:shadow-lg hover:shadow-[#EA4C89]/30 hover:-translate-y-1" 
                      : "bg-[#EA4C89]/10 border-[#EA4C89]/25 text-[#EA4C89] hover:bg-[#EA4C89] hover:text-white hover:border-[#EA4C89] hover:shadow-lg hover:shadow-[#EA4C89]/25 hover:-translate-y-1"
                  }`}
                  aria-label="Dribbble Portfolio"
                  title="Dribbble"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.88 11.04a10.02 10.02 0 0 1-4.71.95c-.32 0-.64-.02-.95-.05 1.54-3.8 2.87-7.79 3.01-8.21a9.96 9.96 0 0 1 2.65 7.31zM12 2.05c2.14 0 4.1.67 5.72 1.81-.19.57-1.46 4.37-2.96 8.07a27.18 27.18 0 0 1-4.79-4.04C11.14 5.3 12 2.05 12 2.05zm-2.88 4.7a28.94 28.94 0 0 0 4.86 4.14c-2.47 6.44-3.18 8.92-3.22 9.07a9.95 9.95 0 0 1-6.72-5.83c2.46-.86 4.88-3.9 5.08-7.38zm-6.9 7.39c.07-3.4 2.45-6.38 4.83-7.25-.17 3.32-2.52 6.27-4.83 7.25zm1.53 2.14a27.5 27.5 0 0 0 3.04-8.73c2.47 6.2 3.12 8.5 3.16 8.65A9.97 9.97 0 0 1 3.75 16.28zm8.25 5.67c.07-.26.83-2.9 3.17-9.08a18.6 18.6 0 0 0 4.67.04c-.67 4.15-3.69 7.47-7.84 9.04z" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Dribbble</span>
                </a>

                {/* Behance */}
                <a
                  href="https://behance.net/dhairyagulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-sm ${
                    isSectionDark 
                      ? "bg-[#1769FF]/15 border-[#1769FF]/35 text-white hover:bg-[#1769FF] hover:border-[#1769FF] hover:shadow-lg hover:shadow-[#1769FF]/30 hover:-translate-y-1" 
                      : "bg-[#1769FF]/10 border-[#1769FF]/25 text-[#1769FF] hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF] hover:shadow-lg hover:shadow-[#1769FF]/25 hover:-translate-y-1"
                  }`}
                  aria-label="Behance Portfolio"
                  title="Behance"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M22 7h-7V5h7v2zm-1.72 8c-.14 1.95-1.57 3.25-3.65 3.25-2.28 0-3.83-1.49-3.83-4.14 0-2.44 1.55-4.14 3.7-4.14 2.14 0 3.65 1.5 3.65 3.97v.88h-5.26c.09 1.13.88 1.84 1.8 1.84 1 0 1.53-.48 1.69-1.28h1.9zm-3.68-3.32c.9 0 1.5-.47 1.55-1.37h-3.05c.08.85.64 1.37 1.5 1.37zM8.67 11.23c.96-.34 1.58-1.07 1.58-2.2 0-1.77-1.35-2.63-3.62-2.63H1v11.2h5.79c2.43 0 3.99-.95 3.99-2.82 0-1.25-.76-2.12-2.11-2.55zM3.52 8.35h2.88c.99 0 1.63.35 1.63 1.13 0 .86-.67 1.25-1.7 1.25H3.52V8.35zm3.01 7.25H3.52v-2.73h3.01c1.15 0 1.86.37 1.86 1.32 0 .98-.71 1.41-1.86 1.41z" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide">Behance</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={`lg:col-span-7 p-7 rounded-3xl border shadow-xl relative transition-colors duration-300 ${
            isSectionDark 
              ? "bg-[#15130F] text-white border-[#C15F3C]/30" 
              : "bg-white text-stone-900 border-stone-200/90 shadow-stone-900/5"
          }`}>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className={`font-serif text-2xl font-bold mb-3 ${isSectionDark ? "text-white" : "text-stone-900"}`}>Message Sent Successfully!</h4>
                  <p className={`max-w-sm text-sm leading-relaxed mb-8 ${isSectionDark ? "text-stone-400" : "text-stone-600"}`}>
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
                        isSectionDark 
                          ? "bg-white/5 border-white/10 text-white hover:bg-white/10" 
                          : "bg-stone-100 border-stone-200 text-stone-800 hover:bg-stone-200"
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
                    <label htmlFor="name" className={`text-xs font-bold uppercase tracking-wider ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
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
                        isSectionDark 
                          ? "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60" 
                          : "bg-stone-50 border-stone-200 text-stone-900 focus:border-[#C15F3C]"
                      } ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email & Business Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className={`text-xs font-bold uppercase tracking-wider ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
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
                          isSectionDark 
                            ? "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60" 
                            : "bg-stone-50 border-stone-200 text-stone-900 focus:border-[#C15F3C]"
                        } ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.email && <span className="text-[11px] text-red-500 font-semibold">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className={`text-xs font-bold uppercase tracking-wider ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
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
                          isSectionDark 
                            ? "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60" 
                            : "bg-stone-50 border-stone-200 text-stone-900 focus:border-[#C15F3C]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className={`text-xs font-bold uppercase tracking-wider ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3.5 rounded-2xl text-sm focus:outline-none transition-all cursor-pointer ${
                        isSectionDark 
                          ? "bg-[#15130F] border-white/10 text-white focus:border-[#C15F3C]/60" 
                          : "bg-stone-50 border-stone-200 text-stone-900 focus:border-[#C15F3C]"
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
                    <label htmlFor="message" className={`text-xs font-bold uppercase tracking-wider ${isSectionDark ? "text-[#E88D6A]" : "text-[#C15F3C]"}`}>
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
                        isSectionDark 
                          ? "bg-[#15130F]/70 border-white/10 text-white focus:border-[#C15F3C]/60" 
                          : "bg-stone-50 border-stone-200 text-stone-900 focus:border-[#C15F3C]"
                      } ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.message && <span className="text-[11px] text-red-500 font-semibold">{errors.message}</span>}
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
