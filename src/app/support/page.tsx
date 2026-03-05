import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — FI-532",
  description:
    "Get help with FI-532. Contact us at info@fi-532.app or browse our frequently asked questions.",
};

const faqs = [
  {
    question: "What is the 50/30/20 budget rule?",
    answer:
      "The 50/30/20 rule divides your after-tax income into three categories: 50% for needs (rent, groceries, utilities), 30% for wants (dining out, subscriptions, hobbies), and 20% for savings (emergency fund, investments, debt payoff). FI-532 automates this breakdown so you always know where you stand.",
  },
  {
    question: "Is FI-532 available on Android?",
    answer:
      "FI-532 is currently available exclusively on iOS through the Apple App Store. An Android version is on our roadmap — follow us or check back here for updates.",
  },
  {
    question: "How do I add household members to my budget?",
    answer:
      "After setting up your household, go to the Household settings in the app and use the invite option to add family members by email. Once they accept the invite, you'll share a real-time view of your budget, transactions, and balances.",
  },
  {
    question: "Can I customize the budget percentages?",
    answer:
      "Yes. While FI-532 defaults to the standard 50/30/20 split, you can adjust the percentages to match your personal goals — for example, 60/20/20 or 40/30/30. Go to Household settings and choose your custom split.",
  },
  {
    question: "How do I cancel my Premium subscription?",
    answer:
      "Subscriptions are managed by the Apple App Store. To cancel, open the Settings app on your iPhone, tap your Apple ID, go to Subscriptions, find FI-532, and tap Cancel Subscription. You'll retain Premium access until the end of your current billing period.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes. FI-532 uses enterprise-grade authentication (Clerk) and never stores full payment card numbers. Your data is encrypted in transit and at rest. We rely on trusted third-party infrastructure for authentication, storage, and sync.",
  },
  {
    question: "What currencies does FI-532 support?",
    answer:
      "FI-532 supports a wide range of currencies. You can set your preferred currency during household setup or change it at any time in your Household settings.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "On the login screen, tap \u201cForgot password?\u201d and enter your email address. You\u2019ll receive a reset link shortly. If you signed up with Apple Sign-In or Google, password reset is managed through those providers.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafaf9" }}>
      {/* Header */}
      <header
        className="border-b backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(250,250,249,0.8)",
          borderColor: "rgba(0,0,0,0.07)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#78716c" }}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          <div className="w-px h-5" style={{ backgroundColor: "#d6d3d1" }} />
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: "#14b8a6" }}
            >
              <span className="text-white font-display font-bold text-[10px]">FI</span>
            </div>
            <span className="font-display font-bold text-sm tracking-tight" style={{ color: "#1c1917" }}>
              FI-532
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Page title */}
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-3" style={{ color: "#1c1917" }}>
            Support
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#78716c" }}>
            We&apos;re here to help. Browse the FAQ below or reach out directly.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl border p-6 md:p-8 mb-14"
          style={{ backgroundColor: "#f5f5f4", borderColor: "rgba(0,0,0,0.06)" }}
        >
          <h2 className="font-display font-bold text-lg mb-1" style={{ color: "#1c1917" }}>
            Contact Support
          </h2>
          <p className="text-sm mb-5" style={{ color: "#78716c" }}>
            Have a question, report a bug, or need help with your account? Send us an email and
            we&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:info@fi-532.app"
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#14b8a6", color: "#fff" }}
          >
            <Mail size={16} />
            info@fi-532.app
          </a>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="font-display font-bold text-xl mb-6" style={{ color: "#1c1917" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border p-5 md:p-6"
                style={{ backgroundColor: "#fff", borderColor: "rgba(0,0,0,0.06)" }}
              >
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: "#1c1917" }}>
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#57534e" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <p className="text-sm" style={{ color: "#a8a29e" }}>
            Still have questions? Email us at{" "}
            <a
              href="mailto:info@fi-532.app"
              className="transition-colors"
              style={{ color: "#0d9488" }}
            >
              info@fi-532.app
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t py-8" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-3xl px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#a8a29e" }}>
            &copy; {new Date().getFullYear()} FI-532. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: "#a8a29e" }}>
            <Link href="/privacy" className="transition-colors hover:text-stone-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-stone-700">
              Terms of Service
            </Link>
            <Link href="/eula" className="transition-colors hover:text-stone-700">
              EULA
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
