/**
 * Portfolio Project Data
 * Real projects from Marwan Maher Mostafa's career
 *
 * Career path:
 *   Freelance (~2022) → IDAM (Front-End Dev, ~6 months, ~2022–2023) → Digitee (Front-End Dev, ~2023–2024) → SIPRC (Senior FE → Full Stack → PM, 2025–Present)
 */

export const experience = [
  {
    id: "siprc",
    company: "SIPRC",
    fullName: "Saudi Intellectual Property Rights Company",
    role: "Senior Front-End → Full Stack → Project Manager",
    period: "2025 – Present",
    description:
      "Enterprise IP portfolio management and content protection platforms for the Saudi market. Grew from Senior Front-End developer to Full Stack engineer, and now leading as Project Manager overseeing the entire product suite across 4 products.",
    logo: null,
  },
  {
    id: "digitee",
    company: "Digitee",
    fullName: "Digitee — AI-Powered Fashion Technology",
    role: "Front-End Developer",
    period: "2023 – 2024",
    description:
      "Built the front-end ecosystem for an AI-powered fashion technology startup — from consumer-facing AR try-on experiences and multi-region e-commerce to factory operations dashboards and B2B onboarding platforms.",
    logo: null,
  },
  {
    id: "IDAAM",
    company: "IDAAM",
    fullName: "IDAAM — Brain Health Technology (USA)",
    role: "Front-End Developer",
    period: "~2022 – 2023 (6 months)",
    description:
      "Built the front-end for Keme, a full-scale brain health clinic management platform serving the US behavioral health market. A massive Vue 3 + Vuetify codebase with 552 Vue files, 1,509 backend API routes, and 161 Eloquent models — covering appointments, patients, providers, telehealth, billing, clinical forms, and AI-powered notes.",
    logo: null,
  },
  {
    id: "freelance",
    company: "Freelance",
    fullName: "Independent Projects & Client Work",
    role: "Front-End Developer",
    period: "2022 – 2023",
    description:
      "Took on independent projects ranging from climate science research apps to fitness e-commerce, 3D/WebGL experiments, and enterprise dashboards — sharpening skills across Vue.js, TypeScript, and modern web APIs.",
    logo: null,
  },
];

