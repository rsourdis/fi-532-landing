import type { Metadata, Viewport } from "next";
import { Nunito, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import StructuredData from "@/components/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const TITLE = "FI-532 — Household Budget for Couples & Families";
const DESCRIPTION =
  "FI-532 is the household budgeting app for couples, families, and roommates. Automate the 50/30/20 rule, track shared expenses, manage recurring bills, split costs, and get AI-powered spending reports — in real time. Free on iOS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  category: "finance",
  keywords: [
    "household budgeting app",
    "budget app for couples",
    "50/30/20 budget",
    "shared expense tracker",
    "split expenses app",
    "family budget app",
    "expense tracker",
    "bill reminder app",
    "recurring bills tracker",
    "couples finance app",
    "roommate expense splitting",
    "AI budget reports",
    "iOS budgeting app",
  ],
  authors: [{ name: "Roberto Sourdis" }],
  creator: "Roberto Sourdis",
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#12c77a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${bricolage.variable} antialiased`}>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
