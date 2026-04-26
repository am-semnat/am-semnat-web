import { type ReactNode } from "react";
import { CornerBrackets } from "@/components/marketing/CornerBrackets";

type FeatureCardProps = {
  index?: string;
  title: ReactNode;
  body: ReactNode;
  className?: string;
  brackets?: boolean;
};

export function FeatureCard({
  index,
  title,
  body,
  className = "",
  brackets = false,
}: FeatureCardProps) {
  return (
    <article
      className={`bg-paper hover:bg-paper-elevated relative p-8 transition-colors duration-200 md:p-10 ${className}`}
    >
      {brackets && <CornerBrackets size={14} color="var(--color-ink)" />}
      {index && (
        <div className="text-cobalt-600 mb-6 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
          {index}
        </div>
      )}
      <h3 className="font-display text-ink text-[1.6rem] leading-[1.1] tracking-tight md:text-[1.75rem]">
        {title}
      </h3>
      <p className="text-ink-muted mt-4 text-[15px] leading-relaxed">{body}</p>
    </article>
  );
}
