import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description:
    "Read the End User License Agreement for the FI-532 app.",
  alternates: { canonical: "/eula" },
};

const sections = [
  {
    title: "1. License Grant",
    body: "Subject to this EULA, FI-532 grants you a limited, personal, non-exclusive, non-transferable, revocable license to install and use the app on devices you own or control for your own non-commercial budgeting and household finance tracking. This EULA applies together with the Terms of Service and the Privacy Policy; if this EULA and the Terms conflict, the Terms govern your use of the service and this EULA governs the software itself.",
  },
  {
    title: "2. Restrictions",
    body: "You may not copy, modify, sell, rent, sublicense, reverse engineer, decompile, or distribute FI-532, extract its prompts or models, use it to build a competing product, or access its servers other than through the app's intended features, except where applicable law expressly allows it. You may not use FI-532 to violate laws, abuse the service, or circumvent plan limits.",
  },
  {
    title: "3. Account and Security Obligations",
    body: "You are responsible for your device security, sign-in method, and account activity. You agree to notify FI-532 promptly at info@fi-532.app if you suspect unauthorized use of your account.",
  },
  {
    title: "4. Ownership and Reserved Rights",
    body: "FI-532 and all related intellectual property rights remain the property of Roberto Sourdis or licensors. This EULA grants a right to use the app, not ownership of the software. Your own financial data remains yours.",
  },
  {
    title: "5. Third-Party Services and Store Terms",
    body: "FI-532 interoperates with third-party services, including Apple, Google, Clerk, Convex, RevenueCat, AI providers such as OpenAI, Expo, Sentry, and PostHog, and is distributed through the Apple App Store and Google Play. Your use of those platforms and services is subject to their terms, policies, and technical limitations, and FI-532 is not responsible for their outages or changes.",
  },
  {
    title: "6. Apple App Store Terms",
    body: "If you obtained FI-532 from the Apple App Store, the following also applies. This EULA is between you and Roberto Sourdis only, not Apple, and Apple is not responsible for the app or its content. The license is limited to use on Apple-branded products you own or control, as permitted by the Usage Rules in the Apple Media Services Terms. Apple has no obligation to provide maintenance or support. If the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price, if any; to the maximum extent permitted by law Apple has no other warranty obligation. Roberto Sourdis, not Apple, is responsible for addressing any claims relating to the app, including product liability, legal or regulatory compliance, and consumer protection claims, and for investigating and resolving any third-party claim that the app infringes intellectual property rights. You represent that you are not located in a country subject to a U.S. government embargo or designated as a terrorist-supporting country and are not on any U.S. government list of prohibited or restricted parties. Apple and its subsidiaries are third-party beneficiaries of this EULA and may enforce it against you.",
  },
  {
    title: "7. Disclaimer and Liability Limits",
    body: "To the fullest extent permitted by law, FI-532 is provided without warranties of any kind, including accuracy of balances, calculations, captures, or AI output. FI-532 and Roberto Sourdis are not liable for indirect, incidental, special, consequential, or punitive damages, or for data loss, business interruption, missed payments, or lost profits. To the extent liability cannot be excluded, total liability is limited as described in the Terms of Service. Nothing in this EULA limits rights that consumer protection law grants you and that cannot be waived.",
  },
  {
    title: "8. Termination and Survival",
    body: "This license terminates automatically if you fail to comply with this EULA, and ends when you delete your account. Upon termination, you must stop using FI-532 and remove installed copies where required. Provisions by nature intended to survive termination remain in effect.",
  },
  {
    title: "9. Updates and Contact",
    body: "FI-532 may update the app and this EULA from time to time; the date at the top shows the latest version, and material changes will be announced in the app or by other reasonable means. Continued use after updates means you accept the revised terms. Questions can be sent to Roberto Sourdis at info@fi-532.app.",
  },
  {
    title: "10. Governing Law",
    body: "This EULA is governed by the laws of Spain, except where mandatory consumer protection law in your country of residence provides otherwise. Disputes will be resolved as described in the Terms of Service.",
  },
];

export default function EulaPage() {
  return (
    <LegalPage
      title="End User License Agreement"
      lastUpdated="October 12, 2026"
      sections={sections}
    />
  );
}
