import { type ReactNode } from "react";

type Tone = "neutral" | "cobalt" | "outline";

type Props = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

const tones: Record<Tone, string> = {
  neutral: "bg-ink/[0.06] text-ink-muted",
  cobalt: "bg-cobalt-50 text-cobalt-700",
  outline: "border border-rule-strong text-ink-muted bg-transparent",
};

export function Badge({ children, tone = "neutral", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[2px] px-2 py-1 font-mono text-[10px] tracking-[0.16em] uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
