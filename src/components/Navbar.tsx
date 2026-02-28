"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.strategy, href: "#strategy" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.pricing, href: "#pricing" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor: "rgb(250 250 249 / 0.90)",
        borderColor: "rgb(0 0 0 / 0.07)",
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#14b8a6" }}
          >
            <span className="text-white font-display font-bold text-sm">FI</span>
          </div>
          <span
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: "#1c1917" }}
          >
            FI-532
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#78716c" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Language selector + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "#14b8a6", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#14b8a6")}
          >
            {t.nav.downloadApp}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 transition-colors"
          style={{ color: "#78716c" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-b backdrop-blur-xl px-6 pb-6 pt-2"
          style={{
            backgroundColor: "rgb(250 250 249 / 0.97)",
            borderColor: "rgb(0 0 0 / 0.07)",
          }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium transition-colors block"
                  style={{ color: "#a8a29e" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <LanguageSelector />
            </li>
            <li>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-full rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ backgroundColor: "#14b8a6", color: "white" }}
              >
                {t.nav.downloadApp}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
