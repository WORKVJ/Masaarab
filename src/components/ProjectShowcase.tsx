"use client";

import React, { useState } from "react";
import { MapPin, Calendar, CheckCircle2, ChevronRight, Building, Sparkles } from "lucide-react";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Petrochemical Complex Cooling Tower Overhaul",
      location: "Jubail Industrial City, KSA",
      sector: "Petrochemical & Refining",
      year: "2024",
      description: "Supplied and commissioned 4 cells of heavy-duty crossflow FRP cooling towers and high-efficiency aerofoil axial fans, achieving a 22% reduction in plant auxiliary power.",
      metrics: ["4,800 m³/h thermal capacity", "CTI STD-201 certified", "Zero downtime during switchover"],
      image: "/img/cooling_tower_project.jpg"
    },
    {
      title: "High-Recovery Brackish RO Water Plant",
      location: "Yanbu Industrial Port, KSA",
      sector: "Desalination & Process Water",
      year: "2024",
      description: "Delivered turnkey skid-mounted Reverse Osmosis systems with high-pressure duplex stainless membranes and automated CIP cleaning circuits for boiler feedwater.",
      metrics: ["2,500 m³/day pure distillate", "< 15 ppm product TDS", "SCADA telemetry integrated"],
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Super Duplex Alloy Valves & Piping Supply",
      location: "Ras Tanura Terminal, Eastern Province",
      sector: "Oil & Gas Offshore Facilities",
      year: "2023",
      description: "Fulfillment of over 1,200 metric tons of seamless titanium-stabilized and Super Duplex UNS S32750 forged fittings and API 6D ball valves with 100% PMI validation.",
      metrics: ["Class 1500 high-pressure rated", "100% EN 10204 3.1 MTCs", "Sub-surface seawater corrosion resistance"],
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "District Cooling Chemical Treatment Network",
      location: "Riyadh Metropolitian District",
      sector: "District Infrastructure & Utilities",
      year: "2023",
      description: "Continuous supply of green biocides and broad-spectrum polymeric scale inhibitors alongside proportional smart dosing skids across 6 central chiller stations.",
      metrics: ["Zero Legionella detections in 24 months", "30% water blowdown reduction", "Real-time ORP monitoring"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#fafbfc] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#c2410c] text-xs font-bold mb-3 shadow-xs">
              <Building className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Proven Saudi Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight">
              Featured Industrial{" "}
              <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0284c7] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-3 leading-relaxed font-normal">
              Supplying critical engineering infrastructure to refineries, power complexes, and desalination hubs across Saudi Arabia.
            </p>
          </div>

          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={`h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeProject === idx 
                    ? "w-8 bg-gradient-to-r from-[#ea580c] to-[#c2410c]" 
                    : "w-3.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Project slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Project Split Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 reveal-scale card-interactive">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[340px] overflow-hidden group">
            <img 
              src={projects[activeProject].image} 
              alt={projects[activeProject].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-300 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>{projects[activeProject].location}</span>
                <span className="text-slate-400">•</span>
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{projects[activeProject].year}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-sm tracking-tight">
                {projects[activeProject].title}
              </h3>
            </div>
          </div>

          {/* Details & Metrics */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#c2410c] text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200/80">
                {projects[activeProject].sector}
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                {projects[activeProject].description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Delivered Outcomes &amp; Specs
                </div>
                {projects[activeProject].metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector list for quick navigation */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Case Study
              </span>
              <div className="grid grid-cols-2 gap-2">
                {projects.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setActiveProject(idx)}
                    className={`text-left p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeProject === idx 
                        ? "bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div className="truncate">{p.sector}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
