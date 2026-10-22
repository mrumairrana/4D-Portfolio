import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building high-performance, responsive, and intuitive web interfaces using React.js and modern frontend technologies to deliver exceptional user experiences across all devices.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Responsive websites and modern web applications",
      "Reusable React components and interactive user interfaces",
      "Performance optimization and cross-browser compatibility",
    ],
  },
  {
    id: 2,
    title: "Backend & API Development",
    description:
      "Engineering secure, scalable, and maintainable backend systems with Node.js and Express.js, enabling seamless communication between applications, services, and databases.",
    icon: "/assets/logos/javascript.svg",
    bullets: [
      "RESTful API architecture and development",
      "Authentication, authorization, and access control",
      "Scalable server-side applications and business logic",
    ],
  },
  {
    id: 3,
    title: "Enterprise Applications & Admin Dashboards",
    description:
      "Developing tailored business applications, CRM systems, and administrative dashboards that streamline operations, improve productivity, and simplify complex workflows.",
    icon: "/assets/logos/tailwindcss.svg",
    bullets: [
      "Custom CRM and business management systems",
      "Interactive dashboards, data tables, and reporting",
      "Role-based permissions and workflow automation",
    ],
  },
  {
    id: 4,
    title: "Database Design & Integration",
    description:
      "Designing and integrating reliable database solutions using PostgreSQL and MongoDB to ensure efficient data management, consistency, and dependable application performance.",
    icon: "/assets/logos/javascript.svg",
    bullets: [
      "Relational and NoSQL database design",
      "Query optimization and data relationship management",
      "Seamless API, backend, and database integration",
    ],
  },
];