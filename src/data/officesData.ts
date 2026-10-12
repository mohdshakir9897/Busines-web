export interface OfficeLocation {
  city: string;
  country: string;
  region: string;
  address: string;
  phone: string;
  hours: string;
  focus: string;
  timezone: string;
}

export const OFFICES_DATA: OfficeLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    region: 'Global Headquarters (Americas)',
    address: '500 Howard Street, Suite 1800, San Francisco, CA 94105',
    phone: '+1 (415) 890-4200',
    hours: '08:00 - 18:00 PST (Mon - Fri)',
    focus: 'Executive Leadership, Distributed Systems R&D, Core Product Engineering',
    timezone: 'America/Los_Angeles'
  },
  {
    city: 'New York City',
    country: 'United States',
    region: 'Capital Markets & Commercial Hub',
    address: 'One World Trade Center, 64th Floor, New York, NY 10007',
    phone: '+1 (212) 650-8900',
    hours: '08:00 - 18:00 EST (Mon - Fri)',
    focus: 'Capital Markets Engineering, Enterprise Client Solutions, Financial Alliances',
    timezone: 'America/New_York'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'EMEA Headquarters',
    address: '100 Bishopsgate, Level 24, London EC2N 4AG',
    phone: '+44 20 7946 0912',
    hours: '09:00 - 18:00 GMT (Mon - Fri)',
    focus: 'European Regulatory Architecture, Enterprise Banking, DORA Compliance',
    timezone: 'Europe/London'
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    region: 'Sovereign Systems & Cryptography Lab',
    address: 'Bleicherweg 10, 8002 Zürich',
    phone: '+41 44 215 3800',
    hours: '08:30 - 17:30 CET (Mon - Fri)',
    focus: 'Hardware TPM Enclave Research, eBPF Kernel Lab, Sovereign Geofencing',
    timezone: 'Europe/Zurich'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific Headquarters',
    address: 'Marina Bay Financial Centre, Tower 2, Level 38, Singapore 018983',
    phone: '+65 6812 7900',
    hours: '09:00 - 18:00 SGT (Mon - Fri)',
    focus: 'APAC Infrastructure Delivery, MAS Regulatory Compliance, Logistics Edge Fleet',
    timezone: 'Asia/Singapore'
  }
];
