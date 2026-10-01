"use client";

import { useState } from "react";
import AnimateInView from "./AnimateInView";
import { useLanguage } from "@/contexts/LanguageContext";

// Needs / wants / savings — same bar colors as the App Store "This cycle" card
const BUCKETS = [
  { pct: 50, color: "#12c77a" },
  { pct: 30, color: "#04160e" },
  { pct: 20, color: "#9df0c8" },
] as const;

export default function Method() {
  const { t } = useLanguage();
  const m = t.method;

  // Income is stored per currency so switching language shows that locale's default
  const [incomes, setIncomes] = useState<Record<string, number>>({});
  const income = incomes[m.currency] ?? m.defaultIncome;

  const money = new Intl.NumberFormat(m.numberLocale, {
    style: "currency",
    currency: m.currency,
    maximumFractionDigits: 0,
  });

  return (
    <section id="method" className="scroll-mt-24 px-3 sm:px-6">
      {/* Verde panel — mirrors the green slides of the store screenshots */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-teal-500 text-ink sm:rounded-[48px]">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />

        <div className="relative grid items-center gap-12 px-6 py-16 sm:px-12 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-20">
          {/* Left — the name is the rule */}
          <AnimateInView type="left" className="min-w-0">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-ink/70">
              {m.sectionLabel}
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5.25rem)" }}
            >
              <span className="text-white">5‑3‑2</span> =
              <br />
              {m.equation}
            </h2>
            <p className="mt-5 font-display text-2xl font-extrabold leading-snug">
              {m.tagline}
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/80">
              {m.description}
            </p>
          </AnimateInView>

          {/* Right — live split calculator */}
          <AnimateInView type="right" delay={100} className="min-w-0">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_40px_90px_-20px_rgba(4,22,14,0.45)] sm:p-8">
              <label
                htmlFor="method-income"
                className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0a7a4a]"
              >
                {m.incomeLabel}
              </label>
              <div className="mt-1 flex items-baseline gap-2">
                <output
                  htmlFor="method-income"
                  className="font-display text-5xl font-black tracking-tight tabular-nums"
                >
                  {money.format(income)}
                </output>
                <span className="text-sm font-bold text-stone-500">{m.perMonth}</span>
              </div>
              <input
                id="method-income"
                type="range"
                min={500}
                max={m.maxIncome}
                step={100}
                value={income}
                onChange={(e) =>
                  setIncomes((prev) => ({ ...prev, [m.currency]: Number(e.target.value) }))
                }
                className="mt-5 w-full cursor-pointer accent-teal-500"
              />

              {/* 50 / 30 / 20 bar */}
              <div className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0a7a4a]">
                {m.cardLabel}
              </div>
              <div className="mt-2.5 flex h-3.5 gap-1 overflow-hidden rounded-full">
                {BUCKETS.map((b) => (
                  <span
                    key={b.pct}
                    className="block h-full rounded-full"
                    style={{ flex: b.pct, backgroundColor: b.color }}
                  />
                ))}
              </div>

              <ul className="mt-5 divide-y divide-stone-200">
                {BUCKETS.map((b, i) => {
                  const pillar = m.pillars[i];
                  return (
                    <li key={pillar.label} className="flex items-center gap-4 py-3.5">
                      <span
                        className="size-3 shrink-0 rounded-full"
                        style={{ backgroundColor: b.color }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-display text-base font-extrabold">
                          {pillar.label}{" "}
                          <span className="font-bold text-stone-400">{b.pct}%</span>
                        </div>
                        <div className="truncate text-[13px] text-stone-500">
                          {pillar.examples}
                        </div>
                      </div>
                      <div className="font-display text-xl font-black tabular-nums">
                        {money.format(Math.round((income * b.pct) / 100))}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-4 text-[13px] font-semibold text-stone-500">{m.customNote}</p>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
