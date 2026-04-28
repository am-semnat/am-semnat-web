import { ImageResponse } from "next/og";
import {
  loadOgFonts,
  OG_COBALT_ITALIC,
  OG_CONTENT_TYPE,
  OG_SIZE,
  OgFrame,
} from "@/lib/og";

export const alt =
  "Aplicația AmSemnat — citește, semnează și partajează PDF-uri cu CEI-ul";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        eyebrowIndex="§A"
        eyebrowLabel="Aplicație mobilă · iOS + Android"
        titleLines={[
          "Citește, semnează,",
          <>
            <span style={OG_COBALT_ITALIC}>partajează</span>
            <span>.</span>
          </>,
        ]}
        footerMeta="Gratuit · Local-first · Fără KYC"
      />
    ),
    { ...OG_SIZE, fonts },
  );
}
