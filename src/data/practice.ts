import { Practice } from "./portfolioTypes";

export const practice: Practice[] = [
  {
    title: "Full Stack Application Development",
    organization: "Self-Driven",
    type: "Independent",
    timeframe: "2024 – Present",
    summary:
      "Independently designed and built full-stack web applications from scratch, handling both frontend and backend concerns — from UI design to database modeling, authentication, and deployment.",
    highlights: [
      "Built a sports facility booking platform (SportNest) with Next.js, Node.js, MongoDB, and Better Auth — handling auth flow, protected routes, and responsive UI end-to-end.",
      "Developed a collaborative issue tracking REST API (DevPulse) using TypeScript, Express.js, and PostgreSQL with raw SQL, JWT auth, and role-based access control.",
      "Solved real deployment challenges on Vercel including Next.js prerendering issues, environment variable mismatches, and Google OAuth redirect URI configuration.",
    ],
  },
  {
    title: "Backend Engineering & API Design",
    organization: "Self-Driven",
    type: "Independent",
    timeframe: "2025 – Present",
    summary:
      "Practiced building production-style REST APIs with a focus on clean architecture, type safety, authentication, and database design — without relying on ORMs.",
    highlights: [
      "Implemented JWT authentication, bcrypt password hashing, HTTPOnly cookies, and role-based permission systems across multiple backend projects.",
      "Worked with raw SQL queries on PostgreSQL — handling joins, filtering, sorting, pagination, and schema design without using an ORM.",
      "Structured backend codebases with modular architecture, reusable middleware, centralized error handling, and environment-based configuration.",
    ],
  },
  {
    title: "Problem Solving & Continuous Learning",
    organization: "Self-Driven",
    type: "Independent",
    timeframe: "2023 – Present",
    summary:
      "Committed to daily learning and hands-on problem solving across frontend, backend, and tooling — consistently applying new concepts through real project work.",
    highlights: [
      "Completed Programming Hero's Web Development and AI-Driven Software Engineering courses, building projects at each stage to apply concepts immediately.",
      "Debugged and resolved complex issues in authentication persistence, route protection, API error handling, and client-server communication.",
      "Regularly explored new tools and libraries including Framer Motion, TanStack Query, Shadcn UI, Zod, and Prisma through self-initiated projects.",
    ],
  },
];
