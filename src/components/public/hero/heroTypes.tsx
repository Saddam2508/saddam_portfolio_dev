export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioStat = {
  label: string;
  value: string | number;
};

export type Profile = {
  heroBadge: string;
  rotatingDesignations: string[];
  designation: string;
  headlineLines: string[];
  intro: string;
  resumeUrl: string;
  photo: string;
  name: string;
  heroFocus: string;
  heroLearning: string;
};
