"use client";

import { Star, Quote } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

// Visual/name config only — role and quote text come from translations
const TESTIMONIAL_STYLES = [
  { name: "Sarah M.", rating: 5, accent: "#14b8a6", initial: "S", bg: "rgb(20 184 166 / 0.12)" },
  { name: "James K.", rating: 5, accent: "#facc15", initial: "J", bg: "rgb(250 204 21 / 0.12)" },
  { name: "Maria L.", rating: 5, accent: "#10b981", initial: "M", bg: "rgb(16 185 129 / 0.12)" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-stone-150 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.07)",
              }}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={10}
                    style={{ color: "#facc15", fill: "#facc15" }}
                  />
                ))}
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                {t.testimonials.sectionLabel}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
              {t.testimonials.headingNormal}{" "}
              <span style={{ color: "#14b8a6" }}>{t.testimonials.headingColored}</span>
            </h2>
          </div>
        </AnimateInView>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIAL_STYLES.map((ts, i) => {
            const item = t.testimonials.items[i];
            return (
            <AnimateInView key={ts.name} type="up" delay={i * 100}>
              <div
                className="relative rounded-2xl p-8 border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  borderColor: "rgb(231 229 228 / 0.7)",
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-6 right-6 opacity-15"
                  style={{ color: ts.accent }}
                >
                  <Quote size={36} fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: ts.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      style={{ color: "#facc15", fill: "#facc15" }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-stone-700 leading-relaxed text-[15px] flex-1 mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: ts.bg, color: ts.accent }}
                  >
                    {ts.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-stone-900">
                      {ts.name}
                    </div>
                    <div className="text-xs text-stone-400">{item.role}</div>
                  </div>
                </div>

                {/* Accent bar bottom */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full"
                  style={{ backgroundColor: ts.accent, opacity: 0.3 }}
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
