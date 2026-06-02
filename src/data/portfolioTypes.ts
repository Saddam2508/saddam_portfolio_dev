import { IconType } from "@/components/public/aboutMe/aboutMeTypes";
import { StaticImageData } from "next/image";

export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioStat = {
  label: string;
  value: number;
  suffix: string;
};

export type Profile = {
  name: string;
  designation: string;
  rotatingDesignations: string[];
  location: string;
  heroBadge: string;
  headlineLines: string[];
  intro: string;
  photo: StaticImageData;
  resumeUrl: string;
  heroFocus: string;
  heroLearning: string;
  about: string[];
};

export type TechStackItem = {
  name: string;
  icon: IconType;
};

export type SkillItem = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type Education = {
  institution: string;
  degree: string;
  timeframe: string;
  details: string[];
};

export type Practice = {
  title: string;
  organization: string;
  type: string;
  timeframe: string;
  summary: string;
  highlights: string[];
};

export type Experience = {
  title: string;
  organization: string;
  timeframe: string;
  type: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  stack: string[];
  description: string;
  liveUrl: string;
  repoUrl: string;
  features: string[];
  futurePlans: string[];
};

export type Contact = {
  email: string;
  phone: string;
  phoneLink: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
};
