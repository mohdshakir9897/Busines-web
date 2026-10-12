export interface IndustryDetail {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroMetric: { value: string; label: string };
  summary: string;
  description: string;
  keyChallenges: { title: string; description: string }[];
  hexbyteSolutions: { title: string; description: string }[];
  complianceFrameworks: { name: string; description: string }[];
  stats: { value: string; label: string; subtext: string }[];
  caseStudy: { client: string; title: string; result: string; slug: string };
  faq: { q: string; a: string }[];
}

export const INDUSTRIES_DETAILED: IndustryDetail[] = [
  {
    slug: 'banking-capital-markets',
    name: 'Global Banking & Capital Markets',
    shortName: 'Banking & Finance',
    tagline: 'Deterministic execution and sovereign data residency for Tier-1 institutions.',
    heroMetric: { value: '$42B+', label: 'Daily Trading Volume Cleared' },
    summary: 'Modernize legacy core systems while adhering to strict FedRAMP, Dodd-Frank, and MiFID II requirements. Scale clearing operations without latency penalties.',
    description: 'Tier-1 investment banks, custodian networks, and algorithmic trading desks operate where milliseconds cost millions. Hexbyte delivers microsecond-predictable event streaming, cryptographic auditability, and zero-loss active-active failover across multi-region banking fabrics.',
    keyChallenges: [
      { title: 'Sub-Millisecond Jitter Invariance', description: 'Legacy message queues introduce non-deterministic garbage collection pauses that violate regulatory execution requirements.' },
      { title: 'Conflicting Cross-Border Data Laws', description: 'Reconciling EU GDPR, Swiss Banking Secrecy, and US Cloud Act mandates across distributed multinational core ledgers.' },
      { title: 'Legacy Mainframe Integration Stalls', description: 'Integrating 40-year-old COBOL mainframes with modern cloud environments without downtime or reconciliation discrepancies.' }
    ],
    hexbyteSolutions: [
      { title: 'Kernel Bypass In-Memory Event Streaming', description: 'DPDK and io_uring bypass the Linux network stack, reducing median transaction latency to under 40 nanoseconds.' },
      { title: 'Cryptographic HSM Data Fencing', description: 'Hardware-anchored encryption keys prevent unencrypted financial ledger entries from traversing jurisdictional borders.' },
      { title: 'Non-Intrusive eBPF Mainframe Tap Probes', description: 'Synchronize mainframe state into modern distributed data lakes in real time with zero code modifications to legacy systems.' }
    ],
    complianceFrameworks: [
      { name: 'SEC Rule 17a-4 / FINRA', description: 'Write-Once-Read-Many (WORM) immutable electronic records storage with cryptographic audit logs.' },
      { name: 'MiFID II / Dodd-Frank', description: 'PTP IEEE 1588 nanosecond clock synchronization for regulatory trade timestamp compliance.' },
      { name: 'PCI-DSS v4.0 Level 1', description: 'Continuous tokenization of payment card credentials with zero plaintext storage.' },
      { name: 'DORA (Digital Operational Resilience Act)', description: 'Multi-cloud active-active redundancy with automated failover testing drills.' }
    ],
    stats: [
      { value: '4.2ms', label: 'Average Global Transaction Latency', subtext: 'Measured across AWS, Azure, and private datacenters' },
      { value: '100%', label: 'Zero-Downtime Migration', subtext: 'Maintained uninterrupted operations for 18 million accounts' },
      { value: '$14.2M', label: 'Annual Legacy Cost Saved', subtext: 'Eliminated redundant proprietary hardware licenses' }
    ],
    caseStudy: {
      client: 'Helios Global Bank',
      title: 'Eliminating Cloud Migration Latency for 18 Million Consumer Accounts',
      result: 'Migrated without dropping a single micro-cent',
      slug: 'helios-global-bank'
    },
    faq: [
      { q: 'How does Hexbyte guarantee transaction determinism?', a: 'By utilizing user-space kernel bypass and pinned CPU core memory rings, Hexbyte removes the non-deterministic scheduling jitter of conventional operating systems.' },
      { q: 'Can this run in private on-premises colocation centers like Equinix NY4?', a: 'Yes. Hexbyte runs on bare metal in all major global financial colocation centers with dedicated Solarflare and Mellanox network cards.' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare & HealthTech',
    tagline: 'HIPAA-compliant genomic sequencing pipelines and hospital network telemetry.',
    heroMetric: { value: '12x', label: 'Faster Clinical Trial Querying' },
    summary: 'Accelerate medical imaging research and patient data analytics while guaranteeing complete end-to-end encryption and patient record anonymization.',
    description: 'From clinical decision support in acute ICUs to massive multi-terabyte genomic sequencing datasets, Hexbyte provides healthcare networks with real-time streaming, edge sanitization, and mathematical HIPAA/HITECH compliance guarantees.',
    keyChallenges: [
      { title: 'Massive DICOM & Genomic Pipeline Stalls', description: 'Batch ETL pipelines take 8+ hours to process patient vital telemetry and genetic sequencing arrays.' },
      { title: 'Strict HIPAA and HITECH Audit Liabilities', description: 'Severe regulatory penalties for unauthorized protected health information (PHI) exposure across cloud environments.' },
      { title: 'Fragmented Hospital EHR Silos', description: 'Disparate Epic, Cerner, and legacy hospital databases fail to interoperate during acute emergency care.' }
    ],
    hexbyteSolutions: [
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
    caseStudy: {
      client: 'Novaris Integrated Health',
      title: 'HIPAA-Compliant Real-Time Patient Analytics Across 48 Medical Centers',
      result: 'Continuous streaming to clinical support engines',
      slug: 'novaris-health'
    },
    faq: [
      { q: 'Will Hexbyte sign a Business Associate Agreement (BAA)?', a: 'Yes. Enterprise tiers include signed BAAs underwritten by comprehensive cybersecurity insurance and independent SOC2 reports.' },
      { q: 'Can Hexbyte interface with Epic and Cerner EHR systems?', a: 'Yes. Hexbyte features native HL7 FHIR v4 connectors and DICOM image stream parsers.' }
    ]
  },
  {
    slug: 'supply-chain-logistics',
    name: 'Automated Supply Chain & Logistics',
    shortName: 'Supply Chain & Freight',
    tagline: 'Unified event mesh connecting warehouse robotics to global freight containers.',
    heroMetric: { value: '38%', label: 'Reduction in Staging & Yard Delays' },
    summary: 'Synchronize 100,000+ IoT endpoints, automated guided vehicles, and enterprise ERP systems into a single predictable stream.',
    description: 'Global logistics operations cannot tolerate disconnected silos between port docks, oceanic shipping containers, sorting hubs, and automated robotic fulfillment centers. Hexbyte unifies edge devices and central cloud ERPs with store-and-forward resilience.',
    keyChallenges: [
      { title: 'Intermittent Marine & Rail Connectivity', description: 'Cargo traversing oceans and remote corridors suffers weeks of offline blind spots before reconciling with central ERPs.' },
      { title: 'High Satellite & Cellular Telemetry Costs', description: 'Uncompressed raw IoT data bills escalate exponentially across thousands of connected vehicles and sensors.' },
      { title: 'Fragile Warehouse Robotic Integration', description: 'Automated guided vehicles (AGVs) fail when Wi-Fi roaming causes dropped routing packets on fulfillment floors.' }
    ],
    hexbyteSolutions: [
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
      { value: '-41%', label: 'Drop in Routing Exceptions', subtext: 'Automated rerouting around port strikes and extreme weather' },
      { value: '2.8x', label: 'Faster Customs Clearance', subtext: 'Digital bill-of-lading cryptographic attestation' }
    ],
    caseStudy: {
      client: 'Apex Global Logistics',
      title: 'Autonomous Routing Fleet Telemetry for 4,200 Distribution Hubs',
      result: 'Scaled to peak holiday volume without a single system freeze',
      slug: 'apex-global-logistics'
    },
    faq: [
      { q: 'How does it function when a vessel is in deep ocean with no cell coverage?', a: 'The Hexbyte edge daemon stores all telemetry locally on encrypted solid-state drives and transmits compressed summaries via Iridium satellite bursts.' },
      { q: 'Can it integrate with SAP Transportation Management?', a: 'Yes. Hexbyte features native bi-directional connectors for SAP TM, Oracle Transportation, and Manhattan Associates WMS.' }
    ]
  },
  {
    slug: 'enterprise-saas-media',
    name: 'Hyperscale Enterprise SaaS & Media',
    shortName: 'Enterprise SaaS & Media',
    tagline: 'Multi-tenant cloud infrastructure scaling to 100M+ concurrent users.',
    heroMetric: { value: '-62%', label: 'Lower P99 Tail Latency Globally' },
    summary: 'Deliver sub-100ms video rendering, real-time collaboration, and global database reads with zero cross-tenant performance interference.',
    description: 'High-velocity software platforms and global media networks face unpredictable viral surges and demanding multi-tenant SLAs. Hexbyte provides fair-share compute scheduling, automated tenant sharding, and edge media acceleration.',
    keyChallenges: [
      { title: 'Noisy Neighbor Tenant Spikes', description: 'A single enterprise customer triggering a massive batch export degrades responsiveness for all other tenants.' },
      { title: 'Exorbitant Cloud Egress Expenses', description: 'Streaming 4K video feeds and heavy database replicas across cloud regions leads to millions in monthly cloud bills.' },
      { title: 'Global Multi-Region Data Desync', description: 'Eventual consistency delays cause conflicting edits during collaborative real-time document workflows.' }
    ],
    hexbyteSolutions: [
      { title: 'eBPF Kernel-Level Fair-Share Scheduling', description: 'Enforces strict CPU and network bandwidth quotas per tenant at the kernel socket layer.' },
      { title: 'Edge Video Transcoding & Caching', description: 'Dynamic worker nodes deployed close to end users with P2P assisted peering.' },
      { title: 'Conflict-Free Replicated Data Mesh (CRDT)', description: 'Deterministic sub-second merge consensus across global multi-region active-active clusters.' }
    ],
    complianceFrameworks: [
      { name: 'SOC2 Type II & SOC3', description: 'Continuous AICPA verified security and multi-tenant data isolation.' },
      { name: 'ISO 27701 (Privacy)', description: 'International standard for privacy information management.' },
      { name: 'EU-US Data Privacy Framework', description: 'Self-certified cross-border data transfer framework.' }
    ],
    stats: [
      { value: '100M+', label: 'Concurrent Connected Users', subtext: 'Supported across global live streaming flash events' },
      { value: '45ms', label: 'Average Global Edge Latency', subtext: 'Measured from 180 Anycast edge points of presence' },
      { value: '-52%', label: 'Cloud Egress Cost Reduction', subtext: 'Intelligent peer-assisted caching and direct peering' }
    ],
    caseStudy: {
      client: 'Vertex Streaming Cloud',
      title: 'Global Video Streaming Mesh Across 120 Countries',
      result: 'Scaled to 40M concurrent streams during global sports finals',
      slug: 'vertex-streaming-cloud'
    },
    faq: [
      { q: 'How does Hexbyte isolate database queries between multi-tenant customers?', a: 'Hexbyte implements dynamic schema virtualization and query rate-limiting, ensuring no single customer can monopolize database connection pools.' },
      { q: 'Can it run alongside our existing Kubernetes and Next.js applications?', a: 'Yes. Hexbyte runs as a lightweight daemonset or sidecar mesh with zero application code changes required.' }
    ]
  }
];
