"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface FooterProps {
  onOpenRfq?: () => void;
}

export default function Footer({ onOpenRfq }: FooterProps) {
  const [currentLocIndex, setCurrentLocIndex] = useState(0);

  const locations = [
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      address: "King Fahd Road, Al-Olaya Business Tower, Floor 7, Riyadh 12214, Kingdom of Saudi Arabia",
      email: "sales@masararabia.com",
      phone: "+966 012 647 3020"
    },
    {
      city: "Jeddah",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      address: "Al-Madinah Al-Munawwarah Road, Industrial Logistics Hub, Jeddah 23531, Kingdom of Saudi Arabia",
      email: "info@masararabia.com",
      phone: "+966 012 647 3020"
    },
    {
      city: "Dammam & Jubail",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      address: "King Abdulaziz Port Highway, Heavy Industrial Distribution Center, Dammam, Eastern Province, KSA",
      email: "tenders@masararabia.com",
      phone: "+966 012 647 3020"
    }
  ];

  const handlePrevLoc = () => {
    setCurrentLocIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNextLoc = () => {
    setCurrentLocIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  const currentLoc = locations[currentLocIndex];

  return (
    <footer className="bg-[#f8fafc] px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-slate-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Giant Faint Background Typography Watermark */}
        <div 
          aria-hidden="true" 
          className="absolute right-4 bottom-8 select-none pointer-events-none text-slate-100 font-black text-6xl sm:text-8xl lg:text-[140px] tracking-[0.2em] uppercase leading-none opacity-50 z-0"
        >
          MASAR
        </div>

        {/* 3 Column Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Column 1: Logo, Description, Pill Button, Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo (No background container) */}
              <Link href="/" className="inline-flex items-center mb-5 group">
                <img 
                  src="/img/logo-dark.png" 
                  alt="Masar Arabia Industrial Solutions" 
                  className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>

              {/* Tagline Description */}
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed max-w-sm mb-6">
                Masar Arabia connects Saudi industries with trusted industrial solutions, cooling technologies, and certified engineering supplies.
              </p>

              {/* Custom SVG Pill Button */}
              <div className="mb-6">
                <PeanutButton onClick={onOpenRfq}>
                  REQUEST QUOTE!
                </PeanutButton>
              </div>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] text-xs font-bold transition-colors"
              >
                X
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://masararabia.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Website"
                className="w-8 h-8 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white shadow-sm flex items-center justify-center text-slate-800 hover:text-[#0284c7] transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-1.5">
              <span>Quick</span>
              <span className="text-[#0284c7]">Links</span>
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-normal">
              <li>
                <a href="#overview" className="hover:text-[#0284c7] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0284c7] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ea580c] transition-colors">
                  Cooling solution
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ea580c] transition-colors">
                  Chemical solution
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ea580c] transition-colors">
                  Safety solution
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ea580c] transition-colors">
                  MRO Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0284c7] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0284c7] transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0284c7] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Switcher & Direct Contacts */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Location Switcher Header with Arrows */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                    <span>{currentLoc.flag}</span>
                    <span>{currentLoc.city}</span>
                  </span>
                </div>

                {/* Left/Right Arrow Carousel Buttons */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={handlePrevLoc}
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-black hover:border-slate-400 transition-colors"
                    aria-label="Previous office location"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={handleNextLoc}
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-black hover:border-slate-400 transition-colors"
                    aria-label="Next office location"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Physical Address */}
              <p className="text-xs text-gray-600 leading-relaxed mb-5 max-w-sm">
                {currentLoc.address}
              </p>

              {/* Email Line */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a 
                  href={`mailto:${currentLoc.email}`}
                  className="text-xs text-gray-700 hover:text-[#0284c7] transition-colors font-medium"
                >
                  {currentLoc.email}
                </a>
              </div>

              {/* Phone Line */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a 
                  href={`tel:${currentLoc.phone.replace(/\s+/g, '')}`}
                  className="text-xs text-gray-700 hover:text-[#0284c7] transition-colors font-medium"
                >
                  {currentLoc.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Text */}
        <div className="pt-8 text-center text-xs text-gray-400 relative z-10">
          © 2026 Masar Arabia. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
