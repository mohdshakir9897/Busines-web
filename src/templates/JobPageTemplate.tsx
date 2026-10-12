import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { JOBS_DETAILED } from '../data/jobsData';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { CheckCircle2, ArrowRight, MapPin, DollarSign, Briefcase, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const JobPageTemplate: React.FC = () => {
  const [, params] = useRoute('/careers/:slug');
  const job = JOBS_DETAILED.find(j => j.slug === params?.slug) || JOBS_DETAILED[0];

  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    linkedin: '',
    github: '',
    note: ''
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setApplied(true);
    try {
      confetti({ particleCount: 60, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title={`${job.title} | Careers`}
        description={job.summary}
        schemaType="JobPosting"
        schemaData={{
          title: job.title,
          description: job.summary,
          employmentType: 'FULL_TIME',
          hiringOrganization: { '@type': 'Corporation', name: 'HEXBYTE' }
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: job.department, href: '/careers' },
          { label: job.title }
        ]}
        kicker={`${job.department} · Open Role`}
        title={job.title}
        subtitle={job.summary}
      >
        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="font-mono font-medium">{job.salaryRange}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-sky-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>{job.experienceLevel}</span>
          </div>
        </div>
      </PageHero>

      {/* 2. Job Description & Responsibilities */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Primary Responsibilities
            </h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Required Qualifications
            </h2>
            <ul className="space-y-3">
              {job.qualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preferred Qualifications
            </h2>
            <ul className="space-y-3">
              {job.preferredQualifications.map((pref, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  <span>{pref}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white">
              Total Rewards & Benefits
            </h2>
            <ul className="space-y-2.5">
              {job.benefits.map((ben, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Direct Engineering Application
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Apply for this Role
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Our engineering team reviews all technical applications within 48 hours.
              </p>
            </div>

            {applied ? (
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs space-y-2">
                <div className="font-bold text-white text-sm">Application Received!</div>
                <p>
                  Thank you, <span className="text-white font-semibold">{form.name}</span>. A confirmation has been sent to <span className="font-mono text-white">{form.email}</span>.
                </p>
                <div className="text-[11px] text-emerald-400 pt-1">
                  Reference: HEX-CANDIDATE-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ada@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    LinkedIn or Personal URL
                  </label>
                  <input
                    type="url"
                    value={form.linkedin}
                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    GitHub / Portfolio / Research Link
                  </label>
                  <input
                    type="url"
                    value={form.github}
                    onChange={(e) => setForm({ ...form, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Brief Note or Technical Background
                  </label>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="Tell us about the hardest distributed systems problem you have solved..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-center">
              <Link href="/careers" className="text-xs text-slate-400 hover:text-white transition-colors">
                ← View all 6 open roles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
