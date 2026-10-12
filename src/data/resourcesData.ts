export interface ResourceItem {
  id: string;
  title: string;
  type: 'Whitepaper' | 'Benchmark Report' | 'Reference Architecture' | 'Webinar Recording';
  description: string;
  pagesOrDuration: string;
  badge: string;
  downloadUrl: string;
  gated: boolean;
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'autonomous-cloud-benchmark',
    title: 'The 2026 Autonomous Cloud & eBPF Maturity Model',
    type: 'Whitepaper',
    description: '42 pages of in-depth benchmark comparisons between eBPF kernel mesh routing and traditional proxy sidecars across 10,000-node enterprise clusters.',
    pagesOrDuration: '42 Pages (PDF)',
    badge: 'FLAGSHIP DOCKET',
    downloadUrl: '#whitepaper',
    gated: true
  },
  {
    id: 'multi-cloud-dr-blueprint',
    title: 'Zero-Downtime Active-Active Multi-Cloud Disaster Recovery',
    type: 'Reference Architecture',
    description: 'Complete Terraform and Kubernetes manifests for deploying multi-region active-active clusters across AWS, Azure, and Google Cloud with sub-second DNS handoff.',
    pagesOrDuration: '28 Pages + Git Repo',
    badge: 'CODE REPO INCLUDED',
    downloadUrl: '#architecture',
    gated: false
  },
  {
    id: 'dora-compliance-guide',
    title: 'Financial Resilience Under EU DORA: Implementation Playbook',
    type: 'Benchmark Report',
    description: 'Technical guidance for Tier-1 banks on surviving mandatory digital operational resilience audits without continuous manual reporting overhead.',
    pagesOrDuration: '36 Pages (PDF)',
    badge: 'REGULATORY AUDIT',
    downloadUrl: '#dora',
    gated: true
  },
  {
    id: 'webinar-ebpf-production',
    title: 'Eliminating the Sidecar Tax: eBPF in Hyperscale Production',
    type: 'Webinar Recording',
    description: 'Watch Hexbyte Principal Systems Engineers walk through live kernel traces, CPU profiling, and zero-loss failover drills on a live 5,000-node cluster.',
    pagesOrDuration: '54 Min Video',
    badge: 'ON-DEMAND WEBINAR',
    downloadUrl: '#webinar',
    gated: false
  }
];
