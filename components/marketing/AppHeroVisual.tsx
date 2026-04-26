import { CornerBrackets } from "./CornerBrackets";

export function AppHeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="border-rule-strong bg-paper-muted relative h-full w-full overflow-hidden border">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          aria-hidden
        >
          <defs>
            <pattern
              id="app-dots"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="0.5" cy="0.5" r="0.5" fill="#0e0e10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#app-dots)" />
        </svg>

        <CornerBrackets size={26} color="#0e0e10" inset={-1} strokeWidth={1} />

        <div className="absolute top-4 right-4 left-4 flex items-start justify-between font-mono text-[9px] tracking-[0.22em] text-[#0e0e10]/55 uppercase">
          <span>app · v1</span>
          <span>iOS · Android</span>
        </div>

        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 md:inset-x-12">
          <div className="border-rule-strong bg-paper-elevated relative aspect-[9/16] mx-auto w-[68%] max-w-[180px] overflow-hidden rounded-[18px] border shadow-[0_20px_40px_-20px_rgba(14,14,16,0.18)] md:max-w-[200px]">
            <CornerBrackets
              size={10}
              color="var(--color-cobalt-500)"
              inset={6}
              strokeWidth={1}
            />
            <div className="border-rule flex items-center justify-between border-b px-3 py-2">
              <span className="font-mono text-[7px] tracking-[0.2em] text-ink-faint uppercase">
                amsemnat
              </span>
              <span className="bg-cobalt-500 inline-block h-1 w-1 rounded-full" />
            </div>
            <div className="space-y-1.5 px-3 py-3">
              <div className="bg-ink/[0.08] h-1 rounded-full" />
              <div className="bg-ink/[0.08] h-1 w-[88%] rounded-full" />
              <div className="bg-ink/[0.08] h-1 w-[72%] rounded-full" />
            </div>
            <div className="px-3">
              <div className="border-rule rounded-[6px] border bg-white/60 p-2.5">
                <div className="text-cobalt-600 font-mono text-[6.5px] tracking-[0.18em] uppercase">
                  document.pdf
                </div>
                <div className="bg-ink/10 mt-1.5 h-px" />
                <div className="mt-2 space-y-1">
                  <div className="bg-ink/[0.08] h-0.5 rounded-full" />
                  <div className="bg-ink/[0.08] h-0.5 w-[80%] rounded-full" />
                  <div className="bg-ink/[0.08] h-0.5 w-[65%] rounded-full" />
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="border-cobalt-500 inline-block h-2 w-2 rounded-full border-2" />
                  <span className="text-ink-muted font-mono text-[6.5px] tracking-[0.16em] uppercase">
                    apropie cei
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute right-3 bottom-3 left-3">
              <div className="bg-ink rounded-[6px] py-1.5 text-center font-mono text-[7px] tracking-[0.2em] text-white uppercase">
                Semnează
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 left-4 space-y-1 font-mono text-[9px] tracking-[0.22em] text-[#0e0e10]/45 uppercase">
          <div>NFC · PACE-CAN · eDATA · PAdES</div>
        </div>
      </div>
    </div>
  );
}
