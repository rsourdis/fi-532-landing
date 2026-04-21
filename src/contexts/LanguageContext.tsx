"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";
import type { Locale, Translations } from "@/lib/i18n/types";
import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";

const translations: Record<Locale, Translations> = { en, es };
const DEFAULT_LOCALE: Locale = "en";
const LOCALE_CHANGE_EVENT = "fi532-locale-change";

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
  const locale = useSyncExternalStore(
    subscribeToLocaleChanges,
    getStoredLocale,
    () => DEFAULT_LOCALE,
  );

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    if (typeof window === "undefined") return;
    localStorage.setItem("locale", next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
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

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const saved = localStorage.getItem("locale");
  return saved === "en" || saved === "es" ? saved : DEFAULT_LOCALE;
}

function subscribeToLocaleChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => onStoreChange();
  window.addEventListener("storage", handleChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, handleChange);
  };
}
