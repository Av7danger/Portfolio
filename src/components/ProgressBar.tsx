"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScroll((window.scrollY / total) * 100);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Trigger initially in case of instant reload
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-neutral-200 z-50 transition-all duration-75 ease-out" 
      style={{ width: `${scroll}%` }}
    />
  );
}
