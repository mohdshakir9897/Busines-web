export interface JobDetail {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salaryRange: string;
  experienceLevel: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  preferredQualifications: string[];
  benefits: string[];
}

export const JOBS_DETAILED: JobDetail[] = [
  {
    slug: 'principal-distributed-systems-engineer',
    title: 'Principal Distributed Systems Engineer',
    department: 'Core Infrastructure',
    location: 'San Francisco, CA / New York, NY / Remote',
    type: 'Full-Time',
    salaryRange: '$280,000 - $360,000 + Equity',
    experienceLevel: 'Staff / Principal (8+ Years)',
    summary: 'Lead the design and implementation of our global autonomous event mesh and multi-cloud synchronization engine. You will work on low-latency consensus, lock-free concurrency, and distributed state coordination handling tens of millions of events per second.',
    responsibilities: [
      'Architect and implement fault-tolerant consensus algorithms operating across heterogeneous cloud networks.',
      'Optimize high-throughput serialization pipelines written in Rust and modern C++ utilizing Linux io_uring.',
      'Lead cross-functional architecture reviews and author technical RFCs for core distributed primitives.',
      'Partner directly with enterprise infrastructure leads at Fortune 500 financial and tech institutions.'
    ],
    qualifications: [
      '8+ years of experience engineering high-performance distributed systems in production.',
      'Deep mastery of systems programming in Rust, C++, or Go.',
      'Proven understanding of consensus protocols (Raft, Paxos, Multi-Paxos) and distributed clock synchronization.',
      'Track record of building systems serving mission-critical workloads with strict SLA requirements.'
    ],
    preferredQualifications: [
      'Previous contributions to open-source distributed projects (Kafka, TiDB, CockroachDB, Envoy).',
      'Familiarity with Linux kernel networking and hardware acceleration (DPDK, Solarflare, RDMA).',
      'BS/MS/PhD in Computer Science or equivalent practical experience.'
    ],
    benefits: [
      'Top-tier comprehensive medical, dental, and vision health coverage (100% company-paid).',
      'Significant founding-grade equity packages with generous exercise windows.',
      'Flexible remote-first culture with global co-working and office allowances.',
      '$5,000 annual continuing education, conference, and research budget.'
    ]
  },
  {
    slug: 'staff-ebpf-kernel-developer',
    title: 'Staff eBPF & Linux Kernel Developer',
    department: 'Kernel & Systems Engineering',
    location: 'London, UK / Zurich, Switzerland / Remote',
    type: 'Full-Time',
    salaryRange: '£190,000 - £250,000 + Equity',
    experienceLevel: 'Staff (6+ Years)',
    summary: 'Design and optimize our non-intrusive eBPF telemetry probes and kernel socket redirection routing layers. You will write high-performance C and Rust BPF programs that inspect and route traffic with zero user-space context switching.',
    responsibilities: [
      'Write, verify, and maintain eBPF programs for Linux socket redirection, packet inspection, and eBPF LSM security.',
      'Profile and eliminate CPU cache misses and lock contentions across diverse Linux kernel versions (5.4 to 6.8+).',
      'Develop automated CI/CD hardware testing pipelines across physical bare-metal architectures.',
      'Collaborate with the Linux kernel community and submit upstream enhancements.'
    ],
    qualifications: [
      '6+ years of systems programming experience with C and Linux kernel internals.',
      'Extensive hands-on experience developing and debugging eBPF programs (BCC, libbpf, aya).',
      'Deep comprehension of TCP/IP stack implementation and network namespace routing.',
      'Proficiency in low-level debugging tools (perf, gdb, bpftrace, ftrace).'
    ],
    preferredQualifications: [
      'Active contributions to the Linux kernel or eBPF tooling.',
      'Experience with eBPF verifier optimizations and CO-RE (Compile Once – Run Everywhere).',
      'Background in network security or container runtime internals.'
    ],
    benefits: [
      'Competitive European compensation with comprehensive private health insurance.',
      'Substantial equity grant with annual refreshers.',
      'Home office hardware setup budget ($3,500) and ergonomic equipment.',
      'Annual company retreats in international locations.'
    ]
  },
  {
    slug: 'director-enterprise-solutions-architecture',
    title: 'Director of Enterprise Solutions Architecture',
    department: 'Customer Engineering',
    location: 'New York, NY / Singapore / Hybrid',
    type: 'Full-Time',
    salaryRange: '$260,000 - $330,000 + Incentive Bonus',
    experienceLevel: 'Director (10+ Years)',
    summary: 'Lead our global team of enterprise solutions architects serving Tier-1 investment banks, healthcare systems, and logistics enterprises. You will bridge complex systems engineering with executive C-level stakeholder consultation.',
    responsibilities: [
      'Lead technical pre-sales and post-sales architectural reviews for Fortune 500 deployments.',
      'Mentor and scale a world-class team of Solutions Architects across North America, Europe, and Asia-Pacific.',
      'Author authoritative enterprise reference architectures, whitepapers, and sizing calculators.',
      'Serve as executive sponsor for mission-critical client cloud migrations and compliance sign-offs.'
    ],
    qualifications: [
      '10+ years of technical experience in solutions architecture, distributed systems, or enterprise cloud infrastructure.',
      'Proven track record leading technical teams engaging with Fortune 500 CTOs, CIOs, and CISOs.',
      'Deep architectural knowledge of AWS, Google Cloud, Azure, and Kubernetes.',
      'Exceptional verbal and written technical communication skills.'
    ],
    preferredQualifications: [
      'Prior experience at major cloud providers (AWS, GCP, Azure) or infrastructure leaders (Snowflake, Datadog, Stripe).',
      'Hands-on expertise with regulatory compliance (SOC2, HIPAA, FedRAMP, DORA).',
      'MBA or advanced technical degree.'
    ],
    benefits: [
      'Executive equity grant and competitive performance bonus.',
      'Full family healthcare coverage and executive wellness stipends.',
      'First-class corporate travel allowance for executive summits.',
      '401(k) retirement matching up to 5% with immediate vesting.'
    ]
  },
  {
    slug: 'lead-site-reliability-architect',
    title: 'Lead Site Reliability Architect',
    department: 'Site Reliability Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-Time',
    salaryRange: '$220,000 - $290,000 + Equity',
    experienceLevel: 'Lead (7+ Years)',
    summary: 'Define and defend the 99.999% SLA across our globally distributed control planes. You will architect chaos engineering simulations, build automated runbooks, and lead high-severity incident responses.',
    responsibilities: [
      'Design and manage our global multi-region control plane spanning 42 public cloud regions.',
      'Build automated chaos testing frameworks to inject latency and regional blackouts into production.',
      'Design observability pipelines correlating OpenTelemetry traces, kernel metrics, and system invariants.',
      'Champion a blameless post-mortem culture and turn operational learnings into autonomous runbooks.'
    ],
    qualifications: [
      '7+ years of SRE, DevOps, or platform infrastructure experience supporting hyperscale systems.',
      'Deep expertise in Kubernetes cluster management, Terraform, and multi-cloud networking.',
      'Strong programming proficiency in Go, Python, or Rust for systems tooling.',
      'Experience managing on-call rotations for critical Tier-1 services.'
    ],
    preferredQualifications: [
      'Experience with eBPF-based observability platforms (Cilium, Pixie, Hubble).',
      'Background in financial high-availability or telecommunications networks.'
    ],
    benefits: [
      'Top-tier medical, dental, and vision insurance with wellness allowances.',
      'Generous paid parental leave (16 weeks fully paid) for all new parents.',
      'Flexible PTO policy with mandatory minimum time-off guidelines.',
      'Stock option grants with extended 10-year exercise window.'
    ]
  },
  {
    slug: 'senior-cryptography-security-engineer',
    title: 'Senior Cryptography & Security Engineer',
    department: 'Cybersecurity',
    location: 'Zurich, Switzerland / London, UK / Remote',
    type: 'Full-Time',
    salaryRange: '$210,000 - $275,000 + Equity',
    experienceLevel: 'Senior (5+ Years)',
    summary: 'Build hardware-enforced sovereign data boundaries and confidential computing protocols. You will implement cryptographic attestation, mutual TLS pipelines, and zero-knowledge evidence generation.',
    responsibilities: [
      'Implement confidential computing integrations using AMD SEV-SNP, Intel SGX, and AWS Nitro Enclaves.',
      'Architect mutual TLS session rotation algorithms executing sub-second key handshakes at massive scale.',
      'Audit codebase for side-channel vulnerabilities, cryptographic misconfigurations, and timing leaks.',
      'Interface with external security audit firms for annual SOC2 Type II, ISO 27001, and FedRAMP evaluations.'
    ],
    qualifications: [
      '5+ years of software engineering experience focusing on cryptography, PKI, or hardware security.',
      'Thorough understanding of applied cryptography (AES-GCM, ECDSA, ChaCha20-Poly1305, Post-Quantum algorithms).',
      'Strong proficiency in Rust or modern C/C++.',
      'Hands-on experience with Hardware Security Modules (PKCS#11, TPM 2.0).'
    ],
    preferredQualifications: [
      'Published research or contributions in applied cryptography or secure multiparty computation.',
      'Experience with post-quantum cryptography standards (ML-KEM, Dilithium).'
    ],
    benefits: [
      'Generous European compensation and private health benefits.',
      'Equity options with direct upside in platform growth.',
      'Generous research and patent application bonus program.',
      'Flexible hybrid and remote working models.'
    ]
  },
  {
    slug: 'principal-product-designer',
    title: 'Principal Enterprise Product Designer',
    department: 'Design & User Experience',
    location: 'San Francisco, CA / New York, NY / Remote',
    type: 'Full-Time',
    salaryRange: '$210,000 - $270,000 + Equity',
    experienceLevel: 'Principal (7+ Years)',
    summary: 'Shape the visual language and user experience of the Hexbyte autonomous control plane. You will transform complex distributed systems topologies, live metrics graphs, and causal graphs into intuitive, elegant interfaces.',
    responsibilities: [
      'Lead design systems and user experience across our web console, CLI tooling, and mobile alerts.',
      'Design high-density data visualizations for multi-cloud dependency graphs and live telemetry streams.',
      'Collaborate closely with distributed systems engineers to ensure accurate mental models in the UI.',
      'Conduct deep ethnographic user interviews with principal SREs, CISOs, and enterprise architects.'
    ],
    qualifications: [
      '7+ years of experience designing complex B2B SaaS, developer tools, or data-dense dashboards.',
      'Exceptional portfolio showcasing typography, layout math, design systems, and data visualization.',
      'Deep proficiency in Figma, design systems token architectures, and front-end code (HTML, Tailwind CSS, React).',
      'Passion for crafting high-fidelity, clean interfaces free of generic templates.'
    ],
    preferredQualifications: [
      'Experience designing cloud consoles (AWS, GCP, Datadog, Grafana) or developer platforms.',
      'Hands-on knowledge of WebGL, Canvas data rendering, and motion design.'
    ],
    benefits: [
      'Comprehensive 100% company-paid health, dental, and vision insurance.',
      'Significant equity grant with favorable tax options.',
      'Top-of-the-line Apple workstation hardware and home office stipend.',
      'Annual design conference and professional development budget.'
    ]
  }
];
