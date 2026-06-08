import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    strategy: "Strategy",
    features: "Features",
    pricing: "Pricing",
    downloadApp: "Download App",
  },

  hero: {
    available: "Available on iOS",
    hook: "Where did the money go this month?",
    headlinePrefix: "The 50/30/20",
    headlineColored: "budget rule,",
    headlineSuffix: "automated.",
    subCopy:
      "The world's most effective budget rule, automated for your household. See where money goes, split shared costs, and grow your savings — every month.",
    statNeeds: "Needs",
    statWants: "Wants",
    statSavings: "Savings",
    ratingValue: "4.8",
    socialProof: "Loved by couples, families & roommates managing money together",
    scrollCue: "How it works",
    badgeNeeds: "Needs",
    badgeSavings: "Savings",
    phoneAlt: "FI-532 app — every transaction tracked and categorized",
  },

  strategy: {
    sectionLabel: "The Method",
    headingPart1: "The 50/30/20 rule.",
    headingColored: "The simplest path to financial freedom.",
    description:
      "Proven by financial experts worldwide. Used by millions. And now automated for your household by FI-532.",
    pillars: [
      {
        label: "Needs",
        tagline: "Cover what keeps life running.",
        description:
          "Essential expenses you can't skip — housing, utilities, groceries, transport, healthcare. Half your income, protected and tracked.",
        examples: ["Rent / mortgage", "Groceries", "Utilities", "Transportation"],
      },
      {
        label: "Wants",
        tagline: "Enjoy life without the guilt.",
        description:
          "The things that make life enjoyable — dining out, subscriptions, hobbies, shopping. Spend freely within the 30%, never beyond.",
        examples: ["Dining & cafes", "Streaming services", "Hobbies", "Shopping"],
      },
      {
        label: "Savings",
        tagline: "Build the future you deserve.",
        description:
          "Your financial future, funded automatically. Emergency funds, investments, debt payoff — every dollar here works harder than those you spend.",
        examples: ["Emergency fund", "Investments", "Debt payoff", "Retirement"],
      },
    ],
    barNeeds: "Needs",
    barWants: "Wants",
    barSavings: "Savings",
    calloutBefore:
      "FI-532 tracks every transaction, categorizes your spending, and shows your ",
    calloutStrong: "50/30/20 breakdown in real time",
    calloutAfter:
      " — so you always know where you stand, without spreadsheets or manual math.",
  },

  valueProps: {
    sectionLabel: "Why FI-532",
    headingNormal: "Managing money together is hard.",
    headingColored: "We make it simple.",
    description:
      "Three reasons households lose track of their money — and exactly how FI-532 fixes each one.",
    problemTag: "The problem",
    solutionTag: "How we fix it",
    items: [
      {
        problem: "Money disappears every month and you can't explain where it went.",
        solution:
          "FI-532 sorts every transaction into your 50/30/20 split automatically — see exactly where each dollar goes, in real time. No spreadsheets, no guessing.",
      },
      {
        problem: "Splitting costs with your partner or roommates turns into a guessing game.",
        solution:
          "Share one household, split expenses, and settle up in seconds. Everyone sees the same numbers — no more awkward 'who paid for what' math.",
      },
      {
        problem: "Forgotten bills and creeping subscriptions quietly drain your savings.",
        solution:
          "Track every recurring bill, get smart reminders before due dates, and protect your 20% savings goal — nothing slips through the cracks.",
      },
    ],
    ctaNote: "Start free — no credit card needed.",
  },

  appShowcase: {
    sectionLabel: "The App",
    headingLine1: "Every dollar.",
    headingColored: "Every decision.",
    headingLine3: "In one place.",
    description:
      "FI-532 brings your entire financial picture into a single, beautifully designed workspace.",
    screens: [
      {
        alt: "FI-532 Transactions screen",
        title: "Every transaction, accounted for",
        desc: "Log income, expenses, and transfers instantly. Filter by date, category, or type. Your spending story told clearly.",
      },
      {
        alt: "FI-532 Home dashboard",
        title: "Your 50/30/20 dashboard",
        desc: "See your needs, wants, and savings at a glance. Watch the budget meter move as you spend — in real time.",
      },
      {
        alt: "FI-532 Recurring bills & subscriptions",
        title: "Never miss a bill again",
        desc: "All recurring expenses in one place — rent, subscriptions, utilities. Mark as paid, auto-create transactions.",
      },
    ],
  },

  features: {
    sectionLabel: "Features",
    headingNormal: "Everything you need.",
    headingColored: "Nothing you don't.",
    description:
      "A full suite of budgeting tools designed around how real households think about money — simple, collaborative, and always in sync.",
    items: [
      {
        title: "Budget Dashboard",
        description:
          "Your 50/30/20 breakdown visualized. Navigate months, compare periods, and adjust your budget rule at any time.",
      },
      {
        title: "Transaction Tracking",
        description:
          "Log every dollar — income, expenses, transfers. Filter by category, date, or type instantly.",
      },
      {
        title: "Recurring Bills",
        description:
          "Never miss a payment. Track due dates, mark bills paid, and auto-generate transactions from templates.",
      },
      {
        title: "Household Collaboration",
        description:
          "Invite family members, split expenses, and settle up balances. Real-time shared visibility for the whole household.",
      },
      {
        title: "AI Financial Reports",
        description:
          "Chat-style insights about your spending patterns. Understand your money in plain language, powered by AI.",
      },
      {
        title: "Smart Reminders",
        description:
          "Automated bill reminders so nothing slips through the cracks. Test notifications to confirm everything works.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "How It Works",
    headingNormal: "Up and running",
    headingColored: "in minutes.",
    description:
      "No spreadsheets. No complicated setup. Just a clean workspace that works the way you think about money.",
    steps: [
      {
        title: "Create Your Account",
        description:
          "Sign up securely with email. Your data is protected with enterprise-grade authentication through Clerk.",
      },
      {
        title: "Set Up Your Household",
        description:
          "Configure your currency, timezone, and budget rule. Choose your 50/30/20 split — or customize it to match your goals.",
      },
      {
        title: "Track Everything",
        description:
          "Log transactions, set up recurring bills, and categorize your spending. Your dashboard updates in real time.",
      },
      {
        title: "Stay in Control",
        description:
          "Review monthly insights, get AI-powered reports, export your data, and collaborate with household members.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Real users",
    ratingSummary: "4.8 average rating from households on the App Store",
    headingNormal: "Households saving more.",
    headingColored: "Every month.",
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

  cta: {
    badge: "Free to download",
    headingNormal: "Take control of your",
    headingColored: "household finances.",
    description:
      "Start with the free plan today. Set up your 50/30/20 budget, track every dollar, and upgrade when you're ready.",
    trustItems: ["No credit card", "Free forever plan", "iOS App Store"],
    learnHow: "Learn how it works",
  },

  footer: {
    strategy: "Strategy",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    eula: "EULA",
    copyright: (year) => `© ${year} FI-532. All rights reserved.`,
  },
};
