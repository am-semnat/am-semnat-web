import Script from "next/script";
import { PLAUSIBLE_DOMAIN } from "@/lib/site";

export function PlausibleScript() {
  if (!PLAUSIBLE_DOMAIN) return null;
  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
