"use client";

import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import AnimateInView from "./AnimateInView";
import AppStoreBadge from "./AppStoreBadge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAsset, type AssetKey } from "@/lib/i18n/assets";

// Pairs each showcase row (text from translations) with a screenshot + accent.
// `premium` flags features available on the Premium plan only.
const ROW_CONFIG: { key: AssetKey; color: string; premium?: boolean }[] = [
  { key: "aiReports", color: "#12c77a", premium: true },
  { key: "receiptScan", color: "#0fa866" },
  { key: "voice", color: "#12c77a" },
  { key: "savingsPlan", color: "#0fa866" },
  { key: "analytics", color: "#12c77a" },
  { key: "calendar", color: "#0fa866" },
  { key: "shoppingLists", color: "#12c77a", premium: true },
];

export default function FeatureShowcase() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimateInView type="up" delay={0}>
          <div className="max-w-2xl mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(18 199 122 / 0.3)",
                backgroundColor: "rgb(18 199 122 / 0.07)",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0c8a53" }}>
                {t.featureShowcase.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              {t.featureShowcase.headingNormal}{" "}
              <span style={{ color: "#12c77a" }}>{t.featureShowcase.headingColored}</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              {t.featureShowcase.description}
            </p>
          </div>
        </AnimateInView>

        {/* Alternating rows */}
        <div className="space-y-20 md:space-y-28">
          {ROW_CONFIG.map((cfg, i) => {
            const row = t.featureShowcase.rows[i];
            const reversed = i % 2 === 1;
            return (
              <AnimateInView key={cfg.key} type="up" delay={0}>
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Copy */}
                  <div className={reversed ? "md:order-2" : ""}>
                    <div className="flex items-center gap-2 mb-5">
                      <div
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
                        style={{ borderColor: `${cfg.color}40`, backgroundColor: `${cfg.color}12` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.color }} />
                        <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#0c8a53" }}>
                          {row.tag}
                        </span>
                      </div>
                      {cfg.premium && (
                        <span
                          className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                          style={{ backgroundColor: "#111111", color: "#fafafa" }}
                        >
                          {t.pricing.proPlan.name}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight mb-4">
                      {row.title}
                    </h3>
                    <p className="text-base sm:text-lg text-stone-500 leading-relaxed mb-6">
                      {row.desc}
                    </p>
                    <ul className="space-y-3">
                      {row.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${cfg.color}1f` }}
                          >
                            <Check size={12} style={{ color: cfg.color }} strokeWidth={3} />
                          </span>
                          <span className="text-sm font-medium text-stone-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phone */}
                  <div className={`flex justify-center ${reversed ? "md:order-1 md:justify-start" : "md:justify-end"}`}>
                    <PhoneFrame
                      image={getAsset(cfg.key, locale)}
                      alt={row.alt}
                      color={cfg.color}
                    />
                  </div>
                </div>
              </AnimateInView>
            );
          })}
        </div>

        {/* Section CTA */}
        <AnimateInView type="up" delay={100}>
          <div className="mt-24 flex flex-col items-center text-center gap-5">
            <p className="font-display font-bold text-xl text-stone-900">
              {t.featureShowcase.ctaLabel}
            </p>
            <AppStoreBadge />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}

function PhoneFrame({
  image,
  alt,
  color,
}: {
  image: StaticImageData;
  alt: string;
  color: string;
}) {
  return (
    <div className="relative">
      {/* Soft accent glow */}
      <div
        className="absolute -inset-6 rounded-[3.5rem] blur-3xl opacity-20"
        style={{ backgroundColor: color }}
      />
      {/* Chassis */}
      <div
        className="relative rounded-[2.8rem] border shadow-2xl"
        style={{
          backgroundColor: "#111111",
          borderColor: "rgb(255 255 255 / 0.09)",
          padding: "9px",
          width: "clamp(220px, 26vw, 280px)",
          boxShadow: "0 32px 80px -16px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
          style={{ top: "15px", width: "76px", height: "24px", backgroundColor: "#111111" }}
        />
        {/* Screen */}
        <div className="rounded-[2.2rem] overflow-hidden">
          <Image src={image} alt={alt} className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
}
