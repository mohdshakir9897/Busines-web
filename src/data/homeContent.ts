import { 
  HeroSlide, 
  ServiceItem, 
  IndustryItem, 
  CaseStudyItem, 
  TestimonialItem, 
  PricingPlan, 
  FaqItem 
} from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'datacenter-scale',
    badge: 'Enterprise Infrastructure',
    title: 'Autonomous Cloud Orchestration for Hyperscale Workloads',
    subtitle: 'Zero downtime. Sub-millisecond latency. Global multi-region sync.',
    description: 'Hexbyte coordinates hybrid and multi-cloud operations across 42 global regions with deterministic latency, self-healing runtime failover, and hardware-accelerated telemetry.',
    primaryCtaText: 'Talk to an Expert',
    primaryCtaAction: 'consultation',
    secondaryCtaText: 'Explore Architecture',
    secondaryCtaAction: 'architecture',
    imageUrl: '/src/assets/images/hero_enterprise_datacenter_1791612780894.jpg',
    statLabel: 'Operational Uptime SLA',
    statValue: '99.999%',
    accentColor: '#3B82F6'
  },
  {
    id: 'autonomous-ops',
    badge: 'Intelligent Operations',
    title: 'Unified Command & Autonomous Incident Remediation',
    subtitle: 'Resolve system degradation before customers experience impact.',
    description: 'Transform enterprise NOC and SRE teams with telemetry distillation, causal root-cause analysis, and automated safe runbook execution verified by formal invariant guarantees.',
    primaryCtaText: 'Request a Consultation',
    primaryCtaAction: 'consultation',
    secondaryCtaText: 'View Case Studies',
    secondaryCtaAction: 'cases',
    imageUrl: '/src/assets/images/hero_autonomous_operations_1791612800790.jpg',
    statLabel: 'Mean Time to Resolution (MTTR)',
    statValue: '-74%',
    accentColor: '#6366F1'
  },
  {
    id: 'fintech-security',
    badge: 'Capital Markets & Fintech',
    title: 'Deterministic Computing for High-Frequency Capital Markets',
    subtitle: 'Bank-grade compliance, microsecond order routing, and real-time risk.',
    description: 'Engineered for Tier-1 investment banks, hedge funds, and market makers requiring zero jitter, end-to-end cryptographic auditability, and SOC2 / ISO 27001 / FedRAMP compliance.',
    primaryCtaText: 'Talk to an Expert',
    primaryCtaAction: 'consultation',
    secondaryCtaText: 'Contact Capital Markets Team',
    secondaryCtaAction: 'consultation',
    imageUrl: '/src/assets/images/hero_fintech_security_1791612816960.jpg',
    statLabel: 'Annual Volume Cleared',
    statValue: '$42B+',
    accentColor: '#0EA5E9'
  },
  {
    id: 'global-logistics',
    badge: 'Supply Chain & Manufacturing',
    title: 'Synchronized Physical & Digital Supply Chain Mesh',
    subtitle: 'Predictive routing and real-time inventory telemetry at global scale.',
    description: 'Bridge physical warehouse robotics, automated conveyor routing, and global container tracking into a single unified event mesh with sub-second end-to-end synchronization.',
    primaryCtaText: 'Request a Consultation',
    primaryCtaAction: 'consultation',
    secondaryCtaText: 'Download Supply Report',
    secondaryCtaAction: 'resources',
    imageUrl: '/src/assets/images/hero_global_logistics_1791612830723.jpg',
    statLabel: 'Routing Efficiency Boost',
    statValue: '+38%',
    accentColor: '#10B981'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Vanguard Global', mark: 'VANGUARD', subtext: 'Asset Management' },
  { name: 'AstraZen BioTech', mark: 'ASTRAZEN', subtext: 'Pharmaceuticals' },
  { name: 'Novaris Health', mark: 'NOVARIS', subtext: 'Integrated Care' },
  { name: 'Apex Dynamics', mark: 'APEX DYNAMICS', subtext: 'Robotics & Hardware' },
  { name: 'Helios Capital', mark: 'HELIOS BANK', subtext: 'Digital Banking' },
  { name: 'Vertex Cloud', mark: 'VERTEX CLOUD', subtext: 'Multi-Tenant SaaS' },
  { name: 'Stratum Energy', mark: 'STRATUM', subtext: 'Grid Infrastructure' },
  { name: 'Kromer Logistics', mark: 'KROMER CORP', subtext: 'Global Freight' },
  { name: 'OmniPay Secure', mark: 'OMNIPAY', subtext: 'Payments Gateway' },
];

