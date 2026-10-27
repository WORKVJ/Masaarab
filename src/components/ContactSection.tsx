"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import PeanutButton from "@/components/PeanutButton";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#c2410c] text-xs font-bold mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Connect with Masar Arabia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight">
            Get in Touch with Our{" "}
            <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#0284c7] bg-clip-text text-transparent">
              Technical Team
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Have a project requirement or need emergency turnaround spares? Our technical sales engineers across Saudi Arabia are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Hubs & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-3xl bg-[#fafbfc] border border-slate-200/80 space-y-5">
              <h3 className="text-lg font-bold text-[#0a2540] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#ea580c]" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                <a 
                  href="tel:+9660126473020" 
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-orange-300 transition-colors group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center shrink-0 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Toll-Free &amp; Telephone</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#ea580c]">+966 012 647 3020</div>
                    <div className="text-xs text-slate-500">Sunday - Thursday, 8:00 AM - 6:00 PM AST</div>
                  </div>
                </a>

                <a 
                  href="mailto:sales@masararabia.com" 
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-sky-300 transition-colors group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support &amp; Tenders</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#0284c7]">sales@masararabia.com</div>
                    <div className="text-xs text-slate-500">Official proposals &amp; RFQs</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#c2410c] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kingdom Presence</div>
                    <div className="text-sm font-bold text-slate-900">Jeddah • Riyadh • Dammam • Jubail</div>
                    <div className="text-xs text-slate-500">Saudi Arabia National Supply Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hub Details */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0a2540] via-[#0f2e4e] to-[#0a2540] text-white border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-black text-[#ea580c] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Emergency Supply Service
              </div>
              <h4 className="text-lg font-black text-white mb-2 tracking-tight">
                24/7 Rapid Response for Turnarounds
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                We maintain active inventory reserves in Dammam and Jeddah for emergency valve replacements, chemical dosing replenishment, and FRP fan blade balances.
              </p>
              <a
                href="tel:+9660126473020"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +966 012 647 3020</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#fafbfc] border border-slate-200/90 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0a2540]">Message Dispatched!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to Masar Arabia. A designated project coordinator will contact you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-black text-[#0a2540] mb-2 tracking-tight">
                    Send Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 font-normal">
                    Fill out the form below and our technical advisors will reply with detailed product documentation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Mohammed Al-Ghamdi"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Corporate Email
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="m.alghamdi@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+966 5X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Inquiry Subject
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Cooling Tower FRP Gratings"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Detailed Message / Requirements
                    </label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Please specify operating temperature, fluid medium, pressure parameters, or material grades needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 focus:border-[#ea580c] transition-all"
                    />
                  </div>

                  <div className="flex justify-center pt-2">
                    <PeanutButton type="submit" size="md">
                      SEND INQUIRY!
                    </PeanutButton>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
