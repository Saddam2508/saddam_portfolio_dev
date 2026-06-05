import type { Project } from "@/data/portfolioTypes";
import { DetailSection } from "./DetailSection";

type ProjectSidebarProps = Pick<
  Project,
  "stack" | "summary" | "features" | "futurePlans"
>;

export function ProjectSidebar({
  stack,
  summary,
  features,
  futurePlans,
}: ProjectSidebarProps) {
  return (
    <div className="space-y-6">
      <DetailSection title="Main Technology Stack">
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full px-3 py-1.5 text-sm font-medium"
              style={{
                background:
                  "color-mix(in srgb, var(--color-accent) 14%, var(--surface-glass))",
                color: "var(--color-accent)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Brief Description">
        <p className="text-base leading-8 text-slate-600">{summary}</p>
      </DetailSection>

      <DetailSection title="Key Features">
        <ul className="grid gap-3 text-sm leading-7 text-slate-600">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl px-4 py-3"
              style={{
                background:
                  "color-mix(in srgb, var(--foreground) 4%, var(--surface-glass))",
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection title="Potential Improvements and Future Plans">
        <ul className="grid gap-3 text-sm leading-7 text-slate-600">
          {futurePlans.map((plan) => (
            <li
              key={plan}
              className="rounded-2xl px-4 py-3"
              style={{
                background:
                  "color-mix(in srgb, var(--foreground) 4%, var(--surface-glass))",
              }}
            >
              {plan}
            </li>
          ))}
        </ul>
      </DetailSection>
    </div>
  );
}