export const EXECUTIVE_STATS = [
  {
    value: '$42B+',
    label: 'Annual Transaction Volume',
    subtext: 'Processed across zero-jitter financial pipelines with verified cryptographic guarantees.'
  },
  {
    value: '99.999%',
    label: 'Platform Availability SLA',
    subtext: 'Underwritten by enforceable enterprise financial credits and multi-cloud auto-failover.'
  },
  {
    value: '4.8x',
    label: 'Operational Velocity Surge',
    subtext: 'Measured speedup in continuous deployment and infrastructure configuration lifecycles.'
  },
  {
    value: '140+',
    label: 'Fortune 1000 Deployments',
    subtext: 'Trusted by global engineering teams across North America, Europe, and Asia-Pacific.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'autonomous-pipelines',
    num: '01',
    title: 'Autonomous Data & Event Mesh',
    category: 'Data Platform',
    summary: 'High-throughput event streaming and data processing with sub-millisecond serialization.',
    description: 'Ingest petabyte-scale telemetry, transform schemas on the fly, and synchronize analytical warehouses without pipeline stalling or manual schema backfilling.',
    impactMetric: '< 1.2ms',
    impactLabel: 'Median Global Ingestion Latency',
    features: [
      'Self-healing partition rebalancing across hybrid clouds',
      'Continuous schema drift detection and automated remediation',
      'Cryptographic zero-loss transaction replay logs'
    ],
    ctaLabel: 'View Data Mesh Specs',
    iconName: 'Database'
  },
  {
    id: 'multi-cloud-orchestration',
    num: '02',
    title: 'Multi-Cloud Fabric Orchestration',
    category: 'Cloud Infrastructure',
    summary: 'Single control plane spanning AWS, Google Cloud, Azure, and on-premises bare metal.',
    description: 'Eliminate vendor lock-in with intelligent workload routing based on spot-pricing, latency proximity, and regional regulatory compliance constraints.',
    impactMetric: '-42%',
    impactLabel: 'Average Cloud Compute Spend Reduction',
    features: [
      'Dynamic spot instance arbitrage with instant fallback',
      'Automated geo-fenced sovereign data boundaries',
      'Unified Terraform and OpenTofu control plane'
    ],
    ctaLabel: 'Explore Cloud Fabric',
    iconName: 'Cloud'
  },
  {
    id: 'zero-trust-security',
    num: '03',
    title: 'Zero-Trust Enterprise Security Engine',
    category: 'Cybersecurity',
    summary: 'Hardware-rooted identity, continuous mutual TLS, and dynamic micro-segmentation.',
    description: 'Enforce continuous policy verification for every inter-service RPC call. Automated credential rotation and ephemeral security posture attestation without user friction.',
    impactMetric: '100%',
    impactLabel: 'Automated Attestation Coverage',
    features: [
      'Ephemeral SPIFFE/SPIRE cryptographically verified identity',
      'Kernel-level eBPF continuous runtime inspection',
      'Instantaneous lateral threat containment isolates'
    ],
    ctaLabel: 'Inspect Security Specs',
    iconName: 'ShieldCheck'
  },
  {
    id: 'agentic-operations',
    num: '04',
    title: 'Intelligent Agent SRE & Ops Copilot',
    category: 'Operations',
    summary: 'Autonomous root-cause synthesis and pre-authorized runbook execution.',
    description: 'When anomalies emerge, Hexbyte correlates millions of metrics, traces, and logs in seconds, producing an executive incident brief and executing verified corrective runbooks.',
    impactMetric: '-74%',
    impactLabel: 'Reduction in High-Severity MTTR',
    features: [
      'Deterministic safe rollback guardrails and dry-runs',
      'Cross-cluster causal graph anomaly localization',
      'Slack and PagerDuty bi-directional automated war rooms'
    ],
    ctaLabel: 'Discover Ops Engine',
    iconName: 'Cpu'
  },
  {
    id: 'edge-telemetry',
    num: '05',
    title: 'Edge Telemetry & IoT Fleet Mesh',
    category: 'Edge Computing',
    summary: 'Ultra-low footprint telemetry agents designed for distributed industrial assets.',
    description: 'Deploy lightweight agents to thousands of edge gateways, automated distribution centers, and retail points of sale with offline local buffering and delta compression.',
    impactMetric: '99.4%',
    impactLabel: 'Bandwidth Overhead Compression',
    features: [
      'Sub-5MB resident memory footprint per edge agent',
      'Resilient store-and-forward architecture for disconnected sites',
      'Hardware-level TPM secure boot integration'
    ],
    ctaLabel: 'View Edge Architecture',
    iconName: 'Activity'
  },
  {
    id: 'capital-markets-compute',
    num: '06',
    title: 'Capital Markets High-Frequency Engine',
    category: 'Financial Engineering',
    summary: 'Zero-jitter deterministic computing engine for real-time risk and valuation.',
    description: 'Execute quantitative models, tick data analytics, and pre-trade margin calculations with microsecond predictability, meeting stringent regulatory audits.',
    impactMetric: '0.04µs',
    impactLabel: 'Kernel Bypass In-Memory P99 Jitter',
    features: [
      'FPGA-accelerated feed handler and protocol parsing',
      'Continuous real-time Basel III / FRTB risk calculations',
      'WORM-compliant immutable audit trails'
    ],
    ctaLabel: 'Request Financial Briefing',
    iconName: 'TrendingUp'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Autonomous Ingestion & System Discovery',
    subtitle: 'Zero-friction telemetry deployment across your architecture in under 30 minutes.',
    description: 'Hexbyte eBPF probes automatically discover all services, dependencies, and data pipelines without requiring code modifications or downtime.',
    deliverable: 'Real-time interactive service dependency topology graph'
  },
  {
    step: '02',
    title: 'Policy-as-Code & Invariant Definition',
    subtitle: 'Establish enforceable SLAs, sovereign data boundaries, and cost caps.',
    description: 'Codify governance rules in declarative YAML or TypeScript. Hexbyte continuously checks for regressions, unauthorized drift, and compliance violations.',
    deliverable: 'Auditable compliance matrix and automated enforcement webhooks'
  },
  {
    step: '03',
    title: 'Live Orchestration & Multi-Cloud Mesh',
    subtitle: 'Autonomous traffic routing and dynamic compute allocation in production.',
    description: 'Hexbyte activates intelligent routing, distributing ingress requests based on real-time latency measurements, cloud provider spot prices, and cluster health.',
    deliverable: 'Global control plane dashboard with sub-second failover'
  },
  {
    step: '04',
    title: 'Continuous Optimization & Self-Healing',
    subtitle: 'Autonomous capacity elasticity and closed-loop issue mitigation.',
    description: 'As usage peaks or infrastructure degradations occur, the system automatically redistributes resources, spins up isolated failover replicas, and optimizes database queries.',
    deliverable: 'Executive weekly efficiency reporting and 99.999% uptime proof'
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'banking-capital-markets',
    name: 'Global Banking & Capital Markets',
    tagline: 'Deterministic execution and sovereign data residency for Tier-1 institutions.',
    description: 'Modernize legacy core systems while adhering to strict FedRAMP, Dodd-Frank, and MiFID II requirements. Scale clearing operations without latency penalties.',
    keyChallenge: 'Reconciling multi-region high-frequency transactions with strict data residency mandates.',
    hexbyteSolution: 'Cryptographically proven distributed ledgering and deterministic multi-cloud routing.',
    metric: '$42B+',
    metricLabel: 'Cleared Volume with Zero Data Loss',
    complianceTags: ['SOC2 Type II', 'ISO 27001', 'PCI-DSS v4.0', 'MiFID II']
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-compliant genomic sequencing pipelines and hospital network telemetry.',
    description: 'Accelerate medical imaging research and patient data analytics while guaranteeing complete end-to-end encryption and patient record anonymization.',
    keyChallenge: 'Processing massive multi-terabyte DICOM and genomic datasets securely across research hospitals.',
    hexbyteSolution: 'Edge-native data sanitization with zero-knowledge cryptographic verification.',
    metric: '12x',
    metricLabel: 'Faster Clinical Trial Cohort Querying',
    complianceTags: ['HIPAA Compliant', 'HITECH', 'GDPR Article 9', 'FDA 21 CFR Part 11']
  },
  {
    id: 'supply-chain-manufacturing',
    name: 'Automated Supply Chain & Logistics',
    tagline: 'Unified event mesh connecting warehouse robotics to global freight containers.',
    description: 'Synchronize 100,000+ IoT endpoints, automated guided vehicles, and enterprise ERP systems into a single predictable stream.',
    keyChallenge: 'Intermittent connectivity at sea and in transit hubs creating disconnected inventory silos.',
    hexbyteSolution: 'Store-and-forward edge buffering with deterministic timestamp reconciliation.',
    metric: '38%',
    metricLabel: 'Reduction in Port Dwell & Yard Staging Delays',
    complianceTags: ['ISO 9001', 'C-TPAT', 'GS1 Standards']
  },
  {
    id: 'enterprise-saas-media',
    name: 'Hyperscale Enterprise SaaS & Media',
    tagline: 'Multi-tenant cloud infrastructure scaling to 100M+ concurrent users.',
    description: 'Deliver sub-100ms video rendering, real-time collaboration, and global database reads with zero cross-tenant performance interference.',
    keyChallenge: 'Noisy neighbor tenant spikes degrading overall platform availability during flash events.',
    hexbyteSolution: 'Kernel-level fair-share compute scheduling and autonomous tenant sharding.',
    metric: '-62%',
    metricLabel: 'Lower P99 Tail Latency for Global End Users',
    complianceTags: ['SOC2 Type II', 'ISO 27701', 'Privacy Shield']
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'helios-bank',
    client: 'Helios Global Bank',
    industry: 'Capital Markets',
    headline: 'Eliminating Cloud Migration Latency for 18 Million Consumer Accounts',
    challenge: 'Helios operated a legacy mainframe core processing $12B in daily transactions. Prior attempts to migrate to hybrid cloud introduced 380ms latency spikes and frequent reconciliation timeouts.',
    solution: 'Implemented Hexbyte Autonomous Data Mesh with deterministic kernel bypass and automated multi-region active-active synchronization across AWS and Azure.',
    results: [
      { value: '4.2ms', label: 'Average Global Transaction Latency' },
      { value: '100%', label: 'Zero-Downtime Migration Execution' },
      { value: '$14.2M', label: 'Annual Legacy Infrastructure Cost Saved' }
    ],
    quote: 'Hexbyte provided the mathematical determinism and regulatory compliance we needed to convince our board and risk committee. We migrated without dropping a single micro-cent.',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer, Helios Global Bank'
  },
  {
    id: 'apex-logistics',
    client: 'Apex Global Logistics',
    industry: 'Industrial Supply Chain',
    headline: 'Autonomous Routing Fleet Telemetry for 4,200 Distribution Hubs',
    challenge: 'Apex suffered from fragmented telemetry across 32 regional operating software packages, leading to delayed freight tracking and container blind spots.',
    solution: 'Deployed Hexbyte Edge Telemetry Mesh with store-and-forward resilience across all ground sorting facilities, marine docks, and air freight centers.',
    results: [
      { value: '99.98%', label: 'Continuous Telemetry Visibility' },
      { value: '-41%', label: 'Drop in Supply Chain Routing Exceptions' },
      { value: '2.8x', label: 'Faster Customs Clearance Documentation' }
    ],
    quote: 'The level of real-time visibility Hexbyte provides is unprecedented in enterprise logistics. We scaled to peak holiday volume without a single system freeze.',
    author: 'Marcus Vance',
    role: 'EVP of Global Logistics & Technology, Apex Corp'
  },
  {
    id: 'novaris-health',
    client: 'Novaris Integrated Health',
    industry: 'Healthcare Networks',
    headline: 'HIPAA-Compliant Real-Time Patient Analytics Across 48 Medical Centers',
    challenge: 'Clinical analytics teams waited 6+ hours for batch ETL pipelines to process patient vital telemetry from intensive care units.',
    solution: 'Adopted Hexbyte Autonomous Data Mesh to stream and anonymize vitals in sub-second intervals directly to clinical decision support engines.',
    results: [
      { value: '< 2s', label: 'Patient Vitals Ingestion Latency' },
      { value: '100%', label: 'HIPAA & HITECH Audit Compliance' },
      { value: '31%', label: 'Earlier Detection of Acute Clinical Trends' }
    ],
    quote: 'Hexbyte transformed our data infrastructure from overnight batch reports into a live clinical nervous system that directly aids medical teams.',
    author: 'Dr. Sarah Chen, MD',
    role: 'Chief Information & Medical Officer, Novaris Health'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'David K. Rosenthal',
    role: 'Global Head of Infrastructure',
    company: 'Vanguard Global Capital',
    avatarText: 'DR',
    rating: 5,
    highlight: 'Deterministic Stability at Unprecedented Scale',
    quote: 'We operate in an environment where a 10-millisecond delay costs millions. Hexbyte gave our engineering teams total predictability across hybrid cloud deployments.'
  },
  {
    id: 'test-2',
    name: 'Catherine Morland',
    role: 'Chief Information Security Officer',
    company: 'AstraZen BioPharma',
    avatarText: 'CM',
    rating: 5,
    highlight: 'Flawless Zero-Trust Governance',
    quote: 'The automated policy-as-code enforcement saved our compliance teams hundreds of manual audit hours. It satisfies the most stringent global health regulatory bodies.'
  },
  {
    id: 'test-3',
    name: 'Rajesh Subramaniam',
    role: 'VP of Platform Engineering',
    company: 'Vertex Cloud Platforms',
    avatarText: 'RS',
    rating: 5,
    highlight: 'Immediate 42% Cloud Cost Optimization',
    quote: 'Hexbyte automated our multi-cloud spot arbitrage and resource rightsizing. We lowered our annual compute spend by over $6M while actually improving P99 latency.'
  }
];

