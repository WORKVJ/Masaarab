"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building2, 
  MapPin, 
  Package, 
  FileCheck
} from "lucide-react";
import { CATEGORIES_DATA } from "@/data/productsData";
import PeanutButton from "@/components/PeanutButton";

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function InteractiveRfqModal({ 
  isOpen, 
  onClose, 
  initialProduct = "" 
}: RfqModalProps) {
  const [productName, setProductName] = useState(initialProduct);
  const [category, setCategory] = useState("cooling-solution");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+966 ");
  const [location, setLocation] = useState("Riyadh");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-orange-50/70 via-sky-50/40 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#c2410c] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#0a2540]">
                Request Official Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-500">
                Direct submittal to Masar Arabia Commercial Engineering Division
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Quotation Request Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{contactName || "esteemed client"}</strong>. Our application engineer assigned to the <span className="text-[#ea580c] font-bold">{location}</span> region will review your specifications and contact you with the formal commercial quote within 24 hours.
              </p>
              
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category & Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Product Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                  >
                    {CATEGORIES_DATA.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Item / Requirement
                  </label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Industrial Cooling Tower 200m³/h"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Saudi Aramco Contractor / SABIC affiliate"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eng. Abdullah Al-Otaibi"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Official Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="name@company.com.sa"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number / Mobile
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                    />
                  </div>
                </div>
              </div>

              {/* Location in Saudi Arabia */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Location / KSA Region
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {["Riyadh", "Jeddah", "Dammam", "Jubail", "Yanbu", "NEOM"].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        location === loc
                          ? "bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Specifications / Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Technical Specifications / Quantity / Inclusions
                </label>
                <textarea
                  rows={3}
                  placeholder="Include pipe sizes, flow rates, pressure class, alloy grade (e.g. SS316, Duplex), or chemical concentration..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3 border-t border-slate-100 flex justify-center">
                <PeanutButton type="submit" size="md">
                  {loading ? "SUBMITTING..." : "SUBMIT REQUEST!"}
                </PeanutButton>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
