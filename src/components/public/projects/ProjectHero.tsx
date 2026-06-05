import Image from "next/image";
import type { Project } from "@/data/portfolioTypes";

type ProjectHeroProps = Pick<
  Project,
  "category" | "name" | "description" | "image"
>;

export function ProjectHero({
  category,
  name,
  description,
  image,
}: ProjectHeroProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {category}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {name}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>

      <div
        className="overflow-hidden rounded-[2rem] border p-3"
        style={{
          borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
          background: "var(--surface-glass)",
          boxShadow: "0 24px 60px rgba(148, 163, 184, 0.12)",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={1200}
          height={720}
          priority
          className="h-auto w-full rounded-[1.5rem] object-cover"
        />
      </div>
    </div>
  );
}
