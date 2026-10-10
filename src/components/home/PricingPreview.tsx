import React, { useState } from 'react';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../../data/homeContent';

interface PricingPreviewProps {
  onOpenDemo: () => void;
}

export const PricingPreview: React.FC<PricingPreviewProps> = ({ onOpenDemo }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Transparent Enterprise Architecture Licensing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Predictable Node-Based Pricing Without Overage Penalties
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            All plans include our zero-latency eBPF telemetry mesh, automated multi-cloud failover, and hardware-backed cryptographic security.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                !annualBilling ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 ${
                annualBilling ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Contract</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-200 ${
                  plan.popular
                    ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-950/60 ring-1 ring-indigo-500/40'
                    : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-[11px] font-bold tracking-wider uppercase shadow">
                    Most Popular for Global Scale
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {plan.tier}
                    </span>
                    <span className="text-xs font-medium text-indigo-400">
                      {plan.specs.sla}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[38px]">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                        {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
                      </span>
                      {typeof price === 'number' && (
                        <span className="text-xs text-slate-400">/ cluster month</span>
                      )}
                    </div>
                    {typeof price === 'number' && (
                      <div className="text-[11px] text-slate-500 mt-1">
                        {annualBilling ? 'Billed annually with multi-region credits' : 'Billed monthly with no contract lock'}
                      </div>
                    )}
                  </div>

                  {/* Architecture Specs */}
                  <div className="py-4 space-y-2 border-b border-slate-800 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400">Compute Scope:</span>
                      <span className="font-medium text-white">{plan.specs.nodes}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400">Support Desk:</span>
                      <span className="font-medium text-white">{plan.specs.support}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-400">Compliance:</span>
                      <span className="font-medium text-emerald-400">{plan.specs.compliance}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Core Platform Invariants
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Procurement Notice */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-indigo-400" />
          <span>Require custom enterprise MSA terms, HIPAA BAA signing, or sovereign defense airgap licensing?</span>
          <button
            onClick={onOpenDemo}
            className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-2 ml-1"
          >
            Contact Global Procurement Desk
          </button>
        </div>
      </div>
    </section>
  );
};
