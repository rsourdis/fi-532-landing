import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Finally an app that makes budgeting with my partner simple. We can both see where our money is going and plan together.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "The recurring bills tracker is a lifesaver. I set it up once and now I never miss a payment. Clean UI too.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "I love the needs/wants/savings breakdown. It changed how I think about my spending every month.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            What People Say
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Loved by households everywhere
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-stone-200/70 rounded-2xl p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-citrus-400 fill-citrus-400"
                  />
                ))}
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-stone-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
