"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveRfqModal from "@/components/InteractiveRfqModal";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function HomePage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenRfq = (productName = "") => {
    setSelectedProduct(productName);
    setRfqModalOpen(true);
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar onOpenRfq={() => handleOpenRfq("")} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenRfq={() => handleOpenRfq("")} />

        {/* Primary Industrial Departments & Detailed Solutions Matrix (Direct Under Landing Page) */}
        <ProductsSection onSelectProductForRfq={(name) => handleOpenRfq(name)} />

        {/* Client Partners Infinite Marquee */}
        <ClientMarquee />

        {/* Corporate Profile & Saudi Vision 2030 */}
        <AboutSection onOpenRfq={() => handleOpenRfq("")} />

        {/* Why Choose Masar Arabia (6 Value Pillars) */}
        <WhyChooseUs onOpenRfq={() => handleOpenRfq("")} />

        {/* Featured Case Studies & KSA Projects */}
        <ProjectShowcase />

        {/* Contact & Regional Centers */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenRfq={() => handleOpenRfq("")} />

      {/* Interactive RFQ Modal Drawer */}
      <InteractiveRfqModal 
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialProduct={selectedProduct}
      />
      </div>
    </SmoothScrollProvider>
  );
}
