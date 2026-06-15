import {
  SITE_URL,
  SITE_NAME,
  APP_STORE_URL,
  DEVELOPER_NAME,
  SUPPORT_EMAIL,
  PRICE_MONTHLY,
  PRICE_YEARLY,
} from "@/lib/site";

// Server-rendered JSON-LD. No aggregateRating/Review markup — the App Store
// listing has no public ratings yet, and fabricating them risks a Google penalty.
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
        founder: { "@type": "Person", name: DEVELOPER_NAME },
        email: SUPPORT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          contactType: "customer support",
          availableLanguage: ["English", "Spanish"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE_NAME} — Household Budget for Couples`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "es"],
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "FI-532 Budget Tracker",
        alternateName: "FI-532 — Household Budget for Couples",
        operatingSystem: "iOS",
        applicationCategory: "FinanceApplication",
        url: SITE_URL,
        downloadUrl: APP_STORE_URL,
        installUrl: APP_STORE_URL,
        inLanguage: ["en", "es"],
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        description:
          "Household budgeting app for couples, families, and roommates. Automate the 50/30/20 rule or any custom split, scan receipts, add expenses by voice, track shared bills and subscriptions, plan savings goals, and get AI-powered spending reports — in real time.",
        featureList: [
          "50/30/20 budget rule automation with customizable splits",
          "Shared household collaboration",
          "Recurring bills & subscription tracking",
          "Split expenses and settle balances",
          "Receipt scanning to transactions",
          "Voice expense entry",
          "Savings goals and allocation",
          "Shared shopping lists",
          "Spending analytics and trends",
          "AI-powered financial reports",
          "CSV data export",
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Free",
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Premium Monthly",
            price: PRICE_MONTHLY.toString(),
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Premium Yearly",
            price: PRICE_YEARLY.toString(),
            priceCurrency: "USD",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
