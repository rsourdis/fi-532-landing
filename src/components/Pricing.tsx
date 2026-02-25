"use client";

import { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

const MONTHLY_PRICE = 4.99;
const ANNUAL_PRICE = 39.99;
const ANNUAL_MONTHLY_EQUIV = (ANNUAL_PRICE / 12).toFixed(2); // 3.33
const DISCOUNT_PCT = Math.round((1 - ANNUAL_PRICE / (MONTHLY_PRICE * 12)) * 100); // 33

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billing === "annual";
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-stone-150">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.07)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                {t.pricing.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              {t.pricing.headingNormal}{" "}
              <span style={{ color: "#14b8a6" }}>
                {t.pricing.headingColored}
              </span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              {t.pricing.description}
            </p>
          </div>
        </AnimateInView>

        {/* Billing toggle */}
        <AnimateInView type="up" delay={80}>
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex items-center rounded-full p-1 gap-1"
              style={{
                backgroundColor: "rgb(0 0 0 / 0.06)",
                border: "1px solid rgb(0 0 0 / 0.08)",
              }}
            >
              {/* Monthly button */}
              <button
                onClick={() => setBilling("monthly")}
                className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
                style={
                  !isAnnual
                    ? { backgroundColor: "white", color: "#1c1917", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }
                    : { backgroundColor: "transparent", color: "#78716c" }
                }
              >
                {t.pricing.monthly}
              </button>

              {/* Annual button */}
              <button
                onClick={() => setBilling("annual")}
                className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                style={
                  isAnnual
                    ? { backgroundColor: "white", color: "#1c1917", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }
                    : { backgroundColor: "transparent", color: "#78716c" }
                }
              >
                {t.pricing.annual}
                {/* Discount badge */}
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide transition-all duration-200"
                  style={
                    isAnnual
                      ? { backgroundColor: "#10b981", color: "white" }
                      : { backgroundColor: "rgb(16 185 129 / 0.15)", color: "#10b981" }
                  }
                >
                  {t.pricing.saveDiscountBadge(DISCOUNT_PCT)}
                </span>
              </button>
            </div>
          </div>
        </AnimateInView>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Free Plan */}
          <AnimateInView type="left" delay={100}>
            <div
              className="rounded-2xl p-8 border h-full flex flex-col"
              style={{
                backgroundColor: "white",
                borderColor: "rgb(231 229 228 / 0.7)",
              }}
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                  {t.pricing.freePlan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-extrabold text-5xl text-stone-900">
                    $0
                  </span>
                  <span className="text-stone-400 text-sm">{t.pricing.freePlan.period}</span>
                </div>
                <p className="text-sm text-stone-500">{t.pricing.freePlan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {t.pricing.freePlan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgb(20 184 166 / 0.1)" }}
                    >
                      <Check size={10} style={{ color: "#14b8a6" }} />
                    </div>
                    <span className="text-sm text-stone-600">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className="block text-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-stone-50"
                style={{
                  borderColor: "rgb(214 211 208 / 0.8)",
                  color: "#44403c",
                }}
              >
                {t.pricing.freePlan.cta}
              </a>
            </div>
          </AnimateInView>

          {/* Premium Plan */}
          <AnimateInView type="right" delay={100}>
            <div
              className="relative rounded-2xl p-8 h-full flex flex-col shadow-2xl"
              style={{
                backgroundColor: "#0c0a09",
                boxShadow: "0 20px 60px -12px rgb(20 184 166 / 0.2)",
              }}
            >
              {/* Most Popular badge */}
              <div
                className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 shadow-lg"
                style={{ backgroundColor: "#facc15" }}
              >
                <Sparkles size={11} style={{ color: "#1c1917" }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#1c1917" }}>
                  {t.pricing.mostPopular}
                </span>
              </div>

              {/* Teal corner glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-2xl blur-3xl pointer-events-none"
                style={{ backgroundColor: "rgb(20 184 166 / 0.08)" }}
              />

              {/* Price block */}
              <div className="mb-6 relative">
                <h3 className="font-display font-bold text-xl mb-4" style={{ color: "#fafaf9" }}>
                  {t.pricing.proPlan.name}
                </h3>

                {isAnnual ? (
                  /* Annual pricing display */
                  <div>
                    <div className="flex items-end gap-3 mb-1">
                      <span
                        className="font-display font-extrabold text-5xl leading-none"
                        style={{ color: "#14b8a6" }}
                      >
                        ${ANNUAL_PRICE}
                      </span>
                      <div className="pb-1">
                        <span className="text-sm block" style={{ color: "#57534e" }}>
                          {t.pricing.proPlan.perYear}
                        </span>
                      </div>
                    </div>

                    {/* Monthly equivalent + savings */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium" style={{ color: "#a8a29e" }}>
                        {t.pricing.proPlan.billedAnnually(ANNUAL_MONTHLY_EQUIV)}
                      </span>
                    </div>

                    {/* Savings callout */}
                    <div
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5"
                      style={{
                        backgroundColor: "rgb(16 185 129 / 0.12)",
                        border: "1px solid rgb(16 185 129 / 0.25)",
                      }}
                    >
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#34d399" }}
                      >
                        {t.pricing.proPlan.saveVsMonthly(((MONTHLY_PRICE * 12) - ANNUAL_PRICE).toFixed(2))}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5"
                        style={{ backgroundColor: "#10b981", color: "white" }}
                      >
                        {DISCOUNT_PCT}% OFF
                      </span>
                    </div>

                    {/* Crossed-out monthly price */}
                    <p className="text-xs mt-2" style={{ color: "#44403c" }}>
                      {t.pricing.proPlan.crossedOutPrefix}{" "}
                      <span className="line-through">
                        ${(MONTHLY_PRICE * 12).toFixed(2)}/yr
                      </span>{" "}
                      {t.pricing.proPlan.crossedOutSuffix}
                    </p>
                  </div>
                ) : (
                  /* Monthly pricing display */
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className="font-display font-extrabold text-5xl"
                        style={{ color: "#14b8a6" }}
                      >
                        ${MONTHLY_PRICE}
                      </span>
                      <span className="text-sm" style={{ color: "#57534e" }}>
                        {t.pricing.proPlan.perMonth}
                      </span>
                    </div>
                    {/* Nudge toward annual */}
                    <button
                      onClick={() => setBilling("annual")}
                      className="text-xs font-medium underline decoration-dotted underline-offset-2 transition-colors"
                      style={{ color: "#10b981" }}
                    >
                      {t.pricing.proPlan.switchToAnnual(DISCOUNT_PCT)}
                    </button>
                  </div>
                )}

                <p className="text-sm mt-3" style={{ color: "#78716c" }}>
                  {t.pricing.proPlan.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 flex-1 relative">
                {t.pricing.proPlan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgb(20 184 166 / 0.15)" }}
                    >
                      <Check size={10} style={{ color: "#14b8a6" }} />
                    </div>
                    <span className="text-sm" style={{ color: "#a8a29e" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Value callout */}
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-3 mb-6"
                style={{
                  backgroundColor: "rgb(20 184 166 / 0.08)",
                  border: "1px solid rgb(20 184 166 / 0.15)",
                }}
              >
                <Zap size={14} style={{ color: "#14b8a6" }} />
                <span className="text-xs" style={{ color: "#5eead4" }}>
                  {isAnnual
                    ? t.pricing.proPlan.valueAnnual(ANNUAL_MONTHLY_EQUIV)
                    : t.pricing.proPlan.valueMonthly}
                </span>
              </div>

              <a
                href="#download"
                className="relative block text-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: "#14b8a6", color: "white" }}
              >
                {isAnnual ? t.pricing.proPlan.ctaAnnual : t.pricing.proPlan.ctaMonthly}
              </a>
            </div>
          </AnimateInView>
        </div>

        {/* Bottom download CTA */}
        <AnimateInView type="up" delay={300} className="flex justify-center mt-12">
          <AppStoreBadge />
        </AnimateInView>

      </div>
    </section>
  );
}
