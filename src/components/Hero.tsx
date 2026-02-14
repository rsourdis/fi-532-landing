import {
  ArrowDown,
  Smartphone,
} from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-teal-100/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200/60 px-4 py-1.5 mb-6">
              <Smartphone size={14} className="text-teal-600" />
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Available on iOS
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.08] tracking-tight mb-6">
              Your household
              <br />
              budget,{" "}
              <span className="text-teal-500">simplified.</span>
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed mb-8 max-w-md">
              Track spending, manage recurring bills, plan monthly budgets, and
              collaborate on money decisions — all in one real-time workspace.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <AppStoreBadge />
            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-teal-600 transition-colors"
            >
              <span>See what&apos;s inside</span>
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
