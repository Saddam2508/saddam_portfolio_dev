import { SkillGroup as TSkillGroup } from "@/data/portfolioTypes";
import { SkillItem } from "./SkillItem";

type Props = {
  group: TSkillGroup;
};

export function SkillGroup({ group }: Props) {
  const isWide = group.title === "Tools & Others";

  return (
    <article
      className={`stack-card rounded-[1.8rem] border p-7 sm:p-8 ${
        isWide ? "lg:col-span-2" : ""
      }`}
    >
      <div className="space-y-8">
        <p className="stack-card-heading text-center font-mono text-xs uppercase tracking-[0.28em]">
          {group.title}
        </p>
        <div
          className={`grid grid-cols-2 gap-8 ${isWide ? "sm:grid-cols-3 lg:grid-cols-4" : ""}`}
        >
          {group.items.map((item) => (
            <SkillItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
