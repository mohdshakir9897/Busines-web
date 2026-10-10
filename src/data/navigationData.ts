export interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
}

export const NAVIGATION_DATA = {
  services: [
    { name: 'Services Overview', href: '#services', description: 'Comprehensive suite of autonomous cloud and data operations' },
    { name: 'Autonomous Data & Event Mesh', href: '#services', description: 'Sub-millisecond real-time streaming and schema reconciliation' },
    { name: 'Multi-Cloud Fabric Orchestration', href: '#services', description: 'Zero-lockin control plane across AWS, GCP, and Azure' },
    { name: 'Zero-Trust Enterprise Security Engine', href: '#services', description: 'Cryptographic hardware-rooted identity & eBPF inspection' },
    { name: 'Intelligent Agent SRE & Ops Copilot', href: '#services', description: 'Autonomous incident remediation & causal root-cause analysis' },
    { name: 'Edge Telemetry & IoT Fleet Mesh', href: '#services', description: 'Ultra-lightweight edge agent orchestration for industrial scale' },
    { name: 'Capital Markets High-Frequency Engine', href: '#services', description: 'Microsecond deterministic computing for financial trading' },
  ],
  industries: [
    { name: 'Industries Overview', href: '#industries', description: 'Tailored solutions engineered for regulated enterprise sectors' },
    { name: 'Global Banking & Capital Markets', href: '#industries', description: 'Deterministic low-jitter transaction clearing and sovereign residency' },
    { name: 'Healthcare & Life Sciences', href: '#industries', description: 'HIPAA-compliant genomic pipelines & clinical telemetry' },
    { name: 'Automated Supply Chain & Logistics', href: '#industries', description: 'Sub-second event synchronization from robotics to global freight' },
    { name: 'Hyperscale Enterprise SaaS & Media', href: '#industries', description: 'Multi-tenant cloud infrastructure scaling to 100M+ active users' },
  ],
  proof: [
    { name: 'Case Studies', href: '#case-studies', description: 'Verified quantitative outcomes from Fortune 500 engineering teams' },
    { name: 'Featured: Helios Global Bank', href: '#case-studies', description: 'Eliminating cloud migration latency for 18M consumer accounts' },
    { name: 'Testimonials & Endorsements', href: '#testimonials', description: 'Direct feedback from enterprise CISOs, CTOs, and Heads of Infra' },
    { name: 'Global Alliance Partners', href: '#partners', description: 'Tier-1 technology alliances with AWS, Google Cloud, NVIDIA & Red Hat' },
  ],
  company: [
    { name: 'About Synthex', href: '#about', description: 'Our mission to eliminate infrastructure friction for global commerce' },
    { name: 'Our Story & Founding Vision', href: '#story', description: 'From Bell Labs roots to modern autonomous distributed computing' },
    { name: 'Executive Leadership', href: '#leadership', description: 'Led by distributed systems veterans and high-frequency engineers' },
    { name: 'Engineering Culture', href: '#culture', description: 'Mathematical rigor, radical transparency, and zero tech debt' },
    { name: 'Careers & Open Roles', href: '#careers', description: 'Join 240+ world-class distributed systems engineers worldwide', badge: '14 Roles' },
  ],
  resources: [
    { name: 'Enterprise Resource Center', href: '#resources', description: 'Technical whitepapers, benchmarks, and reference architectures' },
    { name: 'Engineering Blog', href: '#blog', description: 'Deep-dives on eBPF, kernel bypass, and distributed consensus' },
    { name: '2026 Enterprise Whitepaper', href: '#whitepaper', description: 'The Autonomous Infrastructure Maturity Model (Gated PDF)' },
    { name: 'Upcoming Technical Webinars', href: '#webinars', description: 'Live architectural deep dives with principal engineers' },
    { name: 'Frequently Asked Questions', href: '#faq', description: 'Common technical, security, pricing, and SLA inquiries' },
    { name: 'Developer Help Center & Docs', href: '#help', description: 'SDK references, Terraform modules, and CLI documentation' },
  ],
  conversion: [
    { name: 'Enterprise Pricing & Tiers', href: '#pricing', description: 'Transparent node-based tiers and sovereign deployment options' },
    { name: 'Schedule Live Technical Demo', href: '#demo', description: 'One-on-one architectural consultation with an enterprise solutions architect' },
    { name: 'Request Custom Enterprise Quote', href: '#quote', description: 'Tailored pricing model for complex multi-region deployments' },
    { name: 'Contact Enterprise Sales', href: '#contact', description: 'Reach our executive sales and capital markets advisory desks' },
  ]
};

export const ALL_SEARCHABLE_ITEMS = [
  ...NAVIGATION_DATA.services.map(i => ({ ...i, type: 'Service' })),
  ...NAVIGATION_DATA.industries.map(i => ({ ...i, type: 'Industry' })),
  ...NAVIGATION_DATA.proof.map(i => ({ ...i, type: 'Proof & Results' })),
  ...NAVIGATION_DATA.company.map(i => ({ ...i, type: 'Company' })),
  ...NAVIGATION_DATA.resources.map(i => ({ ...i, type: 'Resource' })),
  ...NAVIGATION_DATA.conversion.map(i => ({ ...i, type: 'Conversion' }))
];
