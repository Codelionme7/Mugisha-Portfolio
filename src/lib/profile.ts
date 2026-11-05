export const profile = {
  name: "Mugisha Lionel",
  handle: "Codelionme7",
  role: "Backend & AI Systems Engineer",
  location: "Nairobi, Kenya",
  bio: "I turn fragile AI prototypes into production systems. Python, Django, and the pipelines that keep models running without taking the server down.",
  status: "GCI World 2026 · University of Tokyo",
  github: "https://github.com/Codelionme7",
  linkedin: "https://ke.linkedin.com/in/mugisha-lionel",
  avatar: "/images/avatar.jpg",
  avatarAlt: "Portrait of Mugisha Lionel",
} as const;

export type FeaturedLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: "work" | "note" | "resume" | "mail" | "code";
  external?: boolean;
};

export const featuredLinks: FeaturedLink[] = [
  {
    title: "AFMAS",
    subtitle: "Sovereign safety scores for African LLMs",
    href: "https://github.com/Codelionme7/AFMAS",
    icon: "code",
    external: true,
  },
  {
    title: "EchoVault AI",
    subtitle: "Audio-first capture, storage, and transcription",
    href: "https://github.com/Codelionme7/EchoVault-Ai",
    icon: "code",
    external: true,
  },
  {
    title: "StudySquad",
    subtitle: "Django matchmaking API for study groups",
    href: "https://github.com/Codelionme7/StudySquad",
    icon: "code",
    external: true,
  },
  {
    title: "ShadowForge",
    subtitle: "Macro shock tests for personal and SME finances",
    href: "https://github.com/Codelionme7/ShadowForge",
    icon: "code",
    external: true,
  },
  {
    title: "Selected work",
    subtitle: "SafeZone and the rest of the stack",
    href: "/work",
    icon: "work",
  },
  {
    title: "Resume",
    subtitle: "ALX, GCI, and the systems I ship",
    href: "/resume",
    icon: "resume",
  },
];

export type Social = {
  id: "github" | "x" | "linkedin" | "mail";
  label: string;
  href?: string;
  copy?: string;
};

export const socials: Social[] = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  lede: string;
  body: string;
  meta: string;
  href: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    id: "afmas",
    title: "AFMAS",
    year: "2026",
    lede: "An open evaluation engine that scores LLMs for African languages and governance norms.",
    body: "African Model Assessment System turns model outputs into a Sovereign Safety Score: linguistic fit, governance alignment, and auditability, then a green, yellow, or red call. The Python pipelines ingest, score, and compare runs so the result is the same every time you replay the demo.",
    meta: "Python · evaluation · data pipelines",
    href: "https://github.com/Codelionme7/AFMAS",
  },
  {
    id: "echovault",
    title: "EchoVault AI",
    year: "2026",
    lede: "A containerized backend for an audio-first capture, storage, and transcription platform.",
    body: "Recording has to survive a crash before a transcript is worth anything. EchoVault keeps chunked audio locally, retries uploads, and stores it encrypted. The service side is NestJS with PostgreSQL, Redis, Docker, and GitHub Actions, with transcription and summaries as a layer on top of the capture.",
    meta: "TypeScript · Docker · PostgreSQL · CI",
    href: "https://github.com/Codelionme7/EchoVault-Ai",
  },
  {
    id: "studysquad",
    title: "StudySquad",
    year: "2025–26",
    lede: "A matchmaking API that groups students by shared courses and overlapping free time.",
    body: "Built for the ALX capstone. Django and Django REST Framework handle auth, courses, and schedules. PostgreSQL holds the cohort data, and a matchmaker proposes study groups from overlapping availability instead of a manual spreadsheet.",
    meta: "Django · DRF · PostgreSQL",
    href: "https://github.com/Codelionme7/StudySquad",
  },
  {
    id: "shadowforge",
    title: "ShadowForge",
    year: "2026",
    lede: "Stress tests for personal and SME finances against African macroeconomic shocks.",
    body: "Vectorized Monte Carlo runs and a reverse solver ask how a balance sheet fails under a calibrated shock, then brief the result. Python, MIT licensed, built so the scenario can be replayed instead of narrated.",
    meta: "Python · simulation · MIT",
    href: "https://github.com/Codelionme7/ShadowForge",
  },
  {
    id: "safezone",
    title: "SafeZone",
    year: "2026",
    lede: "A community alert preview for finding missing children faster.",
    body: "The public MVP walks through the flow: register a child, raise an alert, assign a search, submit a sighting, and resolve it. The live preview is deployed so the product can be tried before a production backend is in the path.",
    meta: "Next.js · TypeScript · live preview",
    href: "https://safezone-amber-one.vercel.app/",
    linkLabel: "Open the app",
  },
];

export type Note = {
  slug: string;
  title: string;
  date: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "production",
    title: "Prototypes are not products",
    date: "2026",
    body: [
      "A notebook that scores a model once is not a system. The system is the queue, the retry, the schema, and the log you can trust when the same job runs tomorrow.",
      "I care about that layer: Python and Django services, APIs, PostgreSQL, and the async path that lets a model run in production without pinning the server.",
      "If the demo dies when the laptop sleeps, it was never finished.",
    ],
  },
  {
    slug: "afmas",
    title: "A score you can rerun",
    date: "2026",
    body: [
      "AFMAS exists because a model can look fluent and still be a poor fit for an African language or a local rule. A vibe check does not travel. A pipeline does.",
      "The Sovereign Safety Score splits linguistic fit, governance, and auditability, then paints the result green, yellow, or red. The point is that someone else can run the same demo and get the same number.",
    ],
  },
  {
    slug: "reliability",
    title: "What reliable means in practice",
    date: "2025–26",
    body: [
      "ALX was a year of shipping backend work with a paper trail: containerized services, relational schemas, and REST APIs that stay under version control.",
      "The habit I kept is boring on purpose. Small changes, a migration you can read, a pipeline that fails in public, and a README that says how to run it.",
    ],
  },
];

export const resume = {
  headline:
    "Backend and AI systems engineer. I design Python and Django services, APIs, and the infrastructure that keeps models running in production.",
  sections: [
    {
      title: "Experience",
      items: [
        {
          label: "Data Science Trainee · GCI World 2026",
          detail: "Apr 2026 — present",
          body: "The University of Tokyo, apprenticeship, remote. Selected for the Global Consumer Intelligence World 2026 program.",
        },
        {
          label: "Backend Software Engineering Trainee · ALX Africa",
          detail: "Jun 2025 — Mar 2026",
          body: "Shipped containerized backends, designed PostgreSQL schemas, and built REST APIs with strict version control and documentation.",
        },
        {
          label: "Backend Engineer · EchoVault AI",
          detail: "2026",
          body: "Containerized backend for an audio-first platform. Database architecture, encrypted storage, and CI/CD through GitHub Actions.",
        },
        {
          label: "Backend Engineer · AFMAS",
          detail: "2026",
          body: "Open-source evaluation engine for LLMs. Python pipelines that ingest, score, and compare model outputs on a fixed rubric.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          label: "ALX Kenya · Back-end Development",
          detail: "Jun 2025 — Mar 2026",
          body: "Software engineering program focused on backend systems, APIs, and databases.",
        },
        {
          label: "ALX Kenya · Professional Foundations",
          detail: "Jun 2025 — Sep 2025",
          body: "Professional foundations for working and communicating in a technical team.",
        },
      ],
    },
    {
      title: "Certification",
      items: [
        {
          label: "Quantum Enigmas · IBM",
          detail: "Issued Jun 2026",
          body: "IBM Quantum Enigmas.",
        },
      ],
    },
  ],
};
