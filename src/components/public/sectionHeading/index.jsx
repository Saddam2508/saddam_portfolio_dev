export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}