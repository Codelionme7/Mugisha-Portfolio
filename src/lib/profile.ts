export const profile = {
  name: "Noa Calder",
  handle: "noacalder",
  role: "Instrument builder",
  location: "Oakland, CA",
  bio: "I make scientific tools cheap enough to leave in a field. Currently: a $38 soil spectrometer used by California growers.",
  status: "Applying · Academy founding class ’27",
  email: "hello@noacalder.studio",
  avatar: "/images/avatar.jpg",
  avatarAlt: "Painted portrait of Noa Calder",
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
    title: "Selected work",
    subtitle: "Instruments, firmware, field trials",
    href: "/work",
    icon: "work",
  },
  {
    title: "Why The Academy",
    subtitle: "A note on going all in",
    href: "/notes",
    icon: "note",
  },
  {
    title: "Open source",
    subtitle: "Trace firmware · 2.4k stars",
    href: "/work#trace",
    icon: "code",
  },
  {
    title: "Resume",
    subtitle: "One page, no fluff",
    href: "/resume",
    icon: "resume",
  },
  {
    title: "Say hello",
    subtitle: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    external: true,
  },
];

export type Social = {
  id: "github" | "x" | "linkedin" | "mail";
  label: string;
  href?: string;
  copy?: string;
};

export const socials: Social[] = [
  { id: "github", label: "GitHub", copy: "github.com/noacalder" },
  { id: "x", label: "X", copy: "x.com/noacalder" },
  { id: "linkedin", label: "LinkedIn", copy: "linkedin.com/in/noacalder" },
  { id: "mail", label: "Email", href: `mailto:${profile.email}` },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  lede: string;
  body: string;
  image: string;
  imageAlt: string;
  meta: string;
};

export const projects: Project[] = [
  {
    id: "fieldglass",
    title: "Fieldglass",
    year: "2025–26",
    lede: "A handheld NIR spectrometer that reads soil NPK in eight seconds.",
    body: "Labs charge hundreds of dollars and a week of waiting. Fieldglass costs $38 in parts, fits in a palm, and writes a result to a phone before the grower has put the scoop down. Twelve hundred units are in California fields this season. I designed the optical path, the enclosure, and the calibration that makes cheap sensors honest.",
    image: "/images/fieldglass.jpg",
    imageAlt: "Handheld Fieldglass spectrometer on a wooden workbench",
    meta: "Hardware · optics · calibration",
  },
  {
    id: "trace",
    title: "Trace",
    year: "2024–26",
    lede: "Open-source firmware for scientific boards that should not need a lab.",
    body: "Trace is the software under Fieldglass and the field nodes: a tiny runtime, a calibration protocol, and a local-first log that does not phone home. Two thousand four hundred stars, forty-eight contributors, boards from three continents. I wrote the first 8k lines in a garage and still review every release.",
    image: "/images/trace-bench.jpg",
    imageAlt: "Open electronics workbench with a custom sensor board",
    meta: "Firmware · protocol · community",
  },
  {
    id: "nodes",
    title: "Field nodes",
    year: "2026",
    lede: "Twelve-dollar environmental sensors that stay in the soil overnight.",
    body: "Moisture, temperature, and a coarse nitrogen proxy, staked at crop height, solar trickle, a week of memory. Built so a farm can deploy a grid without asking a vendor for permission. Early trials on two organic plots in the East Bay.",
    image: "/images/field-node.jpg",
    imageAlt: "A small sensor node staked in a vegetable field at golden hour",
    meta: "Sensing · field trials",
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
    slug: "academy",
    title: "Why The Academy",
    date: "September 2026",
    body: [
      "The Academy is not a school I want to attend. It is a room I want to be in.",
      "I have spent two years making instruments in a garage in Oakland: a spectrometer that reads soil in eight seconds, firmware that runs on a board that costs less than lunch, sensors that growers leave in the field overnight. The work is real. The rooms around it are not.",
      "I do not need another classroom. I need peers who would rather be building, teachers who are still making the future, and a city where the distance between a sketch and a shop floor is a bike ride.",
      "Proof of work is the whole application. Mine lives here.",
    ],
  },
  {
    slug: "cheap-instruments",
    title: "Instruments that cost what they should",
    date: "June 2026",
    body: [
      "A soil panel is a light source, a detector, and a model that has been told the truth enough times. None of those are expensive. The expensive part is the building that wraps them, the brand, the week you wait.",
      "Fieldglass is an argument that the wrap is optional. If the calibration is public and the board is boring, a grower can own the instrument the way they own a wrench.",
    ],
  },
  {
    slug: "garage",
    title: "Notes from the garage",
    date: "March 2026",
    body: [
      "The mill is louder than the neighbors deserve. I cut the first fifty enclosures at night and sanded them on the roof in the morning. The optical window was the hard part — cheap glass lies, and expensive glass is the whole budget.",
      "I learned more from the first hundred failed spectra than from any syllabus I was supposed to be in.",
    ],
  },
];

export const resume = {
  headline: "Independent instrument builder. Hardware, firmware, and the field trials that make both honest.",
  sections: [
    {
      title: "Now",
      items: [
        {
          label: "Independent · Oakland",
          detail: "2024 — present",
          body: "Designing, fabricating, and shipping low-cost scientific instruments. Fieldglass, Trace, and the field-node grid.",
        },
      ],
    },
    {
      title: "Selected work",
      items: [
        {
          label: "Fieldglass",
          detail: "1,200 units in the field",
          body: "Handheld NIR soil spectrometer. Optical path, enclosure, and calibration. $38 BOM.",
        },
        {
          label: "Trace",
          detail: "2.4k GitHub stars",
          body: "Open-source firmware and calibration protocol for cheap scientific boards.",
        },
        {
          label: "Workshops",
          detail: "80 students",
          body: "Taught high-school builders to fab a first instrument from a schematic and a mill.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          label: "High school, Oakland",
          detail: "Completed 2026",
          body: "Left full-time school when the instruments started shipping. Eligible for The Academy founding class, September 2027.",
        },
      ],
    },
  ],
};
