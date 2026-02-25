"use client";

import AnimateInView from "./AnimateInView";
import { Home, Smile, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/icon config only — text comes from translations
const PILLAR_STYLES = [
  {
    pct: "50",
    icon: Home,
    color: "#14b8a6",
    lightColor: "rgb(20 184 166 / 0.12)",
    borderColor: "rgb(20 184 166 / 0.25)",
    badgeColor: "rgb(20 184 166 / 0.15)",
    labelColor: "#5eead4",
  },
  {
    pct: "30",
    icon: Smile,
    color: "#facc15",
    lightColor: "rgb(250 204 21 / 0.10)",
    borderColor: "rgb(250 204 21 / 0.25)",
    badgeColor: "rgb(250 204 21 / 0.12)",
    labelColor: "#fde047",
  },
  {
    pct: "20",
    icon: TrendingUp,
    color: "#10b981",
    lightColor: "rgb(16 185 129 / 0.10)",
    borderColor: "rgb(16 185 129 / 0.25)",
    badgeColor: "rgb(16 185 129 / 0.12)",
    labelColor: "#34d399",
  },
];

export default function Strategy() {
  const { t } = useLanguage();

  return (
    <section id="strategy" className="py-24 md:py-32 bg-stone-150 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.08)",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0d9488" }}>
                {t.strategy.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              {t.strategy.headingPart1}{" "}
              <br className="hidden sm:block" />
              <span style={{ color: "#14b8a6" }}>{t.strategy.headingColored}</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              {t.strategy.description}
            </p>
          </div>
        </AnimateInView>

        {/* Visual progress bar */}
        <AnimateInView type="up" delay={100} className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="flex h-4 rounded-full overflow-hidden shadow-inner" style={{ backgroundColor: "rgb(0 0 0 / 0.06)" }}>
              <div
                className="h-full rounded-l-full transition-all"
                style={{ width: "50%", backgroundColor: "#14b8a6" }}
              />
              <div
                className="h-full"
                style={{ width: "30%", backgroundColor: "#facc15" }}
              />
              <div
                className="h-full rounded-r-full"
                style={{ width: "20%", backgroundColor: "#10b981" }}
              />
            </div>
            <div className="flex mt-3 text-xs font-semibold" style={{ color: "#78716c" }}>
              <span style={{ width: "50%", paddingLeft: "4px" }}>50% {t.strategy.barNeeds}</span>
              <span style={{ width: "30%", textAlign: "center" }}>30% {t.strategy.barWants}</span>
              <span style={{ width: "20%", textAlign: "right", paddingRight: "4px" }}>20% {t.strategy.barSavings}</span>
            </div>
          </div>
        </AnimateInView>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {PILLAR_STYLES.map((p, i) => {
            const Icon = p.icon;
            const text = t.strategy.pillars[i];
            return (
              <AnimateInView key={p.pct} type="up" delay={i * 100}>
                <div
                  className="relative rounded-3xl p-8 border h-full flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: p.lightColor,
                    borderColor: p.borderColor,
                  }}
                >
                  {/* Giant background percentage */}
                  <div
                    className="absolute -top-4 -right-4 font-display font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(90px, 14vw, 140px)",
                      color: `${p.color}14`,
                    }}
                  >
                    {p.pct}
                  </div>

                  {/* Icon + percentage */}
                  <div className="flex items-start justify-between mb-6 relative">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: p.badgeColor }}
                    >
                      <Icon size={22} style={{ color: p.color }} />
                    </div>
                    <div
                      className="font-display font-extrabold text-5xl leading-none tracking-tighter"
                      style={{ color: p.color }}
                    >
                      {p.pct}
                      <span className="text-2xl">%</span>
                    </div>
                  </div>

                  {/* Label + tagline */}
                  <div className="mb-4">
                    <h3 className="font-display font-extrabold text-2xl text-stone-900 mb-1">
                      {text.label}
                    </h3>
                    <p className="font-medium text-stone-600 text-sm">{text.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-500 leading-relaxed mb-6 flex-1">
                    {text.description}
                  </p>

                  {/* Example list */}
                  <div className="space-y-2">
                    {text.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: p.color }}
                        />
                        <span className="text-xs font-medium text-stone-600">{ex}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
              </AnimateInView>
            );
          })}
        </div>

        {/* Bottom callout */}
        <AnimateInView type="up" delay={300} className="mt-14">
          <div
            className="rounded-2xl p-6 md:p-8 text-center border"
            style={{
              backgroundColor: "rgb(20 184 166 / 0.06)",
              borderColor: "rgb(20 184 166 / 0.2)",
            }}
          >
            <p className="text-base md:text-lg font-medium text-stone-700 leading-relaxed max-w-2xl mx-auto">
              {t.strategy.calloutBefore}
              <strong className="text-stone-900">{t.strategy.calloutStrong}</strong>
              {t.strategy.calloutAfter}
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
