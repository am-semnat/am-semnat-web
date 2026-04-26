"use client";

import { useState } from "react";

export type CodeTab = {
  id: string;
  label: string;
  language: string;
  filename?: string;
  code: string;
};

type Props = {
  tabs: CodeTab[];
  className?: string;
  defaultId?: string;
};

export function CodeTabs({ tabs, className = "", defaultId }: Props) {
  const [activeId, setActiveId] = useState(defaultId ?? tabs[0]?.id);
  const [copied, setCopied] = useState(false);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  async function copy() {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={`bg-carbon overflow-hidden rounded-[3px] ${className}`}>
      <div className="flex items-stretch border-b border-white/[0.08]">
        <div role="tablist" className="flex min-w-0 flex-1 overflow-x-auto">
          {tabs.map((t) => {
            const isActive = t.id === active.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={`relative shrink-0 px-4 py-3 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {t.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="bg-cobalt-500 absolute right-0 bottom-0 left-0 h-px"
                  />
                )}
              </button>
            );
          })}
        </div>
        <button
          onClick={copy}
          aria-label={copied ? "Copiat" : "Copiază"}
          className="shrink-0 border-l border-white/[0.08] px-4 py-3 font-mono text-[10px] tracking-[0.18em] text-white/60 uppercase transition-colors hover:text-white"
        >
          {copied ? "Copiat" : "Copiază"}
        </button>
      </div>

      <pre className="code-scroll overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.65] text-white/90 md:text-[13px]">
        <code>{active.code}</code>
      </pre>

      {(active.filename || active.language) && (
        <div className="border-t border-white/[0.08] px-5 py-2.5 font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
          {active.filename ?? active.language}
        </div>
      )}
    </div>
  );
}
