"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setIsVisible(scrollY > 10);
      
      if (totalHeight > 0) {
        const progress = scrollY / totalHeight;
        const boundedProgress = Math.min(Math.max(progress, 0), 1);
        setScrollProgress(boundedProgress);
        // Set CSS custom property on document element for atmosphere scaling
        document.documentElement.style.setProperty("--scroll-progress", boundedProgress.toString());
      } else {
        setScrollProgress(0);
        document.documentElement.style.setProperty("--scroll-progress", "0");
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initially in case of instant reload
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Reset property on unmount
      document.documentElement.style.setProperty("--scroll-progress", "0");
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-[2px] bg-amber-500 z-50 origin-left transition-all duration-300 pointer-events-none" 
      style={{ 
        transform: `scaleX(${scrollProgress})`,
        opacity: isVisible ? 0.85 : 0,
        boxShadow: "0 1px 8px rgba(245, 158, 11, 0.5)",
        willChange: "transform, opacity"
      }}
    />
  );
}

