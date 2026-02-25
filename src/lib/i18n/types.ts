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

export interface FeatureItemTranslation {
  title: string;
  description: string;
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
    headlinePrefix: string;
    headlineColored: string;
    headlineSuffix: string;
    subCopy: string;
    statNeeds: string;
    statWants: string;
    statSavings: string;
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
      features: readonly [string, string, string, string, string, string, string, string];
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
    privacy: string;
    terms: string;
    eula: string;
    copyright: (year: number) => string;
  };
}
