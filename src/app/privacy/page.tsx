import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — FI-532",
  description:
    "Learn how FI-532 collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "FI-532 collects the information needed to operate the app, including account profile details, household settings, transaction and recurring-payment data, selected preferences such as currency and timezone, and technical diagnostics from your device. Subscription status is also processed through app store and billing infrastructure providers. FI-532 does not directly collect full payment card numbers.",
  },
  {
    title: "2. How We Use Information",
    body: "Your information is used to provide budgeting features, keep household data synchronized, enable reminders and notifications, secure accounts, troubleshoot issues, and improve product reliability. Aggregated or de-identified usage information may be used to analyze performance and improve FI-532.",
  },
  {
    title: "3. Third-Party Processors",
    body: "FI-532 relies on third-party service providers for core operations, including authentication, backend hosting and sync, notification delivery, and subscription management. These providers only process data as needed to deliver their services to FI-532.",
  },
  {
    title: "4. Data Retention and Security",
    body: "FI-532 retains personal data while your account is active and for limited periods afterward when needed for security, fraud prevention, legal obligations, or dispute resolution. Reasonable administrative, technical, and organizational safeguards are used to protect your data.",
  },
  {
    title: "5. Your Rights and Choices",
    body: "You can update profile and preference data in the app. You may request access, correction, or deletion of your account data by contacting support. Subscription renewals, cancellations, and refunds are managed by the Apple App Store or Google Play under their policies.",
  },
  {
    title: "6. Children's Privacy",
    body: "FI-532 is not directed to children under 13 and does not knowingly collect personal data from children under 13. If you believe a child has provided personal information, contact FI-532 so the data can be reviewed and removed as appropriate.",
  },
  {
    title: "7. Policy Updates",
    body: "This Privacy Policy may be updated from time to time. Material updates may be communicated through the app or other reasonable channels. Continued use of FI-532 after updates means you accept the revised policy.",
  },
  {
    title: "8. Contact",
    body: "Data and privacy questions can be sent to Roberto Sourdis at info@fi-532.app.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 11, 2026"
      sections={sections}
    />
  );
}
