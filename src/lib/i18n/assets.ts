import { StaticImageData } from "next/image";
import type { Locale } from "./types";
import HomeEN from "@/assets/app-screens/Home.png";
import TransactionsEN from "@/assets/app-screens/Transactions.png";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RecurringEN: StaticImageData = require("@/assets/app-screens/Recurring- Subscriptions.png");

export type AssetKey = "home" | "transactions" | "recurring";

// English assets — always available as fallback
const enAssets: Record<AssetKey, StaticImageData> = {
  home: HomeEN,
  transactions: TransactionsEN,
  recurring: RecurringEN,
};

// Spanish-specific assets — add locale versions here when available.
// Example: import HomeES from "@/assets/app-screens/es/Home.png";
const esAssets: Partial<Record<AssetKey, StaticImageData>> = {
  // Spanish screenshots will be added here as they become available.
  // Anything not listed here will fall back to the English version above.
};

export function getAsset(key: AssetKey, locale: Locale): StaticImageData {
  if (locale === "es") {
    return esAssets[key] ?? enAssets[key];
  }
  return enAssets[key];
}
