import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/reveal-section";
import { education } from "@/data/education";
import { Education } from "@/data/portfolioTypes";
import { EducationCard } from "./EducationCard";

export function EducationSection() {
  return (
    <section
      id="education"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={120}>
        <SectionHeading
          eyebrow="Education"
          title="My academic background in computer science and engineering."
          description="Diploma and undergraduate studies that shaped my technical foundation and long-term growth in software development."
        />

        <div className="grid gap-6">
          {education.map((item: Education) => (
            <EducationCard
              key={`${item.institution}-${item.degree}`}
              item={item}
            />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
