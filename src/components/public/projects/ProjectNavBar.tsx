import Link from "next/link";

interface ProjectNavBarProps {
  liveUrl: string;
  repoUrl: string;
}

export function ProjectNavBar({ liveUrl, repoUrl }: ProjectNavBarProps) {
  return (
    <div
      className="rounded-[1.75rem] border px-4 py-4 backdrop-blur sm:rounded-full sm:px-5 sm:py-3"
      style={{
        borderColor: "color-mix(in srgb, var(--foreground) 10%, transparent)",
        background: "var(--surface-glass)",
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/#projects"
          className="font-mono text-sm uppercase tracking-[0.32em] text-foreground"
        >
          {"<- Back to Projects"}
        </Link>
        <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{
              background: "color-mix(in srgb, var(--foreground) 88%, black)",
            }}
          >
            Live Project
          </Link>
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-foreground"
            style={{
              borderColor:
                "color-mix(in srgb, var(--foreground) 14%, transparent)",
              background:
                "color-mix(in srgb, var(--surface-glass) 92%, transparent)",
            }}
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
