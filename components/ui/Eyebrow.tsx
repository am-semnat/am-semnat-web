import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  index?: string;
  className?: string;
};

export function Eyebrow({ children, index, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && (
        <span className="text-cobalt-600 font-mono text-[11px] tabular-nums">
          §{index}
        </span>
      )}
      <span className="bg-rule-strong h-px w-6" aria-hidden />
      <span className="text-ink-muted font-mono text-[11px] tracking-[0.18em] uppercase">
        {children}
      </span>
    </div>
  );
}
