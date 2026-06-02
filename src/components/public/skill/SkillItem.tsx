import { AboutIcon } from "../aboutMe/AboutIcon";
import { SkillItem as TSkillItem } from "@/data/portfolioTypes";

type Props = {
  item: TSkillItem;
};

export function SkillItem({ item }: Props) {
  return (
    <div className="space-y-3 text-center">
      <span className="stack-card-icon mx-auto">
        <AboutIcon type={item.icon} />
      </span>
      <p className="stack-card-label text-sm font-semibold sm:text-base">
        {item.name}
      </p>
    </div>
  );
}
