import {
  BarChart3,
  CalendarClock,
  CreditCard,
  Users,
  PieChart,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Monthly Budget Dashboard",
    description:
      "See your needs, wants, and savings at a glance with clear visual breakdowns. Navigate months and adjust your budget rule anytime.",
  },
  {
    icon: CreditCard,
    title: "Transaction Tracking",
    description:
      "Log income, expenses, and transfers with category support. Filter by type, date, or category to stay on top of every dollar.",
  },
  {
    icon: CalendarClock,
    title: "Recurring Bills & Subscriptions",
    description:
      "Never miss a payment. Track due dates, mark bills as paid, and auto-create transactions from your recurring templates.",
  },
  {
    icon: Users,
    title: "Household Collaboration",
    description:
      "Invite members, split expenses, and settle up balances. Everyone stays aligned with shared real-time visibility.",
  },
  {
    icon: BarChart3,
    title: "AI Financial Reports",
    description:
      "Get chat-style insights about your spending patterns. Understand where your money goes with intelligent summaries.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Set up bill reminders so you never miss a due date. Test notifications to make sure everything is working perfectly.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            Features
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Everything you need to manage
            <br className="hidden sm:block" /> household money
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            From daily expense tracking to smart AI reports, FI-532 gives you
            the tools to stay in control without the complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/70 rounded-2xl p-7 hover:shadow-lg hover:shadow-teal-500/5 hover:border-teal-200/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                <feature.icon size={20} className="text-teal-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
