import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Phone, Mail, MapPin, MessageSquare, Shield, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

// ==================== 1. CONTACT PAGE ====================
export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '', subject: 'Architecture Consultation' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Contact Enterprise Engineering & Solutions Desk"
        description="Connect directly with our Principal Systems Architects, Capital Markets team, and global solutions desks in SF, NYC, London, Zurich, and Singapore."
      />
      <PageHero
        breadcrumbs={[{ label: 'Contact' }]}
        kicker="Direct Enterprise Inquiries"
        title="Connect Directly with Our Principal Engineering Desk"
        subtitle="No outsourced call centers or generic sales scripts. Speak directly with a Principal Systems Architect about your infrastructure sizing."
        metricBadge={{
          value: '< 2 Hours',
          label: 'Guaranteed Executive Response Time'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 lg:p-10 rounded-3xl bg-slate-900/50 border border-slate-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Dispatched</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. An assigned solutions architect has received your technical brief and will respond within two hours.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto text-xs text-left space-y-1">
                    <div className="text-slate-400">Reference: <span className="font-mono text-white">HEX-INQ-2026-981</span></div>
                    <div className="text-slate-400">Direct WhatsApp Hotline: <span className="font-mono text-emerald-400">+1 (415) 890-4211</span></div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">Send a Technical Inquiry</h3>
                    <p className="text-xs text-slate-400">Protected under mutual corporate non-disclosure.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Enterprises Ltd."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Focus</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option>Architecture Consultation & Demo</option>
                        <option>Capital Markets & HFT Engine</option>
                        <option>Sovereign Cloud & HIPAA Compliance</option>
                        <option>Pricing, MSA & Procurement</option>
                        <option>Security Vulnerability Disclosure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Technical Workload Description</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your cluster size, current cloud providers, and primary latency or compliance constraints..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Encrypted with 256-bit AES TLS</span>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow"
                    >
                      <span>Submit Technical Docket</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Hotline & Global Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-indigo-400 uppercase">Direct Executive Phone Desks</span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Americas (San Francisco HQ):</span>
                  <span className="font-mono text-white font-semibold">+1 (415) 890-4200</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Capital Markets (New York):</span>
                  <span className="font-mono text-white font-semibold">+1 (212) 650-8900</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">EMEA Desk (London):</span>
                  <span className="font-mono text-white font-semibold">+44 20 7946 0912</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Swiss Lab (Zurich):</span>
                  <span className="font-mono text-white font-semibold">+41 44 215 3800</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase">Direct WhatsApp Channel</span>
                <div className="text-sm font-bold text-white mt-0.5">Urgent Incident Hotline</div>
                <div className="text-xs text-slate-400">+1 (415) 890-4211</div>
              </div>
              <a
                href="https://wa.me/14158904211"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open WhatsApp</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-300">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Cryptographic Public Key</span>
              <div className="font-mono text-[10px] text-sky-400 break-all p-2 rounded bg-slate-950 border border-slate-800">
                PGP FINGERPRINT: 4B89 21EF 09A4 C891 7622 E041 8933 BF91 2289 4401
              </div>
              <p className="text-[11px] text-slate-400">For encrypted whistleblower security vulnerability disclosures.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 2. REQUEST CONSULTATION (Multi-Step Form) ====================
export const RequestConsultationPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    nodes: '500 - 2,500 Nodes',
    cloud: 'Multi-Cloud (AWS + GCP/Azure)',
    timeline: 'Within 30 Days',
    budget: '$50k - $200k / year'
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Request Enterprise Architecture Consultation"
        description="Configure workload parameters, cloud topology, and node scale for an in-depth technical sizing review."
      />
      <PageHero
        breadcrumbs={[{ label: 'Request Consultation' }]}
        kicker="Workload Sizing & RFQ"
        title="Request a Custom Enterprise Architecture Sizing"
        subtitle="Complete our 3-step technical assessment to receive a customized multi-cloud topology sizing and formal SLA proposal."
        metricBadge={{
          value: '48 Hours',
          label: 'Formal Architecture Dossier Delivery'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-6">
          <div className="p-8 lg:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-slate-800">
              <span className="text-indigo-400 font-semibold uppercase">Step 0{step} of 03</span>
              <span>{step === 1 ? 'Organization Details' : step === 2 ? 'Infrastructure Footprint' : 'Confirmed'}</span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Organization & Stakeholders</h3>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Enterprise Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => { if (formData.name && formData.email) setStep(2); }}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <span>Proceed to Infrastructure Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Infrastructure Sizing Scope</h3>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Managed Nodes Footprint</label>
                  <select
                    value={formData.nodes}
                    onChange={(e) => setFormData({ ...formData, nodes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option>100 - 500 Nodes</option>
                    <option>500 - 2,500 Nodes</option>
                    <option>2,500 - 10,000 Nodes</option>
                    <option>10,000+ Nodes (Hyperscale)</option>
                    <option>On-Premises Bare Metal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Primary Cloud Environment</label>
                  <select
                    value={formData.cloud}
                    onChange={(e) => setFormData({ ...formData, cloud: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option>Multi-Cloud (AWS + GCP/Azure)</option>
                    <option>Amazon Web Services Dedicated</option>
                    <option>Google Cloud Platform</option>
                    <option>Microsoft Azure</option>
                    <option>Equinix Colocation / Bare Metal</option>
                  </select>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => {
                      setStep(3);
                      try { confetti({ particleCount: 60, spread: 60 }); } catch {}
                    }}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <span>Generate Sizing Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sizing Request Dispatched</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our systems engineering team is preparing a custom multi-cloud topology sizing for <span className="text-white">{formData.company}</span>.
                </p>
                <div className="pt-4">
                  <Link
                    href="/thank-you"
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs inline-flex items-center gap-2"
                  >
                    <span>View Confirmation Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 3. THANK YOU PAGE ====================
export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Thank You - HEXBYTE"
        description="Your inquiry has been successfully recorded. Review next steps for technical onboarding."
      />
      <PageHero
        breadcrumbs={[{ label: 'Confirmation' }]}
        kicker="Submission Complete"
        title="Thank You for Connecting with HEXBYTE"
        subtitle="Your request has been routed to our Principal Solutions Architecture team. Review next steps and technical resources below."
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold text-white">What Happens Next?</h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Our engineering team adheres to a strict 2-hour response invariant during standard market hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-indigo-400">Step 1</span>
              <h4 className="text-sm font-bold text-white">Architect Review</h4>
              <p className="text-xs text-slate-400">A Principal Systems Architect reviews your cloud topology and sizing parameters.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-sky-400">Step 2</span>
              <h4 className="text-sm font-bold text-white">Private Sandbox</h4>
              <p className="text-xs text-slate-400">We provision a dedicated 14-day isolated evaluation cluster with mock test traffic.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-emerald-400">Step 3</span>
              <h4 className="text-sm font-bold text-white">Executive Briefing</h4>
              <p className="text-xs text-slate-400">We present an audited benchmarking proposal and formal 99.999% SLA underwrite.</p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs inline-flex items-center gap-2"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
