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
      className={`${className} transition-all duration-300 drop-shadow-sm dark:drop-shadow-[0_0_14px_rgba(255,107,53,0.45)]`}
      aria-label="DG Logo Mark"
    >
      {/* Letter D - Light: Terracotta / Dark: Glowing Coral Orange */}
      <path
        d="M20 20 H68 C115 20 138 52 138 100 C138 148 115 180 68 180 H20 V20 Z M56 52 V148 H68 C96 148 102 128 102 100 C102 72 96 52 68 52 H56 Z"
        className="logo-path-d"
        fillRule="evenodd"
      />

      {/* Letter G Top Arc - Light: Golden Yellow / Dark: Glowing Cyber Blue */}
      <path
        d="M116 52 C128 32 150 20 178 20 C208 20 232 38 238 68 L202 78 C198 62 188 52 174 52 C158 52 146 64 140 82 L116 52 Z"
        className="logo-path-g-top"
      />

      {/* Letter G Lower Body - Light: Deep Royal Blue / Dark: Neon Coral */}
      <path
        d="M140 82 L164 112 C168 134 182 148 202 148 C218 148 232 136 236 116 H180 V88 H238 C239 94 240 102 240 110 C240 152 212 180 174 180 C140 180 118 152 116 110 L140 82 Z"
        className="logo-path-g-bottom"
      />
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
          className={`font-sans font-extrabold tracking-tight logo-text transition-colors duration-300 ${textSizes[size]}`}
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
        className={`font-sans font-extrabold tracking-tight logo-text transition-colors duration-300 ${textSizes[size]}`}
      >
        Dhairya Gulati
      </span>
    </div>
  );
}
