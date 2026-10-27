"use client";

import React, { useState } from "react";
import { 
  CATEGORIES_DATA, 
  Category, 
  ProductItem 
} from "@/data/productsData";
import { 
  Snowflake, 
  FlaskConical, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface ProductsSectionProps {
  onSelectProductForRfq: (productName: string) => void;
}

export default function ProductsSection({ onSelectProductForRfq }: ProductsSectionProps) {
  // Default to Cooling solution
  const [selectedDeptId, setSelectedDeptId] = useState<string>("cooling-solution");

  // Current active department
  const currentDept = CATEGORIES_DATA.find((c) => c.id === selectedDeptId) || CATEGORIES_DATA[0];

  // Helper for department icons
  const getDeptIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 transition-colors ${isSelected ? "text-[#ea580c]" : "text-slate-500"}`;
    switch (iconName) {
      case "Snowflake": return <Snowflake className={iconClass} />;
      case "FlaskConical": return <FlaskConical className={iconClass} />;
      case "ShieldCheck": return <ShieldCheck className={iconClass} />;
      case "Wrench": return <Wrench className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="products" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a192f] tracking-tight">
            Industrial Solutions by Department
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Select an industrial department to browse certified solutions ready for immediate deployment.
          </p>
        </div>

        {/* 4 Clean Department Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 reveal-scale stagger-1">
          {CATEGORIES_DATA.map((dept) => {
            const isSelected = selectedDeptId === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0a192f] text-white shadow-md shadow-slate-900/15 ring-2 ring-[#ea580c]"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs"
                }`}
              >
                {getDeptIcon(dept.iconName, isSelected)}
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Department Info Strip */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs reveal-on-scroll stagger-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{currentDept.departmentCode}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0a192f]">
              {currentDept.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-normal leading-relaxed">
              {currentDept.shortDesc}
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <PeanutButton
              onClick={() => onSelectProductForRfq(`${currentDept.name} Department`)}
              size="sm"
            >
              REQUEST QUOTE!
            </PeanutButton>
          </div>
        </div>

        {/* 4 Clean Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDept.items.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-400 p-4 transition-all duration-300 card-interactive flex flex-col justify-between reveal-on-scroll stagger-${(index % 4) + 1}`}
            >
              <div>
                {/* Photo container */}
                <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                    Certified
                  </div>
                </div>

                {/* Product Title */}
                <h4 className="text-base font-heading font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-snug mb-1.5">
                  {product.name}
                </h4>

                {/* Product Tagline */}
                <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed mb-3">
                  {product.tagline}
                </p>

                {/* Key Spec Badges (Clean & Simple) */}
                {product.specs && product.specs.length > 0 && (
                  <div className="space-y-1 mb-4 pt-1">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <div
                        key={i}
                        className="text-[11px] text-slate-600 bg-slate-50 rounded-md px-2 py-1 border border-slate-100 font-medium truncate"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <PeanutButton
                  onClick={() => onSelectProductForRfq(product.name)}
                  size="sm"
                  className="w-full"
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
