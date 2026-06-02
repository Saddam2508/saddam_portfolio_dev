import { Education } from "@/data/portfolioTypes";

type Props = {
  item: Education;
};

export function EducationCard({ item }: Props) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80">
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
            <li key={detail} className="rounded-2xl bg-slate-50 px-4 py-3">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
