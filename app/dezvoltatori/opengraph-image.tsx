import { ImageResponse } from "next/og";
import {
  loadOgFonts,
  OG_COBALT_ITALIC,
  OG_CONTENT_TYPE,
  OG_SIZE,
  OgFrame,
} from "@/lib/og";

export const alt =
  "SDK-uri AmSemnat — open source, Apache 2.0, pe Android, iOS și Expo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        eyebrowIndex="§D"
        eyebrowLabel="SDK-uri · Maven Central · CocoaPods · npm"
        titleLines={[
          <>
            <span>SDK-uri&nbsp;</span>
            <span style={OG_COBALT_ITALIC}>open source</span>
          </>,
          "pentru CEI.",
        ]}
        footerMeta="Apache 2.0 · Trei platforme"
      />
    ),
    { ...OG_SIZE, fonts },
  );
}
