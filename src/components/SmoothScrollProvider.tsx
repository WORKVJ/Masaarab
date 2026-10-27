"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Momentum Scroll Engine (matching growmedlink-platform-web)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Track smooth scroll progress for the top indicator bar
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    lenis.on("scroll", updateProgress);
    window.addEventListener("scroll", updateProgress, { passive: true });

    // 3. Scroll Reveal Observer for Cards, Text, and Section Elements
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    };

    const handleIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const observeAllTargets = () => {
      const targets = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-scale:not(.is-revealed)"
      );
      targets.forEach((target) => observer.observe(target));
    };

    // Initial query and subsequent checks
    observeAllTargets();
    const timer1 = setTimeout(observeAllTargets, 300);
    const timer2 = setTimeout(observeAllTargets, 1000);

    // MutationObserver to observe newly rendered cards (e.g., when changing tabs)
    const mutationObserver = new MutationObserver(() => {
      observeAllTargets();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Top Reading / Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-amber-400 to-[#ea580c] z-[9999] pointer-events-none transition-transform duration-75 origin-left shadow-sm shadow-orange-500/50"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      {children}
    </>
  );
}
