import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { JOBS_DETAILED } from '../data/jobsData';
import { ArrowRight, MapPin, DollarSign, Shield, CheckCircle2 } from 'lucide-react';

export const CareersOverviewPage: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const departments = ['all', 'Core Infrastructure', 'Kernel & Systems Engineering', 'Customer Engineering', 'Site Reliability Engineering', 'Cybersecurity', 'Design & User Experience'];

  const filteredJobs = departmentFilter === 'all'
    ? JOBS_DETAILED
    : JOBS_DETAILED.filter(j => j.department === departmentFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Careers & Engineering Opportunities - HEXBYTE"
        description="Join 240+ distributed systems researchers and kernel developers building the future of autonomous cloud infrastructure."
        schemaType="JobPosting"
        schemaData={{
          hiringOrganization: 'HEXBYTE',
          jobLocationType: 'TELECOMMUTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Careers' }]}
        kicker="Join Our Engineering Collective"
        title="Solve the Hardest Problems in Distributed Systems"
        subtitle="We are hiring staff and principal systems engineers, Linux kernel developers, and solutions architects worldwide. Generous compensation, founding-grade equity, and remote-first autonomy."
        metricBadge={{
          value: '14 Open Roles',
          label: 'Across Core Systems, Kernel & AI'
        }}
      >
        <div className="flex items-center gap-4 pt-2">
          <Link
            href="/life-at-hexbyte"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>Read about Life at Hexbyte</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">100% Remote-First & Flexible Hubs</span>
        </div>
      </PageHero>

      {/* Filter by Department */}
      <section className="py-6 bg-slate-900/60 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setDepartmentFilter(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  departmentFilter === dept
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {dept === 'all' ? 'All Roles' : dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">
              Open Positions ({filteredJobs.length})
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Direct Engineering Review · No Automated Bots
            </span>
          </div>

          <div className="space-y-4">
            {filteredJobs.map(job => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-mono text-indigo-400 font-semibold">{job.department}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{job.type}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {job.title}
                  </h4>

                  <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                    <span className="text-emerald-400 font-semibold">{job.salaryRange}</span>
                    <span className="text-slate-600">·</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Role & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Interview Process */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Transparent Hiring
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Our 4-Stage Interview Process
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              No leetcode puzzle trick questions. Pure real-world systems architecture, code reviews, and domain collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Introductory Conversation', desc: '30-minute conversation with an engineering leader discussing background and career goals.' },
              { step: '02', title: 'Deep Systems Architecture', desc: '60-minute collaborative session whiteboarding a real-world distributed caching or telemetry problem.' },
              { step: '03', title: 'Practical Code Walkthrough', desc: 'Review real production PRs or discuss open-source projects you authored.' },
              { step: '04', title: 'Executive Offer & Culture Fit', desc: 'Meet founders and receive our comprehensive offer package within 48 hours.' }
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-mono font-extrabold text-sky-400 mb-2">{st.step}</div>
                <h5 className="text-sm font-bold text-white">{st.title}</h5>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Questions About Our Engineering Team?"
        subtitle="Reach out directly to our hiring team or check open roles above."
      />
    </div>
  );
};
