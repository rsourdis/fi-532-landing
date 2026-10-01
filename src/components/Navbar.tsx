"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppLogo from "./AppLogo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.method, href: "#method" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3">
      {/* Floating glass pill */}
      <div className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-night/75 backdrop-blur-xl">
        <nav className="flex h-14 items-center justify-between pl-3 pr-2">
          <AppLogo
            href="#"
            textClassName="text-base text-white"
            iconClassName="size-8"
          />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-stone-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-teal-500 px-5 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-teal-400"
            >
              {t.nav.downloadApp}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-stone-300"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-5 pb-5 pt-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base font-semibold text-stone-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="py-2">
                <LanguageSelector />
              </li>
              <li>
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm font-extrabold text-ink"
                >
                  {t.nav.downloadApp}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
