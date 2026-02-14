import { UserPlus, Home, Banknote, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up securely with email. Your data is protected with enterprise-grade authentication through Clerk.",
  },
  {
    icon: Home,
    number: "02",
    title: "Set Up Your Household",
    description:
      "Configure your currency, timezone, and budget rule. Choose your needs/wants/savings split to match your goals.",
  },
  {
    icon: Banknote,
    number: "03",
    title: "Track Everything",
    description:
      "Log transactions, set up recurring bills, and categorize your spending. The dashboard updates in real time.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Stay in Control",
    description:
      "Review monthly insights, get AI-powered reports, export your data, and collaborate with household members.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-stone-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-wide mb-3">
            How It Works
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-4">
            Up and running in minutes
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            No complicated setup. No spreadsheet formulas. Just a clean workspace
            that works the way you think about money.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-stone-700 to-transparent" />
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center">
                  <step.icon size={24} className="text-teal-400" />
                </div>
                <span className="font-display font-bold text-2xl text-stone-600">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
