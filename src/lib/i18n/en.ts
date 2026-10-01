import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    method: "The method",
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    downloadApp: "Get the app",
  },

  hero: {
    headline: { pre: "Know what’s ", em: "left to spend." },
    subCopy:
      "One shared budget for couples, families and roommates. Every paycheck is split 50/30/20 automatically, so your whole household sees one honest number.",
    trust: ["No bank login needed", "Invite your partner in seconds", "Free to start"],
    phoneAlt:
      "FI-532 dashboard showing $3,990 left to spend, income, expenses and the 50/30/20 budget for the cycle",
    sideLeftAlt: "FI-532 needs, wants and savings buckets with spent and remaining amounts",
    sideRightAlt: "FI-532 household balance showing each member's share and who owes whom",
    cardLeft: { k: "Left to spend", v: "$3,990", s: "▲ $497 under pace" },
    cardOwes: { k: "Alex owes you", v: "$42.10", s: "Groceries · Internet · Dinner" },
  },

  proof: {
    items: [
      { title: "No bank login", description: "Your credentials never leave your bank." },
      { title: "Built for two or more", description: "Couples, families and roommates." },
      { title: "Syncs in real time", description: "Everyone sees the same numbers." },
      { title: "English & Spanish", description: "With your own currency." },
    ],
  },

  problems: {
    sectionLabel: "Why FI-532",
    headline: { pre: "Money together is hard. ", em: "We make it simple." },
    solutionTag: "With FI-532",
    items: [
      {
        problem: "“Where did the money go this month?”",
        solution:
          "Every expense lands in needs, wants or savings automatically. You see exactly where each dollar went, as it happens.",
      },
      {
        problem: "“Wait, who paid for what?”",
        solution:
          "Share one household, split expenses and settle up in seconds. No more awkward math at the end of the month.",
      },
      {
        problem: "“We forgot that bill again.”",
        solution:
          "Every bill and subscription in one planner, with reminders before the due date and one-tap “paid”.",
      },
    ],
  },

  method: {
    sectionLabel: "The method",
    equation: "50/30/20",
    tagline: "The budget rule is in our name.",
    description:
      "Half for what you need, 30% for what you enjoy, 20% for your future. FI-532 does the split on every paycheck, so nobody has to open a spreadsheet.",
    incomeLabel: "Monthly household income",
    cardLabel: "Your split",
    perMonth: "/ month",
    pillars: [
      { label: "Needs", tagline: "What keeps life running", examples: "Rent, groceries, utilities, transport" },
      { label: "Wants", tagline: "Enjoy it without the guilt", examples: "Dining out, streaming, hobbies" },
      { label: "Savings", tagline: "Your future, funded first", examples: "Emergency fund, investments, debt" },
    ],
    customNote: "Prefer 60/20/20 or 40/30/30? Change the split any time.",
    currency: "USD",
    numberLocale: "en-US",
    defaultIncome: 6600,
    maxIncome: 20000,
  },

  features: {
    sectionLabel: "Features",
    headline: { pre: "Less tracking. ", em: "More knowing." },
    description:
      "Logging an expense takes seconds, and often nothing at all. The rest of the app turns that into answers.",
    cards: {
      buckets: {
        headline: { pre: "Every paycheck ", em: "gets a job." },
        desc: "Needs, wants and savings, split 50/30/20 for you. Unspent budget rolls into the next cycle.",
        alt: "FI-532 budget buckets showing needs, wants and savings progress rings",
      },
      together: {
        headline: { pre: "Budget ", em: "together." },
        desc: "Shared or private expenses, fair shares by income, and settle-ups in a tap.",
        alt: "FI-532 household balance with each member's share and a settle-up",
      },
      bills: {
        headline: { pre: "Never miss ", em: "a bill." },
        desc: "Due dates, reminders and one-tap “paid”.",
        alt: "FI-532 recurring bills planner with due dates and a mark paid button",
      },
      applepay: {
        headline: { pre: "Apple Pay ", em: "logs itself." },
        desc: "Tap to pay and the expense lands in FI-532.",
        alt: "FI-532 Apple Pay auto-log settings with cards and default category",
      },
      voice: {
        headline: { pre: "Just ", em: "say it." },
        desc: "Or snap the receipt. We fill in the rest.",
        alt: "FI-532 voice transaction screen listening to a spoken expense",
      },
      assistant: {
        headline: { pre: "Ask your budget ", em: "anything." },
        desc: "Plain answers about your money, any time.",
        alt: "FI-532 assistant with today's spending summary and suggested questions",
      },
      insights: {
        headline: { pre: "See where ", em: "it goes." },
        desc: "Every cycle compared with the last one, category by category, so you know what to cut and what's working.",
        alt: "FI-532 insights with a monthly income and expense trend and category breakdown",
      },
    },
    callouts: {
      bucketsLabel: "This cycle",
      bucketsSegs: ["Needs 50", "Wants 30", "Savings 20"],
      together: { k: "Alex owes you", v: "$42.10", s: "Groceries · Internet · Dinner" },
      bills: { k: "Due tomorrow", v: "Rent · $1,650", s: "🔔 Reminder set" },
      applepayTitle: "Logged from Apple Pay",
      applepayBody: "Trader Joe’s · −$114.09 · Groceries",
      applepayNow: "now",
      voiceQuote: "“I spent 86 dollars at Costco”",
      assistantQuote: "“What can we cut?”",
      insights: { k: "Dining out", v: "−56%", s: "vs. last cycle" },
    },
    moreLabel: "And everything else a household needs",
    more: [
      { title: "Receipt scanning", description: "Point the camera and the total and line items fill themselves in." },
      { title: "Savings plan", description: "Split your 20% across goals like an emergency fund or a vacation." },
      { title: "Shared shopping lists", description: "Check off what you bought and turn it into one transaction." },
      { title: "Bill calendar", description: "Every bill and subscription mapped onto the month." },
      { title: "Search and filters", description: "Find any expense by person, category or amount in seconds." },
      { title: "CSV export", description: "Your data is yours. Take it with you whenever you want." },
    ],
  },

  howItWorks: {
    sectionLabel: "How it works",
    headline: { pre: "Set up in ", em: "minutes." },
    steps: [
      {
        title: "Create your household",
        description: "Pick your currency and your split: 50/30/20, or any ratio that fits your life.",
      },
      {
        title: "Invite your people",
        description: "Add your partner, family or roommates by email. Everyone shares the same live budget.",
      },
      {
        title: "Spend with a plan",
        description: "Log by voice, receipt or Apple Pay, and always know what's left to spend.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "From households using FI-532",
    headline: { pre: "Households saving more. ", em: "Every month." },
    items: [
      {
        role: "Married, 2 kids",
        text: "Finally an app that makes budgeting with my partner simple. We can both see where our money is going and plan together. The 50/30/20 view is a game-changer.",
      },
      {
        role: "Freelancer",
        text: "The recurring bills tracker is a lifesaver. I set it up once and now I never miss a payment. Clean UI, fast, and it actually helps me save more every month.",
      },
      {
        role: "Homeowner",
        text: "I love the needs/wants/savings breakdown. It completely changed how I think about spending. I've saved more in 3 months with FI-532 than in the past year.",
      },
    ],
  },

  pricing: {
    sectionLabel: "Pricing",
    headingNormal: "Start free.",
    headingColored: "Upgrade when you're ready.",
    description:
      "No hidden fees. No credit card required for the free plan. Upgrade anytime through the App Store.",
    monthly: "Monthly",
    annual: "Annual",
    saveDiscountBadge: (pct) => `Save ${pct}%`,
    mostPopular: "Most Popular",
    freePlan: {
      name: "Free",
      period: "forever",
      description: "Start your 50/30/20 journey — no credit card needed.",
      features: [
        "Monthly budget dashboard",
        "Up to 10 transactions / month",
        "2 active recurring items",
        "Category-based tracking",
        "Household setup & configuration",
        "Secure authentication",
      ],
      cta: "Get Started Free",
    },
    proPlan: {
      name: "Premium",
      description: "The full FI-532 experience. Unlimited, collaborative, powerful.",
      features: [
        "Unlimited transactions",
        "Unlimited recurring items",
        "Multi-member collaboration",
        "Split expenses & settle up",
        "Bill reminders & notifications",
        "AI-powered financial reports",
        "Shared shopping lists",
        "Distribution calculator",
        "CSV data export",
        "Priority support",
      ],
      perYear: "/year",
      perMonth: "/month",
      billedAnnually: (price) => `$${price}/mo, billed annually`,
      saveVsMonthly: (amount) => `You save $${amount} vs monthly`,
      crossedOutPrefix: "vs",
      crossedOutSuffix: "billed monthly",
      switchToAnnual: (pct) => `Switch to annual and save ${pct}% →`,
      valueAnnual: (price) => `Only $${price}/month — less than a coffee a week.`,
      valueMonthly: "Less than 1 coffee a month for full financial clarity.",
      ctaAnnual: "Get Annual Plan",
      ctaMonthly: "Start Free Trial",
    },
  },

  faq: {
    sectionLabel: "FAQ",
    headline: { pre: "Questions, ", em: "answered." },
    items: [
      {
        q: "Do I have to connect my bank account?",
        a: "No. FI-532 never asks for your bank login. You add expenses by voice, by scanning a receipt, by typing them in, or automatically when you pay with Apple Pay.",
      },
      {
        q: "What is the 50/30/20 rule?",
        a: "It divides your after-tax income into 50% for needs (rent, groceries, utilities), 30% for wants (dining out, subscriptions, hobbies) and 20% for savings. FI-532 automates the breakdown so you always know where you stand.",
      },
      {
        q: "Can I use a different split?",
        a: "Yes. 50/30/20 is the default, but you can change the percentages in your household settings — for example 60/20/20 or 40/30/30.",
      },
      {
        q: "How do I budget with my partner?",
        a: "Set up your household, then invite members by email from the household settings. Once they accept, you share a real-time view of the budget, transactions and balances.",
      },
      {
        q: "Is FI-532 free?",
        a: "It's free to download and the free plan never expires. Premium unlocks unlimited transactions, multi-member collaboration, AI reports and more. Subscriptions are managed by the App Store and you can cancel any time.",
      },
      {
        q: "Is there an Android version?",
        a: "Not yet. FI-532 is currently available on iPhone through the App Store. Android is on the roadmap.",
      },
    ],
    moreHelp: "More questions? Visit support",
  },

  cta: {
    headline: { pre: "Start budgeting ", em: "together." },
    description:
      "Download FI-532, set up your household and see what's left to spend before your next paycheck arrives.",
    trustItems: ["No bank login needed", "Free to start", "No credit card"],
    qrLabel: "Scan to download",
    qrAlt: "QR code linking to FI-532 on the App Store",
  },

  stickyCta: {
    text: "Free on the App Store",
    button: "Get FI-532",
  },

  footer: {
    method: "The method",
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    eula: "EULA",
    copyright: (year) => `© ${year} FI-532. All rights reserved.`,
  },
};
