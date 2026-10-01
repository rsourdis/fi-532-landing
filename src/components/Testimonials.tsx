"use client";

import AnimateInView from "./AnimateInView";
import { HeadlineText, SectionLabel } from "./ui";
import { useLanguage } from "@/contexts/LanguageContext";

// Name config only — role and quote text come from translations
const AUTHORS = [
  { name: "Sarah M.", initial: "S" },
  { name: "James K.", initial: "J" },
  { name: "Maria L.", initial: "M" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateInView>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>{t.testimonials.sectionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
              <HeadlineText value={t.testimonials.headline} />
            </h2>
          </div>
        </AnimateInView>

        <div className="grid gap-5 md:grid-cols-3">
          {AUTHORS.map((author, i) => {
            const item = t.testimonials.items[i];
            return (
              <AnimateInView key={author.name} delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-[28px] border border-white/10 bg-raised p-7">
                  <blockquote className="flex-1 text-[17px] leading-relaxed text-stone-200">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-teal-500/15 font-display text-sm font-black text-teal-400">
                      {author.initial}
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-white">
                        {author.name}
                      </span>
                      <span className="block text-xs text-stone-500">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
