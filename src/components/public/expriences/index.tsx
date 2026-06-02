import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/reveal-section";
import { experience } from "@/data/experience";
import { Experience } from "@/data/portfolioTypes";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  if (!experience.length) return null;

  return (
    <section
      id="experience"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={140}>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience that strengthened my technical and communication skills."
          description="Hands-on roles where I worked with software implementation, client support, troubleshooting, and service communication."
        />

        <div className="grid gap-6">
          {experience.map((item: Experience) => (
            <ExperienceCard
              key={`${item.title}-${item.organization}`}
              item={item}
            />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
