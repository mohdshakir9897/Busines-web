import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Video, Calendar, Clock, User, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export const WebinarsPage: React.FC = () => {
  const [registeredWebinar, setRegisteredWebinar] = useState<string | null>(null);

  const upcomingWebinars = [
    {
      id: 'webinar-ebpf-summit',
      title: 'Architecting eBPF Data Meshes for 100M+ Daily Financial Transactions',
      date: 'Thursday, November 12, 2026',
      time: '10:00 AM PST / 1:00 PM EST / 6:00 PM GMT',
      speaker: 'Dr. Marcus Vance, Chief Architect',
      speakerBio: 'Former Linux Kernel Storage Subsystem Maintainer',
      duration: '45 min presentation + 15 min live Q&A',
      summary: 'Learn how to bypass Linux socket buffers, route multi-cloud events with deterministic sub-millisecond guarantees, and enforce sovereign compliance at the NIC layer.'
    },
    {
      id: 'webinar-gpu-orchestration',
      title: 'Eliminating GPU Pipeline Stalls in Distributed Foundation Model Inference',
      date: 'Wednesday, December 2, 2026',
      time: '11:00 AM PST / 2:00 PM EST',
      speaker: 'Elena Rostova, VP Platform Engineering',
      speakerBio: 'Ex-DeepMind Infrastructure Lead',
      duration: '50 min technical walkthrough + live code demo',
      summary: 'A code-level exploration of zero-copy RDMA tensor synchronization and how to prevent memory thrashing across multi-cloud GPU topologies.'
    }
  ];

  const onDemandSessions = [
    {
      title: 'Global Banking Core Migration: How Helios Bank Eliminated Cloud Latency',
      views: '4,820 engineers attended',
      duration: '48 minutes',
      topic: 'Fintech Infrastructure'
    },
    {
      title: 'Sovereign Cloud & HIPAA Compliance: The Novaris Health Architecture Briefing',
      views: '3,150 engineers attended',
      duration: '52 minutes',
      topic: 'Healthcare Security'
    },
    {
      title: 'Autonomous Multi-Cloud Failover: Zero-Downtime DR Drills in Production',
      views: '5,940 engineers attended',
      duration: '44 minutes',
      topic: 'Site Reliability Engineering'
    }
  ];

  const handleRegister = (id: string) => {
    setRegisteredWebinar(id);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Architecture Webinars & Live Technical Briefings"
        description="Join Hexbyte principal systems fellows for live architectural briefings, code teardowns, and interactive Q&A sessions on distributed computing."
      />

      <PageHero
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Webinars & Events' }]}
        kicker="Technical Briefings & Masterclasses"
        title="Enterprise Architecture Webinars & Live Masterclasses"
        subtitle="Interactive live sessions led by principal distributed systems fellows. No sales pitches — pure technical code walkthroughs and kernel teardowns."
        metricBadge={{
          value: 'Live Q&A',
          label: 'Direct Access to Principal Fellows'
        }}
      />

      {/* Upcoming Live Sessions */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Scheduled Live Broadcasts
            </span>
            <h2 className="text-2xl font-bold text-white">Upcoming Architecture Masterclasses</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => {
              const isRegistered = registeredWebinar === webinar.id;

              return (
                <div
                  key={webinar.id}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{webinar.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{webinar.time}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {webinar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {webinar.summary}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-mono font-bold text-indigo-300 text-xs">
                        MV
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{webinar.speaker}</div>
                        <div className="text-[11px] text-slate-400">{webinar.speakerBio}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    {isRegistered ? (
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Calendar Invite & Stream Key Dispatched</span>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-400 font-bold">CONFIRMED</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRegister(webinar.id)}
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Video className="w-4 h-4" />
                        <span>Reserve Virtual Seat & Calendar Invite</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* On-Demand Archive */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Archival Stream Repository
            </span>
            <h2 className="text-2xl font-bold text-white">Watch On-Demand Keynotes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onDemandSessions.map((session, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="text-indigo-400">{session.topic}</span>
                    <span>{session.duration}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {session.title}
                  </h4>
                  <div className="text-[11px] text-slate-500">{session.views}</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleRegister(`session-${idx}`)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Watch Recording (HD)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
