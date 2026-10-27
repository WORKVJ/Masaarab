"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

interface NavbarProps {
  onOpenRfq: () => void;
}

export default function Navbar({ onOpenRfq }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#overview" },
    { name: "ABOUT", href: "#about" },
    { name: "PRODUCTS", href: "#products" },
    { name: "WHY US", href: "#why-us" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 md:px-8 py-3.5 md:py-5 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo (No background container) */}
        <Link href="/" className="flex items-center group py-1">
          <img 
            src="/img/logo-dark.png" 
            alt="Masar Arabia Industrial Solutions" 
            className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Center: Floating Capsule Nav */}
        <nav className="hidden lg:flex items-center bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-full p-1.5 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.name)}
                className={`text-xs tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "font-bold bg-white/20 text-white px-5 py-2 rounded-full shadow-inner"
                    : "font-normal text-slate-300 hover:text-white px-4 py-2"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Peanut Button with Brand Orange Gradient */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-block">
            <PeanutButton onClick={onOpenRfq} size="sm">
              REQUEST QUOTE!
            </PeanutButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm tracking-wider uppercase py-2.5 px-4 rounded-xl transition-colors ${
                    isActive 
                      ? "font-bold bg-[#0284c7] text-white" 
                      : "font-normal text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full py-3 rounded-full bg-slate-950 hover:bg-[#0284c7] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1 transition-colors"
              >
                <span>REQUEST QUOTE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
