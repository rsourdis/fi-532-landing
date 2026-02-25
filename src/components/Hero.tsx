"use client";

import Image from "next/image";
import { Star, ArrowDown } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import HomeScreen from "@/assets/app-screens/Home.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-stone-950">
      {/* ── Ambient gradient orbs ── */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] -translate-x-1/3 -translate-y-1/3 rounded-full blur-[130px] animate-pulse-glow pointer-events-none"
        style={{ backgroundColor: "rgb(20 184 166 / 0.18)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-1/3 translate-y-1/3 rounded-full blur-[110px] pointer-events-none"
        style={{ backgroundColor: "rgb(20 184 166 / 0.10)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: "rgb(250 204 21 / 0.04)" }}
      />

      {/* ── Fine dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2dd4bf 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ghost 50·30·20 watermark ── */}
      <div className="absolute inset-0 flex flex-col justify-center items-end pr-[5vw] overflow-hidden select-none pointer-events-none">
        {["50", "30", "20"].map((n, i) => (
          <div
            key={n}
            className="font-display font-extrabold leading-none tracking-tighter"
            style={{
              fontSize: "clamp(100px, 20vw, 280px)",
              color: `rgba(255,255,255,${i === 0 ? 0.028 : i === 1 ? 0.022 : 0.018})`,
              marginTop: i > 0 ? "-0.05em" : undefined,
            }}
          >
            {n}
          </div>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div>
            {/* iOS pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 animate-fade-in"
              style={{
                borderColor: "rgb(20 184 166 / 0.35)",
                backgroundColor: "rgb(20 184 166 / 0.10)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#2dd4bf" }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5eead4" }}>
                {t.hero.available}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[0.92] tracking-tight text-white mb-6 animate-fade-in-up"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", animationDelay: "80ms" }}
            >
              {t.hero.headlinePrefix}
              <br />
              <span className="text-gradient-teal">
                {t.hero.headlineColored}
              </span>
              <br />
              {t.hero.headlineSuffix}
            </h1>

            {/* Sub-copy */}
            <p
              className="text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up"
              style={{ color: "#a8a29e", animationDelay: "160ms" }}
            >
              {t.hero.subCopy}
            </p>

            {/* 50 / 30 / 20 stat strip */}
            <div
              className="flex items-center gap-5 sm:gap-8 mb-9 p-4 rounded-2xl border animate-fade-in-up"
              style={{
                borderColor: "rgb(255 255 255 / 0.07)",
                backgroundColor: "rgb(255 255 255 / 0.04)",
                animationDelay: "240ms",
              }}
            >
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#14b8a6" }}>
                  50%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#57534e" }}>
                  {t.hero.statNeeds}
                </div>
              </div>
              <div className="w-px h-10 self-center" style={{ backgroundColor: "rgb(255 255 255 / 0.08)" }} />
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#facc15" }}>
                  30%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#57534e" }}>
                  {t.hero.statWants}
                </div>
              </div>
              <div className="w-px h-10 self-center" style={{ backgroundColor: "rgb(255 255 255 / 0.08)" }} />
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#10b981" }}>
                  20%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#57534e" }}>
                  {t.hero.statSavings}
                </div>
              </div>
              <div className="flex-1 hidden sm:block">
                {/* Combined progress bar */}
                <div className="flex h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgb(255 255 255 / 0.06)" }}>
                  <div className="h-full rounded-l-full" style={{ width: "50%", backgroundColor: "#14b8a6" }} />
                  <div className="h-full" style={{ width: "30%", backgroundColor: "#facc15" }} />
                  <div className="h-full rounded-r-full" style={{ width: "20%", backgroundColor: "#10b981" }} />
                </div>
                <div className="flex justify-between mt-1.5 text-[9px]" style={{ color: "#44403c" }}>
                  <span>{t.hero.statNeeds}</span>
                  <span>{t.hero.statWants}</span>
                  <span>{t.hero.statSavings}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <AppStoreBadge />
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} style={{ color: "#facc15", fill: "#facc15" }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: "#78716c" }}>
                {t.hero.socialProof}
              </span>
            </div>
          </div>

          {/* Right column — iPhone mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <PhoneFrame phoneAlt={t.hero.phoneAlt} badgeNeeds={t.hero.badgeNeeds} badgeSavings={t.hero.badgeSavings} />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <a
            href="#strategy"
            className="inline-flex flex-col items-center gap-2 transition-colors group"
            style={{ color: "#44403c" }}
          >
            <span className="text-[10px] uppercase tracking-widest group-hover:text-teal-400 transition-colors">
              {t.hero.scrollCue}
            </span>
            <ArrowDown size={14} className="animate-bounce" style={{ color: "inherit" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({
  phoneAlt,
  badgeNeeds,
  badgeSavings,
}: {
  phoneAlt: string;
  badgeNeeds: string;
  badgeSavings: string;
}) {
  return (
    <div className="relative animate-float">
      {/* Glow behind phone */}
      <div
        className="absolute -inset-8 rounded-[4rem] blur-3xl"
        style={{ backgroundColor: "rgb(20 184 166 / 0.18)" }}
      />
      {/* Decorative ring */}
      <div
        className="absolute -inset-3 rounded-[3.5rem] border opacity-20"
        style={{ borderColor: "rgb(20 184 166 / 0.5)" }}
      />

      {/* Phone chassis */}
      <div
        className="relative rounded-[3rem] shadow-2xl border"
        style={{
          backgroundColor: "#0c0a09",
          borderColor: "rgb(255 255 255 / 0.08)",
          padding: "10px",
          width: "clamp(240px, 28vw, 310px)",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 rounded-full"
          style={{
            top: "18px",
            width: "88px",
            height: "28px",
            backgroundColor: "#0c0a09",
          }}
        />

        {/* Screen */}
        <div className="rounded-[2.5rem] overflow-hidden">
          <Image
            src={HomeScreen}
            alt={phoneAlt}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>

      {/* Floating badge — Needs */}
      <div
        className="absolute -left-12 top-1/4 rounded-xl px-3 py-2 shadow-xl animate-float-b border"
        style={{
          backgroundColor: "rgb(20 184 166 / 0.15)",
          borderColor: "rgb(20 184 166 / 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#5eead4" }}>{badgeNeeds}</div>
        <div className="font-display font-bold text-sm text-white">50%</div>
      </div>

      {/* Floating badge — Savings */}
      <div
        className="absolute -right-10 bottom-1/3 rounded-xl px-3 py-2 shadow-xl animate-float border"
        style={{
          animationDelay: "2s",
          backgroundColor: "rgb(16 185 129 / 0.15)",
          borderColor: "rgb(16 185 129 / 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#34d399" }}>{badgeSavings}</div>
        <div className="font-display font-bold text-sm text-white">20%</div>
      </div>
    </div>
  );
}
