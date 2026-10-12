import React from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { EXECUTIVE_TEAM, BOARD_ADVISORS } from '../data/teamData';
import { OFFICES_DATA } from '../data/officesData';
import { Shield, CheckCircle2, Globe, ArrowRight, Award, Clock, MapPin, Phone, Building, Users, Terminal } from 'lucide-react';

// ==================== 1. ABOUT PAGE ====================
export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="About Hexbyte - Enterprise Intelligent Cloud Platform"
        description="Our mission to eliminate distributed systems latency, vendor lock-in, and operational fragmentation for global enterprises."
      />
      <PageHero
        breadcrumbs={[{ label: 'About Hexbyte' }]}
        kicker="Corporate Overview"
        title="Engineering Mathematical Determinism for Global Commerce"
        subtitle="Hexbyte was founded by distributed systems veterans and Linux kernel researchers to solve a fundamental challenge: cloud infrastructure should be an invisible, autonomous commodity, not an operational bottleneck."
        metricBadge={{
          value: '140+ Deployments',
          label: 'Across Global Fortune 1000 Leaders'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-indigo-400 uppercase">Founding Mission</span>
            <h3 className="text-xl font-bold text-white">Zero Downtime by Design</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We reject the premise that cloud outages are unavoidable. By leveraging formal invariant proofs and eBPF kernel routing, our platform anticipates failure and reroutes traffic with sub-second determinism.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase">Global Scale</span>
            <h3 className="text-xl font-bold text-white">42 Cloud Regions</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operating across AWS, Google Cloud, Azure, and bare-metal datacenters, Hexbyte coordinates tens of millions of transactions every second with hardware-enforced sovereign data borders.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-sky-400 uppercase">Audit Verification</span>
            <h3 className="text-xl font-bold text-white">Independently Certified</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Annually audited under SOC2 Type II, ISO 27001, and HIPAA compliance benchmarks with continuous automated cryptographic evidence collection.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 2. LEADERSHIP PAGE ====================
export const LeadershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Executive Leadership & Technical Advisory Board"
        description="Meet the distributed systems researchers, kernel developers, and enterprise cloud veterans leading HEXBYTE."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Leadership' }]}
        kicker="Executive Team & Governance"
        title="Led by Distributed Systems & Kernel Pioneers"
        subtitle="Our leadership team pairs deep academic computer systems research with battle-tested experience scaling infrastructure at AWS, Bell Labs, Stripe, and Goldman Sachs."
        metricBadge={{
          value: '120+ Years',
          label: 'Combined Systems Engineering Experience'
        }}
      />

      {/* Executive Team */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-white mb-8">Executive Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVE_TEAM.map((exec, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-mono font-bold text-lg flex items-center justify-center mb-4">
                    {exec.avatarText}
                  </div>
                  <h4 className="text-xl font-bold text-white">{exec.name}</h4>
                  <div className="text-xs font-semibold text-indigo-400 mt-0.5">{exec.role}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">{exec.previous}</div>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Board Advisors */}
          <h3 className="text-xl font-bold text-white mt-16 mb-8">Technical & Governance Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BOARD_ADVISORS.map((adv, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-sky-600/20 text-sky-300 border border-sky-500/30 font-mono font-bold text-base flex items-center justify-center mb-4">
                  {adv.avatarText}
                </div>
                <h4 className="text-lg font-bold text-white">{adv.name}</h4>
                <div className="text-xs text-sky-400 font-semibold mt-0.5">{adv.role}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-1">{adv.previous}</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">{adv.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 3. OUR STORY PAGE ====================
export const OurStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Our Story & Founding Vision"
        description="The story of how Hexbyte was forged to eliminate cloud downtime and vendor lock-in."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Our Story' }]}
        kicker="Founding Chronology"
        title="The Journey to Autonomous Infrastructure"
        subtitle="How a frustration with cascading cloud outages sparked a research revolution in kernel-accelerated distributed consensus."
        metricBadge={{
          value: '2021 - 2026',
          label: '5 Years of Core Systems Breakthroughs'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-indigo-400 uppercase">Chapter 1</span>
            <h3 className="text-2xl font-bold text-white">The Sidecar Tax and the 2021 Cloud Meltdown</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              In late 2021, an outage at a major cloud provider knocked out payment systems for 40 million global shoppers. Our founders—then leading core infrastructure at tier-1 financial and cloud giants—witnessed how proxy sidecars and asynchronous replication amplified the cascade rather than mitigating it.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-800">
            <span className="text-xs font-mono text-sky-400 uppercase">Chapter 2</span>
            <h3 className="text-2xl font-bold text-white">Bypassing the Kernel with eBPF and Formal Proofs</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We assembled a team of Linux kernel maintainers and distributed systems researchers in Zurich and San Francisco. By pairing eBPF socket redirection with TLA+ verified invariant proofs, we eliminated the CPU overhead of proxy sidecars and achieved sub-microsecond consensus across cloud borders.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-800">
            <span className="text-xs font-mono text-emerald-400 uppercase">Chapter 3</span>
            <h3 className="text-2xl font-bold text-white">Underwriting Global Commerce Today</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Today, Hexbyte coordinates more than $42B in annual transaction volume, monitors 450,000+ industrial IoT edge endpoints, and defends 99.999% availability for the world's most critical financial and healthcare systems.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 4. CULTURE PAGE ====================
export const CulturePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Engineering Culture & Principles"
        description="Our core values: Mathematical Rigor, Zero Tech Debt, Blameless Transparency, and Craft Over Bureaucracy."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Culture' }]}
        kicker="Organizational Values"
        title="The Five Hexbyte Engineering Invariants"
        subtitle="We build high-stakes software that protects human health and financial integrity. Our culture reflects the rigor of the systems we underwrite."
        metricBadge={{
          value: '0 Compromises',
          label: 'On Architectural Rigor & Code Quality'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-indigo-400 uppercase">Invariant 01</span>
            <h3 className="text-xl font-bold text-white">Mathematical Rigor Over Intuition</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We do not hope distributed consensus works—we prove it using formal methods, TLA+ state verification, and multi-million iteration fuzzing before any code reaches production.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-sky-400 uppercase">Invariant 02</span>
            <h3 className="text-xl font-bold text-white">Zero Tolerated Technical Debt</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We never ship temporary hack workarounds that linger for years. Every pull request must be pristine, strictly typed, and backed by automated regression tests.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase">Invariant 03</span>
            <h3 className="text-xl font-bold text-white">Radical Blameless Transparency</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When incidents occur, we never blame individuals. We examine systemic architectural flaws, publish exhaustive public post-mortems, and automate corrective runbooks.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase">Invariant 04</span>
            <h3 className="text-xl font-bold text-white">Follow-the-Sun Autonomy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our engineers operate across San Francisco, London, Zurich, and Singapore. We communicate asynchronously with thorough technical RFCs rather than endless Zoom meetings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-purple-400 uppercase">Invariant 05</span>
            <h3 className="text-xl font-bold text-white">Craft Over Bureaucracy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineers make architectural decisions, not spreadsheet managers. We prioritize deep focused coding blocks over ceremonial status rituals.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 5. PROCESS PAGE ====================
export const ProcessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Implementation Process & Delivery Methodology"
        description="Our proven 4-phase deployment lifecycle: Discovery, Policy Codification, Live Mesh Orchestration, and Continuous Optimization."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Process' }]}
        kicker="Deployment Methodology"
        title="From Zero-State to Live Autonomous Production in Under 45 Days"
        subtitle="Deterministic deployment without application rewrites. Hexbyte installs via non-intrusive eBPF hooks with zero downtime."
        metricBadge={{
          value: '< 45 Days',
          label: 'Average Global Enterprise Go-Live'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {[
            { step: '01', title: 'System Discovery & Non-Intrusive eBPF Tap', desc: 'We deploy lightweight daemonsets that map existing service topologies, VPC peerings, and dependencies in under 30 minutes with zero code modifications.', deliverable: 'Live interactive dependency graph and latency heatmap' },
            { step: '02', title: 'Policy-as-Code & Invariant Definition', desc: 'Codify governance rules, sovereign data residency boundaries, and SLA thresholds into declarative YAML manifests verified against automated linters.', deliverable: 'Auditable compliance matrix and automated enforcement webhooks' },
            { step: '03', title: 'Shadow Routing & Chaos Testing', desc: 'We mirror production traffic in shadow mode, testing regional cloud blackouts and spot instance preemption without impacting real end users.', deliverable: 'Verified zero-loss failover report certified by principal architects' },
            { step: '04', title: 'Live Autonomous Cutover & 24/7 War Room', desc: 'Active-active traffic routing is engaged across multi-cloud regions backed by our dedicated solutions war-room engineers.', deliverable: 'Enforceable financial penalty-backed 99.999% SLA certificate' }
          ].map((phase, idx) => (
            <div key={idx} className="p-8 lg:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2 text-4xl lg:text-5xl font-mono font-extrabold text-sky-400">
                {phase.step}
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{phase.desc}</p>
              </div>
              <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Phase Deliverable</span>
                <span className="font-semibold text-white">{phase.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 6. OFFICES PAGE ====================
export const OfficesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Global Offices & Engineering Labs"
        description="Hexbyte operates research labs and commercial offices in San Francisco, New York, London, Zurich, and Singapore."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Offices' }]}
        kicker="Global Footprint"
        title="Five Global Hubs Across Three Continents"
        subtitle="Our distributed engineering centers maintain 24/7 follow-the-sun monitoring for mission-critical client infrastructure worldwide."
        metricBadge={{
          value: '5 Hubs',
          label: 'SF, NYC, London, Zurich & Singapore'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFICES_DATA.map((office, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 font-semibold">{office.country}</span>
                  <span className="text-[10px] font-mono text-slate-500">{office.timezone.split('/')[1]}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                <div className="text-xs text-sky-400 font-medium mt-1">{office.region}</div>
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="font-mono text-white">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Hub Focus:</span> {office.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCta />
    </div>
  );
};

// ==================== 7. WHY US PAGE ====================
export const WhyUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Why Hexbyte - The Enterprise Advantage"
        description="Discover how Hexbyte outperforms legacy service meshes, DIY scripts, and traditional cloud consultancies."
      />
      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Why Hexbyte' }]}
        kicker="Comparative Advantage"
        title="Why Industry Leaders Standardize on Hexbyte"
        subtitle="Compare our kernel-accelerated, autonomous multi-cloud fabric against legacy proxy sidecars, DIY scripts, and generic consultancies."
        metricBadge={{
          value: '4.8x Velocity',
          label: '-65% Compute Spend with Zero Jitter'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-4 px-6 font-semibold uppercase">Feature / Capability</th>
                  <th className="py-4 px-6 font-bold text-white bg-indigo-950/60 uppercase">Hexbyte Platform</th>
                  <th className="py-4 px-6 font-semibold uppercase">Legacy Service Meshes</th>
                  <th className="py-4 px-6 font-semibold uppercase">DIY Scripts & Cloud Consultancies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {[
                  { feat: 'Runtime Architecture', syn: 'Kernel bypass eBPF (Zero Context Switching)', leg: 'Envoy proxy sidecar per pod (High memory tax)', diy: 'Fragile bash scripts and fragmented cronjobs' },
                  { feat: 'Median P99 Jitter', syn: '0.04µs (Nanosecond Predictable)', leg: '3.8ms to 12ms (Socket hop latency)', diy: 'Unpredictable (Variable network queuing)' },
                  { feat: 'Multi-Cloud Active-Active', syn: 'Sub-second Anycast failover with quorum', leg: 'Manual active-passive DNS cutover (15+ min)', diy: 'Hours of manual emergency triage' },
                  { feat: 'Audit Invariant Enforcement', syn: 'Hardware TPM 2.0 signed cryptograhic proof', leg: 'Basic text log files (Tamper vulnerable)', diy: 'Ad-hoc manual spreadsheet screenshots' },
                  { feat: 'Financial SLA Underwriting', syn: 'Penalty-backed 99.999% SLA guarantee', leg: 'Best-effort community open-source', diy: 'Zero financial liability backing' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40">
                    <td className="py-4 px-6 font-semibold text-white">{row.feat}</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold bg-indigo-950/30">{row.syn}</td>
                    <td className="py-4 px-6 text-slate-400">{row.leg}</td>
                    <td className="py-4 px-6 text-slate-500">{row.diy}</td>
                  </tr>
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

// ==================== 8. LIFE AT HEXBYTE ====================
export const LifeAtCompanyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Life at Hexbyte - Remote-First Systems Engineering"
        description="Explore how our distributed systems researchers and engineers work, collaborate, and innovate globally."
      />
      <PageHero
        breadcrumbs={[{ label: 'Careers', href: '/careers' }, { label: 'Life at Hexbyte' }]}
        kicker="Team & Workplace"
        title="Building the Future of Distributed Computing"
        subtitle="We are a remote-first, high-trust engineering collective focused on solving the hardest problems in systems architecture."
        metricBadge={{
          value: '100% Remote-First',
          label: 'With Annual In-Person Engineering Summits'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-indigo-400 uppercase">Work Freedom</span>
            <h3 className="text-xl font-bold text-white">Asynchronous By Default</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We design our schedules around deep work. Decisions are thoroughly debated in detailed written proposals rather than rushed in crowded meetings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-sky-400 uppercase">Hardware & Setup</span>
            <h3 className="text-xl font-bold text-white">Top-Tier Workstations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every engineer receives maxed-out Apple Silicon workstations, mechanical keyboards of choice, and a $3,500 home office ergonomics stipend.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase">Continuous Learning</span>
            <h3 className="text-xl font-bold text-white">$5,000 Annual R&D Budget</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We fund international conference attendances (OSDI, SOSP, USENIX ATC), technical book allowances, and hardware lab experimentation.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
