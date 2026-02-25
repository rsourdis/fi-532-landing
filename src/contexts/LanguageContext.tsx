"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale, Translations } from "@/lib/i18n/types";
import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";

const translations: Record<Locale, Translations> = { en, es };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Read persisted preference after hydration
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "es") {
      setLocaleState(saved);
    }
  }, []);

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
