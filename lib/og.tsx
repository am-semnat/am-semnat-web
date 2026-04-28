import { type ReactNode } from "react";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export const OG_PALETTE = {
  paper: "#faf9f4",
  ink: "#0e0e10",
  inkMuted: "#4a4a4f",
  ruleStrong: "#cdc8b3",
  cobalt: "#2b4ee0",
} as const;

async function loadGoogleFont(family: string, text?: string) {
  // Hand-build the URL: Google Fonts treats `+` as space and `@` as weight
  // separator, so URLSearchParams' percent-encoding would break the request.
  const textParam = text ? `&text=${encodeURIComponent(text)}` : "";
  const url = `https://fonts.googleapis.com/css2?family=${family}${textParam}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`failed to resolve font URL for ${family}`);
  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) throw new Error(`failed to download font for ${family}`);
  return fontResponse.arrayBuffer();
}

// All characters used across the OG image set. Passed to Google Fonts as
// `&text=` so each delivered font is subsetted to just these glyphs — keeps
// downloads tiny and strips OpenType substitution tables that satori can't
// parse (lookupType 6 / substFormat 1).
const OG_GLYPHS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,'\"-/+:&·§€()ăâîșțĂÂÎȘȚ";

export async function loadOgFonts() {
  const [inter, jetbrainsMono, fraunces] = await Promise.all([
    loadGoogleFont("Inter:wght@600", OG_GLYPHS),
    loadGoogleFont("JetBrains+Mono:wght@400", OG_GLYPHS),
    loadGoogleFont("Fraunces:ital,wght@1,400", OG_GLYPHS),
  ]);
  return [
    {
      name: "Inter",
      data: inter,
      style: "normal" as const,
      weight: 600 as const,
    },
    {
      name: "JetBrains Mono",
      data: jetbrainsMono,
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      name: "Fraunces",
      data: fraunces,
      style: "italic" as const,
      weight: 400 as const,
    },
  ];
}

export const OG_COBALT_ITALIC = {
  display: "flex",
  fontFamily: "Fraunces",
  fontStyle: "italic",
  fontWeight: 400,
  color: OG_PALETTE.cobalt,
} as const;

function CornerBracket({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const inset = 36;
  const len = 44;
  const stroke = 2;
  const base = {
    position: "absolute" as const,
    width: len,
    height: len,
    display: "flex",
  };
  const sides = {
    tl: {
      top: inset,
      left: inset,
      borderTop: `${stroke}px solid ${OG_PALETTE.cobalt}`,
      borderLeft: `${stroke}px solid ${OG_PALETTE.cobalt}`,
    },
    tr: {
      top: inset,
      right: inset,
      borderTop: `${stroke}px solid ${OG_PALETTE.cobalt}`,
      borderRight: `${stroke}px solid ${OG_PALETTE.cobalt}`,
    },
    bl: {
      bottom: inset,
      left: inset,
      borderBottom: `${stroke}px solid ${OG_PALETTE.cobalt}`,
      borderLeft: `${stroke}px solid ${OG_PALETTE.cobalt}`,
    },
    br: {
      bottom: inset,
      right: inset,
      borderBottom: `${stroke}px solid ${OG_PALETTE.cobalt}`,
      borderRight: `${stroke}px solid ${OG_PALETTE.cobalt}`,
    },
  } as const;
  return <div style={{ ...base, ...sides[position] }} />;
}

type OgFrameProps = {
  eyebrowIndex: string;
  eyebrowLabel: string;
  titleLines: ReactNode[];
  footerMeta: string;
  titleFontSize?: number;
};

export function OgFrame({
  eyebrowIndex,
  eyebrowLabel,
  titleLines,
  footerMeta,
  titleFontSize = 96,
}: OgFrameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: OG_PALETTE.paper,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${OG_PALETTE.ruleStrong} 1px, transparent 0)`,
        backgroundSize: "28px 28px",
        padding: "88px 96px",
        color: OG_PALETTE.ink,
        position: "relative",
        fontFamily: "Inter",
      }}
    >
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontFamily: "JetBrains Mono",
          fontSize: 22,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: OG_PALETTE.inkMuted,
        }}
      >
        <span style={{ color: OG_PALETTE.cobalt }}>{eyebrowIndex}</span>
        <span
          style={{
            display: "flex",
            width: 80,
            height: 1,
            backgroundColor: OG_PALETTE.ruleStrong,
          }}
        />
        <span>{eyebrowLabel}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
          fontSize: titleFontSize,
          lineHeight: 1,
          letterSpacing: "-0.025em",
          fontWeight: 600,
          color: OG_PALETTE.ink,
        }}
      >
        {titleLines.map((line, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 48,
          fontFamily: "JetBrains Mono",
          fontSize: 20,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: OG_PALETTE.inkMuted,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 7,
                height: 7,
                borderTop: `1.5px solid ${OG_PALETTE.cobalt}`,
                borderLeft: `1.5px solid ${OG_PALETTE.cobalt}`,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 7,
                height: 7,
                borderTop: `1.5px solid ${OG_PALETTE.cobalt}`,
                borderRight: `1.5px solid ${OG_PALETTE.cobalt}`,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 7,
                height: 7,
                borderBottom: `1.5px solid ${OG_PALETTE.cobalt}`,
                borderLeft: `1.5px solid ${OG_PALETTE.cobalt}`,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 7,
                height: 7,
                borderBottom: `1.5px solid ${OG_PALETTE.cobalt}`,
                borderRight: `1.5px solid ${OG_PALETTE.cobalt}`,
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 24,
                lineHeight: 1,
                letterSpacing: "0",
                textTransform: "none",
                color: OG_PALETTE.ink,
                transform: "translateY(-3px)",
              }}
            >
              a
            </span>
          </div>
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              color: OG_PALETTE.ink,
            }}
          >
            amsemnat.ro
          </span>
        </div>
        <span>{footerMeta}</span>
      </div>
    </div>
  );
}
