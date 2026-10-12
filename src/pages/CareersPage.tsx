import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { JOBS_DETAILED } from '../data/jobsData';
import { MapPin, DollarSign, ArrowRight, Heart, Sparkles, Code2, Users } from 'lucide-react';
import { Link } from 'wouter';

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const departments = ['All', 'Core Infrastructure', 'Kernel & Systems Engineering', 'Customer Engineering', 'Site Reliability Engineering', 'Cybersecurity', 'Design & User Experience'];

  const filteredJobs = selectedDept === 'All'
    ? JOBS_DETAILED
    : JOBS_DETAILED.filter(j => j.department === selectedDept);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Careers & Engineering Opportunities"
        description="Join 240+ world-class distributed systems engineers building the autonomous enterprise cloud platform."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Careers' }]}
        kicker="Global Engineering Opportunities"
        title="Solve the Hardest Distributed Systems Problems on the Planet"
        subtitle="We are a team of systems researchers, kernel contributors, and infrastructure leaders engineering the autonomic nervous system for global enterprise computing."
        metricBadge={{ value: '6 Roles', label: 'Currently Open Globally' }}
      >
        <div className="pt-2">
          <Link
            href="/life-at-hexbyte"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
          >
            Learn more about Life at Hexbyte & Engineering Culture →
          </Link>
        </div>
      </PageHero>

      {/* 1. Why Hexbyte */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1 block">
              Why Join Hexbyte
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              An Engineering-First Culture with Real Ownership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <Code2 className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-base font-bold text-white">Zero Tech Debt Culture</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We believe in pristine software craftsmanship. No rushed band-aids. Systems are designed for 10-year durability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <DollarSign className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-white">Top 1% Compensation</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Competitive salary, substantial founding-grade equity, and annual refreshers benchmarked against top FAANG tiers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <Sparkles className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-base font-bold text-white">Distributed & Flexible</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Remote-first across North America, Europe, and Asia-Pacific, with world-class collaborative offices in SF, NY, London, and Zurich.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <Users className="w-6 h-6 text-sky-400 mb-3" />
              <h3 className="text-base font-bold text-white">Peer-Led Excellence</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Collaborate directly with authors of major distributed systems papers, Linux kernel contributors, and renowned SREs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Open Roles List */}
      <section id="roles" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
                Current Openings
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Explore Open Positions
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar max-w-full">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedDept === dept
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 block"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400">{job.experienceLevel}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <div className="flex items-center gap-6 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-slate-400 flex items-center justify-end gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-400 mt-1">
                      {job.salaryRange}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-indigo-600 text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Don't See Your Specific Discipline?"
        subtitle="We frequently create roles for exceptional distributed systems researchers, kernel programmers, and compilers specialists."
      />
    </div>
  );
};
