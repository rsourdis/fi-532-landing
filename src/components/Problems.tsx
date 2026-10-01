"use client";

import { ArrowDown } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { HeadlineText, SectionLabel } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Problems() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateInView>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{t.problems.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
              <HeadlineText value={t.problems.headline} />
            </h2>
          </div>
        </AnimateInView>

        <div className="grid gap-5 md:grid-cols-3">
          {t.problems.items.map((item, i) => (
            <AnimateInView key={item.problem} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-raised p-7">
                {/* The problem, as the thing people actually say */}
                <p className="font-display text-2xl font-black leading-tight text-stone-400">
                  {item.problem}
                </p>

                <ArrowDown size={18} className="my-5 text-stone-600" aria-hidden="true" />

                <div className="mt-auto">
                  <div className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-500">
                    {t.problems.solutionTag}
                  </div>
                  <p className="text-base leading-relaxed text-stone-200">
                    {item.solution}
                  </p>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
