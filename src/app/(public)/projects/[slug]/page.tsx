import { notFound } from "next/navigation";
import { profile } from "@/data/portfolio";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Project } from "@/data/portfolioTypes";
import { ProjectNavBar } from "@/components/public/projects/ProjectNavBar";
import { ProjectHero } from "@/components/public/projects/ProjectHero";
import { ProjectSidebar } from "@/components/public/projects/ProjectSidebar";

type PageParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return (projects as Project[]).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailsPage({ params }: PageParams) {
  const { slug } = await params;
  const project: Project | undefined = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="min-h-screen px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top left, var(--color-accent-soft), transparent 22%), linear-gradient(180deg, color-mix(in srgb, var(--background) 92%, white) 0%, var(--background-end) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <ProjectNavBar liveUrl={project.liveUrl} repoUrl={project.repoUrl} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ProjectHero
            category={project.category}
            name={project.name}
            description={project.description}
            image={project.image}
          />
          <ProjectSidebar
            stack={project.stack}
            summary={project.summary}
            features={project.features}
            futurePlans={project.futurePlans}
          />
        </div>
      </div>
    </main>
  );
}
