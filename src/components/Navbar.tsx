"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X, Terminal } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-neutral-900/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Core display handle / logo */}
        <a 
          href="/" 
          className="flex items-center gap-2 text-[#fafafa] hover:text-neutral-300 font-mono text-sm tracking-tight font-semibold"
        >
          <Terminal className="w-4 h-4 text-neutral-400" />
          <span>AV // SEC</span>
        </a>

        {/* Desktop Navbar link collection */}
        <nav className="hidden md:flex items-center gap-1.5 border border-neutral-900/60 bg-black/40 backdrop-blur-md py-1.5 px-3 rounded-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive 
                    ? "bg-[#171717] text-white font-semibold" 
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Social bookmark connectors */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Av7danger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://linkedin.com/in/danishvarma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Mobile menu trigger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-1"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer panel */}
      {isOpen && (
        <div className="md:hidden fixed top-[57px] left-0 w-full h-[calc(100vh-57px)] bg-black/95 backdrop-blur-xl border-t border-neutral-900 z-50 flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-6 my-auto text-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 transition-all ${
                    isActive 
                      ? "text-white font-semibold border-b border-white max-w-max mx-auto" 
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          
          <div className="mt-auto flex items-center justify-center gap-8 pb-8 border-t border-neutral-900 pt-6">
            <a
              href="https://github.com/Av7danger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/danishvarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
