export default function Footer() {
  return (
    <footer
      className="border-t py-14"
      style={{
        backgroundColor: "#0c0a09",
        borderColor: "rgb(255 255 255 / 0.06)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#14b8a6" }}
            >
              <span className="text-white font-display font-bold text-sm">FI</span>
            </div>
            <span
              className="font-display font-bold text-base tracking-tight"
              style={{ color: "#e7e5e4" }}
            >
              FI-532
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "#57534e" }}>
            <a
              href="#strategy"
              className="transition-colors hover:text-teal-400"
            >
              Strategy
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-teal-400"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-teal-400"
            >
              Pricing
            </a>
            <a
              href="mailto:info@fi-532.app"
              className="transition-colors hover:text-teal-400"
            >
              Contact
            </a>
            <a href="/privacy" className="transition-colors hover:text-teal-400">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-teal-400">
              Terms
            </a>
            <a href="/eula" className="transition-colors hover:text-teal-400">
              EULA
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#44403c" }}>
            &copy; {new Date().getFullYear()} FI-532. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
