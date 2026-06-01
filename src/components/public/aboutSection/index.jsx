import RevealSection from "@/components/ui/reveal-section";
import { SectionHeading } from "../sectionHeading";
import { AboutIcon } from "../aboutMe/AboutIcon";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { profile } from "@/data/portfolio";
export function AboutSection() {
  const orbitIcons = [
    [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "JavaScript", icon: "javascript" },
    ],
    [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Node.js", icon: "node" },
      { name: "MongoDB", icon: "mongodb" },
    ],
    [
      { name: "Express", icon: "express" },
      { name: "GitHub", icon: "github" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "spark" },
    ],
  ];

  return (
    <section
      id="about"
      className="section-anchor px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <RevealSection
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        delay={80}
      >
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Me"
            title="Frontend React Developer focused on modern, responsive web experiences."
            description="A quick introduction to my development journey, technical focus, and the kind of user experiences I enjoy building."
          />
          <div className="atom-showcase">
            <div className="atom-showcase-grid" aria-hidden="true" />
            <div
              className="atom-showcase-glow atom-showcase-glow-one"
              aria-hidden="true"
            />
            <div
              className="atom-showcase-glow atom-showcase-glow-two"
              aria-hidden="true"
            />

            <div className="atom-stage">
              <div className="atom-nucleus" aria-hidden="true">
                <AboutIcon type="code" />
              </div>

              <OrbitingCircles iconSize={42} radius={92} speed={1.35}>
                {orbitIcons[0].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>

              <OrbitingCircles iconSize={44} radius={150} reverse speed={1.7}>
                {orbitIcons[1].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>

              <OrbitingCircles iconSize={46} radius={208} speed={1.1}>
                {orbitIcons[2].map((item) => (
                  <AboutIcon key={item.name} type={item.icon} />
                ))}
              </OrbitingCircles>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 text-base leading-8 text-slate-700 shadow-sm shadow-slate-200/70 backdrop-blur"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
