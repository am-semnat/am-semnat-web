"use client";

import { useState } from "react";
import { PACKAGES, type SdkPackage } from "@/lib/packages";

type Props = {
  className?: string;
  defaultId?: SdkPackage["id"];
};

export function InstallSnippet({ className = "", defaultId = "expo" }: Props) {
  const [activeId, setActiveId] = useState<SdkPackage["id"]>(defaultId);
  const [copied, setCopied] = useState(false);
  const active = PACKAGES.find((p) => p.id === activeId) ?? PACKAGES[0];

  async function copy() {
    try {
      await navigator.clipboard.writeText(active.installLine);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={`bg-carbon overflow-hidden rounded-[3px] ${className}`}
    >
      <div className="flex items-stretch border-b border-white/[0.08]">
        <div
          role="tablist"
          aria-label="Selectează pachet"
          className="flex min-w-0 flex-1 overflow-x-auto"
        >
          {PACKAGES.map((p) => {
            const isActive = p.id === active.id;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`install-panel-${p.id}`}
                onClick={() => setActiveId(p.id)}
                className={`relative shrink-0 px-4 py-3 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {p.tabLabel ?? p.label}
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

      <div
        id={`install-panel-${active.id}`}
        role="tabpanel"
      >
        <pre className="code-scroll overflow-x-auto px-4 py-5 font-mono text-[13px] leading-relaxed text-white/90 md:text-[14px]">
          <code>
            <span className="text-white/35 select-none">$ </span>
            {active.installLine}
          </code>
        </pre>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase">
        <span className="truncate">{active.coordinates}</span>
        <span className="shrink-0 text-white/55">v {active.version}</span>
      </div>
    </div>
  );
}
