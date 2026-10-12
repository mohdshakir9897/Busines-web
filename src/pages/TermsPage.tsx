import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Terms of Service & SLA Commitments"
        description="Master Services Agreement terms, 99.999% uptime warranties, and liability limitations for HEXBYTE customers."
      />

      <PageHero
        breadcrumbs={[{ label: 'Legal' }, { label: 'Terms of Service' }]}
        kicker="Master Services Agreement"
        title="Enterprise Terms of Service & SLA Warranties"
        subtitle="Last revised: October 1, 2026. Standard governing terms, contractual uptime warranties, and service credits."
      />

      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-sm text-slate-300 leading-relaxed">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
            <FileCheck className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-white mb-1">Contractual 99.999% Service Level Invariant</h3>
              <p className="text-xs text-slate-300">
                HEXBYTE provides underwritten financial credits for any verified platform disruption exceeding 5 minutes and 15 seconds across a calendar year.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Provision of Enterprise Services</h2>
            <p>
              HEXBYTE provides software licenses and cloud control plane services under an active Order Form. The customer retains all intellectual property rights, data ownership, and proprietary algorithm logic deployed atop the platform.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Uptime Guarantees and Service Credits</h2>
            <p>
              In the event that HEXBYTE fails to meet the specified Service Level Agreement (SLA), customer accounts are eligible for tier-based financial credits against the subsequent billing cycle as outlined in Schedule B of the Master Services Agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information Security & Audits</h2>
            <p>
              HEXBYTE maintains SOC2 Type II, ISO/IEC 27001:2022, and HIPAA compliance accreditations. Customers may request our annual third-party AICPA SOC3 report and audit dockets at any time under NDA.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Governing Law & Dispute Resolution</h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware or the Canton of Zurich, depending on the customer’s legal billing domicile, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
