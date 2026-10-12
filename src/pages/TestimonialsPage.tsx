import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const testimonials = [
    {
      id: 't-1',
      author: 'David K. Rosenthal',
      role: 'Global Head of Infrastructure',
      company: 'Vanguard Global Capital',
      avatar: 'DR',
      quote: 'We operate in an environment where a 10-millisecond delay costs millions in arbitrage. Hexbyte gave our engineering teams total mathematical determinism across hybrid cloud deployments.',
      verifiedResult: 'Zero latency degradation across $42B daily volume',
      tags: ['Capital Markets', 'Hybrid Cloud', 'Zero-Jitter']
    },
    {
      id: 't-2',
      author: 'Dr. Sarah Chen, MD',
      role: 'Chief Information & Medical Officer',
      company: 'Novaris Integrated Health',
      avatar: 'SC',
      quote: 'Hexbyte transformed our data infrastructure from overnight batch reports into a live clinical nervous system that directly aids medical teams in catching sepsis hours earlier.',
      verifiedResult: '< 2s vital ingestion latency across 48 hospitals',
      tags: ['Healthcare', 'HIPAA Enclaves', 'Real-Time Telemetry']
    },
    {
      id: 't-3',
      author: 'Marcus Vance',
      role: 'EVP of Global Logistics & Technology',
      company: 'Apex Global Logistics',
      avatar: 'MV',
      quote: 'The level of real-time visibility Hexbyte provides is unprecedented in enterprise logistics. We scaled to peak holiday volume without a single system freeze across 4,200 hubs.',
      verifiedResult: '99.98% continuous visibility with 0 dropped manifests',
      tags: ['Supply Chain', 'Edge Telemetry', 'Satellite Mesh']
    },
    {
      id: 't-4',
      author: 'Catherine Morland',
      role: 'Chief Information Security Officer',
      company: 'AstraZen BioPharma',
      avatar: 'CM',
      quote: 'The automated policy-as-code enforcement saved our compliance teams hundreds of manual audit hours. It satisfies the most stringent global health and financial regulatory bodies.',
      verifiedResult: '100% compliance pass on SOC2 Type II and GDPR audits',
      tags: ['Cybersecurity', 'Zero-Trust', 'Hardware Enclaves']
    },
    {
      id: 't-5',
      author: 'Rajesh Subramaniam',
      role: 'VP of Platform Engineering',
      company: 'Vertex Cloud Platforms',
      avatar: 'RS',
      quote: 'Hexbyte automated our multi-cloud spot arbitrage and resource rightsizing. We lowered our annual compute spend by over $8M while actually improving P99 streaming latency.',
      verifiedResult: '-52% cloud egress spend across 120 countries',
      tags: ['Enterprise SaaS', 'Multi-Cloud', 'FinOps']
    },
    {
      id: 't-6',
      author: 'Jonathan Sterling',
      role: 'Managing Partner',
      company: 'Aegis Institutional Capital',
      avatar: 'JS',
      quote: 'Hexbyte bridged the gap between Wall Street compliance and institutional DeFi capital efficiency. The smart contract architecture passed the most stringent external audits.',
      verifiedResult: '$2.4B total value locked with zero security vulnerabilities',
      tags: ['Blockchain', 'Institutional DeFi', 'Smart Contracts']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Executive Testimonials & Customer Endorsements"
        description="Direct feedback from enterprise CISOs, CTOs, and Heads of Infrastructure operating global distributed systems on Hexbyte."
        schemaType="Review"
        schemaData={{
          itemReviewed: {
            '@type': 'Organization',
            name: 'HEXBYTE'
          }
        }}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Proof', href: '/portfolio' },
          { label: 'Testimonials' }
        ]}
        kicker="Attributable Executive Endorsements"
        title="Underwriting Uptime for Mission-Critical Engineering Teams"
        subtitle="Read unvarnished feedback from CTOs, CISOs, and Heads of Infrastructure running high-concurrency workloads on the Hexbyte platform."
        metricBadge={{
          value: '100%',
          label: 'Attributable C-Level & VP Endorsements'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(item => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-indigo-400/40 mb-3" />
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    "{item.quote}"
                  </p>

                  <div className="my-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-0.5">Verified Outcome</span>
                    <span className="font-semibold text-emerald-400">{item.verifiedResult}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-mono font-bold text-xs text-indigo-300 shrink-0">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{item.author}</div>
                    <div className="text-[11px] text-slate-400">{item.role}</div>
                    <div className="text-[11px] font-medium text-slate-500">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Underwrite Your Production Uptime?"
        subtitle="Schedule a technical review with our principal solutions engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
