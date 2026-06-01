import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/reveal-section";
import { experience } from "@/data/portfolio";
export function ExperienceSection() {
  if (!experience.length) {
    return null;
  }

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
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.organization} | {item.type}
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
