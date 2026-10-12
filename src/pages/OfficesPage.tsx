import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { OFFICES_DATA } from '../data/officesData';
import { MapPin, Phone, Clock, Compass, Globe } from 'lucide-react';

interface OfficesPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const OfficesPage: React.FC<OfficesPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Global Offices & Datacenter Hubs"
        description="Connect with Hexbyte engineering and solutions hubs in San Francisco, New York, London, Zurich, and Singapore."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Offices' }]}
        kicker="Worldwide Network"
        title="Engineering Hubs Across Major Global Financial & Technology Centers"
        subtitle="Our distributed engineering centers maintain 24/7 global coverage, ensuring direct engineering access across all major time zones."
        metricBadge={{ value: '5 Hubs', label: 'Global Centers of Excellence' }}
      />

      {/* 1. Global Office Cards Grid */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICES_DATA.map((office, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                      {office.country}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {office.timezone.split('/')[1].replace('_', ' ')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                    <div className="text-xs text-sky-400 font-medium mt-0.5">{office.region}</div>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-mono text-slate-200">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Primary Operational Focus:
                  </span>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {office.focus}
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
