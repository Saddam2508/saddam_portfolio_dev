import { AboutIcon } from "../aboutMe/AboutIcon";
import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/reveal-section";
import { services } from "@/data/portfolio";
export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={150}>
        <SectionHeading
          eyebrow="Services"
          title="Frontend development services I can contribute with."
          description="Core areas where I build clean interfaces, responsive layouts, and practical web experiences with modern frontend tools."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service}
              className="group rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80"
            >
              <div className="space-y-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-accent)]">
                  <AboutIcon type="spark" />
                </span>
                <p className="text-base font-semibold leading-7 text-slate-900">
                  {service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
