import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Coffee, Laptop, Heart, Compass, BookOpen, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export const LifeAtPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Life at Hexbyte | Engineering Culture & Principles"
        description="Explore the culture, remote-first rhythm, internal hackathons, and engineering rituals at HEXBYTE."
      />

      <PageHero
        breadcrumbs={[
          { label: 'Company', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Life at Hexbyte' }
        ]}
        kicker="Culture & Rituals"
        title="Intellectual Rigor, Radical Autonomy, and Deep Focus"
        subtitle="We build tools that run the global economy. That responsibility shapes how we hire, collaborate, communicate, and reward our people."
        metricBadge={{ value: '100%', label: 'Engineering Focused' }}
      >
        <div className="pt-2">
          <Link
            href="/careers"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <span>Explore Open Roles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* 1. Cultural Tenets */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Our Operating Constitution
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              How We Work Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <Laptop className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-lg font-bold text-white">Async-First & Meeting Light</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                We favor deep, uninterrupted blocks of focus. Written RFCs and pull request teardowns replace endless Zoom syncs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <BookOpen className="w-6 h-6 text-sky-400 mb-3" />
              <h3 className="text-lg font-bold text-white">Written RFC Decision Culture</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Significant architectural choices begin with a written proposal circulated openly for peer critique. Truth over hierarchy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <Compass className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white">Quarterly Systems Hackathons</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Every quarter, the entire engineering team steps away from roadmap tickets to build high-risk, boundary-pushing prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Perks & Wellness */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 block">
              Total Support
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Benefits Designed for Lifelong Sustainability
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Heart className="w-5 h-5 text-rose-400 mb-2" />
              <h4 className="text-base font-bold text-white">100% Medical Coverage</h4>
              <p className="text-xs text-slate-400 mt-1">Full premium coverage for employees and dependents.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Coffee className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-base font-bold text-white">Flexible PTO</h4>
              <p className="text-xs text-slate-400 mt-1">Mandatory minimum 25 days annual leave encouraged by managers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Laptop className="w-5 h-5 text-sky-400 mb-2" />
              <h4 className="text-base font-bold text-white">$4,000 Setup Stipend</h4>
              <p className="text-xs text-slate-400 mt-1">Ergonomic chairs, 4K displays, and audio hardware of your choice.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Shield className="w-5 h-5 text-indigo-400 mb-2" />
              <h4 className="text-base font-bold text-white">Continuous Learning</h4>
              <p className="text-xs text-slate-400 mt-1">$5,000 annual budget for academic journals, books, and conferences.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build the Future of Enterprise Cloud?"
        subtitle="Explore our active engineering openings across distributed systems, kernel development, and security."
      />
    </div>
  );
};
