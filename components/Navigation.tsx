"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToPartner = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("partner");
    el?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "hero_cta_click");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Heart
                className="w-8 h-8 text-[#E63946] fill-[#E63946] group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#0B3D5C] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </div>
            <span className="font-bold text-[#0B3D5C] text-lg tracking-tight">
              ACE HeartAge
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-[#264653] hover:text-[#0B3D5C] text-sm font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#science"
              className="text-[#264653] hover:text-[#0B3D5C] text-sm font-medium transition-colors"
            >
              The Science
            </a>
            <a
              href="#partner"
              className="text-[#264653] hover:text-[#0B3D5C] text-sm font-medium transition-colors"
            >
              For Partners
            </a>
            <a
              href="#faq"
              className="text-[#264653] hover:text-[#0B3D5C] text-sm font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[#0B3D5C] hover:text-[#E63946] transition-colors px-3 py-2"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "hero_log_in_click");
                }
              }}
            >
              Log In
            </Link>
            <a
              href="#partner"
              onClick={scrollToPartner}
              className="bg-[#E63946] hover:bg-[#c52e3a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Request a Partner Briefing →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0B3D5C]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
            {["#how-it-works", "#science", "#partner", "#faq"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="block text-[#264653] font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {["How It Works", "The Science", "For Partners", "FAQ"][i]}
              </a>
            ))}
            <div className="pt-2 space-y-2 border-t border-gray-100">
              <Link href="/login" className="block text-[#0B3D5C] font-medium py-2">
                Log In
              </Link>
              <a
                href="#partner"
                onClick={(e) => { scrollToPartner(e); setIsOpen(false); }}
                className="block bg-[#E63946] text-white text-center font-semibold px-4 py-2 rounded-lg"
              >
                Request a Partner Briefing →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
