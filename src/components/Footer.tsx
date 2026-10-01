"use client";

import AppLogo from "./AppLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { SUPPORT_EMAIL } from "@/lib/site";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footer.method, href: "#method" },
    { label: t.footer.features, href: "#features" },
    { label: t.footer.pricing, href: "#pricing" },
    { label: t.footer.faq, href: "#faq" },
    { label: t.footer.contact, href: `mailto:${SUPPORT_EMAIL}` },
    { label: t.footer.support, href: "/support" },
    { label: t.footer.privacy, href: "/privacy" },
    { label: t.footer.terms, href: "/terms" },
    { label: t.footer.eula, href: "/eula" },
  ];

  return (
    // Extra bottom padding on mobile leaves room for the sticky download bar
    <footer className="border-t border-white/10 pt-14 pb-28 md:pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <AppLogo textClassName="text-base text-white" iconClassName="size-9" />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-stone-400">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-teal-400">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-stone-500">
            {t.footer.copyright(new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}
