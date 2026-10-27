"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/productsData";
import { CheckCircle2 } from "lucide-react";

export default function ClientMarquee() {
  return (
    <section id="clients" className="py-14 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-[#c2410c] mb-3 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>Strategic Supply Chain Partner</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0a2540] tracking-tight max-w-3xl mx-auto leading-snug">
          Chosen by Leading Clients in Saudi Arabia for Quality and Reliability
        </h2>
      </div>

      {/* Marquee Track with Smooth Edge Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 sm:gap-8 items-center py-3">
          {/* Double array for seamless loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center h-20 w-44 sm:h-24 sm:w-56 px-6 py-4 rounded-2xl bg-white hover:bg-orange-50/20 border border-slate-200/90 hover:border-orange-300 transition-all duration-300 shrink-0 shadow-xs hover:shadow-md group cursor-pointer"
            >
              <img 
                src={client.logoSrc} 
                alt={client.name} 
                className="max-h-12 sm:max-h-14 w-auto max-w-[88%] object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
