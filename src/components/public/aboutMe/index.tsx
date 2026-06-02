import { AboutIcon } from "./AboutIcon";
import RevealSection from "@/components/ui/reveal-section";
import { techStackShowcase } from "@/data/techStack";
import { TechStackItem } from "./aboutMeTypes";

export function TechStackSection() {
  return (
    <section className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={100}>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tech <span className="text-[var(--color-accent)]">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tools &amp; technologies I use
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStackShowcase.map((item: TechStackItem) => (
            <article
              key={item.name}
              className="stack-card stack-card-tile flex min-h-32 items-center justify-center rounded-[1.5rem] border p-6 text-center"
            >
              <div className="space-y-3">
                <span className="stack-card-icon mx-auto">
                  <AboutIcon type={item.icon} />
                </span>
                <p className="stack-card-label text-sm font-semibold sm:text-base">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
