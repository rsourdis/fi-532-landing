import { Apple } from "lucide-react";

export default function AppStoreBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl px-5 py-3 transition-colors group"
    >
      <Apple size={28} className="shrink-0" />
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-wider text-stone-400 leading-none mb-0.5">
          Download on the
        </p>
        <p className="text-base font-semibold leading-tight">App Store</p>
      </div>
    </a>
  );
}
