export default function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px] md:w-[320px]">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-300/30 via-teal-200/20 to-citrus-300/20 rounded-[3rem] blur-2xl scale-105" />

      {/* Phone frame */}
      <div className="relative bg-stone-900 rounded-[2.5rem] p-3 shadow-2xl shadow-stone-900/20">
        {/* Dynamic island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-950 rounded-full z-10" />

        {/* Screen */}
        <div className="bg-stone-150 rounded-[2rem] overflow-hidden aspect-[9/19.5]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-8 pt-14 pb-3">
            <span className="text-[10px] font-semibold text-stone-500">9:41</span>
            <div className="flex gap-1">
              <div className="w-3.5 h-2 bg-stone-400 rounded-sm" />
              <div className="w-3.5 h-2 bg-stone-400 rounded-sm" />
              <div className="w-4 h-2 bg-stone-400 rounded-sm" />
            </div>
          </div>

          {/* App content mockup */}
          <div className="px-5 pb-6">
            {/* Greeting */}
            <p className="text-[11px] text-stone-400 mb-0.5">Good morning</p>
            <h3 className="font-display font-bold text-base text-stone-900 mb-4">
              February 2026
            </h3>

            {/* Balance card */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 mb-4 text-white">
              <p className="text-[10px] uppercase tracking-wider text-teal-100/80 mb-1">
                Monthly Budget
              </p>
              <p className="font-display font-bold text-2xl tracking-tight mb-2">
                $4,250.00
              </p>
              <div className="flex gap-3">
                <div>
                  <p className="text-[9px] text-teal-100/70">Spent</p>
                  <p className="text-xs font-semibold">$2,180.50</p>
                </div>
                <div>
                  <p className="text-[9px] text-teal-100/70">Remaining</p>
                  <p className="text-xs font-semibold">$2,069.50</p>
                </div>
              </div>
            </div>

            {/* Budget breakdown */}
            <div className="space-y-2.5 mb-4">
              <BudgetRow label="Needs" amount="$1,200" pct={56} color="bg-teal-500" />
              <BudgetRow label="Wants" amount="$680" pct={34} color="bg-citrus-400" />
              <BudgetRow label="Savings" amount="$300" pct={15} color="bg-emerald-500" />
            </div>

            {/* Recent transactions */}
            <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wide mb-2">
              Recent
            </p>
            <div className="space-y-2">
              <TxRow emoji="🛒" label="Groceries" amount="-$82.40" />
              <TxRow emoji="⚡" label="Electric Bill" amount="-$124.00" />
              <TxRow emoji="💰" label="Salary" amount="+$3,200" positive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetRow({
  label,
  amount,
  pct,
  color,
}: {
  label: string;
  amount: string;
  pct: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-medium text-stone-600">{label}</span>
        <span className="text-[10px] font-semibold text-stone-700">{amount}</span>
      </div>
      <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function TxRow({
  emoji,
  label,
  amount,
  positive = false,
}: {
  emoji: string;
  label: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-sm">
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-medium text-stone-700 block truncate">
          {label}
        </span>
      </div>
      <span
        className={`text-[10px] font-semibold ${
          positive ? "text-emerald-500" : "text-stone-600"
        }`}
      >
        {amount}
      </span>
    </div>
  );
}
