export interface ServiceItemData {
  category: string;
  categoryName: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  heroStat: { value: string; label: string };
  capabilities: { title: string; description: string }[];
  techStack: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  relatedProjects: string[];
}

export interface ServiceCategoryMeta {
  category: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  serviceCount: number;
}

export const SERVICE_CATEGORIES: ServiceCategoryMeta[] = [
  {
    category: 'ai',
    name: 'Artificial Intelligence & ML',
    tagline: 'Autonomous AI agents, generative models, enterprise RAG, and fine-tuning.',
    description: 'Deploy state-of-the-art foundation models, custom deep learning pipelines, and self-governing autonomous agents tailored for high-stakes enterprise workflows.',
    iconName: 'Cpu',
    serviceCount: 20
  },
  {
    category: 'data',
    name: 'Data Engineering & Analytics',
    tagline: 'Petabyte-scale distributed data meshes, real-time pipelines, and BI analytics.',
    description: 'Transform fragmented organizational data into high-throughput streaming event meshes, lakehouses, and real-time executive decision intelligence.',
    iconName: 'Database',
    serviceCount: 6
  },
  {
    category: 'web',
    name: 'Web Engineering & Portals',
    tagline: 'Mission-critical enterprise web apps, high-throughput portals, and modern frontends.',
    description: 'Architect ultra-fast web platforms using Next.js, React, TypeScript, and micro-frontends with sub-second core web vitals and accessible design systems.',
    iconName: 'Globe',
    serviceCount: 6
  },
  {
    category: 'mobile',
    name: 'Mobile App Development',
    tagline: 'Native iOS & Android, Flutter, and high-performance cross-platform apps.',
    description: 'Craft fluid, 60fps mobile experiences with offline data synchronization, biometric authentication, and enterprise MDM compliance.',
    iconName: 'Smartphone',
    serviceCount: 5
  },
  {
    category: 'cloud',
    name: 'Cloud Infrastructure & DevOps',
    tagline: 'Multi-cloud orchestration across AWS, Google Cloud, Azure, and Kubernetes.',
    description: 'Build automated CI/CD GitOps pipelines, infrastructure-as-code, and resilient multi-region architectures with 99.999% availability SLAs.',
    iconName: 'Cloud',
    serviceCount: 4
  },
  {
    category: 'blockchain',
    name: 'Blockchain & Web3 Engineering',
    tagline: 'Enterprise distributed ledgers, audited smart contracts, and institutional DeFi.',
    description: 'Engineer cryptographically verified smart contracts, private permissioned ledgers, and zero-knowledge privacy protocols for financial settlements.',
    iconName: 'Layers',
    serviceCount: 6
  },
  {
    category: 'other',
    name: 'Specialized Enterprise Solutions',
    tagline: 'UI/UX design systems, IoT edge devices, ERP/CRM integrations, and QA testing.',
    description: 'Comprehensive specialized engineering capabilities including spatial computing, IoT telemetry, automated regression testing, and systems maintenance.',
    iconName: 'Sliders',
    serviceCount: 7
  }
];

