import { Project } from "./portfolioTypes";

export const projects: Project[] = [
  {
    slug: "devpulse-api",
    name: "DevPulse API",
    category: "Backend / Issue Tracking Platform",
    image: "/project-orbit.svg",
    summary:
      "A collaborative backend platform for software teams to report bugs, manage feature requests, and streamline development workflows with role-based access control.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Raw SQL",
      "JWT Authentication",
      "bcrypt",
      "NeonDatabase",
      "dotenv",
      "cors",
      "Vercel",
    ],
    description:
      "DevPulse API is a production-style collaborative backend platform where software teams can report bugs and request features. Built with raw SQL on PostgreSQL, it features JWT authentication, role-based access control with Contributor and Maintainer roles, and a clean modular TypeScript architecture.",
    liveUrl: "https://b7-a02-saddam.vercel.app",
    repoUrl: "https://github.com/Saddam2508/b7-a02-saddam",
    features: [
      "Secure JWT authentication and authorization",
      "Role-based access control — Contributor and Maintainer roles",
      "Bug report and feature request management",
      "Filtering and sorting issues by type and status",
      "Contributor can update only their own open issues",
      "Maintainer can update or delete any issue",
      "Password hashing with bcrypt",
      "PostgreSQL with raw SQL — no ORM",
      "Modular backend architecture with reusable utilities",
      "Centralized response and error handling",
    ],
    futurePlans: [
      "Add comment threads and activity logs per issue.",
      "Introduce team workspace and project grouping features.",
      "Build a frontend dashboard for real-time issue tracking.",
    ],
  },
  {
    slug: "sportnest",
    name: "SportNest",
    category: "Full Stack / Sports Facility Booking Platform",
    image: "/project-pulse.svg",
    summary:
      "A modern sports facility booking management system where users can explore facilities, book time slots, and owners can manage their listings — built with MERN Stack and TypeScript.",
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "JWT",
      "HTTPOnly Cookie",
      "Tailwind CSS",
      "DaisyUI",
      "HeroUI",
      "Vercel",
    ],
    description:
      "SportNest is a full-stack sports facility booking platform. Users can explore available sports facilities, book time slots, and manage their bookings. Facility owners can add, update, and delete their listings.",
    liveUrl: "https://b13-a09-saddam.vercel.app",
    repoUrl: "https://github.com/Saddam2508/B13-A09-Saddam",
    features: [
      "Secure authentication with Better Auth",
      "JWT and HTTPOnly cookie implementation",
      "Facility booking system with time slot management",
      "Add, update, and delete facilities",
      "My Bookings management dashboard",
      "Search and filter functionality",
      "Protected routes and APIs",
      "Responsive UI for mobile, tablet, and desktop",
      "Dynamic featured facilities section",
      "Custom 404 and loading pages",
    ],
    futurePlans: [
      "Add payment integration for booking confirmation.",
      "Introduce reviews and ratings for facilities.",
      "Build an analytics dashboard for facility owners.",
    ],
  },
  {
    slug: "tile-gallery",
    name: "Tile Gallery",
    category: "Frontend / Image Gallery Application",
    image: "/project-canvas.svg",
    summary:
      "A responsive tile gallery app with Google OAuth authentication, searchable gallery, profile management, and smooth animations — built with Next.js 16 and Better Auth.",
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "Google OAuth",
      "Framer Motion",
      "Vercel",
    ],
    description:
      "Tile Gallery is a Next.js application featuring a responsive homepage with a banner slider, a searchable tile gallery, and Google OAuth authentication via Better Auth.",
    liveUrl: "https://b13-a08-saddam.vercel.app",
    repoUrl: "https://github.com/Saddam2508/B13-A08-Saddam",
    features: [
      "Responsive homepage with banner slider",
      "Searchable tile gallery",
      "Google OAuth authentication with Better Auth",
      "Profile view and update flow",
      "Smooth animations with Framer Motion",
      "Responsive layout across mobile, tablet, and desktop",
      "Next.js server-side and client-side rendering handled correctly",
      "Vercel deployment with proper environment variable setup",
    ],
    futurePlans: [
      "Add tile upload and user collection features.",
      "Improve gallery filtering by category and color.",
      "Introduce dark mode and accessibility improvements.",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
