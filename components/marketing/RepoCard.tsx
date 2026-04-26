import { GitHubIcon } from "@/components/icons/GitHubIcon";
import type { SdkPackage } from "@/lib/packages";

type Props = {
  pkg: SdkPackage;
};

export function RepoCard({ pkg }: Props) {
  return (
    <article className="group bg-paper hover:bg-paper-elevated relative flex flex-col p-7 transition-colors duration-200 md:p-8">
      <div className="flex items-start justify-between">
        <div className="text-cobalt-600 font-mono text-[10px] tracking-[0.2em] uppercase">
          {pkg.registry}
        </div>
        <span className="text-ink-faint font-mono text-[10px] tabular-nums">
          v {pkg.version}
        </span>
      </div>

      <h3 className="font-display text-ink mt-5 text-[1.5rem] leading-[1.1] tracking-tight md:text-[1.75rem]">
        {pkg.label}
      </h3>

      <p className="text-ink-muted mt-2 font-mono text-[12px] tracking-tight">
        {pkg.coordinates}
      </p>

      <div className="border-rule mt-6 flex items-center gap-4 border-t pt-5 text-[13px]">
        <a
          href={pkg.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-cobalt-600 inline-flex items-center gap-1.5 transition-colors"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          GitHub
        </a>
        <span aria-hidden className="text-ink-faint">
          ·
        </span>
        <a
          href={pkg.registryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-ink transition-colors"
        >
          {pkg.registry} ↗
        </a>
      </div>
    </article>
  );
}
