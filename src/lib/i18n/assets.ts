import { StaticImageData } from "next/image";
import type { Locale } from "./types";

// Latest in-app captures (1206×2622, dark theme) — the same sources used for
// the App Store screenshots in fi_532/metadata/app-store/screenshots-src.
import HomeEn from "@/assets/app-screens/v3/en/home.png";
import BucketsEn from "@/assets/app-screens/v3/en/buckets.png";
import TogetherEn from "@/assets/app-screens/v3/en/together.png";
import BillsEn from "@/assets/app-screens/v3/en/bills.png";
import ApplePayEn from "@/assets/app-screens/v3/en/applepay.png";
import VoiceEn from "@/assets/app-screens/v3/en/voice.png";
import AssistantEn from "@/assets/app-screens/v3/en/assistant.png";
import InsightsEn from "@/assets/app-screens/v3/en/insights.png";
import TransactionsEn from "@/assets/app-screens/v3/en/transactions.png";

import HomeEs from "@/assets/app-screens/v3/es/home.png";
import BucketsEs from "@/assets/app-screens/v3/es/buckets.png";
import TogetherEs from "@/assets/app-screens/v3/es/together.png";
import BillsEs from "@/assets/app-screens/v3/es/bills.png";
import ApplePayEs from "@/assets/app-screens/v3/es/applepay.png";
import VoiceEs from "@/assets/app-screens/v3/es/voice.png";
import AssistantEs from "@/assets/app-screens/v3/es/assistant.png";
import InsightsEs from "@/assets/app-screens/v3/es/insights.png";
import TransactionsEs from "@/assets/app-screens/v3/es/transactions.png";

export type AssetKey =
  | "home"
  | "buckets"
  | "together"
  | "bills"
  | "applepay"
  | "voice"
  | "assistant"
  | "insights"
  | "transactions";

const assets: Record<Locale, Record<AssetKey, StaticImageData>> = {
  en: {
    home: HomeEn,
    buckets: BucketsEn,
    together: TogetherEn,
    bills: BillsEn,
    applepay: ApplePayEn,
    voice: VoiceEn,
    assistant: AssistantEn,
    insights: InsightsEn,
    transactions: TransactionsEn,
  },
  es: {
    home: HomeEs,
    buckets: BucketsEs,
    together: TogetherEs,
    bills: BillsEs,
    applepay: ApplePayEs,
    voice: VoiceEs,
    assistant: AssistantEs,
    insights: InsightsEs,
    transactions: TransactionsEs,
  },
};

export function getAsset(key: AssetKey, locale: Locale): StaticImageData {
  return assets[locale][key];
}
