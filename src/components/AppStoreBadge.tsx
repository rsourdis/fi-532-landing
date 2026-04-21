"use client";

import Image from "next/image";
import badgeIosEn from "@/assets/en/badge-ios-en.svg";
import badgeIosEs from "@/assets/es/badge-ios-es.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppStoreBadge() {
  const { locale } = useLanguage();
  const badge = locale === "es" ? badgeIosEs : badgeIosEn;
  const alt =
    locale === "es" ? "Consiguelo en el App Store" : "Download on the App Store";

  return (
    <a
      href="https://apps.apple.com/co/app/fi-532/id6758963976"
      aria-label={alt}
      className="inline-flex h-10 w-[120px] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
    >
      <Image src={badge} alt={alt} className="h-10 w-auto" priority />
    </a>
  );
}
