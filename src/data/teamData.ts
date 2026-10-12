export interface TeamMember {
  name: string;
  role: string;
  previous: string;
  bio: string;
  avatarText: string;
}

export const EXECUTIVE_TEAM: TeamMember[] = [
  {
    name: 'Dr. Henrik Vane',
    role: 'Chief Executive Officer & Co-Founder',
    previous: 'Ex-VP Infrastructure at AWS, Ph.D. MIT',
    bio: 'Pioneered early elastic compute primitives at AWS. Spent 15 years designing distributed virtualization before co-founding Hexbyte to solve multi-cloud fragmentation.',
    avatarText: 'HV'
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    previous: 'Ex-Distinguished Engineer at Bell Labs & Stripe',
    bio: 'Author of fundamental papers on distributed consensus and lock-free concurrency. Leads Hexbyte engineering across kernel, networking, and consensus research.',
    avatarText: 'ER'
  },
  {
    name: 'Marcus Vance',
    role: 'Chief Operating Officer',
    previous: 'Ex-SVP Global Operations at Salesforce',
    bio: 'Scaled enterprise infrastructure and global solutions delivery across North America, Europe, and Asia-Pacific. Oversees commercial expansion and customer success.',
    avatarText: 'MV'
  },
  {
    name: 'Catherine Morland',
    role: 'Chief Information Security Officer',
    previous: 'Ex-Deputy CISO at Goldman Sachs',
    bio: 'Leads our Zero-Trust architecture, sovereign data fencing, and independent audit certifications. Former advisor to international financial regulatory security boards.',
    avatarText: 'CM'
  },
  {
    name: 'Dr. Nikolai Voronin',
    role: 'Head of Kernel & Systems Research',
    previous: 'Linux Kernel Contributor, Ex-Google Brain SRE',
    bio: 'Leading researcher in eBPF socket redirection and Linux io_uring memory optimization. Directs our low-level systems lab in Zurich.',
    avatarText: 'NV'
  },
  {
    name: 'Maya Lin',
    role: 'VP of Platform Engineering',
    previous: 'Ex-Director of Core Cloud at Datadog',
    bio: 'Architected hyperscale time-series metric pipelines handling trillions of daily events. Directs our multi-cloud fabric and autonomous SRE agent teams.',
    avatarText: 'ML'
  }
];

export const BOARD_ADVISORS: TeamMember[] = [
  {
    name: 'Sir Arthur Sterling',
    role: 'Board Director & Governance Chair',
    previous: 'Former Managing Director, Bank of England',
    bio: 'Advises Hexbyte on international financial stability, sovereign monetary infrastructure, and compliance with European central banking mandates.',
    avatarText: 'AS'
  },
  {
    name: 'Prof. Diane Hirsch',
    role: 'Technical Advisory Board Chair',
    previous: 'Chair of Computer Systems, Stanford University',
    bio: 'Recipient of the Turing Fellowship for work on Byzantine fault tolerance and verified software invariants.',
    avatarText: 'DH'
  }
];
