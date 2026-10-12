export interface CaseStudyDetail {
  slug: string;
  client: string;
  industry: string;
  title: string;
  tagline: string;
  heroStat: { value: string; label: string };
  overview: string;
  theChallenge: string;
  theSolution: string;
  architectureDetails: string[];
  results: { value: string; label: string; subtext: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  technologiesUsed: string[];
}

export const CASE_STUDIES_DETAILED: CaseStudyDetail[] = [
  {
    slug: 'helios-global-bank',
    client: 'Helios Global Bank',
    industry: 'Capital Markets & Banking',
    title: 'Eliminating Cloud Migration Latency for 18 Million Consumer Accounts',
    tagline: 'Zero downtime active-active multi-cloud migration processing $12B daily volume.',
    heroStat: { value: '4.2ms', label: 'Global Transaction Latency' },
    overview: 'Helios Global Bank is one of the world’s top 20 custodian banks, managing over $1.4 trillion in assets under custody. Facing escalating legacy mainframe maintenance fees and regulatory pressure for multi-cloud disaster recovery, Helios embarked on a critical core migration project.',
    theChallenge: 'Helios operated a 35-year-old mainframe core banking ledger that handled 18 million active retail and institutional accounts. Previous attempts to synchronize mainframe batches with modern cloud databases introduced 380ms latency jitter and reconciliation timeouts that threatened daily settlement deadlines.',
    theSolution: 'Helios implemented the Hexbyte Autonomous Data Mesh and High-Frequency Engine. By deploying non-intrusive eBPF tap hooks onto their mainframe ingress channels, transactions are mirrored in microsecond intervals across AWS and Microsoft Azure with deterministic cryptographic proof.',
    architectureDetails: [
      'Dual-region active-active synchronization spanning AWS us-east-1 and Azure eastus2',
      'Solarflare kernel bypass NIC configuration providing 40-nanosecond inter-process messaging',
      'Hardware TPM cryptographic attestation verifying that no ledger entry is altered or dropped in transit',
      'Automated reconciliation bot executing 20,000 consistency checks per minute against the core ledger'
    ],
    results: [
      { value: '4.2ms', label: 'Average Global Transaction Latency', subtext: 'Drop from 380ms legacy mainframe response times' },
      { value: '100%', label: 'Zero-Downtime Migration', subtext: '18M accounts transitioned over a 60-day period with zero dropped transactions' },
      { value: '$14.2M', label: 'Annual Infrastructure Cost Saved', subtext: 'Retired 4 legacy mainframe hardware leases and proprietary licensing fees' }
    ],
    quote: {
      text: 'Hexbyte provided the mathematical determinism and regulatory compliance we needed to convince our board and risk committee. We migrated without dropping a single micro-cent.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'Helios Global Bank'
    },
    technologiesUsed: ['Hexbyte Data Mesh', 'Kernel Bypass DPDK', 'AWS Multi-Region', 'Azure ExpressRoute', 'Hardware TPM 2.0']
  },
  {
    slug: 'apex-global-logistics',
    client: 'Apex Global Logistics',
    industry: 'Automated Supply Chain',
    title: 'Autonomous Routing Fleet Telemetry for 4,200 Distribution Hubs',
    tagline: 'Connecting warehouse robotics and oceanic freight into a single unified telemetry fabric.',
    heroStat: { value: '99.98%', label: 'Continuous Telemetry Visibility' },
    overview: 'Apex operates a global multi-modal logistics network across 85 countries, managing 4,200 distribution centers, 32,000 transport trucks, and 140 cargo vessels. Real-time coordination is essential to prevent bottleneck congestion at sea ports and sorting centers.',
    theChallenge: 'Fragmented legacy monitoring systems resulted in blind spots. Oceanic vessels were cut off from tracking systems for up to 14 consecutive days at sea, and warehouse sorting robots frequently crashed when Wi-Fi roaming caused packet drops on concrete warehouse floors.',
    theSolution: 'Apex deployed the Hexbyte Edge Telemetry Mesh. Lightweight Rust daemons running directly on truck ELDs, ship satellite transponders, and warehouse AGVs provide local store-and-forward buffering with 99.4% delta compression over satellite links.',
    architectureDetails: [
      'Sub-5MB resident memory footprint on industrial ARM64 and embedded Siemens gateways',
      'Circular flash storage buffer maintaining up to 30 days of offline telemetry logs during ocean transit',
      'Delta compression algorithm streaming only state mutations over high-cost satellite links',
      'Central Hexbyte autonomous operations control plane automatically rerouting shipments around severe weather'
    ],
    results: [
      { value: '99.98%', label: 'Continuous Telemetry Visibility', subtext: 'Completely eliminated oceanic and rural blind spots' },
      { value: '-41%', label: 'Drop in Routing Exceptions', subtext: 'Automated predictive rerouting reduced port congestion dwell times' },
      { value: '2.8x', label: 'Faster Customs Clearance', subtext: 'Cryptographically certified manifest data approved instantly by customs authorities' }
    ],
    quote: {
      text: 'The level of real-time visibility Hexbyte provides is unprecedented in enterprise logistics. We scaled to peak holiday volume without a single system freeze.',
      author: 'Marcus Vance',
      role: 'EVP of Global Logistics & Technology',
      company: 'Apex Global Logistics'
    },
    technologiesUsed: ['Hexbyte Edge Mesh', 'Rust Embedded Daemon', 'Iridium Satellite QUIC', 'Kubernetes Edge', 'Kafka Connect']
  },
  {
    slug: 'novaris-health',
    client: 'Novaris Integrated Health',
    industry: 'Healthcare & Life Sciences',
    title: 'HIPAA-Compliant Real-Time Patient Analytics Across 48 Medical Centers',
    tagline: 'Streaming vital telemetry from 14,000 ICU beds directly to clinical decision support engines.',
    heroStat: { value: '< 2s', label: 'Patient Vitals Ingestion Latency' },
    overview: 'Novaris Health operates 48 tertiary hospitals and 320 outpatient clinics across the Pacific Northwest. Clinicians rely on predictive sepsis algorithms to catch patient deterioration hours before overt clinical symptoms appear.',
    theChallenge: 'Traditional hospital batch ETL pipelines took 6+ hours to extract bedside monitor data into the clinical data warehouse. By the time analytics models flagged potential septic shock risks, critical intervention windows had already closed.',
    theSolution: 'Novaris deployed the Hexbyte Zero-Trust Security Engine and Autonomous Event Mesh. Bedside telemetry is scrubbed and anonymized at the local hospital edge in sub-second intervals and streamed securely to clinical AI inference models with end-to-end HIPAA compliance.',
    architectureDetails: [
      'Edge-native de-identification removing 18 HIPAA Safe Harbor identifiers before cloud ingestion',
      'Confidential computing enclaves executing predictive clinical models in hardware-encrypted RAM',
      'Real-time HL7 FHIR v4 streaming adapters connecting directly to Philips and GE bedside monitors',
      'Automated auditor evidence generation with signed BAA verification records'
    ],
    results: [
      { value: '< 2s', label: 'Bedside-to-Model Ingestion Latency', subtext: 'Reduced from 6 hours down to under 2 seconds' },
      { value: '31%', label: 'Earlier Detection of Acute Clinical Trends', subtext: 'Medical staff alerted hours before acute patient degradation' },
      { value: '100%', label: 'HIPAA Audit Compliance', subtext: 'Passed rigorous federal audit with zero non-conformity findings' }
    ],
    quote: {
      text: 'Hexbyte transformed our data infrastructure from overnight batch reports into a live clinical nervous system that directly aids medical teams in saving lives.',
      author: 'Dr. Sarah Chen, MD',
      role: 'Chief Information & Medical Officer',
      company: 'Novaris Integrated Health'
    },
    technologiesUsed: ['Hexbyte Zero-Trust Engine', 'HL7 FHIR v4 Connectors', 'AMD SEV-SNP Enclaves', 'AWS HealthLake', 'Epic Systems EHR']
  },
  {
    slug: 'vertex-streaming-cloud',
    client: 'Vertex Streaming Cloud',
    industry: 'Enterprise SaaS & Media',
    title: 'Global Video Streaming Mesh Across 120 Countries',
    tagline: 'Scaling to 40M concurrent streams during global sporting championships.',
    heroStat: { value: '-52%', label: 'Cloud Egress Cost Reduction' },
    overview: 'Vertex Cloud powers live interactive video streaming, gaming broadcasts, and enterprise video conferencing for over 200 consumer brands across 120 countries.',
    theChallenge: 'Flash traffic surges during live sports finals caused regional cloud datacenters to exhaust egress bandwidth limits, causing buffering spirals, dropped frames, and millions in cloud egress overage penalty fees.',
    theSolution: 'Vertex migrated to the Hexbyte Multi-Cloud Fabric and Elastic GPU Orchestrator, dynamically spreading video encoding workloads across AWS, GCP, and European sovereign datacenters with automated peer-assisted traffic mesh routing.',
    architectureDetails: [
      'Multi-cloud spot instance arbitrage automatically capturing compute savings across 8 cloud providers',
      'Kernel-level eBPF fair-share bandwidth shaping preventing single heavy streams from starving adjacent viewers',
      'P2P assisted WebRTC edge caching serving 40% of video chunks from local metropolitan nodes',
      'Automated failover shifting 5 million viewers from an affected AWS region to Google Cloud in under 200ms'
    ],
    results: [
      { value: '40M+', label: 'Peak Concurrent Streams', subtext: 'Maintained 4K 60fps quality with zero catastrophic outages' },
      { value: '-52%', label: 'Egress Bandwidth Savings', subtext: 'Saved $8.6M annually in public cloud network egress charges' },
      { value: '< 180ms', label: 'Cross-Cloud Handoff Time', subtext: 'Seamless viewer transition during regional fiber cuts' }
    ],
    quote: {
      text: 'Hexbyte automated our multi-cloud spot arbitrage and resource rightsizing. We lowered our annual compute spend by over $8M while actually improving P99 streaming latency.',
      author: 'Rajesh Subramaniam',
      role: 'VP of Platform Engineering',
      company: 'Vertex Streaming Cloud'
    },
    technologiesUsed: ['Hexbyte Multi-Cloud Fabric', 'eBPF Bandwidth Shaper', 'NVIDIA H100 GPU Clusters', 'Anycast BGP Routing', 'WebRTC Mesh']
  }
];
