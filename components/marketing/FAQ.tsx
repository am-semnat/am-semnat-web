import { type ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type Props = {
  items: FaqItem[];
  className?: string;
};

export function FAQ({ items, className = "" }: Props) {
  return (
    <div
      className={`border-rule-strong divide-rule divide-y border-y ${className}`}
    >
      {items.map((item, i) => (
        <details
          key={i}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="hover:bg-paper-muted flex cursor-pointer items-start justify-between gap-6 py-6 transition-colors">
            <div className="flex flex-1 items-baseline gap-4">
              <span className="text-cobalt-600 font-mono text-[11px] tracking-[0.18em] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink text-[15px] leading-snug font-medium md:text-[17px]">
                {item.question}
              </span>
            </div>
            <span
              aria-hidden
              className="text-ink-muted mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center font-mono text-[14px] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="text-ink-muted pr-10 pb-7 pl-[calc(11px+1rem)] text-[14px] leading-relaxed md:text-[15px]">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
