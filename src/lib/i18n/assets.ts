import { StaticImageData } from "next/image";
import type { Locale } from "./types";

// Latest in-app screenshots (1179×2556, iPhone). English-first source of truth.
import HomeShot from "@/assets/app-screens/new/home.png";
import TransactionsShot from "@/assets/app-screens/new/transactions.png";
import RecurringShot from "@/assets/app-screens/new/recurring.png";
import AnalyticsShot from "@/assets/app-screens/new/analytics.png";
import CalendarShot from "@/assets/app-screens/new/calendar.png";
import AiReportsShot from "@/assets/app-screens/new/ai-reports.png";
import ReceiptScanShot from "@/assets/app-screens/new/receipt-scan.png";
import VoiceShot from "@/assets/app-screens/new/voice.png";
import SavingsPlanShot from "@/assets/app-screens/new/savings-plan.png";
import ShoppingListsShot from "@/assets/app-screens/new/shopping-lists.png";
import DistributionShot from "@/assets/app-screens/new/distribution-calculator.png";

export type AssetKey =
  | "home"
  | "transactions"
  | "recurring"
  | "analytics"
  | "calendar"
  | "aiReports"
  | "receiptScan"
  | "voice"
  | "savingsPlan"
  | "shoppingLists"
  | "distribution";

// English assets — always available as fallback
const enAssets: Record<AssetKey, StaticImageData> = {
  home: HomeShot,
  transactions: TransactionsShot,
  recurring: RecurringShot,
  analytics: AnalyticsShot,
  calendar: CalendarShot,
  aiReports: AiReportsShot,
  receiptScan: ReceiptScanShot,
  voice: VoiceShot,
  savingsPlan: SavingsPlanShot,
  shoppingLists: ShoppingListsShot,
  distribution: DistributionShot,
};

// Spanish-specific assets — add locale versions here when available.
// Anything not listed falls back to the English version above.
const esAssets: Partial<Record<AssetKey, StaticImageData>> = {
  // Spanish screenshots will be added here as they become available.
};

export function getAsset(key: AssetKey, locale: Locale): StaticImageData {
  if (locale === "es") {
    return esAssets[key] ?? enAssets[key];
  }
  return enAssets[key];
}
