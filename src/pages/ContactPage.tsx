import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Mail, Phone, MessageSquare, Shield, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'wouter';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'Technical Architecture Consultation',
    workloadSize: '500 - 2,500 Nodes',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!form.name || !form.email || !form.company) return;
      setStep(2);
    } else {
      try {
        confetti({ particleCount: 60, spread: 60 });
      } catch {
        // ignore
      }
      setLocation('/thank-you');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Contact Enterprise Solutions & Advisory"
        description="Connect with Hexbyte Principal Systems Engineers, Capital Markets Advisory, or 24/7 Global NOC."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Contact Us' }]}
        kicker="Direct Enterprise Access"
        title="Engage Directly with Principal Systems Engineers"
        subtitle="Skip the sales discovery scripts. Speak with architects who design multi-cloud failover, eBPF kernel meshes, and deterministic financial systems."
        metricBadge={{ value: '< 15 Min', label: 'Average High-Severity Response' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form: Multi-step Enterprise Lead Capture */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                  Step 0{step} of 02
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {step === 1 ? 'Workload & Contact Coordinates' : 'Architecture Requirements'}
                </h3>
              </div>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Enterprise Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Direct Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option>Technical Architecture Consultation</option>
                      <option>Capital Markets High-Frequency Desk</option>
                      <option>Sovereign Cloud & Regulatory Compliance</option>
                      <option>Custom Enterprise Pricing & MSA Review</option>
                      <option>Security Due Diligence & SOC2 Audit</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Protected under mutual NDA</span>
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
                    >
                      <span>Continue to Step 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Current Managed Node Scale
                    </label>
                    <select
                      value={form.workloadSize}
                      onChange={(e) => setForm({ ...form, workloadSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option>Under 500 Nodes</option>
                      <option>500 - 2,500 Nodes</option>
                      <option>2,500 - 10,000 Nodes</option>
                      <option>10,000+ Nodes (Hyperscale)</option>
                      <option>Bare Metal / Sovereign Airgapped</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Architecture Context or Current Bottleneck
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share details on your current stack, latency objectives, or regulatory requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
                    >
                      <span>Submit Architecture Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Right Details: Direct Contact Desks & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Direct Hotline */}
          <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Hotline</span>
            </div>
            <h4 className="text-xl font-bold text-white">Instant Architect Chat</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with an on-duty Solutions Architect via WhatsApp for rapid latency evaluations and urgent escalation.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/14158904211"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                <span>Open WhatsApp (+1 415 890 4211)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Department Direct Desks */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h4 className="text-base font-bold text-white">Specialized Department Desks</h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="pb-3 border-b border-slate-800/80">
                <div className="text-indigo-400 font-semibold">Capital Markets & High-Frequency</div>
                <div className="font-mono text-slate-200 mt-0.5">markets@hexbyte.com</div>
                <div className="text-[11px] text-slate-400">NY4 / LD4 colocation inquiries</div>
              </div>

              <div className="pb-3 border-b border-slate-800/80">
                <div className="text-sky-400 font-semibold">Sovereign Cloud & Compliance Desk</div>
                <div className="font-mono text-slate-200 mt-0.5">sovereignty@hexbyte.com</div>
                <div className="text-[11px] text-slate-400">Zurich & European GDPR/DORA desk</div>
              </div>

              <div>
                <div className="text-emerald-400 font-semibold">Global Incident Response (24/7)</div>
                <div className="font-mono text-slate-200 mt-0.5">+1 (800) 582-7490 (Priority Code Required)</div>
                <div className="text-[11px] text-slate-400">P1 enterprise SLA response under 15 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
