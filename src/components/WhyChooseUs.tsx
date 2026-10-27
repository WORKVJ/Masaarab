"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/data/productsData";
import { 
  ShieldCheck, 
  Truck, 
  Handshake, 
  Cpu, 
  Headphones, 
  Award,
  Sparkles,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface WhyChooseUsProps {
  onOpenRfq: () => void;
}

export default function WhyChooseUs({ onOpenRfq }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6" />;
      case "Truck": return <Truck className="w-6 h-6" />;
      case "Handshake": return <Handshake className="w-6 h-6" />;
      case "Cpu": return <Cpu className="w-6 h-6" />;
      case "Headphones": return <Headphones className="w-6 h-6" />;
      case "Award": return <Award className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background radial accents with brand warm & blue colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-100/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-sky-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#c2410c] text-xs font-bold mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Why Choose Masar Arabia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight">
            Built for Heavy Industry,{" "}
            <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0284c7] bg-clip-text text-transparent">
              Trusted Across KSA
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            From emergency plant turnarounds to greenfield infrastructure, our commitment to quality, speed, and precision engineering guarantees peak performance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const isOrangeAccent = index % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm transition-all duration-300 group flex flex-col justify-between card-interactive reveal-on-scroll stagger-${(index % 6) + 1}`}
              >
                <div>
                  {/* Icon Container with subtle gradient */}
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm ${
                    isOrangeAccent
                      ? "bg-gradient-to-br from-orange-50 to-orange-100/60 border-orange-200/60 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white"
                      : "bg-gradient-to-br from-sky-50 to-blue-100/60 border-sky-200/60 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white"
                  }`}>
                    {getIcon(item.icon)}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#0a2540] group-hover:text-[#ea580c] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-black text-slate-300 group-hover:text-[#ea580c] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#ea580c] transition-colors">
                  <span>Enterprise Standard</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 rounded-[36px] bg-gradient-to-r from-[#0a2540] via-[#0f2e4e] to-[#0a2540] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800 reveal-scale">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/15 via-sky-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black text-[#ea580c] uppercase tracking-widest block mb-2">
                Need Custom Sizing or Technical Specifications?
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Consult with Our Senior Applications Engineering Team Today
              </h3>
              <p className="text-slate-300 text-sm mt-2 font-normal leading-relaxed">
                Get thermal calculations, 3D CAD drawing submittals, and comprehensive price quotations within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <PeanutButton onClick={onOpenRfq} size="md">
                REQUEST QUOTE!
              </PeanutButton>
              <a
                href="tel:+9660126473020"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
              >
                Call: +966 012 647 3020
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
