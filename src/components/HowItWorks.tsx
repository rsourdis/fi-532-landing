"use client";

import { UserPlus, Home, Banknote, TrendingUp } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/icon config only — text comes from translations
const STEP_STYLES = [
  { icon: UserPlus,   number: "01", color: "#14b8a6" },
  { icon: Home,       number: "02", color: "#facc15" },
  { icon: Banknote,   number: "03", color: "#10b981" },
  { icon: TrendingUp, number: "04", color: "#2dd4bf" },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1c1917" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.08)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#2dd4bf" }}
              >
                {t.howItWorks.sectionLabel}
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight mb-4"
              style={{ color: "#fafaf9" }}
            >
              {t.howItWorks.headingNormal}{" "}
              <span style={{ color: "#14b8a6" }}>{t.howItWorks.headingColored}</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#78716c" }}>
              {t.howItWorks.description}
            </p>
          </div>
        </AnimateInView>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgb(20 184 166 / 0.3) 15%, rgb(20 184 166 / 0.3) 85%, transparent)",
            }}
          />

          {STEP_STYLES.map((step, i) => {
            const Icon = step.icon;
            const stepText = t.howItWorks.steps[i];
            return (
              <AnimateInView key={step.number} type="up" delay={i * 100}>
                <div className="relative group">
                  {/* Step number — giant background */}
                  <div
                    className="absolute -top-3 -left-2 font-display font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      fontSize: "80px",
                      color: `${step.color}10`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${step.color}12`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <Icon size={26} style={{ color: step.color }} />
                    {/* Step dot */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] font-bold"
                      style={{
                        backgroundColor: "#1c1917",
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "#e7e5e4" }}
                  >
                    {stepText.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#57534e" }}>
                    {stepText.description}
                  </p>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
