import RevealSection from "@/components/ui/reveal-section";
import { skillsStackGroups } from "@/data/skills";
import { SkillGroup as TSkillGroup } from "@/data/portfolioTypes";
import { SkillGroup } from "./SkillGroup";

export function SkillsStackSection() {
  return (
    <section
      id="skills"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={120}>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Skills &amp;{" "}
            <span className="text-[var(--color-accent)]">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Technologies I use for building web applications
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillsStackGroups.map((group: TSkillGroup) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
