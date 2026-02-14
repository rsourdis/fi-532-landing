import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LegalSection {
  title: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  lastUpdated,
  sections,
}: LegalPageProps) {
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
        <div className="mb-10">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-sm text-stone-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display font-bold text-lg text-stone-900 mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Contact footer */}
        <div className="mt-14 pt-8 border-t border-stone-200/60">
          <p className="text-sm text-stone-400">
            If you have any questions about this document, please contact us at{" "}
            <a
              href="mailto:info@fi-532.app"
              className="text-teal-600 hover:text-teal-700 transition-colors"
            >
              info@fi-532.app
            </a>
          </p>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-stone-200/60 py-8">
        <div className="mx-auto max-w-3xl px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} FI-532. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-stone-400">
            <Link
              href="/privacy"
              className="hover:text-stone-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-stone-700 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/eula"
              className="hover:text-stone-700 transition-colors"
            >
              EULA
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
