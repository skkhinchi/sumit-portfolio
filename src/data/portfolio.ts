export interface NavLinkItem {
  id: string
  label: string
  href: string
}

export interface HeroStatItem {
  value: string
  labelKey: string
}

export interface MiniCard {
  icon: string
  label: string
  value: string
}

export interface SocialLink {
  label: string
  href: string
  external: boolean
}

export interface CodeBlockLine {
  text: string
  tokens?: Array<'keyword' | 'string' | 'prop' | 'value' | 'plain' | 'comment'>
}

export interface SkillCategoryItem {
  id: string
  icon: string
  title: string
  tags: string[]
  highlight?: 'violet'
}

export interface ExperienceBullet {
  text: string
  highlights: string[]
}

export interface ExperienceRole {
  id: string
  title: string
  company: string
  location: string
  period: string
  emoji: string
  bullets: ExperienceBullet[]
  award?: string
}

export interface ProjectFeatureLine {
  text: string
}

export interface FeaturedProject {
  title: string
  tagline: string
  features: ProjectFeatureLine[]
  tech: string[]
  terminalLines: string[]
}

export interface GridProject {
  id: string
  emoji: string
  title: string
  description: string
  features: string[]
  tech: string[]
}

export interface ContactCard {
  id: string
  icon: string
  label: string
  value: string
  href: string
}

export interface OpenSourceEntry {
  name: string
  description: string
  url: string
}

export interface SiteMeta {
  title: string
  description: string
  ogImage: string
  siteUrl: string
}

/** Place `resume.pdf` in `public/` or set to an external URL. */
export const resumeUrl = '/resume.pdf'

export const siteMeta: SiteMeta = {
  title: 'Sumit Khinchi — Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer building React, TypeScript, micro frontends, and AI/RAG applications. Bengaluru, India.',
  ogImage: '/og-image.png',
  siteUrl: 'https://sumitkhinchi.dev',
}

export const navLinks: NavLinkItem[] = [
  { id: 'about', label: 'about', href: '#about' },
  { id: 'skills', label: 'skills', href: '#skills' },
  { id: 'experience', label: 'experience', href: '#experience' },
  { id: 'projects', label: 'projects', href: '#projects' },
  { id: 'contact', label: 'contact', href: '#contact' },
]

export const heroRoles: string[] = [
  'Senior Frontend Engineer',
  'Micro Frontend Architect',
  'AI / RAG Application Builder',
  'React + TypeScript Specialist',
]

export const heroTagline =
  'Building scalable React systems, micro frontend architectures, and AI-powered applications with LangChain + LLM APIs.'

export const heroStats: HeroStatItem[] = [
  { value: '6.5+', labelKey: 'years_exp' },
  { value: '4', labelKey: 'companies' },
  { value: '3', labelKey: 'ai_projects' },
  { value: '40%', labelKey: 'avg_perf_gain' },
]

export const statLabels: Record<string, string> = {
  years_exp: 'years experience',
  companies: 'companies',
  ai_projects: 'AI projects',
  avg_perf_gain: 'avg. perf. gain',
}

export const aboutSection = {
  label: '01 // about',
  title: 'The Engineer Behind the Code',
  paragraphs: [
    'I am a Senior Frontend Engineer with 6.5+ years shipping production web platforms — from enterprise HRMS to analytics and AI-assisted workflows.',
    'My focus spans React and TypeScript at scale, micro frontend ecosystems with Module Federation, and AI-integrated products: RAG pipelines, streaming LLM UIs, and pragmatic prompt design.',
    'Today I architect modular frontends and intelligent assistants that reduce toil for users and teams — measurable impact, clean boundaries, and maintainable code.',
  ],
  miniCards: [
    { icon: '🏢', label: 'Current', value: 'Prime Focus Technologies' },
    { icon: '📍', label: 'Location', value: 'Bengaluru, India' },
  ] satisfies MiniCard[],
  social: [
    {
      label: 'Email',
      href: 'mailto:khinchi.skumar@gmail.com',
      external: false,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sumit-kumar-khinchi',
      external: true,
    },
  ] satisfies SocialLink[],
}

export const aboutCodeFilename = 'sumit.config.ts'

