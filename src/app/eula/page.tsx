import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "End User License Agreement — FI-532",
  description:
    "Read the End User License Agreement for the FI-532 app.",
};

const sections = [
  {
    title: "1. License Grant",
    body: "Subject to this EULA, FI-532 grants you a limited, personal, non-exclusive, non-transferable, revocable license to install and use the app for your own internal, non-commercial budgeting and household finance tracking.",
  },
  {
    title: "2. Restrictions",
    body: "You may not copy, modify, sell, sublicense, reverse engineer, decompile, distribute, or exploit FI-532 except where applicable law expressly allows it. You may not use FI-532 to violate laws or abuse the service.",
  },
  {
    title: "3. Account and Security Obligations",
    body: "You are responsible for your device security, credentials, and account activity. You agree to notify FI-532 promptly if you suspect unauthorized use of your account.",
  },
  {
    title: "4. Ownership and Reserved Rights",
    body: "FI-532 and all related intellectual property rights remain the property of Roberto Sourdis or licensors. This EULA grants a right to use the app, not ownership of the software.",
  },
  {
    title: "5. Third-Party Services and Store Terms",
    body: "FI-532 may interoperate with third-party services and is distributed through Apple App Store and Google Play. Your use of those platforms and services is subject to their terms, policies, and technical limitations.",
  },
  {
    title: "6. Disclaimer and Liability Limits",
    body: "To the fullest extent permitted by law, FI-532 is provided without warranties of any kind. FI-532 is not liable for indirect, incidental, special, consequential, or punitive damages, or for data loss, business interruption, or lost profits.",
  },
  {
    title: "7. Termination and Survival",
    body: "This license terminates automatically if you fail to comply with this EULA. Upon termination, you must stop using FI-532 and remove installed copies where required. Provisions by nature intended to survive termination will remain in effect.",
  },
  {
    title: "8. Updates and Contact",
    body: "FI-532 may update this EULA from time to time. Continued use after updates means you accept the revised terms. Questions can be sent to Roberto Sourdis at info@fi-532.app.",
  },
  {
    title: "9. Governing Law",
    body: "This EULA is governed by applicable law. Disputes will be resolved by courts with valid jurisdiction unless mandatory law requires a different forum.",
  },
];

export default function EulaPage() {
  return (
    <LegalPage
      title="End User License Agreement"
      lastUpdated="February 11, 2026"
      sections={sections}
    />
  );
}
