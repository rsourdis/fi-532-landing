"use client";

import { Plus, ArrowRight } from "lucide-react";
import AnimateInView from "./AnimateInView";
import { HeadlineText, SectionLabel } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateInView>
          <div className="mb-12 text-center">
            <SectionLabel>{t.faq.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
              <HeadlineText value={t.faq.headline} />
            </h2>
          </div>
        </AnimateInView>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-extrabold text-white transition-colors hover:text-teal-400 [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  size={20}
                  className="shrink-0 text-teal-500 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 pr-10 text-base leading-relaxed text-stone-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/support"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-400 transition-colors hover:text-teal-300"
          >
            {t.faq.moreHelp}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
