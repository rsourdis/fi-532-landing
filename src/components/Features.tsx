import {
  BarChart3,
  CalendarClock,
  CreditCard,
  Users,
  PieChart,
  Bell,
} from "lucide-react";
import AnimateInView from "./AnimateInView";

const features = [
  {
    icon: PieChart,
    title: "Budget Dashboard",
    description:
      "Your 50/30/20 breakdown visualized. Navigate months, compare periods, and adjust your budget rule at any time.",
    color: "#14b8a6",
    bg: "rgb(20 184 166 / 0.08)",
    border: "rgb(20 184 166 / 0.2)",
    iconBg: "rgb(20 184 166 / 0.15)",
  },
  {
    icon: CreditCard,
    title: "Transaction Tracking",
    description:
      "Log every dollar — income, expenses, transfers. Filter by category, date, or type instantly.",
    color: "#facc15",
    bg: "rgb(250 204 21 / 0.06)",
    border: "rgb(250 204 21 / 0.2)",
    iconBg: "rgb(250 204 21 / 0.12)",
  },
  {
    icon: CalendarClock,
    title: "Recurring Bills",
    description:
      "Never miss a payment. Track due dates, mark bills paid, and auto-generate transactions from templates.",
    color: "#10b981",
    bg: "rgb(16 185 129 / 0.06)",
    border: "rgb(16 185 129 / 0.2)",
    iconBg: "rgb(16 185 129 / 0.12)",
  },
  {
    icon: Users,
    title: "Household Collaboration",
    description:
      "Invite family members, split expenses, and settle up balances. Real-time shared visibility for the whole household.",
    color: "#2dd4bf",
    bg: "rgb(45 212 191 / 0.06)",
    border: "rgb(45 212 191 / 0.2)",
    iconBg: "rgb(45 212 191 / 0.12)",
  },
  {
    icon: BarChart3,
    title: "AI Financial Reports",
    description:
      "Chat-style insights about your spending patterns. Understand your money in plain language, powered by AI.",
    color: "#14b8a6",
    bg: "rgb(20 184 166 / 0.08)",
    border: "rgb(20 184 166 / 0.2)",
    iconBg: "rgb(20 184 166 / 0.15)",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Automated bill reminders so nothing slips through the cracks. Test notifications to confirm everything works.",
    color: "#facc15",
    bg: "rgb(250 204 21 / 0.06)",
    border: "rgb(250 204 21 / 0.2)",
    iconBg: "rgb(250 204 21 / 0.12)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-stone-150">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimateInView type="up" delay={0}>
          <div className="max-w-2xl mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.07)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                Features
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              Everything you need.{" "}
              <span style={{ color: "#14b8a6" }}>Nothing you don&apos;t.</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              A full suite of budgeting tools designed around how real households
              think about money — simple, collaborative, and always in sync.
            </p>
          </div>
        </AnimateInView>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimateInView key={f.title} type="up" delay={i * 70}>
                <div
                  className="group relative rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                  style={{
                    backgroundColor: f.bg,
                    borderColor: f.border,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: f.iconBg }}
                  >
                    <Icon size={20} style={{ color: f.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">
                    {f.description}
                  </p>

                  {/* Expanding bottom accent */}
                  <div
                    className="mt-5 h-px w-10 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: f.color, opacity: 0.5 }}
                  />
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
