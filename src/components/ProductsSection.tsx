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
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
  FileText,
  X,
  Check,
  Award,
  ArrowRight
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
  const getDeptIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "Snowflake": return <Snowflake className={className} />;
      case "FlaskConical": return <FlaskConical className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "Wrench": return <Wrench className={className} />;
      default: return <SlidersHorizontal className={className} />;
    }
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[750px] bg-orange-100/30 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] bg-sky-100/35 rounded-full blur-[160px] pointer-events-none -z-0" />

      {/* Blueprint grid subtle background accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0"
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Solutions by Department</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#0a192f] leading-tight">
            Certified Industrial Catalog
          </h2>

          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed font-normal">
            Select an industrial department below to explore certified engineering systems, technical parameters, and dedicated equipment lines.
          </p>
        </div>

        {/* =========================================================================
            THE 4 PRIMARY DEPARTMENTS SELECTOR DOCK:
            1. Cooling solution
            2. Chemical solution
            3. Safety solution
            4. MRO Solutions
        ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {CATEGORIES_DATA.map((dept) => {
            const isSelected = selectedDeptId === dept.id;

            return (
              <button
                key={dept.id}
                onClick={() => {
                  setSelectedDeptId(dept.id);
                  setSearchQuery("");
                }}
                className={`relative rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-left transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "bg-[#0a192f] text-white shadow-xl shadow-slate-900/20 ring-2 ring-[#ea580c] -translate-y-1" 
                    : "bg-slate-50 hover:bg-white border border-slate-200/80 text-[#0a192f] hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Department Icon */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isSelected 
                    ? "bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-md shadow-orange-500/25" 
                    : "bg-white text-slate-700 border border-slate-200"
                }`}>
                  {getDeptIcon(dept.iconName, "w-5 h-5 sm:w-6 sm:h-6")}
                </div>

                {/* Department Name & Status */}
                <div className="min-w-0 flex-1">
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                    isSelected ? "text-orange-400" : "text-slate-400"
                  }`}>
                    {dept.productCount}
                  </div>
                  <div className={`text-sm sm:text-base font-heading font-bold truncate ${
                    isSelected ? "text-white" : "text-[#0a192f]"
                  }`}>
                    {dept.name}
                  </div>
                </div>

                {/* Active Indicator Dot */}
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#ea580c] shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            ACTIVE DEPARTMENT HERO SHOWCASE (Clean Split Banner)
        ========================================================================= */}
        <div className="rounded-[32px] bg-[#0a192f] text-white overflow-hidden shadow-2xl mb-14 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div>
                
                {/* Eyebrow & Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-wider">
                    {currentDept.departmentCode}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Certified Portfolio
                  </span>
                </div>

                {/* Department Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
                  {currentDept.name}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  {currentDept.shortDesc}
                </p>

                {/* Standards Compliance Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-6">
                  {currentDept.leadStandards.map((std, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {std}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button & Dispatch Note */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <PeanutButton
                  onClick={() => onSelectProductForRfq(`${currentDept.name} Department Scope`)}
                  size="md"
                >
                  REQUEST RFQ!
                </PeanutButton>
                <div className="text-xs text-slate-400 font-medium">
                  • Regional Dispatch: <span className="text-white font-semibold">{currentDept.fulfillmentLocation}</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img 
                src={currentDept.bannerImage} 
                alt={currentDept.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a192f] via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                <span className="text-[#ea580c] font-bold mr-1.5">✓</span>
                Full Traceability &amp; Third-Party Inspection
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DETAILED PRODUCTS CATALOG GRID
        ========================================================================= */}
        <div>
          
          {/* Grid Subheader with Quick Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h4 className="text-2xl sm:text-3xl font-heading font-bold text-[#0a192f]">
                Equipment in {currentDept.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredProducts.length} certified solutions ready for immediate commercial dispatch.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search components or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Luxury 3-Column Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  
                  {/* Photo Frame */}
                  <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-950 mb-5">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                      <span>Industrial Grade</span>
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                      Certified
                    </div>

                    {/* Tagline Overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium line-clamp-1">
                        {product.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Series Code & Title */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-1.5">
                    SERIES MA-{product.id.slice(0, 4).toUpperCase()}
                  </div>

                  <h5 className="text-xl font-heading font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-tight mb-2.5">
                    {product.name}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-5 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 mb-5 space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between pb-2 border-b border-slate-200/70">
                      <span>KEY SPECIFICATIONS</span>
                      <span className="text-[#0284c7] font-semibold">MTC AVAILABLE</span>
                    </div>
                    {product.specs.slice(0, 3).map((spec, i) => {
                      const parts = spec.split(":");
                      return (
                        <div key={i} className="flex items-center justify-between text-xs gap-3">
                          {parts.length > 1 ? (
                            <>
                              <span className="text-slate-500 font-medium truncate">{parts[0]}</span>
                              <span className="text-slate-900 font-bold truncate text-right bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
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
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.applications.slice(0, 3).map((app, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
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
                    className="w-full py-2 px-3 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Technical Datasheet</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Empty Search Fallback */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h5 className="text-base font-bold text-slate-800">No components match &ldquo;{searchQuery}&rdquo;</h5>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for general terms like &ldquo;cooling&rdquo;, &ldquo;valve&rdquo;, &ldquo;FRP&rdquo;, or &ldquo;biocide&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-5 py-2 rounded-full bg-[#0a192f] text-white text-xs font-bold"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>

      </div>

      {/* =========================================================================
          FULL TECHNICAL DATASHEET MODAL
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
                Engineering Datasheet
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
