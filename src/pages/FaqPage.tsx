import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ChevronDown, Search, ShieldCheck, Terminal, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/homeContent';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const categories = ['All', 'Architecture', 'Security', 'Procurement', 'SLAs'];

  const extendedFaqs = [
    ...FAQ_ITEMS,
    {
      category: 'Procurement',
      question: 'How does enterprise procurement and vendor onboarding work?',
      answer: 'Hexbyte supports standard enterprise procurement cycles. We are an approved vendor on AWS Marketplace, Google Cloud Marketplace, and Microsoft Azure Marketplace, allowing you to draw down existing cloud commits (EDP, MACC) directly against Hexbyte licensing.'
    },
    {
      category: 'Architecture',
      question: 'Does Hexbyte require code refactoring or proprietary SDK integration?',
      answer: 'No. Hexbyte operates transparently at the kernel and network transport layer via Linux eBPF hooks. Your microservices communicate using standard HTTP/2, gRPC, and Kafka wire protocols without code alterations or proprietary SDK imports.'
    },
    {
      category: 'Security',
      question: 'What is the incident notification SLA under our SOC2 Type II commitment?',
      answer: 'In the event of an anomalous security telemetry trigger, our 24/7 Global Security Operations Center (GSOC) provides cryptographically signed incident briefs within 15 minutes, accompanied by full causal eBPF packet logs.'
    },
    {
      category: 'SLAs',
      question: 'What financial indemnification is provided for downtime?',
      answer: 'Our Tier-1 Hyperscale Master Services Agreement provides a 100% service fee credit for any calendar month where availability falls below 99.999%, backed by formal legal indemnity and dedicated standby failover hardware.'
    }
  ];

  const filteredFaqs = extendedFaqs.filter(item => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter(i => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Architecture FAQ & Technical Due Diligence"
        description="Detailed answers to questions regarding zero-trust architecture, multi-cloud mesh topologies, SOC2 compliance, and SLA guarantees."
      />

      <PageHero
        breadcrumbs={[{ label: 'Support' }, { label: 'FAQ' }]}
        kicker="Technical Due Diligence"
        title="Frequently Asked Architectural & Procurement Questions"
        subtitle="Detailed technical answers compiled by our Principal Engineers and Compliance Officers to accelerate your security reviews."
        metricBadge={{
          value: '100% Audited',
          label: 'Answers Backed by Cryptographic Evidence'
        }}
      >
        <div className="w-full max-w-xl pt-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, eBPF, compliance, latency, or SLAs..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      </PageHero>

      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-colors hover:border-slate-700"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                        {faq.category}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {faq.question}
                      </h4>
                    </div>
                    <div className={`p-2 rounded-lg bg-slate-800/60 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/30 border border-slate-800 text-slate-400 text-xs">
                No matching inquiries found for "{searchQuery}". Connect with our solutions architects directly via the Contact page.
              </div>
            )}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
