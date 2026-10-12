import type { Metadata } from "next";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy Policy, Terms of Service, and End User License Agreement for the FI-532 app, in one place.",
  alternates: { canonical: "/legal" },
};

const LAST_UPDATED = "October 12, 2026";

const documents = [
  {
    href: "/privacy",
    icon: ShieldCheck,
    title: "Privacy Policy",
    description:
      "What FI-532 collects, how AI analysis and optional analytics work, who our providers are, how long data is kept, and how to export or delete your account.",
    meta: "11 sections · 6 min read",
  },
  {
    href: "/terms",
    icon: FileText,
    title: "Terms of Service",
    description:
      "Free and Premium plans, auto-renewing subscriptions and cancellation, households and shared data, AI features, Shortcuts and bank notifications, the feedback board, liability, and governing law.",
    meta: "20 sections · 9 min read",
  },
  {
    href: "/eula",
    icon: Smartphone,
    title: "End User License Agreement",
    description:
      "Your license to install and use the app, restrictions, ownership, and the Apple App Store terms that apply when you download FI-532 from the App Store.",
    meta: "10 sections · 4 min read",
  },
];

const facts = [
  { label: "Operator", value: "Roberto Sourdis · Spain" },
  { label: "Contact", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  { label: "Governing law", value: "Spain · EU consumer rights preserved" },
  { label: "Export or delete your data", value: "In the app · Settings → Account" },
  { label: "Subscriptions and refunds", value: "Apple App Store · Google Play" },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-stone-150">
      {/* Header */}
      <header className="border-b border-stone-200/60 bg-stone-150/80 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          <div className="w-px h-5 bg-stone-300" />
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-[10px]">
                FI
              </span>
            </div>
            <span className="font-display font-bold text-sm text-stone-900 tracking-tight">
              FI-532
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight mb-3">
            Legal
          </h1>
          <p className="text-[15px] leading-relaxed text-stone-600 max-w-xl mb-2">
            Everything that governs your use of FI-532, in one place. The three
            documents below apply together: the Privacy Policy explains what
            data we handle, the Terms explain the service and Premium, and the
            EULA covers the app software itself.
          </p>
          <p className="text-sm text-stone-400">
            All documents last updated {LAST_UPDATED} · Operated by Roberto
            Sourdis, Spain
          </p>
        </div>

        <div className="grid gap-3.5">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <Link
                key={doc.href}
                href={doc.href}
                className="group flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-white px-5 py-5 transition-colors hover:border-teal-500/40"
              >
                <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display font-bold text-[17px] text-stone-900 mb-1">
                    {doc.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-stone-600 mb-2">
                    {doc.description}
                  </span>
                  <span className="block text-xs text-stone-400">
                    Updated {LAST_UPDATED} · {doc.meta}
                  </span>
                </span>
                <ChevronRight
                  size={18}
                  className="self-center text-stone-300 transition-colors group-hover:text-teal-600"
                />
              </Link>
            );
          })}
        </div>

        <dl className="mt-9 rounded-2xl border border-black/[0.06] bg-white px-5 py-1.5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-start justify-between gap-4 border-b border-stone-100 py-3.5 text-sm last:border-b-0"
            >
              <dt className="text-stone-500">{fact.label}</dt>
              <dd className="m-0 text-right font-bold text-stone-900">
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    {fact.value}
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 pt-7 border-t border-stone-200/60">
          <p className="text-sm text-stone-400">
            Looking for help instead? Visit{" "}
            <Link
              href="/support"
              className="text-teal-600 hover:text-teal-700 transition-colors"
            >
              Support &amp; FAQ
            </Link>{" "}
            or write to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-teal-600 hover:text-teal-700 transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-stone-200/60 py-8">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} FI-532. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
