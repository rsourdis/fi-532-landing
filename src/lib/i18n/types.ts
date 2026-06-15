export type Locale = "en" | "es";

export interface PillarTranslation {
  label: string;
  tagline: string;
  description: string;
  examples: readonly [string, string, string, string];
}

export interface ScreenTranslation {
  alt: string;
  title: string;
  desc: string;
}

export interface ValuePropTranslation {
  problem: string;
  solution: string;
}

export interface FeatureItemTranslation {
  title: string;
  description: string;
}

export interface FeatureShowcaseRow {
  tag: string;
  title: string;
  desc: string;
  bullets: readonly [string, string, string];
  alt: string;
}

export interface StepTranslation {
  title: string;
  description: string;
}

export interface TestimonialTranslation {
  role: string;
  text: string;
}

export interface Translations {
  nav: {
    strategy: string;
    features: string;
    pricing: string;
    downloadApp: string;
  };
  hero: {
    available: string;
    hook: string;
    headlinePrefix: string;
    headlineColored: string;
    headlineSuffix: string;
    subCopy: string;
    statNeeds: string;
    statWants: string;
    statSavings: string;
    ratingValue: string;
    socialProof: string;
    scrollCue: string;
    badgeNeeds: string;
    badgeSavings: string;
    phoneAlt: string;
  };
  strategy: {
    sectionLabel: string;
    headingPart1: string;
    headingColored: string;
    description: string;
    pillars: readonly [PillarTranslation, PillarTranslation, PillarTranslation];
    barNeeds: string;
    barWants: string;
    barSavings: string;
    calloutBefore: string;
    calloutStrong: string;
    calloutAfter: string;
  };
  valueProps: {
    sectionLabel: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    problemTag: string;
    solutionTag: string;
    items: readonly [
      ValuePropTranslation,
      ValuePropTranslation,
      ValuePropTranslation,
    ];
    ctaNote: string;
  };
  appShowcase: {
    sectionLabel: string;
    headingLine1: string;
    headingColored: string;
    headingLine3: string;
    description: string;
    screens: readonly [ScreenTranslation, ScreenTranslation, ScreenTranslation];
  };
  features: {
    sectionLabel: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    items: readonly [
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
      FeatureItemTranslation,
    ];
  };
  featureShowcase: {
    sectionLabel: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    ctaLabel: string;
    rows: readonly [
      FeatureShowcaseRow,
      FeatureShowcaseRow,
      FeatureShowcaseRow,
      FeatureShowcaseRow,
      FeatureShowcaseRow,
      FeatureShowcaseRow,
    ];
  };
  howItWorks: {
    sectionLabel: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    steps: readonly [StepTranslation, StepTranslation, StepTranslation, StepTranslation];
  };
  testimonials: {
    sectionLabel: string;
    ratingSummary: string;
    headingNormal: string;
    headingColored: string;
    items: readonly [TestimonialTranslation, TestimonialTranslation, TestimonialTranslation];
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
  cta: {
    badge: string;
    headingNormal: string;
    headingColored: string;
    description: string;
    trustItems: readonly [string, string, string];
    learnHow: string;
  };
  footer: {
    strategy: string;
    features: string;
    pricing: string;
    contact: string;
    support: string;
    privacy: string;
    terms: string;
    eula: string;
    copyright: (year: number) => string;
  };
}
