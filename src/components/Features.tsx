"use client";

import {
  BarChart3,
  CreditCard,
  Users,
  PieChart,
  Sparkles,
  ScanLine,
  Mic,
  PiggyBank,
  ListChecks,
} from "lucide-react";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/icon config only — text comes from translations.
// `premium` flags features available on the Premium plan only.
const FEATURE_STYLES = [
  { icon: PieChart,    color: "#12c77a", bg: "rgb(18 199 122 / 0.08)", border: "rgb(18 199 122 / 0.2)",  iconBg: "rgb(18 199 122 / 0.15)" },
  { icon: CreditCard,  color: "#111111", bg: "rgb(17 17 17 / 0.06)",   border: "rgb(17 17 17 / 0.2)",    iconBg: "rgb(17 17 17 / 0.12)" },
  { icon: BarChart3,   color: "#0fa866", bg: "rgb(15 168 102 / 0.06)", border: "rgb(15 168 102 / 0.2)",  iconBg: "rgb(15 168 102 / 0.12)" },
  { icon: Users,       color: "#2ecf94", bg: "rgb(88 206 167 / 0.06)", border: "rgb(88 206 167 / 0.2)",  iconBg: "rgb(88 206 167 / 0.12)" },
  { icon: Sparkles,    color: "#12c77a", bg: "rgb(18 199 122 / 0.08)", border: "rgb(18 199 122 / 0.2)",  iconBg: "rgb(18 199 122 / 0.15)", premium: true },
  { icon: ScanLine,    color: "#111111", bg: "rgb(17 17 17 / 0.06)",   border: "rgb(17 17 17 / 0.2)",    iconBg: "rgb(17 17 17 / 0.12)" },
  { icon: Mic,         color: "#0fa866", bg: "rgb(15 168 102 / 0.06)", border: "rgb(15 168 102 / 0.2)",  iconBg: "rgb(15 168 102 / 0.12)" },
  { icon: PiggyBank,   color: "#2ecf94", bg: "rgb(88 206 167 / 0.06)", border: "rgb(88 206 167 / 0.2)",  iconBg: "rgb(88 206 167 / 0.12)" },
  { icon: ListChecks,  color: "#12c77a", bg: "rgb(18 199 122 / 0.08)", border: "rgb(18 199 122 / 0.2)",  iconBg: "rgb(18 199 122 / 0.15)", premium: true },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 md:py-32 bg-stone-150">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimateInView type="up" delay={0}>
          <div className="max-w-2xl mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(18 199 122 / 0.3)",
                backgroundColor: "rgb(18 199 122 / 0.07)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#0c8a53" }}
              >
                {t.features.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              {t.features.headingNormal}{" "}
              <span className="text-gradient-teal">{t.features.headingColored}</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              {t.features.description}
            </p>
          </div>
        </AnimateInView>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURE_STYLES.map((f, i) => {
            const Icon = f.icon;
            const item = t.features.items[i];
            return (
              <AnimateInView key={i} type="up" delay={i * 70}>
                <div
                  className="group relative rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                  style={{
                    backgroundColor: f.bg,
                    borderColor: f.border,
                  }}
                >
                  {/* Premium badge */}
                  {f.premium && (
                    <span
                      className="absolute top-5 right-5 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: "#111111", color: "#fafafa" }}
                    >
                      {t.pricing.proPlan.name}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: f.iconBg }}
                  >
                    <Icon size={20} style={{ color: f.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Expanding bottom accent */}
                  <div
                    className="mt-5 h-px w-10 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: f.color, opacity: 0.5 }}
                  />
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
