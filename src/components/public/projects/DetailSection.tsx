import type { ReactNode } from "react";

interface DetailSectionProps {
  title: string;
  children: ReactNode;
}

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section
      className="rounded-[2rem] border p-6"
      style={{
        borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        background: "var(--surface-glass)",
        boxShadow: "0 24px 60px rgba(148, 163, 184, 0.12)",
      }}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
