"use client";

import Image from "next/image";
import { Star, ArrowDown } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import HomeScreen from "@/assets/app-screens/en/transactions-en.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-stone-50">
      {/* ── Atmosphere: teal wash + grain ── */}
      <div
        className="absolute top-0 left-0 w-[820px] h-[820px] -translate-x-1/4 -translate-y-1/3 rounded-full blur-[140px] animate-pulse-glow pointer-events-none"
        style={{ backgroundColor: "rgb(18 199 122 / 0.13)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[560px] h-[560px] translate-x-1/4 translate-y-1/4 rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgb(18 199 122 / 0.09)" }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.35] pointer-events-none" />

      {/* ── Fine dot grid, fading downward ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #bfbfbf 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          opacity: 0.5,
        }}
      />

      {/* ── Hollow 50·30·20 watermark column ── */}
      <div className="absolute inset-y-0 right-0 hidden lg:flex flex-col justify-center items-end pr-[3vw] overflow-hidden select-none pointer-events-none">
        {["50", "30", "20"].map((n, i) => (
          <div
            key={n}
            className="font-display font-extrabold leading-none tracking-tighter text-outline-dark"
            style={{
              fontSize: "clamp(110px, 19vw, 270px)",
              marginTop: i > 0 ? "-0.08em" : undefined,
              opacity: 1 - i * 0.28,
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
                borderColor: "rgb(18 199 122 / 0.30)",
                backgroundColor: "rgb(18 199 122 / 0.07)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#12c77a" }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0c8a53" }}>
                {t.hero.available}
              </span>
            </div>

            {/* Frustration hook */}
            <p
              className="font-display font-bold mb-3 animate-fade-in-up flex items-center gap-2.5"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.375rem)", color: "#dc2626", animationDelay: "40ms" }}
            >
              <span
                className="inline-block w-6 h-[2px] rounded-full shrink-0"
                style={{ backgroundColor: "#dc2626" }}
                aria-hidden="true"
              />
              {t.hero.hook}
            </p>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
              style={{ fontSize: "clamp(2.7rem, 6.2vw, 5.25rem)", color: "#111111", animationDelay: "80ms" }}
            >
              {t.hero.headlinePrefix}
              <br />
              <span className="text-gradient-teal">
                {t.hero.headlineColored}
              </span>
              <br />
              <span className="relative inline-block">
                {t.hero.headlineSuffix}
                {/* Hand-drawn underline flourish */}
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7 Q 50 1 100 5 T 198 4"
                    fill="none"
                    stroke="#12c77a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p
              className="text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up"
              style={{ color: "#5c5c5c", animationDelay: "160ms" }}
            >
              {t.hero.subCopy}
            </p>

            {/* 50 / 30 / 20 stat strip */}
            <div
              className="flex items-center gap-5 sm:gap-8 mb-9 p-4 rounded-2xl border shadow-sm animate-fade-in-up"
              style={{
                borderColor: "rgb(0 0 0 / 0.07)",
                backgroundColor: "rgb(255 255 255 / 0.78)",
                backdropFilter: "blur(8px)",
                animationDelay: "240ms",
              }}
            >
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#12c77a" }}>
                  50%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#757575" }}>
                  {t.hero.statNeeds}
                </div>
              </div>
              <div className="w-px h-10 self-center" style={{ backgroundColor: "rgb(0 0 0 / 0.08)" }} />
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#111111" }}>
                  30%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#757575" }}>
                  {t.hero.statWants}
                </div>
              </div>
              <div className="w-px h-10 self-center" style={{ backgroundColor: "rgb(0 0 0 / 0.08)" }} />
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#0fa866" }}>
                  20%
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#757575" }}>
                  {t.hero.statSavings}
                </div>
              </div>
              <div className="flex-1 hidden sm:block">
                {/* Combined progress bar — fills on load */}
                <div className="flex h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgb(0 0 0 / 0.06)" }}>
                  <div className="h-full rounded-l-full animate-fill-bar" style={{ width: "50%", backgroundColor: "#12c77a" }} />
                  <div className="h-full animate-fill-bar" style={{ width: "30%", backgroundColor: "#111111", animationDelay: "0.7s" }} />
                  <div className="h-full rounded-r-full animate-fill-bar" style={{ width: "20%", backgroundColor: "#0fa866", animationDelay: "1s" }} />
                </div>
                <div className="flex justify-between mt-1.5 text-[9px]" style={{ color: "#999999" }}>
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
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={15} style={{ color: "#facc15", fill: "#facc15" }} />
                  ))}
                </div>
                <span className="font-display font-extrabold text-base" style={{ color: "#111111" }}>
                  {t.hero.ratingValue}
                </span>
              </div>
              <span className="w-px h-4 self-center" style={{ backgroundColor: "rgb(0 0 0 / 0.12)" }} />
              <span className="text-sm max-w-[16rem]" style={{ color: "#757575" }}>
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
            style={{ color: "#999999" }}
          >
            <span className="text-[10px] uppercase tracking-widest group-hover:text-teal-500 transition-colors">
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
    <div className="relative animate-float group">
      {/* Glow behind phone */}
      <div
        className="absolute -inset-8 rounded-[4rem] blur-3xl"
        style={{ backgroundColor: "rgb(18 199 122 / 0.16)" }}
      />
      {/* Decorative ring */}
      <div
        className="absolute -inset-3 rounded-[3.5rem] border opacity-40"
        style={{ borderColor: "rgb(18 199 122 / 0.4)" }}
      />

      {/* Phone chassis — slight tilt, straightens on hover */}
      <div
        className="relative rounded-[3rem] shadow-2xl border transition-transform duration-500 group-hover:rotate-0"
        style={{
          backgroundColor: "#111111",
          borderColor: "rgb(255 255 255 / 0.08)",
          padding: "10px",
          width: "clamp(240px, 28vw, 310px)",
          transform: "rotate(-4deg)",
          boxShadow: "0 40px 90px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 rounded-full"
          style={{
            top: "18px",
            width: "88px",
            height: "28px",
            backgroundColor: "#111111",
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
        className="absolute -left-12 top-1/4 rounded-xl px-3 py-2 shadow-lg border animate-float-b"
        style={{
          backgroundColor: "rgb(255 255 255 / 0.88)",
          borderColor: "rgb(18 199 122 / 0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#0c8a53" }}>{badgeNeeds}</div>
        <div className="font-display font-bold text-sm" style={{ color: "#111111" }}>50%</div>
      </div>

      {/* Floating badge — Savings */}
      <div
        className="absolute -right-10 bottom-1/3 rounded-xl px-3 py-2 shadow-lg border animate-float-b"
        style={{
          animationDelay: "2s",
          backgroundColor: "rgb(255 255 255 / 0.88)",
          borderColor: "rgb(15 168 102 / 0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#0fa866" }}>{badgeSavings}</div>
        <div className="font-display font-bold text-sm" style={{ color: "#111111" }}>20%</div>
      </div>
    </div>
  );
}
