import { ImageResponse } from "next/og";
import {
  loadOgFonts,
  OG_COBALT_ITALIC,
  OG_CONTENT_TYPE,
  OG_SIZE,
  OgFrame,
} from "@/lib/og";

export const alt =
  "AmSemnat — citește, verifică și semnează cu cartea electronică de identitate";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        eyebrowIndex="§00"
        eyebrowLabel="Carte electronică de identitate · CEI"
        titleLines={[
          <>
            <span>Semnează&nbsp;</span>
            <span style={OG_COBALT_ITALIC}>PDF&#8209;uri</span>
            <span>&nbsp;cu</span>
          </>,
          "cartea ta electronică",
          "de identitate.",
        ]}
        footerMeta="Apache 2.0 · Open source"
      />
    ),
    { ...OG_SIZE, fonts },
  );
}
