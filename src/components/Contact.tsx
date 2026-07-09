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
  Award, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
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

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      
      // Fire confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3B82F6", "#06B6D4", "#8B5CF6"],
      });

      // Clear Form
      setFormData({
        name: "",
        email: "",
        business: "",
        projectType: "Mobile App Design",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400 mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Amazing
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-sm md:text-base font-medium">
            Have a project idea? Fill out the form or reach out directly to schedule a design consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Info & Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card border border-white/10 relative">
            <div className="flex flex-col gap-8">
              
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Positioning Statement</span>
                <h4 className="text-lg font-bold text-white mt-2 leading-relaxed">
                  "Dhairya Gulati designs digital experiences that help local businesses grow."
                </h4>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-5">
                <a 
                  href="mailto:dgulati352@gmail.com" 
                  className="flex items-center gap-4 group text-slate-300 hover:text-white transition-colors"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase">Email Me</span>
                    <span className="text-sm font-semibold">dgulati352@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+918791416116" 
                  className="flex items-center gap-4 group text-slate-300 hover:text-white transition-colors"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase">Call / WhatsApp</span>
                    <span className="text-sm font-semibold">+91 8791416116</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase">Based In</span>
                    <span className="text-sm font-semibold">Saharanpur, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10 lg:mt-0">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-4">Connect with me</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-bold text-xs"
                  aria-label="Dribbble Profile"
                >
                  Dr
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all font-bold text-xs"
                  aria-label="Behance Profile"
                >
                  Be
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 relative">
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h4>
                  <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-8">
                    Thank you for reaching out. Dhairya will review your details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={`w-full bg-white/3 border px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-white/5 transition-all ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-400 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email & Business Fields side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full bg-white/3 border px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-white/5 transition-all ${
                          errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 font-semibold">{errors.email}</span>}
                    </div>

                    {/* Business */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="Local store / brand name"
                        className="w-full bg-white/3 border border-white/5 px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-white/5 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all cursor-pointer"
                    >
                      <option value="Mobile App Design">Mobile App Design</option>
                      <option value="UI/UX Redesign">UI/UX Redesign</option>
                      <option value="Design Systems">Design Systems</option>
                      <option value="Dashboard Design">Dashboard Design</option>
                      <option value="Restaurant App Design">Restaurant App Design</option>
                      <option value="Gym Management App">Gym Management App</option>
                      <option value="Local Business App">Local Business App</option>
                      <option value="Other Design Consultation">Other Design Consultation</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your project goals, target audience, and desired timeline..."
                      className={`w-full bg-white/3 border px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-white/5 transition-all ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-400 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-blue-500/20 disabled:bg-blue-800/50 disabled:cursor-not-allowed group"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Message</span>
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
