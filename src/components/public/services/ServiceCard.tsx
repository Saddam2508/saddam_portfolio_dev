import { AboutIcon } from "../aboutMe/AboutIcon";

type Props = {
  service: string;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80">
      <div className="space-y-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-accent)]">
          <AboutIcon type="spark" />
        </span>
        <p className="text-base font-semibold leading-7 text-slate-900">
          {service}
        </p>
      </div>
    </article>
  );
}
