"use client";

import AnimateInView from "./AnimateInView";
import { HeadlineText, SectionLabel } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-white/10 bg-raised py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateInView>
          <div className="mb-14 text-center">
            <SectionLabel>{t.howItWorks.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
              <HeadlineText value={t.howItWorks.headline} />
            </h2>
          </div>
        </AnimateInView>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <AnimateInView as="li" key={step.title} delay={i * 100}>
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-500 font-display text-xl font-black text-ink">
                  {i + 1}
                </span>
                {/* Connector to the next step */}
                {i < t.howItWorks.steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/15 md:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-5 font-display text-xl font-black text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-400">
                {step.description}
              </p>
            </AnimateInView>
          ))}
        </ol>
      </div>
    </section>
  );
}
