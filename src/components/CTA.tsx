import AppStoreBadge from "./AppStoreBadge";
import AnimateInView from "./AnimateInView";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#0c0a09" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:px-16 md:py-28 text-center">
          {/* Background mesh */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(20 184 166 / 0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgb(20 184 166 / 0.4) 50%, transparent)",
            }}
          />

          {/* Decorative orbs */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
            style={{ backgroundColor: "rgb(20 184 166 / 0.12)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
            style={{ backgroundColor: "rgb(250 204 21 / 0.06)", animationDelay: "2s" }}
          />

          {/* Content */}
          <div className="relative">
            <AnimateInView type="up" delay={0}>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
                style={{
                  borderColor: "rgb(20 184 166 / 0.35)",
                  backgroundColor: "rgb(20 184 166 / 0.10)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#2dd4bf" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#5eead4" }}
                >
                  Free to download
                </span>
              </div>
            </AnimateInView>

            <AnimateInView type="up" delay={80}>
              <h2
                className="font-display font-extrabold tracking-tight leading-tight mb-5"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  color: "#fafaf9",
                }}
              >
                Take control of your
                <br />
                <span style={{ color: "#14b8a6" }}>household finances.</span>
              </h2>
            </AnimateInView>

            <AnimateInView type="up" delay={160}>
              <p
                className="text-lg max-w-lg mx-auto mb-4 leading-relaxed"
                style={{ color: "#78716c" }}
              >
                Start with the free plan today. Set up your 50/30/20 budget,
                track every dollar, and upgrade when you&apos;re ready.
              </p>
            </AnimateInView>

            <AnimateInView type="up" delay={220}>
              {/* Trust line */}
              <div className="flex items-center justify-center gap-6 mb-10 text-sm" style={{ color: "#44403c" }}>
                {["No credit card", "Free forever plan", "iOS App Store"].map((item, i) => (
                  <span key={item} className="flex items-center gap-1.5">
                    {i > 0 && <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#44403c" }} />}
                    {item}
                  </span>
                ))}
              </div>
            </AnimateInView>

            <AnimateInView type="up" delay={280}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AppStoreBadge />
                <a
                  href="#strategy"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "#57534e" }}
                >
                  Learn how it works
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
