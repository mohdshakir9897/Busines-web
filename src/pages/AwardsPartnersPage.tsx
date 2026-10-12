import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';

interface AwardsPartnersPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const AwardsPartnersPage: React.FC<AwardsPartnersPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const partners = [
    { name: 'Amazon Web Services', tier: 'Premier Tier Services Partner', focus: 'EKS, Graviton, and Financial Multi-Region Architecture' },
    { name: 'Google Cloud Platform', tier: 'Premier Cloud Partner', focus: 'GKE Autopilot, Vertex AI, and Cloud Spanner Mesh' },
    { name: 'Microsoft Azure', tier: 'Gold Cloud Platform Partner', focus: 'AKS Enclaves, Azure OpenAI Private Networks, ExpressRoute' },
    { name: 'NVIDIA Inception', tier: 'AI Supercomputing Alliance', focus: 'GPU Cluster Orchestration, TensorRT, and InfiniBand RDMA' },
    { name: 'Red Hat OpenShift', tier: 'Certified Cloud & Security Provider', focus: 'eBPF Kernel Probing on Red Hat Enterprise Linux' },
    { name: 'Equinix Metal', tier: 'Global Colocation Alliance', focus: 'Financial Exchange Colocation in NY4, LD4, and TY3' }
  ];

  const awards = [
    { title: 'Gartner Magic Quadrant Leader', category: 'Cloud Infrastructure Automation 2026', badge: 'LEADER' },
    { title: 'Forrester Wave Top Performer', category: 'Enterprise Distributed Data Mesh Platforms', badge: 'TOP RANK' },
    { title: 'SOC2 Type II & SOC3 Certified', category: 'Continuous AICPA Verified Auditing', badge: 'VERIFIED' },
    { title: 'ISO 27001 & ISO 27701 Certified', category: 'Information Security & Privacy Management', badge: 'ACCREDITED' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Alliances, Partners & Industry Accreditations"
        description="Global cloud technology alliances (AWS, GCP, NVIDIA, Red Hat) and independent analyst recognition."
        schemaType="Corporation"
        schemaData={{
          name: 'HEXBYTE Partnerships & Awards',
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Proof', href: '/portfolio' },
          { label: 'Alliances & Awards' }
        ]}
        kicker="Technology Alliances & Industry Recognition"
        title="Validated by Global Technology Alliances & Independent Analysts"
        subtitle="We partner closely with tier-1 cloud providers, semiconductor leaders, and standards bodies to deliver certified enterprise infrastructure."
        metricBadge={{
          value: 'Tier-1 Alliances',
          label: 'AWS, Google Cloud, Microsoft & NVIDIA'
        }}
      />

      {/* Global Technology Partners Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
              Strategic Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Global Technology Alliances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/60 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-2">
                    {partner.tier}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {partner.focus}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  <span>Joint Enterprise Architecture Validation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyst Recognition & Audits */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Analyst Reports & Compliance Audits
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Independent Industry Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-semibold">
                      {award.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {award.category}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Continuous 2026 Audit Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Integrate Hexbyte with Your Cloud Ecosystem"
        subtitle="Schedule an architectural consultation to review verified multi-cloud sizing models."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
