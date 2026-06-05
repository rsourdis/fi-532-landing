"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n/types";

const LOCALES: Locale[] = ["en", "es"];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full p-0.5"
      style={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
    >
      {LOCALES.map((lang) => {
        const isActive = locale === lang;
        return (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className="rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-widest transition-all duration-200"
            style={
              isActive
                ? {
                    backgroundColor: "rgb(18 199 122 / 0.18)",
                    color: "#12c77a",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "#5c5c5c",
                  }
            }
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = "#999999";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = "#5c5c5c";
            }}
            aria-label={`Switch to ${lang === "en" ? "English" : "Spanish"}`}
            aria-pressed={isActive}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
