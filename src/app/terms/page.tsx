import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — FI-532",
  description:
    "Read the terms and conditions governing your use of the FI-532 app.",
};

const sections = [
  {
    title: "1. Acceptance and Eligibility",
    body: "By accessing or using FI-532, you agree to these Terms of Service. You may only use the service if you can form a binding agreement under applicable law.",
  },
  {
    title: "2. Accounts and Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your sign-in credentials and for activity under your account. You agree to provide accurate information and to promptly update it when needed.",
  },
  {
    title: "3. Acceptable Use",
    body: "You may not misuse FI-532, attempt unauthorized access, interfere with platform integrity, use automated abuse methods, or engage in unlawful, fraudulent, or harmful conduct through the service.",
  },
  {
    title: "4. Subscriptions and Billing",
    body: "Certain features require a paid subscription. Purchases and renewals are processed by Apple App Store or Google Play. Billing cycles, cancellations, refunds, and payment disputes are governed by the applicable store's policies.",
  },
  {
    title: "5. Service Availability and Changes",
    body: "FI-532 may evolve over time. Features may be updated, changed, suspended, or discontinued, and the service may be temporarily unavailable due to maintenance, updates, or outages.",
  },
  {
    title: "6. No Financial, Legal, or Tax Advice",
    body: "FI-532 provides budgeting tools for informational purposes only and does not provide financial, legal, tax, accounting, or investment advice. You are solely responsible for decisions made using the service.",
  },
  {
    title: "7. Intellectual Property",
    body: "FI-532 and its content, software, design, and branding are protected by applicable intellectual property laws. Except for rights expressly granted in these Terms, all rights are reserved.",
  },
  {
    title: "8. Disclaimer and Limitation of Liability",
    body: "To the maximum extent permitted by law, FI-532 is provided on an 'as is' and 'as available' basis without warranties of any kind. FI-532 will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, profits, or goodwill.",
  },
  {
    title: "9. Termination",
    body: "FI-532 may suspend or terminate access if these Terms are violated or if misuse is detected. You may stop using the service at any time.",
  },
  {
    title: "10. Governing Law and Disputes",
    body: "These Terms are governed by applicable law. Any dispute that cannot be resolved informally will be handled by courts with proper jurisdiction, unless otherwise required by applicable consumer protection law.",
  },
  {
    title: "11. Contact",
    body: "Questions about these Terms can be sent to Roberto Sourdis at info@fi-532.app.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 11, 2026"
      sections={sections}
    />
  );
}
