"use client";

import { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { SectionLabel } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRICE_MONTHLY, PRICE_YEARLY } from "@/lib/site";
import { cn } from "@/lib/utils";

const ANNUAL_MONTHLY_EQUIV = (PRICE_YEARLY / 12).toFixed(2); // 3.33
const DISCOUNT_PCT = Math.round((1 - PRICE_YEARLY / (PRICE_MONTHLY * 12)) * 100); // 33

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billing === "annual";
  const { t } = useLanguage();
  const pro = t.pricing.proPlan;

  return (
    <section id="pricing" className="scroll-mt-24 border-t border-white/10 bg-raised py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <SectionLabel>{t.pricing.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
              {t.pricing.headingNormal}{" "}
              <span className="text-teal-500">{t.pricing.headingColored}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-400">
              {t.pricing.description}
            </p>
          </div>
        </AnimateInView>

        {/* Billing toggle */}
        <AnimateInView delay={80}>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-night p-1">
              <button
                onClick={() => setBilling("monthly")}
                aria-pressed={!isAnnual}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-bold transition-colors duration-200",
                  !isAnnual ? "bg-white text-ink" : "text-stone-400 hover:text-white",
                )}
              >
                {t.pricing.monthly}
              </button>
              <button
                onClick={() => setBilling("annual")}
                aria-pressed={isAnnual}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-colors duration-200",
                  isAnnual ? "bg-white text-ink" : "text-stone-400 hover:text-white",
                )}
              >
                {t.pricing.annual}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide",
                    isAnnual ? "bg-teal-500 text-ink" : "bg-teal-500/15 text-teal-400",
                  )}
                >
                  {t.pricing.saveDiscountBadge(DISCOUNT_PCT)}
                </span>
              </button>
            </div>
          </div>
        </AnimateInView>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free Plan */}
          <AnimateInView type="left" delay={100}>
            <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-night p-8">
              <div className="mb-6">
                <h3 className="mb-3 font-display text-xl font-extrabold text-white">
                  {t.pricing.freePlan.name}
                </h3>
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-black text-white">$0</span>
                  <span className="text-sm text-stone-500">{t.pricing.freePlan.period}</span>
                </div>
                <p className="text-sm text-stone-400">{t.pricing.freePlan.description}</p>
              </div>

              <FeatureList items={t.pricing.freePlan.features} />

              <a
                href="#download"
                className="block rounded-full border border-white/20 px-6 py-3.5 text-center text-sm font-extrabold text-white transition-colors duration-200 hover:bg-white/10"
              >
                {t.pricing.freePlan.cta}
              </a>
            </div>
          </AnimateInView>

          {/* Premium Plan */}
          <AnimateInView type="right" delay={100}>
            <div
              className="relative flex h-full flex-col rounded-[28px] border border-teal-500/60 bg-night p-8"
              style={{ boxShadow: "0 30px 80px -20px rgb(18 199 122 / 0.35)" }}
            >
              {/* Most Popular badge */}
              <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-4 py-1.5 text-ink">
                <Sparkles size={11} />
                <span className="text-xs font-extrabold uppercase tracking-wide">
                  {t.pricing.mostPopular}
                </span>
              </div>

              {/* Price block */}
              <div className="mb-6">
                <h3 className="mb-4 font-display text-xl font-extrabold text-white">
                  {pro.name}
                </h3>

                {isAnnual ? (
                  <div>
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="font-display text-5xl font-black leading-none text-teal-500">
                        ${PRICE_YEARLY}
                      </span>
                      <span className="text-sm text-stone-500">{pro.perYear}</span>
                    </div>
                    <p className="mb-3 text-sm font-semibold text-stone-400">
                      {pro.billedAnnually(ANNUAL_MONTHLY_EQUIV)}
                    </p>

                    {/* Savings callout */}
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/25 bg-teal-500/10 px-3 py-1.5">
                      <span className="text-xs font-bold text-teal-300">
                        {pro.saveVsMonthly((PRICE_MONTHLY * 12 - PRICE_YEARLY).toFixed(2))}
                      </span>
                      <span className="rounded bg-teal-500 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-ink">
                        {DISCOUNT_PCT}% OFF
                      </span>
                    </div>

                    {/* Crossed-out monthly price */}
                    <p className="mt-2 text-xs text-stone-500">
                      {pro.crossedOutPrefix}{" "}
                      <span className="line-through">
                        ${(PRICE_MONTHLY * 12).toFixed(2)}/yr
                      </span>{" "}
                      {pro.crossedOutSuffix}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2 flex items-baseline gap-2">
                      <span className="font-display text-5xl font-black text-teal-500">
                        ${PRICE_MONTHLY}
                      </span>
                      <span className="text-sm text-stone-500">{pro.perMonth}</span>
                    </div>
                    {/* Nudge toward annual */}
                    <button
                      onClick={() => setBilling("annual")}
                      className="text-xs font-bold text-teal-400 underline decoration-dotted underline-offset-2 transition-colors hover:text-teal-300"
                    >
                      {pro.switchToAnnual(DISCOUNT_PCT)}
                    </button>
                  </div>
                )}

                <p className="mt-3 text-sm text-stone-400">{pro.description}</p>
              </div>

              <FeatureList items={pro.features} />

              {/* Value callout */}
              <div className="mb-6 flex items-center gap-2 rounded-xl border border-teal-500/15 bg-teal-500/10 px-4 py-3">
                <Zap size={14} className="shrink-0 text-teal-500" />
                <span className="text-xs text-teal-300">
                  {isAnnual ? pro.valueAnnual(ANNUAL_MONTHLY_EQUIV) : pro.valueMonthly}
                </span>
              </div>

              <a
                href="#download"
                className="block rounded-full bg-teal-500 px-6 py-3.5 text-center text-sm font-extrabold text-ink transition-colors duration-200 hover:bg-teal-400"
              >
                {isAnnual ? pro.ctaAnnual : pro.ctaMonthly}
              </a>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mb-8 flex-1 space-y-3">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
            <Check size={10} strokeWidth={3} className="text-teal-500" />
          </span>
          <span className="text-sm text-stone-300">{f}</span>
        </li>
      ))}
    </ul>
  );
}
