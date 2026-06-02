"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/portfolioTypes";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [projects],
  );

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`button-hover-filter rounded-full px-4 py-2 text-sm font-semibold ${
                isActive
                  ? "filter-button-active"
                  : "border border-slate-300 bg-white/80 text-slate-700 hover:border-slate-950"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
