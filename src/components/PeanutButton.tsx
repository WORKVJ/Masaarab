"use client";

import React from "react";

interface PeanutButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function PeanutButton({
  children = "REQUEST QUOTE!",
  onClick,
  href,
  className = "",
  type = "button",
  size = "md",
}: PeanutButtonProps) {
  // If the text is standard short text like "REQUEST QUOTE!", use the exact pixel-perfect single SVG from the reference
  const isDefaultText = typeof children === "string" && (children === "REQUEST QUOTE!" || children === "REQUEST QUOTE");

  const scaleClass = size === "sm" ? "scale-90 origin-left" : size === "lg" ? "scale-110" : "";

  const content = isDefaultText ? (
    <span 
      style={{ width: "196px", height: "46px" }} 
      className={`relative inline-flex items-center justify-center transition-transform hover:scale-[1.03] active:scale-[0.98] group cursor-pointer ${scaleClass} ${className}`}
    >
      <svg 
        width="196" 
        height="46" 
        viewBox="-1 -1 190 44" 
        aria-hidden="true" 
        className="absolute inset-0"
      >
        <path 
          d="M 21 0
             H 118.48
             C 128.04 0 136.11 6.39 138.65 15.13 C 141.16 18.9 144.1 19.31 147.03 15.13 C 149.57 6.39 157.64 0 167.2 0 C 178.8 0 188.2 9.4 188.2 21 C 188.2 32.6 178.8 42 167.2 42 C 157.64 42 149.57 35.61 147.03 26.87 C 145.35 23.94 141.17 22.69 138.65 26.87 C 136.11 35.61 128.04 42 118.48 42
             H 21
             C 9.41 42 0 32.59 0 21
             C 0 9.41 9.41 0 21 0
             Z" 
          fill="#ea580c" 
          stroke="#c2410c" 
          strokeWidth="1" 
          strokeLinejoin="round" 
          shapeRendering="geometricPrecision"
        />
        <g className="pill-button-arrow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
          <path 
            d="M 163 25.2 L 171.4 16.8 M 171.4 25.2 V 16.8 H 163" 
            stroke="#ffffff" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <span className="relative z-10 font-bold text-xs uppercase text-white tracking-wider pr-10">
        REQUEST QUOTE!
      </span>
    </span>
  ) : (
    // Dynamic width version with the identical connected waist and circular arrow badge
    <span className={`relative inline-flex items-center group transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${scaleClass} ${className}`}>
      {/* Left Pill */}
      <span className="h-[44px] pl-6 pr-4 rounded-l-full bg-[#ea580c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shrink-0 border-y border-l border-[#c2410c] shadow-xs">
        {children}
      </span>

      {/* Exact Waist Bridge from Reference SVG */}
      <svg 
        width="28.72" 
        height="44" 
        viewBox="128 0 28.72 44" 
        className="-mx-[1px] shrink-0 pointer-events-none"
      >
        <path 
          d="M 128.04 0 C 136.11 6.39 138.65 15.13 141.16 18.9 C 144.1 19.31 147.03 15.13 149.57 6.39 C 153.5 2.5 156.72 0 156.76 0 L 156.76 44 C 153.5 41.5 149.57 37.61 147.03 28.87 C 144.1 24.69 141.16 25.09 138.65 28.87 C 136.11 37.61 128.04 44 128.04 44 Z"
          fill="#ea580c"
          stroke="#c2410c"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>

      {/* Right Circle with Arrow */}
      <span className="w-[44px] h-[44px] rounded-full bg-[#ea580c] text-white flex items-center justify-center shrink-0 border border-[#c2410c] shadow-xs -ml-[1px]">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        >
          <path 
            d="M 7 17 L 17 7 M 17 7 H 7 M 17 7 V 17" 
            stroke="#ffffff" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block cursor-pointer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block cursor-pointer border-none bg-transparent p-0">
      {content}
    </button>
  );
}
