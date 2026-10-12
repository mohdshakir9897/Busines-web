import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Privacy Policy & Data Residency"
        description="Comprehensive privacy disclosures, GDPR Article 9 controls, CCPA rights, and sovereign data boundary commitments."
      />

      <PageHero
        breadcrumbs={[{ label: 'Legal' }, { label: 'Privacy Policy' }]}
        kicker="Legal & Compliance Framework"
        title="Enterprise Privacy Policy & Sovereign Commitments"
        subtitle="Last revised: October 1, 2026. How HEXBYTE collects, processes, and cryptographically isolates enterprise customer data."
      />

      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-sm text-slate-300 leading-relaxed">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-white mb-1">Our Core Privacy Invariant</h3>
              <p className="text-xs text-slate-300">
                HEXBYTE never sells, licenses, or aggregates customer operational telemetry for advertising. All inter-service telemetry is encrypted in transit via mutual TLS 1.3 and at rest using hardware TPM-backed keys.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Scope of Data Collection</h2>
            <p>
              This policy governs data processed through the HEXBYTE autonomous control plane, eBPF telemetry agents, and marketing web portals. We collect strictly necessary operational telemetry required to guarantee multi-cloud failover, anomaly detection, and SLA maintenance.
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs text-slate-400">
              <li>Kernel telemetry metrics (CPU utilization, TCP socket latencies, packet drop counters).</li>
              <li>Administrative account information (work email, organization name, role credentials).</li>
              <li>Audit trail logs required by regulatory compliance standards (SOC2, ISO 27001).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Sovereign Data Residency & GDPR Compliance</h2>
            <p>
              In accordance with Regulation (EU) 2016/679 (GDPR), HEXBYTE enforces strict sovereign data residency boundaries. Enterprise customer data origin in the European Union or Switzerland is processed exclusively on hardware enclaves physically located within approved EEA datacenters.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Third-Party Sub-Processors</h2>
            <p>
              HEXBYTE maintains a strictly vetted list of infrastructure sub-processors. All sub-processors are required to maintain SOC2 Type II certifications and sign Data Processing Agreements with Standard Contractual Clauses (SCCs).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Your Statutory Privacy Rights</h2>
            <p>
              Regardless of your jurisdiction, HEXBYTE provides enterprise customers with direct tools to exercise data access, rectification, portability, and deletion rights. To submit an administrative inquiry, contact our Data Protection Officer at <span className="text-white font-mono">dpo@hexbyte.com</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
