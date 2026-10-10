/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroCarousel } from './components/home/HeroCarousel';
import { LogoMarquee } from './components/home/LogoMarquee';
import { StatsStrip } from './components/home/StatsStrip';
import { ServicesBento } from './components/home/ServicesBento';
import { HowItWorks } from './components/home/HowItWorks';
import { IndustrySolutions } from './components/home/IndustrySolutions';
import { CaseStudiesSection } from './components/home/CaseStudiesSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { AwardsCompliance } from './components/home/AwardsCompliance';
import { PricingPreview } from './components/home/PricingPreview';
import { FaqSection } from './components/home/FaqSection';
import { FinalCta } from './components/home/FinalCta';

import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { ExitIntentModal } from './components/common/ExitIntentModal';
import { CookieConsent } from './components/common/CookieConsent';
import { DemoBookingModal } from './components/common/DemoBookingModal';
import { WhitepaperModal } from './components/common/WhitepaperModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);

  const handleNavigateFromSearch = (href: string) => {
    setIsSearchOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Scroll Progress Bar */}
      <ScrollProgress />

      {/* 2. Platform Announcement Bar */}
      <AnnouncementBar onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)} />

      {/* 3. Mega-Menu Navbar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* 4. Hero Carousel with Interactive 3D WebGL Scene & 4 Slides */}
        <HeroCarousel 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
        />

        {/* 5. Client Logo Marquee */}
        <LogoMarquee />

        {/* 6. Executive Metrics Strip (Animated Counters) */}
        <StatsStrip />

        {/* 7. Core Capabilities / Services Bento Grid */}
        <ServicesBento 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 8. Implementation Lifecycle (How It Works) */}
        <HowItWorks />

        {/* 9. Industry Solutions & Sovereign Frameworks */}
        <IndustrySolutions 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 10. Quantified Case Studies Carousel */}
        <CaseStudiesSection 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 11. Attributable Executive Testimonials */}
        <TestimonialsSection />

        {/* 12. Enterprise Awards & Independent Certifications */}
        <AwardsCompliance />

        {/* 13. Transparent Pricing Preview & Comparison */}
        <PricingPreview 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 14. Comprehensive Due Diligence FAQ */}
        <FaqSection />

        {/* 15. Final High-Impact Enterprise CTA */}
        <FinalCta 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
        />
      </main>

      {/* 16. Comprehensive Enterprise Footer */}
      <Footer />

      {/* Overlays & Modals */}
      <GlobalSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={handleNavigateFromSearch}
      />

      <ExitIntentModal 
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      <DemoBookingModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <WhitepaperModal 
        isOpen={isWhitepaperModalOpen}
        onClose={() => setIsWhitepaperModalOpen(false)}
      />

      <CookieConsent />
    </div>
  );
}
