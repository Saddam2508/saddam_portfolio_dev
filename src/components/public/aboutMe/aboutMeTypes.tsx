export type IconType =
  | "react"
  | "next"
  | "javascript"
  | "tailwind"
  | "node"
  | "mongodb"
  | "express"
  | "github"
  | "mysql"
  | "codex"
  | "database"
  | "script"
  | "spark"
  | "code";

export type AboutIconProps = {
  type: IconType;
};

export type TechStackItem = {
  name: string;
  icon: IconType;
};