export const ALL_SERVICES: ServiceItemData[] = [
  // ==================== WEB (6) ====================
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'website-design',
    title: 'Enterprise Website Design & Design Systems',
    summary: 'High-converting, brand-defining design systems engineered for Fortune 500 digital authority.',
    description: 'We construct unified typographic scales, accessible tokens, and modular UI components that elevate enterprise digital presence above generic templates.',
    heroStat: { value: '+140%', label: 'Qualified Inbound Pipeline Velocity' },
    capabilities: [
      { title: 'Modular Design Tokens', description: 'Cross-platform tokens for color, typography, radii, and spatial rhythm.' },
      { title: 'WCAG 2.1 AA Compliance', description: 'Rigorous accessibility testing for screen readers, high-contrast ratios, and keyboard navigation.' },
      { title: 'Design-to-Code Pipelines', description: 'Automated Figma-to-Tailwind code token synchronization with zero design drift.' },
      { title: 'Micro-Interaction Choreography', description: 'Subtle 60fps tactile feedback and motion states built with modern CSS compositor properties.' }
    ],
    techStack: ['Figma Tokens', 'Tailwind CSS', 'TypeScript', 'Radix UI', 'Storybook'],
    process: [
      { step: '01', title: 'Brand Architecture Audit', description: 'Analyze market positioning, stakeholder expectations, and conversion bottlenecks.' },
      { step: '02', title: 'System Tokenization', description: 'Establish typographic pairings, dark/light optical compensations, and spacing grids.' },
      { step: '03', title: 'High-Fidelity Wireframes', description: 'Craft responsive desktop, tablet, and mobile wireframes in Figma.' },
      { step: '04', title: 'Component Library Export', description: 'Ship audited React components directly to your private npm registry.' }
    ],
    faqs: [
      { q: 'How long does an enterprise design system take to ship?', a: 'Typically 4 to 6 weeks for complete tokenization, 30+ core templates, and full WCAG AA certification.' },
      { q: 'Do you deliver Figma libraries alongside code?', a: 'Yes. We deliver linked Figma libraries synced with Storybook documentation and production Tailwind components.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'website-development',
    title: 'Modern High-Velocity Website Development',
    summary: 'Next.js 14 and React SPA platforms optimized for sub-500ms Core Web Vitals and international SEO.',
    description: 'We engineer high-traffic digital marketing websites that load instantly, handle millions of monthly visits, and rank at the top of search engine indexes.',
    heroStat: { value: '98+', label: 'Average Google Lighthouse Score' },
    capabilities: [
      { title: 'Server Components & Streaming', description: 'Incremental static regeneration (ISR) and Edge streaming for instantaneous global delivery.' },
      { title: 'Dynamic Headless CMS Integration', description: 'Seamless content workflows with Sanity, Contentful, Strapi, or Firestore.' },
      { title: 'Multi-Lingual i18n Routing', description: 'Sub-path and sub-domain localization across 40+ international regions with localized hreflang tags.' },
      { title: 'Edge Asset Optimization', description: 'Automatic WebP/AVIF transcoding, responsive image srcsets, and Brotli compression.' }
    ],
    techStack: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel / Cloud Run'],
    process: [
      { step: '01', title: 'Architecture Sizing', description: 'Define rendering strategy (SSR, SSG, ISR) based on content update velocity.' },
      { step: '02', title: 'Headless CMS Integration', description: 'Model structured schemas and authoring workflows for non-technical marketing teams.' },
      { step: '03', title: 'Frontend Construction', description: 'Develop pixel-perfect responsive components with strict TypeScript types.' },
      { step: '04', title: 'Global CDN Deployment', description: 'Deploy to multi-region edge caches with automated health checks and rollback guarantees.' }
    ],
    faqs: [
      { q: 'Can our marketing team update text and images independently?', a: 'Yes. Every page is mapped to a headless CMS or structured JSON so editors publish without engineer intervention.' },
      { q: 'What is your Lighthouse performance guarantee?', a: 'We guarantee a Lighthouse score of 90+ on Performance, Accessibility, Best Practices, and SEO.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'novaris-clinical-cloud']
  },
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'web-portal',
    title: 'Secure Enterprise Customer & Partner Portals',
    summary: 'Role-based authentication, multi-tenant RBAC, and encrypted document exchange.',
    description: 'We build self-service customer portals, broker extranets, and partner management systems that streamline commercial transactions while preserving airtight data isolation.',
    heroStat: { value: '100%', label: 'Multi-Tenant Data Isolation' },
    capabilities: [
      { title: 'Granular Role-Based Access (RBAC)', description: 'Define custom permissions, organizational hierarchies, and delegated administrator roles.' },
      { title: 'Encrypted Document Vault', description: 'Client-side encrypted uploads, watermarking, and time-expiring signed download URLs.' },
      { title: 'SSO & Identity Federation', description: 'SAML 2.0 and OIDC integrations for Okta, Azure AD, Ping Identity, and Google Workspace.' },
      { title: 'Audit Trail Telemetry', description: 'Immutable WORM compliance logs capturing every user login, view, edit, and export event.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Auth0 / Okta', 'AWS S3 Enclaves'],
    process: [
      { step: '01', title: 'Access Matrix Modeling', description: 'Map organizational user roles, approval hierarchies, and compliance constraints.' },
      { step: '02', title: 'Identity Provider Federation', description: 'Configure corporate SAML/OIDC endpoints and automated SCIM user provisioning.' },
      { step: '03', title: 'Portal Workflow Engineering', description: 'Build intuitive document signing, billing management, and ticket submission flows.' },
      { step: '04', title: 'Penetration Testing & Sign-off', description: 'Independent third-party penetration testing to verify tenant segregation.' }
    ],
    faqs: [
      { q: 'Can we white-label the portal for different enterprise clients?', a: 'Yes. Our multi-tenant portal engine supports custom domains, client logos, color palettes, and email templates.' },
      { q: 'Does it support multi-factor authentication (MFA)?', a: 'Yes. FIDO2 WebAuthn biometrics, hardware YubiKeys, and TOTP authenticator apps are standard.' }
    ],
    relatedProjects: ['helios-core-banking', 'aegis-defi-vaults']
  },
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'frontend-development',
    title: 'High-Performance Frontend Engineering',
    summary: 'Complex state machines, WebGL visualizations, and reactive interactive dashboards.',
    description: 'We craft sophisticated frontend applications capable of streaming real-time financial charts, interactive spatial models, and massive tabular datasets at 60fps.',
    heroStat: { value: '60 FPS', label: 'Smooth Animation Budget' },
    capabilities: [
      { title: 'State Machine Architecture', description: 'Predictable UI state management using XState and Zustand, preventing race conditions.' },
      { title: 'Virtual Table & Grid Rendering', description: 'Render 1,000,000+ data rows with sub-millisecond scrolling using virtualized DOM nodes.' },
      { title: 'WebSocket Real-Time Sync', description: 'Bi-directional binary protocols with automatic reconnection and optimistic updates.' },
      { title: 'Micro-Frontend Federation', description: 'Module Federation enabling independent teams to deploy features without coordinating monolithic releases.' }
    ],
    techStack: ['React 19', 'TypeScript', 'Zustand', 'TanStack Table', 'Vite'],
    process: [
      { step: '01', title: 'State Flow Architecture', description: 'Map all user state transitions and error boundaries into formal finite state machines.' },
      { step: '02', title: 'Component Modularization', description: 'Build isolated, testable React components backed by Jest and React Testing Library.' },
      { step: '03', title: 'Data Streaming Binding', description: 'Connect real-time WebSockets and server-sent events with resilient backpressure buffers.' },
      { step: '04', title: 'Bundle Profiling & Code Splitting', description: 'Ensure initial JavaScript bundle sizes stay strictly under 150KB gzip.' }
    ],
    faqs: [
      { q: 'How do you handle real-time stock tickers without browser lag?', a: 'We utilize Web Workers for data serialization and offscreen canvas rendering, keeping the main thread free.' },
      { q: 'Can you modernize our legacy Angular/jQuery codebase?', a: 'Yes. We implement strangler fig patterns to progressively rewrite legacy frontends with zero operational disruption.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'stratum-energy-iot']
  },
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'custom-web-app',
    title: 'Bespoke Enterprise Web Applications',
    summary: 'Tailor-made cloud applications engineered to replace rigid off-the-shelf software.',
    description: 'When commercial SaaS cannot accommodate your proprietary business logic, we architect bespoke web applications tailored to your exact workflows, compliance rules, and integrations.',
    heroStat: { value: '10x', label: 'Operational Throughput Gain' },
    capabilities: [
      { title: 'Proprietary Workflow Automation', description: 'Automate multi-stage approvals, automated document generation, and external API integrations.' },
      { title: 'Database Optimization', description: 'Custom relational PostgreSQL schemas with specialized indexes, partitioning, and read replicas.' },
      { title: 'Event-Driven Background Workers', description: 'Asynchronous task queues powered by Redis and BullMQ for heavy computational jobs.' },
      { title: 'Comprehensive REST & GraphQL APIs', description: 'Fully documented OpenAPI 3.0 specifications for seamless third-party consumption.' }
    ],
    techStack: ['TypeScript', 'Express / Fastify', 'PostgreSQL', 'Prisma', 'Docker'],
    process: [
      { step: '01', title: 'Process Deconstruction', description: 'Shadow your operational teams to map edge cases and manual spreadsheet workarounds.' },
      { step: '02', title: 'Domain-Driven Design', description: 'Model bounded contexts, entities, and database relationships.' },
      { step: '03', title: 'Iterative Sprint Delivery', description: 'Bi-weekly deployed feature increments with interactive staging environments.' },
      { step: '04', title: 'Continuous Integration & Tests', description: 'Automated end-to-end Playwright tests verifying every business critical path.' }
    ],
    faqs: [
      { q: 'Who owns the intellectual property (IP) of the custom code?', a: 'You retain 100% full intellectual property ownership, source code, and deployment scripts upon delivery.' },
      { q: 'How do you ensure application maintainability?', a: 'Every module is strictly typed in TypeScript, thoroughly documented, and ships with 85%+ automated test coverage.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'novaris-clinical-cloud']
  },
  {
    category: 'web',
    categoryName: 'Web Engineering',
    slug: 'enterprise-web',
    title: 'Hyperscale Enterprise Web Architectures',
    summary: 'High-availability web platforms designed to withstand global traffic surges and regional failovers.',
    description: 'We architect enterprise web ecosystems spanning multiple cloud zones, handling tens of thousands of concurrent transactions with 99.999% reliability.',
    heroStat: { value: '99.999%', label: 'Service Level Availability' },
    capabilities: [
      { title: 'Active-Active Multi-Region Mesh', description: 'Deploy across multiple geographic cloud regions with automatic Anycast DNS latency routing.' },
      { title: 'DDoS & WAF Protection', description: 'Cloudflare Enterprise edge filtering blocking malicious layer 7 attacks in real time.' },
      { title: 'Disaster Recovery Automation', description: 'Sub-second database failover with continuous automated recovery time objective (RTO) drills.' },
      { title: 'Enterprise SSO & IAM Integration', description: 'Unified authentication across thousands of internal and external corporate users.' }
    ],
    techStack: ['Next.js', 'Kubernetes', 'AWS Global Accelerator', 'Redis Cluster', 'Terraform'],
    process: [
      { step: '01', title: 'Disaster Recovery Modeling', description: 'Define RPO (Recovery Point Objective) and RTO thresholds across all systems.' },
      { step: '02', title: 'Infrastructure as Code (IaC)', description: 'Codify reproducible cloud environments using Terraform and Kubernetes Helm charts.' },
      { step: '03', title: 'Stress & Chaos Testing', description: 'Simulate regional fiber cuts and database terminations using chaos engineering tools.' },
      { step: '04', title: 'Enterprise Go-Live Support', description: 'Dedicated 24/7 war-room coverage during production deployment.' }
    ],
    faqs: [
      { q: 'What is your uptime guarantee for enterprise web platforms?', a: 'We architect and underwrite 99.999% SLA availability backed by automated multi-region failover.' },
      { q: 'Can this scale to 100,000 simultaneous users during flash sales?', a: 'Yes. Our edge-cached static assets and horizontally autoscaling container pods comfortably absorb massive traffic spikes.' }
    ],
    relatedProjects: ['helios-core-banking', 'vertex-streaming-media']
  },

  // ==================== MOBILE (5) ====================
  {
    category: 'mobile',
    categoryName: 'Mobile Engineering',
    slug: 'ios-app',
    title: 'Native iOS Application Development',
    summary: 'Swift and SwiftUI applications engineered for Apple hardware performance and ecosystem integration.',
    description: 'We develop native iOS applications that harness the full power of Apple Silicon, iOS SDKs, CoreML, and Apple Pay with fluid 120Hz ProMotion responsiveness.',
    heroStat: { value: '4.9 ★', label: 'Average App Store Rating' },
    capabilities: [
      { title: 'SwiftUI & Combine Architecture', description: 'Declarative, responsive user interfaces with reactive data binding and zero memory leaks.' },
      { title: 'On-Device CoreML Acceleration', description: 'Run private machine learning models directly on the Apple Neural Engine without cloud latency.' },
      { title: 'Apple Pay & Secure Enclave', description: 'Biometric FaceID authentication and cryptographic credential storage in Apple hardware.' },
      { title: 'WidgetKit & Live Activities', description: 'Dynamic Island updates and glanceable lock screen widgets that drive continuous engagement.' }
    ],
    techStack: ['Swift 6', 'SwiftUI', 'CoreData / SwiftData', 'CoreML', 'Xcode Cloud'],
    process: [
      { step: '01', title: 'Human Interface Guidelines Alignment', description: 'Craft UX patterns adhering to Apple Human Interface Guidelines.' },
      { step: '02', title: 'Architecture Blueprinting', description: 'Structure code using Clean Architecture and MVVM with comprehensive protocol abstractions.' },
      { step: '03', title: 'Device Matrix Testing', description: 'Verify performance across all iPhone and iPad screen sizes and iOS versions.' },
      { step: '04', title: 'App Store Submission & Approval', description: 'Manage review cycles, App Privacy Nutrition labels, and TestFlight beta cohorts.' }
    ],
    faqs: [
      { q: 'Do you handle the App Store review process?', a: 'Yes. We manage TestFlight beta distributions, metadata, and App Store review communications until final approval.' },
      { q: 'Can the app function completely offline?', a: 'Yes. We implement local SwiftData persistence with automatic background synchronization when online.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'mobile',
    categoryName: 'Mobile Engineering',
    slug: 'android-app',
    title: 'Native Android Application Development',
    summary: 'Jetpack Compose and Kotlin applications optimized across thousands of Android device models.',
    description: 'We build enterprise Android applications engineered for fluid performance across smartphones, tablets, and rugged industrial handhelds (Zebra, Honeywell).',
    heroStat: { value: '99.8%', label: 'Crash-Free User Sessions' },
    capabilities: [
      { title: 'Modern Jetpack Compose', description: 'Declarative UI toolkit delivering smooth 60fps/120fps interactions and material design.' },
      { title: 'Device Fragmentation Isolation', description: 'Robust compatibility layers ensuring uniform behavior across 15,000+ Android device profiles.' },
      { title: 'Industrial Scanner Hardware SDKs', description: 'Deep integration with hardware barcode imagers, NFC readers, and thermal sensors.' },
      { title: 'Enterprise Mobility Management (EMM)', description: 'Android Enterprise zero-touch deployment and secure work profile isolation.' }
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Room Database', 'Hilt DI'],
    process: [
      { step: '01', title: 'Material You Design System', description: 'Implement adaptive Android layouts supporting split-screen and foldables.' },
      { step: '02', title: 'Hardware Abstraction Layer', description: 'Isolate device-specific sensors and camera APIs behind clean interfaces.' },
      { step: '03', title: 'Memory Leak & Battery Profiling', description: 'Audit background battery consumption and eliminate wakelocks.' },
      { step: '04', title: 'Google Play & Private Enterprise APK', description: 'Publish to Google Play Store or distribute via corporate MDM channels.' }
    ],
    faqs: [
      { q: 'Can the app run on specialized warehouse barcode scanners?', a: 'Yes. We build native drivers for Zebra, Honeywell, and Datalogic Android enterprise devices.' },
      { q: 'How do you handle Android OS fragmentation?', a: 'We test across automated physical device farms (Firebase Test Lab) covering 95% of active global Android versions.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'novaris-clinical-cloud']
  },
  {
    category: 'mobile',
    categoryName: 'Mobile Engineering',
    slug: 'flutter-app',
    title: 'Cross-Platform Flutter App Engineering',
    summary: 'Single codebase delivering pixel-identical native performance on iOS, Android, and Web.',
    description: 'We leverage Google Flutter and Dart to build high-performance multi-platform applications from a unified codebase, cutting development and maintenance costs in half.',
    heroStat: { value: '-45%', label: 'Development & Maintenance Cost' },
    capabilities: [
      { title: 'Impeller Hardware Acceleration', description: 'Eliminates shader compilation jank, providing consistent 60fps and 120fps scrolling.' },
      { title: 'Single Unified Codebase', description: 'Share 95%+ of business logic, state management, and UI rendering code across iOS and Android.' },
      { title: 'Native Platform Channels', description: 'Seamlessly interface with Bluetooth LE, biometrics, camera, and native C++ libraries.' },
      { title: 'Hot Reload Iteration Speed', description: 'Rapid feature updates and designer collaboration cycles without full recompilation.' }
    ],
    techStack: ['Flutter 3', 'Dart', 'BLoC Pattern', 'Riverpod', 'SQLite / Hive'],
    process: [
      { step: '01', title: 'Cross-Platform Architecture Plan', description: 'Identify shared logic versus platform-specific UI nuances.' },
      { step: '02', title: 'BLoC State Machine Implementation', description: 'Implement robust unidirectional state management decoupled from UI widgets.' },
      { step: '03', title: 'Platform-Specific Channel Binding', description: 'Write native Swift and Kotlin bridges for deep hardware APIs.' },
      { step: '04', title: 'Simultaneous Dual App Store Release', description: 'Automated CI/CD building signed IPA and AAB binaries simultaneously.' }
    ],
    faqs: [
      { q: 'Does Flutter look and feel truly native on iPhone?', a: 'Yes. Flutter renders directly to the GPU via Skia/Impeller and respects iOS gestures, haptics, and system fonts.' },
      { q: 'Is Flutter scalable for large enterprise teams?', a: 'Yes. Industry leaders like Google, BMW, and Alibaba rely on Flutter for mission-critical consumer applications.' }
    ],
    relatedProjects: ['stratum-energy-iot', 'vertex-streaming-media']
  },
  {
    category: 'mobile',
    categoryName: 'Mobile Engineering',
    slug: 'react-native-app',
    title: 'React Native & Expo Enterprise Apps',
    summary: 'Leverage web engineering teams to ship native iOS and Android apps with over-the-air updates.',
    description: 'We construct React Native applications using the modern New Architecture (Fabric, TurboModules) and Expo, enabling unified JavaScript/TypeScript code sharing across mobile and web.',
    heroStat: { value: '85%', label: 'Code Shared Across Web & Mobile' },
    capabilities: [
      { title: 'New Architecture (Fabric & TurboModules)', description: 'Zero-overhead synchronous native invocation bypassing the legacy JavaScript bridge.' },
      { title: 'Instant Over-The-Air (OTA) Updates', description: 'Push critical bug fixes and content changes directly to user devices without waiting for App Store approval.' },
      { title: 'Native Performance Profiling', description: 'Hermes JavaScript engine optimized for rapid cold-start times and minimal resident memory.' },
      { title: 'Full Native SDK Compatibility', description: 'Direct integration with Firebase, Stripe, Segment, and native push notification providers.' }
    ],
    techStack: ['React Native', 'Expo SDK', 'TypeScript', 'Hermes Engine', 'NativeWind'],
    process: [
      { step: '01', title: 'Shared Domain Logic Design', description: 'Package business logic and API clients into shared monorepo packages.' },
      { step: '02', title: 'Screen & Navigation Architecture', description: 'Implement native-stack navigators with smooth iOS and Android transitions.' },
      { step: '03', title: 'Hermes Performance Tuning', description: 'Profile memory usage and minimize JavaScript bundle parse time on low-end devices.' },
      { step: '04', title: 'EAS Build & Submission Pipeline', description: 'Automate build generation and over-the-air update deployments via Expo Application Services.' }
    ],
    faqs: [
      { q: 'How fast do React Native apps launch compared to native?', a: 'With the Hermes engine and bytecode pre-compilation, cold start times are virtually indistinguishable from pure native apps.' },
      { q: 'Can we push bug fixes without submitting to Apple review?', a: 'Yes. JavaScript bundle updates can be delivered over-the-air instantly via EAS Update, complying with App Store guidelines.' }
    ],
    relatedProjects: ['helios-core-banking', 'aegis-defi-vaults']
  },
  {
    category: 'mobile',
    categoryName: 'Mobile Engineering',
    slug: 'hybrid-ionic-app',
    title: 'Hybrid & Ionic Capacitor Enterprise Solutions',
    summary: 'Web standards packaged into enterprise mobile apps with strict security encapsulation.',
    description: 'We build enterprise hybrid applications using Ionic Capacitor, enabling organizations to deploy web application suites to mobile workforces with offline access and biometric locks.',
    heroStat: { value: '3x', label: 'Faster Time-to-Market' },
    capabilities: [
      { title: 'Capacitor Native Bridge', description: 'Direct access to mobile device hardware (camera, geolocation, file system, biometrics) from standard web views.' },
      { title: 'Encrypted Offline Storage', description: 'SQLCipher hardware-level encryption protecting sensitive field data on lost or stolen devices.' },
      { title: 'Unified Security Policy', description: 'Enforce remote wipe, jailbreak detection, and SSL certificate pinning across the mobile container.' },
      { title: 'Cross-Device Responsive Flow', description: 'One responsive UI adapting smoothly between phone handsets and large field-service tablets.' }
    ],
    techStack: ['Ionic', 'Capacitor', 'React / Vue', 'SQLCipher', 'WebAuthn'],
    process: [
      { step: '01', title: 'Web Container Security Hardening', description: 'Implement content security policies and native container encryption.' },
      { step: '02', title: 'Offline-First Synchronization', description: 'Design SQLite local replicas with bi-directional delta synchronization.' },
      { step: '03', title: 'Hardware Bridge Testing', description: 'Test camera barcode scanning and GPS tracking under rugged conditions.' },
      { step: '04', title: 'MDM Deployment', description: 'Package for Microsoft Intune, VMware Workspace ONE, and MobileIron enterprise app stores.' }
    ],
    faqs: [
      { q: 'Is an Ionic hybrid app secure enough for enterprise healthcare or finance?', a: 'Yes. With SQLCipher database encryption, biometric authentication, and certificate pinning, it meets stringent enterprise security benchmarks.' },
      { q: 'Can it be distributed through our private company app portal?', a: 'Yes. We package signed enterprise binaries compatible with all major MDM/MAM deployment systems.' }
    ],
    relatedProjects: ['novaris-clinical-cloud', 'apex-logistics-mesh']
  },

  // ==================== AI (20) ====================
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-chatbots',
    title: 'Enterprise Conversational AI & Autonomous Chatbots',
    summary: 'Omnichannel virtual assistants trained on proprietary corporate documentation with zero hallucination guardrails.',
    description: 'We engineer conversational AI systems that resolve 70%+ of customer support and internal IT requests autonomously, backed by retrieval augmented generation and continuous sentiment detection.',
    heroStat: { value: '72%', label: 'First-Contact Autonomous Resolution' },
    capabilities: [
      { title: 'Multi-Turn Context Memory', description: 'Maintains conversational coherence across extended multi-turn dialogs and multi-day sessions.' },
      { title: 'Strict Anti-Hallucination Boundaries', description: 'Answers are strictly grounded in verified enterprise documents with attributable citations.' },
      { title: 'Omnichannel Deployment', description: 'Deploy seamlessly to web widgets, Slack, Microsoft Teams, WhatsApp, and mobile apps.' },
      { title: 'Human-in-the-Loop Escalation', description: 'Smoothly transfers complex sentiment cases to human agents with full conversation summaries.' }
    ],
    techStack: ['Claude 3.5 / GPT-4o', 'LangChain', 'FastAPI', 'Pinecone / Qdrant', 'Next.js'],
    process: [
      { step: '01', title: 'Corpus Ingestion & Cleaning', description: 'Scrape and clean internal knowledge bases, PDFs, Confluence, and ticket histories.' },
      { step: '02', title: 'Semantic Chunking & Embedding', description: 'Vectorize documentation with specialized enterprise embedding models.' },
      { step: '03', title: 'Guardrail & Persona Tuning', description: 'Establish brand tone of voice and strict regulatory compliance refusal criteria.' },
      { step: '04', title: 'Telemetry & Evaluation', description: 'Continuous RAGAS benchmarking measuring context recall, faithfulness, and latency.' }
    ],
    faqs: [
      { q: 'How do you prevent the chatbot from making up false policies?', a: 'We employ strict retrieval guardrails: if semantic similarity is below threshold, the model gracefully admits uncertainty rather than guessing.' },
      { q: 'Is our corporate data used to train public AI models?', a: 'Never. We deploy private tenant endpoints and zero-data-retention enterprise agreements ensuring your data remains 100% private.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'generative-ai',
    title: 'Enterprise Generative AI Solutions',
    summary: 'Custom foundation model workflows for automated technical synthesis, document generation, and multimodal creativity.',
    description: 'We develop generative AI applications that automate complex knowledge worker tasks, from drafting structured financial filings to synthesizing regulatory RFP responses.',
    heroStat: { value: '8.4x', label: 'Document Generation Speedup' },
    capabilities: [
      { title: 'Automated Regulatory Synthesis', description: 'Transforms raw telemetry and transaction logs into compliant executive briefings.' },
      { title: 'Multimodal Image & Chart Understanding', description: 'Extracts data tables from architectural blueprints, medical scans, and complex invoices.' },
      { title: 'Template-Constrained Output', description: 'Enforces strict JSON and XML schema validation ensuring output feeds directly into downstream APIs.' },
      { title: 'Confidential Enterprise Hosting', description: 'Host open-weight models (Llama 3.3, Mistral Large) inside private VPC clusters.' }
    ],
    techStack: ['Llama 3.3', 'vLLM', 'Python', 'PyTorch', 'AWS Bedrock / Azure OpenAI'],
    process: [
      { step: '01', title: 'Workflow Opportunity Mapping', description: 'Identify repetitive high-skill documentation tasks suitable for automated synthesis.' },
      { step: '02', title: 'Prompt Pipeline Engineering', description: 'Construct multi-stage chain-of-thought prompts with few-shot verified examples.' },
      { step: '03', title: 'Deterministic Output Validation', description: 'Validate outputs with Pydantic schemas and automated business logic filters.' },
      { step: '04', title: 'Production Scalability Tuning', description: 'Deploy dedicated GPU inference endpoints with automated concurrency autoscaling.' }
    ],
    faqs: [
      { q: 'Can generative AI produce valid structured JSON output reliably?', a: 'Yes. We utilize constrained decoding (Grammar-guided sampling) to guarantee 100% valid schema adherence.' },
      { q: 'How do you manage per-token API costs?', a: 'We implement semantic prompt caching and dynamic model routing, directing simple queries to fast models and complex tasks to frontier models.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'stratum-energy-iot']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'llm-integration',
    title: 'Enterprise LLM Integration & Middleware',
    summary: 'Secure AI gateway middleware featuring semantic caching, rate limiting, and cost optimization.',
    description: 'We integrate large language models into your existing software stack through an enterprise AI gateway that eliminates vendor lock-in and protects corporate secrets.',
    heroStat: { value: '-64%', label: 'LLM API Token Expenses' },
    capabilities: [
      { title: 'Model Gateway & Fallback Routing', description: 'Seamlessly failover between OpenAI, Anthropic, Google Gemini, and self-hosted models.' },
      { title: 'Semantic Vector Prompt Caching', description: 'Caches answers to recurring enterprise queries, cutting latency to under 20ms and saving thousands in token bills.' },
      { title: 'PII & Secret Redaction Firewall', description: 'Detects and redacts credit cards, social security numbers, and API keys before queries leave your VPC.' },
      { title: 'Token Usage & Budget Controls', description: 'Departmental billing quotas, rate limiting, and detailed ROI analytics.' }
    ],
    techStack: ['LiteLLM', 'Redis', 'Python / Go', 'OpenTelemetry', 'PostgreSQL'],
    process: [
      { step: '01', title: 'AI Gateway Architecture', description: 'Deploy a centralized, high-throughput proxy between internal apps and AI providers.' },
      { step: '02', title: 'PII Sanitization Rules', description: 'Configure regex and machine learning filters to scrub sensitive corporate data.' },
      { step: '03', title: 'Semantic Cache Layer', description: 'Index historical queries using high-speed vector embeddings.' },
      { step: '04', title: 'FinOps Governance Dashboards', description: 'Set up real-time telemetry tracking cost-per-user and latency percentiles.' }
    ],
    faqs: [
      { q: 'Why do we need an AI gateway instead of calling OpenAI directly?', a: 'A gateway prevents single-vendor outages, strips sensitive PII, cuts token costs by over 50% via caching, and prevents runaway cloud bills.' },
      { q: 'What latency does the gateway proxy add?', a: 'Our Go/Rust proxy adds less than 3 milliseconds of overhead to outbound LLM calls.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'rag-systems',
    title: 'Enterprise RAG (Retrieval-Augmented Generation) Systems',
    summary: 'Hybrid dense-sparse vector search connecting enterprise knowledge silos to AI models with 99%+ precision.',
    description: 'We construct production-grade RAG pipelines that combine BM25 keyword search, dense embeddings, re-ranking models, and contextual retrieval across millions of enterprise documents.',
    heroStat: { value: '99.2%', label: 'Context Retrieval Precision' },
    capabilities: [
      { title: 'Hybrid Dense & Sparse Search', description: 'Combines vector semantic similarity with BM25 keyword exact matching for unmatched retrieval accuracy.' },
      { title: 'Cross-Encoder Re-Ranking', description: 'Second-stage rerankers (Cohere Rerank, BGE-Reranker) scoring top chunks for maximum relevance.' },
      { title: 'Parent-Document & Window Retrieval', description: 'Embeds small granular chunks while passing wider contextual windows to the LLM to preserve nuances.' },
      { title: 'Automated Document OCR & Parsing', description: 'Extracts tables, charts, and nested headers from messy corporate PDFs, Excel files, and scans.' }
    ],
    techStack: ['Qdrant / Milvus', 'Cohere Rerank', 'LangChain / LlamaIndex', 'Python', 'Unstructured.io'],
    process: [
      { step: '01', title: 'Corpus Analysis & Ingestion', description: 'Audit multi-format document archives across SharePoint, Google Drive, and databases.' },
      { step: '02', title: 'Context-Aware Chunking', description: 'Split text respecting markdown headers, table boundaries, and semantic paragraph breaks.' },
      { step: '03', title: 'Embedding Fine-Tuning', description: 'Fine-tune embedding models on your industry jargon and corporate abbreviations.' },
      { step: '04', title: 'RAG Triad Evaluation', description: 'Continuously measure Context Relevance, Groundedness, and Answer Relevance.' }
    ],
    faqs: [
      { q: 'Why do simple vector database searches fail on complex corporate PDFs?', a: 'Standard chunking cuts tables and headers in half. Our layout-aware parsing preserves table rows and surrounding context.' },
      { q: 'How many documents can your RAG architecture scale to?', a: 'Our distributed Qdrant/Milvus clusters index and query tens of millions of documents with sub-150ms search latency.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-agents',
    title: 'Autonomous Multi-Agent Systems & Tool-Calling',
    summary: 'Self-coordinating agent swarms executing multi-step business workflows with deterministic verification.',
    description: 'We architect autonomous multi-agent systems where specialized AI agents plan, deliberate, execute API actions, and verify outcomes without human micro-management.',
    heroStat: { value: '94%', label: 'Multi-Step Task Completion Rate' },
    capabilities: [
      { title: 'Hierarchical Supervisor Architecture', description: 'A master orchestrator agent delegates subtasks to specialized researcher, writer, and coder agents.' },
      { title: 'Deterministic Tool-Calling', description: 'Executes verified SQL queries, REST endpoints, and cloud commands with strict rollback capabilities.' },
      { title: 'Reflection & Self-Correction Loops', description: 'Agents inspect intermediate results, detect logical errors, and adjust plans before finalizing output.' },
      { title: 'Long-Term Episodic Memory', description: 'Retains memory of past executions and organizational user preferences across interactions.' }
    ],
    techStack: ['LangGraph', 'CrewAI', 'Python', 'FastAPI', 'Docker Sandboxes'],
    process: [
      { step: '01', title: 'Task Graph Deconstruction', description: 'Decompose complex business goals into directed acyclic task graphs.' },
      { step: '02', title: 'Tool & Sandbox Definition', description: 'Provide agents with safe, isolated execution environments and validated API schemas.' },
      { step: '03', title: 'Agent Deliberation Tuning', description: 'Configure debate and consensus mechanisms between specialized agents.' },
      { step: '04', title: 'Guardrail Enforcement', description: 'Implement financial spend limits and human-in-the-loop checkpoints for critical actions.' }
    ],
    faqs: [
      { q: 'How do you prevent autonomous agents from getting stuck in infinite loops?', a: 'We implement finite state graphs with maximum recursion limits, budget caps, and automated stagnation detectors.' },
      { q: 'Can agents execute real actions like updating our Salesforce database?', a: 'Yes. Agents invoke authenticated APIs with scoped OAuth permissions and complete audit logs.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'stratum-energy-iot']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'computer-vision',
    title: 'Industrial Computer Vision & Visual AI',
    summary: 'Automated visual inspection, defect detection, and spatial tracking for factories, retail, and security.',
    description: 'We deploy edge-optimized deep learning computer vision models capable of analyzing high-speed video feeds, detecting microscopic manufacturing defects, and monitoring logistics facilities.',
    heroStat: { value: '99.94%', label: 'Manufacturing Defect Detection Accuracy' },
    capabilities: [
      { title: 'Sub-Millisecond Defect Classification', description: 'Inspects items on conveyor belts at 60 items per second with microsecond edge inference.' },
      { title: 'Object Detection & Multi-Object Tracking', description: 'YOLOv10 and custom transformer architectures tracking moving assets and personnel.' },
      { title: 'Thermal & Multispectral Imaging', description: 'Identifies electrical overheating, fluid leaks, and structural stress invisible to the naked eye.' },
      { title: 'Edge Hardware Acceleration', description: 'Optimized for NVIDIA Jetson, Intel OpenVINO, and Hailo-8 edge AI processors.' }
    ],
    techStack: ['PyTorch', 'TensorRT', 'OpenCV', 'YOLOv10', 'NVIDIA Jetson'],
    process: [
      { step: '01', title: 'Optical Hardware Consultation', description: 'Select appropriate lenses, lighting angles, and industrial high-speed cameras.' },
      { step: '02', title: 'Dataset Annotation & Synthesis', description: 'Label domain-specific defect images and generate synthetic variations using diffusion.' },
      { step: '03', title: 'Model Quantization (FP16/INT8)', description: 'Quantize neural networks with TensorRT to achieve maximum inference FPS on edge devices.' },
      { step: '04', title: 'PLC & Industrial Bus Integration', description: 'Interface vision outputs directly with industrial robotic actuators via Modbus and OPC UA.' }
    ],
    faqs: [
      { q: 'Can computer vision work in variable warehouse lighting conditions?', a: 'Yes. We apply HDR normalization and synthetic data augmentation to ensure robust detection regardless of ambient shifts.' },
      { q: 'What frame rates can your models sustain?', a: 'Our TensorRT-optimized models achieve over 180 FPS on standard edge GPUs.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'stratum-energy-iot']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'nlp',
    title: 'Natural Language Processing (NLP) & Semantic Intelligence',
    summary: 'Entity extraction, multilingual sentiment classification, and legal contract intelligence.',
    description: 'We build specialized NLP pipelines that parse unstructured multilingual legal agreements, clinical trial notes, and financial filings with linguistic precision.',
    heroStat: { value: '98.6%', label: 'Named Entity Extraction F1-Score' },
    capabilities: [
      { title: 'Domain-Specific Named Entity Recognition', description: 'Extracts clauses, monetary values, dates, and counterparties from complex contracts.' },
      { title: 'Multilingual Semantic Clustering', description: 'Categorizes millions of international customer feedback messages across 50+ languages.' },
      { title: 'Topic Modeling & Trend Extraction', description: 'Identifies emerging market trends from news feeds, patent filings, and scientific journals.' },
      { title: 'Hierarchical Document Classification', description: 'Routes incoming inbound legal inquiries and insurance claims to appropriate specialists.' }
    ],
    techStack: ['spaCy', 'Hugging Face Transformers', 'Python', 'FastAPI', 'BERT / RoBERTa'],
    process: [
      { step: '01', title: 'Linguistic Taxonomy Design', description: 'Define the domain ontology and custom entity types for your industry.' },
      { step: '02', title: 'Transformer Fine-Tuning', description: 'Fine-tune domain encoders (LegalBERT, BioBERT) on labeled corporate corpora.' },
      { step: '03', title: 'Throughput Optimization', description: 'Export models via ONNX Runtime to handle thousands of documents per second.' },
      { step: '04', title: 'Automated Extraction Quality Checks', description: 'Deploy continuous validation checks alerting on linguistic drift over time.' }
    ],
    faqs: [
      { q: 'How does this differ from general LLM prompting?', a: 'Dedicated NLP models are 100x cheaper per document, run entirely on private CPUs, and guarantee deterministic entity extraction.' },
      { q: 'Can it process PDF scans with poor text layers?', a: 'Yes. We combine layout analysis with neural OCR to rebuild accurate textual hierarchy before parsing.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'predictive-analytics',
    title: 'Enterprise Predictive Analytics & Forecasting',
    summary: 'Time-series forecasting, predictive maintenance, and churn modeling powered by gradient boosted trees and deep sequence models.',
    description: 'Transform historical telemetry and customer behavior logs into forward-looking forecasts that predict equipment failure, market demand, and revenue attrition weeks in advance.',
    heroStat: { value: '-38%', label: 'Unplanned Industrial Downtime' },
    capabilities: [
      { title: 'Multi-Horizon Demand Forecasting', description: 'Forecasts retail inventory needs across tens of thousands of SKUs factoring in seasonality and macroeconomic indicators.' },
      { title: 'Predictive Equipment Maintenance', description: 'Analyzes vibration, temperature, and electrical harmonics to predict mechanical failure 14 days in advance.' },
      { title: 'Customer Churn & Lifetime Value Modeling', description: 'Identifies high-value enterprise accounts exhibiting early warning signals of contract termination.' },
      { title: 'Explainable AI Feature Attributions', description: 'SHAP and LIME values explaining the exact mathematical factors driving every prediction.' }
    ],
    techStack: ['XGBoost / LightGBM', 'Temporal Fusion Transformers', 'Python', 'Polars', 'Ray'],
    process: [
      { step: '01', title: 'Feature Store Construction', description: 'Engineer point-in-time correct temporal features to avoid historical data leakage.' },
      { step: '02', title: 'Model Tournament Benchmarking', description: 'Train gradient boosted trees, Prophet, and transformer models in parallel tournaments.' },
      { step: '03', title: 'Calibration & Confidence Intervals', description: 'Equip every prediction with rigorous conformal prediction confidence bounds.' },
      { step: '04', title: 'Automated Batch Scoring Pipeline', description: 'Schedule daily or hourly scoring jobs pushing predictions directly into corporate BI.' }
    ],
    faqs: [
      { q: 'How do you prevent data leakage in time-series models?', a: 'We employ strict temporal cross-validation, ensuring models are only evaluated on data occurring strictly after training periods.' },
      { q: 'Can the models explain why a piece of equipment is flagged for maintenance?', a: 'Yes. Every alert includes SHAP feature contribution charts highlighting which sensor anomalies triggered the flag.' }
    ],
    relatedProjects: ['stratum-energy-iot', 'apex-logistics-mesh']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ml-model-development',
    title: 'Custom Machine Learning Model Development',
    summary: 'Bespoke statistical, deep learning, and reinforcement learning models built from scratch for proprietary algorithms.',
    description: 'When off-the-shelf APIs fail to solve your unique mathematical challenge, our machine learning scientists design, train, and validate custom neural architectures tailored to your problem.',
    heroStat: { value: '99.7%', label: 'Model Validation Metric Target' },
    capabilities: [
      { title: 'Bespoke Neural Architecture Design', description: 'Design custom convolutional, recurrent, graph, or transformer networks optimized for your data distribution.' },
      { title: 'Transfer Learning & Quantization', description: 'Adapt state-of-the-art foundation weights while shrinking memory footprints for real-time edge execution.' },
      { title: 'Graph Neural Networks (GNN)', description: 'Model complex relationships in financial fraud networks, chemical molecules, and social graphs.' },
      { title: 'Reinforcement Learning Optimization', description: 'Train autonomous decision agents for dynamic resource allocation and algorithmic portfolio trading.' }
    ],
    techStack: ['PyTorch', 'JAX', 'CUDA', 'Optuna', 'Weights & Biases'],
    process: [
      { step: '01', title: 'Mathematical Formulation', description: 'Define the loss function, evaluation metric invariants, and optimization constraints.' },
      { step: '02', title: 'Data Cleaning & Stratification', description: 'Balance class imbalances using SMOTE, focal loss, and rigorous stratification splits.' },
      { step: '03', title: 'Distributed GPU Training', description: 'Train models across multi-GPU clusters with automated hyperparameter tuning via Optuna.' },
      { step: '04', title: 'Rigorous Independent Validation', description: 'Evaluate model performance against out-of-sample holdout test sets and stress distributions.' }
    ],
    faqs: [
      { q: 'How do we know if our dataset is large enough for custom deep learning?', a: 'We run feasibility learning curve diagnostics during week 1, establishing statistical confidence bounds before full-scale training.' },
      { q: 'Do you deliver reproducible training code or just model weights?', a: 'We deliver full Git repositories, Dockerized training environments, data preparation scripts, and trained weights.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'mlops',
    title: 'Enterprise MLOps & Production Model Governance',
    summary: 'Automated CI/CD for machine learning: model registries, automated retraining, feature stores, and drift monitoring.',
    description: 'Bridge the gap between data science prototypes and reliable 24/7 production systems with enterprise MLOps pipelines that prevent silent model degradation.',
    heroStat: { value: '10 min', label: 'Model Retrain-to-Production Cycle' },
    capabilities: [
      { title: 'Automated Data & Concept Drift Detection', description: 'Calculates Kolmogorov-Smirnov and PSI metrics to detect when real-world distributions drift from training.' },
      { title: 'Centralized Feature Stores', description: 'Feast feature store unifying low-latency online Redis reads with offline warehouse training sets.' },
      { title: 'Canary & Shadow Deployment Rollouts', description: 'Shadow traffic routing to compare candidate model inferences against active production baselines.' },
      { title: 'Immutable Model Versioning', description: 'Cryptographically signed model artifacts tracked alongside exact Git commit and data hashes.' }
    ],
    techStack: ['MLflow', 'Kubeflow', 'Feast', 'Evidently AI', 'Triton Inference Server'],
    process: [
      { step: '01', title: 'Pipeline Reproducibility Audit', description: 'Containerize all preprocessing and training code to eliminate local developer dependencies.' },
      { step: '02', title: 'Model Registry Configuration', description: 'Set up automated promotion stages (Staging, Shadow, Production) tied to metric thresholds.' },
      { step: '03', title: 'High-Throughput Inference Serving', description: 'Deploy NVIDIA Triton inference servers with dynamic batching and GPU concurrency.' },
      { step: '04', title: 'Continuous Monitoring & Retraining', description: 'Configure automated webhooks triggering retraining pipelines when accuracy falls.' }
    ],
    faqs: [
      { q: 'How do you detect when a production model starts making poor predictions?', a: 'We monitor distribution shifts in input features and prediction outputs in real time, alerting long before business KPIs drop.' },
      { q: 'Can MLOps integrate with our existing Kubernetes cluster?', a: 'Yes. We deploy native Kubernetes operators that scale model replica pods dynamically based on GPU utilization.' }
    ],
    relatedProjects: ['helios-core-banking', 'vertex-streaming-media']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-process-automation',
    title: 'Intelligent AI Process Automation (IPA)',
    summary: 'Replace fragile RPA scripts with cognitive AI agents that understand context, handle exceptions, and route workflows.',
    description: 'Traditional Robotic Process Automation (RPA) breaks whenever a website updates a button. Our cognitive AI process automation understands natural language, extracts data from ambiguous forms, and resolves end-to-end back-office tasks.',
    heroStat: { value: '92%', label: 'Reduction in Manual Form Processing' },
    capabilities: [
      { title: 'Exception-Tolerant Cognitive Flow', description: 'Adapts dynamically when vendors change invoice formats or portal layouts without crashing.' },
      { title: 'Automated Multi-System Reconciliation', description: 'Reconciles bank statements against ERP ledgers and CRM records, highlighting anomalies.' },
      { title: 'Human-in-the-Loop Review Desks', description: 'Flags low-confidence edge cases to staff with suggested corrections and single-click approvals.' },
      { title: 'Full Regulatory Auditability', description: 'Records screen interactions and API logs for complete compliance verification.' }
    ],
    techStack: ['Python', 'Playwright', 'LangChain', 'OpenCV', 'FastAPI'],
    process: [
      { step: '01', title: 'Back-Office Bottleneck Analysis', description: 'Map time spent on manual copy-pasting, invoice matching, and reconciliation.' },
      { step: '02', title: 'Cognitive Extractor Training', description: 'Train visual and textual parsers on unstructured historical transaction documents.' },
      { step: '03', title: 'Exception Routing Implementation', description: 'Build intuitive review queues where human staff approve or adjust edge cases.' },
      { step: '04', title: 'Full Autopilot Deployment', description: 'Scale automated background execution to thousands of daily transactions.' }
    ],
    faqs: [
      { q: 'How is cognitive IPA better than UiPath or legacy RPA?', a: 'Legacy RPA breaks on UI changes. Our cognitive agents understand semantic meaning, allowing them to adapt to altered layouts seamlessly.' },
      { q: 'What happens if the AI encounters an invoice format it has never seen?', a: 'It extracts all probable fields, assigns a confidence score, and routes low-confidence fields to a human reviewer while learning from their correction.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'voice-ai',
    title: 'Enterprise Voice AI & Real-Time Audio Agents',
    summary: 'Sub-400ms latency conversational voice agents with natural human inflection, interruption handling, and telephony SIP integration.',
    description: 'We develop human-grade conversational voice agents capable of conducting inbound and outbound telephone calls, handling background noise, and executing transactions with sub-second responsiveness.',
    heroStat: { value: '< 380ms', label: 'End-to-End Voice Latency' },
    capabilities: [
      { title: 'Sub-400ms Real-Time Voice Streaming', description: 'WebRTC and WebSocket audio streaming eliminating awkward pauses in customer conversations.' },
      { title: 'Natural Interruption Handling', description: 'Detects when human callers interject and immediately halts synthetic speech to listen.' },
      { title: 'Telephony SIP & PBX Trunking', description: 'Direct integration with Twilio, Amazon Chime, FreeSWITCH, and enterprise Cisco phone systems.' },
      { title: 'Noise Suppression & Accent Adaptation', description: 'Filters background ambient noise and accurately transcribes diverse global regional accents.' }
    ],
    techStack: ['Deepgram', 'Whisper', 'Cartesia / ElevenLabs', 'WebRTC', 'LiveKit'],
    process: [
      { step: '01', title: 'Voice Persona & Tone Design', description: 'Select and fine-tune voice models reflecting your brand warmth and clarity.' },
      { step: '02', title: 'Telephony Gateway Integration', description: 'Connect SIP trunks and configure automated interactive voice response (IVR) failover.' },
      { step: '03', title: 'Latency Pipeline Tuning', description: 'Stream audio tokens directly into real-time speech generation without waiting for full sentences.' },
      { step: '04', title: 'Live Agent Whisper Coaching', description: 'Provide human phone operators with real-time AI transcription and suggested answers.' }
    ],
    faqs: [
      { q: 'Can callers interrupt the voice AI while it is speaking?', a: 'Yes. Our full-duplex audio pipeline detects user vocal onset within 120ms and instantly cuts synthetic audio.' },
      { q: 'Can it transfer callers directly to human support staff?', a: 'Yes. It performs warm SIP transfers passing full transcripts and intent summaries to human agents.' }
    ],
    relatedProjects: ['helios-core-banking', 'vertex-streaming-media']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'recommendation-engines',
    title: 'Real-Time Enterprise Recommendation Engines',
    summary: 'Deep neural collaborative filtering and graph embeddings driving double-digit conversion and engagement surges.',
    description: 'We engineer hyperscale recommendation systems that personalize content, products, and financial services in real time based on implicit user behavior, session context, and vector embeddings.',
    heroStat: { value: '+28%', label: 'Average Order Value Increase' },
    capabilities: [
      { title: 'Two-Tower Deep Neural Matching', description: 'Candidate retrieval filtering millions of items down to top hundreds in under 15 milliseconds.' },
      { title: 'Real-Time Session-Based Adaptation', description: 'Adjusts recommendations immediately based on items clicked during the current browsing session.' },
      { title: 'Cold-Start New Item Solving', description: 'Uses multi-modal text and image embeddings to recommend newly launched products with zero initial history.' },
      { title: 'Multi-Objective Ranking Optimization', description: 'Balances click-through rate, profit margin, inventory availability, and user diversity.' }
    ],
    techStack: ['NVIDIA Merlin', 'TorchRec', 'Redis', 'Milvus', 'Ray'],
    process: [
      { step: '01', title: 'Interaction Event Stream Ingestion', description: 'Capture clickstream, dwell time, and purchase telemetry with sub-second streaming.' },
      { step: '02', title: 'Embedding Space Training', description: 'Train joint user-item embedding representations using deep neural collaborative filtering.' },
      { step: '03', title: 'Multi-Stage Scoring Pipeline', description: 'Implement high-speed candidate retrieval followed by heavy cross-feature ranking.' },
      { step: '04', title: 'A/B Testing Infrastructure', description: 'Deploy randomized split-testing measuring lift against baseline popularity algorithms.' }
    ],
    faqs: [
      { q: 'How does the system recommend items with zero past purchase data?', a: 'Our content-aware two-tower models leverage product descriptions, categories, and images to place new items accurately in embedding space.' },
      { q: 'What is the latency at checkout or product page load?', a: 'Median latency is under 18 milliseconds, even when scoring across catalogs of 5,000,000+ items.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'apex-logistics-mesh']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-consulting',
    title: 'Enterprise AI Strategy & Governance Consulting',
    summary: 'Executive advisory, technical feasibility audits, and ethical AI compliance frameworks for Fortune 1000 boards.',
    description: 'We help enterprise leadership navigate AI hype, identify highest-ROI use cases, establish secure data governance, and comply with emerging global AI regulations like the EU AI Act.',
    heroStat: { value: '4.2x', label: 'Average Enterprise AI ROI' },
    capabilities: [
      { title: 'Use Case Feasibility & ROI Scoring', description: 'Prioritizes dozens of proposed enterprise AI initiatives based on technical viability and business impact.' },
      { title: 'EU AI Act Compliance Auditing', description: 'Classifies enterprise AI systems under EU risk tiers and prepares required technical documentation.' },
      { title: 'Data Readiness & Hygiene Audits', description: 'Assesses whether existing corporate data warehouses are clean and structured enough for AI training.' },
      { title: 'Vendor & Model Selection Advisory', description: 'Unbiased technical evaluation comparing commercial APIs against self-hosted open-source models.' }
    ],
    techStack: ['Governance Frameworks', 'EU AI Act', 'NIST AI RMF', 'ISO 42001'],
    process: [
      { step: '01', title: 'Executive Stakeholder Interviews', description: 'Interview department heads to identify operational pain points and strategic goals.' },
      { step: '02', title: 'Architecture & Security Due Diligence', description: 'Audit cloud infrastructure, data pipelines, and third-party vendor exposures.' },
      { step: '03', title: 'Roadmap & Business Case Delivery', description: 'Deliver a phased 18-month AI roadmap with projected capital expenditures and returns.' },
      { step: '04', title: 'Implementation Oversight', description: 'Serve as technical advisors during vendor procurement and initial proof-of-concept sprints.' }
    ],
    faqs: [
      { q: 'How do we comply with the new EU AI Act?', a: 'We audit your systems against high-risk categories, establish risk management systems, and generate required technical conformity dossiers.' },
      { q: 'Are you affiliated with any specific cloud AI vendor?', a: 'No. We provide 100% vendor-agnostic advice, evaluating whether OpenAI, Anthropic, Google, or open-source self-hosting is best for your balance sheet.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'fraud-detection',
    title: 'Real-Time AI Fraud Detection & Risk Scoring',
    summary: 'Graph neural networks and sub-10ms anomaly detection stopping fraudulent transactions before authorization.',
    description: 'We build institutional fraud detection engines that analyze millions of real-time credit card payments, wire transfers, and identity verifications, blocking cybercrime with near-zero false positive rates.',
    heroStat: { value: '99.4%', label: 'Fraud Detection Precision' },
    capabilities: [
      { title: 'Sub-10ms Real-Time Inference', description: 'Scores transaction risk during live authorization holds before payment gateway capture.' },
      { title: 'Graph Neural Network (GNN) Ring Detection', description: 'Uncovers sophisticated synthetic identity fraud rings and money laundering syndicates.' },
      { title: 'Dynamic Velocity & Geolocation Checks', description: 'Flags impossible geographic travel, anomalous device fingerprints, and rapid card testing.' },
      { title: 'Transparent Regulatory Explanations', description: 'Generates mathematically defensible adverse action notices required by FCRA and banking laws.' }
    ],
    techStack: ['PyTorch Geometric', 'TigerGraph', 'Redis', 'Kafka', 'Rust'],
    process: [
      { step: '01', title: 'Historical Transaction Graph Modeling', description: 'Ingest millions of historical transactions into high-performance graph database structures.' },
      { step: '02', title: 'Feature Pipeline Acceleration', description: 'Build in-memory streaming aggregates computing user velocity over 1-minute, 1-hour, and 30-day windows.' },
      { step: '03', title: 'Supervised & Unsupervised Training', description: 'Combine supervised boosted trees with unsupervised autoencoders for zero-day fraud pattern detection.' },
      { step: '04', title: 'Production Inline Deployment', description: 'Embed risk scoring directly into payment gateway routing pipelines.' }
    ],
    faqs: [
      { q: 'How do you keep false positive rates low so legitimate shoppers are not blocked?', a: 'We employ multi-stage scoring: only extreme risk transactions are rejected, while ambiguous scores trigger frictionless step-up biometrics.' },
      { q: 'Can it catch brand-new fraud techniques that have never been seen before?', a: 'Yes. Our unsupervised anomaly models flag behavioral divergence from normal customer patterns without needing prior labeled examples.' }
    ],
    relatedProjects: ['helios-core-banking', 'aegis-defi-vaults']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'document-ai-ocr',
    title: 'Intelligent Document AI & Neural OCR',
    summary: 'Multimodal vision-language models extracting key-value pairs from complex nested tables, handwritten forms, and receipts.',
    description: 'We replace fragile template OCR with modern multimodal AI models that understand document geometry, reading order, and table cell associations across millions of scanned enterprise documents.',
    heroStat: { value: '99.8%', label: 'Key-Value Extraction Accuracy' },
    capabilities: [
      { title: 'Complex Nested Table Extraction', description: 'Accurately parses merged cells, multi-page financial balance sheets, and tax schedules into clean JSON.' },
      { title: 'Handwriting & Signature Verification', description: 'Detects handwritten annotations and validates customer signature presence against stored exemplars.' },
      { title: 'Document Classification & Page Splitting', description: 'Splits multi-hundred-page loan packets into distinct documents (W2s, bank statements, deeds).' },
      { title: 'Automated Redaction of Sensitive PII', description: 'Blacks out sensitive social security numbers and medical codes prior to public archive storage.' }
    ],
    techStack: ['Tesseract', 'LayoutLMv3', 'Donut', 'PyTorch', 'FastAPI'],
    process: [
      { step: '01', title: 'Scan Pre-Processing Pipeline', description: 'Deskew, de-noise, and enhance low-resolution mobile camera captures.' },
      { step: '02', title: 'Visual Transformer Fine-Tuning', description: 'Train layout-aware transformers to identify semantic fields regardless of varying formats.' },
      { step: '03', title: 'Automated Confidence Calibration', description: 'Equip extracted fields with character-level confidence scores.' },
      { step: '04', title: 'Integration into Enterprise DMS', description: 'Stream verified records directly into SAP, Salesforce, or custom databases.' }
    ],
    faqs: [
      { q: 'Can it read messy smartphone photos of paper invoices?', a: 'Yes. Our preprocessing pipeline automatically corrects perspective distortion, shadows, and low lighting.' },
      { q: 'How fast can it process a 50-page commercial lease agreement?', a: 'On dedicated GPU inference servers, a 50-page document is completely parsed and extracted in under 4 seconds.' }
    ],
    relatedProjects: ['novaris-clinical-cloud', 'helios-core-banking']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-trading-bots',
    title: 'Algorithmic AI Trading & Quantitative Execution',
    summary: 'Reinforcement learning, sentiment alpha signals, and ultra-low latency execution bots for hedge funds and prop desks.',
    description: 'We develop quantitative trading algorithms that ingest multi-exchange order books, macroeconomic sentiment, and tick data to execute optimal order execution with minimal market impact.',
    heroStat: { value: '0.04µs', label: 'Order Execution Jitter' },
    capabilities: [
      { title: 'Order Book Imbalance (OFI) Signals', description: 'Analyzes Level-3 exchange market depth to predict short-term price momentum.' },
      { title: 'Reinforcement Learning Execution (TWAP/VWAP)', description: 'Minimizes slippage and adverse selection when unwinding multi-million-dollar positions.' },
      { title: 'Alternative Data Sentiment Mining', description: 'Extracts real-time trading alpha from earnings call audio, regulatory filings, and news feeds.' },
      { title: 'Hardware Kernel Bypass Integration', description: 'Direct user-space execution via Solarflare OpenOnload and DPDK network interfaces.' }
    ],
    techStack: ['C++20', 'Python', 'PyTorch', 'Solarflare OpenOnload', 'TimescaleDB'],
    process: [
      { step: '01', title: 'Tick-Level Backtesting Framework', description: 'Simulate trading strategies against nanosecond-accurate historical market data with realistic fee modeling.' },
      { step: '02', title: 'Risk Guardrail Codification', description: 'Enforce hard stop-loss limits, maximum drawdown caps, and position limits directly in memory.' },
      { step: '03', title: 'Paper Trading Validation', description: 'Run live strategy execution in sandbox environments against real-time exchange order flows.' },
      { step: '04', title: 'Colocation Production Deployment', description: 'Deploy servers inside Equinix NY4, LD4, and TY3 financial exchange cross-connects.' }
    ],
    faqs: [
      { q: 'How do you prevent overfitting in backtests?', a: 'We use walk-forward cross-validation, combinatorial purged cross-validation, and penalize parameter complexity.' },
      { q: 'Can these algorithms trade both traditional equities and crypto?', a: 'Yes. Our unified market data adapters connect to NASDAQ/NYSE FIX protocols and crypto exchange WebSockets.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'helios-core-banking']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'sentiment-analysis',
    title: 'Real-Time Market & Brand Sentiment Analysis',
    summary: 'Analyze millions of social posts, customer reviews, and news articles to predict market sentiment and brand crises.',
    description: 'We build real-time semantic monitoring engines that ingest firehose data streams, detecting subtle emotional inflection points, public relation crises, and consumer sentiment shifts.',
    heroStat: { value: '100M+', label: 'Daily Social Messages Ingested' },
    capabilities: [
      { title: 'Fine-Grained Aspect-Based Sentiment', description: 'Evaluates sentiment toward specific product features rather than just overall positive/negative scores.' },
      { title: 'Viral Crisis Early-Warning Alerts', description: 'Detects anomalous spikes in negative brand mentions hours before social media virality.' },
      { title: 'Multi-Language Sarcasm & Slang Detection', description: 'Contextual transformers trained on modern internet slang, idioms, and subtle sarcasm.' },
      { title: 'Competitive Intelligence Benchmarking', description: 'Compares your brand perception index directly against market competitors in real time.' }
    ],
    techStack: ['RoBERTa', 'Kafka', 'ClickHouse', 'FastAPI', 'Grafana'],
    process: [
      { step: '01', title: 'Data Firehose Connection', description: 'Connect real-time API feeds from X, Reddit, review portals, and news syndicates.' },
      { step: '02', title: 'Aspect Extraction Pipeline', description: 'Identify target entities and product attributes within unstructured social posts.' },
      { step: '03', title: 'Real-Time Aggregation', description: 'Compute rolling sentiment scores and volumetric anomalies using ClickHouse.' },
      { step: '04', title: 'Executive Alerting Webhooks', description: 'Trigger Slack, Teams, and SMS alerts when severe negative sentiment anomalies are detected.' }
    ],
    faqs: [
      { q: 'Can the system distinguish genuine complaints from bot spam?', a: 'Yes. Our preprocessing pipeline classifies and filters out automated bot spam and astroturfing campaigns.' },
      { q: 'Can sentiment signals be integrated into quantitative trading models?', a: 'Yes. We expose low-latency streaming WebSocket endpoints delivering numerical sentiment indices every second.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'aegis-defi-vaults']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'ai-copilots',
    title: 'Enterprise AI Copilots & Internal Workflow Assistants',
    summary: 'Context-aware internal copilots embedded into your proprietary ERP, CRM, and developer tools.',
    description: 'Empower your knowledge workers with specialized AI copilots that auto-complete complex workflows, pull relevant customer history, and draft technical code inside your proprietary software.',
    heroStat: { value: '+40%', label: 'Employee Operational Productivity' },
    capabilities: [
      { title: 'In-Context Software Overlay', description: 'Browser extensions and embedded iframe copilots interacting directly with existing software screens.' },
      { title: 'One-Click Code & SQL Synthesis', description: 'Translates natural language questions into validated database queries and scripts.' },
      { title: 'Role-Specific Knowledge Grounding', description: 'Customized assistance tailored for customer support, sales reps, underwriters, and software engineers.' },
      { title: 'Complete Telemetry & User Feedback', description: 'Tracks copilot adoption rates, accepted suggestions, and quantitative time saved per employee.' }
    ],
    techStack: ['Chrome Extension API', 'TypeScript', 'LangChain', 'FastAPI', 'PostgreSQL'],
    process: [
      { step: '01', title: 'User Workflow Shadowing', description: 'Identify high-friction repetitive software interactions across departments.' },
      { step: '02', title: 'Context-Capture Engine', description: 'Develop lightweight DOM scrapers and API listeners that extract active screen context.' },
      { step: '03', title: 'Prompt Specialization', description: 'Fine-tune prompts on departmental standard operating procedures and golden examples.' },
      { step: '04', title: 'Enterprise Single Sign-On Rollout', description: 'Deploy browser extensions via corporate Google Chrome / Microsoft Edge enterprise policy.' }
    ],
    faqs: [
      { q: 'Does our internal software require an API to support an AI copilot?', a: 'Not necessarily. Our browser-level copilots can extract screen context and interact directly through UI automation.' },
      { q: 'Can employees leak proprietary customer records through the copilot?', a: 'No. All outbound prompts pass through an enterprise sanitization proxy that scrubs PII and logs every query.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'ai',
    categoryName: 'Artificial Intelligence',
    slug: 'model-fine-tuning',
    title: 'Custom LLM & Foundation Model Fine-Tuning',
    summary: 'LoRA, QLoRA, and full-parameter fine-tuning of open-weight models on proprietary corporate data.',
    description: 'We train open-source foundation models (Llama 3, Mistral, Qwen) on your organization’s domain-specific terminology, internal codebases, and historical decisions, achieving frontier performance at a fraction of commercial API costs.',
    heroStat: { value: '92%', label: 'Cost Reduction vs Frontier Commercial APIs' },
    capabilities: [
      { title: 'Parameter-Efficient Fine-Tuning (PEFT/LoRA)', description: 'Fine-tune 70B parameter models on cost-effective GPU clusters with zero catastrophic forgetting.' },
      { title: 'Direct Preference Optimization (DPO)', description: 'Align model outputs with enterprise editorial standards and expert human preferences.' },
      { title: 'Domain Vocabulary Expansion', description: 'Add industry-specific tokens (medical, legal, financial) to model tokenizers for higher semantic efficiency.' },
      { title: 'Private Weights Deployment', description: 'Deploy your proprietary weights inside your private cloud with zero external phone-home dependencies.' }
    ],
    techStack: ['Axolotl / Unsloth', 'PyTorch', 'DeepSpeed', 'vLLM', 'Hugging Face'],
    process: [
      { step: '01', title: 'Dataset Curation & Filtering', description: 'Extract, clean, and deduplicate high-quality golden instructional pairs from internal records.' },
      { step: '02', title: 'Instruction Tuning & LoRA Training', description: 'Train adapters across multi-GPU nodes with continuous validation loss monitoring.' },
      { step: '03', title: 'Automated Benchmark Evaluation', description: 'Score fine-tuned weights against baseline models on domain-specific test suites.' },
      { step: '04', title: 'vLLM Production Serving', description: 'Deploy quantized models via vLLM with PagedAttention for maximum token throughput.' }
    ],
    faqs: [
      { q: 'When is fine-tuning better than standard RAG?', a: 'Fine-tuning is superior when you need to enforce a specific writing style, teach domain reasoning, or eliminate high recurring per-token API costs.' },
      { q: 'Can a fine-tuned open-source model outperform GPT-4o?', a: 'On specialized narrow domain tasks (e.g. medical radiology report writing or banking compliance), fine-tuned 70B models routinely outperform generic commercial models.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },

  // ==================== DATA (6) ====================
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'data-engineering',
    title: 'Enterprise Data Engineering & Distributed Pipelines',
    summary: 'Petabyte-scale distributed data architectures processing real-time streaming and batch workloads with zero data loss.',
    description: 'We architect modern data platforms that ingest, transform, and serve petabytes of structured and unstructured data, eliminating pipeline brittleness and query bottlenecks.',
    heroStat: { value: '10 PB+', label: 'Monthly Data Ingestion Volume' },
    capabilities: [
      { title: 'Distributed Lakehouse Architectures', description: 'Unify data lakes and warehouses using Apache Iceberg, Delta Lake, and Trino.' },
      { title: 'Real-Time Stream Processing', description: 'Apache Kafka and Apache Flink pipelines with sub-second event processing.' },
      { title: 'Data Quality & Anomaly Testing', description: 'Automated Great Expectations and dbt tests verifying data invariants before downstream exposure.' },
      { title: 'Data Lineage & Cataloging', description: 'End-to-end data provenance tracking with OpenLineage and Apache Atlas.' }
    ],
    techStack: ['Apache Iceberg', 'Apache Flink', 'Apache Kafka', 'dbt', 'Trino'],
    process: [
      { step: '01', title: 'Data Topology Assessment', description: 'Map source transactional databases, event streams, and reporting consumers.' },
      { step: '02', title: 'Storage & Schema Design', description: 'Define partition strategies and Iceberg table schemas optimized for query pruning.' },
      { step: '03', title: 'Transformation Pipeline Engineering', description: 'Author modular dbt SQL and PySpark transformation models with automated testing.' },
      { step: '04', title: 'Orchestration & SLA Monitoring', description: 'Schedule DAGs via Apache Airflow with automated on-call PagerDuty integration.' }
    ],
    faqs: [
      { q: 'Why choose Apache Iceberg over traditional Hive tables?', a: 'Iceberg provides ACID transactions, full schema evolution, hidden partitioning, and time-travel querying without performance degradation.' },
      { q: 'How do you handle schema changes from source databases without breaking pipelines?', a: 'We implement schema registry validation and non-blocking evolutionary migrations that preserve backward compatibility.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'data-visualization-bi',
    title: 'Executive BI & Interactive Data Visualization',
    summary: 'Sub-second real-time dashboards and interactive business intelligence portals.',
    description: 'We turn massive data lakes into actionable visual intelligence for C-level executives and operational teams, replacing clunky static reports with lightning-fast interactive dashboards.',
    heroStat: { value: '< 200ms', label: 'Dashboard Query Load Time' },
    capabilities: [
      { title: 'Sub-Second Analytical Queries', description: 'Backed by ClickHouse and DuckDB in-memory OLAP engines for instantaneous filtering.' },
      { title: 'Custom Interactive Canvas Visualizations', description: 'Tailored D3.js, WebGL, and Deck.gl geospatial and network topology visualizers.' },
      { title: 'Self-Service Semantic Layers', description: 'Cube.js and Looker semantic layers ensuring every department calculates revenue and churn identically.' },
      { title: 'Automated Executive Digest Reports', description: 'Scheduled PDF reports and Slack KPI notifications delivered to leadership weekly.' }
    ],
    techStack: ['ClickHouse', 'Cube.js', 'D3.js / Tremor', 'Deck.gl', 'Tableau / Power BI'],
    process: [
      { step: '01', title: 'Executive KPI Discovery', description: 'Define North Star business metrics and analytical drill-down hierarchies.' },
      { step: '02', title: 'Semantic Modeling', description: 'Build centralized metric definitions in Cube.js to eliminate conflicting departmental calculations.' },
      { step: '03', title: 'High-Performance UI Engineering', description: 'Develop fluid interactive visual dashboards with pre-aggregated OLAP tables.' },
      { step: '04', title: 'Row-Level Security Configuration', description: 'Enforce user-level permissions ensuring managers only view authorized departmental figures.' }
    ],
    faqs: [
      { q: 'Can these dashboards handle queries over 100 million rows in real time?', a: 'Yes. Backed by columnar engines like ClickHouse, complex aggregate queries over 100M+ rows resolve in under 150 milliseconds.' },
      { q: 'Can we embed these visual dashboards into our customer-facing web app?', a: 'Yes. We specialize in customer-facing embedded analytics with strict multi-tenant row-level security.' }
    ],
    relatedProjects: ['stratum-energy-iot', 'vertex-streaming-media']
  },
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'data-warehousing',
    title: 'Cloud Data Warehousing & Modern Lakehouses',
    summary: 'High-performance Snowflake, BigQuery, and Databricks architectures with automated cost optimization.',
    description: 'We design and optimize enterprise cloud data warehouses, consolidating scattered spreadsheets and transactional databases into a unified, lightning-fast analytical source of truth.',
    heroStat: { value: '-48%', label: 'Snowflake / BigQuery Compute Spend' },
    capabilities: [
      { title: 'Multi-Cluster Warehouse Sizing', description: 'Configure automated auto-suspend and auto-scaling to prevent runaway compute bills.' },
      { title: 'Zero-Copy Cloning & Time Travel', description: 'Instant staging environments and point-in-time historical data restoration.' },
      { title: 'Role-Based Data Masking', description: 'Automated dynamic masking policies shielding social security and credit card numbers from unauthorized analysts.' },
      { title: 'FinOps Warehouse Cost Optimization', description: 'Continuous query profiling identifying expensive unpartitioned scans and runaway queries.' }
    ],
    techStack: ['Snowflake', 'Google BigQuery', 'Databricks', 'dbt Core', 'AWS Redshift'],
    process: [
      { step: '01', title: 'Warehouse Sizing & Architecture', description: 'Select optimal warehouse tier and partition strategies matching workload patterns.' },
      { step: '02', title: 'Data Migration & Ingestion', description: 'Migrate on-premise Teradata/Oracle warehouses with verified data parity tests.' },
      { step: '03', title: 'Dimensional Modeling (Kimball)', description: 'Build star schemas, dimensional tables, and fact tables optimized for analytical queries.' },
      { step: '04', title: 'Automated Cost Controls', description: 'Implement resource monitors and query timeouts to cap monthly cloud warehouse bills.' }
    ],
    faqs: [
      { q: 'How do you optimize runaway Snowflake or BigQuery bills?', a: 'We cluster large tables, implement dbt incremental models, and configure aggressive auto-suspend policies, typically cutting bills by 40-50%.' },
      { q: 'How do you ensure zero downtime during warehouse migration?', a: 'We run shadow dual-writing and automated row-by-row reconciliation for 30 days before deprecating legacy databases.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'etl-pipelines',
    title: 'High-Throughput ETL & ELT Pipeline Engineering',
    summary: 'Resilient data ingestion pipelines with automated schema drift handling and idempotency.',
    description: 'We engineer robust extract-transform-load pipelines connecting ERPs, third-party APIs, and databases with guaranteed delivery and zero duplicate records.',
    heroStat: { value: '99.999%', label: 'Pipeline Ingestion Reliability' },
    capabilities: [
      { title: 'Change Data Capture (CDC)', description: 'Debezium and Kafka connectors capturing database mutations without impacting production OLTP performance.' },
      { title: 'Idempotent Retry Architecture', description: 'Guarantees that network hiccups and server restarts never create duplicate records.' },
      { title: 'Dead-Letter Queue Remediation', description: 'Automatically routes malformed payloads to quarantine queues with automated replay workflows.' },
      { title: 'Zero-Downtime Schema Evolution', description: 'Seamlessly handles upstream API additions without pipeline stalling.' }
    ],
    techStack: ['Apache Airflow', 'dbt', 'Debezium', 'Kafka', 'Python / Rust'],
    process: [
      { step: '01', title: 'Source System Audit', description: 'Analyze API rate limits, database write loads, and CDC replication capabilities.' },
      { step: '02', title: 'Pipeline DAG Construction', description: 'Author declarative Airflow DAGs with modular tasks and strict dependency boundaries.' },
      { step: '03', title: 'Data Quality Check Integration', description: 'Embed automated assertions verifying record counts and null-value invariants.' },
      { step: '04', title: 'Failure Alerting & Replay Drills', description: 'Test automated retry backoff algorithms and Slack alert notifications.' }
    ],
    faqs: [
      { q: 'How does Change Data Capture (CDC) avoid slowing down our live transactional database?', a: 'Debezium reads the database write-ahead log (WAL) asynchronously from disk, adding less than 1% CPU overhead to the primary database.' },
      { q: 'What happens if a source vendor API rate-limits our pipeline?', a: 'Our pipelines employ exponential backoff with jitter and checkpoint tokens, resuming seamlessly without data gaps.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'novaris-clinical-cloud']
  },
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'big-data',
    title: 'Hyperscale Big Data Processing & Apache Spark',
    summary: 'Distributed cluster computing processing billions of daily transactions across hybrid cloud infrastructures.',
    description: 'When data volumes outgrow single servers, our big data engineers architect distributed Spark and Ray clusters that crunch terabytes in minutes with elastic auto-scaling.',
    heroStat: { value: '100 Billion+', label: 'Daily Processed Records' },
    capabilities: [
      { title: 'PySpark & Spark SQL Optimization', description: 'Tuning memory allocation, partition pruning, and broadcast joins to eliminate shuffle spill.' },
      { title: 'Serverless Spark & EMR Serverless', description: 'Auto-scaling compute clusters that spin up on demand and terminate immediately upon job completion.' },
      { title: 'Parquet & ORC Storage Optimization', description: 'Columnar compression and Z-order clustering accelerating downstream query speeds.' },
      { title: 'High-Volume Unstructured Data Processing', description: 'Distributed processing of massive image, video, and audio archives across GPU-accelerated clusters.' }
    ],
    techStack: ['Apache Spark', 'Ray', 'AWS EMR', 'Apache Parquet', 'Python / Scala'],
    process: [
      { step: '01', title: 'Workload Profiling & Sizing', description: 'Analyze memory bottlenecks, skew, and shuffle stages in existing legacy batch jobs.' },
      { step: '02', title: 'Partition Strategy Redesign', description: 'Re-partition datasets to eliminate data skew where a single executor node bottlenecks the cluster.' },
      { step: '03', title: 'Vectorized Compute Optimization', description: 'Leverage Spark Catalyst optimizer and native C++ vectorized execution engines.' },
      { step: '04', title: 'Autoscaling Infrastructure Setup', description: 'Deploy spot instance clusters with fault-tolerant checkpointing to minimize compute bills.' }
    ],
    faqs: [
      { q: 'How do you fix slow Spark jobs that run for hours?', a: 'Slow Spark jobs are almost always caused by data skew and excessive shuffle disk spilling. Re-partitioning and broadcast joins typically yield 5x-10x speedups.' },
      { q: 'Can Spark jobs run cost-effectively on spot instances?', a: 'Yes. By enabling external shuffle services and checkpointing, worker nodes can be terminated by cloud spot preemption without failing the overall job.' }
    ],
    relatedProjects: ['helios-core-banking', 'vertex-streaming-media']
  },
  {
    category: 'data',
    categoryName: 'Data Engineering',
    slug: 'data-analytics',
    title: 'Enterprise Data Analytics & Customer Intelligence',
    summary: 'Transform customer behavioral telemetry into predictive cohort lifetime value and product intelligence.',
    description: 'We build end-to-end analytics ecosystems that track user journeys across web and mobile, enabling growth teams and product executives to make statistically validated decisions.',
    heroStat: { value: '+34%', label: 'Customer Retention Lift' },
    capabilities: [
      { title: 'Customer 360 Event Tracking', description: 'Unifies web, mobile, email, and customer support interactions into a single customer profile.' },
      { title: 'Statistically Rigorous A/B Testing', description: 'Bayesian and Frequentist experimentation frameworks with sequential testing and sample-ratio mismatch detection.' },
      { title: 'Multi-Touch Attribution Modeling', description: 'Algorithmic Shapley value attribution crediting marketing channels based on true incremental revenue.' },
      { title: 'Reverse ETL to CRM', description: 'Syncs warehouse customer scores directly into Salesforce and HubSpot for frontline sales teams.' }
    ],
    techStack: ['Snowflake / BigQuery', 'Census / Hightouch', 'dbt', 'PostHog / Mixpanel', 'Python'],
    process: [
      { step: '01', title: 'Tracking Plan Standardization', description: 'Author strict event naming schemas preventing data corruption across engineering teams.' },
      { step: '02', title: 'Server-Side Event Gateway', description: 'Implement server-side tracking bypassing browser ad-blockers with full GDPR compliance.' },
      { step: '03', title: 'Customer Identity Resolution', description: 'Stitch anonymous visitor cookies to authenticated user IDs across devices.' },
      { step: '04', title: 'Reverse ETL Activation', description: 'Push calculated customer health scores directly to sales and customer success tools.' }
    ],
    faqs: [
      { q: 'How do you bypass browser ad-blockers that block client-side Google Analytics?', a: 'We implement first-party server-side tracking through your own domain, restoring 30%+ of lost event data with full GDPR consent compliance.' },
      { q: 'What is Reverse ETL and why is it valuable?', a: 'Reverse ETL syncs aggregated data from your warehouse back into operational tools like Salesforce and Zendesk, giving reps live insights without SQL.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'helios-core-banking']
  },

  // ==================== BLOCKCHAIN (6) ====================
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'smart-contracts',
    title: 'Audited Smart Contract Engineering',
    summary: 'Mathematically verified Solidity and Rust smart contracts engineered for institutional capital security.',
    description: 'We develop audited, gas-optimized smart contracts for institutional asset tokenization, staking, and governance, verified with formal mathematical methods and zero critical vulnerabilities.',
    heroStat: { value: '$2.4B+', label: 'Total Value Secured (TVS)' },
    capabilities: [
      { title: 'Formal Verification & Fuzzing', description: 'Mathematical proofs and invariant fuzzing using Foundry and Certora Prover.' },
      { title: 'Gas Optimization at Bytecode Level', description: 'Optimizes assembly Yul opcode execution, reducing transaction fees by up to 40%.' },
      { title: 'Upgradable Proxy Architectures', description: 'Diamond pattern (ERC-2535) and UUPS proxies allowing safe bug fixes without liquidity migration.' },
      { title: 'Multi-Sig & Timelock Governance', description: 'Gnosis Safe integration with delayed timelock execution and hardware signer enforcement.' }
    ],
    techStack: ['Solidity', 'Foundry', 'Hardhat', 'Rust / Anchor', 'Certora'],
    process: [
      { step: '01', title: 'Economic Game Theory Audit', description: 'Model attack vectors including flash loans, reentrancy, and oracle manipulation.' },
      { step: '02', title: 'Smart Contract Implementation', description: 'Write modular code following OpenZeppelin battle-tested security standards.' },
      { step: '03', title: 'Invariant & Fuzz Testing', description: 'Run millions of random transaction permutations to detect unexpected edge states.' },
      { step: '04', title: 'Third-Party Security Audit', description: 'Coordinate independent audits with top security firms (OpenZeppelin, Trail of Bits).' }
    ],
    faqs: [
      { q: 'How do you guarantee that a smart contract cannot be hacked?', a: 'We employ formal verification proofs, multi-million run invariant fuzzing, and multiple independent top-tier audits before mainnet deployment.' },
      { q: 'Which blockchains do you support?', a: 'Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, and Solana.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'helios-core-banking']
  },
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'defi-development',
    title: 'Institutional Decentralized Finance (DeFi) Protocols',
    summary: 'Automated market makers, algorithmic lending pools, and cross-chain liquidity vaults.',
    description: 'We engineer institutional DeFi protocols featuring concentrated liquidity AMMs, overcollateralized lending markets, and automated yield routing backed by battle-tested risk parameters.',
    heroStat: { value: '0 Breaches', label: 'Security Track Record Across $2B+ Volume' },
    capabilities: [
      { title: 'Concentrated Liquidity AMM Pools', description: 'Uniswap v4 style hook architectures maximizing capital efficiency for institutional liquidity providers.' },
      { title: 'Decentralized Oracle Integrations', description: 'Chainlink Price Feeds and Pyth Network low-latency oracles with circuit-breaker fallback protection.' },
      { title: 'Automated Liquidation Bots', description: 'Sub-second liquidation execution preventing bad debt accumulation during market downturns.' },
      { title: 'Cross-Chain Liquidity Bridges', description: 'Chainlink CCIP and LayerZero messaging facilitating seamless token transfers across L1s and L2s.' }
    ],
    techStack: ['Solidity', 'Chainlink Oracles', 'The Graph', 'Ethers.js', 'Foundry'],
    process: [
      { step: '01', title: 'Liquidity Economics Simulation', description: 'Simulate pool depth, slippage, and liquidation safety under extreme historical market crashes.' },
      { step: '02', title: 'Protocol Core Implementation', description: 'Develop core pool contracts with strict reentrancy guards and integer overflow protection.' },
      { step: '03', title: 'Subgraph & Analytics Indexing', description: 'Deploy custom subgraphs on The Graph protocol indexing real-time pool metrics.' },
      { step: '04', title: 'Mainnet Deployment & Monitoring', description: 'Launch protocol with automated emergency pause circuit breakers and continuous on-chain monitoring.' }
    ],
    faqs: [
      { q: 'How do you protect against flash loan oracle attacks?', a: 'We use decentralized time-weighted average price (TWAP) oracles combined with Chainlink and Pyth feeds with volatility circuit breakers.' },
      { q: 'Can institutional KYC/AML rules be enforced in a DeFi protocol?', a: 'Yes. We build permissioned institutional liquidity pools that require verified on-chain zero-knowledge KYC credentials.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'helios-core-banking']
  },
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'dapp-development',
    title: 'Full-Stack Decentralized Applications (dApps)',
    summary: 'Intuitive web applications connecting institutional wallets to complex smart contract backends.',
    description: 'We build user-friendly dApps that abstract away blockchain complexity, providing seamless onboarding, gasless transactions, and instant wallet connectivity.',
    heroStat: { value: '< 2 sec', label: 'Wallet Connection & Transaction Prep' },
    capabilities: [
      { title: 'Account Abstraction (ERC-4337)', description: 'Smart accounts enabling social logins (Google, Apple), gasless sponsored transactions, and session keys.' },
      { title: 'Multi-Wallet Compatibility', description: 'Seamless integration with MetaMask, Coinbase Wallet, WalletConnect, and institutional Fireblocks.' },
      { title: 'Real-Time On-Chain Event Sync', description: 'WebSockets indexing live contract events with optimistic UI state updates.' },
      { title: 'Gasless Transaction Relayers', description: 'Sponsor user transaction fees using Biconomy or Gelato relayers to remove onboarding friction.' }
    ],
    techStack: ['React', 'Next.js', 'Vagmi / Viem', 'RainbowKit', 'ERC-4337'],
    process: [
      { step: '01', title: 'Web3 UX Simplification', description: 'Design wallet connection and signing flows that feel as natural as traditional Web2 apps.' },
      { step: '02', title: 'Smart Account Integration', description: 'Configure paymasters and bundlers for gasless account abstraction onboarding.' },
      { step: '03', title: 'Contract Interaction Binding', description: 'Connect contract ABIs with Viem hooks with automated transaction simulation.' },
      { step: '04', title: 'Production Security Hardening', description: 'Implement front-end phishing protections and verify that signed messages are transparently formatted.' }
    ],
    faqs: [
      { q: 'Can non-crypto users use the dApp without buying cryptocurrency for gas fees?', a: 'Yes. With ERC-4337 Account Abstraction, users sign in with Google or email, and the platform can sponsor their transaction fees.' },
      { q: 'Does the dApp support institutional custody solutions like Fireblocks?', a: 'Yes. We support Fireblocks, Copper, and institutional multi-signature wallets alongside retail browser wallets.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'helios-core-banking']
  },
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'nft-marketplace',
    title: 'Enterprise NFT & Real-World Asset (RWA) Marketplaces',
    summary: 'Secondary marketplaces for tokenized real estate, intellectual property, and luxury assets with fiat checkout.',
    description: 'We develop compliant digital asset marketplaces that allow enterprises to tokenize, auction, and trade real-world physical and digital assets with credit card and crypto settlement.',
    heroStat: { value: '$120M+', label: 'Marketplace Gross Merchandise Value' },
    capabilities: [
      { title: 'Real-World Asset (RWA) Tokenization', description: 'ERC-3643 permissioned tokens compliant with securities regulations and investor whitelisting.' },
      { title: 'Fiat Credit Card On-Ramps', description: 'Stripe and MoonPay integration allowing non-crypto users to purchase tokenized assets with credit cards.' },
      { title: 'Gas-Free Off-Chain Orderbooks', description: 'Seaport protocol and 0x orders enabling zero-gas listing and bidding with settlement on-chain.' },
      { title: 'Automated Secondary Royalties', description: 'Enforceable on-chain royalty splits distributed automatically to creators and rights holders.' }
    ],
    techStack: ['Seaport Protocol', 'Solidity', 'Next.js', 'Stripe', 'IPFS / Arweave'],
    process: [
      { step: '01', title: 'Legal & Token Standards Modeling', description: 'Select between ERC-721, ERC-1155, or ERC-3643 compliant security tokens.' },
      { step: '02', title: 'Decentralized Storage Setup', description: 'Pin asset metadata and high-resolution media permanently to Arweave and IPFS.' },
      { step: '03', title: 'Marketplace Contract Deployment', description: 'Deploy audited exchange contracts handling escrow, auctions, and offers.' },
      { step: '04', title: 'Fiat Checkout Integration', description: 'Enable credit card processing with automated behind-the-scenes wallet creation.' }
    ],
    faqs: [
      { q: 'How do you ensure tokenized assets comply with securities regulations?', a: 'We utilize ERC-3643 permissioned token standards that enforce KYC identity checks and transfer restrictions at the smart contract level.' },
      { q: 'Can users buy items using a normal credit card?', a: 'Yes. We integrate fiat on-ramps and custodian wallets so buyers never need to interact with cryptocurrency exchanges.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'vertex-streaming-media']
  },
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'crypto-wallet',
    title: 'Enterprise Non-Custodial & MPC Crypto Wallets',
    summary: 'Multi-party computation (MPC) and social recovery wallets eliminating single-seed-phrase failure.',
    description: 'We develop enterprise-grade cryptocurrency wallets that replace dangerous 12-word seed phrases with Multi-Party Computation (MPC), biometric face unlock, and institutional approval workflows.',
    heroStat: { value: '0 Seed Phrases', label: 'Eliminates Lost Key Vulnerabilities' },
    capabilities: [
      { title: 'Multi-Party Computation (MPC) Key Management', description: 'Cryptographic key shares split across user device, cloud enclave, and backup server, eliminating single-point-of-failure.' },
      { title: 'Biometric Social Recovery', description: 'Recover lost wallets using trusted guardians, corporate email, or Apple iCloud / Google Drive encrypted backups.' },
      { title: 'Institutional Whitelisting & Spending Caps', description: 'Enforce daily transaction limits and approved destination address whitelists.' },
      { title: 'Multi-Chain Asset Support', description: 'Unified key management supporting EVM chains, Bitcoin, Solana, and Cosmos.' }
    ],
    techStack: ['TSS / MPC', 'Web3Auth', 'React Native', 'Rust', 'Secure Enclave'],
    process: [
      { step: '01', title: 'Cryptographic Protocol Selection', description: 'Implement Gennaro-Goldfeder (GG20) or Lindell threshold signature algorithms.' },
      { step: '02', title: 'Hardware Secure Enclave Binding', description: 'Store device key share inside iOS Secure Enclave or Android Keystore.' },
      { step: '03', title: 'Social Recovery Flow Design', description: 'Build intuitive recovery mechanisms that do not require remembering paper seed phrases.' },
      { step: '04', title: 'Cryptographic Penetration Testing', description: 'Audit key share generation and reconstruct protection mechanisms.' }
    ],
    faqs: [
      { q: 'What happens if a user loses their phone?', a: 'Because key shares are distributed via MPC, the user recovers access using their cloud backup and email verification without losing funds.' },
      { q: 'Does your company hold custody of the user funds?', a: 'No. The architecture is non-custodial; no single entity (including Hexbyte) ever possesses a complete private key.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'helios-core-banking']
  },
  {
    category: 'blockchain',
    categoryName: 'Blockchain & Web3',
    slug: 'token-development',
    title: 'Enterprise Utility & Governance Token Development',
    summary: 'Mathematically designed tokenomics, vesting smart contracts, and liquidity pool launches.',
    description: 'We design and deploy compliant cryptographic tokens, authoring economic distribution schedules, automated multi-year vesting contracts, and decentralized governance voting infrastructure.',
    heroStat: { value: '100% Audited', label: 'Vesting & Governance Smart Contracts' },
    capabilities: [
      { title: 'ERC-20 & SPL Token Engineering', description: 'Custom gas-optimized fungible tokens with automated burn, tax, and staking mechanics.' },
      { title: 'Algorithmic Vesting & Cliff Contracts', description: 'Continuous per-second streaming vesting contracts for investors and employees with revocable controls.' },
      { title: 'Decentralized Governance (DAO) Voting', description: 'Compound-style Governor Bravo and snapshot voting contracts with on-chain quorum execution.' },
      { title: 'Tokenomics Mathematical Simulation', description: 'Agent-based modeling simulating token velocity, inflation, and liquidity under varying market conditions.' }
    ],
    techStack: ['Solidity', 'OpenZeppelin', 'Sablier Protocol', 'Foundry', 'CadCAD'],
    process: [
      { step: '01', title: 'Tokenomics Design & Modeling', description: 'Simulate inflation schedules, staking rewards, and utility sinks to ensure long-term token stability.' },
      { step: '02', title: 'Smart Contract Construction', description: 'Author token and vesting contracts incorporating pause controls and compliance features.' },
      { step: '03', title: 'Audit & Testnet Launch', description: 'Submit contracts for formal verification and conduct multi-week testnet validation.' },
      { step: '04', title: 'Liquidity Pool Bootstrapping', description: 'Seed decentralized exchange liquidity pools with automated price stabilization mechanisms.' }
    ],
    faqs: [
      { q: 'Can vesting tokens be revoked if an employee leaves the company?', a: 'Yes. Our vesting contracts support configurable revocability where unvested tokens return to the company treasury.' },
      { q: 'How do you prevent malicious governance takeovers?', a: 'We implement timelock delays, voting weight checkpoints, and emergency guardian veto rights.' }
    ],
    relatedProjects: ['aegis-defi-vaults', 'vertex-streaming-media']
  },

  // ==================== CLOUD (4) ====================
  {
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    slug: 'aws',
    title: 'Enterprise Amazon Web Services (AWS) Architecture',
    summary: 'Well-Architected AWS multi-account infrastructure, EKS clusters, and serverless architectures.',
    description: 'As certified AWS solutions architects, we design fault-tolerant, cost-optimized AWS environments utilizing AWS Control Tower, EKS Kubernetes, Aurora Serverless, and CloudFront.',
    heroStat: { value: '-38%', label: 'AWS Monthly Infrastructure Spend' },
    capabilities: [
      { title: 'AWS Control Tower & Multi-Account Orgs', description: 'Isolate production, staging, and security workloads with centralized IAM and SCP guardrails.' },
      { title: 'Elastic Kubernetes Service (EKS)', description: 'Production-ready EKS clusters with Karpenter auto-scaling, Cilium eBPF, and Graviton processor instances.' },
      { title: 'Aurora Global Database Multi-Region Sync', description: 'Sub-second cross-region replication with automatic failover and local read replicas.' },
      { title: 'AWS Cost Optimization & Savings Plans', description: 'Rightsizing compute, spot instance fleets, and automated S3 lifecycle transitions.' }
    ],
    techStack: ['AWS EKS', 'AWS Lambda', 'Terraform', 'Aurora PostgreSQL', 'Karpenter'],
    process: [
      { step: '01', title: 'AWS Well-Architected Review', description: 'Audit workloads across the 6 pillars: Security, Reliability, Performance, Cost, Operational Excellence, and Sustainability.' },
      { step: '02', title: 'Terraform IaC Authoring', description: 'Codify entire cloud footprints into reusable, version-controlled Terraform modules.' },
      { step: '03', title: 'Zero-Downtime Migration', description: 'Transition databases and workloads using AWS DMS and blue-green routing.' },
      { step: '04', title: '24/7 CloudWatch Telemetry', description: 'Configure automated alarms, dashboards, and automated healing runbooks.' }
    ],
    faqs: [
      { q: 'How do you cut our AWS bills without impacting performance?', a: 'We migrate x86 nodes to ARM64 Graviton instances (20% savings), configure Karpenter for spot arbitrage, and optimize database provisioned IOPS.' },
      { q: 'Can you set up disaster recovery across different AWS regions?', a: 'Yes. We build active-passive or active-active deployments across US and EU regions with automated Route53 failover.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  },
  {
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    slug: 'google-cloud',
    title: 'Google Cloud Platform (GCP) & GKE Hyperscale',
    summary: 'Anthos multi-cloud, Google Kubernetes Engine (GKE), and BigQuery enterprise solutions.',
    description: 'We build hyperscale cloud platforms on Google Cloud, leveraging Google’s private global fiber network, GKE Autopilot, Spanner globally distributed databases, and Vertex AI.',
    heroStat: { value: '99.999%', label: 'Multi-Region Google Cloud Availability' },
    capabilities: [
      { title: 'Google Kubernetes Engine (GKE) Enterprise', description: 'GKE Autopilot clusters with automated node provisioning, vulnerability scanning, and eBPF network telemetry.' },
      { title: 'Cloud Spanner Distributed SQL', description: 'External consistency and 99.999% availability for mission-critical relational banking data.' },
      { title: 'Workload Identity Federation', description: 'Eliminates permanent service account keys, using ephemeral OAuth tokens for maximum security.' },
      { title: 'BigQuery & Data Lake Integration', description: 'Direct streaming of system logs into BigQuery for instant security analytics.' }
    ],
    techStack: ['GCP GKE', 'Cloud Spanner', 'Terraform', 'Cloud Run', 'Vertex AI'],
    process: [
      { step: '01', title: 'GCP Project Architecture', description: 'Organize folder hierarchies, Shared VPC networks, and Cloud IAM permissions.' },
      { step: '02', title: 'GKE Cluster Deployment', description: 'Deploy hardened Kubernetes clusters with private nodes and authorized network access.' },
      { step: '03', title: 'Global Load Balancing Setup', description: 'Configure single Anycast IP fronting global multi-region backends.' },
      { step: '04', title: 'Continuous Delivery Pipeline', description: 'Set up Cloud Build and Google Cloud Deploy with automated canary rollouts.' }
    ],
    faqs: [
      { q: 'Why choose Google Cloud over other cloud providers?', a: 'Google Cloud offers the industry’s best Kubernetes implementation (GKE), global Anycast network routing, and BigQuery analytics capabilities.' },
      { q: 'Can Google Cloud run hybrid workloads on our own datacenters?', a: 'Yes. With Google Distributed Cloud (Anthos), you manage on-premise servers and GKE clusters through a unified console.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'stratum-energy-iot']
  },
  {
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    slug: 'azure',
    title: 'Microsoft Azure Enterprise Architecture',
    summary: 'Azure Kubernetes Service (AKS), Azure OpenAI, and hybrid Microsoft ecosystem integration.',
    description: 'We engineer compliant Azure cloud infrastructure tailored for enterprises embedded in the Microsoft ecosystem, integrating Active Directory, AKS, and private Azure OpenAI instances.',
    heroStat: { value: 'FedRAMP High', label: 'Compliance & Government Readiness' },
    capabilities: [
      { title: 'Azure Kubernetes Service (AKS)', description: 'Hardened AKS clusters with Azure CNI networking, Microsoft Entra ID authentication, and Azure Policy.' },
      { title: 'Private Azure OpenAI Endpoints', description: 'Deploy GPT-4o inside your isolated Azure Virtual Network with zero external public internet exposure.' },
      { title: 'Azure Arc Hybrid Management', description: 'Manage on-premise Windows and Linux servers alongside cloud resources in Azure Resource Manager.' },
      { title: 'Cosmos DB Multi-Region Active-Active', description: 'Turnkey global database replication with single-digit millisecond latency SLAs.' }
    ],
    techStack: ['Azure AKS', 'Terraform / Bicep', 'Azure OpenAI', 'Entra ID', 'Cosmos DB'],
    process: [
      { step: '01', title: 'Azure Landing Zone Implementation', description: 'Deploy enterprise-scale Cloud Adoption Framework landing zones via Terraform.' },
      { step: '02', title: 'Entra ID (Azure AD) Synchronization', description: 'Federate corporate user identity and enforce Conditional Access security policies.' },
      { step: '03', title: 'Virtual Network Peering & ExpressRoute', description: 'Connect on-premise corporate datacenters via dedicated private fiber ExpressRoute circuits.' },
      { step: '04', title: 'Azure Defender Security Hardening', description: 'Continuously audit cloud posture against CIS benchmarks and Microsoft Defender recommendations.' }
    ],
    faqs: [
      { q: 'Can Azure OpenAI access our private data without leaking it to Microsoft?', a: 'Yes. Private VNet endpoints ensure your data never touches the public internet and is never used to train Microsoft models.' },
      { q: 'Do you support automated infrastructure as code with Azure Bicep and Terraform?', a: 'Yes. We author production-grade, modular Terraform and Bicep configurations with automated CI/CD validation.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    slug: 'devops',
    title: 'Enterprise DevOps & GitOps Automation',
    summary: 'Zero-downtime CI/CD pipelines, automated testing, and declarative GitOps infrastructure.',
    description: 'We eliminate deployment anxiety by building automated GitOps pipelines where every infrastructure change is reviewed in Git, automatically tested, and rolled out with zero downtime.',
    heroStat: { value: '45x', label: 'Faster Production Deployment Frequency' },
    capabilities: [
      { title: 'Declarative GitOps (ArgoCD & Flux)', description: 'Git is the single source of truth; automated controllers reconcile cluster state and eliminate manual kubectl drift.' },
      { title: 'Automated Canary & Blue-Green Releases', description: 'Argo Rollouts automatically routes 5% of real traffic to new versions, checking error metrics before full release.' },
      { title: 'Ephemeral On-Demand PR Environments', description: 'Spin up isolated preview staging environments for every pull request, auto-destroying upon merge.' },
      { title: 'Security Scanning & Software Bill of Materials (SBOM)', description: 'Trivy and Snyk scanners block builds with critical CVE vulnerabilities and generate CycloneDX SBOMs.' }
    ],
    techStack: ['ArgoCD', 'GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes'],
    process: [
      { step: '01', title: 'CI/CD Pipeline Bottleneck Audit', description: 'Profile build times, test execution delays, and manual release approval gates.' },
      { step: '02', title: 'GitOps Repository Restructuring', description: 'Separate application source code repositories from infrastructure deployment manifests.' },
      { step: '03', title: 'Automated Quality & Security Gates', description: 'Implement mandatory unit tests, linting, security scans, and container image signing.' },
      { step: '04', title: 'Progressive Delivery Configuration', description: 'Configure automated canary analysis that rolls back within 60 seconds if HTTP 5xx errors spike.' }
    ],
    faqs: [
      { q: 'What is the main benefit of switching to GitOps with ArgoCD?', a: 'GitOps eliminates manual deployment errors. If someone accidentally deletes a server, ArgoCD detects the drift and recreates it in seconds.' },
      { q: 'How long does it take to implement a complete CI/CD pipeline modernization?', a: 'A standard migration takes 3 to 4 weeks, delivering 10-minute automated pull-request-to-production deployment cycles.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'apex-logistics-mesh']
  },

  // ==================== OTHER (7) ====================
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'ui-ux-design',
    title: 'Enterprise UI/UX Product Design & Usability Research',
    summary: 'Data-dense dashboard UX, ethnographic user testing, and conversion-focused product interfaces.',
    description: 'We transform complex, cluttered enterprise software into clear, ergonomic interfaces that reduce cognitive fatigue, eliminate training overhead, and accelerate daily task completion.',
    heroStat: { value: '-55%', label: 'User Task Completion Time' },
    capabilities: [
      { title: 'Data-Dense Interface Ergonomics', description: 'Organizes hundreds of simultaneous telemetry metrics and controls without overwhelming operators.' },
      { title: 'Ethnographic Field Research', description: 'Observe real-world frontline operators in trading floors, control rooms, and hospital wards.' },
      { title: 'Interactive High-Fidelity Prototypes', description: 'Clickable Figma prototypes with realistic data states tested with actual end users before engineering.' },
      { title: 'Micro-Interaction Animation Systems', description: 'Functional motion choreography providing immediate cognitive feedback for user actions.' }
    ],
    techStack: ['Figma', 'Protopie', 'Maze Testing', 'Tailwind CSS', 'Storybook'],
    process: [
      { step: '01', title: 'User Journey Mapping', description: 'Interview daily power users and document every friction point and workaround.' },
      { step: '02', title: 'Information Architecture Simplification', description: 'Restructure navigation menus and declutter visual hierarchies.' },
      { step: '03', title: 'Iterative Usability Testing', description: 'Run unmoderated user tests measuring time-on-task and system usability scale (SUS) scores.' },
      { step: '04', title: 'Design Token Handoff', description: 'Deliver pixel-perfect component specifications directly to your frontend engineering team.' }
    ],
    faqs: [
      { q: 'How do you balance high data density with clean visual design?', a: 'We use progressive disclosure: critical operational indicators are immediately visible, while secondary context is available on hover or click without clutter.' },
      { q: 'Do your designers understand complex technical domains?', a: 'Yes. Our senior product designers specialize in financial trading terminals, cloud infrastructure dashboards, and clinical healthcare systems.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'digital-marketing',
    title: 'Data-Driven B2B Enterprise Digital Marketing',
    summary: 'Account-based marketing (ABM), technical SEO, and conversion rate optimization for enterprise software.',
    description: 'We build high-intent B2B demand generation engines that target Fortune 1000 decision-makers, driving qualified enterprise pipeline rather than vanity impressions.',
    heroStat: { value: '3.8x', label: 'Pipeline Generated Per Marketing Dollar' },
    capabilities: [
      { title: 'Account-Based Marketing (ABM)', description: 'Target specific enterprise target accounts across LinkedIn, programmatics, and personalized landing pages.' },
      { title: 'Technical B2B SEO & Content Strategy', description: 'Rank for high-intent technical search terms that engineering and procurement executives research.' },
      { title: 'Conversion Rate Optimization (CRO)', description: 'Data-driven landing page testing that turns technical visitors into booked product demonstrations.' },
      { title: 'Marketing Operations & Attribution', description: 'HubSpot and Marketo automation tracking marketing touches directly to closed-won revenue.' }
    ],
    techStack: ['HubSpot', 'LinkedIn Ads', 'Google Analytics 4', 'Clearbit', 'Semrush'],
    process: [
      { step: '01', title: 'Ideal Customer Profile (ICP) Definition', description: 'Identify target company headcount, annual cloud spend, and buyer persona titles.' },
      { step: '02', title: 'Technical Authority Content', description: 'Author deep technical teardowns and whitepapers that establish genuine domain credibility.' },
      { step: '03', title: 'Targeted Multi-Channel ABM', description: 'Deploy personalized advertising and email outreach to buying committee stakeholders.' },
      { step: '04', title: 'Pipeline Velocity Optimization', description: 'Continuously optimize lead-to-opportunity conversion rates and sales cycle length.' }
    ],
    faqs: [
      { q: 'How is enterprise B2B marketing different from consumer marketing?', a: 'B2B enterprise sales involve 6-month cycles and buying committees of 6+ stakeholders. We build content that addresses both technical architects and CFOs.' },
      { q: 'How do you track attribution across long sales cycles?', a: 'We implement multi-touch attribution models that connect early website visits through months of sales calls directly to CRM contract value.' }
    ],
    relatedProjects: ['vertex-streaming-media', 'stratum-energy-iot']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'erp-crm',
    title: 'Enterprise ERP & CRM Integration & Modernization',
    summary: 'Seamless bi-directional synchronization between Salesforce, SAP, Oracle NetSuite, and modern cloud apps.',
    description: 'We eliminate data silos between legacy enterprise back-office ERPs and modern customer-facing web apps, creating automated, real-time synchronization with zero manual reconciliation.',
    heroStat: { value: '100%', label: 'Automated Ledger Reconciliation' },
    capabilities: [
      { title: 'Salesforce & HubSpot Custom Integration', description: 'Bi-directional real-time sync with custom objects, complex lead routing, and billing events.' },
      { title: 'SAP & Oracle NetSuite Connectors', description: 'Connect legacy ERP financial ledgers to modern web checkout and inventory systems via secure APIs.' },
      { title: 'Automated Quote-to-Cash Workflows', description: 'Automates customer contract signing, invoice generation, provisioning, and revenue recognition.' },
      { title: 'Data Cleaning & Deduplication', description: 'Automated algorithms merging duplicate customer records and standardizing messy historical entries.' }
    ],
    techStack: ['Salesforce API', 'SAP NetWeaver', 'MuleSoft', 'Apache Kafka', 'Node.js'],
    process: [
      { step: '01', title: 'Data Schema Mapping', description: 'Map fields, custom objects, and validation rules between ERP, CRM, and internal databases.' },
      { step: '02', title: 'Event-Driven Sync Architecture', description: 'Deploy message queues ensuring changes in one system reflect across all platforms in seconds.' },
      { step: '03', title: 'Failure Isolation & Buffering', description: 'Ensure temporary ERP maintenance windows never drop incoming customer orders.' },
      { step: '04', title: 'User Training & Rollout', description: 'Train sales and finance teams on modernized unified workflows.' }
    ],
    faqs: [
      { q: 'Can we connect modern cloud apps to an older on-premise SAP system?', a: 'Yes. We deploy secure hybrid integration gateways that connect on-premise SAP installations without opening public firewall ports.' },
      { q: 'What happens if our ERP goes down for nightly maintenance?', a: 'Our event queues buffer all incoming transactions safely and replay them automatically as soon as the ERP resumes operation.' }
    ],
    relatedProjects: ['apex-logistics-mesh', 'helios-core-banking']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'ar-vr',
    title: 'Spatial Computing, AR & Industrial VR Solutions',
    summary: 'WebXR 3D spatial simulations, Apple Vision Pro spatial apps, and augmented reality field service tools.',
    description: 'We build immersive 3D digital twins, augmented reality technician overlays, and virtual training environments that allow distributed teams to inspect complex industrial machinery in 3D.',
    heroStat: { value: '-42%', label: 'Field Technician Error Rate' },
    capabilities: [
      { title: 'WebXR In-Browser 3D Viewports', description: 'Interactive 3D product visualizers that load in standard web browsers with zero app installation.' },
      { title: 'Industrial Digital Twin Overlays', description: 'Augmented reality overlays displaying real-time IoT sensor telemetry onto physical equipment in the field.' },
      { title: 'Apple Vision Pro & Meta Quest Apps', description: 'Spatial computing applications for collaborative architectural reviews and surgery planning.' },
      { title: 'Photorealistic 3D Asset Optimization', description: 'High-poly CAD models decimated into ultra-lightweight WebGL/glTF assets loading in under 2 seconds.' }
    ],
    techStack: ['Three.js', 'WebXR', 'Unity', 'Blender', 'VisionOS'],
    process: [
      { step: '01', title: '3D CAD Ingestion & Decimation', description: 'Convert complex engineering CAD files into optimized, web-ready 3D meshes.' },
      { step: '02', title: 'Interactive Shading & Lighting', description: 'Apply physically-based rendering (PBR) materials for realistic reflection and transparency.' },
      { step: '03', title: 'Spatial Interaction Binding', description: 'Implement natural hand-tracking gestures and cross-device camera spatial anchors.' },
      { step: '04', title: 'Live IoT Telemetry Integration', description: 'Bind real-time sensor streams directly to 3D sub-components for dynamic color-coded status.' }
    ],
    faqs: [
      { q: 'Do users need a dedicated VR headset to view your 3D models?', a: 'No. Our WebXR applications run seamlessly on desktop browsers and mobile smartphones with optional VR headset mode.' },
      { q: 'Can AR overlays help field technicians repair machinery?', a: 'Yes. Technicians point their tablet at equipment to see step-by-step 3D exploded disassembly instructions overlaid onto real components.' }
    ],
    relatedProjects: ['stratum-energy-iot', 'apex-logistics-mesh']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'iot',
    title: 'Industrial IoT & Connected Device Fleet Engineering',
    summary: 'Embedded firmware, edge telemetry gateways, and low-latency MQTT message brokers managing millions of connected sensors.',
    description: 'We bridge physical hardware and cloud software, developing resilient firmware, edge gateways, and cloud control planes that monitor and manage millions of connected industrial devices.',
    heroStat: { value: '450,000+', label: 'Connected Industrial IoT Devices' },
    capabilities: [
      { title: 'Embedded Rust & C Firmware', description: 'Ultra-low-power firmware engineered for ARM Cortex, ESP32, and Nordic Semiconductor chips.' },
      { title: 'MQTT / CoAP High-Throughput Brokers', description: 'Scalable message brokers handling millions of concurrent persistent sensor connections.' },
      { title: 'Secure Over-The-Air (OTA) Updates', description: 'Cryptographically signed firmware updates with dual-bank flash rollback protection against bricking.' },
      { title: 'Edge Hardware TPM Security', description: 'Unique cryptographic hardware device certificates preventing unauthorized counterfeit devices.' }
    ],
    techStack: ['Embedded Rust', 'MQTT', 'EMQX', 'AWS IoT Core', 'FreeRTOS'],
    process: [
      { step: '01', title: 'Hardware Architecture & Power Budgeting', description: 'Analyze battery lifespan, radio protocols (LoRaWAN, NB-IoT, BLE), and microcontroller specs.' },
      { step: '02', title: 'Firmware Development & Local Testing', description: 'Write safe, low-power embedded software with zero memory leaks.' },
      { step: '03', title: 'Cloud Broker & Device Shadow Ingestion', description: 'Deploy distributed MQTT brokers synchronizing virtual device shadows in the cloud.' },
      { step: '04', title: 'Mass Manufacturing Flashing', description: 'Automate factory test fixtures and cryptographic credential provisioning.' }
    ],
    faqs: [
      { q: 'How do you prevent a bad firmware update from bricking devices deployed in remote fields?', a: 'We implement dual-partition flash memory: new firmware boots in a test partition, and if it fails health checks within 60 seconds, it automatically reverts to the backup partition.' },
      { q: 'Can your IoT broker handle intermittent cellular connections?', a: 'Yes. Devices buffer state locally and synchronize using MQTT QoS levels with persistent sessions upon network reconnect.' }
    ],
    relatedProjects: ['stratum-energy-iot', 'apex-logistics-mesh']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'qa-testing',
    title: 'Automated QA Testing, Penetration & Performance Testing',
    summary: 'Full-spectrum quality assurance: automated end-to-end Playwright tests, load testing, and security penetration testing.',
    description: 'We eliminate software bugs and security vulnerabilities before your customers find them, implementing automated testing suites that execute on every pull request and stress test up to 1,000,000 virtual users.',
    heroStat: { value: '99.9%', label: 'Critical Bug Prevention Rate' },
    capabilities: [
      { title: 'Automated E2E Testing (Playwright / Cypress)', description: 'Cross-browser automated test suites verifying user journeys on every single code commit.' },
      { title: 'Distributed Load & Stress Testing (k6 / Locust)', description: 'Simulate up to 1,000,000 concurrent users to identify database deadlocks and latency bottlenecks.' },
      { title: 'OWASP Top 10 Penetration Testing', description: 'Rigorous manual and automated ethical hacking tests uncovering SQL injection, XSS, and broken access controls.' },
      { title: 'Visual Regression Testing', description: 'Pixel-by-pixel automated diffing alerting on unintended CSS changes across viewports.' }
    ],
    techStack: ['Playwright', 'k6', 'OWASP ZAP', 'Burp Suite', 'Jest / Vitest'],
    process: [
      { step: '01', title: 'Test Coverage Gap Audit', description: 'Analyze existing codebase and map business-critical user flows that lack automated tests.' },
      { step: '02', title: 'Automated E2E Test Suite Creation', description: 'Write resilient Playwright tests that run in parallel across headless browsers in CI/CD.' },
      { step: '03', title: 'Hyperscale Load Testing Drills', description: 'Inject massive synthetic traffic spikes to measure P99 latency degradation thresholds.' },
      { step: '04', title: 'Penetration Testing & Remediation', description: 'Perform black-box and white-box penetration testing with detailed remediation guidance.' }
    ],
    faqs: [
      { q: 'Will automated testing slow down our development speed?', a: 'No. By parallelizing tests across cloud containers, comprehensive test suites execute in under 4 minutes, allowing developers to ship faster with total confidence.' },
      { q: 'Do you provide formal penetration test reports for compliance auditors?', a: 'Yes. We provide executive and technical penetration testing reports certified by OSCP/CREST accredited security engineers.' }
    ],
    relatedProjects: ['helios-core-banking', 'novaris-clinical-cloud']
  },
  {
    category: 'other',
    categoryName: 'Specialized Solutions',
    slug: 'application-maintenance',
    title: '24/7 Enterprise Application Maintenance & SLA Support',
    summary: 'Proactive monitoring, security patching, library upgrades, and dedicated 15-minute emergency response SLAs.',
    description: 'Ensure your mission-critical applications remain secure, fast, and bug-free long after launch with our dedicated 24/7 site reliability and maintenance engineers.',
    heroStat: { value: '15 Min', label: 'Critical Incident Response SLA' },
    capabilities: [
      { title: '24/7/365 Proactive NOC Monitoring', description: 'Continuous monitoring of uptime, error rates, database health, and memory utilization.' },
      { title: 'Automated Security Vulnerability Patching', description: 'Weekly dependency audits and emergency zero-day patching for critical CVEs.' },
      { title: 'Framework & Database Version Upgrades', description: 'Seamless major version migrations (Node.js, PostgreSQL, React, Kubernetes) without breaking changes.' },
      { title: 'Guaranteed 15-Minute Critical Response', description: 'Direct access to senior infrastructure engineers on-call via dedicated Slack war rooms.' }
    ],
    techStack: ['Datadog', 'PagerDuty', 'Sentry', 'GitHub Dependabot', 'Grafana'],
    process: [
      { step: '01', title: 'System Health & Observability Audit', description: 'Review existing logging, error tracking, and database indexing to eliminate legacy technical debt.' },
      { step: '02', title: 'Synthetic Probing & Alert Setup', description: 'Configure multi-region synthetic uptime probes that alert within 30 seconds of outage.' },
      { step: '03', title: 'Runbook Codification', description: 'Document recovery runbooks for all potential failure scenarios.' },
      { step: '04', title: 'Continuous Monthly Maintenance Cycles', description: 'Deliver monthly reports detailing uptime, patched CVEs, and performance recommendations.' }
    ],
    faqs: [
      { q: 'What happens when an unexpected outage occurs at 3:00 AM on a weekend?', a: 'Our global follow-the-sun engineering team is alerted within 30 seconds, joins a dedicated war room, and initiates recovery runbooks immediately.' },
      { q: 'Can you maintain applications built by other development agencies?', a: 'Yes. We conduct a thorough 2-week codebase audit and onboarding sprint to assume full maintenance responsibility.' }
    ],
    relatedProjects: ['helios-core-banking', 'apex-logistics-mesh']
  }
];
