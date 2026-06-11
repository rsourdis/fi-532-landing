"use client";

import AppStoreBadge from "./AppStoreBadge";
import AnimateInView from "./AnimateInView";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-24 md:py-32 overflow-hidden bg-stone-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:px-16 md:py-28 text-center border"
          style={{
            backgroundColor: "#111111",
            borderColor: "rgb(255 255 255 / 0.07)",
            boxShadow: "0 32px 80px -24px rgb(18 199 122 / 0.25)",
          }}
        >
          {/* Grain texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.25] pointer-events-none" />

          {/* Decorative orbs */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
            style={{ backgroundColor: "rgb(18 199 122 / 0.18)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
            style={{ backgroundColor: "rgb(15 168 102 / 0.14)", animationDelay: "2s" }}
          />

          {/* Content */}
          <div className="relative">
            <AnimateInView type="up" delay={0}>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
                style={{
                  borderColor: "rgb(18 199 122 / 0.35)",
                  backgroundColor: "rgb(18 199 122 / 0.10)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#12c77a" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#2ecf94" }}
                >
                  {t.cta.badge}
                </span>
              </div>
            </AnimateInView>

            <AnimateInView type="up" delay={80}>
              <h2
                className="font-display font-extrabold tracking-tight leading-tight mb-5"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  color: "#fafafa",
                }}
              >
                {t.cta.headingNormal}
                <br />
                <span style={{ color: "#12c77a" }}>{t.cta.headingColored}</span>
              </h2>
            </AnimateInView>

            <AnimateInView type="up" delay={160}>
              <p
                className="text-lg max-w-lg mx-auto mb-4 leading-relaxed"
                style={{ color: "#999999" }}
              >
                {t.cta.description}
              </p>
            </AnimateInView>

            <AnimateInView type="up" delay={220}>
              {/* Trust line */}
              <div className="flex items-center justify-center gap-6 mb-10 text-sm" style={{ color: "#757575" }}>
                {t.cta.trustItems.map((item, i) => (
                  <span key={item} className="flex items-center gap-1.5">
                    {i > 0 && <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#3d3d3d" }} />}
                    {item}
                  </span>
                ))}
              </div>
            </AnimateInView>

            <AnimateInView type="up" delay={280}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AppStoreBadge />
                <a
                  href="#strategy"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-teal-400"
                  style={{ color: "#999999" }}
                >
                  {t.cta.learnHow}
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
