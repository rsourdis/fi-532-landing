import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the FI-532 app.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Acceptance and Eligibility",
    body: "By creating an account or using FI-532, you agree to these Terms of Service, the Privacy Policy, and the End User License Agreement. You may only use FI-532 if you are at least 13 years old, or older where your country requires it, and can form a binding agreement under applicable law. FI-532 is provided for personal, non-commercial household budgeting.",
  },
  {
    title: "2. Accounts and Responsibilities",
    body: "You sign in with Apple, Google, or an email address. You are responsible for keeping your sign-in method and device secure and for all activity under your account. Keep your profile information accurate, do not share your account, and tell FI-532 promptly at info@fi-532.app if you suspect unauthorized access. FI-532 may suspend or close accounts that violate these Terms.",
  },
  {
    title: "3. Households and Shared Data",
    body: "FI-532 organizes data into households. Members of the same household see each other's accounts, balances, transactions, categories, recurring payments, budgets, and shopping lists. Only share your household invite code with people you trust; anyone who joins with it, once approved, can view and edit shared household data. The household owner can approve or reject join requests, regenerate the invite code, and remove members. If you leave a household, you lose access to its data. If the owner deletes their account, the household and its data are deleted for every member, so export anything you need first.",
  },
  {
    title: "4. Free and Premium Plans",
    body: "The Free plan is for one person and currently includes up to 10 transactions per month and up to 4 recurring payments; on the Free plan only the household owner's accounts and shared accounts are available. Premium removes these limits and unlocks households of up to 4 members, AI reports, CSV and PDF data export, the distribution calculator, shopping lists, bill reminders, and submitting ideas and bug reports on the feedback board. Premium applies to the whole household: one active Premium subscription covers every member. If Premium ends, your data is kept, but you cannot add beyond the Free limits and Premium-only features are unavailable until you upgrade again. FI-532 may change plan limits and the features included in each plan with reasonable notice.",
  },
  {
    title: "5. Subscriptions, Renewal, and Cancellation",
    body: "Premium is sold as an auto-renewing subscription, billed monthly or yearly, through the Apple App Store or Google Play. The price and billing period are shown before you confirm the purchase. Your subscription renews automatically at the end of each period at the then-current price unless you cancel at least 24 hours before it renews. Cancel at any time in your App Store or Google Play subscription settings; you keep Premium until the end of the paid period and no partial refund is given for unused time. Apple or Google is the merchant of record, so refunds, payment disputes, price changes, and promotional offers are handled under the store's own terms and policies, not by FI-532. Deleting the app or your account does not cancel a subscription. Subscription management is handled with RevenueCat, which receives your purchase and entitlement status but no financial data.",
  },
  {
    title: "6. AI Features",
    body: "FI-532 uses AI to turn captured text into suggested transactions, suggest categories, and answer AI report questions about your budget. These features run on your device whenever possible and use FI-532's AI server and its AI providers, such as OpenAI, only after you turn on AI analysis in Settings. AI output is generated automatically and may be incomplete, outdated, or wrong. Every suggestion is a draft: nothing changes your balances until you review and confirm it, and you are responsible for checking it. AI reports have a daily allowance (currently 5 reports per member per day) and categorization requests are rate-limited; FI-532 may change these allowances or temporarily restrict AI features to protect the service. You may not use AI features to generate unlawful content or to attempt to extract FI-532's prompts, models, or other users' data. The Privacy Policy describes exactly what is sent and when.",
  },
  {
    title: "7. Transaction Capture, Shortcuts, and Bank Notifications",
    body: "You can send typed or pasted text, dictation, screenshots, and bank or payment notifications to FI-532 through the app, the share sheet, and Apple Shortcuts automations. You decide what to forward and confirm that you are entitled to share it. FI-532 is not affiliated with, endorsed by, or connected to any bank, card issuer, or payment provider, and it does not access your bank accounts; it only reads the text you choose to send it. Captured content is parsed on a best-effort basis and may be misread or missed, especially when a bank changes its message format, so always check the resulting transactions. Automations run under Apple's Shortcuts terms and depend on your device settings; FI-532 cannot guarantee they trigger every time.",
  },
  {
    title: "8. Feedback Board and User Content",
    body: "The in-app feedback board lets you submit ideas and bug reports, vote, and report content. You keep ownership of what you post and grant FI-532 a worldwide, royalty-free license to store, display, edit for clarity, and use your submissions to improve the product without compensation or attribution. Submissions are reviewed before they are published and may be edited, merged, declined, or removed at any time. Do not post personal or financial details, credentials, content you do not have the right to share, or anything unlawful, abusive, or spam. FI-532 may remove content and restrict board access for users who misuse it.",
  },
  {
    title: "9. Notifications and Reminders",
    body: "FI-532 can send push notifications for bill reminders, recurring payments, and household activity if you allow notifications on your device. Reminders are a convenience, not a guarantee: delivery depends on your device, operating system, and network, and FI-532 is not responsible for missed, late, or duplicate notifications or for any payment you miss as a result.",
  },
  {
    title: "10. Data Export and Account Deletion",
    body: "Premium members can export household transactions as CSV (up to 10,000 transactions per export) or PDF (up to 2,000 transactions per export). Exports are generated on request and are for your personal records. You can delete your account at any time from Settings. Deletion is permanent and removes your profile, personal data, feedback activity, and, if you are the household owner, the household and all of its data for every member. Deleting your account does not cancel an active subscription or entitle you to a refund from FI-532; cancel the subscription with Apple or Google first. Limited records may be retained where the Privacy Policy or applicable law requires it.",
  },
  {
    title: "11. Acceptable Use",
    body: "You may not misuse FI-532, attempt unauthorized access to accounts, households, or systems, interfere with platform integrity, scrape or bulk-download data, call FI-532's servers or Shortcuts endpoints other than through the app's intended features, circumvent plan limits or rate limits, or engage in unlawful, fraudulent, or harmful conduct through the service.",
  },
  {
    title: "12. Service Availability and Changes",
    body: "FI-532 evolves over time. Features may be added, changed, suspended, or discontinued, and the service may be temporarily unavailable because of maintenance, updates, outages, or problems at third-party providers. FI-532 will try to give reasonable notice of changes that materially reduce functionality you have paid for.",
  },
  {
    title: "13. No Financial, Legal, or Tax Advice",
    body: "FI-532 provides budgeting tools, calculations, and AI-generated summaries for informational purposes only. It does not provide financial, legal, tax, accounting, or investment advice, and it does not verify your balances against your bank. You are solely responsible for the data you enter and for any decision you make using the service.",
  },
  {
    title: "14. Intellectual Property",
    body: "FI-532 and its content, software, design, prompts, and branding are owned by Roberto Sourdis or licensors and are protected by applicable intellectual property laws. Except for the rights expressly granted in these Terms and the End User License Agreement, all rights are reserved. Your own financial data remains yours.",
  },
  {
    title: "15. Third-Party Services",
    body: "FI-532 relies on third-party providers to operate: Apple and Google for distribution and payments, Clerk for sign-in, Convex for backend hosting and synchronization, RevenueCat for subscription management, AI providers such as AI providers such as OpenAI for AI analysis when you allow it, Expo and Apple for push notifications, Sentry for crash diagnostics, and PostHog for optional product analytics. Your use of the App Store, Google Play, Apple Shortcuts, Sign in with Apple, and Google sign-in is also subject to those companies' terms. FI-532 is not responsible for outages, data loss, or changes caused by these providers.",
  },
  {
    title: "16. Disclaimer and Limitation of Liability",
    body: "To the maximum extent permitted by law, FI-532 is provided on an 'as is' and 'as available' basis without warranties of any kind, including accuracy of balances, calculations, captures, or AI output, uninterrupted availability, or fitness for a particular purpose. FI-532 and Roberto Sourdis will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill, or for missed payments, fees, or interest resulting from your reliance on the service. To the extent liability cannot be excluded, FI-532's total liability for all claims in any 12-month period is limited to the amount you paid FI-532 for Premium in that period. Nothing in these Terms limits rights that consumer protection law grants you and that cannot be waived.",
  },
  {
    title: "17. Termination",
    body: "You may stop using FI-532 and delete your account at any time. FI-532 may suspend or terminate access if these Terms are violated, if misuse or fraud is detected, or if required by law, and will try to notify you first unless doing so is impractical or prohibited. Sections on intellectual property, disclaimers, liability, and disputes survive termination.",
  },
  {
    title: "18. Changes to These Terms",
    body: "FI-532 may update these Terms from time to time. The date at the top shows the latest version. Material changes will be announced in the app or by other reasonable means before they take effect. Continued use after the effective date means you accept the revised Terms; if you do not agree, stop using FI-532 and delete your account.",
  },
  {
    title: "19. Governing Law and Disputes",
    body: "These Terms are governed by the laws of Spain, without regard to conflict-of-law rules, except where mandatory consumer protection law in your country of residence gives you additional rights. Before starting any formal proceeding, contact info@fi-532.app so the issue can be resolved informally. Disputes that cannot be resolved informally will be handled by the courts of Spain; if you are a consumer resident in the European Union, you may also bring proceedings in the courts of your country of residence and may use the European Commission's online dispute resolution platform.",
  },
  {
    title: "20. Contact",
    body: "Questions about these Terms can be sent to Roberto Sourdis at info@fi-532.app.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="October 12, 2026"
      sections={sections}
    />
  );
}