export const aboutCodeLines: string[] = [
  'const engineer = {',
  '  name: "Sumit Khinchi",',
  '  role: "Sr. Engineer",',
  '  exp:  "6.5+ years",',
  '  location: "Bengaluru 🇮🇳",',
  '',
  '  core: [',
  '    "React.js",',
  '    "TypeScript",',
  '    "Micro Frontends",',
  '    "AI / RAG / LLM",',
  '  ],',
  '',
  '  award: "🏆 Super Squad",',
  '  openTo: "Lead roles",',
  '}',
]

export const skillCategories: SkillCategoryItem[] = [
  {
    id: 'fe',
    icon: '⚛️',
    title: 'Frontend Core',
    tags: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'Redux Toolkit',
      'React Query',
      'Context API',
      'Material UI',
    ],
  },
  {
    id: 'arch',
    icon: '🏗️',
    title: 'Architecture',
    tags: [
      'Micro Frontends',
      'Module Federation',
      'Design Systems',
      'Component-Driven Dev',
      'PWA',
      'Monorepo',
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & LLM',
    highlight: 'violet',
    tags: [
      'RAG Pipelines',
      'LangChain',
      'LLM APIs',
      'Prompt Engineering',
      'Conversational UI',
      'FAISS',
      'Pinecone',
      'Vector DB',
    ],
  },
  {
    id: 'perf',
    icon: '⚡',
    title: 'Performance',
    tags: [
      'Lazy Loading',
      'Code Splitting',
      'Memoization',
      'Virtualization',
      'Bundle Optimization',
      'Web Vitals',
    ],
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud & Tools',
    tags: [
      'AWS (EC2/S3/CF/Amplify)',
      'Git',
      'CI/CD',
      'Webpack',
      'Vite',
      'Docker',
      'Storybook',
      'Figma',
    ],
  },
  {
    id: 'test',
    icon: '🧪',
    title: 'Testing',
    tags: [
      'Jest',
      'React Testing Library',
      'Unit Testing',
      'REST APIs',
      'Axios',
      'API Integration',
    ],
  },
]

export const skillsTickerKeywords: string[] = [
  ...new Set(skillCategories.flatMap((c) => c.tags)),
  'React',
  'TypeScript',
  'LangChain',
  'Module Federation',
  'RAG',
  'LLM',
  'Vite',
  'Webpack',
  'AWS',
  'Storybook',
]

export const experienceRoles: ExperienceRole[] = [
  {
    id: 'pft',
    title: 'SENIOR SOFTWARE ENGINEER',
    company: 'Prime Focus Technologies',
    location: 'Bengaluru, India',
    period: 'Jan 2025 – Present',
    emoji: '🎬',
    bullets: [
      {
        text: 'Architected Micro Frontend systems with Module Federation — {0} modules, {1} faster release cycles',
        highlights: ['5+', '40%'],
      },
      {
        text: 'Built RAG + LLM chat assistants with real-time streaming via LangChain — {0} reduction in manual query resolution',
        highlights: ['60%'],
      },
      {
        text: 'Optimized performance (lazy loading, memoization, code splitting) — {0} faster page loads on Beacon platform',
        highlights: ['35%'],
      },
    ],
    award: 'Super Squad Award 2025',
  },
  {
    id: 'deeporion',
    title: 'SENIOR SOFTWARE ENGINEER',
    company: 'Deeporion Technology',
    location: 'Remote / India',
    period: 'Oct 2022 – Jan 2025',
    emoji: '🧩',
    bullets: [
      {
        text: 'Designed Micro Frontend architecture for Dxyra HRMS — Recruitment, Payroll, Attendance, Employee Lifecycle across {0} independent teams',
        highlights: ['4'],
      },
      {
        text: 'Integrated RAG-based AI chatbot with LLM conversational UI — {0} reduction in support tickets',
        highlights: ['30%'],
      },
      {
        text: 'Built reusable component libraries — {0} faster dev cycles; mentored {1} engineers on React & clean architecture',
        highlights: ['25%', '5'],
      },
    ],
  },
  {
    id: 'honeywell',
    title: 'SOFTWARE ENGINEER',
    company: 'AugmentoLabs / Honeywell',
    location: 'India',
    period: 'Dec 2021 – Sep 2022',
    emoji: '🏭',
    bullets: [
      {
        text: 'Developed EMaaS analytics dashboards for carbon emissions, water & electricity monitoring at enterprise scale',
        highlights: [],
      },
      {
        text: 'Built Storybook component library — {0} less duplicated code across 3 feature teams',
        highlights: ['45%'],
      },
      {
        text: 'Implemented Micro Frontend architecture — independent release cycles across 3 teams',
        highlights: [],
      },
    ],
  },
  {
    id: 'millow',
    title: 'SOFTWARE ENGINEER',
    company: 'Millow Satya',
    location: 'India',
    period: 'Jul 2019 – Dec 2021',
    emoji: '🔐',
    bullets: [
      {
        text: 'Built Background Verification platform — document upload, RBAC, status tracking for enterprise HR',
        highlights: [],
      },
      {
        text: 'Integrated DigiLocker OTP authentication — {0} faster identity verification',
        highlights: ['50%'],
      },
      {
        text: 'Managed AWS deployments (EC2, S3, CloudFront, Amplify) with {0} unit test coverage',
        highlights: ['80%+'],
      },
    ],
  },
]

