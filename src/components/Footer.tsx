"use client";

import AppLogo from "./AppLogo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t py-14"
      style={{
        backgroundColor: "#fafafa",
        borderColor: "rgb(0 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <AppLogo textClassName="text-base" />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "#5c5c5c" }}>
            <a href="#strategy" className="transition-colors hover:text-teal-400">{t.footer.strategy}</a>
            <a href="#features" className="transition-colors hover:text-teal-400">{t.footer.features}</a>
            <a href="#pricing" className="transition-colors hover:text-teal-400">{t.footer.pricing}</a>
            <a href="mailto:info@fi-532.app" className="transition-colors hover:text-teal-400">{t.footer.contact}</a>
            <a href="/support" className="transition-colors hover:text-teal-400">{t.footer.support}</a>
            <a href="/privacy" className="transition-colors hover:text-teal-400">{t.footer.privacy}</a>
            <a href="/terms" className="transition-colors hover:text-teal-400">{t.footer.terms}</a>
            <a href="/eula" className="transition-colors hover:text-teal-400">{t.footer.eula}</a>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#3d3d3d" }}>
            {t.footer.copyright(new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}
