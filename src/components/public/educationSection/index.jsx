import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/reveal-section";
import { education } from "@/data/portfolio";

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
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="text-base text-slate-700">{item.institution}</p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {detail}
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
