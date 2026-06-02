import { SkillGroup } from "./portfolioTypes";

export const skillsStackGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "script" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HeroUI", icon: "code" },
      { name: "DaisyUI", icon: "code" },
      { name: "Framer Motion", icon: "spark" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "code" },
      { name: "Mongoose", icon: "database" },
      { name: "Better Auth", icon: "script" },
      { name: "JWT Authentication", icon: "script" },
      { name: "Role Based Access Control", icon: "script" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: "code" },
      { name: "GitHub", icon: "github" },
      { name: "REST API", icon: "database" },
      { name: "Vercel", icon: "next" },
      { name: "Responsive Web Design", icon: "code" },
      { name: "bcrypt", icon: "script" },
      { name: "Zod", icon: "script" },
    ],
  },
];
