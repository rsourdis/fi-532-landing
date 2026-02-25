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
                    backgroundColor: "rgb(20 184 166 / 0.18)",
                    color: "#14b8a6",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "#57534e",
                  }
            }
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = "#a8a29e";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = "#57534e";
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
