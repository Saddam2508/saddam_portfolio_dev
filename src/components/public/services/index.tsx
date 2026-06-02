import { SectionHeading } from "../sectionHeading";
import RevealSection from "@/components/ui/RevealSection";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

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
          {services.map((service: string) => (
            <ServiceCard key={service} service={service} />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
