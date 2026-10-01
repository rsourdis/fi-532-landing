"use client";

import { Check } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import { HeadlineText, Phone, StatCard } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAsset } from "@/lib/i18n/assets";

export default function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* ── Atmosphere: verde glow rising behind the phones + grain ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 100%, rgb(18 199 122 / 0.34) 0%, rgb(18 199 122 / 0.08) 45%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Headline */}
        <h1
          className="mx-auto max-w-4xl font-display font-black leading-[0.95] tracking-tight text-white text-balance animate-fade-in-up"
          style={{ fontSize: "clamp(2.9rem, 8vw, 5.75rem)", animationDelay: "60ms" }}
        >
          <HeadlineText value={t.hero.headline} />
        </h1>

        {/* Sub-copy */}
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mint/80 sm:text-xl animate-fade-in-up"
          style={{ animationDelay: "140ms" }}
        >
          {t.hero.subCopy}
        </p>

        {/* CTA */}
        <div
          className="mt-9 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "220ms" }}
        >
          <AppStoreBadge size="lg" />
        </div>

        {/* Trust bullets */}
        <ul
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          {t.hero.trust.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-semibold text-stone-300">
              <span className="flex size-[18px] items-center justify-center rounded-full bg-teal-500">
                <Check size={12} strokeWidth={3.5} className="text-ink" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Phones — cropped by the section edge ── */}
        <div
          className="relative mx-auto mt-12 h-[400px] max-w-4xl sm:h-[500px] animate-fade-in-up"
          style={{ animationDelay: "380ms" }}
        >
          {/* Side phones (tablet+) */}
          <Phone
            src={getAsset("buckets", locale)}
            alt={t.hero.sideLeftAlt}
            sizes="260px"
            className="absolute left-[4%] top-20 hidden w-[240px] -rotate-6 opacity-70 md:block lg:left-[8%] lg:w-[260px]"
          />
          <Phone
            src={getAsset("together", locale)}
            alt={t.hero.sideRightAlt}
            sizes="260px"
            className="absolute right-[4%] top-20 hidden w-[240px] rotate-6 opacity-70 md:block lg:right-[8%] lg:w-[260px]"
          />

          {/* Main phone */}
          <Phone
            src={getAsset("home", locale)}
            alt={t.hero.phoneAlt}
            sizes="(min-width: 640px) 320px, 270px"
            priority
            className="absolute left-1/2 top-0 w-[270px] -translate-x-1/2 sm:w-[320px]"
          />

          {/* Floating callouts */}
          <StatCard
            value={t.hero.cardLeft}
            className="absolute right-1/2 top-[170px] mr-[135px] hidden animate-float-b sm:block"
          />
          <StatCard
            value={t.hero.cardOwes}
            className="absolute left-1/2 top-[300px] ml-[105px] hidden animate-float sm:block"
          />
        </div>
      </div>
    </section>
  );
}
