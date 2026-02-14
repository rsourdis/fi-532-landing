import AppStoreBadge from "./AppStoreBadge";

export default function CTA() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-citrus-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
              Take control of your
              <br />
              household finances
            </h2>
            <p className="text-stone-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Download FI-532 today and start managing your money with
              clarity, collaboration, and confidence.
            </p>

            <div className="flex justify-center">
              <AppStoreBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
