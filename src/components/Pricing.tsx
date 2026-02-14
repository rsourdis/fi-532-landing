import { Check, Sparkles } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";

const freePlan = {
  name: "Free",
  price: "$0",
  description: "Perfect to get started with personal budgeting essentials.",
  features: [
    "Up to 10 transactions per month",
    "2 active recurring items",
    "Monthly budget dashboard",
    "Category-based tracking",
    "Household setup & configuration",
    "Secure authentication",
  ],
};

const proPlan = {
  name: "Premium",
  price: "$4.99",
  period: "/month",
  description:
    "Unlock the full power of shared household finance management.",
  features: [
    "Unlimited transactions",
    "Unlimited recurring items",
    "Multi-member collaboration",
    "Split expenses & settle up",
    "Bill reminders & notifications",
    "AI-powered financial reports",
    "CSV data export",
    "Priority support",
  ],
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            No hidden fees. No credit card required for the free plan. Upgrade
            anytime through the App Store.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <div className="bg-white/60 backdrop-blur-sm border border-stone-200/70 rounded-2xl p-8">
            <h3 className="font-display font-bold text-xl text-stone-900 mb-1">
              {freePlan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display font-extrabold text-4xl text-stone-900">
                {freePlan.price}
              </span>
              <span className="text-stone-400 text-sm">forever</span>
            </div>
            <p className="text-sm text-stone-500 mb-8">
              {freePlan.description}
            </p>

            <ul className="space-y-3 mb-8">
              {freePlan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-stone-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-stone-600">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block text-center rounded-full border border-stone-300 text-stone-700 px-6 py-3 text-sm font-semibold hover:bg-stone-100 transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Premium */}
          <div className="relative bg-stone-900 text-white rounded-2xl p-8 shadow-xl shadow-teal-500/10">
            {/* Badge */}
            <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-citrus-400 text-stone-900 px-3.5 py-1">
              <Sparkles size={12} />
              <span className="text-xs font-bold uppercase tracking-wide">
                Most Popular
              </span>
            </div>

            <h3 className="font-display font-bold text-xl mb-1">
              {proPlan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display font-extrabold text-4xl">
                {proPlan.price}
              </span>
              <span className="text-stone-400 text-sm">{proPlan.period}</span>
            </div>
            <p className="text-sm text-stone-400 mb-8">
              {proPlan.description}
            </p>

            <ul className="space-y-3 mb-8">
              {proPlan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="text-teal-400 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-stone-300">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block text-center rounded-full bg-teal-500 text-white px-6 py-3 text-sm font-semibold hover:bg-teal-400 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-10">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
