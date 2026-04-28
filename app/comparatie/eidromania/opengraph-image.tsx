import { ImageResponse } from "next/og";
import {
  loadOgFonts,
  OG_COBALT_ITALIC,
  OG_CONTENT_TYPE,
  OG_SIZE,
  OgFrame,
} from "@/lib/og";

export const alt =
  "AmSemnat vs eidromania.ro — alternativă open source pentru SDK CEI";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        eyebrowIndex="§C"
        eyebrowLabel="Comparație factuală"
        titleLines={[
          <>
            <span>AmSemnat&nbsp;</span>
            <span style={OG_COBALT_ITALIC}>vs</span>
          </>,
          "eidromania.ro",
        ]}
        footerMeta="Open source · €0 vs €12.000/an"
      />
    ),
    { ...OG_SIZE, fonts },
  );
}
