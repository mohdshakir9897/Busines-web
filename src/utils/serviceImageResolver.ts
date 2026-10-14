import artAi from '../assets/images/art_ai_intelligence.jpg';
import artCloud from '../assets/images/art_cloud_devops.jpg';
import artData from '../assets/images/art_data_mesh.jpg';
import artSecurity from '../assets/images/art_security_shield.jpg';
import artMobile from '../assets/images/art_mobile_hardware.jpg';
import artWeb from '../assets/images/art_web_architecture.jpg';
import heroFintech from '../assets/images/hero_fintech_security_1791612816960.jpg';
import heroLogistics from '../assets/images/hero_global_logistics_1791612830723.jpg';
import heroFlagship from '../assets/images/hero_enterprise_flagship.jpg';

export interface ServiceShowcaseData {
  image: string;
  badge: string;
  caption: string;
  statusText: string;
  metrics: { label: string; value: string }[];
}

export function getServiceShowcaseData(category?: string, slug?: string): ServiceShowcaseData {
  const cat = (category || '').toLowerCase();
  const s = (slug || '').toLowerCase();

  // 1. AI & Machine Learning Services
  if (cat === 'ai' || s.includes('ai') || s.includes('llm') || s.includes('agent') || s.includes('machine-learning') || s.includes('neural') || s.includes('copilot') || s.includes('rag') || s.includes('nlp')) {
    return {
      image: artAi,
      badge: 'Neural Architecture & Cognition Lattice',
      caption: 'Autonomous Synaptic Task Orchestration & Multi-Model Inference Mesh',
      statusText: 'Active Inference Fabric · 99.8% Deterministic Accuracy',
      metrics: [
        { label: 'Autonomous Agent Tasks', value: '215 Tasks Active' },
        { label: 'Token Cost Arbitrage', value: '+38% Optimized' },
        { label: 'Safety Invariant Verification', value: '100% Attested' }
      ]
    };
  }

  // 2. Data Engineering & Streaming Mesh
  if (cat === 'data' || s.includes('data') || s.includes('mesh') || s.includes('stream') || s.includes('kafka') || s.includes('flink') || s.includes('pipeline') || s.includes('analytics') || s.includes('etl') || s.includes('warehouse')) {
    return {
      image: artData,
      badge: 'Data Mesh & Kinetic Stream Architecture',
      caption: 'Real-Time Distributed Optical Serialization & Event Telemetry',
      statusText: 'Synchronized Multi-Region Mesh · < 0.38ms P99 Latency',
      metrics: [
        { label: 'Distributed Event Velocity', value: '4.8M ev/sec' },
        { label: 'Serialization Latency', value: '< 0.38ms P99' },
        { label: 'Data Loss Invariant', value: '0.00% Zero-Loss' }
      ]
    };
  }

  // 3. Cloud Infrastructure, Kubernetes & DevOps
  if (cat === 'cloud' || cat === 'devops' || s.includes('cloud') || s.includes('kubernetes') || s.includes('infrastructure') || s.includes('multi-cloud') || s.includes('aws') || s.includes('azure') || s.includes('gcp')) {
    return {
      image: artCloud,
      badge: 'Hyper-Scale Cloud Infrastructure',
      caption: 'Active-Active Multi-Cloud Topology & Dynamic Sovereign Enclaves',
      statusText: 'Multi-Cloud Fabric · 99.999% Availability SLA',
      metrics: [
        { label: 'Compute Cost Reduction', value: '-42% Verified' },
        { label: 'Active Sovereign Regions', value: '42 Locations' },
        { label: 'Failover Mitigation', value: '< 1.2s Zero-Loss' }
      ]
    };
  }

  // 4. Cybersecurity & Zero-Trust Compliance
  if (cat === 'security' || s.includes('security') || s.includes('zero-trust') || s.includes('compliance') || s.includes('audit') || s.includes('soc') || s.includes('iam') || s.includes('penetration')) {
    return {
      image: artSecurity,
      badge: 'Zero-Trust Cryptographic Shield',
      caption: 'Continuous Cryptographic Enclave Attestation & Automated SOC 2 Guardrails',
      statusText: 'Hardware TPM 2.0 Attested · 100% Policy Compliance',
      metrics: [
        { label: 'SOC 2 Type II Posture', value: '100% Certified' },
        { label: 'Automated Containment', value: '2,349 Blocked' },
        { label: 'Incident MTTR', value: '< 18 Minutes' }
      ]
    };
  }

  // 5. Mobile Applications & Edge Ecosystem
  if (cat === 'mobile' || s.includes('mobile') || s.includes('ios') || s.includes('android') || s.includes('flutter') || s.includes('react-native') || s.includes('app')) {
    return {
      image: artMobile,
      badge: 'Edge Hardware & Fluid Mobile Systems',
      caption: 'Sub-Millisecond Native Rendering & Distributed Edge Synchronization',
      statusText: 'Global Edge Fleet · 60fps Native Fluidity',
      metrics: [
        { label: 'Crash-Free Sessions', value: '99.98% Monitored' },
        { label: 'Cold Launch Speed', value: '< 240ms P95' },
        { label: 'Cross-Platform Parity', value: '100% Shared Logic' }
      ]
    };
  }

  // 6. Web Architecture & Digital Experience
  if (cat === 'web' || s.includes('web') || s.includes('frontend') || s.includes('ui-ux') || s.includes('portal') || s.includes('website')) {
    return {
      image: artWeb,
      badge: 'Modern Web Platform Architecture',
      caption: 'Micro-Frontend Modular Systems & Prismatic Spatial Interfaces',
      statusText: 'Global Edge Delivery · < 100ms TTFB Worldwide',
      metrics: [
        { label: 'Lighthouse Performance', value: '99/100 Core Web' },
        { label: 'Global TTFB', value: '< 85ms Worldwide' },
        { label: 'SEO Authority Index', value: '100% Score' }
      ]
    };
  }

  // 7. Blockchain, Smart Contracts & Cryptography
  if (cat === 'blockchain' || s.includes('blockchain') || s.includes('smart-contracts') || s.includes('defi') || s.includes('token') || s.includes('dapp') || s.includes('crypto')) {
    return {
      image: artAi,
      badge: 'Decentralized Ledger Architecture',
      caption: 'Zero-Knowledge Cryptographic Prover & Formally Verified Consensus',
      statusText: 'Formal Bytecode Verification · Zero-Loss Invariant',
      metrics: [
        { label: 'Smart Contract Formal Proofs', value: '100% Verified' },
        { label: 'Gas Optimization Arbitrage', value: '-34% Saved' },
        { label: 'Consensus Finality', value: '< 400ms Sub-Second' }
      ]
    };
  }

  // 8. Capital Markets & Financial Technology
  if (cat === 'fintech' || s.includes('fintech') || s.includes('trading') || s.includes('banking') || s.includes('market')) {
    return {
      image: heroFintech,
      badge: 'Capital Markets Execution Fabric',
      caption: 'Microsecond High-Frequency Execution & Deterministic Risk Engine',
      statusText: 'Bank-Grade Compliance · Dodd-Frank & MiFID II Ready',
      metrics: [
        { label: 'Annual Volume Cleared', value: '$42B+ Processed' },
        { label: 'Execution Jitter', value: '0.04µs P99' },
        { label: 'Audit Trail Immutability', value: 'WORM Verified' }
      ]
    };
  }

  // 9. Global Logistics & Industrial Edge
  if (cat === 'logistics' || s.includes('logistics') || s.includes('iot') || s.includes('edge') || s.includes('supply')) {
    return {
      image: heroLogistics,
      badge: 'Physical-to-Digital Fleet Mesh',
      caption: 'Synchronized Physical & Digital Supply Chain Telemetry Grid',
      statusText: 'Connected Industrial IoT · Store-and-Forward Buffering',
      metrics: [
        { label: 'Bandwidth Compression', value: '99.4% Delta' },
        { label: 'Connected Fleet Nodes', value: '18,500+ Active' },
        { label: 'Routing Efficiency', value: '+38% Boost' }
      ]
    };
  }

  // 10. General Enterprise Computing Flagship (Default)
  return {
    image: heroFlagship,
    badge: 'Enterprise Computing Engine',
    caption: 'Monolithic Mission-Critical Systems & Sovereign Cloud Operations',
    statusText: 'Autonomous Operational Velocity · 99.999% SLA',
    metrics: [
      { label: 'Operational Velocity', value: '4.8x Surge' },
      { label: 'Platform Availability', value: '99.999% Guaranteed' },
      { label: 'Annual Client Spend Saved', value: '$1.1M Verified' }
    ]
  };
}
