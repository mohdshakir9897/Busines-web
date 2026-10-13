export interface LeadRecord {
  id: string;
  name: string;
  company: string;
  email: string;
  nodes: string;
  timeline: string;
  status: string;
  date: string;
  source?: string;
  notes?: string;
}

export interface SubscriberRecord {
  email: string;
  role: string;
  date: string;
}

const DEFAULT_LEADS: LeadRecord[] = [
  { id: 'LD-9021', name: 'Alexander Wright', company: 'Goldman Prime Services', email: 'a.wright@gs.com', nodes: '10,000+ Nodes', timeline: 'Immediate', status: 'Architect Assigned', date: '2026-10-10', source: 'Enterprise Consultation' },
  { id: 'LD-9020', name: 'Dr. Rebecca Stern', company: 'Mayo Research Network', email: 'stern.rebecca@mayo.edu', nodes: '2,500 - 10,000 Nodes', timeline: '30 Days', status: 'In Review', date: '2026-10-09', source: 'Quote Estimator' },
  { id: 'LD-9019', name: 'Kenji Sato', company: 'Tokyo Financial Exchange', email: 'sato.k@tfx.co.jp', nodes: '500 - 2,500 Nodes', timeline: 'Immediate', status: 'Briefing Queued', date: '2026-10-08', source: 'Demo Request' },
  { id: 'LD-9018', name: 'Claire Dubois', company: 'CMA CGM Logistics', email: 'c.dubois@cmacgm.fr', nodes: '10,000+ Nodes', timeline: '90 Days', status: 'Pilot Scheduled', date: '2026-10-07', source: 'Architecture Review' },
];

const DEFAULT_SUBSCRIBERS: SubscriberRecord[] = [
  { email: 'head.infra@vanguard.com', role: 'Head of Infrastructure', date: '2026-10-10' },
  { email: 'ciso@astrazene.com', role: 'CISO Office', date: '2026-10-09' },
  { email: 'dist.systems@stripe.com', role: 'Staff Systems Eng', date: '2026-10-08' },
  { email: 'platform@novaris.org', role: 'VP Platform Eng', date: '2026-10-07' },
];

export const getStoredLeads = (): LeadRecord[] => {
  try {
    const raw = localStorage.getItem('hexbyte_leads');
    if (!raw) return DEFAULT_LEADS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_LEADS;
  } catch {
    return DEFAULT_LEADS;
  }
};

export const saveLead = (lead: Omit<LeadRecord, 'id' | 'date' | 'status'> & { id?: string; date?: string; status?: string }): LeadRecord => {
  const existing = getStoredLeads();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newLead: LeadRecord = {
    id: lead.id || `HEX-LEAD-${randomSuffix}`,
    date: lead.date || new Date().toISOString().split('T')[0],
    status: lead.status || 'Architect Assigned',
    name: lead.name,
    company: lead.company,
    email: lead.email,
    nodes: lead.nodes || '1,000 - 5,000 Nodes',
    timeline: lead.timeline || 'Immediate',
    source: lead.source || 'Website Form',
    notes: lead.notes || '',
  };

  const updated = [newLead, ...existing];
  try {
    localStorage.setItem('hexbyte_leads', JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save lead', err);
  }
  return newLead;
};

export const getStoredSubscribers = (): SubscriberRecord[] => {
  try {
    const raw = localStorage.getItem('hexbyte_subscribers');
    if (!raw) return DEFAULT_SUBSCRIBERS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SUBSCRIBERS;
  } catch {
    return DEFAULT_SUBSCRIBERS;
  }
};

export const saveSubscriber = (email: string, role = 'Enterprise Subscriber'): SubscriberRecord => {
  const existing = getStoredSubscribers();
  const newSub: SubscriberRecord = {
    email,
    role,
    date: new Date().toISOString().split('T')[0],
  };

  const updated = [newSub, ...existing.filter(s => s.email !== email)];
  try {
    localStorage.setItem('hexbyte_subscribers', JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save subscriber', err);
  }
  return newSub;
};
