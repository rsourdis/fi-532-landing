export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">
                FI
              </span>
            </div>
            <span className="font-display font-bold text-base text-stone-900 tracking-tight">
              FI-532
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
            <a href="#features" className="hover:text-stone-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-stone-900 transition-colors">
              Pricing
            </a>
            <a href="mailto:info@fi-532.app" className="hover:text-stone-900 transition-colors">
              Contact
            </a>
            <a href="/privacy" className="hover:text-stone-900 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-stone-900 transition-colors">
              Terms of Service
            </a>
            <a href="/eula" className="hover:text-stone-900 transition-colors">
              EULA
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} FI-532. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
