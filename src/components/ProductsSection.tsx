"use client";

import React, { useState } from "react";
import { 
  CATEGORIES_DATA, 
  ProductItem, 
  Category 
} from "@/data/productsData";
import { 
  Snowflake, 
  Droplets, 
  FlaskConical, 
  Wrench, 
  Gauge, 
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
  Check
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface ProductsSectionProps {
  onSelectProductForRfq: (productName: string) => void;
}

export default function ProductsSection({ onSelectProductForRfq }: ProductsSectionProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("cooling-frp");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);

  const currentCategory = CATEGORIES_DATA.find(c => c.id === selectedCategoryId) || CATEGORIES_DATA[0];

  // Filter products based on search or active category
  const filteredProducts = searchQuery.trim() !== ""
    ? CATEGORIES_DATA.flatMap(cat => cat.items).filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : selectedCategoryId === "all"
    ? CATEGORIES_DATA.flatMap(cat => cat.items)
    : currentCategory.items;

  // Icon mapping
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Snowflake": return <Snowflake className="w-3.5 h-3.5" />;
      case "Droplets": return <Droplets className="w-3.5 h-3.5" />;
      case "FlaskConical": return <FlaskConical className="w-3.5 h-3.5" />;
      case "Wrench": return <Wrench className="w-3.5 h-3.5" />;
      case "Gauge": return <Gauge className="w-3.5 h-3.5" />;
      case "ShieldCheck": return <ShieldCheck className="w-3.5 h-3.5" />;
      default: return <SlidersHorizontal className="w-3.5 h-3.5" />;
    }
  };

  const totalCatalogCount = CATEGORIES_DATA.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="products" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-orange-100/35 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-sky-100/40 rounded-full blur-[150px] pointer-events-none -z-0" />

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
            HEADER (Kinetic Studio Reference Style)
            [ Top Eyebrow ] [ Left Orange Starburst + Editorial Headline with Inline Pills ]
        ========================================================================= */}
        <div className="text-center mb-16 md:mb-20">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Industrial Solutions Catalog</span>
          </div>

          {/* Editorial Headline with Left Starburst and Inline Glowing Pill Capsules */}
          <div className="flex items-start justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* Orange Starburst Sun Icon */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea580c] shrink-0 mt-2 sm:mt-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.59 7.41L22 6L17.41 12L22 18L14.59 16.59L12 24L9.41 16.59L2 18L6.59 12L2 6L9.41 7.41L12 0Z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-semibold sm:font-bold tracking-tight text-[#0a192f] leading-[1.2] text-left">
              Masar Arabia — is an industrial
              <br className="hidden sm:inline" />
              {" "}partner of bold{" "}
              {/* Inline Glowing Capsule 1 */}
              <span className="inline-flex items-center align-middle mx-1.5 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#c2410c] text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25">
                engineering
              </span>{" "}
              solutions that
              <br />
              <span className="text-slate-400 font-normal">
                delivers the power of heavy industry
                <br className="hidden sm:inline" />
                {" "}with{" "}
                {/* Inline Glowing Capsule 2 */}
                <span className="inline-flex items-center align-middle mx-1.5 px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-600/20">
                  precision
                </span>{" "}
                cutting-edge reliability
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 mt-6 max-w-xl mx-auto leading-relaxed font-normal">
            Engineered for the Middle East&apos;s most demanding environments with certified Saudi supply chains.
          </p>
        </div>

        {/* =========================================================================
            SIGNATURE 4 STAGGERED CARDS (Kinetic Studio Reference)
        ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-24">
          
          {/* CARD 1: Dark Sleek Matte */}
          <div 
            onClick={() => setSelectedCategoryId("cooling-frp")}
            className="rounded-[32px] bg-[#0a192f] text-white p-7 flex flex-col justify-between h-[390px] sm:h-[430px] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
          >
            <div className="px-3.5 py-1 rounded-full border border-white/20 text-white/80 text-[11px] font-semibold w-max backdrop-blur-sm">
              Cooling &amp; FRP
            </div>

            <div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block mb-3" />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white leading-tight mb-2 group-hover:text-sky-300 transition-colors">
                Bold cooling towers that resist corrosion
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Crossflow &amp; counterflow FRP cooling systems and aerofoil axial fans.
              </p>
            </div>
          </div>

          {/* CARD 2: Orange Speed Light Trails */}
          <div 
            onClick={() => setSelectedCategoryId("water-treatment")}
            className="rounded-[32px] text-white p-7 flex flex-col justify-between h-[390px] sm:h-[430px] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 lg:translate-y-8 cursor-pointer relative overflow-hidden"
          >
            <img 
              src="/img/card_orange_streak.jpg" 
              alt="Industrial Water Treatment" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 -z-10" />

            <div className="px-3.5 py-1 rounded-full border border-white/30 bg-black/30 text-white text-[11px] font-semibold w-max backdrop-blur-md">
              Water Systems
            </div>

            <div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block mb-3" />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white leading-tight mb-2 group-hover:text-orange-300 transition-colors">
                Driving sustainable water recycling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Turnkey reverse osmosis skids and automated demineralization plants.
              </p>
            </div>
          </div>

          {/* CARD 3: Chrome Red Fluid Wave */}
          <div 
            onClick={() => setSelectedCategoryId("chemicals")}
            className="rounded-[32px] text-white p-7 flex flex-col justify-between h-[410px] sm:h-[450px] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
          >
            <img 
              src="/img/card_chrome_red.jpg" 
              alt="Industrial Process Chemicals" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 -z-10" />

            <div className="px-3.5 py-1 rounded-full border border-white/30 bg-black/30 text-white text-[11px] font-semibold w-max backdrop-blur-md">
              Process Chemicals
            </div>

            <div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block mb-3" />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white leading-tight mb-2 group-hover:text-orange-300 transition-colors">
                Specialty chemicals with rapid delivery
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                High-performance polymeric antiscalants, green biocides, and coagulants.
              </p>
            </div>
          </div>

          {/* CARD 4: Light Clean Slate */}
          <div 
            onClick={() => setSelectedCategoryId("mechanical")}
            className="rounded-[32px] bg-[#f8fafc] border border-slate-200 text-[#0a192f] p-7 flex flex-col justify-between h-[390px] sm:h-[430px] shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
          >
            <div className="px-3.5 py-1 rounded-full border border-slate-300 text-slate-700 text-[11px] font-semibold w-max">
              Precision Alloys
            </div>

            <div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block mb-3" />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#0a192f] leading-tight mb-2 group-hover:text-[#ea580c] transition-colors">
                Certified valves &amp; heavy structural piping
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Super Duplex, Titanium, and API 6D pipeline fittings with 100% EN 10204 3.1 MTC.
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            DETAILED PRODUCT EXPLORER & SPECIFICATIONS DIRECTORY
            [ Modern Pill Filter Deck ] [ Instant Search ] [ Luxury Executive Product Cards ]
        ========================================================================= */}
        <div className="pt-14 border-t border-slate-200/80">
          
          {/* Section Sub-Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping" />
                <span>Verified Engineering Catalog • Revision 2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0a192f] tracking-tight">
                Explore Equipment by Engineering Discipline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-normal">
                Certified for Saudi Aramco, SABIC, SWCC, and SEC industrial projects. Complete with Mill Test Certificates (MTC) and third-party inspection.
              </p>
            </div>

            {/* High-Tech Search Bar with Orange Focus Glow */}
            <div className="relative w-full lg:w-96 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search components, ASTM specs, alloys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-[#ea580c] transition-all shadow-xs"
              />
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-slate-200/70 text-[10px] font-bold text-slate-600 hover:text-[#ea580c] transition-colors"
                >
                  Clear
                </button>
              ) : (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-slate-300">
                  Quick Search
                </span>
              )}
            </div>
          </div>

          {/* Luxury Horizontal Filter Bar (NO scrollbar artifacts on Windows/Mac) */}
          <div className="no-scrollbar overflow-x-auto pb-4 mb-10">
            <div className="flex items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-slate-100/80 border border-slate-200/80 w-max shadow-inner">
              
              {/* "All Categories" Tab */}
              <button
                onClick={() => {
                  setSelectedCategoryId("all");
                  setSearchQuery("");
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  selectedCategoryId === "all"
                    ? "bg-[#0a192f] text-white shadow-md shadow-slate-900/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                }`}
              >
                <Layers className={`w-3.5 h-3.5 ${selectedCategoryId === "all" ? "text-[#ea580c]" : "text-slate-400"}`} />
                <span>All Solutions</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  selectedCategoryId === "all" 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-200 text-slate-600"
                }`}>
                  {totalCatalogCount}+
                </span>
              </button>

              {/* Specific Categories */}
              {CATEGORIES_DATA.map((cat) => {
                const isActive = selectedCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setSearchQuery("");
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#0a192f] text-white shadow-md shadow-slate-900/25"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    }`}
                  >
                    <span className={isActive ? "text-[#ea580c]" : "text-slate-400"}>
                      {getCategoryIcon(cat.iconName)}
                    </span>
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-slate-200 text-slate-600"
                    }`}>
                      {cat.productCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Feedback */}
          {searchQuery.trim() !== "" && (
            <div className="mb-6 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-700">
                Found <strong className="text-slate-900">{filteredProducts.length}</strong> components matching &ldquo;<span className="text-[#ea580c] font-bold">{searchQuery}</span>&rdquo;
              </span>
              <button 
                onClick={() => setSearchQuery("")}
                className="font-bold text-[#ea580c] hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* =========================================================================
              LUXURY PRODUCT CARDS GRID
          ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-[32px] bg-white border border-slate-200/90 hover:border-orange-300 p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(234,88,12,0.18)] overflow-hidden"
              >
                {/* Top Radiant Hover Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Section */}
                <div>
                  
                  {/* Photo with Rounded Inner Frame & Glass Badges */}
                  <div className="relative h-60 sm:h-64 rounded-[22px] overflow-hidden bg-slate-950 mb-5 shadow-inner">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Dark gradient bottom vignette for high-contrast text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />

                    {/* Top Left Status Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                      <span>Industrial Grade</span>
                    </div>

                    {/* Top Right Certified Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Certified Supply</span>
                    </div>

                    {/* Bottom Tagline Overlay Pill */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/15 text-white text-xs font-semibold line-clamp-1 drop-shadow-sm flex items-center gap-2">
                        <span className="text-[#ea580c] text-xs">◆</span>
                        <span className="truncate">{product.tagline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-1">
                    {/* Category Series Tag */}
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-1.5">
                      <span>SERIES MA-{product.id.slice(0, 4).toUpperCase()}</span>
                      <span className="text-slate-400 font-medium text-[10px]">SASO / ASTM</span>
                    </div>

                    {/* Product Name */}
                    <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-tight mb-2">
                      {product.name}
                    </h4>
                    
                    {/* Product Description */}
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* High-Tech Engineering Datasheet Spec Matrix */}
                    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 border border-slate-200/80 p-3.5 mb-4 group-hover:border-orange-200/80 transition-colors">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5 pb-2 border-b border-slate-200/70">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <SlidersHorizontal className="w-3 h-3 text-[#ea580c]" />
                          <span>TECHNICAL PARAMETERS</span>
                        </span>
                        <span className="text-[9px] font-bold text-[#0284c7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60 uppercase">
                          Verified MTC
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {product.specs.slice(0, 3).map((spec, i) => {
                          const parts = spec.split(":");
                          const hasColon = parts.length > 1;
                          return (
                            <div key={i} className="flex items-center justify-between text-xs gap-2">
                              {hasColon ? (
                                <>
                                  <span className="text-slate-500 font-medium text-[11px] flex items-center gap-1.5 min-w-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0" />
                                    <span className="truncate">{parts[0]}</span>
                                  </span>
                                  <span className="text-slate-900 font-bold text-[11px] text-right bg-white px-2.5 py-0.5 rounded-md border border-slate-200/80 shadow-2xs shrink-0 max-w-[62%] truncate">
                                    {parts.slice(1).join(":")}
                                  </span>
                                </>
                              ) : (
                                <span className="text-slate-800 font-semibold text-xs flex items-center gap-1.5 truncate">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0" />
                                  <span className="truncate">{spec}</span>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bullet Features (High-Value Highlights) */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-4 space-y-1.5">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Applications Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-semibold bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#c2410c] hover:border-orange-200 border border-slate-200/70 px-2.5 py-1 rounded-lg transition-colors"
                        >
                          {app}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
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
                    className="w-full py-2 px-4 rounded-xl text-slate-500 hover:text-slate-800 text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Full Datasheet &amp; Drawings</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Empty Search Fallback */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200/80">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800">No components found</h4>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for keywords like &ldquo;cooling&rdquo;, &ldquo;FRP&rdquo;, &ldquo;valve&rdquo;, or &ldquo;chemical&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategoryId("cooling-frp");
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-[#0a192f] hover:bg-[#ea580c] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Reset Catalog Filter
              </button>
            </div>
          )}

        </div>

      </div>

      {/* =========================================================================
          FULL TECHNICAL DATASHEET MODAL (POPUP ON "VIEW FULL DATASHEET")
      ========================================================================= */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
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
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
