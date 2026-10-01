"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logoIcon from "@/assets/logo/icon.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { APP_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Mobile-only download bar that appears once the hero CTA has scrolled away. */
export default function StickyCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-night/85 p-2.5 pl-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <Image src={logoIcon} alt="" className="size-10 rounded-[10px]" />
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-black text-white">FI-532</div>
          <div className="truncate text-xs text-stone-400">{t.stickyCta.text}</div>
        </div>
        <a
          href={APP_STORE_URL}
          tabIndex={visible ? 0 : -1}
          className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-extrabold text-ink active:bg-teal-400"
        >
          {t.stickyCta.button}
        </a>
      </div>
    </div>
  );
}
