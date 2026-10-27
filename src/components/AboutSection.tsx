"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Clock,
  Sparkles,
  ChevronRight,
  Building2,
  Check,
  FileCheck
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface AboutSectionProps {
  onOpenRfq: () => void;
}

export default function AboutSection({ onOpenRfq }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<"vision" | "quality" | "localization">("vision");

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fafbfc] relative overflow-hidden">
      {/* Subtle Ambient Radial Glows using Brand Orange and Blue */}
      <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-orange-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[520px] h-[520px] bg-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* =========================================================================
            TOP ARCHITECTURAL ROW (Exact match to Reference Image 2 Top Section)
            [ Left: Services Intro ] [ Center: Sculpted Notch Banner ] [ Right: 500+ Stats ]
        ========================================================================= */}
        <div className="relative mb-20">
          
          {/* Outer container creating the cohesive top banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 pb-12 border-b border-slate-200/80">
            
            {/* Top Left: Two Round Buttons + Services Description (Reference Image Left) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 pr-0 lg:pr-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#0a2540] flex items-center justify-center text-white shadow-md shadow-slate-900/10 hover:scale-105 transition-transform">
                  <Factory className="w-4 h-4 text-sky-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] flex items-center justify-center text-white shadow-md shadow-orange-500/20 hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Masar Arabia empowers Saudi mega-industries with precision engineering, FRP cooling, and certified plant technologies.
              </p>
              <div>
                <a 
                  href="#products" 
                  className="text-xs font-black text-[#0a2540] hover:text-[#ea580c] tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-[#ea580c] pb-0.5 transition-all">OUR SERVICES</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Top Center: Signature Sculpted Cutout Notch (Reference Image Center) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm rounded-[32px] p-6 bg-gradient-to-b from-sky-100/80 via-sky-50/50 to-white/90 border border-sky-200/80 shadow-[0_8px_30px_rgb(2,132,199,0.06)] text-center relative">
                
                {/* Floating Top Pill Button (Matches 'Open Account ->' from reference) */}
                <button
                  onClick={onOpenRfq}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-800 border border-slate-200 text-xs font-bold hover:bg-orange-50 hover:text-[#ea580c] hover:border-orange-300 transition-all shadow-sm mb-3 cursor-pointer group"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-3 h-3 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Big Two-Tone Headline (Matches 'FAST SEND, FAST RECEIVE' from reference) */}
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase">
                  <span className="text-[#0a2540] block">FAST SUPPLY,</span>
                  <span className="bg-gradient-to-r from-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                    RELIABLE RESULTS
                  </span>
                </h3>
              </div>
            </div>

            {/* Top Right: Stat Highlight (Reference Image Right) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-2 pl-0 lg:pl-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 text-[#ea580c]" />
                <span>TOTAL PROJECTS</span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-[#0284c7] tracking-tight">
                  500<span className="text-[#ea580c]">+</span>
                </span>
                <span className="text-xs font-semibold text-slate-600 max-w-[140px] leading-tight text-left">
                  Industrial Projects Supplied in KSA
                </span>
              </div>

              <a 
                href="#projects" 
                className="text-xs font-bold text-slate-500 hover:text-[#0284c7] tracking-wider uppercase inline-flex items-center gap-1 pt-1 transition-colors group"
              >
                <span>VIEW CASE STUDIES</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MAIN SECTION: TWO COLUMN ARCHITECTURE (Payrot Reference Match)
            [ Left: Bold Narrative, Tabs & Buttons ] [ Right: Cutout Blue Card & Engineer ]
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ----------------- LEFT COLUMN ----------------- */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/80 text-[#c2410c] text-xs font-bold uppercase tracking-wider shadow-xs w-max">
              <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
              <span>Certified Industrial Supplier</span>
            </div>

            {/* Large Bold Uppercase Headline (Matches 'HIRE AND PAY GLOBALLY WITH PAYROT') */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-[#0a192f] tracking-tight leading-[1.18] uppercase">
              Safe, Reliable &amp; Prompt Industrial Services That Save You{" "}
              <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0284c7] bg-clip-text text-transparent">
                Time &amp; Money
              </span>
            </h2>

            {/* Body Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Masar Arabia, we take immense pride in delivering precision-engineered products and industrial technologies tailored to the Middle East&apos;s most demanding operating conditions. Backed by deep engineering knowledge, robust supply chain networks, and stringent quality assurance, we ensure every installation meets international excellence.
            </p>

            {/* Interactive Capability Switcher Pill Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "vision"
                    ? "bg-[#0a2540] text-white shadow-md shadow-slate-900/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                Vision 2030 Focus
              </button>
              <button
                onClick={() => setActiveTab("quality")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "quality"
                    ? "bg-[#ea580c] text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                Quality Assurance
              </button>
              <button
                onClick={() => setActiveTab("localization")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "localization"
                    ? "bg-[#0284c7] text-white shadow-md shadow-sky-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                Rapid Fulfillment
              </button>
            </div>

            {/* Dynamic Content Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md">
              {activeTab === "vision" && (
                <div className="space-y-3">
                  <h3 className="font-extrabold text-[#0a2540] text-base flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#ea580c]" />
                    Aligning with Saudi Arabia&apos;s National Industrial Strategy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Supporting sustainable industrial growth through water recycling systems, high-efficiency evaporative cooling with minimal power consumption, and advanced environmentally-sound process chemicals.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>IKTVA &amp; Local Content Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Green Water Purification Technologies</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "quality" && (
                <div className="space-y-3">
                  <h3 className="font-extrabold text-[#0a2540] text-base flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ea580c]" />
                    Certified Traceability &amp; Material Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Each mechanical component, valve, pipe fitting, and FRP profile is subjected to rigorous third-party ultrasonic, hydro-static, and Positive Material Identification (PMI) testing before dispatch.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>EN 10204 3.1 Mill Test Certificates</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>API 6D &amp; CTI STD-201 Adherence</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "localization" && (
                <div className="space-y-3">
                  <h3 className="font-extrabold text-[#0a2540] text-base flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0284c7]" />
                    Centralized Warehousing Across Saudi Arabia
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With strategically situated distribution centers in Riyadh, Jeddah, and the Eastern Province (Dammam/Jubail), we drastically reduce plant lead times and emergency shutdowns.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Immediate Stock Dispatch Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24/7 Emergency Plant Turnaround Supply</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <PeanutButton onClick={onOpenRfq} size="md">
                PARTNER WITH MASAR ARABIA
              </PeanutButton>

              <a
                href="#products"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0a2540] hover:text-[#0284c7] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-slate-200 transition-colors shadow-xs"
              >
                <span>View Full Product Range</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* ----------------- RIGHT COLUMN (Payrot Reference Visual Composition) ----------------- */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Outer Container matching the Payrot card structure */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-[40px] p-4 sm:p-5 flex items-center justify-center">
              
              {/* Distinctive Sky-Blue Geometric Cutout Panel (Notice chamfered top-left corner matching reference) */}
              <div 
                className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-[#38bdf8] via-[#0284c7] to-[#0369a1] shadow-2xl overflow-hidden"
                style={{
                  clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 22%)"
                }}
              >
                {/* Subtle internal grid/glow lines */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Saudi Operations Specialist & Engineer Photo */}
              <div 
                className="relative z-10 w-[94%] h-[94%] overflow-hidden rounded-[32px] shadow-lg flex items-center justify-center bg-slate-900/10"
                style={{
                  clipPath: "polygon(21% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 21%)"
                }}
              >
                <img 
                  src="/img/saudi_engineer_portrait.jpg" 
                  alt="Saudi Industrial Engineer Masar Arabia" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                {/* Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ---------------- Floating Badge 1 (Top Left: Matches PAYROT brand badge) ---------------- */}
              <div className="absolute top-4 left-2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                <div className="w-8 h-8 rounded-xl bg-[#0a2540] flex items-center justify-center text-white shrink-0">
                  <Factory className="w-4 h-4 text-[#ea580c]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0a2540] tracking-wide">MASAR ARABIA</div>
                  <div className="text-[10px] text-slate-500 font-semibold">15+ Years in Saudi Arabia</div>
                </div>
              </div>

              {/* ---------------- Floating Badge 2 (Top Right: Matches PAYMENT REQUEST Sent) ---------------- */}
              <div className="absolute top-12 -right-2 sm:-right-4 z-20 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-slate-900 leading-tight">ISO 9001 &amp; SASO</div>
                  <div className="text-[9px] text-emerald-600 font-bold">100% Certified</div>
                </div>
              </div>

              {/* ---------------- Floating Badge 3 (Bottom Left: Matches 1500 USD Paid with Blue Check) ---------------- */}
              <div className="absolute -bottom-3 left-4 sm:left-6 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_14px_35px_rgba(0,0,0,0.15)]">
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0a2540]">SABIC &amp; SEC APPROVED</div>
                  <div className="text-[10px] text-[#0284c7] font-bold">Approved Kingdom Vendor</div>
                </div>
                {/* Circular Blue Checkmark Badge from reference */}
                <div className="w-6 h-6 rounded-full bg-[#0284c7] flex items-center justify-center text-white shadow-sm ml-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
