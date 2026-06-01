import { AboutIcon } from "../aboutMe/AboutIcon";
import RevealSection from "@/components/ui/reveal-section";
import { skillsStackGroups } from "@/data/portfolio";

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
          {skillsStackGroups.map((group) => (
            <article
              key={group.title}
              className={`stack-card rounded-[1.8rem] border p-7 sm:p-8 ${
                group.title === "Tools & Others" ? "lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-8">
                <p className="stack-card-heading text-center font-mono text-xs uppercase tracking-[0.28em]">
                  {group.title}
                </p>

                <div
                  className={`grid grid-cols-2 gap-8 ${
                    group.title === "Tools & Others"
                      ? "sm:grid-cols-3 lg:grid-cols-4"
                      : ""
                  }`}
                >
                  {group.items.map((item) => (
                    <div key={item.name} className="space-y-3 text-center">
                      <span className="stack-card-icon mx-auto">
                        <AboutIcon type={item.icon} />
                      </span>
                      <p className="stack-card-label text-sm font-semibold sm:text-base">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
