export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaAction: string;
  secondaryCtaText: string;
  secondaryCtaAction: string;
  imageUrl: string;
  statLabel: string;
  statValue: string;
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  features: string[];
  ctaLabel: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyChallenge: string;
  synthexSolution: string;
  metric: string;
  metricLabel: string;
  complianceTags: string[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  results: {
    value: string;
    label: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  description: string;
  popular?: boolean;
  features: string[];
  specs: {
    sla: string;
    nodes: string;
    support: string;
    compliance: string;
  };
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface NavDropdownCategory {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  }[];
}
