const fs = require('fs');
const path = require('path');

// 1. Resolve site configuration
let SITE_URL = 'https://hexbyte.com';
const siteConfigPath = path.join(__dirname, '../src/config/site.ts');
if (fs.existsSync(siteConfigPath)) {
  const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
  const match = siteConfigContent.match(/export\s+const\s+SITE_URL\s*=\s*['"]([^'"]+)['"]/);
  if (match) {
    SITE_URL = match[1].replace(/\/+$/, '');
  }
}

console.log(`[Prerender] Using SITE_URL: ${SITE_URL}`);

const DIST_DIR = path.join(__dirname, '../dist');
const templatePath = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[Prerender] Error: dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Load Data
function loadAllServices() {
  const p = path.join(__dirname, '../src/data/allServicesData.ts');
  if (!fs.existsSync(p)) return [];
  const content = fs.readFileSync(p, 'utf8');
  const services = [];
  const matches = content.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?description:\s*['"]([^'"]+)['"][\s\S]*?category:\s*['"]([^'"]+)['"]/g);
  for (const m of matches) {
    services.push({ slug: m[1], title: m[2], description: m[3], category: m[4] });
  }
  return services;
}

function loadAllProjects() {
  const p = path.join(__dirname, '../src/data/allProjectsData.ts');
  if (!fs.existsSync(p)) return [];
  const content = fs.readFileSync(p, 'utf8');
  const projects = [];
  const matches = content.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?client:\s*['"]([^'"]+)['"][\s\S]*?overview:\s*['"]([^'"]+)['"]/g);
  for (const m of matches) {
    projects.push({ slug: m[1], title: m[2], client: m[3], overview: m[4] });
  }
  return projects;
}

function loadAllPosts() {
  const p = path.join(__dirname, '../src/data/postsData.ts');
  if (!fs.existsSync(p)) return [];
  const content = fs.readFileSync(p, 'utf8');
  const posts = [];
  const matches = content.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?summary:\s*['"]([^'"]+)['"]/g);
  for (const m of matches) {
    posts.push({ slug: m[1], title: m[2], summary: m[3] });
  }
  return posts;
}

function loadAllJobs() {
  const p = path.join(__dirname, '../src/data/jobsData.ts');
  if (!fs.existsSync(p)) return [];
  const content = fs.readFileSync(p, 'utf8');
  const jobs = [];
  const matches = content.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?summary:\s*['"]([^'"]+)['"]/g);
  for (const m of matches) {
    jobs.push({ slug: m[1], title: m[2], summary: m[3] });
  }
  return jobs;
}

const services = loadAllServices();
const projects = loadAllProjects();
const posts = loadAllPosts();
const jobs = loadAllJobs();

