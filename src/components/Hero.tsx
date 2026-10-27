"use client";

import React from "react";
import { 
  ArrowUpRight, 
  ChevronRight, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Play
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface HeroProps {
  onOpenRfq: () => void;
}

export default function Hero({ onOpenRfq }: HeroProps) {
  return (
    <section 
      id="overview" 
      className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 overflow-hidden bg-white"
    >
      {/* 
        Subtle Modern Engineering Grid Background 
        (Matching the reference image's grid lines, but cleanly styled on white) 
      */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px"
        }}
      />

      {/* Subtle Ambient Radial Glows (Brand Orange & Sky Blue) */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* Faint Giant Background Watermark (Matching the faint 'READ' in reference) */}
      <div 
        aria-hidden="true" 
        className="absolute right-6 top-1/3 select-none pointer-events-none text-slate-100 font-black text-7xl sm:text-9xl lg:text-[180px] tracking-widest uppercase leading-none opacity-40 -z-0"
      >
        MASAR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN (Exact match to Reference Image Typography & Hierarchy)
              [ Eyebrow with ! ] [ Big 3-line Headline ] [ Avatar Stack ] [ Arrow CTA & Text ]
          ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 reveal-left">
            
            {/* Eyebrow: Matches 'KEEP YOUR MONEY SAFE !' from reference */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest">
                CERTIFIED INDUSTRIAL EXCELLENCE
              </span>
              <span className="text-sm font-black text-[#ea580c] animate-bounce">!</span>
            </div>

            {/* Futuristic Industrial Headline matching 'DESIGN FUTURES.' reference */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-orbitron font-bold tracking-tight text-[#0a192f] leading-[1.14]">
              Leading industrial
              <br />
              <span className="text-[#ea580c] font-bold">
                solutions platform
              </span>
              <br />
              for your future.
            </h1>

            {/* Social Proof Avatar Stack: Matches the avatar row + '168K+ Realtime Users' in reference */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Client Engineer 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client Engineer 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Client Engineer 3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80"
                  alt="Client Engineer 4"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2540] ring-2 ring-white text-[11px] font-bold text-white shadow-sm">
                  +500
                </div>
              </div>

              <div>
                <div className="text-base font-black text-[#0a2540] tracking-tight">500+ Projects</div>
                <div className="text-xs text-slate-500 font-semibold">Supplied Across Saudi Arabia</div>
              </div>
            </div>

            {/* Bottom Interactive Area: Matches Circular Arrow Button + 2-line Description from reference */}
            <div className="flex items-start sm:items-center gap-4 pt-3">
              {/* Circular Diagonal Arrow Button (Exact style from reference image) */}
              <button
                onClick={onOpenRfq}
                className="w-13 h-13 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#c2410c] hover:opacity-95 text-white flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/30 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
                aria-label="Request Quotation"
              >
                <ArrowUpRight className="w-6 h-6 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Concise Narrative Paragraph (Matches Polkadot text in reference) */}
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-normal">
                Masar Arabia unites and secures a growing ecosystem of precision industrial engineering, certified FRP cooling towers, and process water technologies under Saudi Vision 2030.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PeanutButton onClick={onOpenRfq} size="md">
                REQUEST QUOTE!
              </PeanutButton>
              <a
                href="#products"
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-orange-50 text-slate-800 hover:text-[#ea580c] font-bold text-xs uppercase tracking-wider transition-colors border border-slate-200"
              >
                View Catalog
              </a>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D FLOATING MOCKUPS (Matches Reference 3D Floating Phones)
              [ Clean white background with glowing orange/blue ribbons ]
          ========================================================================= */}
          <div className="lg:col-span-6 relative flex justify-center items-center reveal-right">
            
            {/* Outer Wrapper with soft hover 3D tilt */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Main 3D Floating Mockups Visual */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-float">
                <img
                  src="/img/hero_3d_floating.png"
                  alt="Masar Arabia Industrial 3D Engineering Platform"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(2,132,199,0.12)] hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                />
              </div>

              {/* Floating Live Telemetry Badge (Top Right) */}
              <div className="absolute top-2 right-2 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl animate-float-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-[11px] font-black text-[#0a2540]">UNIT 1 OPERATIONAL</div>
                  <div className="text-[9px] text-slate-500 font-semibold">Live Plant Telemetry</div>
                </div>
              </div>

              {/* Floating Certification Badge (Bottom Left) */}
              <div className="absolute bottom-4 left-2 sm:left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl animate-float">
                <div className="w-7 h-7 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0a2540]">ISO 9001 &amp; SASO</div>
                  <div className="text-[10px] text-[#ea580c] font-bold">100% Certified Supplier</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
