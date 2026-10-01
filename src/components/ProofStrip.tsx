"use client";

import { ShieldCheck, Users, RefreshCw, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [ShieldCheck, Users, RefreshCw, Languages];

export default function ProofStrip() {
  const { t } = useLanguage();

  return (
    <section className="relative border-y border-white/10 bg-raised">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 lg:grid-cols-4">
        {t.proof.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <li key={item.title} className="flex items-start gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/12 text-teal-400">
                <Icon size={20} />
              </span>
              <div>
                <div className="font-display text-[15px] font-extrabold text-white">
                  {item.title}
                </div>
                <div className="text-sm leading-snug text-stone-400">
                  {item.description}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
