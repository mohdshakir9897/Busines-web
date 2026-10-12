import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/homeContent';

interface PricingPageProps {
  onOpenDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  const comparisonFeatures = [
    { category: 'Compute & Mesh Performance', items: [
      { name: 'Sustained Events Throughput', scale: '10M events/sec', sovereign: '50M events/sec', hyperscale: 'Unlimited' },
      { name: 'P99 Serialization Latency', scale: '< 1.8ms', sovereign: '< 0.8ms', hyperscale: '< 0.2ms (Deterministic)' },
      { name: 'Active Cloud Regions', scale: 'Up to 3 Regions', sovereign: 'Up to 12 Regions', hyperscale: 'Global Unbounded (42+ Regions)' },
      { name: 'Dedicated eBPF Kernel Rings', scale: 'Shared Isolation', sovereign: 'Hardware Pinning', hyperscale: 'Bare-Metal Direct Enclave' }
    ]},
    { category: 'Security, Sovereign Fencing & Compliance', items: [
      { name: 'SOC2 Type II & ISO 27001 Certification', scale: 'Included', sovereign: 'Included', hyperscale: 'Included' },
      { name: 'HIPAA BAA & Genomic Data Boundaries', scale: 'Optional Addon', sovereign: 'Included', hyperscale: 'Included' },
      { name: 'Automated Cryptographic Audit Proofs', scale: 'Daily Digests', sovereign: 'Continuous Streaming', hyperscale: 'Zero-Knowledge Real-Time' },
      { name: 'Hardware Security Module (HSM) BYOK', scale: 'No', sovereign: 'Yes (AWS CloudHSM, GCP)', hyperscale: 'Yes (Dedicated FIPS 140-2 Level 4)' }
    ]},
    { category: 'Enterprise SLA & Support', items: [
      { name: 'Availability SLA', scale: '99.95%', sovereign: '99.99%', hyperscale: '99.999% (Contractually Underwritten)' },
      { name: 'Named Solutions Architect', scale: 'No', sovereign: 'Designated Senior Architect', hyperscale: 'Dedicated Principal Fellow & Team' },
      { name: 'Emergency Incident P1 Response SLA', scale: '< 1 Hour', sovereign: '< 15 Minutes', hyperscale: '< 5 Minutes (Direct Hotline)' },
      { name: 'Custom Linux Kernel Driver Porting', scale: 'No', sovereign: 'Optional', hyperscale: 'Included in Master SLA' }
    ]}
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Transparent Enterprise Pricing & Sizing Tiers"
        description="Predictable subscription models without per-seat tax or egress lock-in. Scale Tier, Sovereign Tier, and Hyperscale Global."
      />

      <PageHero
        breadcrumbs={[{ label: 'Pricing' }]}
        kicker="Transparent Enterprise Licensing"
        title="Predictable Economics Engineered for Hyperscale Infrastructure"
        subtitle="No hidden egress penalties, no per-seat seat-tax, and no arbitrary telemetry spikes. Fixed mathematical predictability underwritten by enforceable SLAs."
        metricBadge={{
          value: '0% Egress Tax',
          label: 'Guaranteed Multi-Cloud Pricing Invariant'
        }}
      >
        <div className="flex flex-wrap items-center gap-4 pt-3">
          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual Billing <span className="text-emerald-400 font-mono text-[10px] ml-1">Save 20%</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quarterly / Monthly
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            {(['USD', 'EUR', 'GBP'] as const).map(curr => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  currency === curr ? 'bg-slate-800 text-indigo-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      {/* 3 Core Tiers */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const sym = currencySymbols[currency];
              const priceDisplay = plan.id === 'scale' 
                ? (billingCycle === 'annual' ? `${sym}4,800` : `${sym}6,000`)
                : plan.id === 'sovereign'
                ? (billingCycle === 'annual' ? `${sym}14,200` : `${sym}17,750`)
                : 'Custom Sizing';

              return (
                <div
                  key={plan.id}
                  className={`p-8 rounded-3xl flex flex-col justify-between transition-all relative ${
                    plan.popular
                      ? 'bg-slate-900/90 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10'
                      : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Most Selected for Production</span>
                    </div>
                  )}

                  <div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                        {plan.tier}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-slate-400 min-h-10 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="py-6 border-y border-slate-800/80 my-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-white tracking-tight">
                          {priceDisplay}
                        </span>
                        {plan.id !== 'hyperscale' && (
                          <span className="text-xs text-slate-400 font-mono">
                            / cluster / month
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {plan.id === 'hyperscale'
                          ? 'Bespoke annual MSA with guaranteed uptime indemnity'
                          : billingCycle === 'annual' ? 'Billed annually with multi-year rate lock' : 'Billed monthly with 30-day flexibility'}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                        Included Invariant Controls
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-800/80">
                    <button
                      onClick={onOpenDemo}
                      className={`w-full py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                        plan.popular
                          ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Detailed Specification Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Compare Enterprise Feature Enclaves
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every Hexbyte deployment operates with hardware-rooted cryptographic isolation and verifiable SLAs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-300 font-semibold">
                  <th className="p-4 sm:p-5 w-2/5">Capability / Sizing Specification</th>
                  <th className="p-4 sm:p-5 w-1/5 text-center">Scale Tier</th>
                  <th className="p-4 sm:p-5 w-1/5 text-center text-indigo-400">Sovereign Tier</th>
                  <th className="p-4 sm:p-5 w-1/5 text-center">Hyperscale Global</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-slate-900/30 border-b border-slate-800/80">
                      <td colSpan={4} className="p-3.5 px-5 font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="border-b border-slate-800/50 hover:bg-slate-900/20">
                        <td className="p-4 sm:p-5 font-medium text-slate-200">
                          {item.name}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-slate-400 font-mono">
                          {item.scale}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-white font-mono font-medium bg-indigo-500/5">
                          {item.sovereign}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-emerald-400 font-mono font-semibold">
                          {item.hyperscale}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
