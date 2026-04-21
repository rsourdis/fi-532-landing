import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
