import ProjectGrid from "@/components/ui/ProjectGrid";
import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/RevealSection";
import { projects } from "@/data/projects";
import { Project } from "@/data/portfolioTypes";

type Props = {
  projects: Project[];
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={160}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects built with React and modern web technologies."
          description="A collection of responsive applications focused on usability, clean structure, reusable components, and practical problem solving."
        />

        <ProjectGrid projects={projects} />
      </RevealSection>
    </section>
  );
}
