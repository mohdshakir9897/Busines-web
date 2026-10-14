import saasAiAgents from '../assets/images/saas_ai_agents_showcase.jpg';
import saasDataMesh from '../assets/images/saas_data_mesh_showcase.jpg';
import saasMultiCloud from '../assets/images/saas_multicloud_banner.jpg';
import saasSecurity from '../assets/images/saas_security_banner.jpg';
import heroFintech from '../assets/images/hero_fintech_security_1791612816960.jpg';
import heroLogistics from '../assets/images/hero_global_logistics_1791612830723.jpg';
import saasDashboard from '../assets/images/saas_dashboard_hero.jpg';

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
  if (cat === 'ai' || s.includes('ai') || s.includes('llm') || s.includes('agent') || s.includes('machine-learning') || s.includes('neural')) {
    return {
      image: saasAiAgents,
      badge: 'Neural Flow™ AI Platform',
      caption: 'Autonomous Multi-Agent Task Orchestration & RAG Pipeline Console',
      statusText: 'Active Inference Cluster · 99.8% Accuracy',
      metrics: [
        { label: 'Multi-Agent Pipeline', value: '215 Tasks Active' },
        { label: 'Token Cost Arbitrage', value: '+38% Saved' },
        { label: 'Governance Posture', value: '98% Audited' }
      ]
    };
  }

  // 2. Data Engineering & Streaming Mesh
  if (cat === 'data' || s.includes('data') || s.includes('mesh') || s.includes('stream') || s.includes('kafka') || s.includes('flink') || s.includes('pipeline')) {
    return {
      image: saasDataMesh,
      badge: 'DataFlux™ Streaming Mesh',
      caption: 'Real-Time Distributed Event Serialization & Telemetry Console',
      statusText: 'Synchronized Multi-Region Mesh · < 0.4ms Latency',
      metrics: [
        { label: 'Event Ingestion Rate', value: '4.8M ev/sec' },
        { label: 'Serialization Latency', value: '< 0.38ms P99' },
        { label: 'Data Loss Invariant', value: '0.00% Zero-Loss' }
      ]
    };
  }

  // 3. Cloud Infrastructure, Kubernetes & DevOps
  if (cat === 'cloud' || cat === 'devops' || s.includes('cloud') || s.includes('kubernetes') || s.includes('infrastructure') || s.includes('multi-cloud')) {
    return {
      image: saasMultiCloud,
      badge: 'CloudWeaver™ Multi-Cloud Fabric',
      caption: 'Active-Active Multi-Cloud Topology & Dynamic Spot Arbitrage Console',
      statusText: 'Connected Across AWS, Azure & GCP · 99.999% SLA',
      metrics: [
        { label: 'Compute Cost Reduction', value: '-42% Average' },
        { label: 'Active Sovereign Regions', value: '42 Locations' },
        { label: 'Failover Mitigation', value: '< 1.2s Zero-Loss' }
      ]
    };
  }

  // 4. Cybersecurity & Zero-Trust Compliance
  if (cat === 'security' || s.includes('security') || s.includes('zero-trust') || s.includes('compliance') || s.includes('audit')) {
    return {
      image: saasSecurity,
      badge: 'Sentinel™ Security Command',
      caption: 'Zero-Trust Cryptographic Enforcement & Continuous SOC 2 Scorecards',
      statusText: 'Continuous Policy Attestation · Hardware TPM 2.0',
      metrics: [
        { label: 'SOC 2 Type II Posture', value: '100% Certified' },
        { label: 'Automated Containment', value: '2,349 Blocked' },
        { label: 'Incident MTTR', value: '< 18 Minutes' }
      ]
    };
  }

  // 5. Capital Markets & Financial Technology
  if (cat === 'fintech' || s.includes('fintech') || s.includes('trading') || s.includes('banking') || s.includes('market')) {
    return {
      image: heroFintech,
      badge: 'HEXBYTE Capital Markets',
      caption: 'Microsecond High-Frequency Execution & Deterministic Risk Console',
      statusText: 'Bank-Grade Compliance · Dodd-Frank & MiFID II Ready',
      metrics: [
        { label: 'Annual Volume Cleared', value: '$42B+ Processed' },
        { label: 'Execution Jitter', value: '0.04µs P99' },
        { label: 'Audit Trail Immutability', value: 'WORM Verified' }
      ]
    };
  }

  // 6. Global Logistics & Edge Fleet
  if (cat === 'logistics' || s.includes('logistics') || s.includes('iot') || s.includes('edge') || s.includes('supply')) {
    return {
      image: heroLogistics,
      badge: 'HEXBYTE Edge Fleet Mesh',
      caption: 'Synchronized Physical & Digital Supply Chain Telemetry Grid',
      statusText: 'Connected Industrial IoT · Store-and-Forward Buffering',
      metrics: [
        { label: 'Bandwidth Compression', value: '99.4% Delta' },
        { label: 'Connected Fleet Nodes', value: '18,500+ Active' },
        { label: 'Routing Efficiency', value: '+38% Boost' }
      ]
    };
  }

  // 7. General Enterprise SaaS / Web / Mobile Platform (Default)
  return {
    image: saasDashboard,
    badge: 'HEXBYTE Enterprise Cloud',
    caption: 'Operational Intelligence & System Performance Command Console',
    statusText: 'Real-Time Multi-Region Monitoring · 99.999% SLA',
    metrics: [
      { label: 'Operational Velocity', value: '4.8x Surge' },
      { label: 'Platform Availability', value: '99.999% Guaranteed' },
      { label: 'Annual Client Spend Saved', value: '$1.1M Verified' }
    ]
  };
}
