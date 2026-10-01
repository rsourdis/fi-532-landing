"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import AnimateInView from "./AnimateInView";
import { HeadlineText } from "./ui";
import appStoreQr from "@/assets/app-store-qr.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="download" className="scroll-mt-24 px-3 pb-24 sm:px-6 md:pb-32">
      <AnimateInView type="scale">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-teal-500 px-6 py-16 text-center text-ink sm:rounded-[48px] sm:px-12 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />

          <div className="relative">
            <h2
              className="mx-auto max-w-3xl font-display font-black leading-[0.95] tracking-tight text-balance"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)" }}
            >
              <HeadlineText value={t.cta.headline} emClassName="text-white" />
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
              {t.cta.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              {/* QR — for visitors on desktop */}
              <div className="hidden items-center gap-4 rounded-[24px] bg-white p-3 pr-6 text-left shadow-[0_24px_60px_-16px_rgba(4,22,14,0.45)] md:flex">
                <Image
                  src={appStoreQr}
                  alt={t.cta.qrAlt}
                  width={96}
                  height={96}
                  unoptimized
                  className="size-24 rounded-xl"
                />
                <span className="max-w-[7rem] font-display text-lg font-black leading-tight">
                  {t.cta.qrLabel}
                </span>
              </div>

              <AppStoreBadge size="lg" />
            </div>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {t.cta.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold">
                  <span className="flex size-[18px] items-center justify-center rounded-full bg-ink">
                    <Check size={12} strokeWidth={3.5} className="text-teal-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}
