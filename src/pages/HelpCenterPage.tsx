import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { HelpCircle, Search, BookOpen, Terminal, Shield, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HelpCenterPage: React.FC = () => {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketPriority, setTicketPriority] = useState('P2 - Operational Invariant Question');

  const docSections = [
    {
      title: 'Quickstart & Cluster Bootstrapping',
      badge: 'Getting Started',
      items: [
        'Deploying the eBPF kernel daemon on Kubernetes',
        'Configuring active-active AWS & GCP route tables',
        'Bootstrapping cross-cloud TLS 1.3 mTLS tunnels',
        'Hexbyte CLI installation via Homebrew and APT'
      ]
    },
    {
      title: 'Telemetry & Schema Reconciliation',
      badge: 'Data Mesh',
      items: [
        'Handling dynamic Avro and Protobuf schema drift',
        'Streaming CDC connectors for PostgreSQL and Spanner',
        'Partition rebalancing under network partition splits',
        'Zero-copy memory mapped ring buffer tuning'
      ]
    },
    {
      title: 'Security, Encryption & Sovereign Fencing',
      badge: 'Zero-Trust',
      items: [
        'Enforcing GDPR Article 9 geographic data boundaries',
        'Hardware TPM 2.0 key attestation configuration',
        'Setting up SOC2 automated continuous compliance packs',
        'Configuring BYOK with AWS CloudHSM and HashiCorp Vault'
      ]
    },
    {
      title: 'Production Incident Triage & Runbooks',
      badge: 'Site Reliability',
      items: [
        'Autonomous failover diagnostics and rollback triggers',
        'Analyzing eBPF drop-packet counters with hexbyte-ctl',
        'Kernel panic mitigation runbook and fallback routing',
        'Escalating Sev-1 incidents to designated fellow architects'
      ]
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject) return;
    setTicketSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Help Center & Engineering Support Desk"
        description="Comprehensive technical documentation, cluster bootstrapping runbooks, kernel diagnostics, and 24/7 Tier-1 engineering support ticketing."
      />

      <PageHero
        breadcrumbs={[{ label: 'Support' }, { label: 'Help Center' }]}
        kicker="24/7 Global Engineering Desk"
        title="Hexbyte Architecture Documentation & Support Desk"
        subtitle="Search verified production runbooks, kernel configurations, and connect directly with our designated global SRE team."
        metricBadge={{
          value: '< 15 Min P1 SLA',
          label: 'Guaranteed Emergency Triage Response'
        }}
      />

      {/* Docs Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Technical Documentation Index
            </span>
            <h2 className="text-2xl font-bold text-white">Production Guides & Runbooks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                    {section.badge}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 hover:text-white transition-colors cursor-pointer group">
                      <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Ticket Dispatch */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Direct Engineering Hotline
              </span>
              <h3 className="text-2xl font-bold text-white">Open a Technical Support Docket</h3>
              <p className="text-xs text-slate-400">
                Every ticket is triaged by a staff-level systems engineer with direct access to our kernel maintainers.
              </p>
            </div>

            {ticketSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Support Ticket Dispatched: HEX-SUPP-2026-441</span>
                </div>
                <p>
                  Assigned to Senior Systems Engineer on duty. Initial diagnostic response guaranteed within SLA time limits.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Severity SLA *</label>
                    <select
                      value={ticketPriority}
                      onChange={(e) => setTicketPriority(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option>P1 - Critical Cluster Degradation (&lt; 15 min SLA)</option>
                      <option>P2 - Operational Invariant Question (&lt; 1 hr SLA)</option>
                      <option>P3 - Architecture RFC &amp; Sizing Review</option>
                      <option>P4 - General Documentation Request</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Cluster ID / Host *</label>
                    <input
                      type="text"
                      required
                      placeholder="cluster-us-east-prod-04"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Incident or Inquiry Summary *</label>
                  <input
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="Brief description of kernel logs, packet drops, or migration status..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct P1 Hotline: +1 (415) 890-4211
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Dispatch Support Docket</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