// Route definitions mapping path to title, description, and schemaType
const routes = [
  // 1. Core Company Pages
  { path: '/', title: 'HEXBYTE - Enterprise Intelligent Cloud Platform', description: 'Enterprise-grade intelligent cloud infrastructure and autonomous data platform for global leaders. Built for scale, security, and velocity.', priority: '1.0' },
  { path: '/about', title: 'About Us | Executive Mission', description: 'Hexbyte eliminates infrastructure friction for global commerce through kernel-accelerated event fabrics and autonomous orchestration.', priority: '0.8' },
  { path: '/leadership', title: 'Executive Leadership', description: 'Led by distributed systems veterans, high-frequency engineers, and kernel architects worldwide.', priority: '0.7' },
  { path: '/our-story', title: 'Our Engineering Story', description: 'The evolution of Hexbyte autonomous multi-cloud and distributed event mesh architecture.', priority: '0.7' },
  { path: '/culture', title: 'Engineering Culture & Rituals', description: 'Async-first rhythm, written RFCs, and engineering rituals powering Hexbyte.', priority: '0.7' },
  { path: '/process', title: 'Implementation Methodology', description: 'Our proven 4-phase rollout process to production in under 45 days.', priority: '0.8' },
  { path: '/why-us', title: 'Why Hexbyte | Competitive Differentiation', description: 'Deterministic latency, kernel-level eBPF routing, and sovereign multi-cloud orchestration.', priority: '0.7' },
  { path: '/careers', title: 'Careers & Open Engineering Roles', description: 'Join 240+ world-class distributed systems engineers worldwide.', priority: '0.8' },
  { path: '/life-at-hexbyte', title: 'Life at Hexbyte', description: 'Culture, distributed teams, and engineering rituals at Hexbyte.', priority: '0.6' },
  { path: '/offices', title: 'Global Engineering Operations', description: 'Engineering centers in San Francisco, New York, London, Zurich, and Singapore.', priority: '0.6' },

  // 2. Conversion & Consultation
  { path: '/contact', title: 'Contact Enterprise Advisory', description: 'Connect directly with Hexbyte Principal Systems Engineers or 24/7 Global NOC.', priority: '0.9' },
  { path: '/request-consultation', title: 'Request Architecture Consultation', description: 'Schedule an in-depth 1-on-1 architecture review with our Principal Systems Engineers.', priority: '0.9' },
  { path: '/quote', title: 'Infrastructure Architecture Estimation', description: 'Configure cluster parameters and calculate custom enterprise licensing.', priority: '0.7' },
  { path: '/thank-you', title: 'Consultation Request Confirmed', description: 'Your inquiry has been received. Our Enterprise Architecture Desk will contact you within 4 business hours.', priority: '0.3' },

  // 3. Knowledge & Support
  { path: '/faq', title: 'Frequently Asked Questions', description: 'Technical and operational answers regarding Hexbyte platform architecture and security.', priority: '0.7' },

  // 4. Services Overview & Category Hubs
  { path: '/services', title: 'Enterprise Services Catalog', description: 'Comprehensive catalog of 54 autonomous cloud, data, AI, and distributed systems engineering services.', priority: '0.9' },
  { path: '/services/web', title: 'Web Application Engineering Services', description: 'Custom enterprise web applications, high-density portals, and micro-frontend architectures.', priority: '0.8' },
  { path: '/services/mobile', title: 'Mobile App Development Services', description: 'Native iOS, Android, and cross-platform enterprise mobile applications.', priority: '0.8' },
  { path: '/services/ai', title: 'AI & Machine Learning Services', description: 'Generative AI, autonomous agents, LLM integrations, and custom model training.', priority: '0.8' },
  { path: '/services/data', title: 'Data Engineering & BI Services', description: 'Autonomous event meshes, ETL pipelines, real-time analytics, and data warehousing.', priority: '0.8' },
  { path: '/services/blockchain', title: 'Blockchain & Web3 Services', description: 'Formally verified smart contracts, threshold MPC custody, and institutional DeFi.', priority: '0.8' },
  { path: '/services/cloud', title: 'Cloud & DevOps Services', description: 'Active-active multi-cloud orchestration, eBPF telemetry meshes, and GitOps.', priority: '0.8' },
  { path: '/services/other', title: 'Specialized Enterprise Systems', description: 'Industrial IoT, digital twins, spatial computing, and CRM/ERP integrations.', priority: '0.8' },

  // 5. Industries
  { path: '/industries', title: 'Enterprise Industries Overview', description: 'Tailored solutions engineered for regulated enterprise sectors.', priority: '0.9' },
  { path: '/industries/fintech-bfsi', title: 'Fintech & Banking Infrastructure Solutions', description: 'Deterministic low-jitter transaction clearing and sovereign residency.', priority: '0.8' },
  { path: '/industries/healthcare', title: 'Healthcare & Life Sciences Solutions', description: 'HIPAA-compliant genomic pipelines & clinical telemetry.', priority: '0.8' },
  { path: '/industries/education', title: 'Higher Education & EdTech Platforms', description: 'FERPA-compliant accessible learning architectures scaling to millions.', priority: '0.8' },
  { path: '/industries/real-estate', title: 'Commercial Real Estate & PropTech Solutions', description: 'High-density commercial real estate telemetry and management.', priority: '0.8' },
  { path: '/industries/logistics', title: 'Supply Chain & Logistics Solutions', description: 'Sub-second event synchronization from robotics to global freight.', priority: '0.8' },

  // 6. Portfolio & Case Studies
  { path: '/portfolio', title: 'Enterprise Portfolio & Sample Projects', description: 'Explore 29 conceptual reference implementations demonstrating deterministic multi-cloud failover.', priority: '0.8' },
  { path: '/case-studies', title: 'Enterprise Case Studies Directory', description: 'Verified quantitative outcomes from Fortune 500 engineering teams.', priority: '0.8' },
  { path: '/case-studies/helios-global-bank', title: 'Helios Global Bank Case Study', description: 'Eliminating cloud migration latency for 18 million consumer accounts.', priority: '0.7' },
  { path: '/case-studies/apex-global-logistics', title: 'Apex Global Logistics Case Study', description: 'Autonomous routing fleet telemetry for 4,200 distribution hubs.', priority: '0.7' },
  { path: '/case-studies/novaris-health', title: 'Novaris Health Case Study', description: 'HIPAA-compliant real-time patient analytics across 48 medical centers.', priority: '0.7' },
  { path: '/case-studies/vertex-streaming-cloud', title: 'Vertex Streaming Cloud Case Study', description: 'Global video streaming mesh across 120 countries.', priority: '0.7' },
  { path: '/testimonials', title: 'Executive Testimonials', description: 'Direct feedback from enterprise CISOs, CTOs, and Heads of Infrastructure.', priority: '0.7' },
  { path: '/awards-partners', title: 'Awards & Global Partners', description: 'Tier-1 technology alliances with AWS, Google Cloud, NVIDIA, and Red Hat.', priority: '0.7' },

  // 7. Editorial & Resources
  { path: '/blog', title: 'Engineering Blog & Architectural Papers', description: 'Deep-dives on eBPF, kernel bypass, and distributed consensus.', priority: '0.8' },
  { path: '/resources', title: 'Enterprise Resource Center', description: 'Technical whitepapers, benchmarks, reference code, and architecture blueprints.', priority: '0.8' },
  { path: '/newsletter', title: 'The Autonomous Enterprise Journal', description: 'Bi-weekly engineering briefings on distributed systems and eBPF.', priority: '0.7' },

  // 8. Legal & Governance
  { path: '/privacy-policy', title: 'Privacy Policy', description: 'Hexbyte enterprise data privacy and protection governance.', priority: '0.5' },
  { path: '/terms', title: 'Terms of Service', description: 'Hexbyte enterprise platform terms and conditions.', priority: '0.5' },
  { path: '/cookies', title: 'Cookie Governance Policy', description: 'Hexbyte cookie classification and user preference controls.', priority: '0.5' },
  { path: '/disclaimer', title: 'Enterprise Legal Disclaimer', description: 'Platform guarantees, synthetic benchmarks, and warranties disclaimer.', priority: '0.5' },
];

