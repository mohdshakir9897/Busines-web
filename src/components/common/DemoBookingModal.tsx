import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Shield, Calendar, Building, Server, Mail, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cloudProvider: 'Multi-Cloud (AWS + GCP/Azure)',
    nodeCount: '500 - 2,500 Nodes',
    timeline: 'Within 30 Days',
    notes: ''
  });

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
      try {
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    }
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden p-8 relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step < 3 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-indigo-400 font-semibold uppercase tracking-wider">
                Step 0{step} of 02
              </span>
              <span>Enterprise Technical Consultation</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: step === 1 ? '50%' : '100%' }}
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Schedule a 1-on-1 Architecture Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Converse directly with a Principal Systems Engineer. No sales scripts.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Enterprise Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Current Infrastructure Footprint
                </label>
                <select
                  value={formData.nodeCount}
                  onChange={(e) => setFormData({ ...formData, nodeCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>100 - 500 Nodes</option>
                  <option>500 - 2,500 Nodes</option>
                  <option>2,500 - 10,000 Nodes</option>
                  <option>10,000+ Nodes (Hyperscale)</option>
                  <option>On-Premises Bare Metal / Airgapped</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA & SOC2 protected</span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Workload Constraints & Objectives
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Help our engineers prepare benchmark topology simulations for your call.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Cloud / Hosting Environment
                </label>
                <select
                  value={formData.cloudProvider}
                  onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>Multi-Cloud (AWS + GCP/Azure)</option>
                  <option>AWS Dedicated Clusters</option>
                  <option>Google Cloud Platform</option>
                  <option>Microsoft Azure Enterprise</option>
                  <option>Equinix / Private Data Centers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Evaluation Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>Immediate (Active incident / urgent latency issue)</option>
                  <option>Within 30 Days (Upcoming quarter migration)</option>
                  <option>Within 90 Days (Architectural planning)</option>
                  <option>General Research & Pricing Benchmarks</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Challenge / Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Seeking to reduce inter-region Kafka latency and automate multi-cloud active-active failover..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
              >
                <span>Confirm & Request Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Consultation Scheduled
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. A calendar invitation and preliminary architecture docket have been sent to <span className="text-white font-mono">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto text-xs text-left space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>Dossier Reference:</span>
                <span className="font-mono text-white">HEX-DEMO-2026-X89</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Assigned Architect:</span>
                <span className="text-white">Principal Systems Team</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Direct WhatsApp Hotline:</span>
                <span className="font-mono text-emerald-400">+1 (415) 890-4211</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
