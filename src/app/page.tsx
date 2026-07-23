import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#15130F] text-[#F3EFEA] overflow-hidden flex flex-col">
      {/* Universal warm charcoal mesh background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#C15F3C]/[0.04] blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#E27B56]/[0.03] blur-[180px]" />
        <div className="absolute top-[45%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-[#C15F3C]/[0.02] blur-[140px]" />
      </div>

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 flex flex-col relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Global Sticky WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
