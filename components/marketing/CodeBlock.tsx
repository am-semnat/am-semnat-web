import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  language?: string;
  filename?: string;
  className?: string;
};

export function CodeBlock({
  children,
  language,
  filename,
  className = "",
}: Props) {
  return (
    <div
      className={`bg-carbon group relative overflow-hidden rounded-[3px] ${className}`}
    >
      {(filename || language) && (
        <div className="border-b border-white/[0.08] px-4 py-2.5 font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
          {filename ?? language}
        </div>
      )}
      <pre className="code-scroll overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-white/90">
        <code>{children}</code>
      </pre>
    </div>
  );
}