// Append all 54 Services
services.forEach(s => {
  routes.push({
    path: `/services/${s.category}/${s.slug}`,
    title: `${s.title} | ${s.category.toUpperCase()} Services`,
    description: s.description || `Enterprise ${s.title} engineering services provided by HEXBYTE.`,
    priority: '0.7'
  });
  routes.push({
    path: `/services/${s.slug}`,
    title: `${s.title} Engineering Services`,
    description: s.description || `Enterprise ${s.title} engineering services provided by HEXBYTE.`,
    priority: '0.7'
  });
});

// Append all 29 Portfolio Projects
projects.forEach(p => {
  routes.push({
    path: `/portfolio/${p.slug}`,
    title: `${p.title} | Concept Project`,
    description: p.overview || `Concept architecture and reference implementation for ${p.title}.`,
    priority: '0.7'
  });
});

// Append all 6 Blog Posts
posts.forEach(b => {
  routes.push({
    path: `/blog/${b.slug}`,
    title: `${b.title} | Engineering Paper`,
    description: b.summary || `Technical engineering deep-dive on ${b.title}.`,
    priority: '0.7'
  });
});

// Append all 6 Careers Jobs
jobs.forEach(j => {
  routes.push({
    path: `/careers/${j.slug}`,
    title: `${j.title} | Careers`,
    description: j.summary || `Join the HEXBYTE distributed systems team as a ${j.title}.`,
    priority: '0.7'
  });
});

// Filter unique routes
const uniqueRoutesMap = new Map();
routes.forEach(r => {
  if (!uniqueRoutesMap.has(r.path)) {
    uniqueRoutesMap.set(r.path, r);
  }
});
const allRoutes = Array.from(uniqueRoutesMap.values());

console.log(`[Prerender] Generating static HTML for ${allRoutes.length} routes...`);

let generatedCount = 0;

allRoutes.forEach(r => {
  const fullCanonicalUrl = `${SITE_URL}${r.path === '/' ? '' : r.path}`;
  const pageTitle = `${r.title} | HEXBYTE`;
  const pageDesc = r.description;

  let html = templateHtml;

  // 1. Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

  // 2. Meta description
  if (html.includes('name="description"')) {
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttr(pageDesc)}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${escapeAttr(pageDesc)}" />\n</head>`);
  }

  // 3. Canonical link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeAttr(fullCanonicalUrl)}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${escapeAttr(fullCanonicalUrl)}" />\n</head>`);
  }

  // 4. OpenGraph & Twitter tags
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttr(pageTitle)}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttr(pageDesc)}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escapeAttr(fullCanonicalUrl)}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${SITE_URL}/brand/hexbyte-og-card.png" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${SITE_URL}/brand/hexbyte-og-card.png" />`);

  // Write to destination
  if (r.path === '/') {
    fs.writeFileSync(templatePath, html, 'utf8');
  } else {
    const routeDir = path.join(DIST_DIR, r.path.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  }

  generatedCount++;
});

console.log(`[Prerender] Successfully generated ${generatedCount} static HTML pages.`);

// Generate XML Sitemap with all URLs using SITE_URL
const sitemapUrls = allRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}</loc>
    <changefreq>${r.path === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${r.priority || '0.7'}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`[Prerender] Updated sitemap.xml with ${allRoutes.length} canonical URLs under ${SITE_URL}`);

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
