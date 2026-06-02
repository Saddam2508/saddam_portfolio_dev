"use client";

import { useEffect, useState } from "react";
import { PortfolioStat } from "@/data/portfolioTypes";

type AnimatedNumberProps = {
  value: number;
  suffix: string;
};

function AnimatedNumber({ value, suffix }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    let frame = 0;
    const duration = 700;
    const stepTime = 16;
    const totalFrames = Math.max(1, Math.round(duration / stepTime));

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const nextValue = Math.round(value * progress);
      setDisplayValue(nextValue);

      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
      {displayValue}
      {suffix}
    </span>
  );
}

type Props = {
  stats: PortfolioStat[];
};

export default function PortfolioStats({ stats }: Props) {
  return (
    <div className="grid gap-4 min-[480px]:grid-cols-2 sm:grid-cols-3">
      {stats.map((stat: PortfolioStat) => (
        <div
          key={stat.label}
          className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-sm shadow-slate-200/70"
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
