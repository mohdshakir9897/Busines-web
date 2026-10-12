import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  const pastEditions = [
    { title: 'Issue #48: Why Kernel Bypass Outperforms Envoy Sidecars by 80%', date: 'October 2026', readTime: '6 min read' },
    { title: 'Issue #47: Designing Zero-Loss Multi-Cloud Active-Active Consensuses', date: 'September 2026', readTime: '8 min read' },
    { title: 'Issue #46: Sovereign Data Fencing under EU DORA and GDPR Article 9', date: 'August 2026', readTime: '5 min read' },
    { title: 'Issue #45: GPU Memory Fragmentation and TensorRT Quantization at Scale', date: 'July 2026', readTime: '7 min read' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="The Autonomous Enterprise Journal - Architecture Newsletter"
        description="Bi-weekly executive engineering briefs on distributed systems, eBPF, and multi-cloud resilience."
        schemaType="Periodical"
        schemaData={{
          name: 'The Autonomous Enterprise Journal',
          publisher: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Newsletter' }]}
        kicker="Bi-Weekly Engineering Brief"
        title="The Autonomous Enterprise Journal"
        subtitle="Curated by Hexbyte Principal Systems Engineers. Zero marketing fluff. Pure architecture analysis, peer benchmarks, and incident teardowns."
        metricBadge={{
          value: '42,000+',
          label: 'Subscribed Engineering Leaders'
        }}
      />

      {/* Subscription Card */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 lg:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              Subscribe to the Executive Edition
            </h2>

            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Delivered every second Tuesday at 06:00 UTC. One-click unsubscribe anytime. We strictly respect enterprise inbox privacy.
            </p>

            {subscribed ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <div className="font-bold text-white text-base">Subscription Confirmed</div>
                <p className="text-xs text-emerald-400/90">
                  Welcome to the journal. The latest edition and our 2026 Systems Dossier are on their way to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@enterprise.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 whitespace-nowrap shadow"
                  >
                    <span>Subscribe Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict zero-spam policy. GDPR & CAN-SPAM compliant.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Past Editions Archive */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Recent Publications
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Archived Journal Editions
            </h3>
          </div>

          <div className="space-y-4">
            {pastEditions.map((ed, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">{ed.date} · {ed.readTime}</span>
                  <h4 className="text-base font-bold text-white hover:text-indigo-300 transition-colors">
                    {ed.title}
                  </h4>
                </div>
                <BookOpen className="w-5 h-5 text-indigo-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
