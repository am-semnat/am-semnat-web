import { APPS_LIVE, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";

type Props = {
  className?: string;
};

export function AppDownloadCTA({ className = "" }: Props) {
  if (APPS_LIVE && (APP_STORE_URL || PLAY_STORE_URL)) {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {APP_STORE_URL && (
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-paper hover:bg-cobalt-600 group inline-flex items-center gap-3 rounded-[3px] px-5 py-3 transition-colors"
          >
            <AppleIcon className="h-5 w-5" />
            <span className="flex flex-col leading-tight">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-70">
                Descarcă din
              </span>
              <span className="text-[15px] font-medium">App Store</span>
            </span>
          </a>
        )}
        {PLAY_STORE_URL && (
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-paper hover:bg-cobalt-600 group inline-flex items-center gap-3 rounded-[3px] px-5 py-3 transition-colors"
          >
            <PlayIcon className="h-5 w-5" />
            <span className="flex flex-col leading-tight">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-70">
                Descarcă din
              </span>
              <span className="text-[15px] font-medium">Google Play</span>
            </span>
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <div className="border-rule-strong text-ink-muted inline-flex items-center gap-3 rounded-[3px] border border-dashed px-5 py-3">
        <AppleIcon className="text-ink-faint h-5 w-5" />
        <span className="flex flex-col leading-tight">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-60">
            În curând pe
          </span>
          <span className="text-[15px] font-medium">App Store</span>
        </span>
      </div>
      <div className="border-rule-strong text-ink-muted inline-flex items-center gap-3 rounded-[3px] border border-dashed px-5 py-3">
        <PlayIcon className="text-ink-faint h-5 w-5" />
        <span className="flex flex-col leading-tight">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-60">
            În curând pe
          </span>
          <span className="text-[15px] font-medium">Google Play</span>
        </span>
      </div>
    </div>
  );
}
