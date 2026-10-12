import React, { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { JOBS_DETAILED } from '../../data/jobsData';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, X, Mail, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JobPageTemplateProps {
  onOpenDemo?: () => void;
}

export const JobPageTemplate: React.FC<JobPageTemplateProps> = () => {
  const [, params] = useRoute('/careers/:slug');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', resumeUrl: '', note: '' });

  const slug = params?.slug || 'principal-distributed-systems-engineer';
  const job = JOBS_DETAILED.find(j => j.slug === slug) || JOBS_DETAILED[0];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={`${job.title} - Careers`}
        description={job.summary}
        schemaType="JobPosting"
        schemaData={{
          title: job.title,
          occupationalCategory: job.department,
          hiringOrganization: 'HEXBYTE',
          jobLocation: job.location,
          baseSalary: job.salaryRange
        }}
      />

      {/* 1. Job Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: job.department }
        ]}
        kicker={`${job.department} · ${job.type}`}
        title={job.title}
        subtitle={job.summary}
        metricBadge={{
          value: job.salaryRange.split('+')[0].trim(),
          label: 'Total Target Compensation'
        }}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => { setSubmitted(false); setApplyModalOpen(true); }}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/30"
          >
            <span>Apply for this Role</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono text-slate-400">
            Location: {job.location}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs font-mono text-emerald-400">
            {job.experienceLevel}
          </span>
        </div>
      </PageHero>

      {/* 2. Responsibilities & Requirements Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What You Will Accomplish
            </h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Core Qualifications
            </h2>
            <ul className="space-y-3">
              {job.qualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          {job.preferredQualifications && (
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Preferred & Advantageous Experience
              </h2>
              <ul className="space-y-3">
                {job.preferredQualifications.map((pref, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="text-slate-500 font-mono mt-0.5">•</span>
                    <span>{pref}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Comprehensive Benefits & Equity</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {job.benefits.map((ben, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  {ben}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={() => { setSubmitted(false); setApplyModalOpen(true); }}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-xl"
            >
              Submit Application for {job.title}
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {applyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setApplyModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl relative text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Application Received</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our engineering hiring committee reviews all direct submissions within 48 business hours.
                </p>
                <button
                  onClick={() => setApplyModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase text-indigo-400">Direct Engineering Hiring</span>
                  <h3 className="text-xl font-bold text-white mt-1">Apply: {job.title}</h3>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn or GitHub Profile / Resume URL *</label>
                  <input
                    type="url"
                    required
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Technical Highlight or Note (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Tell us about a challenging distributed systems or kernel project you led..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. Page CTA */}
      <PageCta
        title="Don't See Your Exact Role?"
        subtitle="We are always looking for exceptional distributed systems, kernel, and machine learning researchers. Drop us an open application."
      />
    </div>
  );
};
