import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how FI-532 collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "FI-532 collects the information needed to operate the app, including account profile details, household settings, transaction and recurring-payment data, text you choose to capture as a transaction (typed or pasted notes, dictated text, shared screenshots read as text, and bank messages or payment notifications you send to FI-532 through Shortcuts), selected preferences such as currency and timezone, and technical diagnostics from your device. If you use the in-app feedback board, FI-532 also stores the idea or bug-report type, title, description, status, votes, content reports, hidden-author choices, and internal links to the accounts performing those actions. Subscription status is processed through app store and billing infrastructure providers. FI-532 does not directly collect full payment card numbers.",
  },
  {
    title: "2. How We Use Information",
    body: "Your information is used to provide budgeting features, keep household data synchronized, enable reminders and notifications, secure accounts, troubleshoot issues, operate and prioritize the feedback board, and improve product reliability. If you opt in to product analytics, limited usage information is also used to understand onboarding completion, feature adoption, and points where app actions fail.",
  },
  {
    title: "3. Optional Product Analytics",
    body: "Product analytics is off until you choose to allow it. When enabled, FI-532 sends PostHog a pseudonymous account identifier, named screens and feature events, onboarding steps and outcomes, outcomes of saving transactions, reviewing captures, and confirming recurring payments without transaction content, your AI analysis choice, and limited app and device details such as app version, build, platform, device type, and operating-system version. FI-532 does not send PostHog balances, amounts, merchant or transaction descriptions, category names, account or household names, email addresses, feedback text, receipt or profile images, audio, screenshots, touch recordings, or session replays. Precise location and IP-derived geolocation are disabled. You can withdraw consent in Settings at any time; withdrawal stops future analytics collection.",
  },
  {
    title: "4. AI Analysis",
    body: "FI-532 turns captured text into suggested transactions, suggests categories, and answers AI report questions. Whenever possible this runs on your device: voice is transcribed on your device, receipts and shared screenshots are read on your device, and on supported iPhones captured text is analyzed with Apple's on-device models. When on-device analysis is unavailable or does not finish, FI-532 can send the needed data to its own AI server, which uses OpenAI as a service provider: the captured text with your account's currency, language, and recurring-payment names; a merchant name for a category suggestion; or an AI report question together with a summary of your household budget, such as totals, category spending, account names and balances, and upcoming recurring payments. This happens only after you allow AI analysis. You can turn it off in Settings under Privacy at any time; capture then stays on your device and anything that cannot be analyzed there waits for you to retry or enter it yourself. AI reports are not available while it is off. Analysis results are suggestions: nothing changes your balances until you review and confirm it. Captured text is stored in FI-532's backend until it is analyzed or dismissed, and is then removed; shared images are not kept. FI-532 does not send this content to PostHog.",
  },
  {
    title: "5. Feedback",
    body: "Signed-in users can view published feedback and vote once on each submission. Only users in a household with an active Premium subscription can submit an idea or bug report. New submissions are visible only to their author until FI-532 reviews and publishes them. Published titles, descriptions, types, statuses, and vote totals are visible to other signed-in FI-532 users; account names and email addresses are not displayed on the board. Users can report objectionable content and hide all posts from an anonymous author. FI-532 stores this information in its Convex backend and does not send feedback text to PostHog. Do not include balances, financial account or transaction details, passwords, authentication codes, or other sensitive information in feedback.",
  },
  {
    title: "6. Service Providers and Transfers",
    body: "FI-532 relies on service providers for authentication, backend hosting and synchronization, notifications, subscriptions, diagnostics, AI analysis through OpenAI when you allow it, and, when chosen, PostHog analytics. The feedback board is stored with FI-532's existing Convex backend rather than a separate feedback provider. Providers process data under their own security and privacy terms and may process data in countries other than yours. FI-532 configures PostHog's European Union service endpoint for product analytics.",
  },
  {
    title: "7. Data Retention and Security",
    body: "FI-532 retains personal data while your account is active and for limited periods afterward when needed for security, fraud prevention, legal obligations, or dispute resolution. Product analytics and feedback activity are retained only as long as reasonably necessary for product improvement, support, safety, or legal obligations. The original text of a capture (typed or pasted notes, dictated text, text read from shared screenshots, and bank messages or payment notifications) is deleted from FI-532's servers once it has been turned into a suggested transaction or you dismiss it. Captured text that is still unresolved after 30 days without activity is deleted automatically; the capture stays listed as expired so you can enter the details yourself or dismiss it. FI-532 keeps a record that the capture was received, without its text, so the same message is not imported twice. Transactions you save are kept until you delete them or your account. Deleting your FI-532 account removes your feedback submissions, votes, content reports, and hidden-author choices from the feedback board. Reasonable administrative, technical, and organizational safeguards are used to protect data, but no system can guarantee absolute security.",
  },
  {
    title: "8. Your Rights and Choices",
    body: "You can update profile and preference data in the app and turn off product analytics or AI analysis at any time. You may request access, correction, portability, restriction, objection, or deletion where applicable by contacting support. Deleting your account removes core account data and associated feedback activity and clears the on-device analytics preference; contact support if you also want historical PostHog events located and deleted. Subscription renewals, cancellations, and refunds are managed by the Apple App Store or Google Play under their policies.",
  },
  {
    title: "9. Children's Privacy",
    body: "FI-532 is not directed to children under 13 and does not knowingly collect personal data from children under 13. If you believe a child has provided personal information, contact FI-532 so the data can be reviewed and removed as appropriate.",
  },
  {
    title: "10. Policy Updates",
    body: "This Privacy Policy may be updated from time to time. Material updates may be communicated through the app or other reasonable channels. Continued use of FI-532 after updates means you accept the revised policy.",
  },
  {
    title: "11. Contact",
    body: "Support, safety, data, and privacy questions can be sent to Roberto Sourdis at info@fi-532.app.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="October 11, 2026"
      sections={sections}
    />
  );
}
