export interface IndustryMeta {
  slug: string;
  name: string;
  tagline: string;
  heroMetric: { value: string; label: string };
  summary: string;
  description: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  complianceFrameworks: { name: string; description: string }[];
  stats: { value: string; label: string; subtext: string }[];
  featuredProjects: string[];
  faqs: { q: string; a: string }[];
}

export const ALL_INDUSTRIES: IndustryMeta[] = [
  {
    slug: 'fintech-bfsi',
    name: 'Fintech, Banking & Financial Services',
    tagline: 'Deterministic execution, microsecond settlement, and sovereign regulatory compliance.',
    heroMetric: { value: '$42B+', label: 'Daily Processed Financial Volume' },
    summary: 'Modernize legacy core banking systems, automate regulatory compliance, and deploy algorithmic risk engines with zero microsecond slippage.',
    description: 'Tier-1 investment banks, custodian networks, digital banks, and fintech scaleups operate in high-concurrency environments where latency anomalies trigger immense financial and regulatory liability. Hexbyte delivers bank-grade architectures backed by formal invariant proofs, zero-loss multi-cloud synchronization, and automated compliance reporting.',
    challenges: [
      { title: 'Sub-Millisecond Execution Jitter', description: 'Legacy message queues introduce non-deterministic garbage collection pauses that violate regulatory execution rules.' },
      { title: 'Cross-Border Sovereign Fencing', description: 'Conflicting international regulations (EU GDPR, Swiss Banking Secrecy, US Cloud Act) across distributed multinational banking books.' },
      { title: 'Mainframe Modernization Friction', description: 'Integrating 40-year-old COBOL mainframes with cloud environments without downtime or reconciliation discrepancies.' }
    ],
    solutions: [
      { title: 'Kernel Bypass In-Memory Event Streaming', description: 'DPDK and io_uring bypass the Linux network stack, reducing transaction latency to under 40 nanoseconds.' },
      { title: 'Hardware HSM Data Fencing', description: 'Hardware-anchored encryption keys prevent unencrypted financial ledger entries from traversing jurisdictional borders.' },
      { title: 'Non-Intrusive eBPF Mainframe Probes', description: 'Synchronize mainframe state into modern distributed data lakes in real time with zero code modifications.' }
    ],
    complianceFrameworks: [
      { name: 'SEC Rule 17a-4 / FINRA', description: 'Write-Once-Read-Many (WORM) immutable electronic records storage with cryptographic audit logs.' },
      { name: 'MiFID II / Dodd-Frank', description: 'PTP IEEE 1588 nanosecond clock synchronization for regulatory trade timestamp compliance.' },
      { name: 'PCI-DSS v4.0 Level 1', description: 'Continuous tokenization of payment card credentials with zero plaintext storage.' },
      { name: 'DORA (Digital Operational Resilience Act)', description: 'Multi-cloud active-active redundancy with automated failover testing drills.' }
    ],
    stats: [
      { value: '4.2ms', label: 'Average Global Transaction Latency', subtext: 'Drop from 380ms legacy mainframe response times' },
      { value: '100%', label: 'Zero-Downtime Migration', subtext: '18M accounts transitioned with zero dropped transactions' },
      { value: '$14.2M', label: 'Annual Legacy Infrastructure Saved', subtext: 'Retired legacy mainframe leases and proprietary licenses' }
    ],
    featuredProjects: ['helios-core-banking', 'aegis-defi-vaults'],
    faqs: [
      { q: 'How does Hexbyte guarantee transaction determinism?', a: 'By utilizing user-space kernel bypass and pinned CPU core memory rings, Hexbyte removes the non-deterministic scheduling jitter of conventional operating systems.' },
      { q: 'Can this run in private on-premises colocation centers like Equinix NY4?', a: 'Yes. Hexbyte runs on bare metal in all major global financial colocation centers with dedicated Solarflare and Mellanox network cards.' }
    ]
  },
  {
    slug: 'healthcare',
    name: 'Healthcare, Life Sciences & HealthTech',
    tagline: 'HIPAA-compliant clinical streaming, genomic pipelines, and AI diagnostic workflows.',
    heroMetric: { value: '12x', label: 'Faster Clinical Trial Cohort Querying' },
    summary: 'Accelerate medical imaging research and patient data analytics while guaranteeing complete end-to-end encryption and patient record anonymization.',
    description: 'From clinical decision support in acute ICUs to massive multi-terabyte genomic sequencing datasets, Hexbyte provides healthcare networks with real-time streaming, edge sanitization, and mathematical HIPAA/HITECH compliance guarantees.',
    challenges: [
      { title: 'Massive DICOM & Genomic Pipeline Stalls', description: 'Batch ETL pipelines take 8+ hours to process patient vital telemetry and genetic sequencing arrays.' },
      { title: 'Strict HIPAA and HITECH Audit Liabilities', description: 'Severe regulatory penalties for unauthorized protected health information (PHI) exposure across cloud environments.' },
      { title: 'Fragmented Hospital EHR Silos', description: 'Disparate Epic, Cerner, and legacy hospital databases fail to interoperate during acute emergency care.' }
    ],
    solutions: [
      { title: 'Real-Time Edge De-Identification', description: 'Automated on-premise PHI tokenization before data leaves the hospital firewall for cloud research clusters.' },
      { title: 'Sub-Second Intensive Care Streaming', description: 'Stream bedside patient telemetry directly to clinical AI inference models with zero packet delay.' },
      { title: 'Confidential Computing Genomic Enclaves', description: 'Compute genetic risk models inside AMD SEV-SNP encrypted memory spaces where even cloud admins cannot inspect data.' }
    ],
    complianceFrameworks: [
      { name: 'HIPAA / HITECH Certified', description: 'Annual independent SOC2 Type II + HIPAA security benchmark auditing with BAA agreements.' },
      { name: 'FDA 21 CFR Part 11', description: 'Electronic signatures and audit trails for medical device software pipelines.' },
      { name: 'GDPR Article 9 (Health Data)', description: 'Special category data residency guarantees with automated right-to-erasure webhooks.' },
      { name: 'HITRUST CSF Validated', description: 'Comprehensive cybersecurity framework mapping across clinical infrastructure.' }
    ],
    stats: [
      { value: '< 2s', label: 'Patient Vitals Ingestion Latency', subtext: 'Drop from 6-hour batch ETL down to sub-second streams' },
      { value: '31%', label: 'Earlier Clinical Anomaly Detection', subtext: 'Real-time alerting for acute patient sepsis indicators' },
      { value: '48 Centers', label: 'Connected Medical Hospitals', subtext: 'Unified under a single zero-trust health data mesh' }
    ],
    featuredProjects: ['novaris-clinical-cloud', 'helios-core-banking'],
    faqs: [
      { q: 'Will Hexbyte sign a Business Associate Agreement (BAA)?', a: 'Yes. Enterprise tiers include signed BAAs underwritten by comprehensive cybersecurity insurance and independent SOC2 reports.' },
      { q: 'Can Hexbyte interface with Epic and Cerner EHR systems?', a: 'Yes. Hexbyte features native HL7 FHIR v4 connectors and DICOM image stream parsers.' }
    ]
  },
  {
    slug: 'education',
    name: 'Higher Education & EdTech Platforms',
    tagline: 'High-concurrency virtual campuses, adaptive learning AI, and secure credentialing.',
    heroMetric: { value: '500,000+', label: 'Concurrent Active Students Supported' },
    summary: 'Deliver interactive real-time classrooms, automated grading assistants, and blockchain-verified digital diplomas with 99.99% availability.',
    description: 'Modern universities and global EdTech platforms require infrastructure that scales smoothly from quiet study periods to intense exam flash traffic. Hexbyte powers adaptive learning engines, real-time virtual classrooms, and FERPA-compliant student records.',
    challenges: [
      { title: 'Exam Flash Traffic Spikes', description: 'Hundreds of thousands of students submitting exams simultaneously crashes monolithic learning management systems.' },
      { title: 'Academic Data Privacy & FERPA', description: 'Strict legal requirements safeguarding student behavioral data, grades, and intellectual property.' },
      { title: 'Global Bandwidth Inequality', description: 'Students in emerging markets with low-bandwidth connections experiencing dropped live lecture video streams.' }
    ],
    solutions: [
      { title: 'Edge Video & Adaptive Bitrate Mesh', description: 'P2P assisted video delivery that optimizes video stream resolution down to unstable 3G connections.' },
      { title: 'FERPA & COPPA Cryptographic Fencing', description: 'Strict tokenization isolating student identities from third-party analytics and AI models.' },
      { title: 'Autoscaling Microservice Examination Mesh', description: 'Serverless assessment grading capable of absorbing 100,000 simultaneous submissions without queuing.' }
    ],
    complianceFrameworks: [
      { name: 'FERPA Compliant', description: 'Full compliance with Family Educational Rights and Privacy Act data protection rules.' },
      { name: 'COPPA Certified', description: 'Children’s Online Privacy Protection Act safe harbor standards.' },
      { name: 'WCAG 2.1 AAA Accessibility', description: 'Maximum accessibility compliance for screen readers and students with motor impairments.' }
    ],
    stats: [
      { value: '99.99%', label: 'Examination Period Uptime', subtext: 'Zero dropped submissions during global finals' },
      { value: '-65%', label: 'Video Streaming Egress Expenses', subtext: 'Edge WebRTC caching optimized bandwidth costs' },
      { value: '2.4M', label: 'Automated Homework Grading Runs', subtext: 'Instant pedagogical feedback delivered in under 3 seconds' }
    ],
    featuredProjects: ['vertex-streaming-media', 'stratum-energy-iot'],
    faqs: [
      { q: 'Can the platform integrate with Canvas, Blackboard, or Moodle?', a: 'Yes. We support LTI 1.3 Advantage standards, allowing seamless single sign-on and gradebook synchronization with all major LMS platforms.' },
      { q: 'How do you prevent cheating during remote online proctored exams?', a: 'We employ privacy-preserving on-device computer vision that monitors gaze focus without recording or leaking full video feeds to cloud servers.' }
    ]
  },
  {
    slug: 'real-estate',
    name: 'Commercial Real Estate & PropTech',
    tagline: 'Smart building digital twins, automated leasing portals, and fractional tokenization.',
    heroMetric: { value: '$18B+', label: 'Managed Real Estate Asset Portfolio' },
    summary: 'Connect IoT HVAC and building telemetry to digital twin models, streamline commercial leasing, and tokenize institutional real estate assets.',
    description: 'We develop PropTech software ecosystems for global REITs, property developers, and asset managers, uniting smart building telemetry, tenant engagement apps, and institutional investment portals.',
    challenges: [
      { title: 'Fragmented Building Management Systems (BMS)', description: 'Older Johnson Controls and Honeywell HVAC systems operating in disconnected silos from modern cloud analytics.' },
      { title: 'Lengthy Commercial Lease Closing Cycles', description: 'Complex multi-party commercial leases taking months to review, negotiate, and execute.' },
      { title: 'Energy Waste & ESG Reporting Penalties', description: 'Difficulty accurately quantifying carbon footprint and energy waste across hundreds of commercial towers.' }
    ],
    solutions: [
      { title: 'BACnet / Modbus IoT Edge Gateway', description: 'Secure on-premise gateways extracting building HVAC, occupancy, and power metrics into a real-time cloud data lake.' },
      { title: 'Spatial 3D Building Digital Twins', description: 'Interactive WebGL building models allowing remote property tours and real-time maintenance visualization.' },
      { title: 'Automated ESG Telemetry Reporting', description: 'Continuous greenhouse gas calculation generating certified GRESB and LEED audit documentation.' }
    ],
    complianceFrameworks: [
      { name: 'GRESB Real Estate Standard', description: 'Automated ESG reporting aligned with global benchmark requirements.' },
      { name: 'LEED Arc Integration', description: 'Live performance scoring for green building certifications.' },
      { name: 'SOC2 Type II Certified', description: 'Airtight tenant privacy and commercial financial contract protection.' }
    ],
    stats: [
      { value: '-24%', label: 'Commercial Building Energy Consumption', subtext: 'Automated AI HVAC schedule optimization based on weather forecasts' },
      { value: '3x', label: 'Faster Commercial Lease Closing', subtext: 'Digital contract and tenant onboarding workflows' },
      { value: '450+ Towers', label: 'Connected Commercial Assets', subtext: 'Monitored under a single global digital twin command center' }
    ],
    featuredProjects: ['stratum-energy-iot', 'aegis-defi-vaults'],
    faqs: [
      { q: 'Can this connect to older HVAC and lighting control systems?', a: 'Yes. Our edge gateways translate legacy BACnet/IP, Modbus RTU, and LonWorks protocols into modern encrypted MQTT/JSON cloud streams.' },
      { q: 'Does it support tenant mobile access cards for turnstiles and elevators?', a: 'Yes. We integrate Apple Wallet and Google Wallet NFC mobile access passes compatible with HID and Gallagher hardware.' }
    ]
  },
  {
    slug: 'logistics',
    name: 'Global Supply Chain, Freight & Logistics',
    tagline: 'Unified event mesh connecting warehouse robotics to oceanic freight vessels.',
    heroMetric: { value: '38%', label: 'Reduction in Port Dwell & Staging Delays' },
    summary: 'Synchronize 100,000+ IoT endpoints, automated guided vehicles, and enterprise ERP systems into a single predictable stream.',
    description: 'Global logistics operations cannot tolerate disconnected silos between port docks, oceanic shipping containers, sorting hubs, and automated robotic fulfillment centers. Hexbyte unifies edge devices and central cloud ERPs with store-and-forward resilience.',
    challenges: [
      { title: 'Intermittent Marine & Rail Connectivity', description: 'Cargo traversing oceans and remote corridors suffers weeks of offline blind spots before reconciling with central ERPs.' },
      { title: 'High Satellite & Cellular Telemetry Costs', description: 'Uncompressed raw IoT data bills escalate exponentially across thousands of connected vehicles and sensors.' },
      { title: 'Fragile Warehouse Robotic Integration', description: 'Automated guided vehicles (AGVs) fail when Wi-Fi roaming causes dropped routing packets on fulfillment floors.' }
    ],
    solutions: [
      { title: 'Store-and-Forward Edge Buffering', description: 'Edge daemons buffer months of sensor telemetry locally and synchronize seamlessly when satellite links reconnect.' },
      { title: 'Delta-Compressed Wire Protocol', description: 'Transmits only mutated bytes, reducing cellular and satellite data costs by over 99%.' },
      { title: 'Deterministic Warehouse Mesh', description: 'Sub-millisecond AGV packet routing with local fallback to prevent floor gridlock during cloud outages.' }
    ],
    complianceFrameworks: [
      { name: 'ISO 9001 / ISO 28000', description: 'Security management systems for the global supply chain.' },
      { name: 'C-TPAT Security Standards', description: 'Customs-Trade Partnership Against Terrorism compliance verification.' },
      { name: 'GS1 Standards / EPCIS', description: 'Interoperable supply chain event tracking across global freight carriers.' }
    ],
    stats: [
      { value: '99.98%', label: 'Continuous Telemetry Visibility', subtext: 'Eliminated blind spots across 4,200 distribution facilities' },
      { value: '-41%', label: 'Drop in Routing Exceptions', subtext: 'Automated predictive rerouting reduced port congestion dwell times' },
      { value: '2.8x', label: 'Faster Customs Clearance', subtext: 'Digital bill-of-lading cryptographic attestation' }
    ],
    featuredProjects: ['apex-logistics-mesh', 'stratum-energy-iot'],
    faqs: [
      { q: 'How does it function when a vessel is in deep ocean with no cell coverage?', a: 'The Hexbyte edge daemon stores all telemetry locally on encrypted solid-state drives and transmits compressed summaries via Iridium satellite bursts.' },
      { q: 'Can it integrate with SAP Transportation Management?', a: 'Yes. Hexbyte features native bi-directional connectors for SAP TM, Oracle Transportation, and Manhattan Associates WMS.' }
    ]
  }
];
