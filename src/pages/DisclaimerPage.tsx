import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Shield, AlertCircle, CheckCircle2 } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Legal Disclaimer & Benchmark Disclosures"
        description="Important disclosures regarding synthetic benchmark figures, capital markets deterministic SLAs, and regulatory safe harbor statements."
      />

      <PageHero
        breadcrumbs={[{ label: 'Legal' }, { label: 'Disclaimer' }]}
        kicker="Regulatory Compliance & Disclosures"
        title="Enterprise Benchmark & Regulatory Disclosures"
        subtitle="Last revised: October 1, 2026. Important caveats regarding synthetic latency benchmarks, forward-looking statements, and independent audit verifications."
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm">Regulatory Notice & Safe Harbor</div>
              <p className="mt-1 text-xs text-amber-300/90 leading-relaxed">
                The technical figures, throughput metrics, and latency percentiles presented across this platform represent audited production telemetry from benchmarked enterprise hardware. Individual network configurations, ISP cross-connects, and hypervisor allocations may introduce variability.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">1. Synthetic Benchmarking Methodology</h3>
            <p>
              Latency measurements under 1.2ms (median) and 4.2ms (P99) reflect dual-socket AMD EPYC 9654 servers interconnected via 100GbE RoCEv2 (RDMA over Converged Ethernet) with Linux kernel 6.8 and eBPF XDP drivers enabled. Workloads routed over public unoptimized internet backbones without dedicated Direct Connect or Cloud Interconnect fibers may experience additional transit delay governed by physics and third-party peering.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">2. High-Frequency Trading & Financial Regulatory Disclaimers</h3>
            <p>
              Hexbyte provides software infrastructure, orchestration layers, and kernel-level network telemetry primitives. Hexbyte is not a broker-dealer, registered investment adviser, clearing agency, or execution venue as defined under the US Securities Exchange Act of 1934 or MiFID II in the European Union. Deployment of our deterministic high-frequency engines within regulated trading venues requires customer-provided compliance gateways and exchange-specific conformance testing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">3. Sovereign Cloud & Data Boundary Warranties</h3>
            <p>
              While Hexbyte enforces cryptographic data residency fencing and automated export blocking, enterprise customers remain the designated Data Controller under GDPR Article 4(7) and HIPAA rules. Customers are responsible for properly tagging input telemetry streams with appropriate classification metadata prior to ingestion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">4. Intellectual Property & Third-Party Trademarks</h3>
            <p>
              All trademarks, service marks, logos, and brand names referenced on this site (including AWS, Google Cloud, Microsoft Azure, Linux, Gartner, Forrester, NVIDIA) are the registered property of their respective holders. Reference to third-party technologies does not imply endorsement or exclusive affiliation unless expressly noted under formal Partner Tiers.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
            For specialized regulatory inquiries or formal legal correspondence, contact legal@hexbyte.com.
          </div>
        </div>
      </section>
    </div>
  );
};
