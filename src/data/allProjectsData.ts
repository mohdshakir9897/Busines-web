export interface ProjectDetail {
  slug: string;
  title: string;
  client: string;
  isSample: boolean;
  industry: string;
  serviceCategory: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  keyFeatures: { title: string; description: string }[];
  results: { value: string; label: string; subtext: string }[];
  galleryScreens: {
    id: string;
    caption: string;
    type: 'dashboard' | 'mobile' | 'architecture' | 'analytics';
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  relatedServices: { title: string; slug: string; category: string }[];
}

export const ALL_PROJECTS: ProjectDetail[] = [
  {
    slug: 'helios-core-banking',
    title: 'Autonomous Core Banking & Multi-Cloud Settlement Engine',
    client: 'Sample Concept: Helios Banking Prototype',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'cloud',
    tagline: 'Zero downtime active-active multi-cloud migration prototype processing simulated $12B daily volume.',
    overview: 'Conceptual demonstration of migrating legacy mainframe ledgers to a distributed active-active multi-cloud fabric with zero micro-cent slippage in simulated financial testbeds.',
    challenge: 'Legacy COBOL mainframes simulated with 380ms transaction latency and frequent reconciliation timeouts under peak volume.',
    solution: 'Deployed Hexbyte Autonomous Event Mesh with DPDK kernel bypass and hardware TPM cryptographic attestation spanning simulated AWS and Azure zones.',
    techStack: ['Rust', 'AWS EKS', 'Azure ExpressRoute', 'Kernel Bypass DPDK', 'PostgreSQL Citus'],
    keyFeatures: [
      { title: 'Sub-4ms In-Memory Settlement', description: 'Nanosecond order book and payment routing with zero operating system socket jitter in simulated testbed.' },
      { title: 'Multi-Cloud Active-Active Sync', description: 'Continuous cross-cloud consensus surviving total regional cloud outages without human intervention.' },
      { title: 'Immutable WORM Audit Ledger', description: 'Cryptographically certified transaction logs modeled after SEC Rule 17a-4 and Basel III specs.' },
    ],
    results: [
      { value: '4.2ms', label: 'Simulated Global Transaction Latency', subtext: 'Benchmark reduced from 380ms legacy mainframe baseline' },
      { value: '100%', label: 'Simulated Testbed Uptime', subtext: 'Synthetic accounts transitioned over testbed run with zero data loss' },
      { value: '$14.2M', label: 'Projected Cost Efficiency', subtext: 'Modeled by retiring 4 mainframe hardware leases' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Hexbyte demonstrated mathematical determinism and regulatory compliance under stress test simulations.',
      author: 'Elena Rostova (Evaluation Lead)',
      role: 'Lead Systems Architect',
      company: 'Financial Systems Working Group'
    },
    relatedServices: [
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'High-Frequency Engine', slug: 'high-frequency-engine', category: 'ai' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'apex-logistics-mesh',
    title: 'Sub-Second Global Fleet Telemetry & Event Mesh',
    client: 'Sample Concept: Apex Logistics Prototype',
    isSample: true,
    industry: 'logistics',
    serviceCategory: 'data',
    tagline: 'Real-time edge telemetry synchronization prototype tracking simulated 4,200 distribution hubs.',
    overview: 'Reference implementation demonstrating unified telemetry routing from automated warehouse robotics to intermodal freight carriers.',
    challenge: 'Simulated distributed fleet experiencing disconnected telematics, telemetry packet drops over satellite uplinks, and dispatch conflicts.',
    solution: 'Engineered lightweight eBPF edge daemonsets with store-and-forward cryptographic event synchronization.',
    techStack: ['Go', 'eBPF', 'Kafka Streams', 'TimescaleDB', 'Kubernetes Edge'],
    keyFeatures: [
      { title: 'Sub-250ms Event Ingestion', description: 'Continuous sensor ingestion from mobile edge devices across low-bandwidth cellular links.' },
      { title: 'Predictive Dynamic Dispatch', description: 'Causal AI route optimization dynamically recalculating freight manifests upon telemetry triggers.' },
      { title: 'Zero-Data-Loss Buffering', description: 'Local NVMe ring buffers queuing telemetry during complete network drops.' },
    ],
    results: [
      { value: '210ms', label: 'Simulated Telemetry Ingestion Latency', subtext: 'P99 telemetry arrival down from 14-second satellite batching' },
      { value: '38%', label: 'Simulated Fuel & Dispatch Optimization', subtext: 'Modeled across dynamic routing algorithms in testbed' },
      { value: '4,200', label: 'Simulated Fleet Nodes Connected', subtext: 'Simultaneously synchronized in active-active topology' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: The edge event mesh reliably handled disconnected network partitions during simulated field testing.',
      author: 'Marcus Vance (Evaluation Lead)',
      role: 'Director of Fleet Telematics',
      company: 'Industrial Logistics Working Group'
    },
    relatedServices: [
      { title: 'Edge Telemetry & IoT Fleet Mesh', slug: 'edge-telemetry-mesh', category: 'data' },
      { title: 'Industrial IoT & Connected Devices', slug: 'iot', category: 'other' },
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
    ]
  },
  {
    slug: 'novaris-clinical-cloud',
    title: 'HIPAA-Compliant Sovereign Genomic Pipeline',
    client: 'Sample Concept: Novaris Healthcare Prototype',
    isSample: true,
    industry: 'healthcare',
    serviceCategory: 'ai',
    tagline: 'Secure confidential computing enclave prototype processing simulated 500TB genomic datasets.',
    overview: 'Reference architecture illustrating zero-knowledge multi-party computation across distributed hospital networks without moving raw patient records.',
    challenge: 'Clinical research networks constrained by HIPAA, GDPR Article 9, and cross-border biomedical data sovereignty regulations.',
    solution: 'Architected AMD SEV-SNP confidential hardware enclaves with encrypted federated queries and immutable audit trails.',
    techStack: ['C++20', 'AMD SEV-SNP', 'Nextflow', 'gRPC', 'Arrow Flight SQL'],
    keyFeatures: [
      { title: 'Hardware Memory Encryption', description: 'Host hypervisors cannot read patient genomic records in RAM.' },
      { title: 'Distributed Federated Analytics', description: 'Algorithms travel to the data; raw patient records never leave the hospital premise.' },
      { title: 'Automated HIPAA & FDA Audit Trails', description: 'Tamper-proof cryptographic hashes proving audit compliance.' },
    ],
    results: [
      { value: '48', label: 'Simulated Clinical Hubs Federated', subtext: 'Modeled across independent healthcare cloud enclaves' },
      { value: '100%', label: 'Simulated Cryptographic Enclave Attestation', subtext: 'Hardware-verified remote execution with zero plaintext leakage' },
      { value: '6.4x', label: 'Simulated Genomic Query Acceleration', subtext: 'Achieved via kernel-bypass memory buffers in testbed' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Demonstrates how confidential computing enables multi-center clinical research without regulatory compromises.',
      author: 'Dr. Henrik Vane (Evaluation Lead)',
      role: 'Head of Health Informatics',
      company: 'Biomedical Systems Working Group'
    },
    relatedServices: [
      { title: 'RAG Systems & Clinical Search', slug: 'rag-systems', category: 'ai' },
      { title: 'Predictive Analytics & Forecasting', slug: 'predictive-analytics', category: 'ai' },
      { title: 'Sovereign Compliance Shield', slug: 'sovereign-compliance-shield', category: 'cloud' },
    ]
  },
  {
    slug: 'vertex-streaming-media',
    title: 'Global Video Delivery & Edge Kernel Mesh',
    client: 'Sample Concept: Vertex Streaming Prototype',
    isSample: true,
    industry: 'enterprise-saas-media',
    serviceCategory: 'web',
    tagline: 'Deterministic edge caching and live streaming mesh prototype scaling to simulated 100M concurrent sessions.',
    overview: 'Reference implementation showcasing eBPF socket redirection for live low-latency video feeds across 120 global edge points of presence.',
    challenge: 'Global live broadcasts suffering from buffer underruns, TCP connection resets during regional ISP throttling, and CDN egress bills.',
    solution: 'Deployed Hexbyte Anycast Edge Mesh with customized eBPF XDP kernel packet filtering and QUIC stream multiplexing.',
    techStack: ['Rust', 'eBPF XDP', 'QUIC / HTTP3', 'Redis Enterprise', 'ClickHouse'],
    keyFeatures: [
      { title: 'Kernel-Level XDP Routing', description: 'Packets filtered and routed at the network card driver layer before kernel socket allocation.' },
      { title: 'QUIC Connection Migration', description: 'Clients switch from Wi-Fi to 5G without dropped video frames or socket re-negotiation.' },
      { title: 'Autonomous Edge Cache Eviction', description: 'Predictive caching algorithms pre-loading video chunks based on telemetry.' },
    ],
    results: [
      { value: '0.02%', label: 'Simulated Stream Rebuffer Rate', subtext: 'Benchmark reduced from 2.8% industry average in load tests' },
      { value: '42%', label: 'Simulated CDN Egress Cost Reduction', subtext: 'Achieved through peer-assisted edge mesh caching in testbed' },
      { value: '100M+', label: 'Simulated Concurrent Sessions', subtext: 'Validated under automated locust load injection' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: XDP kernel filtering completely eliminated socket starvation bottlenecks during peak simulated traffic bursts.',
      author: 'Sir Arthur Sterling (Evaluation Lead)',
      role: 'VP of Edge Infrastructure',
      company: 'Media Systems Working Group'
    },
    relatedServices: [
      { title: 'Hyperscale GPU Orchestrator', slug: 'elastic-gpu-orchestrator', category: 'ai' },
      { title: 'Frontend Development', slug: 'frontend-development', category: 'web' },
      { title: 'DevOps & GitOps Automation', slug: 'devops', category: 'cloud' },
    ]
  },
  {
    slug: 'aegis-defi-vaults',
    title: 'Multi-Signature Sovereign Settlement Vaults',
    client: 'Sample Concept: Aegis Protocol Prototype',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'blockchain',
    tagline: 'Formally verified smart contracts and threshold cryptography prototype securing simulated $2.4B in digital assets.',
    overview: 'Reference implementation of multi-cloud MPC (Multi-Party Computation) key management with mathematical invariant proofs.',
    challenge: 'Institutional crypto asset custody threatened by key leakage, smart contract reentrancy bugs, and slow multi-party signing.',
    solution: 'Engineered Rust smart contracts with formal mathematical verification via Coq and distributed Shamir secret sharing across isolated cloud enclaves.',
    techStack: ['Rust', 'Solidity', 'Threshold MPC', 'Wasm', 'Coq Formal Proofs'],
    keyFeatures: [
      { title: 'Formal Verification Invariant Proofs', description: 'Mathematical proof establishing that assets cannot be withdrawn without m-of-n consensus.' },
      { title: 'Hardware Enclave Key Generation', description: 'Private keys never exist as a whole; generated and stored as distributed mathematical shards.' },
      { title: 'Sub-Second Settlement Finality', description: 'Direct layer-1 and layer-2 bridge routing with automated slippage protection.' },
    ],
    results: [
      { value: 'Zero', label: 'Simulated Critical Vulnerabilities', subtext: 'Validated under automated symbolic execution and fuzzing' },
      { value: '850ms', label: 'Simulated Multi-Party Signing Latency', subtext: 'Down from 45 seconds in traditional threshold schemes' },
      { value: '$2.4B', label: 'Simulated Vault Capacity Tested', subtext: 'Stress-tested under simulated adversarial network partitions' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Formal verification proved critical reentrancy resistance before testnet deployment.',
      author: 'Catherine Morland (Evaluation Lead)',
      role: 'Chief Cryptographic Engineer',
      company: 'Blockchain Security Working Group'
    },
    relatedServices: [
      { title: 'Audited Smart Contracts', slug: 'smart-contracts', category: 'blockchain' },
      { title: 'Institutional DeFi Development', slug: 'defi-development', category: 'blockchain' },
      { title: 'Enterprise Crypto Wallets', slug: 'crypto-wallet', category: 'blockchain' },
    ]
  },
  {
    slug: 'stratum-energy-iot',
    title: 'Sub-Second Industrial Telemetry for Grid Networks',
    client: 'Sample Concept: Stratum Energy Prototype',
    isSample: true,
    industry: 'logistics',
    serviceCategory: 'other',
    tagline: 'Industrial telemetry network prototype processing simulated 1.2M smart grid sensors with sub-second anomaly detection.',
    overview: 'Reference architecture demonstrating SCADA-integrated event mesh for renewable energy storage and microgrid power routing.',
    challenge: 'Power grids experiencing frequency oscillations due to intermittent solar/wind inputs and delayed sensor reporting.',
    solution: 'Deployed Hexbyte Real-Time Mesh with OPC-UA industrial protocol bridging and localized FPGA time-series inference.',
    techStack: ['C++20', 'FPGA Accel', 'OPC-UA', 'Rust', 'InfluxDB IOx'],
    keyFeatures: [
      { title: 'Microsecond Frequency Tracking', description: 'Continuous phase angle and grid frequency sampling at 60Hz.' },
      { title: 'Autonomous Battery Storage Balancing', description: 'Automated dispatch of battery reserves within 12 milliseconds of detected voltage drops.' },
      { title: 'Air-Gapped SCADA Isolation', description: 'Unidirectional data diodes ensuring operational tech networks cannot be accessed from cloud.' },
    ],
    results: [
      { value: '12ms', label: 'Simulated Grid Balancing Response', subtext: 'Reduced from 4.5 seconds under legacy SCADA polling' },
      { value: '99.999%', label: 'Simulated Fault Invariant Uptime', subtext: 'Zero undetected telemetry drops during 90-day testbed run' },
      { value: '1.2M', label: 'Simulated Smart Meters Connected', subtext: 'Synchronized over encrypted MQTT-SN and cellular mesh' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: The FPGA edge inference successfully detected synthetic frequency anomalies in sub-15ms windows.',
      author: 'Prof. Diane Hirsch (Evaluation Lead)',
      role: 'Principal Grid Systems Architect',
      company: 'Energy Telematics Working Group'
    },
    relatedServices: [
      { title: 'Spatial Computing & 3D Twins', slug: 'ar-vr', category: 'other' },
      { title: 'Industrial IoT Fleet Engineering', slug: 'iot', category: 'other' },
      { title: 'Predictive Analytics & Forecasting', slug: 'predictive-analytics', category: 'ai' },
    ]
  },
  {
    slug: 'omniplex-enterprise-ai',
    title: 'Autonomous Multi-Agent Copilot Infrastructure',
    client: 'Sample Concept: Omniplex AI Prototype',
    isSample: true,
    industry: 'enterprise-saas-media',
    serviceCategory: 'ai',
    tagline: 'Enterprise AI multi-agent orchestration fabric prototype automating simulated 8,000 corporate workflows daily.',
    overview: 'Reference implementation of multi-agent LLM systems with deterministic sandboxing and zero hallucination guardrails.',
    challenge: 'Enterprise knowledge workers overwhelmed by disparate SaaS tools, manual data reconciliation, and compliance risks.',
    solution: 'Engineered Hexbyte Agentic Mesh connecting 14 foundational models with tool-use sandboxes and verifiable audit logging.',
    techStack: ['Python', 'TypeScript', 'LangGraph', 'FastAPI', 'VectorDB Milvus'],
    keyFeatures: [
      { title: 'Verifiable Tool Execution Sandboxes', description: 'Agents run code in ephemeral micro-VMs with zero access to production credentials.' },
      { title: 'Causal Workflow Graph Verification', description: 'Every agent decision is verified against deterministic policy rules before execution.' },
      { title: 'Multi-Model Redundancy', description: 'Automatic failover across OpenAI, Anthropic, and open-source models during API degradation.' },
    ],
    results: [
      { value: '82%', label: 'Simulated Workflow Automation', subtext: 'Automated routine invoice, ticket, and reporting tasks in testbed' },
      { value: '4.1x', label: 'Simulated Engineering Productivity Lift', subtext: 'Observed across synthetic code review and RFC drafting tasks' },
      { value: 'Zero', label: 'Simulated Policy Violations', subtext: 'Prevented via automated guardrail interception layers' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Multi-agent coordination operated reliably under rigorous sandbox containment policies.',
      author: 'Elena Rostova (Evaluation Lead)',
      role: 'Head of Enterprise Automation',
      company: 'Cognitive Systems Working Group'
    },
    relatedServices: [
      { title: 'AI Process Automation', slug: 'ai-process-automation', category: 'ai' },
      { title: 'Document AI & Neural OCR', slug: 'document-ai-ocr', category: 'ai' },
      { title: 'Autonomous Multi-Agent Systems', slug: 'ai-agents', category: 'ai' },
    ]
  },
  {
    slug: 'chronos-capital-hft',
    title: 'Sub-Microsecond Deterministic Financial Engine',
    client: 'Sample Concept: Chronos Trading Prototype',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'ai',
    tagline: 'Microsecond algorithmic order routing prototype processing simulated 450,000 orders/sec during market volatility.',
    overview: 'Reference implementation demonstrating Linux kernel bypass and lock-free memory ring buffers for capital markets.',
    challenge: 'Algorithmic execution desks losing arbitrage opportunities due to operating system interrupt latency and memory jitter.',
    solution: 'Engineered Solarflare OpenOnload kernel bypass with custom FPGA trade parsing and C++20 lock-free ring buffers.',
    techStack: ['C++20', 'Solarflare EF_VI', 'FPGA Xilinx', 'Linux Kernel Bypass', 'KDB+/Q'],
    keyFeatures: [
      { title: '820ns Wire-to-Wire Latency', description: 'Order parsing, risk verification, and network packet generation completed in under 1 microsecond.' },
      { title: 'Lock-Free Queue Architecture', description: 'Zero mutex contention across 64 dedicated CPU cores locked to isolated isolcpus.' },
      { title: 'Real-Time Hardware Risk Checks', description: 'Pre-trade risk limits enforced directly on FPGA silicon before packet egress.' },
    ],
    results: [
      { value: '820ns', label: 'Simulated P99 Execution Latency', subtext: 'Down from 18 microseconds under standard Linux socket stack' },
      { value: '450,000', label: 'Simulated Orders Processed / Sec', subtext: 'Sustained throughput under synthetic volatility injection' },
      { value: 'Zero', label: 'Simulated Dropped Packets', subtext: 'Validated across 100GbE network taps in hardware testbed' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Wire-to-wire latency benchmarks held steady at 820ns throughout simulated high-volatility bursts.',
      author: 'Dr. Nikolai Voronin (Evaluation Lead)',
      role: 'Chief Systems Architect',
      company: 'Algorithmic Engineering Working Group'
    },
    relatedServices: [
      { title: 'High-Frequency Engine', slug: 'high-frequency-engine', category: 'ai' },
      { title: 'Algorithmic AI Trading Bots', slug: 'ai-trading-bots', category: 'ai' },
      { title: 'Custom ML Model Development', slug: 'ml-model-development', category: 'ai' },
    ]
  },
  {
    slug: 'multi-cloud-orchestration',
    title: 'Multi-Cloud Fabric Control Plane Prototype',
    client: 'Sample Concept: Global Cloud Mesh',
    isSample: true,
    industry: 'cloud',
    serviceCategory: 'cloud',
    tagline: 'Illustrative reference architecture and conceptual implementation for multi-cloud fabric control plane prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for multi-cloud fabric control plane prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying multi-cloud fabric control plane prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for multi-cloud-orchestration.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'high-frequency-engine',
    title: 'Nanosecond Order Router Prototype',
    client: 'Sample Concept: Financial Execution Desk',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for nanosecond order router prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for nanosecond order router prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying nanosecond order router prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for high-frequency-engine.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'zero-trust-security',
    title: 'Cryptographic Hardware Mesh Prototype',
    client: 'Sample Concept: Sovereign Security Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'cloud',
    tagline: 'Illustrative reference architecture and conceptual implementation for cryptographic hardware mesh prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for cryptographic hardware mesh prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying cryptographic hardware mesh prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for zero-trust-security.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'edge-telemetry-mesh',
    title: 'Edge Telemetry & Sensor Mesh Prototype',
    client: 'Sample Concept: Smart Cities Lab',
    isSample: true,
    industry: 'logistics',
    serviceCategory: 'data',
    tagline: 'Illustrative reference architecture and conceptual implementation for edge telemetry & sensor mesh prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for edge telemetry & sensor mesh prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying edge telemetry & sensor mesh prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for edge-telemetry-mesh.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'iot',
    title: 'Industrial IoT Telemetry Prototype',
    client: 'Sample Concept: Connected Factory Mesh',
    isSample: true,
    industry: 'logistics',
    serviceCategory: 'other',
    tagline: 'Illustrative reference architecture and conceptual implementation for industrial iot telemetry prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for industrial iot telemetry prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying industrial iot telemetry prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for iot.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'autonomous-event-mesh',
    title: 'Real-Time Streaming Event Mesh Prototype',
    client: 'Sample Concept: Enterprise Event Grid',
    isSample: true,
    industry: 'enterprise-saas-media',
    serviceCategory: 'data',
    tagline: 'Illustrative reference architecture and conceptual implementation for real-time streaming event mesh prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for real-time streaming event mesh prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying real-time streaming event mesh prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for autonomous-event-mesh.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'rag-systems',
    title: 'Enterprise Knowledge RAG Engine Prototype',
    client: 'Sample Concept: Knowledge Mesh Lab',
    isSample: true,
    industry: 'enterprise-saas-media',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for enterprise knowledge rag engine prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for enterprise knowledge rag engine prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying enterprise knowledge rag engine prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for rag-systems.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'predictive-analytics',
    title: 'Continuous Predictive Analytics Mesh Prototype',
    client: 'Sample Concept: Forecasting Testbed',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for continuous predictive analytics mesh prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for continuous predictive analytics mesh prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying continuous predictive analytics mesh prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for predictive-analytics.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'sovereign-compliance-shield',
    title: 'Sovereign Data Residency Shield Prototype',
    client: 'Sample Concept: EU Compliance Lab',
    isSample: true,
    industry: 'healthcare',
    serviceCategory: 'cloud',
    tagline: 'Illustrative reference architecture and conceptual implementation for sovereign data residency shield prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for sovereign data residency shield prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying sovereign data residency shield prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for sovereign-compliance-shield.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'elastic-gpu-orchestrator',
    title: 'Distributed GPU Cluster Fabric Prototype',
    client: 'Sample Concept: AI Compute Grid',
    isSample: true,
    industry: 'enterprise-saas-media',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for distributed gpu cluster fabric prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for distributed gpu cluster fabric prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying distributed gpu cluster fabric prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for elastic-gpu-orchestrator.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'frontend-development',
    title: 'High-Density Financial Dashboard Prototype',
    client: 'Sample Concept: Trading Viewport Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'web',
    tagline: 'Illustrative reference architecture and conceptual implementation for high-density financial dashboard prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for high-density financial dashboard prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying high-density financial dashboard prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for frontend-development.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'devops',
    title: 'Autonomous GitOps Delivery Pipeline Prototype',
    client: 'Sample Concept: SRE Automation Lab',
    isSample: true,
    industry: 'cloud',
    serviceCategory: 'cloud',
    tagline: 'Illustrative reference architecture and conceptual implementation for autonomous gitops delivery pipeline prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for autonomous gitops delivery pipeline prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying autonomous gitops delivery pipeline prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for devops.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'smart-contracts',
    title: 'Formally Verified Smart Contracts Prototype',
    client: 'Sample Concept: Web3 Security Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'blockchain',
    tagline: 'Illustrative reference architecture and conceptual implementation for formally verified smart contracts prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for formally verified smart contracts prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying formally verified smart contracts prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for smart-contracts.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'defi-development',
    title: 'Decentralized Liquidity Vault Prototype',
    client: 'Sample Concept: Liquidity Mesh Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'blockchain',
    tagline: 'Illustrative reference architecture and conceptual implementation for decentralized liquidity vault prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for decentralized liquidity vault prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying decentralized liquidity vault prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for defi-development.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'crypto-wallet',
    title: 'MPC Institutional Custody Wallet Prototype',
    client: 'Sample Concept: Digital Custody Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'blockchain',
    tagline: 'Illustrative reference architecture and conceptual implementation for mpc institutional custody wallet prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for mpc institutional custody wallet prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying mpc institutional custody wallet prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for crypto-wallet.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'ar-vr',
    title: 'Industrial Digital Twin 3D Viewport Prototype',
    client: 'Sample Concept: Spatial Twin Lab',
    isSample: true,
    industry: 'logistics',
    serviceCategory: 'other',
    tagline: 'Illustrative reference architecture and conceptual implementation for industrial digital twin 3d viewport prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for industrial digital twin 3d viewport prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying industrial digital twin 3d viewport prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for ar-vr.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'ai-process-automation',
    title: 'Autonomous Back-Office Automation Prototype',
    client: 'Sample Concept: Robotic Process Lab',
    isSample: true,
    industry: 'healthcare',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for autonomous back-office automation prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for autonomous back-office automation prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying autonomous back-office automation prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for ai-process-automation.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'document-ai-ocr',
    title: 'High-Throughput Regulatory OCR Prototype',
    client: 'Sample Concept: Document Neural Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for high-throughput regulatory ocr prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for high-throughput regulatory ocr prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying high-throughput regulatory ocr prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for document-ai-ocr.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'ai-agents',
    title: 'Autonomous Incident Remediation Agent Prototype',
    client: 'Sample Concept: Autonomous SRE Lab',
    isSample: true,
    industry: 'cloud',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for autonomous incident remediation agent prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for autonomous incident remediation agent prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying autonomous incident remediation agent prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for ai-agents.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'ai-trading-bots',
    title: 'Deterministic Algorithmic Trading Sandbox Prototype',
    client: 'Sample Concept: Quantitative Lab',
    isSample: true,
    industry: 'fintech-bfsi',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for deterministic algorithmic trading sandbox prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for deterministic algorithmic trading sandbox prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying deterministic algorithmic trading sandbox prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for ai-trading-bots.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
  {
    slug: 'ml-model-development',
    title: 'Private Model Fine-Tuning Fabric Prototype',
    client: 'Sample Concept: Confidential ML Lab',
    isSample: true,
    industry: 'healthcare',
    serviceCategory: 'ai',
    tagline: 'Illustrative reference architecture and conceptual implementation for private model fine-tuning fabric prototype.',
    overview: 'Simulated testbed evaluating performance bounds, fault tolerance, and developer velocity for private model fine-tuning fabric prototype.',
    challenge: 'Architectural bottlenecks in conventional architectures when deploying private model fine-tuning fabric prototype at enterprise scale.',
    solution: 'Engineered utilizing Hexbyte modular building blocks, kernel-level networking, and formal invariant validation.',
    techStack: ['Rust', 'TypeScript', 'Linux eBPF', 'Docker', 'PostgreSQL'],
    keyFeatures: [
      { title: 'Architectural Modularization', description: 'Decoupled service boundary and deterministic API contract for ml-model-development.' },
      { title: 'Fault Isolation Enclaves', description: 'Hardened sandboxes preventing cascading failures across dependent subsystems.' },
      { title: 'Continuous Telemetry Streaming', description: 'Comprehensive telemetry exported via OpenTelemetry standards.' },
    ],
    results: [
      { value: 'Sub-10ms', label: 'Simulated Median Latency', subtext: 'Validated across synthetic stress testing runs' },
      { value: '99.99%', label: 'Simulated Target SLA', subtext: 'Continuous availability maintained during automated chaos tests' },
      { value: '10x', label: 'Simulated Throughput Scaling', subtext: 'Linear throughput expansion observed across worker nodes' },
    ],
    galleryScreens: [
      { id: 'screen-1', caption: 'Conceptual Control Plane & Architecture Telemetry', type: 'dashboard' },
      { id: 'screen-2', caption: 'Mobile Operational Viewport & Alerting Prototype', type: 'mobile' },
      { id: 'screen-3', caption: 'Synthetic Benchmark & Invariant Telemetry Stream', type: 'analytics' }
    ],
    testimonial: {
      quote: 'Representative engineering evaluation: Architecture prototype achieved deterministic benchmark performance during testbed stress trials.',
      author: 'Alex Mercer (Evaluation Lead)',
      role: 'Principal Solutions Architect',
      company: 'Engineering Architecture Working Group'
    },
    relatedServices: [
      { title: 'Autonomous Event Mesh', slug: 'autonomous-event-mesh', category: 'data' },
      { title: 'Multi-Cloud Fabric Orchestration', slug: 'multi-cloud-orchestration', category: 'cloud' },
      { title: 'Zero-Trust Security Engine', slug: 'zero-trust-security', category: 'cloud' },
    ]
  },
];
