"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "horizontal" | "vertical";
}

export function DGLogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-500 drop-shadow-[0_0_12px_rgba(212,175,55,0.45)] hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]`}
      aria-label="Dhairya Gulati Luxury Monogram Mark"
    >
      <defs>
        {/* Primary Gold Metallic Gradient */}
        <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F3E5AB" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>

        {/* Secondary Accent Gold Gradient */}
        <linearGradient id="goldAccent" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6010" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FFF4D0" />
        </linearGradient>

        {/* Outer Shield Glow Radial */}
        <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Glow Background */}
      <ellipse cx="120" cy="100" rx="100" ry="80" fill="url(#logoGlow)" />

      {/* Geometric Hexagonal Outer Luxury Emblem Frame */}
      <polygon
        points="120,12 215,62 215,138 120,188 25,138 25,62"
        fill="none"
        stroke="url(#goldMetallic)"
        strokeWidth="6"
        strokeLinejoin="round"
        className="opacity-90"
      />

      {/* Inner Metallic Accent Hexagon */}
      <polygon
        points="120,24 198,68 198,132 120,176 42,132 42,68"
        fill="none"
        stroke="url(#goldAccent)"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="opacity-60"
      />

      {/* Letter D - Sleek Geometric Gold Monogram */}
      <path
        d="M60 50 H98 C132 50 152 70 152 100 C152 130 132 150 98 150 H60 V50 Z M84 72 V128 H98 C118 128 126 116 126 100 C126 84 118 72 98 72 H84 Z"
        fill="url(#goldMetallic)"
        fillRule="evenodd"
      />

      {/* Letter G - Futuristic Dynamic Interlocking Arc */}
      <path
        d="M130 72 C142 58 160 50 182 50 C206 50 220 64 224 82 L198 90 C195 79 188 72 178 72 C165 72 154 83 150 100 L130 72 Z"
        fill="url(#goldAccent)"
      />

      <path
        d="M150 100 L170 122 C174 136 186 148 202 148 C215 148 226 138 228 124 H182 V102 H228 C229 108 230 114 230 120 C230 152 208 174 178 174 C150 174 132 152 130 120 L150 100 Z"
        fill="url(#goldMetallic)"
      />

      {/* Glowing Central Diamond Node */}
      <polygon points="120,94 126,100 120,106 114,100" fill="#FFFFFF" />
    </svg>
  );
}

export default function Logo({
  className = "",
  iconOnly = false,
  size = "md",
  showText = true,
  variant = "horizontal",
}: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-2xl",
  };

  if (iconOnly || !showText) {
    return <DGLogoIcon className={`${iconSizes[size]} ${className}`} />;
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <DGLogoIcon className={iconSizes[size]} />
        <span
          className={`font-serif font-extrabold tracking-tight gold-text-gradient transition-colors duration-300 ${textSizes[size]}`}
        >
          Dhairya Gulati
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <DGLogoIcon className={iconSizes[size]} />
      <span
        className={`font-serif font-extrabold tracking-tight gold-text-gradient transition-colors duration-300 ${textSizes[size]}`}
      >
        Dhairya Gulati
      </span>
    </div>
  );
}
