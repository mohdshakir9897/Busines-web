import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { LogoMarquee } from '../components/home/LogoMarquee';
import { StatsStrip } from '../components/home/StatsStrip';
import { ServicesBento } from '../components/home/ServicesBento';
import { HowItWorks } from '../components/home/HowItWorks';
import { IndustrySolutions } from '../components/home/IndustrySolutions';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AwardsCompliance } from '../components/home/AwardsCompliance';
import { PricingPreview } from '../components/home/PricingPreview';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';
import { SeoMetadata } from '../components/common/SeoMetadata';

interface HomePageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <>
      <SeoMetadata
        title="HEXBYTE - Enterprise Intelligent Cloud Platform"
        description="Autonomous data meshes, kernel-accelerated event fabrics, and sovereign multi-cloud orchestration for Fortune 500 enterprises."
      />
      {/* 1. Hero Carousel with Video/Animated Visuals & 4 Slides */}
      <HeroCarousel 
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />

      {/* 2. Client Logo Marquee */}
      <LogoMarquee />

      {/* 3. Executive Metrics Strip (Animated Counters) */}
      <StatsStrip />

      {/* 4. Core Capabilities / Services Bento Grid */}
      <ServicesBento 
        onOpenDemo={onOpenDemo}
      />

      {/* 5. Implementation Lifecycle (How It Works) */}
      <HowItWorks />

      {/* 6. Industry Solutions & Sovereign Frameworks */}
      <IndustrySolutions 
        onOpenDemo={onOpenDemo}
      />

      {/* 7. Quantified Case Studies Carousel */}
      <CaseStudiesSection 
        onOpenDemo={onOpenDemo}
      />

      {/* 8. Attributable Executive Testimonials */}
      <TestimonialsSection />

      {/* 9. Enterprise Awards & Independent Certifications */}
      <AwardsCompliance />

      {/* 10. Transparent Pricing Preview & Comparison */}
      <PricingPreview 
        onOpenDemo={onOpenDemo}
      />

      {/* 11. Comprehensive Due Diligence FAQ */}
      <FaqSection />

      {/* 12. Final High-Impact Enterprise CTA */}
      <FinalCta 
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </>
  );
};
