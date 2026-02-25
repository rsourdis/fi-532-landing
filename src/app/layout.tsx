import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "FI-532 — Household Budgeting, Simplified",
  description:
    "Track spending, manage bills, plan budgets, and collaborate on household finances in one real-time workspace. Available on iOS.",
  keywords: [
    "budgeting app",
    "household finance",
    "expense tracker",
    "bill management",
    "shared finances",
    "iOS app",
  ],
  openGraph: {
    title: "FI-532 — Household Budgeting, Simplified",
    description:
      "Track spending, manage bills, plan budgets, and collaborate on household finances in one real-time workspace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
