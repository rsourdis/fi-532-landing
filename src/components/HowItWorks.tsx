"use client";

import { UserPlus, Home, Banknote, TrendingUp } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/icon config only — text comes from translations
const STEP_STYLES = [
  { icon: UserPlus,   number: "01", color: "#12c77a" },
  { icon: Home,       number: "02", color: "#e5e5e5" },
  { icon: Banknote,   number: "03", color: "#0fa866" },
  { icon: TrendingUp, number: "04", color: "#2ecf94" },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.2] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(18 199 122 / 0.3)",
                backgroundColor: "rgb(18 199 122 / 0.08)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#2ecf94" }}
              >
                {t.howItWorks.sectionLabel}
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight mb-4"
              style={{ color: "#fafafa" }}
            >
              {t.howItWorks.headingNormal}{" "}
              <span style={{ color: "#12c77a" }}>{t.howItWorks.headingColored}</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#757575" }}>
              {t.howItWorks.description}
            </p>
          </div>
        </AnimateInView>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ backgroundColor: "rgb(18 199 122 / 0.25)" }}
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
                        backgroundColor: "#111111",
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "#e5e5e5" }}
                  >
                    {stepText.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5c5c5c" }}>
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
