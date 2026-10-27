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
  Search, 
  ArrowRight, 
  ArrowUpRight,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
  Zap,
  Tag,
  X,
  FileText,
  Layers,
  Building2,
  Check,
  Award,
  Truck,
  Flame,
  Gauge
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface ProductsSectionProps {
  onSelectProductForRfq: (productName: string) => void;
}

export default function ProductsSection({ onSelectProductForRfq }: ProductsSectionProps) {
  // Default to the first requested department: Cooling solution
  const [selectedDeptId, setSelectedDeptId] = useState<string>("cooling-solution");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);

  // Active department data
  const currentDept = CATEGORIES_DATA.find(c => c.id === selectedDeptId) || CATEGORIES_DATA[0];

  // Filtered products: if searching, search across all departments or active department
  const filteredProducts = searchQuery.trim() !== ""
    ? CATEGORIES_DATA.flatMap(cat => cat.items).filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentDept.items;

  // Icon helper with consistent sizing
  const getDeptIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case "Snowflake": return <Snowflake className={className} />;
      case "FlaskConical": return <FlaskConical className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "Wrench": return <Wrench className={className} />;
      default: return <SlidersHorizontal className={className} />;
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[750px] bg-orange-100/35 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] bg-sky-100/40 rounded-full blur-[160px] pointer-events-none -z-0" />

      {/* Blueprint grid subtle background accent */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-0"
        style={{
          backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER: Direct under the landing page
            [ Eyebrow ] [ Bold Section Title ] [ Concise Explanatory Subtitle ]
        ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Engineering Divisions • Saudi Arabia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-heading font-extrabold tracking-tight text-[#0a192f] leading-tight">
            Explore Solutions by Department
          </h2>

          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Select any department below to view comprehensive technical specifications, performance parameters, and certified product lines engineered for Middle Eastern industrial operations.
          </p>
        </div>

        {/* =========================================================================
            THE 4 PRIMARY DEPARTMENTS: Visible Direct Under Landing Page
            1. Cooling solution
            2. Chemical solution
            3. Safety solution
            4. MRO Solutions
        ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {CATEGORIES_DATA.map((dept, index) => {
            const isSelected = selectedDeptId === dept.id;

            return (
              <div
                key={dept.id}
                onClick={() => {
                  setSelectedDeptId(dept.id);
                  setSearchQuery("");
                }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 group select-none ${
                  isSelected 
                    ? "bg-[#0a192f] text-white shadow-2xl ring-2 ring-[#ea580c] -translate-y-2 scale-[1.02]" 
                    : "bg-slate-50/80 hover:bg-white border border-slate-200/90 text-[#0a192f] shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Active Indicator Top Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase ${
                    isSelected 
                      ? "bg-white/10 text-orange-300 border border-white/20" 
                      : "bg-slate-200/70 text-slate-600"
                  }`}>
                    {dept.departmentCode}
                  </span>

                  {isSelected ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-medium">
                      0{index + 1}
                    </span>
                  )}
                </div>

                {/* Department Icon + Title */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected 
                      ? "bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-lg shadow-orange-500/30 scale-105" 
                      : "bg-white text-slate-700 border border-slate-200 group-hover:text-[#ea580c] group-hover:border-orange-200"
                  }`}>
                    {getDeptIcon(dept.iconName, "w-7 h-7")}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-heading font-bold leading-tight mb-2 transition-colors ${
                    isSelected 
                      ? "text-white" 
                      : "text-[#0a192f] group-hover:text-[#ea580c]"
                  }`}>
                    {dept.name}
                  </h3>

                  <p className={`text-xs leading-relaxed font-normal line-clamp-2 ${
                    isSelected ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {dept.tagline}
                  </p>
                </div>

                {/* Bottom Row: Product count & arrow trigger */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                  isSelected ? "border-white/15 text-orange-300" : "border-slate-200/70 text-slate-500"
                }`}>
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#ea580c]" : "bg-slate-300"}`} />
                    {dept.productCount}
                  </span>

                  <span className={`flex items-center gap-1 text-[11px] font-bold ${
                    isSelected ? "text-white" : "text-[#ea580c] group-hover:translate-x-1"
                  } transition-transform`}>
                    <span>View Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            DETAILED DETAIL OF SELECTED DEPARTMENT: Visible When Selected!
            [ Department Dossier Banner ] [ Key Metrics Matrix ] [ Detailed Products Grid ]
        ========================================================================= */}
        <div className="rounded-[36px] bg-gradient-to-br from-slate-50 via-white to-orange-50/25 border-2 border-orange-200/70 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden transition-all duration-500">
          
          {/* Subtle Corner Background Watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none text-slate-900 font-black text-8xl sm:text-9xl tracking-tighter uppercase">
            {currentDept.id.split("-")[0]}
          </div>

          {/* -----------------------------------------------------------------------
              A. DEPARTMENT EXECUTIVE DOSSIER
          ----------------------------------------------------------------------- */}
          <div className="relative z-10 mb-10 pb-8 border-b border-slate-200/80">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#0a192f] text-white text-[11px] font-bold uppercase tracking-wider">
                    {currentDept.departmentCode}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Certified Department Portfolio
                  </span>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    • Hub: {currentDept.fulfillmentLocation}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0a192f] tracking-tight">
                  {currentDept.name} — Detailed Specifications
                </h3>

                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
                  {currentDept.shortDesc}
                </p>
              </div>

              {/* Department Direct RFQ Action */}
              <div className="shrink-0 flex items-center gap-3">
                <PeanutButton
                  onClick={() => onSelectProductForRfq(`${currentDept.name} Department Scope`)}
                  size="md"
                >
                  REQUEST RFQ!
                </PeanutButton>
              </div>
            </div>

            {/* Department Standards & Compliance Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#ea580c]" />
                Standards Compliance:
              </span>
              {currentDept.leadStandards.map((std, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                >
                  {std}
                </span>
              ))}
            </div>

          </div>

          {/* -----------------------------------------------------------------------
              B. DEPARTMENT OPERATIONAL METRICS (4 High-Tech Cards)
          ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {currentDept.metrics.map((metric, i) => (
              <div 
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#0a192f] tracking-tight">
                  {metric.value}
                </div>
                {metric.detail && (
                  <div className="text-[11px] text-[#ea580c] font-semibold mt-1">
                    {metric.detail}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* -----------------------------------------------------------------------
              C. KEY ENGINEERING CAPABILITIES HIGHLIGHTS
          ----------------------------------------------------------------------- */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 mb-12 shadow-sm">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ea580c]" />
              <span>Department Engineering Advantages &amp; Core Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentDept.keyCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              D. DETAILED PRODUCT DIRECTORY FOR THIS DEPARTMENT
          ----------------------------------------------------------------------- */}
          <div>
            
            {/* Filter / Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#0a192f]">
                  Equipment Lines in {currentDept.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Showing {filteredProducts.length} certified industrial systems ready for quotation &amp; deployment.
                </p>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search components or specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
                >
                  {/* Top Radiant Hover Accent Line */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Content */}
                  <div>
                    {/* Product Photo with Badges */}
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4 shadow-inner">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                      {/* Top Status Badges */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                        <span>Industrial Grade</span>
                      </div>

                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[9px] font-bold uppercase tracking-wider">
                        Certified
                      </div>

                      {/* Tagline Overlay */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium line-clamp-1">
                          {product.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Series & Name */}
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      SERIES MA-{product.id.slice(0, 4).toUpperCase()}
                    </div>

                    <h5 className="text-lg font-heading font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-snug mb-2">
                      {product.name}
                    </h5>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* Specifications Table */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 mb-4 space-y-1.5">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between pb-1.5 border-b border-slate-200/70">
                        <span>TECHNICAL SPECS</span>
                        <span className="text-sky-600">MTC READY</span>
                      </div>
                      {product.specs.slice(0, 3).map((spec, i) => {
                        const parts = spec.split(":");
                        return (
                          <div key={i} className="flex items-center justify-between text-[11px] gap-2">
                            {parts.length > 1 ? (
                              <>
                                <span className="text-slate-500 font-medium truncate">{parts[0]}</span>
                                <span className="text-slate-900 font-bold truncate text-right bg-white px-2 py-0.5 rounded border border-slate-200">
                                  {parts.slice(1).join(":")}
                                </span>
                              </>
                            ) : (
                              <span className="text-slate-800 font-medium truncate">{spec}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Applications Tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.applications.slice(0, 2).map((app, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          {app}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
                    <div className="flex justify-center w-full">
                      <PeanutButton
                        onClick={() => onSelectProductForRfq(product.name)}
                        size="sm"
                        className="w-full justify-between"
                      >
                        REQUEST QUOTE!
                      </PeanutButton>
                    </div>

                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="w-full py-1.5 px-3 rounded-lg text-slate-500 hover:text-slate-800 text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>View Full Datasheet</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Empty Search Fallback */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h5 className="text-sm font-bold text-slate-800">No components match &ldquo;{searchQuery}&rdquo;</h5>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching for general terms like &ldquo;FRP&rdquo;, &ldquo;valve&rdquo;, &ldquo;biocide&rdquo;, or &ldquo;PPE&rdquo;.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 px-4 py-2 rounded-full bg-[#0a192f] text-white text-xs font-bold"
                >
                  Clear Search
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* =========================================================================
          FULL TECHNICAL DATASHEET MODAL (POPUP ON "VIEW FULL DATASHEET")
      ========================================================================= */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                Certified Engineering Datasheet
              </div>
              <div className="text-xs text-slate-400 font-medium">
                SERIES MA-{selectedProductForModal.id.slice(0, 4).toUpperCase()}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0a192f] mb-2">
              {selectedProductForModal.name}
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedProductForModal.description}
            </p>

            {/* Photo Preview in Modal */}
            <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <img 
                src={selectedProductForModal.image} 
                alt={selectedProductForModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                {selectedProductForModal.tagline}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#ea580c]" />
                <span>Complete Technical Specifications</span>
              </h4>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 divide-y divide-slate-200/80">
                {selectedProductForModal.specs.map((spec, i) => (
                  <div key={i} className="p-3 text-xs flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">{spec.split(":")[0]}</span>
                    <span className="text-slate-900 font-bold text-right">{spec.split(":")[1] || spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {selectedProductForModal.features && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Engineering Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProductForModal.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#ea580c] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Target Applications */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Standard Applications in KSA
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProductForModal.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center">
              <PeanutButton
                onClick={() => {
                  const name = selectedProductForModal.name;
                  setSelectedProductForModal(null);
                  onSelectProductForRfq(name);
                }}
                size="md"
              >
                REQUEST QUOTE!
              </PeanutButton>
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="py-3 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
