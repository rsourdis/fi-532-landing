import { UserPlus, Home, Banknote, TrendingUp } from "lucide-react";
import AnimateInView from "./AnimateInView";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up securely with email. Your data is protected with enterprise-grade authentication through Clerk.",
    color: "#14b8a6",
  },
  {
    icon: Home,
    number: "02",
    title: "Set Up Your Household",
    description:
      "Configure your currency, timezone, and budget rule. Choose your 50/30/20 split — or customize it to match your goals.",
    color: "#facc15",
  },
  {
    icon: Banknote,
    number: "03",
    title: "Track Everything",
    description:
      "Log transactions, set up recurring bills, and categorize your spending. Your dashboard updates in real time.",
    color: "#10b981",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Stay in Control",
    description:
      "Review monthly insights, get AI-powered reports, export your data, and collaborate with household members.",
    color: "#2dd4bf",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1c1917" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.08)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#2dd4bf" }}
              >
                How It Works
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight mb-4"
              style={{ color: "#fafaf9" }}
            >
              Up and running{" "}
              <span style={{ color: "#14b8a6" }}>in minutes.</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#78716c" }}>
              No spreadsheets. No complicated setup. Just a clean workspace
              that works the way you think about money.
            </p>
          </div>
        </AnimateInView>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgb(20 184 166 / 0.3) 15%, rgb(20 184 166 / 0.3) 85%, transparent)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimateInView key={step.number} type="up" delay={i * 100}>
                <div className="relative group">
                  {/* Step number — giant background */}
                  <div
                    className="absolute -top-3 -left-2 font-display font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      fontSize: "80px",
                      color: `${step.color}10`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${step.color}12`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <Icon size={26} style={{ color: step.color }} />
                    {/* Step dot */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] font-bold"
                      style={{
                        backgroundColor: "#1c1917",
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "#e7e5e4" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#57534e" }}>
                    {step.description}
                  </p>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