export const ENTERPRISE_AWARDS = [
  {
    title: 'Gartner Magic Quadrant Leader',
    category: 'Cloud Infrastructure Automation 2026',
    badge: 'LEADER'
  },
  {
    title: 'Forrester Wave Top Performer',
    category: 'Enterprise Data Mesh Platforms',
    badge: 'TOP RANK'
  },
  {
    title: 'SOC2 Type II & SOC3 Certified',
    category: 'Verified Continuous AICPA Audit',
    badge: 'VERIFIED'
  },
  {
    title: 'ISO 27001 & ISO 27701 Certified',
    category: 'Information Security & Privacy Management',
    badge: 'ACCREDITED'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'growth-node',
    name: 'Enterprise Core',
    tier: 'Tier 1',
    monthlyPrice: 2400,
    annualPrice: 1950,
    description: 'For high-growth enterprise scaleups standardizing multi-region cloud infrastructure and telemetry.',
    features: [
      'Up to 500 managed infrastructure nodes',
      'Sub-millisecond data ingestion mesh',
      'Real-time automated incident remediation',
      'Standard multi-cloud cost arbitrage',
      'SOC2 Type II & ISO 27001 reports included',
      '99.95% Availability SLA'
    ],
    specs: {
      sla: '99.95% Availability',
      nodes: 'Up to 500 Nodes',
      support: '24/7 Priority Support',
      compliance: 'SOC2 Type II'
    },
    ctaText: 'Start Core Pilot'
  },
  {
    id: 'enterprise-scale',
    name: 'Mission-Critical Global',
    tier: 'Tier 2',
    popular: true,
    monthlyPrice: 6800,
    annualPrice: 5400,
    description: 'For global enterprises requiring active-active multi-cloud orchestration and strict regulatory isolation.',
    features: [
      'Unlimited managed infrastructure nodes',
      'Active-active cross-cloud live synchronization',
      'Zero-trust hardware-rooted identity mesh',
      'Custom policy-as-code governance pipelines',
      'Financial penalty-backed 99.999% SLA',
      'Dedicated Technical Account Manager & SRE'
    ],
    specs: {
      sla: '99.999% Fault Invariant',
      nodes: 'Unlimited Nodes',
      support: '15-Minute Critical Response',
      compliance: 'FedRAMP / HIPAA / MiFID II'
    },
    ctaText: 'Deploy Enterprise Fabric'
  },
  {
    id: 'custom-sovereign',
    name: 'Sovereign & On-Premises Airgap',
    tier: 'Tier 3',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    description: 'Tailored for sovereign governments, defense contractors, and air-gapped on-premises data centers.',
    features: [
      'Complete air-gapped on-premises deployment',
      'Custom hardware FPGA & ASIC kernel bypass drivers',
      'Self-hosted telemetry and zero external phone-home',
      'Source-available architecture & escrow auditing',
      'Direct executive engineering sponsorship',
      'Custom legal master services agreement'
    ],
    specs: {
      sla: 'Contractually Defined',
      nodes: 'Custom Hardware Footprint',
      support: 'Dedicated On-Site Engineering',
      compliance: 'Strict Air-Gapped Secret'
    },
    ctaText: 'Consult Architecture Team'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Architecture & Scalability',
    question: 'How does Hexbyte integrate with our existing AWS, GCP, and Kubernetes clusters?',
    answer: 'Hexbyte installs via non-intrusive eBPF daemonsets or lightweight host agents in under 30 minutes. It does not require rewriting your application logic, replacing your CI/CD pipelines, or altering existing VPC peering routes. It seamlessly sits beneath your workload layer, extracting telemetry and enforcing routing policies at the kernel level.'
  },
  {
    category: 'Architecture & Scalability',
    question: 'What is the performance overhead of the Hexbyte telemetry mesh?',
    answer: 'Hexbyte is written in high-performance Rust and modern C++ with zero-copy serialization. Resident CPU overhead is consistently measured below 0.4% per host, and memory footprint remains under 12MB. You gain complete microsecond visibility without sacrificing compute throughput.'
  },
  {
    category: 'Security & Compliance',
    question: 'How does Hexbyte guarantee compliance with GDPR, HIPAA, and financial regulations?',
    answer: 'Hexbyte incorporates cryptographic policy-as-code boundaries. Patient or consumer PII never traverses regional boundaries without automated hardware-rooted tokenization. All operations produce immutable WORM-compliant audit logs, and our platform is independently audited under SOC2 Type II, ISO 27001, and HIPAA benchmarks annually.'
  },
  {
    category: 'Security & Compliance',
    question: 'Can Hexbyte run completely air-gapped without Internet connectivity?',
    answer: 'Yes. Our Sovereign & Airgap edition runs fully disconnected inside sensitive on-premises data centers, private sovereign clouds, or SCIF facilities with zero external telemetry phone-home requirements.'
  },
  {
    category: 'Implementation & ROI',
    question: 'What is the typical timeline for an enterprise production rollout?',
    answer: 'Most enterprise clients complete a proof-of-concept within 14 days and roll out to global production within 45 to 60 days. Our dedicated Enterprise Solutions Engineering team provides dedicated architecture guidance, Terraform modules, and 24/7 migration support.'
  },
  {
    category: 'Implementation & ROI',
    question: 'How does the financial penalty-backed 99.999% SLA work?',
    answer: 'Our Enterprise SLA guarantees no more than 5 minutes and 15 seconds of total unplanned disruption across a calendar year. If an invariant threshold is breached due to platform failure, customers automatically receive tiered contractual credits against their subscription fees.'
  }
];
