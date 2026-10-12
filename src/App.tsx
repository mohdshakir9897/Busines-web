/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'wouter';

// Layout & Global Components
import { Preloader } from './components/common/Preloader';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Modals & Overlays
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { ExitIntentModal } from './components/common/ExitIntentModal';
import { CookieConsent } from './components/common/CookieConsent';
import { DemoBookingModal } from './components/common/DemoBookingModal';
import { WhitepaperModal } from './components/common/WhitepaperModal';

// Core Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ProcessPage } from './pages/ProcessPage';
import { CareersOverviewPage } from './pages/CareersOverviewPage';
import { LifeAtPage } from './pages/LifeAtPage';
import { OfficesPage } from './pages/OfficesPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';

// Additional Company Pages
import { OurStoryPage, CulturePage, WhyUsPage } from './pages/CompanyPages';

// Conversion & Consulting Pages
import { RequestConsultationPage } from './pages/ContactPages';
import { PricingPage } from './pages/PricingPage';
import { QuotePage } from './pages/QuotePage';
import { FaqPage } from './pages/FaqPage';
import { HelpCenterPage } from './pages/HelpCenterPage';

// Services Pages & Category Hubs
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { CategoryHubPage } from './components/templates/CategoryHubPage';
import { ServicePageTemplate } from './components/templates/ServicePageTemplate';

// Industries
import { IndustriesOverviewPage } from './pages/IndustriesOverviewPage';
import { IndustryPageTemplate } from './components/templates/IndustryPageTemplate';

// Proof & Portfolio
import { PortfolioOverviewPage } from './pages/PortfolioOverviewPage';
import { ProjectPageTemplate } from './components/templates/ProjectPageTemplate';
import { CaseStudiesIndexPage } from './pages/CaseStudiesIndexPage';
import { CaseStudyPageTemplate } from './templates/CaseStudyPageTemplate';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AwardsPartnersPage } from './pages/AwardsPartnersPage';

// Insights & Resources
import { BlogOverviewPage } from './pages/BlogOverviewPage';
import { BlogPostPageTemplate } from './components/templates/BlogPostPageTemplate';
import { ResourcesPage } from './pages/ResourcesPage';
import { WhitepapersPage } from './pages/WhitepapersPage';
import { WebinarsPage } from './pages/WebinarsPage';
import { NewsletterPage } from './pages/NewsletterPage';

// Careers Detail
import { JobPageTemplate } from './components/templates/JobPageTemplate';

// Legal & System
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiesPage } from './pages/CookiesPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);
  const [location, setLocation] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  const handleNavigateFromSearch = (href: string) => {
    setIsSearchOpen(false);
    if (href.startsWith('#')) {
      if (location !== '/') {
        setLocation('/' + href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 0. Brand Preloader Intro */}
      <Preloader />

      {/* 1. Scroll Progress Bar */}
      <ScrollProgress />

      {/* 2. Platform Announcement Bar */}
      <AnnouncementBar onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)} />

      {/* 3. Mega-Menu Top Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Main Routed Content Area */}
      <main className="flex-1 flex flex-col">
        <Switch>
          {/* ==================== HOME ==================== */}
          <Route path="/">
            <HomePage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* ==================== COMPANY ==================== */}
          <Route path="/about">
            <AboutPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/leadership">
            <LeadershipPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/our-story">
            <OurStoryPage />
          </Route>

          <Route path="/culture">
            <CulturePage />
          </Route>

          <Route path="/process">
            <ProcessPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/why-us">
            <WhyUsPage />
          </Route>

          <Route path="/careers">
            <CareersOverviewPage />
          </Route>

          <Route path="/careers/:slug">
            <JobPageTemplate onOpenDemo={() => setIsDemoModalOpen(true)} />
          </Route>

          <Route path="/life-at-hexbyte">
            <LifeAtPage />
          </Route>

          <Route path="/life-at-synthex">
            <Redirect to="/life-at-hexbyte" />
          </Route>

          <Route path="/life-at-company">
            <Redirect to="/life-at-hexbyte" />
          </Route>

          <Route path="/offices">
            <OfficesPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* ==================== CONVERSION & CONSULTATION ==================== */}
          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/request-consultation">
            <RequestConsultationPage />
          </Route>

          <Route path="/thank-you">
            <ThankYouPage />
          </Route>

          <Route path="/pricing">
            <Redirect to="/request-consultation" />
          </Route>

          <Route path="/quote">
            <QuotePage />
          </Route>

          <Route path="/get-a-quote">
            <Redirect to="/quote" />
          </Route>

          <Route path="/book-a-demo">
            <Redirect to="/request-consultation" />
          </Route>

          <Route path="/faq">
            <FaqPage />
          </Route>

          <Route path="/help">
            <Redirect to="/faq" />
          </Route>

          <Route path="/help-center">
            <Redirect to="/faq" />
          </Route>

          {/* ==================== SERVICES & NESTED CATEGORIES ==================== */}
          <Route path="/services">
            <ServicesOverviewPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* Category Hubs: /services/web, /services/mobile, /services/ai, /services/data, /services/blockchain, /services/cloud, /services/other */}
          <Route path="/services/web">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/mobile">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/ai">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/data">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/blockchain">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/cloud">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/services/other">
            <CategoryHubPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* Nested Service Detail: /services/:category/:slug */}
          <Route path="/services/:category/:slug">
            <ServicePageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* Direct Service Slug: /services/:slug */}
          <Route path="/services/:slug">
            <ServicePageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* ==================== INDUSTRIES ==================== */}
          <Route path="/industries">
            <IndustriesOverviewPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/industries/:slug">
            <IndustryPageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* ==================== PORTFOLIO & PROOF ==================== */}
          <Route path="/portfolio">
            <PortfolioOverviewPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/portfolio/:slug">
            <ProjectPageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/case-studies">
            <CaseStudiesIndexPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/case-studies/:slug">
            <CaseStudyPageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/testimonials">
            <TestimonialsPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/awards-partners">
            <AwardsPartnersPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          {/* ==================== BLOG & INSIGHTS ==================== */}
          <Route path="/blog">
            <BlogOverviewPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/blog/:slug">
            <BlogPostPageTemplate 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/resources">
            <ResourcesPage 
              onOpenDemo={() => setIsDemoModalOpen(true)}
              onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            />
          </Route>

          <Route path="/whitepapers">
            <Redirect to="/resources" />
          </Route>

          <Route path="/whitepaper-download">
            <Redirect to="/resources" />
          </Route>

          <Route path="/webinars">
            <Redirect to="/resources" />
          </Route>

          <Route path="/newsletter">
            <NewsletterPage />
          </Route>

          {/* ==================== LEGAL & SYSTEM ==================== */}
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>

          <Route path="/terms">
            <TermsPage />
          </Route>

          <Route path="/cookies">
            <CookiesPage />
          </Route>

          <Route path="/disclaimer">
            <DisclaimerPage />
          </Route>

          {/* ==================== HIDDEN ADMIN ==================== */}
          <Route path="/admin">
            <AdminPage />
          </Route>

          {/* ==================== 404 FALLBACK ==================== */}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>

      {/* Enterprise Footer */}
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
