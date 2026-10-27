"use client";

import React, { useState } from "react";
import { 
  CATEGORIES_DATA, 
  ProductItem, 
  Category 
} from "@/data/productsData";
import { 
  Snowflake, 
  FlaskConical, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface ProductsSectionProps {
  onSelectProductForRfq: (productName: string) => void;
}

export default function ProductsSection({ onSelectProductForRfq }: ProductsSectionProps) {
  // Default to the first department: Cooling solution
  const [selectedDeptId, setSelectedDeptId] = useState<string>("cooling-solution");

  // Active department data
  const currentDept = CATEGORIES_DATA.find(c => c.id === selectedDeptId) || CATEGORIES_DATA[0];

  // Icon helper
  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case "Snowflake": return <Snowflake className="w-5 h-5" />;
      case "FlaskConical": return <FlaskConical className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Wrench": return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-100/30 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Departments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a192f] tracking-tight">
            Industrial Solutions &amp; Products
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            Choose a department to view available equipment and request an instant quotation.
          </p>
        </div>

        {/* 4 Clean Department Tabs (Direct under Landing Page) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CATEGORIES_DATA.map((dept) => {
            const isSelected = selectedDeptId === dept.id;

            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "bg-[#0a192f] text-white shadow-lg shadow-slate-900/20 ring-2 ring-[#ea580c]" 
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900"
                }`}
              >
                <span className={isSelected ? "text-[#ea580c]" : "text-slate-500"}>
                  {getDeptIcon(dept.iconName)}
                </span>
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Department Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8">
          <div>
            <div className="text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">
              Active Department
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0a192f]">
              {currentDept.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-normal">
              {currentDept.shortDesc}
            </p>
          </div>

          <div className="shrink-0">
            <PeanutButton
              onClick={() => onSelectProductForRfq(`${currentDept.name} Department`)}
              size="sm"
            >
              REQUEST QUOTE!
            </PeanutButton>
          </div>
        </div>

        {/* Simple & Clean 4-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDept.items.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase">
                    Certified
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-base sm:text-lg font-heading font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-snug mb-2">
                  {product.name}
                </h4>

                {/* Short Tagline */}
                <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 mb-4">
                  {product.tagline}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100">
                <PeanutButton
                  onClick={() => onSelectProductForRfq(product.name)}
                  size="sm"
                  className="w-full justify-between"
                >
                  REQUEST QUOTE!
                </PeanutButton>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
