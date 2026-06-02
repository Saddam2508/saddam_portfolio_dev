import Image from "next/image";
import Link from "next/link";
import HeroDesignation from "@/components/ui/hero-designation";
import PortfolioStats from "@/components/ui/portfolio-stats";
import { portfolioStats, profile, socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-22 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-16 pt-6 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-18">
          <div className="space-y-8">
            <div className="hero-chip inline-flex max-w-full items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[0.68rem] text-slate-700 shadow-sm shadow-orange-100/80 backdrop-blur min-[420px]:gap-3 min-[420px]:px-4 min-[420px]:text-xs sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              {profile.heroBadge}
            </div>

            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                <HeroDesignation
                  items={profile.rotatingDesignations}
                  fallback={profile.designation}
                />
              </p>
              <h1 className="hero-title max-w-none text-[2.2rem] font-semibold leading-[0.98] tracking-tight text-slate-950 min-[420px]:text-[2.65rem] sm:text-5xl lg:text-6xl">
                {profile.headlineLines.map((line) => (
                  <span key={line} className="block sm:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-copy max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-xl">
                {profile.intro}
              </p>
            </div>

            <div className="hero-actions flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="#projects"
                className="button-hover-primary hero-primary-button inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="button-hover-secondary inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
              >
                Contact Me
              </Link>
              <Link
                href={profile.resumeUrl}
                target={
                  profile.resumeUrl.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  profile.resumeUrl.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="button-hover-soft inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
              >
                Download Resume
              </Link>
            </div>

            <div className="hero-social flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-hover-soft inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  <span className="font-medium">{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-[var(--color-accent)]"
                  >
                    {"->"}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hero-stats">
              <PortfolioStats stats={portfolioStats} />
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-sm sm:max-w-md">
            <div className="orb-float-a absolute -left-6 top-8 h-32 w-32 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
            <div className="orb-float-b absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-[var(--color-sky-soft)] blur-3xl" />
            <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.88),rgba(255,247,237,0.9))] p-4 shadow-[0_30px_80px_rgba(148,163,184,0.28)] backdrop-blur sm:p-5">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-2 shadow-sm shadow-slate-200/60">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  width={720}
                  height={860}
                  priority
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {profile.heroFocus}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Currently Learning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {profile.heroLearning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
