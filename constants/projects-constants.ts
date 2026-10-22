import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Inverex Global",
    category: "Renewable Energy · Corporate Website",
    description:
      "A corporate web experience for a solar energy provider, showcasing renewable energy products, services, and solutions for residential and commercial customers.",
    subDescription: [
      "Developed a professional website to present solar products and renewable energy solutions.",
      "Created reusable UI components for product listings, services, and business information.",
      "Implemented responsive layouts for desktop, tablet, and mobile devices.",
      "Focused on performance, accessibility, and search engine optimization.",
    ],
    href: "",
    logo: "",
    image: "/projects/inverex.webp",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Responsive Design", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "Getweys",
    category: "Digital Solutions · Business Website",
    description:
      "A digital agency website presenting technology services, product development capabilities, and digital solutions for businesses across multiple industries.",
    subDescription: [
      "Structured service sections to communicate the agency's digital capabilities.",
      "Organized industry-focused content to improve navigation and content discovery.",
      "Designed responsive page layouts and reusable interface components.",
      "Focused on user experience, accessibility, and website performance.",
    ],
    href: "",
    logo: "",
    image: "/projects/getweys.webp",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "SEO", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "PromptStore",
    category: "AI Tools · Digital Marketplace",
    description:
      "An AI prompt marketplace concept designed to organize digital resources, help users discover relevant prompts, and support creator-focused marketplace experiences.",
    subDescription: [
      "Organized digital content into categories for easier browsing and discovery.",
      "Designed marketplace interfaces for exploring and previewing digital products.",
      "Planned user-facing experiences for creator listings and product management.",
      "Focused on a clear interface, reusable components, and maintainable architecture.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "REST APIs", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "UI Development", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "ClipSave",
    category: "Web Utilities · Media Tools",
    description:
      "A browser-based media utility platform designed around a straightforward interface for accessing online media tools and related web utilities.",
    subDescription: [
      "Designed an intuitive interface for entering URLs and accessing available tools.",
      "Organized utility features into a consistent, easy-to-navigate experience.",
      "Built responsive layouts for mobile and desktop users.",
      "Prioritized maintainable components and clear user interactions.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "REST APIs", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
    title: "Fast Digital Technology",
    category: "Cybersecurity · Corporate Website",
    description:
      "A corporate website for a cybersecurity services provider, designed to present technical services, communicate business value, and encourage customer inquiries.",
    subDescription: [
      "Organized cybersecurity services into clear, accessible content sections.",
      "Designed a professional interface aligned with business-focused messaging.",
      "Structured contact and inquiry sections to support customer engagement.",
      "Focused on responsive design, accessibility, and search visibility.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "SEO", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 6,
    title: "ATF Catalogue",
    category: "Digital Publishing · Interactive Catalogue",
    description:
      "An interactive digital catalogue experience that presents product information in a page-turning format, making browsing more engaging across desktop and mobile devices.",
    subDescription: [
      "Created an interactive catalogue interface with page-turning navigation.",
      "Organized product pages into a consistent digital browsing experience.",
      "Considered responsive rendering and smooth navigation across screen sizes.",
      "Maintained a consistent visual presentation throughout the catalogue.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-lavender/40 to-sand/10",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "UI Development", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = {
  stiffness: 200,
  damping: 18,
};

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = {
  stiffness: 60,
  damping: 20,
};

export const PREVIEW_WINDOW = 1;
