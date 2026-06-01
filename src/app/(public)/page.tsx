import SiteFooter from "@/components/public/footer";
import { Hero } from "@/components/public/hero";
import { TechStackSection } from "@/components/public/aboutMe";
import { SkillsStackSection } from "@/components/public/skill";
import { AboutSection } from "@/components/public/aboutSection";
import { EducationSection } from "@/components/public/educationSection";
import { ServicesSection } from "@/components/public/services";
import { ProjectsSection } from "@/components/public/projects";
import { ContactSection } from "@/components/public/contact";
import { PracticeSection } from "@/components/public/practice";

export default function Home(): React.JSX.Element {
  return (
    <main className="relative flex-1 overflow-x-hidden">
      <div className="background-base pointer-events-none absolute inset-0 -z-30" />
      <div className="background-grid pointer-events-none absolute inset-0 -z-20 opacity-50" />
      <div className="ambient-orb ambient-orb-one pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full" />
      <div className="ambient-orb ambient-orb-two pointer-events-none absolute right-[-6rem] top-[28rem] -z-10 h-80 w-80 rounded-full" />
      <div className="ambient-orb ambient-orb-three pointer-events-none absolute left-1/3 top-[70rem] -z-10 h-64 w-64 rounded-full" />
      <Hero />
      <AboutSection />
      <TechStackSection />
      <SkillsStackSection />
      <EducationSection />
      <PracticeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
