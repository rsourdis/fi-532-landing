"use client";

import Image from "next/image";
import badgeIosEn from "@/assets/en/badge-ios-en.svg";
import badgeIosEs from "@/assets/es/badge-ios-es.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { APP_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function AppStoreBadge({ size = "md" }: { size?: "md" | "lg" }) {
  const { locale } = useLanguage();
  const badge = locale === "es" ? badgeIosEs : badgeIosEn;
  const alt =
    locale === "es" ? "Consíguelo en el App Store" : "Download on the App Store";
  const height = size === "lg" ? "h-14" : "h-10";

  return (
    <a
      href={APP_STORE_URL}
      aria-label={alt}
      className={cn(
        "inline-flex shrink-0 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500",
        height,
      )}
    >
      <Image src={badge} alt={alt} className={cn("w-auto", height)} priority />
    </a>
  );
}
