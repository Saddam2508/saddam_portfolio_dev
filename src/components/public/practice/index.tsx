import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/RevealSection";
import { practice } from "@/data/practice";
import { Practice } from "@/data/portfolioTypes";
import { PracticeCard } from "./PracticeCard";

export function PracticeSection() {
  if (!practice.length) return null;

  return (
    <section
      id="practice"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={140}>
        <SectionHeading
          eyebrow="Practice"
          title="Self-driven work that sharpened my skills as a developer."
          description="Independent projects, backend engineering, and continuous problem solving — areas where I apply and deepen my technical knowledge every day."
        />

        <div className="grid gap-6">
          {practice.map((item: Practice) => (
            <PracticeCard
              key={`${item.title}-${item.organization}`}
              item={item}
            />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
