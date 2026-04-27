import Link from "next/link";
import { Container } from "./Container";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { FOOTER_NAV } from "@/lib/nav";
import { GITHUB_ORG_URL, SITE_NAME } from "@/lib/site";

function AiTransparencyLine() {
  return (
    <p className="max-w-xl sm:text-right">
      Construit cu AI ca partener de cod și factor uman pe deciziile de
      securitate.{" "}
      <Link
        href="/cum-construim"
        className="text-ink-muted hover:text-ink underline decoration-1 underline-offset-4 transition-colors"
      >
        Cum construim →
      </Link>
    </p>
  );
}

export function Footer() {
  return (
    <footer className="border-rule mt-32 border-t">
      <div className="border-rule border-b">
        <Container className="py-12 md:py-16">
          <div className="flex flex-col items-start gap-y-8 sm:flex-row sm:items-end sm:justify-between sm:gap-x-6 sm:gap-y-0">
            <div
              aria-hidden
              className="font-display text-ink -mt-[0.36em] -mb-[0.1em] text-[clamp(3.5rem,17vw,11rem)] leading-[0.85] tracking-[-0.04em] italic"
            >
              amsemnat
            </div>
            <ul className="text-ink-faint space-y-1 font-mono text-[10px] tracking-[0.22em] uppercase sm:text-right">
              <li>est. 2026</li>
              <li>open · source</li>
              <li>apache · 2.0</li>
              <li>românia</li>
            </ul>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-ink-faint mb-4 font-mono text-[10px] tracking-[0.22em] uppercase">
            Index
          </div>
          <p className="text-ink-muted max-w-[28ch] text-[13px] leading-relaxed">
            Citește, verifică și semnează cu cartea electronică de identitate.
            Aplicație și SDK-uri open source.
          </p>
        </div>

        {FOOTER_NAV.map((col) => (
          <div key={col.title}>
            <div className="text-ink-faint mb-4 font-mono text-[10px] tracking-[0.22em] uppercase">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink hover:text-cobalt-600 text-[14px] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {col.title === "Legal" && (
                <li>
                  <a
                    href={GITHUB_ORG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-cobalt-600 inline-flex items-center gap-1.5 text-[14px] transition-colors"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-rule border-t">
        <Container className="text-ink-faint flex flex-col gap-3 py-6 font-mono text-[10px] tracking-[0.18em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} · {SITE_NAME} · București
          </p>
          <AiTransparencyLine />
        </Container>
      </div>
    </footer>
  );
}
