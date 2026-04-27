import { CornerBrackets } from "./CornerBrackets";

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="border-rule-strong bg-paper-muted relative h-full w-full overflow-hidden border">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          aria-hidden
        >
          <defs>
            <pattern
              id="hero-dots"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="0.5" cy="0.5" r="0.5" fill="#0e0e10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        <CornerBrackets
          size={26}
          color="#0e0e1055"
          inset={-6}
          strokeWidth={1}
        />

        <div
          className="absolute top-1/2 left-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />
        <div
          className="absolute top-1/2 left-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />

        <div className="absolute top-6 right-6 left-6 flex items-start justify-between font-mono text-[9px] tracking-[0.22em] text-[#0e0e10]/55 uppercase">
          <span>SDK / v0.1.x</span>
          <span>RO · CEI · NFC</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex aspect-square w-[12rem] items-center justify-center md:w-[14rem]">
            <CornerBrackets
              size={20}
              color="var(--color-cobalt-500)"
              inset={4}
              strokeWidth={1.25}
            />
            <span className="font-display text-ink translate-y-[-0.12em] text-[9rem] leading-none italic md:text-[10.5rem]">
              a
            </span>
          </div>
        </div>

        <div className="absolute right-6 bottom-16 left-6 space-y-1 font-mono text-[9px] tracking-[0.28em] text-[#0e0e10]/45 uppercase">
          <div className="truncate">
            P&lt;ROUAMSEMNAT&lt;&lt;OPEN&lt;SOURCE&lt;EID&lt;TOOLKIT&lt;&lt;&lt;
          </div>
          <div className="truncate">
            0 1 0 0 1 R O U 9 9 0 1 0 1 F 9 9 0 1 0 1 0 6 &lt;&lt;&lt;&lt;
          </div>
          <div className="truncate">
            ICAO &middot; 9 3 0 3 &nbsp;&nbsp; eIDAS &middot; PAdES &nbsp;&nbsp;
            APACHE &middot; 2.0
          </div>
        </div>

        <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between font-mono text-[9px] tracking-[0.22em] text-[#0e0e10]/55 uppercase">
          <span>signed · București</span>
          <span>open / source</span>
        </div>

        <div
          className="absolute top-4 left-1/2 h-3 w-px -translate-x-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />
        <div
          className="absolute bottom-4 left-1/2 h-3 w-px -translate-x-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />
        <div
          className="absolute top-1/2 left-4 h-px w-3 -translate-y-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />
        <div
          className="absolute top-1/2 right-4 h-px w-3 -translate-y-1/2 bg-[#0e0e10]/30"
          aria-hidden
        />
      </div>
    </div>
  );
}
