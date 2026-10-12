export type Locale = "en" | "es";

// Headline split so one fragment can take the verde accent.
// Rendered as `${pre}<em>${em}</em>${post}` — include spaces in the strings.
export interface Headline {
  pre?: string;
  em: string;
  post?: string;
}

// White "callout" card floating over a phone (label / value / sub-line)
export interface StatCallout {
  k: string;
  v: string;
  s?: string;
}

export interface FeatureCardTranslation {
  headline: Headline;
  desc: string;
  alt: string;
}

export interface TitledTranslation {
  title: string;
  description: string;
}

export interface PillarTranslation {
  label: string;
  tagline: string;
  examples: string;
}

export interface TestimonialTranslation {
  role: string;
  text: string;
}

export interface Translations {
  nav: {
    method: string;
    features: string;
    pricing: string;
    faq: string;
    downloadApp: string;
  };
  hero: {
    headline: Headline;
    subCopy: string;
    trust: readonly [string, string, string];
    phoneAlt: string;
    sideLeftAlt: string;
    sideRightAlt: string;
    cardLeft: StatCallout;
    cardOwes: StatCallout;
  };
  proof: {
    items: readonly [TitledTranslation, TitledTranslation, TitledTranslation, TitledTranslation];
  };
  problems: {
    sectionLabel: string;
    headline: Headline;
    solutionTag: string;
    items: readonly [
      { problem: string; solution: string },
      { problem: string; solution: string },
      { problem: string; solution: string },
    ];
  };
  method: {
    sectionLabel: string;
    equation: string;
    tagline: string;
    description: string;
    incomeLabel: string;
    cardLabel: string;
    perMonth: string;
    pillars: readonly [PillarTranslation, PillarTranslation, PillarTranslation];
    customNote: string;
    // Calculator defaults — match the currency shown in the localized screenshots
    currency: "USD" | "EUR";
    numberLocale: string;
    defaultIncome: number;
    maxIncome: number;
  };
  features: {
    sectionLabel: string;
    headline: Headline;
    description: string;
    cards: {
      buckets: FeatureCardTranslation;
      together: FeatureCardTranslation;
      bills: FeatureCardTranslation;
      applepay: FeatureCardTranslation;
      voice: FeatureCardTranslation;
      assistant: FeatureCardTranslation;
      insights: FeatureCardTranslation;
    };
    callouts: {
      bucketsLabel: string;
      bucketsSegs: readonly [string, string, string];
      together: StatCallout;
      bills: StatCallout;
      applepayTitle: string;
      applepayBody: string;
      applepayNow: string;
      voiceQuote: string;
      assistantQuote: string;
      insights: StatCallout;
    };
    moreLabel: string;
    more: readonly [
      TitledTranslation,
      TitledTranslation,
      TitledTranslation,
      TitledTranslation,
      TitledTranslation,
      TitledTranslation,
    ];
  };
  howItWorks: {
    sectionLabel: string;
    headline: Headline;
    steps: readonly [TitledTranslation, TitledTranslation, TitledTranslation];
  };
  testimonials: {
    sectionLabel: string;
    headline: Headline;
    items: readonly [
      TestimonialTranslation,
      TestimonialTranslation,
      TestimonialTranslation,
    ];
  };
  pricing: {
    sectionLabel: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    monthly: string;
    annual: string;
    saveDiscountBadge: (pct: number) => string;
    mostPopular: string;
    freePlan: {
      name: string;
      period: string;
      description: string;
      features: readonly [string, string, string, string, string, string];
      cta: string;
    };
    proPlan: {
      name: string;
      description: string;
      features: readonly [string, string, string, string, string, string, string, string, string, string];
      perYear: string;
      perMonth: string;
      billedAnnually: (price: string) => string;
      saveVsMonthly: (amount: string) => string;
      crossedOutPrefix: string;
      crossedOutSuffix: string;
      switchToAnnual: (pct: number) => string;
      valueAnnual: (price: string) => string;
      valueMonthly: string;
      ctaAnnual: string;
      ctaMonthly: string;
    };
  };
  faq: {
    sectionLabel: string;
    headline: Headline;
    items: readonly { q: string; a: string }[];
    moreHelp: string;
  };
  cta: {
    headline: Headline;
    description: string;
    trustItems: readonly [string, string, string];
    qrLabel: string;
    qrAlt: string;
  };
  stickyCta: {
    text: string;
    button: string;
  };
  footer: {
    method: string;
    features: string;
    pricing: string;
    faq: string;
    contact: string;
    support: string;
    legal: string;
    copyright: (year: number) => string;
  };
}
