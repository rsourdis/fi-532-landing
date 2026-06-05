"use client";

import AnimateInView from "./AnimateInView";
import AppStoreBadge from "./AppStoreBadge";
import { Search, Users, BellRing, ArrowDown, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/icon config only — text comes from translations
const ITEM_ICONS = [Search, Users, BellRing];

export default function ValueProps() {
  const { t } = useLanguage();

  return (
    <section id="value" className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(220 38 38 / 0.35)",
                backgroundColor: "rgb(220 38 38 / 0.08)",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#dc2626" }}>
                {t.valueProps.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              {t.valueProps.headingNormal}{" "}
              <br className="hidden sm:block" />
              <span style={{ color: "#12c77a" }}>{t.valueProps.headingColored}</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              {t.valueProps.description}
            </p>
          </div>
        </AnimateInView>

        {/* Three problem → solution cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.valueProps.items.map((item, i) => {
            const Icon = ITEM_ICONS[i];
            return (
              <AnimateInView key={i} type="up" delay={i * 100}>
                <div className="relative rounded-3xl border border-stone-200 bg-white h-full flex flex-col overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Problem (pain) */}
                  <div
                    className="p-7 pb-6"
                    style={{ backgroundColor: "rgb(220 38 38 / 0.06)" }}
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgb(220 38 38 / 0.14)" }}
                      >
                        <Icon size={19} style={{ color: "#dc2626" }} />
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: "#dc2626" }}
                      >
                        {t.valueProps.problemTag}
                      </span>
                    </div>
                    <p className="font-display font-bold text-lg text-stone-800 leading-snug">
                      {item.problem}
                    </p>
                  </div>

                  {/* Pain → relief connector */}
                  <div className="relative flex justify-center" style={{ height: 0 }}>
                    <div
                      className="absolute -top-4 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                      style={{ backgroundColor: "#12c77a" }}
                    >
                      <ArrowDown size={15} color="#fff" />
                    </div>
                  </div>

                  {/* Solution (relief) */}
                  <div className="p-7 pt-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Check size={15} style={{ color: "#0fa866" }} strokeWidth={3} />
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: "#0c8a53" }}
                      >
                        {t.valueProps.solutionTag}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: "#12c77a" }}
                  />
                </div>
              </AnimateInView>
            );
          })}
        </div>

        {/* Mid-page CTA — catch warm users */}
        <AnimateInView type="up" delay={150}>
          <div className="flex flex-col items-center gap-3 mt-14">
            <AppStoreBadge />
            <p className="text-sm font-medium text-stone-500">{t.valueProps.ctaNote}</p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
