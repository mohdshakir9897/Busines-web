export interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
}

export const NAVIGATION_DATA = {
  services: [
    { name: 'Services Overview', href: '/services', description: 'Comprehensive suite of 8 autonomous cloud and data operations engines' },
    { name: 'Autonomous Data & Event Mesh', href: '/services/autonomous-event-mesh', description: 'Sub-millisecond real-time streaming and schema reconciliation' },
    { name: 'Multi-Cloud Fabric Orchestration', href: '/services/multi-cloud-orchestration', description: 'Zero-lockin control plane across AWS, GCP, and Azure' },
    { name: 'Zero-Trust Enterprise Security Engine', href: '/services/zero-trust-security', description: 'Cryptographic hardware-rooted identity & eBPF inspection' },
    { name: 'Intelligent Agent SRE & Ops Copilot', href: '/services/agentic-sre-copilot', description: 'Autonomous incident remediation & causal root-cause analysis' },
    { name: 'Edge Telemetry & IoT Fleet Mesh', href: '/services/edge-telemetry-mesh', description: 'Ultra-lightweight edge agent orchestration for industrial scale' },
    { name: 'Capital Markets High-Frequency Engine', href: '/services/high-frequency-engine', description: 'Microsecond deterministic computing for financial trading' },
    { name: 'Sovereign Cloud & Regulatory Shield', href: '/services/sovereign-compliance-shield', description: 'Cryptographic data residency fencing & automated auditor packs' },
    { name: 'Hyperscale AI & GPU Orchestrator', href: '/services/elastic-gpu-orchestrator', description: 'Maximize AI training throughput & eliminate GPU memory stalls' },
  ],
  industries: [
    { name: 'Industries Overview', href: '/industries', description: 'Tailored solutions engineered for regulated enterprise sectors' },
    { name: 'Global Banking & Capital Markets', href: '/industries/banking-capital-markets', description: 'Deterministic low-jitter transaction clearing and sovereign residency' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare-life-sciences', description: 'HIPAA-compliant genomic pipelines & clinical telemetry' },
    { name: 'Automated Supply Chain & Logistics', href: '/industries/supply-chain-logistics', description: 'Sub-second event synchronization from robotics to global freight' },
    { name: 'Hyperscale Enterprise SaaS & Media', href: '/industries/enterprise-saas-media', description: 'Multi-tenant cloud infrastructure scaling to 100M+ active users' },
  ],
  proof: [
    { name: 'Case Studies Directory', href: '/case-studies', description: 'Verified quantitative outcomes from Fortune 500 engineering teams' },
    { name: 'Featured: Helios Global Bank', href: '/case-studies/helios-global-bank', description: 'Eliminating cloud migration latency for 18M consumer accounts' },
    { name: 'Featured: Apex Global Logistics', href: '/case-studies/apex-global-logistics', description: 'Autonomous routing fleet telemetry for 4,200 distribution hubs' },
    { name: 'Featured: Novaris Integrated Health', href: '/case-studies/novaris-health', description: 'HIPAA-compliant patient analytics across 48 medical centers' },
    { name: 'Executive Testimonials', href: '/testimonials', description: 'Direct feedback from enterprise CISOs, CTOs, and Heads of Infra' },
    { name: 'Awards & Global Partners', href: '/awards-partners', description: 'Tier-1 technology alliances with AWS, Google Cloud, NVIDIA & Red Hat' },
  ],
  company: [
    { name: 'About Hexbyte', href: '/about', description: 'Our mission to eliminate infrastructure friction for global commerce' },
    { name: 'Executive Leadership', href: '/leadership', description: 'Led by distributed systems veterans and high-frequency engineers' },
    { name: 'Implementation Methodology', href: '/process', description: 'Our proven 4-phase rollout process to production in under 45 days' },
    { name: 'Life at Hexbyte & Culture', href: '/life-at-hexbyte', description: 'Async-first rhythm, written RFCs, and engineering rituals' },
    { name: 'Careers & Open Roles', href: '/careers', description: 'Join 240+ world-class distributed systems engineers worldwide', badge: '6 Roles' },
    { name: 'Global Offices', href: '/offices', description: 'Engineering centers in SF, NY, London, Zurich, and Singapore' },
  ],
  resources: [
    { name: 'Enterprise Resource Center', href: '/resources', description: 'Technical whitepapers, benchmarks, and reference architectures' },
    { name: 'Engineering Blog', href: '/blog', description: 'Deep-dives on eBPF, kernel bypass, and distributed consensus' },
    { name: 'The Autonomous Journal', href: '/newsletter', description: 'Bi-weekly engineering briefing delivered to 38,000+ architects' },
    { name: 'Contact & Architecture Desk', href: '/contact', description: 'Reach our solutions architects, WhatsApp hotline, and desks' },
  ]
};

export const ALL_SEARCHABLE_ITEMS = [
  ...NAVIGATION_DATA.services.map(i => ({ ...i, type: 'Service' })),
  ...NAVIGATION_DATA.industries.map(i => ({ ...i, type: 'Industry' })),
  ...NAVIGATION_DATA.proof.map(i => ({ ...i, type: 'Proof & Results' })),
  ...NAVIGATION_DATA.company.map(i => ({ ...i, type: 'Company' })),
  ...NAVIGATION_DATA.resources.map(i => ({ ...i, type: 'Resource' }))
];
