"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  ScanLine,
  PiggyBank,
  ShoppingCart,
  CalendarDays,
  Search,
  Download,
} from "lucide-react";
import AnimateInView from "./AnimateInView";
import { HeadlineText, Phone, QuoteCard, SectionLabel, StatCard } from "./ui";
import logoIcon from "@/assets/logo/icon.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAsset, type AssetKey } from "@/lib/i18n/assets";
import type { FeatureCardTranslation } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const MORE_ICONS = [ScanLine, PiggyBank, ShoppingCart, CalendarDays, Search, Download];

export default function Features() {
  const { t } = useLanguage();
  const { cards, callouts } = t.features;

  return (
    <section id="features" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateInView>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{t.features.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
              <HeadlineText value={t.features.headline} />
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-400">
              {t.features.description}
            </p>
          </div>
        </AnimateInView>

        {/* ── Bento ── */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <FeatureCard
            shot="buckets"
            copy={cards.buckets}
            variant="green"
            wide
            className="md:col-span-2 lg:col-span-4"
          >
            <div className="absolute left-1/2 top-[150px] w-[250px] -translate-x-[60%] rounded-[20px] lg:-translate-x-[85%] bg-white px-5 py-4 text-ink shadow-[0_18px_50px_rgba(4,22,14,0.35)]">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0a7a4a]">
                {callouts.bucketsLabel}
              </div>
              <div className="mt-2.5 flex h-2.5 gap-1 overflow-hidden rounded-full">
                <span className="block h-full rounded-full bg-teal-500" style={{ flex: 50 }} />
                <span className="block h-full rounded-full bg-ink" style={{ flex: 30 }} />
                <span className="block h-full rounded-full bg-[#9df0c8]" style={{ flex: 20 }} />
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-extrabold">
                {callouts.bucketsSegs.map((seg) => (
                  <span key={seg}>{seg}</span>
                ))}
              </div>
            </div>
          </FeatureCard>

          <FeatureCard shot="together" copy={cards.together} className="lg:col-span-2">
            <StatCard
              value={callouts.together}
              className="absolute left-1/2 top-[120px] -translate-x-[30%] scale-90"
            />
          </FeatureCard>

          <FeatureCard shot="bills" copy={cards.bills} className="lg:col-span-2">
            <StatCard
              value={callouts.bills}
              className="absolute left-1/2 top-[130px] -translate-x-[72%] scale-90"
            />
          </FeatureCard>

          <FeatureCard shot="applepay" copy={cards.applepay} className="lg:col-span-2">
            {/* iOS-style notification */}
            <div className="absolute left-1/2 top-[110px] flex w-[280px] -translate-x-1/2 items-start gap-3 rounded-[20px] bg-white/[0.97] p-3.5 text-left text-ink shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <Image src={logoIcon} alt="" className="size-10 shrink-0 rounded-[10px]" />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between text-[11px] font-bold text-stone-500">
                  <span>FI-532</span>
                  <span>{callouts.applepayNow}</span>
                </div>
                <div className="text-sm font-extrabold leading-tight">
                  {callouts.applepayTitle}
                </div>
                <div className="truncate text-[13px] font-semibold text-stone-600">
                  {callouts.applepayBody}
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard shot="voice" copy={cards.voice} className="lg:col-span-2">
            <QuoteCard className="absolute left-1/2 top-[80px] w-[230px] -translate-x-[40%]">
              {callouts.voiceQuote}
            </QuoteCard>
          </FeatureCard>

          <FeatureCard shot="assistant" copy={cards.assistant} className="lg:col-span-2">
            <QuoteCard className="absolute left-1/2 top-[150px] -translate-x-[30%] whitespace-nowrap">
              {callouts.assistantQuote}
            </QuoteCard>
          </FeatureCard>

          <FeatureCard
            shot="insights"
            copy={cards.insights}
            wide
            className="lg:col-span-4"
          >
            <StatCard
              value={callouts.insights}
              className="absolute left-1/2 top-[170px] -translate-x-[5%]"
            />
          </FeatureCard>
        </div>

        {/* ── Everything else ── */}
        <AnimateInView>
          <h3 className="mb-8 mt-20 text-center font-display text-2xl font-black tracking-tight text-white">
            {t.features.moreLabel}
          </h3>
        </AnimateInView>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.more.map((item, i) => {
            const Icon = MORE_ICONS[i];
            return (
              <AnimateInView as="li" key={item.title} delay={(i % 3) * 70}>
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal-500/12 text-teal-400">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="font-display text-base font-extrabold text-white">
                      {item.title}
                    </div>
                    <p className="mt-0.5 text-[15px] leading-relaxed text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateInView>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({
  shot,
  copy,
  variant = "dark",
  wide = false,
  className,
  children,
}: {
  shot: AssetKey;
  copy: FeatureCardTranslation;
  variant?: "dark" | "green";
  /** On desktop, lay out copy and phone side by side */
  wide?: boolean;
  className?: string;
  /** Callout card(s), positioned over the phone */
  children?: ReactNode;
}) {
  const { locale } = useLanguage();
  const green = variant === "green";

  return (
    <AnimateInView className={className}>
      <article
        className={cn(
          "relative flex h-[500px] flex-col overflow-hidden rounded-[28px]",
          green ? "bg-teal-500 text-ink" : "border border-white/10 bg-raised text-white",
          wide && "lg:flex-row lg:items-stretch",
        )}
      >
        <div className={cn("p-7 pb-0", wide && "lg:flex lg:w-[46%] lg:flex-col lg:justify-center lg:p-10 lg:pr-0")}>
          <h3
            className={cn(
              "font-display text-[28px] font-black leading-[1.05] tracking-tight",
              wide && "lg:text-[40px]",
            )}
          >
            <HeadlineText
              value={copy.headline}
              emClassName={green ? "text-white" : "text-teal-500"}
            />
          </h3>
          <p
            className={cn(
              "mt-3 text-base leading-relaxed",
              green ? "text-ink/80" : "text-stone-400",
              wide && "lg:text-lg",
            )}
          >
            {copy.desc}
          </p>
        </div>

        {/* Phone, cropped by the card edge */}
        <div className={cn("relative mt-auto h-[310px] shrink-0", wide && "lg:mt-0 lg:h-auto lg:flex-1")}>
          <div className={cn("absolute inset-x-0 top-0", wide && "lg:top-14")}>
            <Phone
              src={getAsset(shot, locale)}
              alt={copy.alt}
              sizes="250px"
              className="mx-auto w-[250px]"
            />
            {children}
          </div>
        </div>
      </article>
    </AnimateInView>
  );
}
