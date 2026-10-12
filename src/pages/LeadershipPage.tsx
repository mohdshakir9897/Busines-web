import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { EXECUTIVE_TEAM, BOARD_ADVISORS } from '../data/teamData';
import { Award, Briefcase } from 'lucide-react';

interface LeadershipPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Executive Leadership & Board"
        description="Meet the distributed systems architects and enterprise infrastructure pioneers guiding HEXBYTE."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Leadership' }]}
        kicker="Executive Stewardship"
        title="Led by Distributed Systems Architects & Industry Pioneers"
        subtitle="Our leadership team brings decades of hyperscale experience from AWS, Google, Bell Labs, Salesforce, and Goldman Sachs."
      />

      {/* 1. Executive Team */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Executive Committee
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Executive Officers & Engineering Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVE_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-base text-indigo-300">
                      {member.avatarText}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <div className="text-xs text-indigo-400 font-medium">{member.role}</div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-slate-800/80">
                    {member.previous}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Board of Directors & Advisory Council */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1 block">
              Governance & Technical Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Board of Directors & Scientific Advisors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BOARD_ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-base text-sky-300">
                      {advisor.avatarText}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{advisor.name}</h3>
                      <div className="text-xs text-sky-400 font-medium">{advisor.role}</div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-slate-800">
                    {advisor.previous}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