export const featuredProject: FeaturedProject = {
  title: 'AI DevOps Automation Agent',
  tagline: 'Natural language → Git workflows. Zero manual merges.',
  features: [
    { text: 'NL to Git/PR' },
    { text: 'Branch validate' },
    { text: 'Auto merge orch' },
    { text: 'Modular API arch' },
  ],
  tech: ['React.js', 'TypeScript', 'Node.js', 'LLM APIs', 'Git Automation'],
  terminalLines: [
    '$ ask-agent "merge release → main after CI green"',
    '→ validating branch protection... OK',
    '→ running test suite (unit + e2e)... OK',
    '→ opening PR #482... merged ✓',
    '$ ',
  ],
}

export const gridProjects: GridProject[] = [
  {
    id: 'rag-email',
    emoji: '📚',
    title: 'AI Assistant Platform (RAG + Email)',
    description:
      'Enterprise assistant combining retrieval, email context, and streaming answers for faster operational workflows.',
    features: [
      'Vector-backed retrieval with reranking',
      'Email thread grounding + citations',
      'Streaming UI with abort + retries',
      'Modular tool APIs for integrations',
    ],
    tech: ['Next.js', 'TypeScript', 'LangChain', 'OpenAI', 'FAISS', 'Pinecone'],
  },
  {
    id: 'rag-chat',
    emoji: '💬',
    title: 'AI RAG Chatbot',
    description:
      'Conversational interface over domain documents with low-latency streaming and observability hooks.',
    features: [
      'Chunking + embedding pipeline',
      'Conversation memory & guardrails',
      'Streaming tokens to the client',
      'REST + WebSocket friendly design',
    ],
    tech: ['React', 'Node.js', 'OpenAI', 'Vector DB', 'Streaming API'],
  },
]

export const contactSection = {
  label: '07 // contact',
}

export const contactHeadline = {
  line1: "Let's Build",
  line2: 'Something',
  line3: 'Great',
}

export const contactSubcopy =
  'Open to Senior Frontend, Lead, or AI-integrated application roles. Based in Bengaluru — available for remote-first or hybrid opportunities globally.'

export const contactCards: ContactCard[] = [
  {
    id: 'email',
    icon: '📧',
    label: 'email',
    value: 'khinchi.skumar@gmail.com',
    href: 'mailto:khinchi.skumar@gmail.com',
  },
  {
    id: 'phone',
    icon: '📱',
    label: 'phone',
    value: '+91 8104291629',
    href: 'tel:+918104291629',
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'linkedin',
    value: 'sumit-kumar-khinchi',
    href: 'https://www.linkedin.com/in/sumit-kumar-khinchi',
  },
  {
    id: 'github',
    icon: '🐙',
    label: 'github',
    value: 'skkhinchi',
    href: 'https://github.com/skkhinchi',
  },
]

export const contactStatus =
  'Currently: Building AI-powered media tools @ Prime Focus Technologies'

export const openSourceSection = {
  label: '06 // open source',
  title: 'Code in the Open',
  description:
    'Experimenting with tooling, UI kits, and AI-assisted developer workflows. More public work landing soon.',
  entries: [] as OpenSourceEntry[],
}

export const footerTech = 'React · TypeScript · Vite · Framer Motion · AWS S3'