export const allProjects = [
  // ════════════════════════════════════════════
  //  SIPRC
  // ════════════════════════════════════════════
  {
    slug: "ipora",
    company: "siprc",
    title: "IPORA",
    subtitle: "SIPRC IP Portfolio Dashboard",
    image: "/assets/images/work/siprc/ipora.png",
    description:
      "SIPRC's flagship IP portfolio management platform — 89 views, 307 reusable components, 14 Pinia stores, and 43 composables. Built as a Full Stack developer owning front-end (Vue 3 + TypeScript), Django REST back-end, Playwright E2E testing, and DevOps. Covers Trademarks, Patents, Copyrights, Industrial Designs, Companies, and Contacts with a feature-flagged Services V2 module. 44 named routes with granular RBAC permissions, bilingual EN/AR with RTL, Hijri calendar, and dual charting (ApexCharts + ECharts). Backed by a dedicated Selenium automation suite targeting 530+ test cases across 170+ features.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Pinia",
      "ApexCharts",
      "ECharts",
      "vue-i18n",
      "jsPDF",
      "VitePress",
      "Playwright",
      "Django REST",
      "Celery",
      "PostgreSQL",
    ],
    highlights: [
      "89 views, 307 components, 14 stores, 43 composables",
      "6 IP modules: Trademarks, Patents, Copyrights, Industrial Designs, Companies, Contacts",
      "Feature-flagged Services V2 with admin alerts & request CRUD",
      "Dual charting (ApexCharts + ECharts) + FullCalendar scheduling",
      "Selenium automation suite — 62 test files targeting 530+ cases",
      "59-page VitePress developer documentation site",
    ],
    category: "Enterprise SaaS",
    url: "https://dbp.siprc.sa",
  },
  {
    slug: "siprc-website",
    company: "siprc",
    title: "SIPRC Official Website",
    subtitle: "Corporate Website on Webflow",
    image: "/assets/images/work/siprc/siprc-website.png",
    description:
      "The official public-facing website for the Saudi Intellectual Property Rights Company. Built on Webflow with bilingual Arabic/English CMS content, responsive design, and SEO-optimized structure. Backed by a Laravel 10 staging admin panel (Backpack CRUD 6) with 6 CRUD controllers for Trademarks, Patents, Copyrights, Industrial Designs, Companies, and Users — plus 12 chart controllers, ZIP file generation for IP documents, and role-based accept/reject workflows across 15 database migrations.",
    tech: [
      "Webflow",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Laravel 10",
      "Backpack CRUD",
      "PHP",
      "MySQL",
    ],
    highlights: [
      "Webflow CMS with bilingual Arabic & English content",
      "Laravel 10 admin panel with Backpack CRUD 6 + Backpack Pro",
      "6 CRUD controllers + 12 chart controllers for IP analytics",
      "Accept/reject workflows with ZIP generation per IP type",
      "Sanctum API auth + Backpack Permission Manager (RBAC)",
      "AWS S3 file storage + 15 database migrations",
    ],
    category: "Corporate Website",
    url: "https://www.siprc.sa",
  },
  {
    slug: "cepro-website",
    company: "siprc",
    title: "Cepro.ai Website",
    subtitle: "Corporate Marketing & Brand Identity",
    image: "/assets/images/work/siprc/cepro-website.png",
    description:
      "Cepro.ai's public corporate website — 17 pages built with Next.js 15 App Router, React 19, and Turbopack. 64 React components across 7 Redux Toolkit slices and 10 API service files. Features a protected dashboard section (partners, reports, services, solutions, values & metrics), full EN/AR internationalization via next-intl with locale-prefixed routing, Framer Motion page transitions, in-browser Arabic OCR via Tesseract.js, and DOMPurify XSS sanitization.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "next-intl",
      "Tesseract.js",
      "Turbopack",
    ],
    highlights: [
      "17 pages, 64 components, 7 Redux slices, 10 API services",
      "Protected dashboard: partners, reports, services, solutions, settings",
      "Arabic OCR in-browser via Tesseract.js + ara training data",
      "Full EN/AR i18n with next-intl locale-prefixed routing",
      "Framer Motion page transitions + react-intersection-observer",
      "DOMPurify XSS sanitization + react-hook-form validation",
    ],
    category: "Corporate Website",
    url: "https://www.cepro.ai/en",
  },
  {
    slug: "cepro-dashboard",
    company: "siprc",
    title: "Cepro Dashboard",
    subtitle: "Digital Brand Safety & Incident Management",
    image: "/assets/images/work/siprc/cepro-dashboard.png",
    description:
      "Digital brand-protection platform — 62 views, 211 components, 6 Pinia stores. Monitors and resolves IP infringement across Websites, Social Media, Applications, and the Dark Web with a full incident + takedown CRUD lifecycle (list → add → edit → details) per channel. 50+ routes with 4-tier RBAC (Super Admin, Cepro Admin, Distributor Admin, Client) including ownership validation. Dual charting (ECharts + ApexCharts), geographic infringement mapping, takedown SLA tracking, and Dark/Light/System theme support with complete RTL.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ECharts",
      "ApexCharts",
      "vue-i18n",
      "Playwright",
      "VitePress",
      "Vuelidate",
    ],
    highlights: [
      "62 views, 211 components, 50+ routes, 6 stores",
      "4 monitoring channels: Web, Social Media, Apps, Dark Web",
      "Full incident + takedown CRUD lifecycle per channel",
      "4-tier RBAC: Super Admin → Cepro Admin → Distributor → Client",
      "Geographic infringement map + takedown SLA tracking",
      "Dark/Light/System themes with full RTL + EN/AR i18n",
    ],
    category: "Enterprise SaaS",
    url: "https://dbp.cepro.ai",
  },

  // ════════════════════════════════════════════
  //  DIGITEE
  // ════════════════════════════════════════════
  {
    slug: "main-platform",
    company: "digitee",
    title: "Digitee Consumer Platform",
    subtitle: "AI Fashion Commerce with AR Try-On & NFT",
    image: "/assets/images/work/digitee/main-platform.png",
    description:
      "Digitee's flagship consumer platform — 109 Vue components with 14 page routes and 41 dependencies. Features AR virtual try-on powered by TensorFlow.js BodyPix + MediaPipe Pose for real-time body segmentation, NFT minting via MetaMask SDK + WalletConnect + ethers.js, a Three.js 3D AR Showroom, and Mixpanel analytics. Uses Vuetify 3 + Tailwind CSS, TanStack Vue Query for data fetching, GSAP + Lenis for scroll-driven animations, and file-based routing via vite-plugin-pages.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Vuetify 3",
      "Three.js",
      "TensorFlow.js",
      "MediaPipe",
      "GSAP",
      "MetaMask SDK",
      "WalletConnect",
      "Ethers.js",
      "Mixpanel",
    ],
    highlights: [
      "109 components, 14 routes, 41 dependencies",
      "AR try-on: TensorFlow.js BodyPix + MediaPipe Pose detection",
      "NFT minting: MetaMask SDK + WalletConnect + ethers v6",
      "Three.js AR Showroom with 3D product visualization",
      "TanStack Vue Query for optimized data fetching",
      "Mixpanel behavioral analytics + Lenis smooth scroll",
    ],
    category: "Consumer Platform",
    url: null,
  },
  {
    slug: "ecommerce",
    company: "digitee",
    title: "Multi-Region E-commerce",
    subtitle: "International Fashion Storefront",
    image: "/assets/images/work/digitee/ecommerce.png",
    description:
      "Multi-region fashion e-commerce — 169 Vue components, 25+ routes, 49 dependencies. Serves 5 regions (US, Egypt, Qatar, UAE, Saudi Arabia) with locale-aware routing and country-specific payment gateways (PayPal global + Kashier for Egypt with card/wallet/Meeza). Features Sizenta virtual fitting (TensorFlow.js pose detection + canvas silhouette matching), Audira AI chat assistant, a Konva-based Design Lab for custom product creation, and QR-based delivery confirmation. 10 Pinia stores, 18 composables, 18 service files, and 5-language i18n (EN, AR, DE, FR, IT). Ships with Playwright E2E tests and Vite code obfuscation.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Konva",
      "PayPal SDK",
      "Kashier",
      "TensorFlow.js",
      "vue-i18n",
      "Lenis",
      "Three.js",
      "Playwright",
    ],
    highlights: [
      "169 components, 25+ routes, 10 stores, 18 composables",
      "5 regions (US/EG/AE/QA/SA) with geo-aware routing",
      "PayPal + Kashier (card/wallet/Meeza) payment gateways",
      "Sizenta: TensorFlow.js pose-detection virtual fitting",
      "Konva Design Lab — custom product creation workflow",
      "Audira AI chat + QR delivery confirmation system",
    ],
    category: "E-commerce",
    url: null,
  },
  {
    slug: "mintora",
    company: "digitee",
    title: "Mintora",
    subtitle: "AI-Powered Print-on-Demand Platform",
    image: "/assets/images/work/digitee/mintora.png",
    description:
      "Digitee's print-on-demand operations platform — 307 Vue components, 17 routes, 36 dependencies. Manages the full lifecycle from order intake through fulfillment with JWT-authenticated RBAC, auto token refresh, and a generic CRUD system. Features a Bento-grid analytics dashboard (ApexCharts + Chart.js), FullCalendar production scheduling, 14 datatable variants, 14 form types, invoice management (add/edit/preview), a scrumboard, and public QR-code order viewing for factory floor access without login. Bilingual EN/AR with complete RTL support. Ships with detailed deployment docs for Vercel.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ApexCharts",
      "Chart.js",
      "FullCalendar",
      "QR Code",
      "vue-i18n",
      "Pinia",
      "Vuelidate",
    ],
    highlights: [
      "307 components, 17 routes, 14 datatable + 14 form variants",
      "JWT auth with RBAC, auto token refresh, router guards",
      "Public QR-code order access — no login required",
      "FullCalendar scheduling + ApexCharts + Chart.js analytics",
      "Invoice management + scrumboard + generic CRUD system",
      "Vercel deployment with service worker + asset preloading",
    ],
    category: "Platform",
    url: null,
  },
  {
    slug: "b2b-lovaa",
    company: "digitee",
    title: "B2B Lovaa Platform",
    subtitle: "AI Brand Onboarding & Marketing",
    image: "/assets/images/work/digitee/b2b-lovaa.png",
    description:
      "B2B conversational onboarding platform — 93 Vue components, 13 routes, 40 dependencies. Brands interact through a 5-step chat flow (get started → login → pick → create → process) that generates branded apparel mockups. Features 3D animated landing pages with Three.js + OGL shaders, blockchain wallet connection (ethers v6 + wagmi + WalletConnect), a KYC/business registration wizard, API documentation page, and Mixpanel conversion tracking. Uses jQuery Ripples water effects, reCAPTCHA, and Vite code obfuscation.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "OGL",
      "GSAP",
      "Ethers.js",
      "WalletConnect",
      "Mixpanel",
      "Marked",
    ],
    highlights: [
      "93 components, 13 routes, 5-step chat onboarding flow",
      "Three.js + OGL shader-driven 3D landing pages",
      "Blockchain wallets: ethers v6 + wagmi + WalletConnect",
      "KYC wizard + API documentation page",
      "Mixpanel conversion tracking + reCAPTCHA",
      "jQuery Ripples water effects + code obfuscation",
    ],
    category: "B2B SaaS",
    url: null,
  },
  {
    slug: "b2b-dashboard",
    company: "digitee",
    title: "B2B Enterprise Dashboard",
    subtitle: "Token Analytics & API Management",
    image: "/assets/images/work/digitee/b2b-dashboard.png",
    description:
      "B2B enterprise management dashboard — 212 Vue components, 19 routes, 37 dependencies. Enables B2B clients to manage AI service subscriptions with token usage analytics, API key lifecycle management, AI image generation with session history, and service activation/payment workflows. Supports 16 languages (EN, AR, DE, FR, ES, IT, JA, ZH, RU, PT, PL, HU, SV, DA, EL, TR) with full RTL. Features Bento-grid layout, ApexCharts dashboards, FullCalendar, business profile composable, and Vercel deployment. Includes user settings with payment management and account deletion.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ApexCharts",
      "motion-v",
      "vue-i18n",
      "Pinia",
      "FullCalendar",
    ],
    highlights: [
      "212 components, 19 routes, 16 language locales",
      "AI image generation with session history tracking",
      "API key creation, rotation, and lifecycle management",
      "Token usage monitoring and consumption analytics",
      "Bento-grid dashboard layout + ApexCharts KPIs",
      "Full RTL support across 16 languages including AR, JA, ZH",
    ],
    category: "Enterprise Dashboard",
    url: null,
  },
  {
    slug: "token",
    company: "digitee",
    title: "Token",
    subtitle: "Digital Token & Crypto Experience",
    image: "/assets/images/work/digitee/token.png",
    description:
      "Digitee's lightweight token experience app — 38 Vue components, 20 dependencies (the leanest in the Digitee ecosystem). Features a 7-phase conversational onboarding chat (introduction → interests → location → storyline → excited updates → feedback → final) with markdown rendering. Integrates ethers.js for blockchain wallet interaction, Three.js for 3D graphics, GSAP ScrollToPlugin for buttery animations, custom canvas cursor effects, and jQuery Ripples. Ships with vee-validate form validation, per-route page-view analytics, and Vite code obfuscation.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Ethers.js",
      "Three.js",
      "GSAP",
      "vee-validate",
      "Pinia",
    ],
    highlights: [
      "38 components, 20 deps — leanest Digitee app",
      "7-phase conversational onboarding chat flow",
      "Ethers.js blockchain wallet integration",
      "Three.js 3D scene + custom canvas cursor effects",
      "GSAP ScrollToPlugin + jQuery Ripples water effects",
      "Per-route page-view analytics tracking",
    ],
    category: "Web3 Platform",
    url: null,
  },

  // ════════════════════════════════════════════
  //  IDAAM
  // ════════════════════════════════════════════
  {
    slug: "keme",
    company: "IDAAM",
    title: "Keme",
    subtitle: "Brain Health Clinic Management Platform (USA)",
    image: "/assets/images/work/IDAAM/keme.png",
    description:
      "Full-scale clinic management system for the US behavioral health market — 552 Vue files on the front-end with Vue 3 + Vuetify 3, and a Laravel backend sporting 1,509 API routes, 161 Eloquent models, 259 controllers, and 402 database migrations. 65 page modules covering Patients, Providers, Appointments, Calendar, Telehealth (Jitsi + PlugNMeet), AI-powered clinical notes & summaries, Billing (Stripe), Insurance Payers, Medication, Lab, Consent Forms with digital signatures, Provider Scheduling, Ticketing, IVR/VoIP (RingCentral), and a Virtual AI Assistant. Features CASL + Spatie RBAC permissions, Elasticsearch full-text search, Pusher real-time WebSockets, Twilio SMS + SendGrid email reminders, 3-language i18n (EN/FR/AR), Google 2FA, and Prometheus + Alertmanager monitoring. Deployed via Docker multi-stage (Node → Nginx) with docker-compose orchestrating 7 services.",
    tech: [
      "Vue 3",
      "Vuetify 3",
      "Vite",
      "Pinia",
      "Laravel",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Docker",
      "Stripe",
      "Jitsi",
      "RingCentral",
      "Pusher",
    ],
    highlights: [
      "552 Vue files front-end, 1,509 API routes, 161 models, 402 migrations",
      "65 modules: Patients, Providers, Appointments, Billing, Lab, Medication…",
      "Telehealth: Jitsi + PlugNMeet video meetings",
      "VoIP/IVR: RingCentral integration + call log",
      "AI clinical notes & summaries + Virtual AI Assistant chat",
      "Docker 7-service deploy + Prometheus/Alertmanager monitoring",
    ],
    category: "Healthcare SaaS",
    url: "https://dev.id3m.dev",
  },

  // ════════════════════════════════════════════
  //  FREELANCE
  // ════════════════════════════════════════════
  {
    slug: "climate-risk",
    company: "freelance",
    title: "Climate Risk Assessment Tool",
    subtitle: "PhD Research Application",
    image: "/assets/images/work/freelance/climate-risk.png",
    description:
      "Climate hazard risk assessment tool built for PhD research — 17 Vue components across 13 routes with 3 Pinia stores (formStore, dataStore, riskStore). Implements a multi-step wizard: monument data entry → hazard selection → impact assessment tables & charts → values selection → priority ranking → risk magnitude calculation → risk visualization → treatment strategies → final summary → printable report. Features interactive Leaflet maps centered on Cairo (30.0444, 31.2357) with click-to-place markers, Chart.js risk visualizations, GSAP step transitions, and html2canvas + vue-print-nb for PDF/print export. Built with Tailwind CSS 4 and Vitest unit tests.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS 4",
      "Chart.js",
      "Leaflet",
      "GSAP",
      "html2canvas",
      "Pinia",
      "Vitest",
    ],
    highlights: [
      "17 components, 13 routes, 3 stores — full assessment wizard",
      "10-step flow: Form → Hazards → Impact → Values → Risk → Treatment → Report",
      "Leaflet maps with click-to-place marker (Cairo-centered)",
      "Chart.js hazard & risk magnitude visualizations",
      "html2canvas + vue-print-nb PDF/print export",
      "Tailwind CSS 4 + Vitest unit testing",
    ],
    category: "Research Tool",
    url: null,
  },
  {
    slug: "gym",
    company: "freelance",
    title: "Gym E-commerce",
    subtitle: "Fitness Store with Shop Features",
    image: "/assets/images/work/freelance/gym.png",
    description:
      "Fitness e-commerce site — 12 routes spanning Home, Shop, Cart, Wishlist, Profile, Coaches, Coach Details, Dish Details, Supplement Details, BMI Calculator, Login, and Register. Uses a 7-1 SASS architecture (abstracts, base, components, layout, pages) with 100+ custom SVG icon components. Features token-based authentication via Axios interceptor against a Railway-hosted Django REST backend (gymmaster-production.up.railway.app). HeadlessUI for accessible dropdowns/modals, AOS scroll animations, and 213 image assets for product photography.",
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "SASS",
      "AOS",
      "HeadlessUI",
      "Axios",
    ],
    highlights: [
      "12 routes including BMI calculator + coach/dish/supplement details",
      "Token auth via Axios interceptor → Railway Django REST API",
      "7-1 SASS architecture + 100+ custom SVG icon components",
      "HeadlessUI accessible dropdowns and modals",
      "213 product/lifestyle image assets",
      "AOS scroll-triggered animations on every section",
    ],
    category: "E-commerce",
    url: null,
  },
  {
    slug: "lusion",
    company: "freelance",
    title: "Lusion 3D Experience",
    subtitle: "Creative WebGL Experiment",
    image: "/assets/images/work/freelance/lusion.png",
    description:
      "Recreation of the award-winning lusion.co/about experience — zero-framework, pure vanilla HTML/CSS/JS. A single 14,348-line JavaScript bundle drives a full Three.js r112 WebGL scene with a female GLB character model, cloth physics simulation (cloth.json + normal/position maps), and parallax scroll effects. Features 6 spatial audio files (about, hover×2, obstacle×2, underwater ambiance), 4 custom fonts (GT-Sectra-Fine + NB Akademie), and 5 project showcase cards with 3D image parallax. Includes mobile detection with redirect, sound toggle, custom cursor tracking, elastic scroll velocity, and skew transforms.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Three.js r112",
      "TweenLite (GSAP)",
      "WebGL",
      "GLB/GLTF",
      "Web Audio API",
    ],
    highlights: [
      "14,348-line JS bundle — zero framework, pure vanilla",
      "Three.js r112 scene: GLB character + cloth physics simulation",
      "6 spatial audio files + sound toggle for immersive UX",
      "4,445-line CSS with 4 custom fonts (GT-Sectra + NB Akademie)",
      "5 project cards with 3D parallax image effects",
      "Custom cursor tracking + elastic scroll velocity + skew transforms",
    ],
    category: "3D / WebGL",
    url: null,
  },

  {
    slug: "user-management",
    company: "freelance",
    title: "User Management Dashboard",
    subtitle: "CRUD Admin with E2E Tests",
    image: "/assets/images/work/freelance/user-management.png",
    description:
      "Single-page CRUD admin dashboard — 7 Vue components with TypeScript, Element Plus, and Pinia 3. Features a mock API layer simulating 80 users (20 hand-crafted + 60 generated) across 3 roles (Admin, Manager, Viewer) with 300–800ms latency. Includes paginated/filtered data tables with live search, jsPDF + jspdf-autotable PDF export, json2csv CSV export, a useConfirmDelete composable wrapping ElMessageBox, dark/light theme switcher, and EN/AR language toggle with full RTL. Tested with Cypress 14 E2E + Vitest unit tests. README documents architecture Q&A on API optimization, RBAC scaling, caching, and offline strategies.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite 6",
      "Element Plus",
      "Pinia 3",
      "vue-i18n",
      "jsPDF",
      "json2csv",
      "Cypress 14",
      "Vitest",
    ],
    highlights: [
      "7 components + mock API: 80 users, 3 roles, simulated latency",
      "jsPDF + jspdf-autotable PDF export + json2csv CSV export",
      "Cypress 14 E2E + Vitest unit testing",
      "Element Plus tables with live search, pagination, sort & filter",
      "Dark/light theme + EN/AR language switcher with full RTL",
      "Architecture docs: RBAC scaling, caching, offline strategies",
    ],
    category: "Dashboard",
    url: null,
  },
];

// Helper: get projects by company
export const getProjectsByCompany = (companyId) =>
  allProjects.filter((p) => p.company === companyId);

// Helper: get project by slug
export const getProjectBySlug = (slug) =>
  allProjects.find((p) => p.slug === slug);

// Helper: get project index
export const getProjectIndex = (slug) =>
  allProjects.findIndex((p) => p.slug === slug);
