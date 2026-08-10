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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 transition-all duration-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.45)] hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.85)] hover:scale-105`}
      aria-label="Dhairya Gulati Luxury Monogram Mark"
    >
      <defs>
        {/* Primary Gold Metallic Gradient */}
        <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5D2" />
          <stop offset="30%" stopColor="#F3E5AB" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>

        {/* Secondary Inner Accent Gradient */}
        <linearGradient id="goldAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF5D2" />
          <stop offset="100%" stopColor="#8A6010" />
        </linearGradient>

        {/* Ambient Crest Radial Glow */}
        <radialGradient id="crestGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Crest Glow */}
      <circle cx="50" cy="50" r="45" fill="url(#crestGlow)" />

      {/* Outer Hexagonal Crest Frame */}
      <polygon
        points="50,6 88,27 88,73 50,94 12,73 12,27"
        fill="#121212"
        stroke="url(#goldMetallic)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Thin Gold Accent Ring */}
      <polygon
        points="50,11 83,30 83,70 50,89 17,70 17,30"
        fill="none"
        stroke="url(#goldAccent)"
        strokeWidth="1.2"
        opacity="0.65"
      />

      {/* Vector Path Letter D - Precision Centered */}
      <path
        d="M26 33 H42 C54 33 62 40 62 50 C62 60 54 67 42 67 H26 V33 Z M34 40 V60 H42 C49 60 54 56 54 50 C54 44 49 40 42 40 H34 Z"
        fill="url(#goldMetallic)"
        fillRule="evenodd"
      />

      {/* Vector Path Letter G - Interlocking Precision Alignment */}
      <path
        d="M60 40 C65 35 72 33 80 33 C88 33 93 37 94 44 H86 C85 41 82 39 79 39 C72 39 67 44 67 50 C67 56 72 61 79 61 C84 61 87 58 87 54 H76 V48 H95 V67 H88 L87 64 C84 66 79 68 73 68 C63 68 57 60 57 50 C57 44 58 42 60 40 Z"
        fill="url(#goldMetallic)"
        fillRule="evenodd"
      />

      {/* Center Gold Accent Diamond Dot */}
      <polygon points="50,47 52.5,50 50,53 47.5,50" fill="#FFF5D2" />
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
